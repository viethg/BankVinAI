#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Pipeline Bóc Tách & Sinh Đáp Án Offline (scripts/build_data.py)
--------------------------------------------------------------
Chức năng:
1. Đọc và bóc tách cấu trúc 15 file dữ liệu bài học Day01 -> Day15.
2. Tiền tính toán (Pre-computation) đáp án đúng & giải thích súc tích bằng LLM
   (DeepSeek hoặc OpenRouter qua chuẩn OpenAI SDK).
3. Cơ chế Checkpoint/Resume: Lưu cache từng câu vào data/answers_cache.json.
4. Budget Guard & Early Abort: Theo dõi chi phí thực tế từng token,
   dự báo chi phí còn lại sau mỗi mốc câu hỏi, TỰ ĐỘNG DỪNG VÀ BÁO CÁO nếu
   ước tính chi phí có nguy cơ vượt hạn mức ngân sách an toàn.
5. Xuất bộ dữ liệu tĩnh ra app/data/courses_data.json và app/data/days/*.json.
"""

import os
import sys
import glob
import json
import time
import argparse
import threading
from pathlib import Path
from dotenv import load_dotenv
from concurrent.futures import ThreadPoolExecutor, as_completed

# Đảm bảo mã hóa UTF-8 trên Windows console
if sys.platform.startswith('win'):
    sys.stdout.reconfigure(encoding='utf-8')
    sys.stderr.reconfigure(encoding='utf-8')

load_dotenv()

# Đường dẫn mặc định
BASE_DIR = Path(__file__).resolve().parent.parent
DATA_DIR = BASE_DIR / "data"
APP_DATA_DIR = BASE_DIR / "app" / "data"
APP_DAYS_DIR = APP_DATA_DIR / "days"
CACHE_FILE = DATA_DIR / "answers_cache.json"

# Bảng giá chuẩn cho DeepSeek V3 (USD / token)
# Giá: $0.27/1M input miss, $0.07/1M input hit, $1.10/1M output
DEEPSEEK_COST = {
    "prompt_miss": 0.27 / 1_000_000,
    "prompt_hit": 0.07 / 1_000_000,
    "completion": 1.10 / 1_000_000
}

# Tiêu đề chuẩn hóa thân thiện theo đúng 15 file Day01 -> Day15
DAY_TITLES = {
    "day01": "Nền tảng LLM API, Token & Cơ chế Transformer",
    "day02": "AI Product & Ứng dụng LLM trong Sản phẩm",
    "day03": "Chatbot vs ReAct Agent & Phân bổ Năng lực",
    "day04": "Prompt Engineering & Kỹ thuật Tool Calling",
    "day05": "Kiến trúc Agent & Luồng Quyết định",
    "day06": "Reasoning & Cơ chế Bộ nhớ của Agent",
    "day07": "Data Foundations, Embedding & Vector Store",
    "day08": "RAG Pipeline & Kỹ thuật Tìm kiếm Ngữ nghĩa",
    "day09": "Multi-Agent MCP & Giao thức Agent-to-Agent (A2A)",
    "day10": "Data Pipeline Observability & Theo dõi Hệ thống",
    "day11": "Guardrails, HITL & AI Safety (VinBank)",
    "day12": "Cloud Services & Triển khai Ứng dụng LLM",
    "day13": "Monitoring, Logging & Vận hành LLMOps",
    "day14": "AI Evaluation, Trích xuất Metrics & Benchmarking",
    "day15": "Triển khai Thực tế & Định hướng Dự án AI"
}

# System prompt súc tích, tối ưu token tối đa
SYSTEM_PROMPT = """Bạn là chuyên gia chấm thi và xây dựng học liệu AI/LLM.
Dựa DUY NHẤT vào Kiến thức chuẩn và Gợi ý bẫy được cung cấp, hãy xác định đáp án đúng tuyệt đối và viết 1-2 câu giải thích súc tích, chính xác.

Yêu cầu xuất ra định dạng JSON thuần túy (không markdown, không thừa chữ):
{
  "answer": <đáp án chuẩn hóa theo đúng loại câu hỏi>,
  "explanation": "<1-2 câu giải thích súc tích lý do chọn đáp án này>"
}

Quy ước "answer":
- single_select: danh sách 1 mã lựa chọn đúng, ví dụ: ["a"]
- multi_select: danh sách các mã lựa chọn đúng, ví dụ: ["b", "d"]
- matching: object ánh xạ id bên trái sang id bên phải, ví dụ: {"x1": "r2", "x2": "r1"}
- ordering: danh sách option_id theo đúng thứ tự logic, ví dụ: ["o3", "o1", "o2"]
- numeric_input: object {"value": <số đáp án>, "unit": "<đơn vị nếu có>"}
- short_text: object {"key_points": ["ý chính 1 (ngắn gọn)", "ý chính 2"], "sample_answer": "câu trả lời mẫu 1-2 câu ngắn gọn"}
"""


def load_cache():
    """Tải cache câu hỏi đã giải."""
    if CACHE_FILE.exists():
        try:
            with open(CACHE_FILE, "r", encoding="utf-8") as f:
                return json.load(f)
        except Exception as e:
            print(f"[Cảnh báo] Lỗi đọc file cache: {e}. Tạo cache mới.")
    return {}


def save_cache(cache_data):
    """Lưu cache câu hỏi."""
    DATA_DIR.mkdir(parents=True, exist_ok=True)
    with open(CACHE_FILE, "w", encoding="utf-8") as f:
        json.dump(cache_data, f, ensure_ascii=False, indent=2)


def get_llm_client():
    """Khởi tạo OpenAI client tương thích DeepSeek hoặc OpenRouter."""
    provider = os.getenv("LLM_PROVIDER", "deepseek").lower()
    from openai import OpenAI

    if provider == "openrouter":
        api_key = os.getenv("OPENROUTER_API_KEY")
        base_url = os.getenv("OPENROUTER_BASE_URL", "https://openrouter.ai/api/v1")
        model = os.getenv("OPENROUTER_MODEL", "google/gemini-2.0-flash-001")
    else:
        api_key = os.getenv("DEEPSEEK_API_KEY")
        base_url = os.getenv("DEEPSEEK_BASE_URL", "https://api.deepseek.com")
        model = os.getenv("DEEPSEEK_MODEL", "deepseek-chat")

    if not api_key:
        raise ValueError(f"Thiếu API Key cho provider [{provider}] trong file .env!")

    client = OpenAI(api_key=api_key, base_url=base_url)
    return client, model, provider


def calculate_cost(usage, provider):
    """Tính toán chi phí chính xác dựa vào token usage."""
    if not usage:
        return 0.0, 0, 0, 0
    hit = getattr(usage, "prompt_cache_hit_tokens", 0) or 0
    total_prompt = getattr(usage, "prompt_tokens", 0) or 0
    miss = max(0, total_prompt - hit)
    completion = getattr(usage, "completion_tokens", 0) or 0

    if provider == "deepseek":
        cost = (miss * DEEPSEEK_COST["prompt_miss"]) + \
               (hit * DEEPSEEK_COST["prompt_hit"]) + \
               (completion * DEEPSEEK_COST["completion"])
    else:
        # Tạm tính tương đương nếu là openrouter
        cost = (total_prompt * (0.15 / 1_000_000)) + (completion * (0.60 / 1_000_000))

    return cost, hit, miss, completion


def extract_compact_interaction(inter):
    """Lọc bỏ các metadata trình bày thừa để tiết kiệm token tối đa."""
    compact = {"prompt": inter.get("prompt", "")}
    itype = inter.get("type", "")
    compact["type"] = itype

    if "choices" in inter:
        compact["choices"] = [
            {"choice_id": c.get("choice_id"), "text": c.get("text")}
            for c in inter.get("choices", [])
        ]
    if "left" in inter:
        compact["left"] = [
            {"id": x.get("id"), "text": x.get("text")}
            for x in inter.get("left", [])
        ]
    if "right" in inter:
        compact["right"] = [
            {"id": r.get("id"), "text": r.get("text")}
            for r in inter.get("right", [])
        ]
    if "options" in inter:
        compact["options"] = [
            {"option_id": o.get("option_id"), "text": o.get("text")}
            for o in inter.get("options", [])
        ]
    if "required_unit" in inter:
        compact["required_unit"] = inter.get("required_unit")

    return compact


def solve_question(client, model, provider, question, kc_dict):
    """Gọi LLM sinh đáp án và lời giải thích cho 1 câu hỏi."""
    qid = question.get("question_id")
    primary_kc_id = question.get("primary_kc_id")
    kc = kc_dict.get(primary_kc_id, {})
    kc_text = kc.get("knowledge", "")
    hints_text = "; ".join([h.get("text", "") for h in question.get("hints", [])])
    inter = question.get("interaction", {})
    itype = inter.get("type")

    compact_inter = extract_compact_interaction(inter)

    user_prompt = f"""[KIẾN THỨC CHUẨN]:
{kc_text}

[GỢI Ý TRÁNH BẪY]:
{hints_text}

[LOẠI CÂU HỎI]: {itype}
[NỘI DUNG]:
{json.dumps(compact_inter, ensure_ascii=False)}"""

    max_retries = 3
    for attempt in range(max_retries):
        try:
            resp = client.chat.completions.create(
                model=model,
                messages=[
                    {"role": "system", "content": SYSTEM_PROMPT},
                    {"role": "user", "content": user_prompt}
                ],
                temperature=0.0,
                response_format={"type": "json_object"}
            )
            raw_text = resp.choices[0].message.content.strip()
            parsed = json.loads(raw_text)

            cost, hit, miss, completion = calculate_cost(resp.usage, provider)

            # Đảm bảo cấu trúc chuẩn
            answer = parsed.get("answer")
            explanation = parsed.get("explanation", "")

            # Chuẩn hóa kiểu single_select / multi_select
            if itype in ["single_select", "multi_select"]:
                if isinstance(answer, str):
                    answer = [answer]
                elif not isinstance(answer, list):
                    answer = list(answer) if answer else []

            return {
                "question_id": qid,
                "answer": answer,
                "explanation": explanation,
                "token_usage": {
                    "prompt_hit": hit,
                    "prompt_miss": miss,
                    "completion": completion,
                    "cost_usd": cost
                }
            }, cost
        except Exception as e:
            if attempt < max_retries - 1:
                time.sleep(1.5 * (attempt + 1))
            else:
                raise RuntimeError(f"Lỗi khi giải câu hỏi {qid}: {e}")


def parse_day_file(file_path):
    """Đọc và bóc tách metadata, groups, KCs, questions từ file Day*.md."""
    with open(file_path, "r", encoding="utf-8") as f:
        data = json.load(f)

    file_stem = Path(file_path).stem  # Day01, Day02...
    day_num = file_stem.lower().replace("day", "")
    day_label = f"Day {day_num}"  # Day 01, Day 02...
    pub_code = data.get("public_code", "")
    lesson = data.get("lesson", {})
    lesson_title = lesson.get("title", file_stem)

    # Tìm tên lab nếu có
    lab_title = ""
    for m in lesson.get("modules", []):
        if m.get("kind") == "lab" or "lab" in m.get("title", "").lower():
            lab_title = m.get("title", "")
            break

    friendly_title = DAY_TITLES.get(file_stem.lower()) or lab_title or lesson_title

    kc_quiz = data.get("kc_quiz", {})
    groups = kc_quiz.get("groups", [])
    kcs = kc_quiz.get("knowledge_components", [])
    questions = kc_quiz.get("questions", [])

    return {
        "day_id": file_stem.lower(),  # day01, day02...
        "day_label": day_label,        # Day 01, Day 02...
        "file_name": Path(file_path).name,
        "public_code": pub_code,
        "title": friendly_title,
        "raw_title": lesson_title,
        "lab_title": lab_title,
        "groups": groups,
        "knowledge_components": kcs,
        "questions": questions
    }


def main():
    parser = argparse.ArgumentParser(description="Pipeline bóc tách và sinh đáp án offline")
    parser.add_argument("--days", nargs="*", help="Chỉ định danh sách Day cần chạy (vd: Day01 Day02)")
    parser.add_argument("--all", action="store_true", help="Chạy toàn bộ 15 Day")
    parser.add_argument("--limit-per-day", type=int, default=None, help="Giới hạn số câu mỗi Day để kiểm tra")
    parser.add_argument("--concurrency", type=int, default=8, help="Số luồng chạy song song (mặc định: 8)")
    parser.add_argument("--max-budget", type=float, default=None, help="Ngưỡng ngân sách an toàn cứng (USD)")
    parser.add_argument("--budget-interval", type=int, default=10, help="Chu kỳ kiểm tra & dự báo chi phí (số câu)")
    parser.add_argument("--export-only", action="store_true", help="Chỉ xuất dữ liệu tĩnh từ cache ra web app")
    parser.add_argument("--dry-run", action="store_true", help="Xem trước thống kê câu hỏi và ước tính chi phí")
    args = parser.parse_args()

    max_budget = args.max_budget or float(os.getenv("MAX_BUDGET_USD", "0.45"))
    budget_interval = args.budget_interval or int(os.getenv("BUDGET_CHECK_INTERVAL", "10"))

    print("=" * 70)
    print("   PIPELINE BÓC TÁCH & SINH ĐÁP ÁN QUIZ OFFLINE (BANKAI)")
    print("=" * 70)
    print(f"[*] Hạn mức ngân sách an toàn (Budget Cap): ${max_budget:.4f} USD")
    print(f"[*] Chu kỳ kiểm tra ngân sách: Mỗi {budget_interval} câu")

    # 1. Quét toàn bộ file Day*.md
    day_files = sorted(glob.glob(str(BASE_DIR / "Day*.md")))
    if not day_files:
        print("[!] Lỗi: Không tìm thấy file Day*.md nào trong workspace!")
        sys.exit(1)

    all_days_data = []
    total_raw_questions = 0
    for df in day_files:
        ddata = parse_day_file(df)
        all_days_data.append(ddata)
        total_raw_questions += len(ddata["questions"])

    print(f"[*] Đã bóc tách thành công {len(all_days_data)} file Day học ({total_raw_questions} câu hỏi tổng cộng).")

    # Lọc danh sách Day theo args
    target_days = all_days_data
    if args.days:
        selected_stems = [d.lower() for d in args.days]
        target_days = [d for d in all_days_data if d["day_id"] in selected_stems or d["public_code"].lower() in selected_stems]

    print(f"[*] Danh sách Day được chọn xử lý: {[d['day_id'].upper() + ' (' + d['public_code'] + ')' for d in target_days]}")

    # Tải cache
    cache = load_cache()
    cached_count = len(cache)
    print(f"[*] Số câu đã có sẵn trong Checkpoint/Cache: {cached_count} câu")

    # Thu thập câu hỏi cần giải
    pending_tasks = []
    for day in target_days:
        kc_dict = {kc["kc_id"]: kc for kc in day["knowledge_components"]}
        day_questions = day["questions"]
        if args.limit_per_day:
            day_questions = day_questions[:args.limit_per_day]

        for q in day_questions:
            qid = q.get("question_id")
            if qid not in cache:
                pending_tasks.append({
                    "day_id": day["day_id"],
                    "question": q,
                    "kc_dict": kc_dict
                })

    total_pending = len(pending_tasks)
    print(f"[*] Số câu hỏi CẦN GIẢI MỚI qua LLM: {total_pending} câu")

    # Nếu dry-run: tính toán và in ra
    if args.dry_run:
        est_cost_per_q = 0.000263
        est_total = total_pending * est_cost_per_q
        print("\n--- THỐNG KÊ DRY-RUN ---")
        print(f"Số câu cần giải: {total_pending}")
        print(f"Ước tính chi phí trung bình/câu: ~${est_cost_per_q:.6f}")
        print(f"Dự báo tổng chi phí mới: ~${est_total:.4f} USD")
        print(f"Hạn mức ngân sách: ${max_budget:.4f} USD")
        if est_total > max_budget:
            print(f"[!] CẢNH BÁO: Dự báo (${est_total:.4f}) VƯỢT QUÁ ngân sách (${max_budget:.4f})!")
        else:
            print("[+] AN TOÀN: Dự báo nằm trong hạn mức ngân sách cho phép.")
        return

    # Nếu chỉ export ra web app:
    if args.export_only or total_pending == 0:
        if total_pending == 0:
            print("[+] Tất cả câu hỏi đã được giải và lưu trong cache!")
        export_static_data(all_days_data, cache)
        return

    # Khởi tạo LLM Client
    client, model, provider = get_llm_client()
    print(f"[*] Đang sử dụng Provider: [{provider.upper()}] với Model: [{model}]")

    # Bắt đầu vòng lặp giải đa luồng có Budget Guard
    cumulative_cost = 0.0
    solved_in_this_run = 0
    recent_costs = []
    concurrency = max(1, args.concurrency)
    lock = threading.Lock()
    stop_event = threading.Event()

    print("\n" + "-" * 70)
    print(f" BẮT ĐẦU GIẢI CÂU HỎI VỚI HỆ THỐNG KIỂM SOÁT NGÂN SÁCH (ĐA LUỒNG: {concurrency} WORKERS)")
    print("-" * 70)

    def worker_solve(task):
        if stop_event.is_set():
            return None
        q = task["question"]
        qid = q.get("question_id")
        kc_dict = task["kc_dict"]

        try:
            result, cost = solve_question(client, model, provider, q, kc_dict)
            return task, result, cost
        except Exception as e:
            print(f"[!] Lỗi khi giải {qid}: {e}")
            return None

    try:
        with ThreadPoolExecutor(max_workers=concurrency) as executor:
            futures = {executor.submit(worker_solve, t): t for t in pending_tasks}

            for future in as_completed(futures):
                if stop_event.is_set():
                    break

                res = future.result()
                if not res:
                    continue

                task, result, cost = res
                qid = result["question_id"]
                itype = task["question"].get("interaction", {}).get("type", "unknown")

                with lock:
                    cache[qid] = result
                    cumulative_cost += cost
                    solved_in_this_run += 1
                    recent_costs.append(cost)

                    # Lưu cache định kỳ mỗi 5 câu hoặc câu cuối
                    if solved_in_this_run % 5 == 0 or solved_in_this_run == total_pending:
                        save_cache(cache)

                    print(f"[{solved_in_this_run}/{total_pending}] {qid} ({itype}) -> ${cost:.6f} | Lũy kế: ${cumulative_cost:.4f}")

                    # Kiểm tra ngân sách định kỳ
                    if solved_in_this_run % budget_interval == 0 or solved_in_this_run == total_pending:
                        remaining_q = total_pending - solved_in_this_run
                        avg_cost = cumulative_cost / solved_in_this_run
                        projected_remaining_cost = remaining_q * avg_cost
                        projected_total_cost = cumulative_cost + projected_remaining_cost

                        print("\n" + "=" * 60)
                        print(f"[THEO DÕI NGÂN SÁCH - ĐÃ GIẢI {solved_in_this_run}/{total_pending} CÂU]")
                        print(f" - Số tiền đã chi tiêu thực tế: ${cumulative_cost:.4f} USD")
                        print(f" - Chi phí trung bình mỗi câu:  ${avg_cost:.6f} USD")
                        print(f" - Dự báo chi phí câu còn lại:  ${projected_remaining_cost:.4f} USD ({remaining_q} câu)")
                        print(f" - DỰ BÁO TỔNG CHI PHÍ:        ${projected_total_cost:.4f} USD")
                        print(f" - HẠN MỨC NGÂN SÁCH TỐI ĐA:    ${max_budget:.4f} USD")

                        # CƠ CHẾ DỪNG SỚM NẾU NGUY CƠ VƯỢT HẠN MỨC
                        if projected_total_cost > max_budget or cumulative_cost > max_budget:
                            print("\n" + "!" * 70)
                            print(" [NGUY CƠ VƯỢT HẠN MỨC NGÂN SÁCH - DỪNG THI CÔNG NGAY LẬP TỨC!]")
                            print(f" DỰ BÁO TỔNG CHI PHÍ (${projected_total_cost:.4f}) VƯỢT HẠN MỨC (${max_budget:.4f})!")
                            print(f" Đã giải xong và lưu an toàn {solved_in_this_run} câu mới vào Cache.")
                            print(f" Số tiền đã sử dụng: ${cumulative_cost:.4f} USD.")
                            print(f" Ước tính cần nạp thêm tối thiểu: ${(projected_total_cost - max_budget):.4f} USD.")
                            print("!" * 70 + "\n")
                            stop_event.set()
                            break
                        else:
                            buffer = max_budget - projected_total_cost
                            print(f" [OK - AN TOÀN] Ngân sách dự phòng còn lại: ${buffer:.4f} USD.")
                        print("=" * 60 + "\n")

    except KeyboardInterrupt:
        print("\n[!] Người dùng bấm dừng (Ctrl+C). Đang lưu toàn bộ tiến độ vào cache...")
    except Exception as e:
        print(f"\n[!] Gặp lỗi trong quá trình chạy: {e}")
    finally:
        save_cache(cache)
        # Xuất dữ liệu tĩnh cho Web App
        export_static_data(all_days_data, cache)


def export_static_data(all_days, cache):
    """Xuất bộ dữ liệu tĩnh đã giải hoàn thiện vào thư mục app/data/."""
    print("\n[*] Đang xuất bộ dữ liệu hoàn thiện tĩnh sang app/data/ ...")
    APP_DATA_DIR.mkdir(parents=True, exist_ok=True)
    APP_DAYS_DIR.mkdir(parents=True, exist_ok=True)

    summary_list = []
    total_q_all = 0
    total_q_solved = 0

    for day in all_days:
        day_id = day["day_id"]
        enriched_questions = []

        for q in day["questions"]:
            qid = q.get("question_id")
            q_copy = dict(q)
            if qid in cache:
                cached_res = cache[qid]
                q_copy["answer"] = cached_res.get("answer")
                q_copy["explanation"] = cached_res.get("explanation")
                q_copy["is_solved"] = True
                total_q_solved += 1
            else:
                q_copy["answer"] = None
                q_copy["explanation"] = "Câu hỏi đang chờ nạp đáp án."
                q_copy["is_solved"] = False

            enriched_questions.append(q_copy)

        day_payload = {
            "day_id": day_id,
            "day_label": day["day_label"],
            "public_code": day["public_code"],
            "title": day["title"],
            "raw_title": day["raw_title"],
            "groups": day["groups"],
            "knowledge_components": day["knowledge_components"],
            "questions": enriched_questions,
            "stats": {
                "total_questions": len(enriched_questions),
                "solved_questions": sum(1 for q in enriched_questions if q["is_solved"]),
                "total_kcs": len(day["knowledge_components"]),
                "core_kcs": sum(1 for kc in day["knowledge_components"] if kc.get("is_core"))
            }
        }

        # Lưu file riêng cho từng Day
        day_file_path = APP_DAYS_DIR / f"{day_id}.json"
        with open(day_file_path, "w", encoding="utf-8") as f:
            json.dump(day_payload, f, ensure_ascii=False, indent=2)

        total_q_all += len(enriched_questions)
        summary_list.append({
            "day_id": day_id,
            "day_label": day["day_label"],
            "public_code": day["public_code"],
            "title": day["title"],
            "stats": day_payload["stats"]
        })

    # Lưu file tổng hợp courses_data.json
    courses_payload = {
        "course_title": "Khóa Học AI & Kỹ Thuật Agentic (15 Days)",
        "total_days": len(all_days),
        "total_questions": total_q_all,
        "total_solved": total_q_solved,
        "days": summary_list
    }

    with open(APP_DATA_DIR / "courses_data.json", "w", encoding="utf-8") as f:
        json.dump(courses_payload, f, ensure_ascii=False, indent=2)

    print(f"[+] Xuất dữ liệu hoàn tất! Đã tạo app/data/courses_data.json và 15 file trong app/data/days/")
    print(f"[+] Tổng cộng: {total_q_solved}/{total_q_all} câu hỏi có đáp án & lời giải thích chi tiết.")


if __name__ == "__main__":
    main()

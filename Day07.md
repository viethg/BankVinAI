{
  "course_id": "K4P1",
  "day_code": "day_93e12375ebcd9c30",
  "public_code": "D11",
  "version_id": "32618742-e564-4edd-8d8d-280cb38d5034",
  "version_no": 13,
  "synthesized": false,
  "lesson": {
    "index": 7,
    "title": "Day07",
    "subtitle": null,
    "slides_url": "/api/v1/content/days/day_93e12375ebcd9c30/slides.pdf",
    "modules": [
      {
        "module_id": "day",
        "title": "Slides",
        "kind": "lesson",
        "from": 0,
        "to": 2,
        "sections": [
          {
            "section_id": "day-slides",
            "title": "Slides",
            "kind": "theory",
            "from": 0,
            "to": 2
          }
        ]
      },
      {
        "module_id": "day7-k4-l3b-data-foundations-embedding-vector-store",
        "title": "DAY07-K4-L3B-DATA-FOUNDATIONS-EMBEDDING-VECTOR-STORE",
        "kind": "lab",
        "from": 2,
        "to": 13,
        "sections": [
          {
            "section_id": "day7-k4-l3b-data-foundations-embedding-vector-store-s01",
            "title": "Lộ trình, checkpoint và deliverable",
            "kind": "practice",
            "from": 2,
            "to": 3
          },
          {
            "section_id": "day7-k4-l3b-data-foundations-embedding-vector-store-s02",
            "title": "🟦 0:00–0:20 · Setup",
            "kind": "practice",
            "from": 3,
            "to": 4
          },
          {
            "section_id": "day7-k4-l3b-data-foundations-embedding-vector-store-s03",
            "title": "🟦 0:20–1:00 · Chủ đề, vai trò và crawl dữ liệu",
            "kind": "practice",
            "from": 4,
            "to": 5
          },
          {
            "section_id": "day7-k4-l3b-data-foundations-embedding-vector-store-s04",
            "title": "🟩 1:00–1:45 · Warm-up và `chunking.py`",
            "kind": "practice",
            "from": 5,
            "to": 6
          },
          {
            "section_id": "day7-k4-l3b-data-foundations-embedding-vector-store-s05",
            "title": "🟩 1:45–2:30 · `store.py` và `agent.py`",
            "kind": "practice",
            "from": 6,
            "to": 7
          },
          {
            "section_id": "day7-k4-l3b-data-foundations-embedding-vector-store-s06",
            "title": "2:30–3:00 · Chiến lược riêng và benchmark",
            "kind": "practice",
            "from": 7,
            "to": 8
          },
          {
            "section_id": "day7-k4-l3b-data-foundations-embedding-vector-store-s07",
            "title": "🟦 3:00–3:25 · Chạy, so sánh và phân tích lỗi",
            "kind": "practice",
            "from": 8,
            "to": 9
          },
          {
            "section_id": "day7-k4-l3b-data-foundations-embedding-vector-store-s08",
            "title": "🟦 3:25–4:00 · Demo và nộp bài",
            "kind": "practice",
            "from": 9,
            "to": 10
          },
          {
            "section_id": "day7-k4-l3b-data-foundations-embedding-vector-store-s09",
            "title": "Phụ lục A — Lỗi thường gặp",
            "kind": "practice",
            "from": 10,
            "to": 11
          },
          {
            "section_id": "day7-k4-l3b-data-foundations-embedding-vector-store-s10",
            "title": "Phụ lục B — Bật embedder thật",
            "kind": "practice",
            "from": 11,
            "to": 13
          }
        ]
      }
    ],
    "parts": [
      {
        "id": "day-slides-material_mtzv6qve_jdnw87",
        "type": "slide",
        "title": "day07-data-foundations-embedding-vector-store",
        "duration_min": null,
        "ai_prompts": [],
        "status": "current",
        "body": {
          "material_id": "material_mtzv6qve_jdnw87",
          "page_from": 1,
          "page_to": 97,
          "notes": null,
          "deck_url": "/api/v1/documents/K4P1/Lecture_material_mtzv6qve_jdnw87/material_mtzv6qve_jdnw87/stream",
          "deck_cdn_url": "https://slides.vlearn.dev/slides/k4p1/Lecture_material_mtzv6qve_jdnw87/material_mtzv6qve_jdnw87/6d7611d322fde88e4435feedfddcd2d2533f3f46217b6784eb446f045e632c3a.pdf?exp=1792167784&sub=728ae799387402308487372bea160411&sig=_KSOQn_dqjFlYq4v7CLk9n-exqQw7O5rGbB_bYqbCJ8"
        }
      },
      {
        "id": "day-slides-material_mu7ql5f8_1cd7xt",
        "type": "slide",
        "title": "Day 7 - Data Foundations",
        "duration_min": null,
        "ai_prompts": [],
        "status": "todo",
        "body": {
          "material_id": "material_mu7ql5f8_1cd7xt",
          "page_from": 1,
          "page_to": 58,
          "notes": null,
          "deck_url": "/api/v1/documents/K4P1/Lecture_material_mu7ql5f8_1cd7xt/material_mu7ql5f8_1cd7xt/stream",
          "deck_cdn_url": "https://slides.vlearn.dev/slides/k4p1/Lecture_material_mu7ql5f8_1cd7xt/material_mu7ql5f8_1cd7xt/371d100b1638a55fe06ca0aac9c9d20d6a313119d69134e0daf18123cf984147.pdf?exp=1792167784&sub=728ae799387402308487372bea160411&sig=2x3FshGGl29I39JwclN0pOj-BCVVVSN987plV2Ji_zw"
        }
      },
      {
        "id": "day7-k4-l3b-data-foundations-embedding-vector-store-s01-doc",
        "type": "text",
        "title": "Lộ trình, checkpoint và deliverable",
        "duration_min": null,
        "ai_prompts": [],
        "status": "todo",
        "body": {
          "reading_label": null,
          "blocks": [
            {
              "t": "alert",
              "html": "Học viên hoàn thiện TODO trong src/ (chunking, vector store, RAG agent), crawl corpus dịch vụ/chính sách thực tế đúng chuẩn provenance, rồi so sánh chiến lược retrieval bằng 5 benchmark query.",
              "items": [],
              "lang": null,
              "kind": "info",
              "icon": "objectives",
              "title": "Về bài lab này",
              "src": null,
              "alt": null,
              "md": null
            },
            {
              "t": "alert",
              "html": "\u003Cstrong\u003E4 giờ, 5 giai đoạn.\u003C/strong\u003E Mốc thời gian bên dưới tính \u003Cstrong\u003Etương đối từ lúc lớp bắt đầu\u003C/strong\u003E (0:00), không phải giờ tuyệt đối — lớp bắt đầu lúc nào thì cộng dồn từ đó. Lab đan xen phần \u003Cstrong\u003Ecá nhân\u003C/strong\u003E (60 điểm — bạn tự code) và phần \u003Cstrong\u003Enhóm\u003C/strong\u003E (40 điểm — mỗi người thử một chiến lược khác nhau trên cùng dữ liệu). 42 bài test chạy bằng embedding giả lập nên \u003Cstrong\u003Ekhông cần API key\u003C/strong\u003E để pass phần code. Phần dữ liệu thì cần Internet.",
              "items": [],
              "lang": null,
              "kind": "info",
              "icon": "bulb",
              "title": null,
              "src": null,
              "alt": null,
              "md": null
            },
            {
              "t": "h2",
              "html": "Bạn làm được gì sau bài này",
              "items": [],
              "lang": null,
              "kind": null,
              "icon": null,
              "title": null,
              "src": null,
              "alt": null,
              "md": null
            },
            {
              "t": "objectives",
              "html": null,
              "items": [
                "Giải thích cosine similarity và dự đoán điểm tương đồng giữa hai đoạn text",
                "Triển khai 3 chiến lược chunking và so sánh bằng số liệu",
                "Xây dựng vector store có search, metadata filter và delete",
                "Thu thập corpus công khai đúng chuẩn provenance và robots.txt",
                "Chỉ ra khi nào retrieval thất bại và đề xuất cách sửa"
              ],
              "lang": null,
              "kind": null,
              "icon": null,
              "title": null,
              "src": null,
              "alt": null,
              "md": null
            },
            {
              "t": "h2",
              "html": "Cần chuẩn bị",
              "items": [],
              "lang": null,
              "kind": null,
              "icon": null,
              "title": null,
              "src": null,
              "alt": null,
              "md": null
            },
            {
              "t": "ul",
              "html": null,
              "items": [
                "Biết class, list comprehension và dict trong Python",
                "Đã hoàn thành Lab 01 (gọi LLM API)",
                "Python 3.11 (khuyến nghị) hoặc 3.10+",
                "pip hoặc uv",
                "Git + tài khoản GitHub"
              ],
              "lang": null,
              "kind": null,
              "icon": null,
              "title": null,
              "src": null,
              "alt": null,
              "md": null
            },
            {
              "t": "alert",
              "html": "\u003Cul\u003E\u003Cli\u003ECrawl trang mà robots.txt cấm vì chỉ nhìn 'trang mở công khai là được'\u003C/li\u003E\u003Cli\u003EDùng thẳng output crawl thô còn menu và tin tức làm corpus\u003C/li\u003E\u003Cli\u003Esearch_with_filter lọc SAU khi search thay vì trước\u003C/li\u003E\u003Cli\u003EQuên metadata['doc_id'] nên delete_document luôn trả False\u003C/li\u003E\u003Cli\u003EChấm benchmark theo doc_id nên tưởng đúng mà agent không trả lời được\u003C/li\u003E\u003Cli\u003ECả nhóm chọn cùng một chiến lược chunking nên không có gì để so sánh\u003C/li\u003E\u003C/ul\u003E",
              "items": [],
              "lang": null,
              "kind": "warning",
              "icon": "bulb",
              "title": "Lỗi thường gặp",
              "src": null,
              "alt": null,
              "md": null
            },
            {
              "t": "h3",
              "html": "Lộ trình",
              "items": [],
              "lang": null,
              "kind": null,
              "icon": null,
              "title": null,
              "src": null,
              "alt": null,
              "md": null
            },
            {
              "t": "md",
              "html": null,
              "items": [],
              "lang": null,
              "kind": null,
              "icon": null,
              "title": null,
              "src": null,
              "alt": null,
              "md": "| Giai đoạn | Thời gian | Nội dung | Checkpoint |\n| --- | --- | --- | --- |\n| **1. Dữ liệu** 🟦 | 0:00–1:00 | Setup, chọn chủ đề, crawl corpus | **CP1** 0:20 · **CP2** 1:00 |\n| **2. Code cá nhân** 🟩 | 1:00–2:30 | Warm-up + hoàn thiện `src/` | **CP3** 1:45 · **CP4** 2:30 |\n| **3. Chiến lược** | 2:30–3:00 | 5 benchmark query + chiến lược riêng | **CP5** 3:00 |\n| **4. So sánh** 🟦 | 3:00–3:25 | Chạy benchmark, so sánh, phân tích lỗi | **CP6** 3:25 |\n| **5. Demo & nộp** 🟦 | 3:25–4:00 | Thuyết trình, hoàn thiện báo cáo, push | **CP7** 4:00 |"
            },
            {
              "t": "h3",
              "html": "Deliverable",
              "items": [],
              "lang": null,
              "kind": null,
              "icon": null,
              "title": null,
              "src": null,
              "alt": null,
              "md": null
            },
            {
              "t": "md",
              "html": null,
              "items": [],
              "lang": null,
              "kind": null,
              "icon": null,
              "title": null,
              "src": null,
              "alt": null,
              "md": "| # | Nộp gì | Ai | Điểm |\n| --- | --- | --- | --- |\n| 1 | `src/` hoàn thiện, `pytest tests/ -v` → 42 passed | Mỗi người | 30 |\n| 2 | `data/\u003Cchu-de\u003E/` — 5–10 tài liệu `.md` + `sources.csv` | Nhóm | 10 |\n| 3 | `bench.py` + `ket_qua_benchmark.txt` | Mỗi người | nền cho #4, #5 |\n| 4 | `report/REPORT_CANHAN.md` | Mỗi người | 60 (gồm #1) |\n| 5 | `report/REPORT_NHOM.md` | Nhóm | 40 (gồm #2) |\n| 6 | Repo GitHub `K4-DAY07-HoVaTen-MSSV` + link vlearn | Mỗi người | điều kiện chấm |"
            },
            {
              "t": "p",
              "html": "\u003Ccode\u003EREPORT_CANHAN.md\u003C/code\u003E hỏi bạn code thế nào và kết quả riêng của bạn ra sao — mỗi người một bản. \u003Ccode\u003EREPORT_NHOM.md\u003C/code\u003E hỏi nhóm chọn tài liệu gì, ai thử chiến lược nào, chiến lược nào thắng — cả nhóm chung một bản. Điền dần theo từng checkpoint, đừng dồn về cuối.",
              "items": [],
              "lang": null,
              "kind": null,
              "icon": null,
              "title": null,
              "src": null,
              "alt": null,
              "md": null
            },
            {
              "t": "code",
              "html": "flowchart LR\n    A[Setup] --&gt; B[Crawl corpus] --&gt; C[chunking.py] --&gt; D[store.py + agent.py]\n    D --&gt; E[42/42] --&gt; F[Benchmark query] --&gt; G[Chạy &amp; so sánh] --&gt; H[Demo &amp; nộp]",
              "items": [],
              "lang": "mermaid",
              "kind": null,
              "icon": null,
              "title": null,
              "src": null,
              "alt": null,
              "md": null
            }
          ]
        }
      },
      {
        "id": "day7-k4-l3b-data-foundations-embedding-vector-store-s02-doc",
        "type": "text",
        "title": "🟦 0:00–0:20 · Setup",
        "duration_min": null,
        "ai_prompts": [],
        "status": "todo",
        "body": {
          "reading_label": null,
          "blocks": [
            {
              "t": "p",
              "html": "Repo chuẩn Python 3.11 (xem \u003Ccode\u003E.python-version\u003C/code\u003E); 3.10+ vẫn chạy được toàn bộ test, nên máy chưa kịp cài đúng bản 3.11 vẫn tiếp tục được, không cần dừng lại cài lại.",
              "items": [],
              "lang": null,
              "kind": null,
              "icon": null,
              "title": null,
              "src": null,
              "alt": null,
              "md": null
            },
            {
              "t": "p",
              "html": "Fork trước khi clone, đừng clone thẳng repo gốc — bạn cần một remote GitHub thuộc tài khoản của mình để cuối buổi push bài nộp (\u003Ccode\u003EK4-DAY07-HoVaTen-MSSV\u003C/code\u003E, xem mục 8). Clone thẳng repo gốc sẽ không có quyền push và phải làm lại từ đầu.",
              "items": [],
              "lang": null,
              "kind": null,
              "icon": null,
              "title": null,
              "src": null,
              "alt": null,
              "md": null
            },
            {
              "t": "p",
              "html": "📦 \u003Cstrong\u003EStarter Repositories Bài Lab 07\u003C/strong\u003E (Fork về làm bài):",
              "items": [],
              "lang": null,
              "kind": null,
              "icon": null,
              "title": null,
              "src": null,
              "alt": null,
              "md": null
            },
            {
              "t": "p",
              "html": "🅰️ Lớp L3A: \u003Ca href=\"https://github.com/VinUni-AI20k/K4-L3A-Data-Foundations\" target=\"_blank\" rel=\"noopener noreferrer\"\u003EVinUni-AI20k/K4-L3A-Data-Foundations\u003C/a\u003E 🅱️ Lớp L3B: \u003Ca href=\"https://github.com/VinUni-AI20k/K4-L3B-Data-Foundations\" target=\"_blank\" rel=\"noopener noreferrer\"\u003EVinUni-AI20k/K4-L3B-Data-Foundations\u003C/a\u003E",
              "items": [],
              "lang": null,
              "kind": null,
              "icon": null,
              "title": null,
              "src": null,
              "alt": null,
              "md": null
            },
            {
              "t": "p",
              "html": "Fork đúng repo của lớp bạn, clone bản fork về máy, mở trong VS Code.",
              "items": [],
              "lang": null,
              "kind": null,
              "icon": null,
              "title": null,
              "src": null,
              "alt": null,
              "md": null
            },
            {
              "t": "p",
              "html": "macOS / Linux:",
              "items": [],
              "lang": null,
              "kind": null,
              "icon": null,
              "title": null,
              "src": null,
              "alt": null,
              "md": null
            },
            {
              "t": "code",
              "html": "python3.11 -m venv .venv\nsource .venv/bin/activate\npip install -r requirements.txt",
              "items": [],
              "lang": "bash",
              "kind": null,
              "icon": null,
              "title": null,
              "src": null,
              "alt": null,
              "md": null
            },
            {
              "t": "p",
              "html": "Windows (PowerShell):",
              "items": [],
              "lang": null,
              "kind": null,
              "icon": null,
              "title": null,
              "src": null,
              "alt": null,
              "md": null
            },
            {
              "t": "code",
              "html": "py -3.11 -m venv .venv\n.venv\\Scripts\\Activate.ps1\npip install -r requirements.txt",
              "items": [],
              "lang": "powershell",
              "kind": null,
              "icon": null,
              "title": null,
              "src": null,
              "alt": null,
              "md": null
            },
            {
              "t": "p",
              "html": "Nếu PowerShell chặn script, chạy một lần \u003Ccode\u003ESet-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope CurrentUser\u003C/code\u003E.",
              "items": [],
              "lang": null,
              "kind": null,
              "icon": null,
              "title": null,
              "src": null,
              "alt": null,
              "md": null
            },
            {
              "t": "p",
              "html": "\u003Ccode\u003Erequirements.txt\u003C/code\u003E chỉ có \u003Ccode\u003Epytest\u003C/code\u003E và \u003Ccode\u003Epython-dotenv\u003C/code\u003E. Không cần \u003Ccode\u003Echromadb\u003C/code\u003E, \u003Ccode\u003Esentence-transformers\u003C/code\u003E, \u003Ccode\u003Eopenai\u003C/code\u003E hay \u003Ccode\u003Egoogle-genai\u003C/code\u003E để hoàn thành phần code — phần lõi cài xong trong vài giây, không phải chờ tải model nào.",
              "items": [],
              "lang": null,
              "kind": null,
              "icon": null,
              "title": null,
              "src": null,
              "alt": null,
              "md": null
            },
            {
              "t": "h3",
              "html": "✅ CHECKPOINT 1 — 0:20",
              "items": [],
              "lang": null,
              "kind": null,
              "icon": null,
              "title": null,
              "src": null,
              "alt": null,
              "md": null
            },
            {
              "t": "code",
              "html": "pytest tests/ -v",
              "items": [],
              "lang": "bash",
              "kind": null,
              "icon": null,
              "title": null,
              "src": null,
              "alt": null,
              "md": null
            },
            {
              "t": "p",
              "html": "Phải ra \u003Cstrong\u003E31 failed, 11 passed\u003C/strong\u003E trên 42 test, lỗi toàn là \u003Ccode\u003ENotImplementedError\u003C/code\u003E. Đó là baseline đúng: 11 test pass là các test kiểm tra cấu trúc project và \u003Ccode\u003EFixedSizeChunker\u003C/code\u003E (đã viết sẵn làm ví dụ).",
              "items": [],
              "lang": null,
              "kind": null,
              "icon": null,
              "title": null,
              "src": null,
              "alt": null,
              "md": null
            },
            {
              "t": "p",
              "html": "Thấy \u003Ccode\u003EModuleNotFoundError\u003C/code\u003E nghĩa là venv chưa activate hoặc chưa \u003Ccode\u003Epip install\u003C/code\u003E. Quá 0:25 chưa xong thì gọi trợ giảng — mọi thứ sau đều phụ thuộc bước này.",
              "items": [],
              "lang": null,
              "kind": null,
              "icon": null,
              "title": null,
              "src": null,
              "alt": null,
              "md": null
            }
          ]
        }
      },
      {
        "id": "day7-k4-l3b-data-foundations-embedding-vector-store-s03-doc",
        "type": "text",
        "title": "🟦 0:20–1:00 · Chủ đề, vai trò và crawl dữ liệu",
        "duration_min": null,
        "ai_prompts": [],
        "status": "todo",
        "body": {
          "reading_label": null,
          "blocks": [
            {
              "t": "p",
              "html": "Đọc \u003Ca target=\"_blank\" rel=\"noopener noreferrer\"\u003E\u003Ccode\u003Edocs/DATA_COLLECTION.md\u003C/code\u003E\u003C/a\u003E trước khi crawl. Tài liệu đó là chuẩn chấm cho deliverable #2, phần dưới chỉ tóm tắt cách áp dụng.",
              "items": [],
              "lang": null,
              "kind": null,
              "icon": null,
              "title": null,
              "src": null,
              "alt": null,
              "md": null
            },
            {
              "t": "h3",
              "html": "Ràng buộc riêng của K4-L3B",
              "items": [],
              "lang": null,
              "kind": null,
              "icon": null,
              "title": null,
              "src": null,
              "alt": null,
              "md": null
            },
            {
              "t": "p",
              "html": "Chủ đề bắt buộc của lớp \u003Cstrong\u003EL3B\u003C/strong\u003E là \u003Cstrong\u003Echính sách đổi trả, bảo hành, hoặc quy định người bán/người mua\u003C/strong\u003E trên nền tảng thương mại điện tử. (Lớp song song L3A cùng bài học này crawl chủ đề dịch vụ/quy định đại học — xem \u003Ca target=\"_blank\" rel=\"noopener noreferrer\"\u003E\u003Ccode\u003EK4_VARIANT.md\u003C/code\u003E\u003C/a\u003E.) Ba ràng buộc quyết định cách bạn thu dữ liệu:",
              "items": [],
              "lang": null,
              "kind": null,
              "icon": null,
              "title": null,
              "src": null,
              "alt": null,
              "md": null
            },
            {
              "t": "ul",
              "html": null,
              "items": [
                "\u003Cstrong\u003E1.\u003C/strong\u003E Mỗi tài liệu phải có \u003Ccode\u003Eaudience\u003C/code\u003E (\u003Ccode\u003Ebuyer\u003C/code\u003E / \u003Ccode\u003Eseller\u003C/code\u003E / \u003Ccode\u003Eboth\u003C/code\u003E) cùng \u003Ccode\u003Esource_url\u003C/code\u003E, \u003Ccode\u003Eretrieved_at\u003C/code\u003E, \u003Ccode\u003Edocument_version\u003C/code\u003E, và ít nhất một trường lọc khác.",
                "\u003Cstrong\u003E2.\u003C/strong\u003E Trong 5 benchmark query phải có ít nhất một câu \u003Cstrong\u003Ecần\u003C/strong\u003E \u003Ccode\u003Emetadata_filter={\"audience\": \"buyer\"}\u003C/code\u003E (hoặc \u003Ccode\u003E\"seller\"\u003C/code\u003E) mới trả lời đúng.",
                "\u003Cstrong\u003E3.\u003C/strong\u003E Ít nhất một thành viên chunk theo tiêu đề/mục của điều khoản/chính sách gốc."
              ],
              "lang": null,
              "kind": null,
              "icon": null,
              "title": null,
              "src": null,
              "alt": null,
              "md": null
            },
            {
              "t": "h3",
              "html": "Chia vai (5 phút)",
              "items": [],
              "lang": null,
              "kind": null,
              "icon": null,
              "title": null,
              "src": null,
              "alt": null,
              "md": null
            },
            {
              "t": "p",
              "html": "Nhóm 3 người, mỗi người một vai. Vai là trách nhiệm điều phối cộng thêm — ai cũng vẫn tự code Giai đoạn 2 và tự chạy benchmark riêng.",
              "items": [],
              "lang": null,
              "kind": null,
              "icon": null,
              "title": null,
              "src": null,
              "alt": null,
              "md": null
            },
            {
              "t": "md",
              "html": null,
              "items": [],
              "lang": null,
              "kind": null,
              "icon": null,
              "title": null,
              "src": null,
              "alt": null,
              "md": "| Vai | Việc | Hạn |\n| --- | --- | --- |\n| **R1 · Data** | Chốt chủ đề, chia mỗi người 2–3 URL, kiểm metadata từng file, giữ `sources.csv` | CP2 |\n| **R2 · Benchmark** | Viết 5 query + gold answer, tự kiểm mỗi gold answer trích được từ tài liệu thật | CP5 |\n| **R3 · Strategy** | Bảo đảm không ai trùng chiến lược, nhận vai chunk theo heading, chạy baseline cho nhóm | CP5 |"
            },
            {
              "t": "p",
              "html": "Nhóm 4 người: người thứ tư làm \u003Cstrong\u003EReport &amp; Demo Lead\u003C/strong\u003E, gom kết quả cả nhóm và dẫn phần thuyết trình.",
              "items": [],
              "lang": null,
              "kind": null,
              "icon": null,
              "title": null,
              "src": null,
              "alt": null,
              "md": null
            },
            {
              "t": "p",
              "html": "Chiến lược chunking không được trùng nhau. Gợi ý cho nhóm 3: một người \u003Ccode\u003EFixedSizeChunker\u003C/code\u003E (có overlap), một người \u003Ccode\u003ERecursiveChunker\u003C/code\u003E, một người viết chunker theo heading — vai thứ ba là bắt buộc.",
              "items": [],
              "lang": null,
              "kind": null,
              "icon": null,
              "title": null,
              "src": null,
              "alt": null,
              "md": null
            },
            {
              "t": "h3",
              "html": "Crawl (30 phút)",
              "items": [],
              "lang": null,
              "kind": null,
              "icon": null,
              "title": null,
              "src": null,
              "alt": null,
              "md": null
            },
            {
              "t": "p",
              "html": "Repo có sẵn crawler \u003Ccode\u003Escripts/fetch_public_pages.py\u003C/code\u003E. Nó kiểm \u003Ccode\u003Erobots.txt\u003C/code\u003E, giãn cách ≥1 giây giữa các request, chỉ nhận HTML/text, và tự sinh \u003Ccode\u003Esources.csv\u003C/code\u003E.",
              "items": [],
              "lang": null,
              "kind": null,
              "icon": null,
              "title": null,
              "src": null,
              "alt": null,
              "md": null
            },
            {
              "t": "code",
              "html": "cp scripts/urls.example.csv data/urls.csv\n# điền 5-10 URL vào data/urls.csv\npython scripts/fetch_public_pages.py data/urls.csv --output-dir data/&lt;ten-chu-de&gt;",
              "items": [],
              "lang": "bash",
              "kind": null,
              "icon": null,
              "title": null,
              "src": null,
              "alt": null,
              "md": null
            },
            {
              "t": "p",
              "html": "Cột bắt buộc trong \u003Ccode\u003Edata/urls.csv\u003C/code\u003E là \u003Ccode\u003Eurl\u003C/code\u003E. Các cột \u003Ccode\u003Edoc_id\u003C/code\u003E, \u003Ccode\u003Etitle\u003C/code\u003E, \u003Ccode\u003Eaudience\u003C/code\u003E, \u003Ccode\u003Ecategory\u003C/code\u003E, \u003Ccode\u003Elanguage\u003C/code\u003E, \u003Ccode\u003Edocument_version\u003C/code\u003E, \u003Ccode\u003Elicense_or_permission\u003C/code\u003E sẽ được đưa thẳng vào frontmatter của file \u003Ccode\u003E.md\u003C/code\u003E sinh ra.",
              "items": [],
              "lang": null,
              "kind": null,
              "icon": null,
              "title": null,
              "src": null,
              "alt": null,
              "md": null
            },
            {
              "t": "p",
              "html": "Bốn thứ gần như chắc chắn xảy ra, chuẩn bị tinh thần trước:",
              "items": [],
              "lang": null,
              "kind": null,
              "icon": null,
              "title": null,
              "src": null,
              "alt": null,
              "md": null
            },
            {
              "t": "p",
              "html": "\u003Cstrong\u003ETrang bị robots.txt cấm.\u003C/strong\u003E Script sẽ báo \u003Ccode\u003Edisallowed by robots.txt\u003C/code\u003E và bỏ qua. Đây không phải lỗi cần vượt qua — \u003Cstrong\u003Etrang mở công khai với người đọc không đồng nghĩa cho phép truy cập tự động\u003C/strong\u003E. Đổi nguồn khác. Nếu bạn đã lỡ tải nó bằng công cụ khác, xoá khỏi corpus.",
              "items": [],
              "lang": null,
              "kind": null,
              "icon": null,
              "title": null,
              "src": null,
              "alt": null,
              "md": null
            },
            {
              "t": "p",
              "html": "\u003Cstrong\u003ETrang render bằng JavaScript\u003C/strong\u003E trả về body rỗng, script báo \u003Ccode\u003Eextracted content is too short\u003C/code\u003E. Đổi nguồn, đừng cố.",
              "items": [],
              "lang": null,
              "kind": null,
              "icon": null,
              "title": null,
              "src": null,
              "alt": null,
              "md": null
            },
            {
              "t": "p",
              "html": "\u003Cstrong\u003EScript crash giữa chừng\u003C/strong\u003E với \u003Ccode\u003ELookupError: unknown encoding: ...\u003C/code\u003E. Đây là bug đã biết: server trả charset không hợp lệ (ví dụ \u003Ccode\u003Echarset=utf-8,gbk\u003C/code\u003E), và \u003Ccode\u003ELookupError\u003C/code\u003E không nằm trong danh sách bắt lỗi của script nên một URL hỏng làm sập cả lượt chạy. Bỏ URL đó ra khỏi CSV, chạy tiếp, xử lý riêng nó sau.",
              "items": [],
              "lang": null,
              "kind": null,
              "icon": null,
              "title": null,
              "src": null,
              "alt": null,
              "md": null
            },
            {
              "t": "p",
              "html": "\u003Cstrong\u003EOutput thô rất bẩn.\u003C/strong\u003E Script giữ nguyên menu, banner khuyến mãi, danh sách sản phẩm không liên quan — một trang 3 KB nội dung có thể ra file 16 KB. \u003Ccode\u003Edocs/DATA_COLLECTION.md\u003C/code\u003E mục 2 yêu cầu bạn \u003Cstrong\u003Elàm sạch trước khi lưu\u003C/strong\u003E. Xoá phần thừa bằng tay, giữ lại đúng điều khoản, con số và mốc thời gian. Đừng chunk trên bản thô — nhiễu sẽ chiếm hết top-k.",
              "items": [],
              "lang": null,
              "kind": null,
              "icon": null,
              "title": null,
              "src": null,
              "alt": null,
              "md": null
            },
            {
              "t": "p",
              "html": "Đọc lại từng file sau khi làm sạch. Đừng tin output tự động: công cụ fetch có thể tự dịch nội dung sang tiếng Anh mà bạn không để ý.",
              "items": [],
              "lang": null,
              "kind": null,
              "icon": null,
              "title": null,
              "src": null,
              "alt": null,
              "md": null
            },
            {
              "t": "h3",
              "html": "Metadata phải khớp với chiều bạn định lọc",
              "items": [],
              "lang": null,
              "kind": null,
              "icon": null,
              "title": null,
              "src": null,
              "alt": null,
              "md": null
            },
            {
              "t": "p",
              "html": "Giả sử trang chính sách đổi trả gộp cả thời hạn cho người mua (7 ngày) lẫn thời hạn xử lý cho người bán (30 ngày) trong \u003Cstrong\u003Emột\u003C/strong\u003E trang. Nếu bạn lưu thành một file \u003Ccode\u003Eaudience: both\u003C/code\u003E, thì \u003Ccode\u003Emetadata_filter={\"audience\":\"buyer\"}\u003C/code\u003E \u003Cstrong\u003Ekhông lọc được gì\u003C/strong\u003E — hai đáp án nằm chung một tài liệu. Metadata schema đẹp trên giấy nhưng vô dụng khi chạy.",
              "items": [],
              "lang": null,
              "kind": null,
              "icon": null,
              "title": null,
              "src": null,
              "alt": null,
              "md": null
            },
            {
              "t": "p",
              "html": "Cách xử lý: tách thành hai file, mỗi file một \u003Ccode\u003Eaudience\u003C/code\u003E. Lúc đó filter mới có việc thật, và bạn sẽ có số liệu A/B để viết vào báo cáo.",
              "items": [],
              "lang": null,
              "kind": null,
              "icon": null,
              "title": null,
              "src": null,
              "alt": null,
              "md": null
            },
            {
              "t": "p",
              "html": "Với \u003Ccode\u003Edocument_version\u003C/code\u003E, chỉ ghi số hiệu khi trang nguồn thực sự nêu. Không có thì ghi \u003Ccode\u003Enot-stated\u003C/code\u003E — \u003Cstrong\u003Ekhông bịa số hiệu\u003C/strong\u003E.",
              "items": [],
              "lang": null,
              "kind": null,
              "icon": null,
              "title": null,
              "src": null,
              "alt": null,
              "md": null
            },
            {
              "t": "h3",
              "html": "✅ CHECKPOINT 2 — 1:00",
              "items": [],
              "lang": null,
              "kind": null,
              "icon": null,
              "title": null,
              "src": null,
              "alt": null,
              "md": null
            },
            {
              "t": "p",
              "html": "Chạy script kiểm tra theo checklist mục 6 của \u003Ccode\u003Edocs/DATA_COLLECTION.md\u003C/code\u003E, mọi dòng phải \u003Ccode\u003EOK\u003C/code\u003E:",
              "items": [],
              "lang": null,
              "kind": null,
              "icon": null,
              "title": null,
              "src": null,
              "alt": null,
              "md": null
            },
            {
              "t": "code",
              "html": "python -c \"\nimport csv, re\nfrom pathlib import Path\nD = Path('data/&lt;ten-chu-de&gt;')\nREQ = ['doc_id','title','source_url','retrieved_at','document_version','audience']\nmds = sorted(D.glob('*.md'))\nrows = list(csv.DictReader(open(D/'sources.csv', encoding='utf-8')))\nids, auds = [], {}\nfor p in mds:\n    fm = dict(re.findall(r'^(\\w+):\\s*(.+)\\$', p.read_text(encoding='utf-8').split('---')[1], re.M))\n    ids.append(fm.get('doc_id'))\n    auds[fm.get('audience')] = auds.get(fm.get('audience'), 0) + 1\n    print(f'{p.name:40} {\\\"OK\\\" if all(k in fm for k in REQ) and fm.get(\\\"doc_id\\\")==p.stem else \\\"THIEU METADATA\\\"}')\nprint('so file :', len(mds), '(can 5-10)')\nprint('csv     :', 'khop' if sorted(r['doc_id'] for r in rows)==sorted(ids) else 'LECH')\nprint('audience:', auds)\n\"",
              "items": [],
              "lang": "bash",
              "kind": null,
              "icon": null,
              "title": null,
              "src": null,
              "alt": null,
              "md": null
            },
            {
              "t": "p",
              "html": "Cần đạt: \u003Cstrong\u003E5–10 file\u003C/strong\u003E, mọi file đủ metadata, \u003Ccode\u003Esources.csv\u003C/code\u003E khớp 1-1, và \u003Ccode\u003Eaudience\u003C/code\u003E có \u003Cstrong\u003Eít nhất 2 giá trị khác nhau\u003C/strong\u003E (nếu chỉ một giá trị thì filter không có gì để lọc).",
              "items": [],
              "lang": null,
              "kind": null,
              "icon": null,
              "title": null,
              "src": null,
              "alt": null,
              "md": null
            },
            {
              "t": "p",
              "html": "Điền luôn bảng Data Inventory và Metadata Schema vào \u003Cstrong\u003EREPORT_NHOM mục 1\u003C/strong\u003E — số liệu đang ở ngay trước mặt bạn.",
              "items": [],
              "lang": null,
              "kind": null,
              "icon": null,
              "title": null,
              "src": null,
              "alt": null,
              "md": null
            },
            {
              "t": "p",
              "html": "Chậm tiến độ thì lấy đủ 5 tài liệu rồi sang Giai đoạn 2 đúng giờ. Rubric chấm chất lượng và tính minh bạch nguồn, không chấm số lượng.",
              "items": [],
              "lang": null,
              "kind": null,
              "icon": null,
              "title": null,
              "src": null,
              "alt": null,
              "md": null
            }
          ]
        }
      },
      {
        "id": "day7-k4-l3b-data-foundations-embedding-vector-store-s04-doc",
        "type": "text",
        "title": "🟩 1:00–1:45 · Warm-up và `chunking.py`",
        "duration_min": null,
        "ai_prompts": [],
        "status": "todo",
        "body": {
          "reading_label": null,
          "blocks": [
            {
              "t": "p",
              "html": "Từ đây là 90 phút cá nhân. Không chia code cho nhau.",
              "items": [],
              "lang": null,
              "kind": null,
              "icon": null,
              "title": null,
              "src": null,
              "alt": null,
              "md": null
            },
            {
              "t": "h3",
              "html": "Warm-up (10 phút) → REPORT_CANHAN mục 1",
              "items": [],
              "lang": null,
              "kind": null,
              "icon": null,
              "title": null,
              "src": null,
              "alt": null,
              "md": null
            },
            {
              "t": "p",
              "html": "Hai câu hỏi, 5 điểm, làm nhanh rồi vào code.",
              "items": [],
              "lang": null,
              "kind": null,
              "icon": null,
              "title": null,
              "src": null,
              "alt": null,
              "md": null
            },
            {
              "t": "p",
              "html": "\u003Cstrong\u003ECosine similarity.\u003C/strong\u003E Giải thích similarity cao nghĩa là gì; cho một cặp câu tương đồng cao và một cặp thấp; nói vì sao cosine hợp với text embedding hơn khoảng cách Euclid. Gợi ý cho cặp \"cao\": chọn hai câu \u003Cstrong\u003Ekhác từ vựng nhưng cùng nghĩa\u003C/strong\u003E — như vậy mới chứng minh embedding hiểu nghĩa chứ không so khớp từ.",
              "items": [],
              "lang": null,
              "kind": null,
              "icon": null,
              "title": null,
              "src": null,
              "alt": null,
              "md": null
            },
            {
              "t": "p",
              "html": "\u003Cstrong\u003EBài toán chunking.\u003C/strong\u003E Tài liệu 10.000 ký tự, \u003Ccode\u003Echunk_size=500\u003C/code\u003E, \u003Ccode\u003Eoverlap=50\u003C/code\u003E thì ra bao nhiêu chunk? Công thức trong \u003Ccode\u003Eexercises.md\u003C/code\u003E là \u003Ccode\u003Eceil((độ_dài − overlap) / (chunk_size − overlap))\u003C/code\u003E. Tính xong thì kiểm lại bằng chính \u003Ccode\u003EFixedSizeChunker\u003C/code\u003E có sẵn trong repo thay vì tin công thức suông:",
              "items": [],
              "lang": null,
              "kind": null,
              "icon": null,
              "title": null,
              "src": null,
              "alt": null,
              "md": null
            },
            {
              "t": "code",
              "html": "python -c \"\nfrom src.chunking import FixedSizeChunker\nprint(len(FixedSizeChunker(chunk_size=500, overlap=50).chunk('a'*10000)))\n\"",
              "items": [],
              "lang": "bash",
              "kind": null,
              "icon": null,
              "title": null,
              "src": null,
              "alt": null,
              "md": null
            },
            {
              "t": "p",
              "html": "Rồi trả lời: overlap tăng lên 100 thì số chunk đổi thế nào, và vì sao đôi khi bạn muốn overlap lớn hơn dù nó tốn thêm chunk.",
              "items": [],
              "lang": null,
              "kind": null,
              "icon": null,
              "title": null,
              "src": null,
              "alt": null,
              "md": null
            },
            {
              "t": "h3",
              "html": "Luồng dữ liệu",
              "items": [],
              "lang": null,
              "kind": null,
              "icon": null,
              "title": null,
              "src": null,
              "alt": null,
              "md": null
            },
            {
              "t": "code",
              "html": "File .md → Chunker.chunk() → list[str] → Document(id, content, metadata)\n                                              ↓\n                    EmbeddingStore.add_documents() → search() → top_k\n                                              ↓\n                              KnowledgeBaseAgent.answer() → llm_fn()",
              "items": [],
              "lang": null,
              "kind": null,
              "icon": null,
              "title": null,
              "src": null,
              "alt": null,
              "md": null
            },
            {
              "t": "p",
              "html": "Ba điều hay bị hiểu sai:",
              "items": [],
              "lang": null,
              "kind": null,
              "icon": null,
              "title": null,
              "src": null,
              "alt": null,
              "md": null
            },
            {
              "t": "p",
              "html": "\u003Cstrong\u003E\u003Ccode\u003Eadd_documents\u003C/code\u003E không tự chunk.\u003C/strong\u003E Test đưa vào 3 \u003Ccode\u003EDocument\u003C/code\u003E và mong \u003Ccode\u003Eget_collection_size() == 3\u003C/code\u003E, tức 1 \u003Ccode\u003EDocument\u003C/code\u003E = 1 record. Việc chunking do bạn làm ở tầng ngoài (CP5), mỗi chunk thành một \u003Ccode\u003EDocument\u003C/code\u003E riêng.",
              "items": [],
              "lang": null,
              "kind": null,
              "icon": null,
              "title": null,
              "src": null,
              "alt": null,
              "md": null
            },
            {
              "t": "p",
              "html": "\u003Cstrong\u003E\u003Ccode\u003EMockEmbedder\u003C/code\u003E không có ngữ nghĩa\u003C/strong\u003E — nó băm MD5 rồi sinh số giả ngẫu nhiên. Đủ dùng cho pytest vì test chỉ kiểm cấu trúc, nhưng sẽ phá hỏng benchmark ở Giai đoạn 4.",
              "items": [],
              "lang": null,
              "kind": null,
              "icon": null,
              "title": null,
              "src": null,
              "alt": null,
              "md": null
            },
            {
              "t": "p",
              "html": "\u003Cstrong\u003EVector đã được chuẩn hoá\u003C/strong\u003E (\u003Ccode\u003E||v|| = 1\u003C/code\u003E), nên dot product bằng đúng cosine. Đó là lý do docstring của \u003Ccode\u003Esearch\u003C/code\u003E cho phép dùng dot product cho gọn.",
              "items": [],
              "lang": null,
              "kind": null,
              "icon": null,
              "title": null,
              "src": null,
              "alt": null,
              "md": null
            },
            {
              "t": "p",
              "html": "Giữ nguyên mọi dòng \u003Ccode\u003Edef ...\u003C/code\u003E — test kiểm tra theo chữ ký hàm. Chỉ thay phần \u003Ccode\u003ETODO\u003C/code\u003E và \u003Ccode\u003Eraise NotImplementedError\u003C/code\u003E.",
              "items": [],
              "lang": null,
              "kind": null,
              "icon": null,
              "title": null,
              "src": null,
              "alt": null,
              "md": null
            },
            {
              "t": "h3",
              "html": "\u003Ccode\u003ESentenceChunker.chunk\u003C/code\u003E",
              "items": [],
              "lang": null,
              "kind": null,
              "icon": null,
              "title": null,
              "src": null,
              "alt": null,
              "md": null
            },
            {
              "t": "p",
              "html": "Tách câu theo \u003Ccode\u003E\". \"\u003C/code\u003E, \u003Ccode\u003E\"! \"\u003C/code\u003E, \u003Ccode\u003E\"? \"\u003C/code\u003E, \u003Ccode\u003E\".\\n\"\u003C/code\u003E, gom \u003Ccode\u003Emax_sentences_per_chunk\u003C/code\u003E câu thành một chunk, strip khoảng trắng thừa. Text rỗng trả \u003Ccode\u003E[]\u003C/code\u003E, không được crash.",
              "items": [],
              "lang": null,
              "kind": null,
              "icon": null,
              "title": null,
              "src": null,
              "alt": null,
              "md": null
            },
            {
              "t": "p",
              "html": "Cái bẫy nằm ở regex. Nếu bạn split bằng \u003Ccode\u003E[.!?]\\s+\u003C/code\u003E thì dấu câu \u003Cstrong\u003Ebị nuốt mất\u003C/strong\u003E và mọi chunk thành câu cụt. Tìm cách tách ở vị trí \u003Cem\u003Esau\u003C/em\u003E dấu câu mà vẫn giữ được nó — \u003Ccode\u003Ere\u003C/code\u003E có cú pháp cho việc này.",
              "items": [],
              "lang": null,
              "kind": null,
              "icon": null,
              "title": null,
              "src": null,
              "alt": null,
              "md": null
            },
            {
              "t": "p",
              "html": "Ghi vào báo cáo edge case bạn biết là mình chưa xử lý được: chữ viết tắt (\u003Ccode\u003ETS.\u003C/code\u003E, \u003Ccode\u003Ev.v.\u003C/code\u003E) và số thập phân sẽ bị cắt sai. Nêu ra được đánh giá cao hơn giấu đi.",
              "items": [],
              "lang": null,
              "kind": null,
              "icon": null,
              "title": null,
              "src": null,
              "alt": null,
              "md": null
            },
            {
              "t": "h3",
              "html": "\u003Ccode\u003ERecursiveChunker.chunk\u003C/code\u003E và \u003Ccode\u003E_split\u003C/code\u003E",
              "items": [],
              "lang": null,
              "kind": null,
              "icon": null,
              "title": null,
              "src": null,
              "alt": null,
              "md": null
            },
            {
              "t": "p",
              "html": "Thử separator theo thứ tự ưu tiên \u003Ccode\u003E[\"\\n\\n\", \"\\n\", \". \", \" \", \"\"]\u003C/code\u003E: cắt bằng ranh giới \"to\" trước để giữ ngữ nghĩa, chỉ khi mảnh vẫn quá dài mới hạ xuống separator nhỏ hơn.",
              "items": [],
              "lang": null,
              "kind": null,
              "icon": null,
              "title": null,
              "src": null,
              "alt": null,
              "md": null
            },
            {
              "t": "p",
              "html": "Thuật toán có \u003Cstrong\u003Ehai chiều\u003C/strong\u003E, và người ta thường chỉ viết một:",
              "items": [],
              "lang": null,
              "kind": null,
              "icon": null,
              "title": null,
              "src": null,
              "alt": null,
              "md": null
            },
            {
              "t": "ul",
              "html": null,
              "items": [
                "\u003Cem\u003EĐệ quy xuống sâu:\u003C/em\u003E mảnh nào vẫn dài hơn \u003Ccode\u003Echunk_size\u003C/code\u003E thì gọi lại \u003Ccode\u003E_split\u003C/code\u003E với danh sách separator còn lại.",
                "\u003Cem\u003EGom lên:\u003C/em\u003E các mảnh nhỏ liền kề phải được nối lại cho tới sát \u003Ccode\u003Echunk_size\u003C/code\u003E. Thiếu bước này, một file nhiều dòng ngắn sẽ sinh ra hàng trăm chunk vụn 5–10 ký tự và retrieval sẽ rất tệ."
              ],
              "lang": null,
              "kind": null,
              "icon": null,
              "title": null,
              "src": null,
              "alt": null,
              "md": null
            },
            {
              "t": "p",
              "html": "Nghĩ kỹ base case. Có ba trường hợp dừng, và test \u003Ccode\u003Etest_empty_separators_falls_back_gracefully\u003C/code\u003E truyền thẳng \u003Ccode\u003Eseparators=[]\u003C/code\u003E — thiếu nhánh xử lý đó là fail.",
              "items": [],
              "lang": null,
              "kind": null,
              "icon": null,
              "title": null,
              "src": null,
              "alt": null,
              "md": null
            },
            {
              "t": "h3",
              "html": "\u003Ccode\u003Ecompute_similarity\u003C/code\u003E",
              "items": [],
              "lang": null,
              "kind": null,
              "icon": null,
              "title": null,
              "src": null,
              "alt": null,
              "md": null
            },
            {
              "t": "p",
              "html": "Công thức nằm trong docstring. Việc duy nhất phải nghĩ thêm là vector độ dài 0: phải trả \u003Ccode\u003E0.0\u003C/code\u003E chứ không được để \u003Ccode\u003EZeroDivisionError\u003C/code\u003E. Hàm \u003Ccode\u003E_dot\u003C/code\u003E đã có sẵn phía trên, tái sử dụng nó.",
              "items": [],
              "lang": null,
              "kind": null,
              "icon": null,
              "title": null,
              "src": null,
              "alt": null,
              "md": null
            },
            {
              "t": "h3",
              "html": "\u003Ccode\u003EChunkingStrategyComparator.compare\u003C/code\u003E",
              "items": [],
              "lang": null,
              "kind": null,
              "icon": null,
              "title": null,
              "src": null,
              "alt": null,
              "md": null
            },
            {
              "t": "p",
              "html": "Gọi cả ba chunker trên cùng text, trả dict có đúng ba key \u003Ccode\u003Efixed_size\u003C/code\u003E, \u003Ccode\u003Eby_sentences\u003C/code\u003E, \u003Ccode\u003Erecursive\u003C/code\u003E; mỗi key là dict có \u003Ccode\u003Ecount\u003C/code\u003E, \u003Ccode\u003Eavg_length\u003C/code\u003E, \u003Ccode\u003Echunks\u003C/code\u003E. Test đọc theo tên chính xác nên gõ sai một ký tự là fail.",
              "items": [],
              "lang": null,
              "kind": null,
              "icon": null,
              "title": null,
              "src": null,
              "alt": null,
              "md": null
            },
            {
              "t": "p",
              "html": "Nhớ chặn chia cho 0 khi text rỗng.",
              "items": [],
              "lang": null,
              "kind": null,
              "icon": null,
              "title": null,
              "src": null,
              "alt": null,
              "md": null
            },
            {
              "t": "h3",
              "html": "✅ CHECKPOINT 3 — 1:45",
              "items": [],
              "lang": null,
              "kind": null,
              "icon": null,
              "title": null,
              "src": null,
              "alt": null,
              "md": null
            },
            {
              "t": "code",
              "html": "pytest tests/ -k \"Chunker or Similarity or Compare\" -v",
              "items": [],
              "lang": "bash",
              "kind": null,
              "icon": null,
              "title": null,
              "src": null,
              "alt": null,
              "md": null
            },
            {
              "t": "p",
              "html": "Kỳ vọng \u003Cstrong\u003E23 passed\u003C/strong\u003E — gồm 7 test \u003Ccode\u003EFixedSizeChunker\u003C/code\u003E có sẵn cộng 16 test của phần bạn vừa viết.",
              "items": [],
              "lang": null,
              "kind": null,
              "icon": null,
              "title": null,
              "src": null,
              "alt": null,
              "md": null
            },
            {
              "t": "p",
              "html": "Chậm tiến độ thì ưu tiên \u003Ccode\u003ESentenceChunker\u003C/code\u003E (comparator cần nó) và \u003Ccode\u003Ecompute_similarity\u003C/code\u003E (ngắn), để \u003Ccode\u003ERecursiveChunker\u003C/code\u003E lại sau — \u003Ccode\u003EEmbeddingStore\u003C/code\u003E ở bước tiếp mới là phần nhiều test nhất.",
              "items": [],
              "lang": null,
              "kind": null,
              "icon": null,
              "title": null,
              "src": null,
              "alt": null,
              "md": null
            }
          ]
        }
      },
      {
        "id": "day7-k4-l3b-data-foundations-embedding-vector-store-s05-doc",
        "type": "text",
        "title": "🟩 1:45–2:30 · `store.py` và `agent.py`",
        "duration_min": null,
        "ai_prompts": [],
        "status": "todo",
        "body": {
          "reading_label": null,
          "blocks": [
            {
              "t": "h3",
              "html": "\u003Ccode\u003EEmbeddingStore\u003C/code\u003E — 5 method, 14 test",
              "items": [],
              "lang": null,
              "kind": null,
              "icon": null,
              "title": null,
              "src": null,
              "alt": null,
              "md": null
            },
            {
              "t": "p",
              "html": "Làm hai helper trước, bốn method công khai sau. Làm ngược lại bạn sẽ viết lặp cùng một logic bốn lần.",
              "items": [],
              "lang": null,
              "kind": null,
              "icon": null,
              "title": null,
              "src": null,
              "alt": null,
              "md": null
            },
            {
              "t": "p",
              "html": "\u003Cstrong\u003EVề ChromaDB:\u003C/strong\u003E bỏ hẳn nhánh Chroma, chỉ dùng in-memory. Không test nào cần nó, \u003Ccode\u003Erequirements.txt\u003C/code\u003E không cài nó, và code khởi tạo sẵn có một cái bẫy — \u003Ccode\u003Eself._use_chroma = True\u003C/code\u003E được gán \u003Cem\u003Etrước\u003C/em\u003E khi client được tạo. Nếu máy chấm bài tình cờ có \u003Ccode\u003Echromadb\u003C/code\u003E, mọi method sẽ rẽ vào nhánh chưa cài đặt và cả 14 test sập.",
              "items": [],
              "lang": null,
              "kind": null,
              "icon": null,
              "title": null,
              "src": null,
              "alt": null,
              "md": null
            },
            {
              "t": "p",
              "html": "\u003Cstrong\u003E\u003Ccode\u003E_make_record\u003C/code\u003E\u003C/strong\u003E chuẩn hoá một \u003Ccode\u003EDocument\u003C/code\u003E thành record lưu trong store. Hai chi tiết đáng nghĩ: copy metadata thay vì dùng trực tiếp object của người gọi, và bảo đảm record luôn có khoá \u003Ccode\u003Edoc_id\u003C/code\u003E trong metadata — \u003Ccode\u003Edelete_document\u003C/code\u003E phụ thuộc vào nó. Ở CP5 bạn sẽ tạo nhiều \u003Ccode\u003EDocument\u003C/code\u003E từ một file với id kiểu \u003Ccode\u003E\"file#0\"\u003C/code\u003E, \u003Ccode\u003E\"file#1\"\u003C/code\u003E, nên \u003Ccode\u003Edoc_id\u003C/code\u003E phải trỏ về \u003Cstrong\u003Efile gốc\u003C/strong\u003E chứ không phải id của chunk.",
              "items": [],
              "lang": null,
              "kind": null,
              "icon": null,
              "title": null,
              "src": null,
              "alt": null,
              "md": null
            },
            {
              "t": "p",
              "html": "\u003Cstrong\u003E\u003Ccode\u003E_search_records\u003C/code\u003E\u003C/strong\u003E chạy similarity search trên một tập record bất kỳ. Tách riêng nó ra vì \u003Ccode\u003Esearch()\u003C/code\u003E và \u003Ccode\u003Esearch_with_filter()\u003C/code\u003E chỉ khác nhau ở \u003Cem\u003Etập ứng viên đầu vào\u003C/em\u003E; cho cả hai đi qua cùng một đường code thì không thể lệch kết quả, và test \u003Ccode\u003Etest_no_filter_returns_all_candidates\u003C/code\u003E pass hiển nhiên. Kết quả trả về nên bỏ \u003Ccode\u003Eembedding\u003C/code\u003E đi — vector 1536 chiều làm bẩn output khi in ra terminal.",
              "items": [],
              "lang": null,
              "kind": null,
              "icon": null,
              "title": null,
              "src": null,
              "alt": null,
              "md": null
            },
            {
              "t": "p",
              "html": "\u003Cstrong\u003E\u003Ccode\u003Esearch_with_filter\u003C/code\u003E\u003C/strong\u003E phải lọc \u003Cstrong\u003Etrước\u003C/strong\u003E rồi mới search. Nếu lấy top-k rồi mới bỏ cái không khớp, bạn có thể còn lại 0 kết quả dù store vẫn còn tài liệu hợp lệ — k slot đã bị chiếm hết bởi tài liệu sai. Báo cáo hỏi thẳng câu này, chuẩn bị sẵn câu trả lời.",
              "items": [],
              "lang": null,
              "kind": null,
              "icon": null,
              "title": null,
              "src": null,
              "alt": null,
              "md": null
            },
            {
              "t": "p",
              "html": "\u003Cstrong\u003E\u003Ccode\u003Edelete_document\u003C/code\u003E\u003C/strong\u003E xoá mọi chunk có \u003Ccode\u003Emetadata['doc_id']\u003C/code\u003E khớp, trả \u003Ccode\u003ETrue\u003C/code\u003E/\u003Ccode\u003EFalse\u003C/code\u003E tuỳ có xoá được gì không.",
              "items": [],
              "lang": null,
              "kind": null,
              "icon": null,
              "title": null,
              "src": null,
              "alt": null,
              "md": null
            },
            {
              "t": "h3",
              "html": "\u003Ccode\u003EKnowledgeBaseAgent.answer\u003C/code\u003E",
              "items": [],
              "lang": null,
              "kind": null,
              "icon": null,
              "title": null,
              "src": null,
              "alt": null,
              "md": null
            },
            {
              "t": "p",
              "html": "Ba nhịp: truy xuất top-k → dựng prompt có ngữ cảnh → gọi \u003Ccode\u003Ellm_fn\u003C/code\u003E.",
              "items": [],
              "lang": null,
              "kind": null,
              "icon": null,
              "title": null,
              "src": null,
              "alt": null,
              "md": null
            },
            {
              "t": "p",
              "html": "Phần đáng đầu tư là cách dựng ngữ cảnh. Đánh số từng chunk \u003Ccode\u003E[1] [2] [3]\u003C/code\u003E kèm nguồn, rồi yêu cầu model trích dẫn số đó khi trả lời — như vậy câu trả lời \u003Cstrong\u003Etruy vết được\u003C/strong\u003E về đúng chunk và đúng file. Đây là tiêu chí \u003Cem\u003ESource Traceability\u003C/em\u003E trong \u003Ccode\u003Edocs/EVALUATION.md\u003C/code\u003E, và với corpus quy định thì nó không phải tính năng phụ.",
              "items": [],
              "lang": null,
              "kind": null,
              "icon": null,
              "title": null,
              "src": null,
              "alt": null,
              "md": null
            },
            {
              "t": "p",
              "html": "Thêm ràng buộc chống bịa: chỉ dùng ngữ cảnh được cung cấp, không có thì nói rõ là không tìm thấy. Và xử lý trường hợp store rỗng — trả câu thông báo, đừng crash và đừng gọi LLM vô ích.",
              "items": [],
              "lang": null,
              "kind": null,
              "icon": null,
              "title": null,
              "src": null,
              "alt": null,
              "md": null
            },
            {
              "t": "h3",
              "html": "✅ CHECKPOINT 4 — 2:30 · mốc quan trọng nhất",
              "items": [],
              "lang": null,
              "kind": null,
              "icon": null,
              "title": null,
              "src": null,
              "alt": null,
              "md": null
            },
            {
              "t": "code",
              "html": "pytest tests/ -v\npython main.py \"Chunking là gì?\"",
              "items": [],
              "lang": "bash",
              "kind": null,
              "icon": null,
              "title": null,
              "src": null,
              "alt": null,
              "md": null
            },
            {
              "t": "p",
              "html": "Phải ra \u003Cstrong\u003E42 passed\u003C/strong\u003E, và \u003Ccode\u003Emain.py\u003C/code\u003E chạy được từ đầu đến cuối. Dòng \u003Ccode\u003ESkipping missing file: data/customer_support_playbook.txt\u003C/code\u003E là bình thường — repo không có file đó.",
              "items": [],
              "lang": null,
              "kind": null,
              "icon": null,
              "title": null,
              "src": null,
              "alt": null,
              "md": null
            },
            {
              "t": "p",
              "html": "Chụp output \u003Ccode\u003Epytest tests/ -v\u003C/code\u003E dán vào \u003Cstrong\u003EREPORT_CANHAN mục 3\u003C/strong\u003E (30 điểm).",
              "items": [],
              "lang": null,
              "kind": null,
              "icon": null,
              "title": null,
              "src": null,
              "alt": null,
              "md": null
            },
            {
              "t": "p",
              "html": "Còn test đỏ thì sửa song song trong lúc nhóm chốt benchmark query, nhưng đừng để trễ quá 3:00 — CP5 cần \u003Ccode\u003Esrc/\u003C/code\u003E chạy được.",
              "items": [],
              "lang": null,
              "kind": null,
              "icon": null,
              "title": null,
              "src": null,
              "alt": null,
              "md": null
            }
          ]
        }
      },
      {
        "id": "day7-k4-l3b-data-foundations-embedding-vector-store-s06-doc",
        "type": "text",
        "title": "2:30–3:00 · Chiến lược riêng và benchmark",
        "duration_min": null,
        "ai_prompts": [],
        "status": "todo",
        "body": {
          "reading_label": null,
          "blocks": [
            {
              "t": "p",
              "html": "Hai luồng chạy song song: R2 viết câu hỏi, mọi người dựng \u003Ccode\u003Ebench.py\u003C/code\u003E.",
              "items": [],
              "lang": null,
              "kind": null,
              "icon": null,
              "title": null,
              "src": null,
              "alt": null,
              "md": null
            },
            {
              "t": "h3",
              "html": "5 benchmark query (R2 chủ trì)",
              "items": [],
              "lang": null,
              "kind": null,
              "icon": null,
              "title": null,
              "src": null,
              "alt": null,
              "md": null
            },
            {
              "t": "p",
              "html": "Đúng 5 câu, đa dạng về dạng hỏi (tra số liệu, hỏi điều kiện, hỏi quy trình, liệt kê). Mỗi câu có gold answer \u003Cstrong\u003Etrích được từ tài liệu\u003C/strong\u003E, không suy đoán chính sách của nền tảng. Cả nhóm dùng chung 5 câu này.",
              "items": [],
              "lang": null,
              "kind": null,
              "icon": null,
              "title": null,
              "src": null,
              "alt": null,
              "md": null
            },
            {
              "t": "p",
              "html": "Ít nhất một câu phải \u003Cstrong\u003Ecần\u003C/strong\u003E \u003Ccode\u003Emetadata_filter={\"audience\": \"buyer\"}\u003C/code\u003E (hoặc \u003Ccode\u003E\"seller\"\u003C/code\u003E). Cách làm câu này hiệu quả: chọn một câu hỏi \u003Cstrong\u003Ekhông nêu rõ người hỏi là ai\u003C/strong\u003E, trong khi corpus có hai tài liệu cùng chủ đề, cùng từ vựng, nhưng khác đối tượng và khác đáp án. Không lọc thì retrieval sẽ lẫn hai tài liệu và agent trả lời sai đối tượng — đúng thứ bạn cần chứng minh.",
              "items": [],
              "lang": null,
              "kind": null,
              "icon": null,
              "title": null,
              "src": null,
              "alt": null,
              "md": null
            },
            {
              "t": "h3",
              "html": "Baseline (R3 chủ trì)",
              "items": [],
              "lang": null,
              "kind": null,
              "icon": null,
              "title": null,
              "src": null,
              "alt": null,
              "md": null
            },
            {
              "t": "p",
              "html": "Chạy \u003Ccode\u003EChunkingStrategyComparator().compare()\u003C/code\u003E trên 2–3 tài liệu, điền bảng Baseline Analysis vào REPORT_NHOM mục 2. Nhớ bỏ frontmatter trước khi so sánh, nếu không bạn đang đo cả khối YAML.",
              "items": [],
              "lang": null,
              "kind": null,
              "icon": null,
              "title": null,
              "src": null,
              "alt": null,
              "md": null
            },
            {
              "t": "h3",
              "html": "Chunker theo heading (R3)",
              "items": [],
              "lang": null,
              "kind": null,
              "icon": null,
              "title": null,
              "src": null,
              "alt": null,
              "md": null
            },
            {
              "t": "p",
              "html": "Văn bản quy định được biên soạn theo mục (\u003Ccode\u003E## Điều 4 — ...\u003C/code\u003E), mỗi mục đã là một đơn vị ngữ nghĩa trọn vẹn do người soạn chia sẵn. Ý tưởng: tách trước mỗi dòng heading, mỗi section thành một chunk, section nào dài quá ngưỡng thì hạ xuống recursive.",
              "items": [],
              "lang": null,
              "kind": null,
              "icon": null,
              "title": null,
              "src": null,
              "alt": null,
              "md": null
            },
            {
              "t": "p",
              "html": "Một chi tiết dễ bỏ sót: khi phải cắt nhỏ một section dài, \u003Cstrong\u003Egắn lại tiêu đề vào từng mảnh con\u003C/strong\u003E. Không có nó, mảnh thứ hai trở đi mất ngữ cảnh \"đây là mục nói về cái gì\".",
              "items": [],
              "lang": null,
              "kind": null,
              "icon": null,
              "title": null,
              "src": null,
              "alt": null,
              "md": null
            },
            {
              "t": "h3",
              "html": "\u003Ccode\u003Ebench.py\u003C/code\u003E",
              "items": [],
              "lang": null,
              "kind": null,
              "icon": null,
              "title": null,
              "src": null,
              "alt": null,
              "md": null
            },
            {
              "t": "p",
              "html": "Đây là công cụ đo của riêng bạn, không phải bài tập được chấm bằng test. Nó cần làm bốn việc:",
              "items": [],
              "lang": null,
              "kind": null,
              "icon": null,
              "title": null,
              "src": null,
              "alt": null,
              "md": null
            },
            {
              "t": "code",
              "html": "# 1. Đọc từng file .md, tách frontmatter thành metadata và phần thân thành content\n# 2. Chunk phần thân, mỗi chunk thành một Document:\n#       Document(id=f\"{path.stem}#{i}\", content=chunk,\n#                metadata={**frontmatter, \"doc_id\": path.stem, ...})\n# 3. Nạp vào EmbeddingStore, chạy 5 query qua search_with_filter()\n# 4. In top-3 kèm score và doc_id để đối chiếu với gold answer",
              "items": [],
              "lang": "python",
              "kind": null,
              "icon": null,
              "title": null,
              "src": null,
              "alt": null,
              "md": null
            },
            {
              "t": "p",
              "html": "Bốn chỗ dễ sai:",
              "items": [],
              "lang": null,
              "kind": null,
              "icon": null,
              "title": null,
              "src": null,
              "alt": null,
              "md": null
            },
            {
              "t": "ul",
              "html": null,
              "items": [
                "Chunking phải xảy ra \u003Cstrong\u003Engoài\u003C/strong\u003E store. Nạp cả file làm một \u003Ccode\u003EDocument\u003C/code\u003E như \u003Ccode\u003Emain.py\u003C/code\u003E thì retrieval trả về nguyên file, vô dụng.",
                "\u003Ccode\u003Edoc_id\u003C/code\u003E trong metadata trỏ về \u003Cstrong\u003Etên file gốc\u003C/strong\u003E, còn \u003Ccode\u003EDocument.id\u003C/code\u003E mới là \u003Ccode\u003E\"file#0\"\u003C/code\u003E.",
                "Metadata frontmatter phải được trải vào \u003Cstrong\u003Emọi\u003C/strong\u003E chunk, nếu không \u003Ccode\u003Esearch_with_filter\u003C/code\u003E không có gì để lọc.",
                "Mỗi người chỉ đổi \u003Cstrong\u003Emột dòng\u003C/strong\u003E — dòng chọn chunker — sang chiến lược của mình. Mọi thứ khác giữ nguyên để so sánh mới công bằng."
              ],
              "lang": null,
              "kind": null,
              "icon": null,
              "title": null,
              "src": null,
              "alt": null,
              "md": null
            },
            {
              "t": "p",
              "html": "Nếu dùng OpenAI embedding, thêm cache theo hash nội dung để chạy lại không tốn thêm tiền.",
              "items": [],
              "lang": null,
              "kind": null,
              "icon": null,
              "title": null,
              "src": null,
              "alt": null,
              "md": null
            },
            {
              "t": "h3",
              "html": "✅ CHECKPOINT 5 — 3:00",
              "items": [],
              "lang": null,
              "kind": null,
              "icon": null,
              "title": null,
              "src": null,
              "alt": null,
              "md": null
            },
            {
              "t": "p",
              "html": "\u003Ccode\u003Epython bench.py\u003C/code\u003E chạy được, in ra số chunk đã nạp và kết quả top-3 cho cả 5 câu. Nhóm có đủ 5 query kèm gold answer trong REPORT_NHOM mục 3, và mỗi người đã đổi sang chiến lược riêng.",
              "items": [],
              "lang": null,
              "kind": null,
              "icon": null,
              "title": null,
              "src": null,
              "alt": null,
              "md": null
            },
            {
              "t": "p",
              "html": "Chưa cần quan tâm kết quả tốt hay xấu — CP6 mới xét chất lượng.",
              "items": [],
              "lang": null,
              "kind": null,
              "icon": null,
              "title": null,
              "src": null,
              "alt": null,
              "md": null
            }
          ]
        }
      },
      {
        "id": "day7-k4-l3b-data-foundations-embedding-vector-store-s07-doc",
        "type": "text",
        "title": "🟦 3:00–3:25 · Chạy, so sánh và phân tích lỗi",
        "duration_min": null,
        "ai_prompts": [],
        "status": "todo",
        "body": {
          "reading_label": null,
          "blocks": [
            {
              "t": "h3",
              "html": "Chọn embedding backend trước khi đo",
              "items": [],
              "lang": null,
              "kind": null,
              "icon": null,
              "title": null,
              "src": null,
              "alt": null,
              "md": null
            },
            {
              "t": "p",
              "html": "\u003Ccode\u003EMockEmbedder\u003C/code\u003E băm MD5 chuỗi ký tự nên \u003Cstrong\u003Ekhông mã hoá ngữ nghĩa\u003C/strong\u003E. Chạy benchmark bằng nó thì mọi số liệu là nhiễu: một câu hỏi về đổi trả có thể trả về top-1 là tài liệu chính sách bảo hành, còn chunk đúng xếp hạng ba với score âm.",
              "items": [],
              "lang": null,
              "kind": null,
              "icon": null,
              "title": null,
              "src": null,
              "alt": null,
              "md": null
            },
            {
              "t": "p",
              "html": "Nếu máy và mạng cho phép, bật embedder thật (Phụ lục B) — nên cài từ đầu buổi để tải nền trong lúc code. Nếu buộc phải dùng mock, vẫn làm được bài, nhưng phải \u003Cstrong\u003Eghi rõ trong báo cáo\u003C/strong\u003E rằng số liệu bị chi phối bởi mock, và chuyển trọng tâm phân tích sang \u003Ccode\u003Ecount\u003C/code\u003E / \u003Ccode\u003Eavg_length\u003C/code\u003E / độ mạch lạc của chunk — những chỉ số không phụ thuộc embedding.",
              "items": [],
              "lang": null,
              "kind": null,
              "icon": null,
              "title": null,
              "src": null,
              "alt": null,
              "md": null
            },
            {
              "t": "h3",
              "html": "Chấm hai mức, không chỉ một",
              "items": [],
              "lang": null,
              "kind": null,
              "icon": null,
              "title": null,
              "src": null,
              "alt": null,
              "md": null
            },
            {
              "t": "p",
              "html": "Cách chấm ngây thơ là kiểm \u003Ccode\u003Edoc_id\u003C/code\u003E của tài liệu gold có nằm trong top-3 không. Cách đó \u003Cstrong\u003Ethổi phồng kết quả\u003C/strong\u003E.",
              "items": [],
              "lang": null,
              "kind": null,
              "icon": null,
              "title": null,
              "src": null,
              "alt": null,
              "md": null
            },
            {
              "t": "p",
              "html": "Một chiến lược hoàn toàn có thể lấy trọn cả ba slot top-3 từ đúng tài liệu gold mà \u003Cstrong\u003Ekhông chunk nào chứa câu trả lời\u003C/strong\u003E — chuyện này hay xảy ra với chunker theo heading, vì các section trong cùng một tài liệu nói về cùng chủ đề nên điểm gần bằng nhau và việc section nào lọt top-3 gần như ngẫu nhiên.",
              "items": [],
              "lang": null,
              "kind": null,
              "icon": null,
              "title": null,
              "src": null,
              "alt": null,
              "md": null
            },
            {
              "t": "p",
              "html": "\u003Ccode\u003Edocs/SCORING.md\u003C/code\u003E yêu cầu \u003Cem\u003Etop-3 có chunk liên quan \u003Cstrong\u003Evà\u003C/strong\u003E agent trả lời đúng\u003C/em\u003E, nên phải kiểm ở mức nội dung: khai báo cho mỗi câu hỏi một chuỗi đặc trưng phải xuất hiện trong ngữ cảnh truy xuất được, rồi kiểm chuỗi đó có thật không. Chênh lệch giữa hai cách chấm chính là phát hiện đáng giá nhất của buổi lab.",
              "items": [],
              "lang": null,
              "kind": null,
              "icon": null,
              "title": null,
              "src": null,
              "alt": null,
              "md": null
            },
            {
              "t": "p",
              "html": "Thang điểm: 2đ nếu gold ở top-1 và ngữ cảnh chứa đáp án, 1đ nếu gold ở top-2/3, 0đ nếu vắng hoặc ngữ cảnh không trả lời được.",
              "items": [],
              "lang": null,
              "kind": null,
              "icon": null,
              "title": null,
              "src": null,
              "alt": null,
              "md": null
            },
            {
              "t": "h3",
              "html": "A/B bắt buộc",
              "items": [],
              "lang": null,
              "kind": null,
              "icon": null,
              "title": null,
              "src": null,
              "alt": null,
              "md": null
            },
            {
              "t": "p",
              "html": "Chạy câu cần filter hai lần — một lần có \u003Ccode\u003Emetadata_filter\u003C/code\u003E, một lần không — trên cả ba chiến lược. Ghi lại top-3 của từng lần. Đây là bằng chứng cho câu hỏi \"metadata filter có giúp ích không\" trong REPORT_NHOM mục 3.",
              "items": [],
              "lang": null,
              "kind": null,
              "icon": null,
              "title": null,
              "src": null,
              "alt": null,
              "md": null
            },
            {
              "t": "p",
              "html": "Nếu kết quả hai lần giống hệt nhau thì câu hỏi của bạn \u003Cstrong\u003Echưa thực sự cần filter\u003C/strong\u003E — quay lại sửa câu hỏi hoặc sửa cách tách tài liệu theo \u003Ccode\u003Eaudience\u003C/code\u003E.",
              "items": [],
              "lang": null,
              "kind": null,
              "icon": null,
              "title": null,
              "src": null,
              "alt": null,
              "md": null
            },
            {
              "t": "h3",
              "html": "Phân tích lỗi",
              "items": [],
              "lang": null,
              "kind": null,
              "icon": null,
              "title": null,
              "src": null,
              "alt": null,
              "md": null
            },
            {
              "t": "p",
              "html": "Tìm ít nhất một failure case thật, viết đủ ba phần: câu hỏi nào hỏng, vì sao, đề xuất sửa. Vài hướng thường gặp:",
              "items": [],
              "lang": null,
              "kind": null,
              "icon": null,
              "title": null,
              "src": null,
              "alt": null,
              "md": null
            },
            {
              "t": "ul",
              "html": null,
              "items": [
                "Chunk đúng chủ đề nhưng \u003Cstrong\u003Ekhông chứa số liệu\u003C/strong\u003E thắng chunk có đáp án — cosine đo độ giống chủ đề, không đo mật độ thông tin trả lời được.",
                "Top-3 đúng tài liệu nhưng sai section — chunk không có overlap nên mỗi thông tin chỉ có đúng một cơ hội lọt top-k.",
                "Filter \u003Ccode\u003Eaudience\u003C/code\u003E cứng loại nhầm tài liệu chứa thông tin cần — đánh đổi giữa precision và recall."
              ],
              "lang": null,
              "kind": null,
              "icon": null,
              "title": null,
              "src": null,
              "alt": null,
              "md": null
            },
            {
              "t": "h3",
              "html": "✅ CHECKPOINT 6 — 3:25",
              "items": [],
              "lang": null,
              "kind": null,
              "icon": null,
              "title": null,
              "src": null,
              "alt": null,
              "md": null
            },
            {
              "t": "p",
              "html": "Mỗi người có \u003Ccode\u003Eket_qua_benchmark.txt\u003C/code\u003E của riêng mình và đã điền bảng top-3 vào \u003Cstrong\u003EREPORT_CANHAN mục 5\u003C/strong\u003E. Nhóm có bảng so sánh giữa các thành viên và ít nhất một failure case trong \u003Cstrong\u003EREPORT_NHOM mục 2 và 4\u003C/strong\u003E.",
              "items": [],
              "lang": null,
              "kind": null,
              "icon": null,
              "title": null,
              "src": null,
              "alt": null,
              "md": null
            }
          ]
        }
      },
      {
        "id": "day7-k4-l3b-data-foundations-embedding-vector-store-s08-doc",
        "type": "text",
        "title": "🟦 3:25–4:00 · Demo và nộp bài",
        "duration_min": null,
        "ai_prompts": [],
        "status": "todo",
        "body": {
          "reading_label": null,
          "blocks": [
            {
              "t": "h3",
              "html": "Demo 6–8 phút",
              "items": [],
              "lang": null,
              "kind": null,
              "icon": null,
              "title": null,
              "src": null,
              "alt": null,
              "md": null
            },
            {
              "t": "p",
              "html": "Mọi thành viên đều phải nói phần chiến lược của mình. Thứ tự gợi ý: chủ đề và bộ tài liệu (1'), mỗi người tóm tắt chiến lược (2'), so sánh và giải thích chiến lược nào thắng (3'), demo trực tiếp 1–2 câu (2'), hỏi đáp.",
              "items": [],
              "lang": null,
              "kind": null,
              "icon": null,
              "title": null,
              "src": null,
              "alt": null,
              "md": null
            },
            {
              "t": "p",
              "html": "Mở sẵn terminal với \u003Ccode\u003Ebench.py\u003C/code\u003E đã chạy được. Demo live mà phải debug tại chỗ là mất điểm.",
              "items": [],
              "lang": null,
              "kind": null,
              "icon": null,
              "title": null,
              "src": null,
              "alt": null,
              "md": null
            },
            {
              "t": "p",
              "html": "Ba câu giảng viên hay hỏi: chuyển sang chủ đề khác thì chiến lược nào còn dùng được; metadata filter giúp ở đâu và làm mất kết quả ở đâu; nhóm học được gì từ nhóm khác.",
              "items": [],
              "lang": null,
              "kind": null,
              "icon": null,
              "title": null,
              "src": null,
              "alt": null,
              "md": null
            },
            {
              "t": "p",
              "html": "Nhóm chưa tới lượt thì tranh thủ hoàn thiện báo cáo.",
              "items": [],
              "lang": null,
              "kind": null,
              "icon": null,
              "title": null,
              "src": null,
              "alt": null,
              "md": null
            },
            {
              "t": "h3",
              "html": "Nộp bài",
              "items": [],
              "lang": null,
              "kind": null,
              "icon": null,
              "title": null,
              "src": null,
              "alt": null,
              "md": null
            },
            {
              "t": "p",
              "html": "K4-L3B nộp \u003Cstrong\u003Elink repo GitHub\u003C/strong\u003E trên vlearn, không nộp zip.",
              "items": [],
              "lang": null,
              "kind": null,
              "icon": null,
              "title": null,
              "src": null,
              "alt": null,
              "md": null
            },
            {
              "t": "code",
              "html": "pytest tests/ -v          # phải 42 passed\ngit status                # không được thấy .venv/ hay .env\n\ngit add .\ngit commit -m \"Nộp bài Lab 07\"\ngit branch -M main\ngit remote add origin https://github.com/&lt;tài-khoản&gt;/K4-DAY07-&lt;HoVaTen&gt;-&lt;MSSV&gt;.git\ngit push -u origin main",
              "items": [],
              "lang": "bash",
              "kind": null,
              "icon": null,
              "title": null,
              "src": null,
              "alt": null,
              "md": null
            },
            {
              "t": "p",
              "html": "Tên repo theo quy ước \u003Ccode\u003EK4-DAY07-HoVaTen-MSSV\u003C/code\u003E, họ tên viết liền không dấu. Nếu bạn đã fork repo gốc thì đổi tên fork trong Settings thay vì tạo repo mới.",
              "items": [],
              "lang": null,
              "kind": null,
              "icon": null,
              "title": null,
              "src": null,
              "alt": null,
              "md": null
            },
            {
              "t": "p",
              "html": "Cấu trúc khi nộp:",
              "items": [],
              "lang": null,
              "kind": null,
              "icon": null,
              "title": null,
              "src": null,
              "alt": null,
              "md": null
            },
            {
              "t": "code",
              "html": "K4-DAY07-NguyenVanAn-21001234/\n├── src/                      # đã hoàn thiện mọi TODO\n├── data/&lt;ten-chu-de&gt;/        # 5-10 tài liệu + sources.csv\n├── report/\n│   ├── REPORT_CANHAN.md      # bản của riêng bạn\n│   └── REPORT_NHOM.md        # bản chung của nhóm\n├── bench.py\n├── ket_qua_benchmark.txt\n└── tests/, main.py, ...      # giữ nguyên",
              "items": [],
              "lang": null,
              "kind": null,
              "icon": null,
              "title": null,
              "src": null,
              "alt": null,
              "md": null
            },
            {
              "t": "h3",
              "html": "✅ CHECKPOINT 7 — 4:00",
              "items": [],
              "lang": null,
              "kind": null,
              "icon": null,
              "title": null,
              "src": null,
              "alt": null,
              "md": null
            },
            {
              "t": "objectives",
              "html": null,
              "items": [
                "\u003Ccode\u003Epytest tests/ -v\u003C/code\u003E → 42 passed, không còn \u003Ccode\u003Eraise NotImplementedError\u003C/code\u003E",
                "\u003Ccode\u003Edata/&lt;chu-de&gt;/\u003C/code\u003E có 5–10 tài liệu đủ metadata, \u003Ccode\u003Esources.csv\u003C/code\u003E khớp 1-1",
                "Có ít nhất 1 query dùng \u003Ccode\u003Emetadata_filter={\"audience\": \"buyer\"}\u003C/code\u003E (hoặc \u003Ccode\u003E\"seller\"\u003C/code\u003E)",
                "Ít nhất 1 thành viên chunk theo heading/section",
                "Hai báo cáo điền đủ, output pytest là thật",
                "\u003Ccode\u003Ebench.py\u003C/code\u003E + \u003Ccode\u003Eket_qua_benchmark.txt\u003C/code\u003E đã commit",
                "Repo đúng tên quy ước, không chứa \u003Ccode\u003E.venv/\u003C/code\u003E/\u003Ccode\u003E.env\u003C/code\u003E, đã nộp link vào vlearn"
              ],
              "lang": null,
              "kind": null,
              "icon": null,
              "title": null,
              "src": null,
              "alt": null,
              "md": null
            },
            {
              "t": "p",
              "html": "Chọn rating và dán link bài nộp bên dưới, rồi bấm \u003Cstrong\u003EXác nhận đã nộp bài\u003C/strong\u003E.",
              "items": [],
              "lang": null,
              "kind": null,
              "icon": null,
              "title": null,
              "src": null,
              "alt": null,
              "md": null
            }
          ]
        }
      },
      {
        "id": "day7-k4-l3b-data-foundations-embedding-vector-store-s09-doc",
        "type": "text",
        "title": "Phụ lục A — Lỗi thường gặp",
        "duration_min": null,
        "ai_prompts": [],
        "status": "todo",
        "body": {
          "reading_label": null,
          "blocks": [
            {
              "t": "md",
              "html": null,
              "items": [],
              "lang": null,
              "kind": null,
              "icon": null,
              "title": null,
              "src": null,
              "alt": null,
              "md": "| Triệu chứng | Nguyên nhân | Cách sửa |\n| --- | --- | --- |\n| `ModuleNotFoundError: No module named 'src'` | Chạy python từ thư mục khác | `cd` về thư mục gốc repo |\n| Test store fail dù code trông đúng | `_use_chroma = True` nhưng nhánh Chroma chưa cài đặt | Set `False`, chỉ dùng in-memory |\n| `test_no_filter_returns_all_candidates` fail | `search` và `search_with_filter` dùng hai đường code khác nhau | Cho cả hai gọi chung `_search_records` |\n| `delete_document` luôn trả `False` | Record không có `metadata['doc_id']` | Set `doc_id` trong `_make_record` |\n| `test_empty_separators_falls_back_gracefully` fail | Thiếu base case cho `separators == []` | Thêm nhánh cắt cứng theo `chunk_size` |\n| `ZeroDivisionError` trong `compare` | Chia cho `count == 0` khi text rỗng | Chặn trước khi chia |\n| Chunk vụn 5–10 ký tự | `RecursiveChunker` thiếu bước gom | Nối các mảnh nhỏ liền kề tới sát `chunk_size` |\n| `KeyError` khi đọc kết quả comparator | Tên key gõ sai | So từng ký tự với docstring |\n| Crawler báo `disallowed by robots.txt` | Nguồn không cho truy cập tự động | Đổi nguồn — không phải lỗi cần vượt qua |\n| Crawler crash `LookupError: unknown encoding` | Server trả charset không hợp lệ | Bỏ URL đó khỏi CSV, xử lý riêng |\n| `search_with_filter` luôn trả rỗng | Metadata không được trải vào từng chunk | Gộp frontmatter vào metadata khi tạo `Document` |\n| Filter không đổi kết quả gì | Corpus chỉ có một giá trị `audience`, hoặc hai đáp án nằm chung một file | Tách file theo `audience` |\n| Score âm cho chunk đúng | Đang dùng `MockEmbedder` | Bật embedder thật (Phụ lục B) |"
            }
          ]
        }
      },
      {
        "id": "day7-k4-l3b-data-foundations-embedding-vector-store-s10-doc",
        "type": "text",
        "title": "Phụ lục B — Bật embedder thật",
        "duration_min": null,
        "ai_prompts": [],
        "status": "todo",
        "body": {
          "reading_label": null,
          "blocks": [
            {
              "t": "p",
              "html": "Không ảnh hưởng 30 điểm code (42 test đều dùng mock), chỉ ảnh hưởng chất lượng số liệu ở Giai đoạn 3–4. Lần cài đầu tải khá lâu — chạy từ đầu buổi để tải nền.",
              "items": [],
              "lang": null,
              "kind": null,
              "icon": null,
              "title": null,
              "src": null,
              "alt": null,
              "md": null
            },
            {
              "t": "p",
              "html": "\u003Cstrong\u003ELocal, đa ngữ, miễn phí\u003C/strong\u003E (hợp corpus tiếng Việt):",
              "items": [],
              "lang": null,
              "kind": null,
              "icon": null,
              "title": null,
              "src": null,
              "alt": null,
              "md": null
            },
            {
              "t": "code",
              "html": "pip install -r requirements-local.txt",
              "items": [],
              "lang": "bash",
              "kind": null,
              "icon": null,
              "title": null,
              "src": null,
              "alt": null,
              "md": null
            },
            {
              "t": "p",
              "html": "rồi thêm \u003Ccode\u003EEMBEDDING_PROVIDER=local\u003C/code\u003E vào \u003Ccode\u003E.env\u003C/code\u003E.",
              "items": [],
              "lang": null,
              "kind": null,
              "icon": null,
              "title": null,
              "src": null,
              "alt": null,
              "md": null
            },
            {
              "t": "p",
              "html": "\u003Cstrong\u003EOpenAI:\u003C/strong\u003E",
              "items": [],
              "lang": null,
              "kind": null,
              "icon": null,
              "title": null,
              "src": null,
              "alt": null,
              "md": null
            },
            {
              "t": "code",
              "html": "pip install openai",
              "items": [],
              "lang": "bash",
              "kind": null,
              "icon": null,
              "title": null,
              "src": null,
              "alt": null,
              "md": null
            },
            {
              "t": "p",
              "html": "rồi thêm vào \u003Ccode\u003E.env\u003C/code\u003E:",
              "items": [],
              "lang": null,
              "kind": null,
              "icon": null,
              "title": null,
              "src": null,
              "alt": null,
              "md": null
            },
            {
              "t": "code",
              "html": "EMBEDDING_PROVIDER=openai\nOPENAI_API_KEY=sk-...\nOPENAI_EMBEDDING_MODEL=text-embedding-3-small",
              "items": [],
              "lang": "bash",
              "kind": null,
              "icon": null,
              "title": null,
              "src": null,
              "alt": null,
              "md": null
            },
            {
              "t": "p",
              "html": "\u003Cstrong\u003EGemini (Google) — không có OpenAI key thì dùng cái này:\u003C/strong\u003E",
              "items": [],
              "lang": null,
              "kind": null,
              "icon": null,
              "title": null,
              "src": null,
              "alt": null,
              "md": null
            },
            {
              "t": "p",
              "html": "Gemini API key lấy miễn phí tại \u003Ca href=\"https://aistudio.google.com/apikey\" target=\"_blank\" rel=\"noopener noreferrer\"\u003Eaistudio.google.com/apikey\u003C/a\u003E, không cần thẻ thanh toán.",
              "items": [],
              "lang": null,
              "kind": null,
              "icon": null,
              "title": null,
              "src": null,
              "alt": null,
              "md": null
            },
            {
              "t": "code",
              "html": "pip install google-genai",
              "items": [],
              "lang": "bash",
              "kind": null,
              "icon": null,
              "title": null,
              "src": null,
              "alt": null,
              "md": null
            },
            {
              "t": "p",
              "html": "rồi thêm vào \u003Ccode\u003E.env\u003C/code\u003E:",
              "items": [],
              "lang": null,
              "kind": null,
              "icon": null,
              "title": null,
              "src": null,
              "alt": null,
              "md": null
            },
            {
              "t": "code",
              "html": "EMBEDDING_PROVIDER=gemini\nGEMINI_API_KEY=...\nGEMINI_EMBEDDING_MODEL=gemini-embedding-001",
              "items": [],
              "lang": "bash",
              "kind": null,
              "icon": null,
              "title": null,
              "src": null,
              "alt": null,
              "md": null
            },
            {
              "t": "p",
              "html": "Không chọn gì thì lab dùng mock. Chọn \u003Ccode\u003Elocal\u003C/code\u003E, \u003Ccode\u003Eopenai\u003C/code\u003E, hoặc \u003Ccode\u003Egemini\u003C/code\u003E mà thiếu thư viện hoặc key thì code tự quay về mock chứ không crash — kiểm dòng \u003Ccode\u003EEmbedding backend: ...\u003C/code\u003E mà \u003Ccode\u003Emain.py\u003C/code\u003E in ra để biết mình đang chạy backend nào.",
              "items": [],
              "lang": null,
              "kind": null,
              "icon": null,
              "title": null,
              "src": null,
              "alt": null,
              "md": null
            },
            {
              "t": "p",
              "html": "\u003Ccode\u003E.env\u003C/code\u003E đã nằm trong \u003Ccode\u003E.gitignore\u003C/code\u003E. Kiểm lại repo trên GitHub sau khi push, đừng để lộ key.",
              "items": [],
              "lang": null,
              "kind": null,
              "icon": null,
              "title": null,
              "src": null,
              "alt": null,
              "md": null
            }
          ]
        }
      },
      {
        "id": "day7-k4-l3b-data-foundations-embedding-vector-store-submit",
        "type": "form",
        "title": "Nộp bài và đánh giá Lab",
        "duration_min": null,
        "ai_prompts": [],
        "status": "todo",
        "body": {
          "form": {
            "intro": null,
            "rating_label": "Đánh giá Lab này",
            "rating_help": null,
            "select_label": null,
            "select_placeholder": null,
            "select_options": [],
            "note_label": "Link bài đã nộp",
            "note_placeholder": "https://github.com/…",
            "submit_label": "Xác nhận đã nộp bài"
          }
        }
      }
    ]
  },
  "progress": {
    "done": 0,
    "total": 13,
    "percent": 0,
    "current_part_id": "day-slides-material_mtzv6qve_jdnw87"
  },
  "kc_quiz": {
    "release_id": "c3aa2510-6a73-4636-8b3f-fdb09fb69188",
    "course_id": "K4P1",
    "day_code": "day07",
    "revision_no": 1,
    "published_at": "2026-09-14T16:46:57.577375+00:00",
    "groups": [
      {
        "group_id": "day07-g-data-strategy",
        "name": "Data access, quality và governance",
        "leaf_kc_ids": [
          "kc-ai-data-delivery-route-selection",
          "kc-ai-data-classification-by-access-semantics",
          "kc-retrieval-data-inventory-governance",
          "kc-preembedding-sensitive-data-transformation",
          "kc-public-corpus-source-provenance"
        ]
      },
      {
        "group_id": "day07-g-processing",
        "name": "Input processing và document representation",
        "leaf_kc_ids": [
          "kc-document-type-extractor-routing",
          "kc-extracted-text-quality-repair",
          "kc-llm-document-representation-selection",
          "kc-document-semantic-structure-preservation",
          "kc-retrieval-document-metadata-contract"
        ]
      },
      {
        "group_id": "day07-g-chunking",
        "name": "Cơ chế và strategy chunking",
        "leaf_kc_ids": [
          "kc-fixed-window-chunk-arithmetic",
          "kc-sentence-boundary-chunker-implementation",
          "kc-recursive-separator-chunker-implementation",
          "kc-heading-section-chunker-design",
          "kc-chunking-strategy-fit-selection",
          "kc-chunk-overlap-policy",
          "kc-chunking-comparator-implementation"
        ]
      },
      {
        "group_id": "day07-g-embeddings",
        "name": "Embedding và vector geometry",
        "leaf_kc_ids": [
          "kc-embedding-semantic-space-explanation",
          "kc-embedding-encoder-flow-tracing",
          "kc-cosine-similarity-computation",
          "kc-cosine-score-interpretation",
          "kc-euclidean-distance-computation",
          "kc-vector-metric-selection",
          "kc-embedding-model-evidence-selection"
        ]
      },
      {
        "group_id": "day07-g-vector-store",
        "name": "Vector-store operation và retrieval control",
        "leaf_kc_ids": [
          "kc-vector-store-record-contract",
          "kc-vector-store-backend-initialization",
          "kc-vector-store-document-addition",
          "kc-vector-semantic-search-implementation",
          "kc-vector-search-metadata-prefilter",
          "kc-vector-store-document-deletion",
          "kc-retrieval-control-tuning",
          "kc-vector-store-deployment-selection"
        ]
      },
      {
        "group_id": "day07-g-rag-flow",
        "name": "Luồng ingestion, retrieval và grounded answer",
        "leaf_kc_ids": [
          "kc-rag-offline-online-phase-separation",
          "kc-ingestion-chunk-metadata-propagation",
          "kc-knowledge-retrieval-memory-routing",
          "kc-grounded-context-prompt-assembly"
        ]
      },
      {
        "group_id": "day07-g-evaluation",
        "name": "Evaluation và diagnosis cho retrieval",
        "leaf_kc_ids": [
          "kc-retrieval-benchmark-query-gold-design",
          "kc-retrieval-ranking-metric-computation",
          "kc-retrieved-chunk-coherence-evaluation",
          "kc-metadata-filter-utility-evaluation",
          "kc-retrieval-failure-layer-diagnosis",
          "kc-controlled-retrieval-strategy-experiment"
        ]
      }
    ],
    "knowledge_components": [
      {
        "kc_id": "kc-ai-data-classification-by-access-semantics",
        "group_id": "day07-g-data-strategy",
        "name": "Phân loại knowledge, operational và contextual data",
        "knowledge": "Knowledge data là tài liệu tham chiếu như policy và manual; operational data là trạng thái hệ thống thay đổi như order hoặc ticket; contextual data là trạng thái user hoặc session được chọn. Nhịp cập nhật và query semantics của chúng dẫn tới access path và control khác nhau.",
        "remediation_target": "Luyện phân loại source giáp ranh theo thứ nó biểu diễn và cách current state phải được đọc.",
        "is_core": true
      },
      {
        "kc_id": "kc-ai-data-delivery-route-selection",
        "group_id": "day07-g-data-strategy",
        "name": "Chọn cách đưa dữ liệu tới hệ thống AI",
        "knowledge": "Direct context phù hợp evidence nhỏ đã được cung cấp; retrieval phù hợp corpus lớn, thay đổi, riêng tư hoặc cần trích nguồn; tool/API phù hợp trạng thái vận hành trực tiếp; fine-tuning chủ yếu đổi behavior và style đã học chứ không phải kho fact cập nhật thường xuyên. Không cần external data khi model và input hiện tại đã đủ cho task.",
        "remediation_target": "Luyện route các task đối lập theo size, freshness, ownership, latency và citation requirement.",
        "is_core": true
      },
      {
        "kc_id": "kc-chunk-overlap-policy",
        "group_id": "day07-g-chunking",
        "name": "Chọn và test chunk-overlap policy",
        "knowledge": "Overlap lặp một boundary region có giới hạn để giữ meaning đi qua hai chunk kề nhau. Quá ít làm mất connection; quá nhiều tăng duplicate storage, retrieval lặp và context cost. Setting phải test trên boundary-crossing query chứ không copy một phần trăm universal.",
        "remediation_target": "Luyện retrieval qua boundary với overlap thay đổi có kiểm soát và inspect cả coverage lẫn duplication.",
        "is_core": true
      },
      {
        "kc_id": "kc-chunking-comparator-implementation",
        "group_id": "day07-g-chunking",
        "name": "Implement comparator chunking strategy tái tạo được",
        "knowledge": "Comparator chạy từng strategy trên cùng text và parameter basis, giữ actual chunk và báo statistic so sánh được như count, average length. Nó tạo structural baseline nhưng tự nó chưa chứng minh retrieval quality.",
        "remediation_target": "Luyện reproduce comparator output và check từng statistic với returned chunk.",
        "is_core": true
      },
      {
        "kc_id": "kc-chunking-strategy-fit-selection",
        "group_id": "day07-g-chunking",
        "name": "Chọn chunking strategy theo evidence của document và query",
        "knowledge": "Fixed-size, recursive, sentence, heading, semantic, proposition, parent-child, hierarchical, code-aware và layout-aware giữ relation khác nhau và có cost khác nhau. Strategy phải chọn từ document structure, answer granularity, boundary failure và evaluation evidence chứ không theo recipe dùng chung.",
        "remediation_target": "Luyện quyết định strategy cho FAQ, policy, code, table và narrative bằng cùng benchmark question.",
        "is_core": true
      },
      {
        "kc_id": "kc-controlled-retrieval-strategy-experiment",
        "group_id": "day07-g-evaluation",
        "name": "Chạy experiment retrieval strategy có kiểm soát",
        "knowledge": "Comparison hợp lệ giữ corpus, benchmark query, gold evidence và embedding backend cố định trong khi đổi một chunking hoặc metadata strategy có tên. Nó giữ top result/quality observation theo từng query, gồm case strategy khác nhau thắng, rồi giải thích vì sao thay vì chọn theo một aggregate.",
        "remediation_target": "Luyện experiment table làm rõ constant, changed variable, per-query result và exception.",
        "is_core": true
      },
      {
        "kc_id": "kc-cosine-score-interpretation",
        "group_id": "day07-g-embeddings",
        "name": "Interpret và dự đoán behavior của cosine similarity",
        "knowledge": "Cosine đo hướng vector: gần one là aligned hơn, zero là orthogonal và negative là opposite direction trong mathematical space. Product meaning và threshold hữu ích phụ thuộc embedding model/corpus nên example score không phải semantic law dùng chung.",
        "remediation_target": "Luyện pre-register prediction theo cặp, đo rồi giải thích discrepancy mà không bịa cutoff universal.",
        "is_core": true
      },
      {
        "kc_id": "kc-cosine-similarity-computation",
        "group_id": "day07-g-embeddings",
        "name": "Tính cosine similarity có xử lý zero vector",
        "knowledge": "Cosine similarity bằng dot product chia tích hai vector magnitude. Implementation phải align dimension, tính hai norm và trả safe value đã định khi một magnitude bằng zero thay vì chia zero.",
        "remediation_target": "Luyện hand calculation và unit test cho 1, 0, -1, nontrivial và zero-magnitude case.",
        "is_core": true
      },
      {
        "kc_id": "kc-document-semantic-structure-preservation",
        "group_id": "day07-g-processing",
        "name": "Giữ semantic structure của document khi normalize",
        "knowledge": "Sau extraction, heading, section, list, table, condition, exception và reading order phải được dựng lại đủ để chunk phía sau giữ meaning. Structure repair khác với chỉ bỏ noise.",
        "remediation_target": "Luyện dựng lại structure rồi test bằng câu hỏi phụ thuộc condition hoặc exception.",
        "is_core": true
      },
      {
        "kc_id": "kc-document-type-extractor-routing",
        "group_id": "day07-g-processing",
        "name": "Nhận diện document type và route đúng extractor",
        "knowledge": "Phải detect và validate content type thay vì tin filename extension. Digital PDF text, scanned image, HTML, office file và input khác cần extractor khác nhau; input không hỗ trợ hoặc mismatch phải fail với lý do traceable.",
        "remediation_target": "Luyện route các file example gây nhiễu và giải thích từng input bị reject.",
        "is_core": true
      },
      {
        "kc_id": "kc-embedding-encoder-flow-tracing",
        "group_id": "day07-g-embeddings",
        "name": "Trace luồng encoder từ text tới một embedding vector",
        "knowledge": "Text embedder tokenize input, xử lý token representation qua transformer hoặc encoder khác, rồi pool hoặc chọn token-level state thành một output vector. API che các stage nhưng model input limit và pooling behavior vẫn ảnh hưởng representation.",
        "remediation_target": "Luyện label intermediate representation và dự đoán hậu quả của truncation hoặc pooling rule khác.",
        "is_core": true
      },
      {
        "kc_id": "kc-embedding-model-evidence-selection",
        "group_id": "day07-g-embeddings",
        "name": "Chọn embedding model từ task evidence và migration impact",
        "knowledge": "Embedding choice trade retrieval quality, latency, dimensional storage, language/modality coverage, privacy, cost, context length và operational stability. Benchmark chỉ là screening signal; held-out retrieval case đại diện mạnh hơn. Đổi model còn buộc re-embed corpus đã index vì không gian vector không nên trộn.",
        "remediation_target": "Luyện compare model trên frozen query set và viết migration/re-index plan trước khi chọn.",
        "is_core": true
      },
      {
        "kc_id": "kc-embedding-semantic-space-explanation",
        "group_id": "day07-g-embeddings",
        "name": "Giải thích embedding là semantic representation đã học",
        "knowledge": "Embedding model map input được hỗ trợ thành vector trong learned space nơi geometry phục vụ similarity, clustering, deduplication và recommendation. Geometry phụ thuộc task/model; vector không phải fact đọc được và tự nó không sinh grounded answer.",
        "remediation_target": "Luyện giải thích retrieval không trùng keyword và tách similarity khỏi factual support.",
        "is_core": true
      },
      {
        "kc_id": "kc-euclidean-distance-computation",
        "group_id": "day07-g-embeddings",
        "name": "Tính Euclidean distance giữa các vector",
        "knowledge": "Euclidean distance bằng căn bậc hai của tổng bình phương difference từng coordinate. Value nhỏ hơn nghĩa là point gần nhau hơn theo coordinate scale đã chọn, vì vậy magnitude ảnh hưởng result.",
        "remediation_target": "Luyện calculation trên ví dụ một và nhiều dimension rồi so distance ordering.",
        "is_core": true
      },
      {
        "kc_id": "kc-extracted-text-quality-repair",
        "group_id": "day07-g-processing",
        "name": "Sửa lỗi extracted text trước khi index",
        "knowledge": "OCR error, encoding damage, header/footer lặp, navigation và lỗi reading order làm bẩn retrieval. Repair phải bỏ noise và normalize text nhưng vẫn giữ source meaning, không tự bịa phần thiếu.",
        "remediation_target": "Luyện diff source-to-cleaned giữ meaning và lộ rõ mọi repair chưa chắc.",
        "is_core": true
      },
      {
        "kc_id": "kc-fixed-window-chunk-arithmetic",
        "group_id": "day07-g-chunking",
        "name": "Tính boundary và số lượng chunk theo fixed window",
        "knowledge": "Với fixed-size chunking có overlap, step bằng chunk_size trừ overlap. Với document không rỗng dài hơn một chunk, expected count đi theo covered-length boundary chứ không chỉ chia cho chunk_size; overlap phải nhỏ hơn chunk_size để cửa sổ tiến lên.",
        "remediation_target": "Luyện trace window position cho case đúng boundary và có remainder, gồm cả overlap không hợp lệ.",
        "is_core": true
      },
      {
        "kc_id": "kc-grounded-context-prompt-assembly",
        "group_id": "day07-g-rag-flow",
        "name": "Lắp grounded answer prompt từ retrieved chunk",
        "knowledge": "Grounded answer path retrieve top evidence, giữ source metadata, tách context khỏi question, instruct generation chỉ dùng fact được hỗ trợ và định citation/no-information behavior. Retrieval chỉ giảm unsupported generation khi evidence liên quan được inject trung thực.",
        "remediation_target": "Luyện retrieved set chất lượng hỗn hợp và verify source theo từng claim.",
        "is_core": true
      },
      {
        "kc_id": "kc-heading-section-chunker-design",
        "group_id": "day07-g-chunking",
        "name": "Thiết kế chunking theo heading và section",
        "knowledge": "Structure-aware chunking dùng heading hierarchy và section boundary làm unit chính, giữ heading path cùng mỗi chunk và chỉ secondary split khi section vượt size budget. Cách này bảo vệ scope/exception của policy tốt hơn fixed window mù.",
        "remediation_target": "Luyện chunk nested policy section và verify condition/exception còn nằm dưới đúng heading path.",
        "is_core": true
      },
      {
        "kc_id": "kc-ingestion-chunk-metadata-propagation",
        "group_id": "day07-g-rag-flow",
        "name": "Propagate document identity và metadata qua ingestion",
        "knowledge": "Ingestion parse front matter thành document metadata, bỏ nó khỏi body content, chỉ chunk body, copy document metadata sang mọi chunk, thêm doc_id/chunk_index, tạo stable chunk identity rồi load store. Thiếu propagation làm hỏng filter, citation và delete.",
        "remediation_target": "Luyện assertion lineage end-to-end từ một source file tới mọi stored chunk record.",
        "is_core": true
      },
      {
        "kc_id": "kc-knowledge-retrieval-memory-routing",
        "group_id": "day07-g-rag-flow",
        "name": "Route knowledge retrieval tách khỏi user/session memory",
        "knowledge": "Retrieval chọn evidence liên quan từ knowledge base cho current question; memory giữ có chọn lọc user, session, preference hoặc interaction state theo write/read policy. Vector store có thể implement cả hai nhưng cùng technology không làm semantics giống nhau.",
        "remediation_target": "Luyện route example theo nó là state của ai, được read để làm gì và thay đổi ra sao.",
        "is_core": true
      },
      {
        "kc_id": "kc-llm-document-representation-selection",
        "group_id": "day07-g-processing",
        "name": "Chọn representation tài liệu theo structure và token efficiency",
        "knowledge": "Markdown thường là default gọn cho heading, list và table đơn giản; clean HTML có thể giữ layout phức tạp; plain text hợp content ít structure; JSON/YAML hợp field rõ cho máy. Representation đúng phải giữ distinction retrieval/downstream consumer cần mà không tạo token overhead thừa.",
        "remediation_target": "Luyện convert các document đối lập rồi kiểm quan hệ cần trả lời còn giữ được không.",
        "is_core": true
      },
      {
        "kc_id": "kc-metadata-filter-utility-evaluation",
        "group_id": "day07-g-evaluation",
        "name": "Đánh giá utility và recall cost của metadata filter",
        "knowledge": "Filter hữu ích bỏ wrong-domain/unauthorized candidate và tăng evidence precision; field quá chặt, thiếu hoặc không nhất quán có thể bỏ correct result. Utility đo bằng so filtered/unfiltered ranking trên cùng query và inspect cả gain/loss.",
        "remediation_target": "Luyện paired result review với quyết định keep, relax, repair hoặc remove được viết rõ.",
        "is_core": true
      },
      {
        "kc_id": "kc-preembedding-sensitive-data-transformation",
        "group_id": "day07-g-data-strategy",
        "name": "Biến đổi dữ liệu nhạy cảm trước khi embedding",
        "knowledge": "Embedding không làm sensitive source value tự nhiên vô hại. Remove, replace, hash hoặc generalize trước khi embed tùy việc identity phải bị bỏ, cần liên kết ổn định hay chỉ giữ ở mức thô hơn.",
        "remediation_target": "Luyện chọn transformation từ nhu cầu linking và retrieval utility cụ thể.",
        "is_core": true
      },
      {
        "kc_id": "kc-public-corpus-source-provenance",
        "group_id": "day07-g-data-strategy",
        "name": "Thu thập corpus công khai nhỏ có provenance kiểm tra được",
        "knowledge": "Retrieval corpus phải dùng source công khai hoặc được phép, tôn trọng terms và robots, không đăng nhập hay vượt access control, crawl hẹp/chậm khi tự động và giữ source URL, retrieval date, document version cùng permission basis trong ledger một-một.",
        "remediation_target": "Luyện audit một source list đề xuất và đối chiếu từng file với source ledger.",
        "is_core": true
      },
      {
        "kc_id": "kc-rag-offline-online-phase-separation",
        "group_id": "day07-g-rag-flow",
        "name": "Tách offline ingestion khỏi online retrieval",
        "knowledge": "Offline ingestion chạy khi source đổi: extract, clean, structure, chunk, embed và index. Online retrieval chạy mỗi question: embed query, search/filter, chọn context rồi đưa evidence sang generation. Trộn hai phase gây reprocess thừa hoặc stale index.",
        "remediation_target": "Luyện label phase, trigger, input và output cho từng pipeline operation.",
        "is_core": true
      },
      {
        "kc_id": "kc-recursive-separator-chunker-implementation",
        "group_id": "day07-g-chunking",
        "name": "Implement recursive chunking theo separator",
        "knowledge": "Recursive chunking thử separator theo priority, giữ piece vừa size, áp lower-priority separator đệ quy cho piece quá lớn và fallback sang character split có giới hạn khi không separator nào giúp tiến lên.",
        "remediation_target": "Luyện trace separator exhaustion và viết test cho một token quá lớn cùng empty separator list.",
        "is_core": true
      },
      {
        "kc_id": "kc-retrieval-benchmark-query-gold-design",
        "group_id": "day07-g-evaluation",
        "name": "Thiết kế benchmark query, gold answer và expected evidence cho retrieval",
        "knowledge": "Retrieval benchmark freeze query đa dạng, trả lời được trước comparison, ghi gold answer kiểm chứng từ source cùng supporting chunk/document dự kiến và có case exercise metadata constraint. Gold answer phải đi từ collected corpus chứ không đoán policy.",
        "remediation_target": "Luyện adversarial review benchmark về answerability, diversity, leakage và source support.",
        "is_core": true
      },
      {
        "kc_id": "kc-retrieval-control-tuning",
        "group_id": "day07-g-vector-store",
        "name": "Tune top-k, score threshold và filter cùng nhau",
        "knowledge": "Top-k control số result, threshold reject weak match, metadata filter định candidate domain. k cao có thể thêm noise, threshold chặt trả rỗng và filter sai che answer; tuning phải có no-result path rõ.",
        "remediation_target": "Luyện sweep retrieval control một biến và inspect toàn bộ ranked evidence.",
        "is_core": true
      },
      {
        "kc_id": "kc-retrieval-data-inventory-governance",
        "group_id": "day07-g-data-strategy",
        "name": "Lập inventory dữ liệu retrieval có governance",
        "knowledge": "Retrieval inventory ghi type, owner, access level, freshness hoặc re-index policy, PII status và retrieval fit của từng source. Thiếu ownership hay access là release blocker chứ không chỉ là ô metadata trống.",
        "remediation_target": "Luyện hoàn thiện inventory và dừng source thiếu ownership, permission hoặc refresh rule.",
        "is_core": true
      },
      {
        "kc_id": "kc-retrieval-document-metadata-contract",
        "group_id": "day07-g-processing",
        "name": "Định nghĩa contract metadata document có thể truy vết",
        "knowledge": "Mỗi document cần stable unique ID và provenance field như title, source URL, retrieval date, version, permission basis, cùng domain field phục vụ filter thật như audience, department, category, language hoặc semester. Value và vocabulary phải nhất quán trong corpus.",
        "remediation_target": "Luyện validate corpus hỗn hợp theo metadata schema đã viết và sửa invariant hỏng đầu tiên.",
        "is_core": true
      },
      {
        "kc_id": "kc-retrieval-failure-layer-diagnosis",
        "group_id": "day07-g-evaluation",
        "name": "Chẩn đoán retrieval failure tại layer lỗi đầu tiên",
        "knowledge": "Miss hoặc noisy result có thể từ corpus coverage, extraction/cleaning, chunk boundary, metadata, embedding compatibility, stale index, query wording, top-k, threshold hoặc filter. Diagnosis phải inspect retrieved evidence trước khi đổ cho generation và đổi một suspected layer trong khi giữ benchmark cố định.",
        "remediation_target": "Luyện review trace theo layer và rerun một hypothesis trên frozen query set.",
        "is_core": true
      },
      {
        "kc_id": "kc-retrieval-ranking-metric-computation",
        "group_id": "day07-g-evaluation",
        "name": "Tính và interpret retrieval ranking metric",
        "knowledge": "Precision@k đo relevant result trong retrieved item; recall@k đo relevant item đã retrieve trong toàn bộ relevant set; MRR nhấn rank của first relevant; NDCG gồm graded relevance và order. Mỗi metric trả lời failure question khác.",
        "remediation_target": "Luyện tính các metric trên cùng ranked list và match mỗi metric với failure nó lộ ra.",
        "is_core": true
      },
      {
        "kc_id": "kc-retrieved-chunk-coherence-evaluation",
        "group_id": "day07-g-evaluation",
        "name": "Đánh giá coherence của retrieved chunk",
        "knowledge": "Chunk coherence hỏi retrieved unit có giữ complete meaning, condition, exception và đủ neighboring context để trả lời không. Count/average length chỉ mô tả shape; phải human inspect retrieved chunk để thấy cut giữa ý và trộn topic.",
        "remediation_target": "Luyện annotate retrieved chunk và đề xuất một boundary-level repair cho mỗi defect.",
        "is_core": true
      },
      {
        "kc_id": "kc-sentence-boundary-chunker-implementation",
        "group_id": "day07-g-chunking",
        "name": "Implement chunking theo sentence boundary",
        "knowledge": "Sentence chunking detect các sentence terminator được hỗ trợ, giữ text đúng thứ tự, group không quá số câu cấu hình, trim whitespace phát sinh và xử lý input rỗng/không đều mà không trả value khác text.",
        "remediation_target": "Luyện test case punctuation, newline, empty text và final group gây nhiễu.",
        "is_core": true
      },
      {
        "kc_id": "kc-vector-metric-selection",
        "group_id": "day07-g-embeddings",
        "name": "Chọn cosine, Euclidean hoặc dot-product comparison",
        "knowledge": "Cosine nhấn direction, Euclidean gồm absolute scale, còn dot product kết hợp alignment với magnitude. Khi vector normalized, ranking có thể trùng dưới một số metric; embedding-model và index contract quyết định comparison hợp lệ.",
        "remediation_target": "Luyện metric decision trên normalized và unnormalized vector với ranking consequence rõ.",
        "is_core": true
      },
      {
        "kc_id": "kc-vector-search-metadata-prefilter",
        "group_id": "day07-g-vector-store",
        "name": "Implement metadata pre-filter trước vector ranking",
        "knowledge": "Metadata filter giới hạn candidate record trước similarity ranking. Mọi requested key-value condition phải match; filter chỉ sau global top-k có thể bỏ best result trong allowed subset.",
        "remediation_target": "Luyện case best allowed record nằm ngoài unfiltered top-k và case thiếu filter field.",
        "is_core": true
      },
      {
        "kc_id": "kc-vector-semantic-search-implementation",
        "group_id": "day07-g-vector-store",
        "name": "Implement vector similarity search và ranking",
        "knowledge": "Semantic search embed query bằng cùng compatible embedding function, score với stored vector theo metric contract, sort descending cho similarity score, cap result ở top-k rồi trả content, metadata và score cùng nhau.",
        "remediation_target": "Luyện test deterministic result order/shape, gồm tie và collection ít hơn k record.",
        "is_core": true
      },
      {
        "kc_id": "kc-vector-store-backend-initialization",
        "group_id": "day07-g-vector-store",
        "name": "Khởi tạo vector store với backend và embedder rõ",
        "knowledge": "Store initialization bind collection name và embedding function, thiết lập empty collection state rồi chọn backend có sẵn hoặc documented fallback mà không giả vờ backend lỗi đang active. Operation add/search phía sau phụ thuộc state ổn định này.",
        "remediation_target": "Luyện initialization khi backend có/không có với explicit state assertion.",
        "is_core": true
      },
      {
        "kc_id": "kc-vector-store-deployment-selection",
        "group_id": "day07-g-vector-store",
        "name": "Chọn deployment vector store theo requirement",
        "knowledge": "Embedded, self-hosted, extension trên database sẵn có và managed service trade setup speed, operational ownership, scale, metadata/hybrid-search feature, privacy, latency và cost. Product name/limit là example version-sensitive; capability bền là map requirement sang responsibility.",
        "remediation_target": "Luyện decision bằng invariant requirement và đánh dấu vendor fact là version-sensitive.",
        "is_core": true
      },
      {
        "kc_id": "kc-vector-store-document-addition",
        "group_id": "day07-g-vector-store",
        "name": "Embed và add document record vào vector store",
        "knowledge": "Khi add document, hệ thống embed từng content bằng configured function, normalize theo store record contract, giữ stable record identity và append/insert mà không làm hỏng collection state cũ. Collection size phải phản ánh mọi stored chunk.",
        "remediation_target": "Luyện repeated addition, content giống nhau và assertion từng record field.",
        "is_core": true
      },
      {
        "kc_id": "kc-vector-store-document-deletion",
        "group_id": "day07-g-vector-store",
        "name": "Xóa mọi chunk thuộc một document",
        "knowledge": "Document deletion remove mọi record có metadata doc_id bằng target, giữ unrelated record, update collection size và trả có xóa được gì không. Chỉ xóa một chunk sẽ để stale evidence lại.",
        "remediation_target": "Luyện document nhiều chunk và test repeated delete idempotent.",
        "is_core": true
      },
      {
        "kc_id": "kc-vector-store-record-contract",
        "group_id": "day07-g-vector-store",
        "name": "Thiết kế vector-store record có thể truy vết",
        "knowledge": "Vector-store record cần stable ID, original chunk content, embedding và metadata giữ document identity, source, section, version cùng filter attribute. Similarity score thuộc query result chứ không phải immutable source truth.",
        "remediation_target": "Luyện dựng lại citation và document-level lifecycle operation từ record example.",
        "is_core": true
      }
    ],
    "questions": [
      {
        "servable": true,
        "role": "initial_check",
        "hints": [
          {
            "text": "Hỏi dữ liệu nhỏ hay lớn, tĩnh hay thời gian thực, và mục tiêu là thông tin hay hành vi.",
            "hint_id": "h1",
            "penalty_policy": "supported_evidence"
          }
        ],
        "module_id": "day07-g-data-strategy",
        "max_points": 5,
        "interaction": {
          "left": [
            {
              "id": "x1",
              "text": "Ba đoạn chính sách đã có sẵn trong lời nhắc"
            },
            {
              "id": "x2",
              "text": "Kho 50.000 chính sách riêng tư, đổi hằng tuần, cần trích dẫn"
            },
            {
              "id": "x3",
              "text": "Tra trạng thái đơn hàng hiện tại"
            },
            {
              "id": "x4",
              "text": "Ổn định giọng trả lời qua nhiều yêu cầu"
            },
            {
              "id": "x5",
              "text": "Tác vụ đã đủ bằng mô hình và dữ liệu đầu vào hiện tại"
            }
          ],
          "type": "matching",
          "right": [
            {
              "id": "r1",
              "text": "Ngữ cảnh trực tiếp"
            },
            {
              "id": "r2",
              "text": "Retrieval"
            },
            {
              "id": "r3",
              "text": "Tool/API"
            },
            {
              "id": "r4",
              "text": "Fine-tuning"
            },
            {
              "id": "r5",
              "text": "Không cần dữ liệu bên ngoài"
            }
          ],
          "prompt": "Câu hỏi:\nGhép tác vụ với cách cung cấp dữ liệu phù hợp nhất.",
          "presentation_policy": {
            "do_not_align_pairs_by_row": true,
            "shuffle_right_at_delivery": true,
            "do_not_expose_internal_ids": true
          },
          "prompt_presentation": {
            "render_sections": true,
            "preserve_line_breaks": true
          }
        },
        "question_id": "d07-q001",
        "primary_kc_id": "kc-ai-data-delivery-route-selection",
        "grading_method": "objective_key",
        "question_version": 4,
        "cognitive_operation": "Understand",
        "contributing_kc_ids": [],
        "estimated_difficulty": "easy"
      },
      {
        "servable": false,
        "role": "reassessment",
        "hints": [
          {
            "text": "Một nguồn là kho tri thức; nguồn kia là trạng thái vận hành.",
            "hint_id": "h1",
            "penalty_policy": "supported_evidence"
          }
        ],
        "module_id": "day07-g-data-strategy",
        "max_points": 4,
        "interaction": {
          "type": "short_text",
          "prompt": "Bối cảnh:\nTrợ lý nhân sự phải trả lời chính sách nội bộ có trích dẫn và tra số ngày phép còn lại theo thời gian thực. Kho chính sách đổi hằng tháng; số dư đổi sau mỗi giao dịch.\n\nCâu hỏi:\nChọn cách cung cấp dữ liệu cho từng nguồn và giải thích vì sao không dùng một cách duy nhất.",
          "prompt_presentation": {
            "render_sections": true,
            "preserve_line_breaks": true
          }
        },
        "question_id": "d07-q002",
        "primary_kc_id": "kc-ai-data-delivery-route-selection",
        "grading_method": "criterion_rubric",
        "question_version": 6,
        "cognitive_operation": "Evaluate",
        "contributing_kc_ids": [],
        "estimated_difficulty": "medium"
      },
      {
        "servable": true,
        "role": "initial_check",
        "hints": [
          {
            "text": "Phân loại theo thứ nguồn biểu diễn, không theo định dạng tệp.",
            "hint_id": "h1",
            "penalty_policy": "supported_evidence"
          }
        ],
        "module_id": "day07-g-data-strategy",
        "max_points": 3,
        "interaction": {
          "left": [
            {
              "id": "x1",
              "text": "Sổ tay chính sách tuyển sinh"
            },
            {
              "id": "x2",
              "text": "Trạng thái phiếu yêu cầu vừa thay đổi"
            },
            {
              "id": "x3",
              "text": "Ngôn ngữ ưa thích của người học trong phiên chat"
            }
          ],
          "type": "matching",
          "right": [
            {
              "id": "r1",
              "text": "Dữ liệu tri thức"
            },
            {
              "id": "r2",
              "text": "Dữ liệu vận hành"
            },
            {
              "id": "r3",
              "text": "Dữ liệu ngữ cảnh"
            }
          ],
          "prompt": "Câu hỏi:\nGhép nguồn dữ liệu với loại dữ liệu.",
          "presentation_policy": {
            "do_not_align_pairs_by_row": true,
            "shuffle_right_at_delivery": true,
            "do_not_expose_internal_ids": true
          },
          "prompt_presentation": {
            "render_sections": true,
            "preserve_line_breaks": true
          }
        },
        "question_id": "d07-q003",
        "primary_kc_id": "kc-ai-data-classification-by-access-semantics",
        "grading_method": "objective_key",
        "question_version": 4,
        "cognitive_operation": "Understand",
        "contributing_kc_ids": [],
        "estimated_difficulty": "easy"
      },
      {
        "servable": false,
        "role": "reassessment",
        "hints": [
          {
            "text": "Hỏi trạng thái của ai/cái gì và nó thay đổi khi nào.",
            "hint_id": "h1",
            "penalty_policy": "supported_evidence"
          }
        ],
        "module_id": "day07-g-data-strategy",
        "max_points": 4,
        "interaction": {
          "type": "short_text",
          "prompt": "Bối cảnh:\nMột bảng có `course_policy`, `seat_remaining`, `student_language`. `student_language` chỉ là lựa chọn ngôn ngữ cho phiên chat hiện tại, không phải hồ sơ lưu lâu dài.\n\nCâu hỏi:\nPhân loại ba trường dữ liệu, nêu bên phụ trách, nhịp cập nhật và cách truy cập phù hợp.",
          "prompt_presentation": {
            "render_sections": true,
            "preserve_line_breaks": true
          }
        },
        "question_id": "d07-q004",
        "primary_kc_id": "kc-ai-data-classification-by-access-semantics",
        "grading_method": "criterion_rubric",
        "question_version": 4,
        "cognitive_operation": "Evaluate",
        "contributing_kc_ids": [],
        "estimated_difficulty": "medium"
      },
      {
        "servable": true,
        "role": "initial_check",
        "hints": [
          {
            "text": "Không index nguồn chỉ vì đọc được file.",
            "hint_id": "h1",
            "penalty_policy": "supported_evidence"
          }
        ],
        "module_id": "day07-g-data-strategy",
        "max_points": 3,
        "interaction": {
          "left": [
            {
              "id": "x1",
              "text": "Sổ tay công khai đã có phiên bản, do Phòng học vụ sở hữu và cho phép truy cập"
            },
            {
              "id": "x2",
              "text": "Đoạn chat nội bộ có email, chưa rõ người phụ trách"
            },
            {
              "id": "x3",
              "text": "Trang hỏi đáp do bộ phận hỗ trợ sở hữu, được cập nhật hằng tuần"
            }
          ],
          "type": "matching",
          "right": [
            {
              "id": "r1",
              "text": "Đưa vào sau khi ghi người phụ trách, quyền truy cập, phiên bản và lịch làm mới"
            },
            {
              "id": "r2",
              "text": "Đánh dấu chờ xử lý hoặc loại ra cho đến khi rõ quyền và người phụ trách"
            },
            {
              "id": "r3",
              "text": "Ghi người phụ trách và lịch cập nhật trước khi quyết định đưa vào theo chính sách"
            }
          ],
          "prompt": "Một danh mục có ba nguồn: sổ tay công khai đã có phiên bản; đoạn chat nội bộ có email, chưa rõ người phụ trách; trang hỏi đáp do bộ phận hỗ trợ cập nhật hằng tuần.\n\nGhép từng nguồn với quyết định đúng trước khi đưa vào kho truy xuất.",
          "presentation_policy": {
            "do_not_align_pairs_by_row": true,
            "shuffle_right_at_delivery": true,
            "do_not_expose_internal_ids": true
          },
          "prompt_presentation": {
            "render_sections": true,
            "preserve_line_breaks": true
          }
        },
        "question_id": "d07-q005",
        "primary_kc_id": "kc-retrieval-data-inventory-governance",
        "grading_method": "objective_key",
        "question_version": 6,
        "cognitive_operation": "Analyze",
        "contributing_kc_ids": [],
        "estimated_difficulty": "medium"
      },
      {
        "servable": true,
        "role": "initial_check",
        "hints": [
          {
            "text": "Bắt đầu từ yêu cầu truy vấn: cần bỏ, che, khái quát hay giữ trường nào?",
            "hint_id": "h1",
            "penalty_policy": "supported_evidence"
          }
        ],
        "module_id": "day07-g-data-strategy",
        "max_points": 4,
        "interaction": {
          "left": [
            {
              "id": "x1",
              "text": "Không cần danh tính cá nhân"
            },
            {
              "id": "x2",
              "text": "Cần nối các bản ghi của cùng một người nhưng không cần biết tên"
            },
            {
              "id": "x3",
              "text": "Chỉ cần nhóm tuổi"
            },
            {
              "id": "x4",
              "text": "Cần giữ vai trò nhưng bỏ tên thật"
            }
          ],
          "type": "matching",
          "right": [
            {
              "id": "r1",
              "text": "Loại bỏ"
            },
            {
              "id": "r2",
              "text": "Mã băm ổn định"
            },
            {
              "id": "r3",
              "text": "Khái quát hóa"
            },
            {
              "id": "r4",
              "text": "Thay bằng tên giữ chỗ thể hiện vai trò"
            }
          ],
          "prompt": "Câu hỏi:\nGhép nhu cầu truy xuất với phép biến đổi tối thiểu.",
          "presentation_policy": {
            "do_not_align_pairs_by_row": true,
            "shuffle_right_at_delivery": true,
            "do_not_expose_internal_ids": true
          },
          "prompt_presentation": {
            "render_sections": true,
            "preserve_line_breaks": true
          }
        },
        "question_id": "d07-q006",
        "primary_kc_id": "kc-preembedding-sensitive-data-transformation",
        "grading_method": "objective_key",
        "question_version": 3,
        "cognitive_operation": "Understand",
        "contributing_kc_ids": [],
        "estimated_difficulty": "easy"
      },
      {
        "servable": false,
        "role": "reassessment",
        "hints": [
          {
            "text": "Mục tiêu chỉ là so sánh nhóm chương trình và loại vấn đề, không phải theo dõi một người hay một ca hỗ trợ.",
            "hint_id": "h1",
            "penalty_policy": "supported_evidence"
          }
        ],
        "module_id": "day07-g-data-strategy",
        "max_points": 4,
        "interaction": {
          "type": "short_text",
          "prompt": "Bối cảnh:\nTập phản hồi tư vấn có `advisor_name`, `student_email`, `support_case_id`, `program` và `issue_category`. Bài kiểm thử chỉ cần so sánh các vấn đề phổ biến theo chương trình; không cần nối các phản hồi của cùng một người học.\n\nCâu hỏi:\nThiết kế phép biến đổi trước khi tạo embeddings.",
          "prompt_presentation": {
            "render_sections": true,
            "preserve_line_breaks": true
          }
        },
        "question_id": "d07-q007",
        "primary_kc_id": "kc-preembedding-sensitive-data-transformation",
        "grading_method": "criterion_rubric",
        "question_version": 4,
        "cognitive_operation": "Evaluate",
        "contributing_kc_ids": [],
        "estimated_difficulty": "hard"
      },
      {
        "servable": true,
        "role": "initial_check",
        "hints": [
          {
            "text": "Người kiểm tra phải lần lại được tệp, nguồn gốc, phiên bản và quyết định đã đưa ra.",
            "hint_id": "h1",
            "penalty_policy": "supported_evidence"
          }
        ],
        "module_id": "day07-g-data-strategy",
        "max_points": 3,
        "interaction": {
          "left": [
            {
              "id": "x1",
              "text": "Quyền truy cập"
            },
            {
              "id": "x2",
              "text": "Phạm vi thu thập"
            },
            {
              "id": "x3",
              "text": "Nguồn gốc của từng tệp"
            }
          ],
          "type": "matching",
          "right": [
            {
              "id": "r1",
              "text": "Kiểm tra điều khoản và `robots.txt`; không vượt qua màn hình đăng nhập"
            },
            {
              "id": "r2",
              "text": "Chỉ lấy đúng URL đã duyệt, với tốc độ hợp lý"
            },
            {
              "id": "r3",
              "text": "Lưu URL gốc, thời điểm lấy, phiên bản hoặc mã băm và căn cứ quyền sử dụng"
            }
          ],
          "prompt": "Nhóm thu thập 12 trang chính sách công khai của một trường.\n\nGhép mỗi việc cần kiểm soát với cách thực hiện phù hợp để nguồn gốc của từng tệp có thể được kiểm tra lại.",
          "presentation_policy": {
            "do_not_align_pairs_by_row": true,
            "shuffle_right_at_delivery": true,
            "do_not_expose_internal_ids": true
          },
          "prompt_presentation": {
            "render_sections": true,
            "preserve_line_breaks": true
          }
        },
        "question_id": "d07-q008",
        "primary_kc_id": "kc-public-corpus-source-provenance",
        "grading_method": "objective_key",
        "question_version": 5,
        "cognitive_operation": "Analyze",
        "contributing_kc_ids": [],
        "estimated_difficulty": "medium"
      },
      {
        "servable": true,
        "role": "initial_check",
        "hints": [
          {
            "text": "Kiểm MIME, chữ ký tệp và nội dung thực; đừng chỉ tin phần mở rộng.",
            "hint_id": "h1",
            "penalty_policy": "supported_evidence"
          }
        ],
        "module_id": "day07-g-processing",
        "max_points": 5,
        "interaction": {
          "left": [
            {
              "id": "x1",
              "text": "PDF số có lớp chữ"
            },
            {
              "id": "x2",
              "text": "PDF chỉ gồm ảnh quét"
            },
            {
              "id": "x3",
              "text": "Bài viết HTML"
            },
            {
              "id": "x4",
              "text": "Tệp `.pdf` nhưng chữ ký tệp là ZIP của bộ Office"
            },
            {
              "id": "x5",
              "text": "Dạng tệp nhị phân không hỗ trợ"
            }
          ],
          "type": "matching",
          "right": [
            {
              "id": "r1",
              "text": "Trình phân tích lớp chữ của PDF"
            },
            {
              "id": "r2",
              "text": "Luồng OCR"
            },
            {
              "id": "r3",
              "text": "Trình phân tích/làm sạch HTML"
            },
            {
              "id": "r4",
              "text": "Dùng trình phân tích tài liệu Office và ghi nhật ký việc đuôi tệp không khớp nội dung"
            },
            {
              "id": "r5",
              "text": "Từ chối dạng không hỗ trợ và nêu lý do"
            }
          ],
          "prompt": "Câu hỏi:\nGhép dữ liệu đầu vào với cách xử lý.",
          "presentation_policy": {
            "do_not_align_pairs_by_row": true,
            "shuffle_right_at_delivery": true,
            "do_not_expose_internal_ids": true
          },
          "prompt_presentation": {
            "render_sections": true,
            "preserve_line_breaks": true
          }
        },
        "question_id": "d07-q009",
        "primary_kc_id": "kc-document-type-extractor-routing",
        "grading_method": "objective_key",
        "question_version": 4,
        "cognitive_operation": "Understand",
        "contributing_kc_ids": [],
        "estimated_difficulty": "easy"
      },
      {
        "servable": false,
        "role": "reassessment",
        "hints": [
          {
            "text": "PDF là định dạng bao chứa; kiểm tra xem có lớp chữ hay chỉ có ảnh.",
            "hint_id": "h1",
            "penalty_policy": "supported_evidence"
          }
        ],
        "module_id": "day07-g-processing",
        "max_points": 4,
        "interaction": {
          "type": "short_text",
          "prompt": "Bối cảnh:\n`manual.pdf` trả MIME `application/pdf` nhưng việc trích xuất chữ rỗng; khi hiển thị trang thì thấy chữ nằm trong ảnh.\n\nCâu hỏi:\nNêu cách nhận diện, cách xử lý, cách kiểm tra và nhật ký cần giữ.",
          "prompt_presentation": {
            "render_sections": true,
            "preserve_line_breaks": true
          }
        },
        "question_id": "d07-q010",
        "primary_kc_id": "kc-document-type-extractor-routing",
        "grading_method": "criterion_rubric",
        "question_version": 5,
        "cognitive_operation": "Analyze",
        "contributing_kc_ids": [],
        "estimated_difficulty": "medium"
      },
      {
        "servable": true,
        "role": "initial_check",
        "hints": [
          {
            "text": "Chỉ sửa điều nguồn cho phép xác minh.",
            "hint_id": "h1",
            "penalty_policy": "supported_evidence"
          }
        ],
        "module_id": "day07-g-processing",
        "max_points": 4,
        "interaction": {
          "left": [
            {
              "id": "x1",
              "text": "Ảnh gốc xác nhận `retrievai` là `retrieval`"
            },
            {
              "id": "x2",
              "text": "Tiêu đề lặp ở mọi trang"
            },
            {
              "id": "x3",
              "text": "Hai cột bị xen dòng"
            },
            {
              "id": "x4",
              "text": "Con số vẫn mờ trên ảnh gốc"
            }
          ],
          "type": "matching",
          "right": [
            {
              "id": "r1",
              "text": "Sửa theo ảnh gốc và lưu dấu vết sửa"
            },
            {
              "id": "r2",
              "text": "Loại tiêu đề lặp, đồng thời lưu quy tắc đã áp dụng"
            },
            {
              "id": "r3",
              "text": "Dựng lại thứ tự đọc theo bố cục ảnh gốc"
            },
            {
              "id": "r4",
              "text": "Đánh dấu chưa đọc được, không đoán giá trị"
            }
          ],
          "prompt": "Văn bản trích xuất có lỗi `retrievai`, tiêu đề lặp ở mọi trang, hai cột bị xen dòng và một con số mờ. Ghép từng lỗi với cách xử lý được phép.",
          "presentation_policy": {
            "do_not_align_pairs_by_row": true,
            "shuffle_right_at_delivery": true,
            "do_not_expose_internal_ids": true
          },
          "prompt_presentation": {
            "render_sections": true,
            "preserve_line_breaks": true
          }
        },
        "question_id": "d07-q011",
        "primary_kc_id": "kc-extracted-text-quality-repair",
        "grading_method": "objective_key",
        "question_version": 4,
        "cognitive_operation": "Analyze",
        "contributing_kc_ids": [],
        "estimated_difficulty": "medium"
      },
      {
        "servable": true,
        "role": "initial_check",
        "hints": [
          {
            "text": "Không có một định dạng tốt nhất cho mọi tài liệu.",
            "hint_id": "h1",
            "penalty_policy": "supported_evidence"
          }
        ],
        "module_id": "day07-g-processing",
        "max_points": 4,
        "interaction": {
          "left": [
            {
              "id": "x1",
              "text": "Chính sách có tiêu đề/danh sách/bảng đơn giản"
            },
            {
              "id": "x2",
              "text": "Trang có bố cục/bảng phức tạp cần giữ quan hệ DOM"
            },
            {
              "id": "x3",
              "text": "Nhật ký kể lại sự việc gần như không có cấu trúc"
            },
            {
              "id": "x4",
              "text": "Danh mục có trường dữ liệu/lược đồ ổn định"
            }
          ],
          "type": "matching",
          "right": [
            {
              "id": "r1",
              "text": "Markdown"
            },
            {
              "id": "r2",
              "text": "HTML đã làm sạch"
            },
            {
              "id": "r3",
              "text": "Văn bản thuần"
            },
            {
              "id": "r4",
              "text": "JSON/YAML"
            }
          ],
          "prompt": "Câu hỏi:\nGhép nguồn với dạng biểu diễn phù hợp nhất.",
          "presentation_policy": {
            "do_not_align_pairs_by_row": true,
            "shuffle_right_at_delivery": true,
            "do_not_expose_internal_ids": true
          },
          "prompt_presentation": {
            "render_sections": true,
            "preserve_line_breaks": true
          }
        },
        "question_id": "d07-q012",
        "primary_kc_id": "kc-llm-document-representation-selection",
        "grading_method": "objective_key",
        "question_version": 3,
        "cognitive_operation": "Understand",
        "contributing_kc_ids": [],
        "estimated_difficulty": "easy"
      },
      {
        "servable": false,
        "role": "reassessment",
        "hints": [
          {
            "text": "Truy vấn phụ thuộc ngoại lệ thuộc mục nào.",
            "hint_id": "h1",
            "penalty_policy": "supported_evidence"
          }
        ],
        "module_id": "day07-g-processing",
        "max_points": 4,
        "interaction": {
          "type": "short_text",
          "prompt": "Bối cảnh:\nMột chính sách có tiêu đề lồng nhau, bảng ngoại lệ đơn giản và nhiều thành phần điều hướng HTML. Câu hỏi cần trả đúng ngoại lệ theo từng mục.\n\nCâu hỏi:\nChọn dạng biểu diễn, nêu phần giữ/bỏ và giải thích chi phí biểu diễn chấp nhận được.",
          "prompt_presentation": {
            "render_sections": true,
            "preserve_line_breaks": true
          }
        },
        "question_id": "d07-q013",
        "primary_kc_id": "kc-llm-document-representation-selection",
        "grading_method": "criterion_rubric",
        "question_version": 5,
        "cognitive_operation": "Evaluate",
        "contributing_kc_ids": [],
        "estimated_difficulty": "hard"
      },
      {
        "servable": true,
        "role": "initial_check",
        "hints": [
          {
            "text": "Điều quan trọng không chỉ là từ ngữ mà là ngoại lệ thuộc mục nào.",
            "hint_id": "h1",
            "penalty_policy": "supported_evidence"
          }
        ],
        "module_id": "day07-g-processing",
        "max_points": 1,
        "interaction": {
          "type": "single_select",
          "prompt": "Một trang có tiêu đề `Hoàn phí`, điều kiện chung, bảng hạn chót và ghi chú “chỉ áp dụng cho học viên trao đổi”. Bản văn bản thuần đặt ghi chú giữa các điều kiện chung.\n\nCách biểu diễn nào giữ đúng ý nghĩa?",
          "choices": [
            {
              "text": "Giữ ghi chú như điều kiện chung cho toàn mục Hoàn phí.",
              "choice_id": "c1"
            },
            {
              "text": "Giữ tiêu đề và bảng có cấu trúc; gắn ghi chú vào hàng hoặc chương trình học viên trao đổi mà nó bổ nghĩa.",
              "choice_id": "c2"
            },
            {
              "text": "Bỏ ghi chú vì văn bản thuần không giữ được vị trí chính xác.",
              "choice_id": "c3"
            },
            {
              "text": "Chuyển bảng thành một câu dài và gắn ghi chú vào cuối trang.",
              "choice_id": "c4"
            }
          ],
          "presentation_policy": {
            "do_not_expose_internal_ids": true,
            "shuffle_choices_at_delivery": true
          },
          "prompt_presentation": {
            "render_sections": true,
            "preserve_line_breaks": true
          }
        },
        "question_id": "d07-q014",
        "primary_kc_id": "kc-document-semantic-structure-preservation",
        "grading_method": "objective_key",
        "question_version": 3,
        "cognitive_operation": "Analyze",
        "contributing_kc_ids": [],
        "estimated_difficulty": "medium"
      },
      {
        "servable": false,
        "role": "follow_up",
        "hints": [
          {
            "text": "Một trường dữ liệu chỉ hữu ích khi danh tính và tập giá trị nhất quán.",
            "hint_id": "h1",
            "penalty_policy": "supported_evidence"
          }
        ],
        "module_id": "day07-g-processing",
        "max_points": 4,
        "interaction": {
          "type": "short_text",
          "prompt": "Bối cảnh:\nKho chính sách cần lọc theo khoa, ngôn ngữ và học kỳ.\n\nCâu hỏi:\nViết quy ước metadata, tập giá trị cho phép và hai quy tắc từ chối.",
          "prompt_presentation": {
            "render_sections": true,
            "preserve_line_breaks": true
          }
        },
        "question_id": "d07-q015",
        "primary_kc_id": "kc-retrieval-document-metadata-contract",
        "grading_method": "criterion_rubric",
        "question_version": 6,
        "cognitive_operation": "Create",
        "contributing_kc_ids": [],
        "estimated_difficulty": "hard"
      },
      {
        "servable": false,
        "role": "initial_check",
        "hints": [
          {
            "text": "Cửa sổ tiến theo bước, không theo chunk_size.",
            "hint_id": "h1",
            "penalty_policy": "supported_evidence"
          }
        ],
        "module_id": "day07-g-chunking",
        "max_points": 4,
        "interaction": {
          "type": "short_text",
          "prompt": "Bối cảnh:\nTài liệu dài 1.050 ký tự, `chunk_size=400`, `overlap=100`.\n\nCâu hỏi:\nTính bước, các vị trí bắt đầu, độ dài chunk cuối và số chunk.",
          "prompt_presentation": {
            "render_sections": true,
            "preserve_line_breaks": true
          }
        },
        "question_id": "d07-q016",
        "primary_kc_id": "kc-fixed-window-chunk-arithmetic",
        "grading_method": "criterion_rubric",
        "question_version": 6,
        "cognitive_operation": "Apply",
        "contributing_kc_ids": [],
        "estimated_difficulty": "medium"
      },
      {
        "servable": true,
        "role": "reassessment",
        "hints": [
          {
            "text": "Sau bốn chunk đầy đủ vẫn còn 50 ký tự cần được phủ.",
            "hint_id": "h1",
            "penalty_policy": "supported_evidence"
          }
        ],
        "module_id": "day07-g-chunking",
        "max_points": 1,
        "interaction": {
          "type": "single_select",
          "prompt": "`length=1050`, `chunk_size=250`, `overlap=0`. Kết quả nào đúng?",
          "choices": [
            {
              "text": "Vị trí bắt đầu là 0, 250, 500, 750; tạo bốn chunk và bỏ 50 ký tự cuối.",
              "choice_id": "c1"
            },
            {
              "text": "Vị trí bắt đầu là 0, 250, 500, 750, 1000; tạo năm chunk, chunk cuối có 50 ký tự.",
              "choice_id": "c2"
            },
            {
              "text": "Vị trí bắt đầu là 0, 250, 500, 750, 1000, 1250; tạo thêm một chunk rỗng.",
              "choice_id": "c3"
            },
            {
              "text": "Vị trí bắt đầu là 0, 125, 250, 375, 500, 625, 750, 875 vì overlap bằng 0.",
              "choice_id": "c4"
            }
          ],
          "presentation_policy": {
            "do_not_align_pairs_by_row": false,
            "shuffle_right_at_delivery": false,
            "do_not_expose_internal_ids": true,
            "shuffle_choices_at_delivery": true
          },
          "prompt_presentation": {
            "render_sections": true,
            "preserve_line_breaks": true
          }
        },
        "question_id": "d07-q017",
        "primary_kc_id": "kc-fixed-window-chunk-arithmetic",
        "grading_method": "objective_key",
        "question_version": 8,
        "cognitive_operation": "Apply",
        "contributing_kc_ids": [],
        "estimated_difficulty": "easy"
      },
      {
        "servable": true,
        "role": "follow_up",
        "hints": [
          {
            "text": "Tính `step=chunk_size-overlap`.",
            "hint_id": "h1",
            "penalty_policy": "supported_evidence"
          }
        ],
        "module_id": "day07-g-chunking",
        "max_points": 1,
        "interaction": {
          "type": "single_select",
          "prompt": "Bối cảnh:\n`chunk_size=200`, `overlap=200`. Điều gì sai?",
          "choices": [
            {
              "text": "bước bằng 0 nên cửa sổ không tiến; phải yêu cầu `0 ≤ overlap \u003C chunk_size`",
              "choice_id": "a"
            },
            {
              "text": "Tạo đúng một chunk 200 ký tự rồi dừng cho mọi tài liệu dài hơn cửa sổ",
              "choice_id": "b"
            },
            {
              "text": "Overlap bằng kích thước giữ continuity tối đa mà không tăng trùng lặp hoặc tính toán",
              "choice_id": "c"
            },
            {
              "text": "Chỉ cần tăng top-k ở truy xuất để vòng lặp chia chunk tự động tiến và dừng",
              "choice_id": "d"
            }
          ],
          "presentation_policy": {
            "shuffle_at_delivery": true,
            "do_not_expose_choice_ids": true
          },
          "prompt_presentation": {
            "render_sections": true,
            "preserve_line_breaks": true
          }
        },
        "question_id": "d07-q018",
        "primary_kc_id": "kc-fixed-window-chunk-arithmetic",
        "grading_method": "objective_key",
        "question_version": 6,
        "cognitive_operation": "Understand",
        "contributing_kc_ids": [],
        "estimated_difficulty": "easy"
      },
      {
        "servable": true,
        "role": "initial_check",
        "hints": [
          {
            "text": "Theo quy ước dấu kết thúc cụ thể và nhóm tuần tự.",
            "hint_id": "h1",
            "penalty_policy": "supported_evidence"
          }
        ],
        "module_id": "day07-g-chunking",
        "max_points": 4,
        "interaction": {
          "left": [
            {
              "id": "x1",
              "text": "Giữ nguyên nội dung câu"
            },
            {
              "id": "x2",
              "text": "Không đảo thứ tự"
            },
            {
              "id": "x3",
              "text": "Giới hạn nhóm"
            },
            {
              "id": "x4",
              "text": "dữ liệu đầu vào rỗng"
            }
          ],
          "type": "matching",
          "right": [
            {
              "id": "r1",
              "text": "Các câu ghép lại theo thứ tự vẫn giữ nguyên nội dung và dấu câu của từng câu."
            },
            {
              "id": "r2",
              "text": "Các câu xuất hiện theo cùng thứ tự như đầu vào."
            },
            {
              "id": "r3",
              "text": "Không chunk nào chứa quá hai câu."
            },
            {
              "id": "r4",
              "text": "Trả danh sách rỗng, không trả chuỗi rỗng hay giá trị không phải danh sách."
            }
          ],
          "prompt": "Quy ước tách câu hỗ trợ `. `, `! `, `? `, `.` ngay trước dấu xuống dòng và dấu chấm ở cuối văn bản; mỗi chunk có tối đa hai câu. Ghép yêu cầu với điều kiện kiểm thử đúng.",
          "presentation_policy": {
            "do_not_align_pairs_by_row": true,
            "shuffle_right_at_delivery": true,
            "do_not_expose_internal_ids": true,
            "shuffle_choices_at_delivery": false
          },
          "prompt_presentation": {
            "render_sections": true,
            "preserve_line_breaks": true
          }
        },
        "question_id": "d07-q019",
        "primary_kc_id": "kc-sentence-boundary-chunker-implementation",
        "grading_method": "objective_key",
        "question_version": 7,
        "cognitive_operation": "Analyze",
        "contributing_kc_ids": [],
        "estimated_difficulty": "medium"
      },
      {
        "servable": true,
        "role": "initial_check",
        "hints": [
          {
            "text": "Mỗi lời gọi đệ quy phải giảm dấu phân tách hoặc giảm chiều dài phần văn bản.",
            "hint_id": "h1",
            "penalty_policy": "supported_evidence"
          }
        ],
        "module_id": "day07-g-chunking",
        "max_points": 1,
        "interaction": {
          "type": "ordering",
          "prompt": "Bộ chia đệ quy dùng thứ tự ưu tiên `[\"\\n\\n\", \"\\n\", \". \", \" \", \"\"]`. Sắp xếp các bước khi một phần văn bản vẫn dài hơn giới hạn kích thước.",
          "options": [
            {
              "text": "Thử dấu phân tách có thứ tự ưu tiên cao nhất còn lại trên phần văn bản quá dài.",
              "option_id": "o1"
            },
            {
              "text": "Giữ các phần không vượt giới hạn theo đúng thứ tự.",
              "option_id": "o2"
            },
            {
              "text": "Đệ quy phần còn quá dài bằng dấu phân tách thứ tự ưu tiên thấp hơn.",
              "option_id": "o3"
            },
            {
              "text": "Khi hết dấu phân tách hữu ích, chia theo ký tự với độ dài bị chặn để luôn kết thúc.",
              "option_id": "o4"
            }
          ],
          "presentation_policy": {
            "do_not_align_pairs_by_row": false,
            "shuffle_right_at_delivery": false,
            "do_not_expose_internal_ids": true,
            "shuffle_choices_at_delivery": true
          },
          "prompt_presentation": {
            "render_sections": true,
            "preserve_line_breaks": true
          }
        },
        "question_id": "d07-q020",
        "primary_kc_id": "kc-recursive-separator-chunker-implementation",
        "grading_method": "objective_key",
        "question_version": 6,
        "cognitive_operation": "Analyze",
        "contributing_kc_ids": [],
        "estimated_difficulty": "medium"
      },
      {
        "servable": true,
        "role": "initial_check",
        "hints": [
          {
            "text": "Chia phụ không được làm mất tổ tiên của tiêu đề.",
            "hint_id": "h1",
            "penalty_policy": "supported_evidence"
          }
        ],
        "module_id": "day07-g-chunking",
        "max_points": 4,
        "interaction": {
          "left": [
            {
              "id": "x1",
              "text": "Mục không vượt ngân sách kích thước"
            },
            {
              "id": "x2",
              "text": "Mục vượt ngân sách kích thước"
            },
            {
              "id": "x3",
              "text": "Chunk thuộc `# Học phí \u003E ## Hoàn phí \u003E ### Sinh viên trao đổi`"
            },
            {
              "id": "x4",
              "text": "Ghi chú ngoại lệ ở cuối mục"
            }
          ],
          "type": "matching",
          "right": [
            {
              "id": "r1",
              "text": "Giữ mục làm một đơn vị chính."
            },
            {
              "id": "r2",
              "text": "Chia phụ bên trong mục, vẫn giữ đường dẫn tiêu đề cho mọi phần con."
            },
            {
              "id": "r3",
              "text": "Lưu đường dẫn tiêu đề đó trong metadata của chunk."
            },
            {
              "id": "r4",
              "text": "Giữ ghi chú cùng mục hoặc gắn rõ nó bổ nghĩa cho phần nào."
            }
          ],
          "prompt": "Ghép yêu cầu của chính sách có tiêu đề lồng nhau với thiết kế chunk phù hợp.",
          "presentation_policy": {
            "do_not_align_pairs_by_row": true,
            "shuffle_right_at_delivery": true,
            "do_not_expose_internal_ids": true,
            "shuffle_choices_at_delivery": false
          },
          "prompt_presentation": {
            "render_sections": true,
            "preserve_line_breaks": true
          }
        },
        "question_id": "d07-q021",
        "primary_kc_id": "kc-heading-section-chunker-design",
        "grading_method": "objective_key",
        "question_version": 6,
        "cognitive_operation": "Analyze",
        "contributing_kc_ids": [],
        "estimated_difficulty": "medium"
      },
      {
        "servable": true,
        "role": "initial_check",
        "hints": [
          {
            "text": "Hỏi ranh giới tự nhiên của nguồn nằm ở đâu.",
            "hint_id": "h1",
            "penalty_policy": "supported_evidence"
          }
        ],
        "module_id": "day07-g-chunking",
        "max_points": 5,
        "interaction": {
          "left": [
            {
              "id": "x1",
              "text": "FAQ ngắn, mỗi mục độc lập"
            },
            {
              "id": "x2",
              "text": "Chính sách có tiêu đề lồng nhau và ngoại lệ"
            },
            {
              "id": "x3",
              "text": "Nguồn mã nguồn cần giữ hàm/lớp"
            },
            {
              "id": "x4",
              "text": "PDF bảng nhiều cột"
            },
            {
              "id": "x5",
              "text": "Văn bản tường thuật dài, không có tiêu đề rõ"
            }
          ],
          "type": "matching",
          "right": [
            {
              "id": "r1",
              "text": "Theo mục FAQ"
            },
            {
              "id": "r2",
              "text": "Theo cấu trúc tiêu đề"
            },
            {
              "id": "r3",
              "text": "Theo cấu trúc mã nguồn"
            },
            {
              "id": "r4",
              "text": "Theo bố cục trang"
            },
            {
              "id": "r5",
              "text": "Đệ quy hoặc theo câu, rồi đánh giá"
            }
          ],
          "prompt": "Câu hỏi:\nGhép loại tài liệu với chiến lược khởi đầu hợp lý.",
          "presentation_policy": {
            "do_not_align_pairs_by_row": true,
            "shuffle_right_at_delivery": true,
            "do_not_expose_internal_ids": true
          },
          "prompt_presentation": {
            "render_sections": true,
            "preserve_line_breaks": true
          }
        },
        "question_id": "d07-q022",
        "primary_kc_id": "kc-chunking-strategy-fit-selection",
        "grading_method": "objective_key",
        "question_version": 6,
        "cognitive_operation": "Understand",
        "contributing_kc_ids": [],
        "estimated_difficulty": "easy"
      },
      {
        "servable": false,
        "role": "reassessment",
        "hints": [
          {
            "text": "Hai lỗi cần hai kiểm soát: phạm vi và mục quá lớn.",
            "hint_id": "h1",
            "penalty_policy": "supported_evidence"
          }
        ],
        "module_id": "day07-g-chunking",
        "max_points": 4,
        "interaction": {
          "type": "short_text",
          "prompt": "Bối cảnh:\nMột bộ câu hỏi kiểm thử đã đóng băng hỏi về ngoại lệ trong sổ tay. Cửa sổ cố định thường truy xuất điều kiện nhưng thiếu ngoại lệ; chunk theo heading dài đôi khi trộn hai chính sách.\n\nCâu hỏi:\nĐề xuất chiến lược kết hợp và bằng chứng quyết định.",
          "prompt_presentation": {
            "render_sections": true,
            "preserve_line_breaks": true
          }
        },
        "question_id": "d07-q023",
        "primary_kc_id": "kc-chunking-strategy-fit-selection",
        "grading_method": "criterion_rubric",
        "question_version": 6,
        "cognitive_operation": "Analyze",
        "contributing_kc_ids": [],
        "estimated_difficulty": "hard"
      },
      {
        "servable": true,
        "role": "follow_up",
        "hints": [
          {
            "text": "Mục tiêu là trả truy vấn đúng, không tối thiểu hóa số lượng chunk.",
            "hint_id": "h1",
            "penalty_policy": "supported_evidence"
          }
        ],
        "module_id": "day07-g-chunking",
        "max_points": 1,
        "interaction": {
          "type": "single_select",
          "prompt": "Bối cảnh:\nMột chiến lược tạo ít chunk nhất nhưng top-k bỏ sót mọi truy vấn về ngoại lệ. Kết luận nào đúng?",
          "choices": [
            {
              "text": "Giữ chiến lược vì lưu trữ thấp phải được ưu tiên hơn toàn bộ truy xuất bằng chứng",
              "choice_id": "a"
            },
            {
              "text": "Đổi hoặc kết hợp chiến lược vì số lượng chunk không chứng minh chất lượng truy xuất",
              "choice_id": "b"
            },
            {
              "text": "Tăng nhiệt độ sinh để mô hình tự suy ra mọi ngoại lệ bị bỏ sót khi truy xuất",
              "choice_id": "c"
            },
            {
              "text": "Kết luận bộ câu hỏi kiểm thử sai vì chiến lược có độ dài trung bình và số chunk đẹp hơn",
              "choice_id": "d"
            }
          ],
          "presentation_policy": {
            "shuffle_at_delivery": true,
            "do_not_expose_choice_ids": true
          },
          "prompt_presentation": {
            "render_sections": true,
            "preserve_line_breaks": true
          }
        },
        "question_id": "d07-q024",
        "primary_kc_id": "kc-chunking-strategy-fit-selection",
        "grading_method": "objective_key",
        "question_version": 5,
        "cognitive_operation": "Understand",
        "contributing_kc_ids": [],
        "estimated_difficulty": "easy"
      },
      {
        "servable": true,
        "role": "initial_check",
        "hints": [
          {
            "text": "Tính bước trước rồi nghĩ số lần cùng văn bản xuất hiện.",
            "hint_id": "h1",
            "penalty_policy": "supported_evidence"
          }
        ],
        "module_id": "day07-g-chunking",
        "max_points": 3,
        "interaction": {
          "left": [
            {
              "id": "x1",
              "text": "overlap = 0"
            },
            {
              "id": "x2",
              "text": "overlap = 50"
            },
            {
              "id": "x3",
              "text": "overlap = 250"
            }
          ],
          "type": "matching",
          "right": [
            {
              "id": "r1",
              "text": "bước 300; ít trùng lặp nhưng có thể cắt mất liên hệ qua ranh giới."
            },
            {
              "id": "r2",
              "text": "bước 250; có một vùng lặp giới hạn để kiểm tra query đi qua ranh giới."
            },
            {
              "id": "r3",
              "text": "bước 50; nhiều chunk gần trùng, tăng chi phí lưu trữ và truy xuất lặp."
            }
          ],
          "prompt": "Văn bản dài 1.000 ký tự, `chunk_size=300`. Ghép overlap với đánh đổi đúng nhất.",
          "presentation_policy": {
            "do_not_align_pairs_by_row": true,
            "shuffle_right_at_delivery": true,
            "do_not_expose_internal_ids": true,
            "shuffle_choices_at_delivery": false
          },
          "prompt_presentation": {
            "render_sections": true,
            "preserve_line_breaks": true
          }
        },
        "question_id": "d07-q025",
        "primary_kc_id": "kc-chunk-overlap-policy",
        "grading_method": "objective_key",
        "question_version": 6,
        "cognitive_operation": "Apply",
        "contributing_kc_ids": [],
        "estimated_difficulty": "medium"
      },
      {
        "servable": false,
        "role": "reassessment",
        "hints": [
          {
            "text": "Mức nhỏ nhất đã giữ đủ mối liên hệ là ứng viên mạnh.",
            "hint_id": "h1",
            "penalty_policy": "supported_evidence"
          }
        ],
        "module_id": "day07-g-chunking",
        "max_points": 4,
        "interaction": {
          "type": "short_text",
          "prompt": "Bối cảnh:\nTruy vấn cần điều kiện ở cuối chunk A và ngoại lệ ở đầu chunk B. Overlap 0 bỏ sót; 40 ký tự truy xuất đủ; 180 ký tự trả ba chunk gần trùng.\n\nCâu hỏi:\nChọn chính sách và nêu cách kiểm.",
          "prompt_presentation": {
            "render_sections": true,
            "preserve_line_breaks": true
          }
        },
        "question_id": "d07-q026",
        "primary_kc_id": "kc-chunk-overlap-policy",
        "grading_method": "criterion_rubric",
        "question_version": 5,
        "cognitive_operation": "Analyze",
        "contributing_kc_ids": [],
        "estimated_difficulty": "medium"
      },
      {
        "servable": true,
        "role": "initial_check",
        "hints": [
          {
            "text": "Nếu không giữ các chunk, người kiểm tra không thể kiểm lại số liệu và tính mạch lạc.",
            "hint_id": "h1",
            "penalty_policy": "supported_evidence"
          }
        ],
        "module_id": "day07-g-chunking",
        "max_points": 4,
        "interaction": {
          "left": [
            {
              "id": "x1",
              "text": "Biết kết quả thuộc chiến lược nào"
            },
            {
              "id": "x2",
              "text": "Kiểm lại ranh giới và tính mạch lạc của từng chunk"
            },
            {
              "id": "x3",
              "text": "Kiểm lại số chunk và độ dài trung bình"
            },
            {
              "id": "x4",
              "text": "Bảo đảm phép so sánh công bằng giữa các chiến lược"
            }
          ],
          "type": "matching",
          "right": [
            {
              "id": "r1",
              "text": "Tên chiến lược ổn định cho từng kết quả"
            },
            {
              "id": "r2",
              "text": "Các chunk thực tế theo đúng thứ tự"
            },
            {
              "id": "r3",
              "text": "Số liệu tính trực tiếp từ các chunk đã lưu"
            },
            {
              "id": "r4",
              "text": "Cùng văn bản đầu vào và cùng bộ tham số"
            }
          ],
          "prompt": "Bộ so sánh chạy cửa sổ cố định, câu và đệ quy trên cùng văn bản. Ghép yêu cầu tái tạo được với dữ liệu đầu ra phải lưu.",
          "presentation_policy": {
            "do_not_align_pairs_by_row": true,
            "shuffle_right_at_delivery": true,
            "do_not_expose_internal_ids": true
          },
          "prompt_presentation": {
            "render_sections": true,
            "preserve_line_breaks": true
          }
        },
        "question_id": "d07-q027",
        "primary_kc_id": "kc-chunking-comparator-implementation",
        "grading_method": "objective_key",
        "question_version": 8,
        "cognitive_operation": "Analyze",
        "contributing_kc_ids": [],
        "estimated_difficulty": "medium"
      },
      {
        "servable": true,
        "role": "initial_check",
        "hints": [
          {
            "text": "Tách khớp ngữ nghĩa khỏi sự thật.",
            "hint_id": "h1",
            "penalty_policy": "supported_evidence"
          }
        ],
        "module_id": "day07-g-embeddings",
        "max_points": 1,
        "interaction": {
          "type": "single_select",
          "prompt": "Bối cảnh:\nTruy vấn “gia hạn sách” truy xuất “renew borrowed materials” dù không trùng từ. Giải thích tốt nhất là gì?",
          "choices": [
            {
              "text": "embedding học biểu diễn nơi ý nghĩa liên quan có vị trí hình học gần; vẫn phải kiểm nguồn sự thật",
              "choice_id": "a"
            },
            {
              "text": "Mỗi chiều vector lần lượt mang một sự thật đọc được như “gia hạn”, “sách”, “thư viện”",
              "choice_id": "b"
            },
            {
              "text": "độ tương đồng cao chứng minh đoạn được truy xuất luôn đúng và đang còn hiệu lực",
              "choice_id": "c"
            },
            {
              "text": "vector store tự tạo câu trả lời có căn cứ hoàn chỉnh mà không cần đưa ngữ cảnh vào bộ sinh",
              "choice_id": "d"
            }
          ],
          "presentation_policy": {
            "shuffle_at_delivery": true,
            "do_not_expose_choice_ids": true
          },
          "prompt_presentation": {
            "render_sections": true,
            "preserve_line_breaks": true
          }
        },
        "question_id": "d07-q028",
        "primary_kc_id": "kc-embedding-semantic-space-explanation",
        "grading_method": "objective_key",
        "question_version": 4,
        "cognitive_operation": "Understand",
        "contributing_kc_ids": [],
        "estimated_difficulty": "easy"
      },
      {
        "servable": false,
        "role": "reassessment",
        "hints": [
          {
            "text": "Một vector không biết chính sách nào đang có hiệu lực.",
            "hint_id": "h1",
            "penalty_policy": "supported_evidence"
          }
        ],
        "module_id": "day07-g-embeddings",
        "max_points": 4,
        "interaction": {
          "type": "short_text",
          "prompt": "Bối cảnh:\nHai chunk có cosine 0,91 và 0,87; chunk 0,91 chứa chính sách cũ, chunk 0,87 là phiên bản hiện hành.\n\nCâu hỏi:\nGiải thích embedding hỗ trợ gì và không hỗ trợ kết luận gì.",
          "prompt_presentation": {
            "render_sections": true,
            "preserve_line_breaks": true
          }
        },
        "question_id": "d07-q029",
        "primary_kc_id": "kc-embedding-semantic-space-explanation",
        "grading_method": "criterion_rubric",
        "question_version": 5,
        "cognitive_operation": "Analyze",
        "contributing_kc_ids": [],
        "estimated_difficulty": "hard"
      },
      {
        "servable": true,
        "role": "initial_check",
        "hints": [
          {
            "text": "Pooling chỉ xảy ra sau khi đã có token representations.",
            "hint_id": "h1",
            "penalty_policy": "supported_evidence"
          }
        ],
        "module_id": "day07-g-embeddings",
        "max_points": 4,
        "interaction": {
          "type": "ordering",
          "prompt": "Sắp xếp luồng tạo embeddings cho một văn bản.",
          "options": [
            {
              "text": "Pooling hoặc chọn token states",
              "option_id": "o1"
            },
            {
              "text": "Tokenize dữ liệu đầu vào",
              "option_id": "o2"
            },
            {
              "text": "Xuất ra một vector",
              "option_id": "o3"
            },
            {
              "text": "Encoder tạo contextual token representations",
              "option_id": "o4"
            }
          ],
          "presentation_policy": {
            "do_not_expose_option_ids": true,
            "shuffle_initial_order_at_delivery": true
          },
          "prompt_presentation": {
            "render_sections": true,
            "preserve_line_breaks": true
          }
        },
        "question_id": "d07-q030",
        "primary_kc_id": "kc-embedding-encoder-flow-tracing",
        "grading_method": "objective_key",
        "question_version": 6,
        "cognitive_operation": "Understand",
        "contributing_kc_ids": [],
        "estimated_difficulty": "easy"
      },
      {
        "servable": true,
        "role": "initial_check",
        "hints": [
          {
            "text": "Mẫu số là tích hai độ lớn.",
            "hint_id": "h1",
            "penalty_policy": "supported_evidence"
          }
        ],
        "module_id": "day07-g-embeddings",
        "max_points": 1,
        "interaction": {
          "type": "numeric_input",
          "prompt": "Với `a=[1,2]`, `b=[2,0]`, nhập cosine similarity làm tròn ba chữ số.",
          "required_unit": "",
          "presentation_policy": {
            "do_not_align_pairs_by_row": false,
            "shuffle_right_at_delivery": false,
            "do_not_expose_internal_ids": true,
            "shuffle_choices_at_delivery": true
          },
          "prompt_presentation": {
            "render_sections": true,
            "preserve_line_breaks": true
          }
        },
        "question_id": "d07-q031",
        "primary_kc_id": "kc-cosine-similarity-computation",
        "grading_method": "objective_key",
        "question_version": 6,
        "cognitive_operation": "Apply",
        "contributing_kc_ids": [],
        "estimated_difficulty": "medium"
      },
      {
        "servable": true,
        "role": "reassessment",
        "hints": [
          {
            "text": "Kiểm cả hình học của vector và trường hợp mẫu số bằng 0.",
            "hint_id": "h1",
            "penalty_policy": "supported_evidence"
          }
        ],
        "module_id": "day07-g-embeddings",
        "max_points": 4,
        "interaction": {
          "left": [
            {
              "id": "x1",
              "text": "Cùng một vector khác 0"
            },
            {
              "id": "x2",
              "text": "Hai vector trực giao"
            },
            {
              "id": "x3",
              "text": "Hai vector ngược hướng"
            },
            {
              "id": "x4",
              "text": "Một zero vector"
            }
          ],
          "type": "matching",
          "right": [
            {
              "id": "r1",
              "text": "Trả 1."
            },
            {
              "id": "r2",
              "text": "Trả 0."
            },
            {
              "id": "r3",
              "text": "Trả -1."
            },
            {
              "id": "r4",
              "text": "Trả giá trị an toàn 0 theo quy ước, không chia cho 0."
            }
          ],
          "prompt": "Ghép trường hợp kiểm thử cosine trong phạm vi các vector cùng số chiều với hành vi mong đợi của cài đặt.",
          "presentation_policy": {
            "do_not_align_pairs_by_row": true,
            "shuffle_right_at_delivery": true,
            "do_not_expose_internal_ids": true,
            "shuffle_choices_at_delivery": false
          },
          "prompt_presentation": {
            "render_sections": true,
            "preserve_line_breaks": true
          }
        },
        "question_id": "d07-q032",
        "primary_kc_id": "kc-cosine-similarity-computation",
        "grading_method": "objective_key",
        "question_version": 6,
        "cognitive_operation": "Apply",
        "contributing_kc_ids": [],
        "estimated_difficulty": "medium"
      },
      {
        "servable": true,
        "role": "initial_check",
        "hints": [
          {
            "text": "So tương đối trước, tránh luật số chung.",
            "hint_id": "h1",
            "penalty_policy": "supported_evidence"
          }
        ],
        "module_id": "day07-g-embeddings",
        "max_points": 1,
        "interaction": {
          "type": "single_select",
          "prompt": "Bối cảnh:\nCùng truy vấn, A=0,82; B=0,61; C=-0,10 trong cùng chỉ mục/mô hình. Kết luận nào an toàn nhất?",
          "choices": [
            {
              "text": "A gần hơn B và C theo hình học này; mức liên quan vẫn cần kiểm tra",
              "choice_id": "a"
            },
            {
              "text": "A chắc chắn đúng sự thật và còn hiệu lực chỉ vì cosine lớn hơn 0,8",
              "choice_id": "b"
            },
            {
              "text": "C luôn là nội dung đối nghĩa trong mọi mô hình embeddings và mọi kho tài liệu",
              "choice_id": "c"
            },
            {
              "text": "B luôn không liên quan với mọi truy vấn vì điểm hiện tại nhỏ hơn ngưỡng 0,7",
              "choice_id": "d"
            }
          ],
          "presentation_policy": {
            "shuffle_at_delivery": true,
            "do_not_expose_choice_ids": true
          },
          "prompt_presentation": {
            "render_sections": true,
            "preserve_line_breaks": true
          }
        },
        "question_id": "d07-q033",
        "primary_kc_id": "kc-cosine-score-interpretation",
        "grading_method": "objective_key",
        "question_version": 4,
        "cognitive_operation": "Understand",
        "contributing_kc_ids": [],
        "estimated_difficulty": "easy"
      },
      {
        "servable": false,
        "role": "reassessment",
        "hints": [
          {
            "text": "Giữ phân biệt điểm quan sát được và nguyên nhân mới là giả thuyết.",
            "hint_id": "h1",
            "penalty_policy": "supported_evidence"
          }
        ],
        "module_id": "day07-g-embeddings",
        "max_points": 3,
        "interaction": {
          "type": "short_text",
          "prompt": "Bối cảnh:\nCùng một truy vấn, chunk A có cosine 0,84 nhưng là câu rất chung; chunk B có cosine 0,80, chứa câu trả lời cụ thể và cùng mô hình embeddings/chỉ mục.\n\nCâu hỏi:\nNêu điều mà điểm số cho biết, điều nó chưa chứng minh, và một thử nghiệm kế tiếp.",
          "prompt_presentation": {
            "render_sections": true,
            "preserve_line_breaks": true
          }
        },
        "question_id": "d07-q034",
        "primary_kc_id": "kc-cosine-score-interpretation",
        "grading_method": "criterion_rubric",
        "question_version": 6,
        "cognitive_operation": "Analyze",
        "contributing_kc_ids": [],
        "estimated_difficulty": "hard"
      },
      {
        "servable": true,
        "role": "initial_check",
        "hints": [
          {
            "text": "Bình phương từng chênh lệch trước khi cộng.",
            "hint_id": "h1",
            "penalty_policy": "supported_evidence"
          }
        ],
        "module_id": "day07-g-embeddings",
        "max_points": 1,
        "interaction": {
          "type": "numeric_input",
          "prompt": "Với `a=[1,2,3]`, `b=[4,2,-1]`, tự tính rồi nhập Euclidean distance.",
          "required_unit": "",
          "presentation_policy": {
            "do_not_align_pairs_by_row": false,
            "shuffle_right_at_delivery": false,
            "do_not_expose_internal_ids": true,
            "shuffle_choices_at_delivery": true
          },
          "prompt_presentation": {
            "render_sections": true,
            "preserve_line_breaks": true
          }
        },
        "question_id": "d07-q035",
        "primary_kc_id": "kc-euclidean-distance-computation",
        "grading_method": "objective_key",
        "question_version": 3,
        "cognitive_operation": "Apply",
        "contributing_kc_ids": [],
        "estimated_difficulty": "easy"
      },
      {
        "servable": true,
        "role": "initial_check",
        "hints": [
          {
            "text": "Hỏi độ lớn có mang tín hiệu không.",
            "hint_id": "h1",
            "penalty_policy": "supported_evidence"
          }
        ],
        "module_id": "day07-g-embeddings",
        "max_points": 3,
        "interaction": {
          "left": [
            {
              "id": "x1",
              "text": "Chỉ hướng quan trọng, độ dài vector không mang nghĩa"
            },
            {
              "id": "x2",
              "text": "Độ lớn tuyệt đối của vector phải ảnh hưởng đến khoảng cách"
            },
            {
              "id": "x3",
              "text": "Muốn hướng cùng độ lớn đều làm điểm tăng"
            }
          ],
          "type": "matching",
          "right": [
            {
              "id": "r1",
              "text": "Cosine"
            },
            {
              "id": "r2",
              "text": "Euclidean/L2"
            },
            {
              "id": "r3",
              "text": "Dot product"
            }
          ],
          "prompt": "Câu hỏi:\nGhép yêu cầu với thước đo ưu tiên.",
          "presentation_policy": {
            "do_not_align_pairs_by_row": true,
            "shuffle_right_at_delivery": true,
            "do_not_expose_internal_ids": true
          },
          "prompt_presentation": {
            "render_sections": true,
            "preserve_line_breaks": true
          }
        },
        "question_id": "d07-q036",
        "primary_kc_id": "kc-vector-metric-selection",
        "grading_method": "objective_key",
        "question_version": 4,
        "cognitive_operation": "Understand",
        "contributing_kc_ids": [],
        "estimated_difficulty": "easy"
      },
      {
        "servable": true,
        "role": "reassessment",
        "hints": [
          {
            "text": "Cùng số chiều chưa chắc cùng không gian đã học.",
            "hint_id": "h1",
            "penalty_policy": "supported_evidence"
          }
        ],
        "module_id": "day07-g-embeddings",
        "max_points": 1,
        "interaction": {
          "type": "single_select",
          "prompt": "Chỉ mục hiện lưu vector đã L2-normalize và backend được cấu hình cosine. Nhóm muốn dùng dot product với truy vấn thô từ mô hình mới. Kết luận nào đúng?",
          "choices": [
            {
              "text": "Có thể đổi riêng thước đo của truy vấn mà giữ nguyên chỉ mục và mô hình.",
              "choice_id": "c1"
            },
            {
              "text": "Dot product luôn tương đương cosine kể cả với vector chưa normalize.",
              "choice_id": "c2"
            },
            {
              "text": "Phải xác nhận metric, cách normalize và mô hình của cả kho tài liệu/truy vấn; nếu đổi mô hình thì tạo lại embeddings và xây lại chỉ mục trước khi chuyển đổi.",
              "choice_id": "c3"
            },
            {
              "text": "Chỉ cần tăng top-k để bù khác biệt không gian vector.",
              "choice_id": "c4"
            }
          ],
          "presentation_policy": {
            "do_not_align_pairs_by_row": false,
            "shuffle_right_at_delivery": false,
            "do_not_expose_internal_ids": true,
            "shuffle_choices_at_delivery": true
          },
          "prompt_presentation": {
            "render_sections": true,
            "preserve_line_breaks": true
          }
        },
        "question_id": "d07-q037",
        "primary_kc_id": "kc-vector-metric-selection",
        "grading_method": "objective_key",
        "question_version": 6,
        "cognitive_operation": "Analyze",
        "contributing_kc_ids": [],
        "estimated_difficulty": "medium"
      },
      {
        "servable": false,
        "role": "reassessment",
        "hints": [
          {
            "text": "Một mô hình không đáp ứng độ trễ SLO không phải lựa chọn mặc định.",
            "hint_id": "h1",
            "penalty_policy": "supported_evidence"
          }
        ],
        "module_id": "day07-g-embeddings",
        "max_points": 4,
        "interaction": {
          "type": "short_text",
          "prompt": "Bối cảnh:\nmô hình A: độ bao phủ@5 0,86, p95 45ms, 768d. mô hình B: độ bao phủ@5 0,88, p95 190ms, 3072d. SLO p95≤100ms; kho tài liệu Việt–Anh 5M các chunk. Bộ kiểm thử đại diện gồm truy vấn tiếng Việt và tiếng Anh; chi phí tạo lại embeddings cần được tính trước chuyển đổi.\n\nCâu hỏi:\nChọn mô hình cho phát hành hiện tại, nêu hạn chế và điều kiện để xem lại lựa chọn.",
          "prompt_presentation": {
            "render_sections": true,
            "preserve_line_breaks": true
          }
        },
        "question_id": "d07-q038",
        "primary_kc_id": "kc-embedding-model-evidence-selection",
        "grading_method": "criterion_rubric",
        "question_version": 6,
        "cognitive_operation": "Evaluate",
        "contributing_kc_ids": [],
        "estimated_difficulty": "hard"
      },
      {
        "servable": true,
        "role": "initial_check",
        "hints": [
          {
            "text": "Vector giống chiều không có nghĩa cùng hệ tọa độ.",
            "hint_id": "h1",
            "penalty_policy": "supported_evidence"
          }
        ],
        "module_id": "day07-g-embeddings",
        "max_points": 1,
        "interaction": {
          "type": "single_select",
          "prompt": "Câu hỏi:\nKhi đổi mô hình embeddings cho kho tài liệu đã chỉ mục, hành động nào đúng nhất?",
          "choices": [
            {
              "text": "Chỉ đổi truy vấn embedder rồi tiếp tục tìm kiếm trực tiếp trên toàn bộ vectors cũ",
              "choice_id": "a"
            },
            {
              "text": "Re-embed kho tài liệu và xây chỉ mục tương thích trước chuyển đổi",
              "choice_id": "b"
            },
            {
              "text": "Trộn vectors hai mô hình vào cùng bộ sưu tập nếu số chiều tình cờ bằng nhau",
              "choice_id": "c"
            },
            {
              "text": "Chỉ tăng top-k và giảm threshold để bù mọi incompatibility giữa hai không gian",
              "choice_id": "d"
            }
          ],
          "presentation_policy": {
            "shuffle_at_delivery": true,
            "do_not_expose_choice_ids": true
          },
          "prompt_presentation": {
            "render_sections": true,
            "preserve_line_breaks": true
          }
        },
        "question_id": "d07-q039",
        "primary_kc_id": "kc-embedding-model-evidence-selection",
        "grading_method": "objective_key",
        "question_version": 5,
        "cognitive_operation": "Understand",
        "contributing_kc_ids": [],
        "estimated_difficulty": "easy"
      },
      {
        "servable": true,
        "role": "initial_check",
        "hints": [
          {
            "text": "Tách thông tin nguồn khỏi trạng thái của một truy vấn.",
            "hint_id": "h1",
            "penalty_policy": "supported_evidence"
          }
        ],
        "module_id": "day07-g-vector-store",
        "max_points": 4,
        "interaction": {
          "left": [
            {
              "id": "x1",
              "text": "Danh tính ổn định của chunk/tài liệu"
            },
            {
              "id": "x2",
              "text": "Embedding vector"
            },
            {
              "id": "x3",
              "text": "metadata: mục, phiên bản, nguồn URL"
            },
            {
              "id": "x4",
              "text": "chunk văn bản"
            }
          ],
          "type": "matching",
          "right": [
            {
              "id": "r1",
              "text": "cập nhật/xóa đúng bản ghi và không lẫn phiên bản."
            },
            {
              "id": "r2",
              "text": "Tính similarity khi tìm kiếm."
            },
            {
              "id": "r3",
              "text": "lọc, trích dẫn và vòng đời kiểm tra."
            },
            {
              "id": "r4",
              "text": "Nội dung được trả về để kiểm mức liên quan/trích dẫn."
            }
          ],
          "prompt": "Ghép thành phần của bản ghi kho vector cho một chunk thuộc `policy-17`, mục `Refund`, phiên bản `v3` với mục đích của nó.",
          "presentation_policy": {
            "do_not_align_pairs_by_row": true,
            "shuffle_right_at_delivery": true,
            "do_not_expose_internal_ids": true,
            "shuffle_choices_at_delivery": false
          },
          "prompt_presentation": {
            "render_sections": true,
            "preserve_line_breaks": true
          }
        },
        "question_id": "d07-q040",
        "primary_kc_id": "kc-vector-store-record-contract",
        "grading_method": "objective_key",
        "question_version": 6,
        "cognitive_operation": "Analyze",
        "contributing_kc_ids": [],
        "estimated_difficulty": "medium"
      },
      {
        "servable": true,
        "role": "initial_check",
        "hints": [
          {
            "text": "Phân biệt import thư viện, tạo bộ sưu tập và thời điểm backend thực sự sẵn sàng.",
            "hint_id": "h1",
            "penalty_policy": "supported_evidence"
          }
        ],
        "module_id": "day07-g-vector-store",
        "max_points": 3,
        "interaction": {
          "left": [
            {
              "id": "x1",
              "text": "Công bố backend Chroma đang hoạt động"
            },
            {
              "id": "x2",
              "text": "Cho phép phương án dự phòng"
            },
            {
              "id": "x3",
              "text": "Tạo bộ sưu tập thất bại"
            }
          ],
          "type": "matching",
          "right": [
            {
              "id": "r1",
              "text": "Chỉ thực hiện sau khi bộ sưu tập đã tạo hoặc mở thành công"
            },
            {
              "id": "r2",
              "text": "Đặt lại trạng thái rõ ràng và xác nhận phương án dự phòng rỗng hoặc đúng quy ước"
            },
            {
              "id": "r3",
              "text": "Dừng sớm hoặc ghi nhật ký rõ backend/bộ sưu tập trước thao tác đầu tiên"
            }
          ],
          "prompt": "Chroma import thành công nhưng tạo bộ sưu tập thất bại; code vẫn đặt `_use_chroma=True`. Ghép vấn đề trạng thái với cách xử lý hoặc kiểm thử cần có.",
          "presentation_policy": {
            "do_not_align_pairs_by_row": true,
            "shuffle_right_at_delivery": true,
            "do_not_expose_internal_ids": true
          },
          "prompt_presentation": {
            "render_sections": true,
            "preserve_line_breaks": true
          }
        },
        "question_id": "d07-q041",
        "primary_kc_id": "kc-vector-store-backend-initialization",
        "grading_method": "objective_key",
        "question_version": 6,
        "cognitive_operation": "Analyze",
        "contributing_kc_ids": [],
        "estimated_difficulty": "medium"
      },
      {
        "servable": true,
        "role": "initial_check",
        "hints": [
          {
            "text": "Kiểm các trường của bản ghi và trạng thái bộ sưu tập trước/sau.",
            "hint_id": "h1",
            "penalty_policy": "supported_evidence"
          }
        ],
        "module_id": "day07-g-vector-store",
        "max_points": 3,
        "interaction": {
          "left": [
            {
              "id": "x1",
              "text": "Sau lần thêm đầu"
            },
            {
              "id": "x2",
              "text": "Sau lần thêm thứ hai"
            },
            {
              "id": "x3",
              "text": "Mỗi bản ghi mới"
            }
          ],
          "type": "matching",
          "right": [
            {
              "id": "r1",
              "text": "Có hai bản ghi với danh tính và metadata truy vết được."
            },
            {
              "id": "r2",
              "text": "Có năm bản ghi, không reset hoặc ghi đè trạng thái cũ."
            },
            {
              "id": "r3",
              "text": "Có tài liệu/chunk danh tính, văn bản, embedding và metadata hợp lệ."
            }
          ],
          "prompt": "Kho rỗng nhận 2 tài liệu rồi thêm 3 tài liệu. Ghép điều kiện kiểm thử với hành vi vòng đời đúng của `add_documents`.",
          "presentation_policy": {
            "do_not_align_pairs_by_row": true,
            "shuffle_right_at_delivery": true,
            "do_not_expose_internal_ids": true,
            "shuffle_choices_at_delivery": false
          },
          "prompt_presentation": {
            "render_sections": true,
            "preserve_line_breaks": true
          }
        },
        "question_id": "d07-q042",
        "primary_kc_id": "kc-vector-store-document-addition",
        "grading_method": "objective_key",
        "question_version": 5,
        "cognitive_operation": "Apply",
        "contributing_kc_ids": [],
        "estimated_difficulty": "medium"
      },
      {
        "servable": true,
        "role": "initial_check",
        "hints": [
          {
            "text": "Chưa thể xếp hạng khi chưa có điểm giữa vector truy vấn và vector đã lưu.",
            "hint_id": "h1",
            "penalty_policy": "supported_evidence"
          }
        ],
        "module_id": "day07-g-vector-store",
        "max_points": 4,
        "interaction": {
          "type": "ordering",
          "prompt": "Sắp xếp các bước của semantic search trong bộ nhớ.",
          "options": [
            {
              "text": "Tạo embedding cho truy vấn bằng embedder đã cấu hình.",
              "option_id": "o1"
            },
            {
              "text": "Tính điểm giữa vector truy vấn và các vector đã lưu.",
              "option_id": "o2"
            },
            {
              "text": "Sắp xếp theo điểm giảm dần và lấy tối đa top-k kết quả.",
              "option_id": "o3"
            },
            {
              "text": "Trả nội dung, metadata và điểm của các kết quả.",
              "option_id": "o4"
            }
          ],
          "presentation_policy": {
            "do_not_expose_option_ids": true,
            "shuffle_initial_order_at_delivery": true
          },
          "prompt_presentation": {
            "render_sections": true,
            "preserve_line_breaks": true
          }
        },
        "question_id": "d07-q043",
        "primary_kc_id": "kc-vector-semantic-search-implementation",
        "grading_method": "objective_key",
        "question_version": 4,
        "cognitive_operation": "Understand",
        "contributing_kc_ids": [],
        "estimated_difficulty": "easy"
      },
      {
        "servable": false,
        "role": "reassessment",
        "hints": [
          {
            "text": "top-k không tạo thêm bản ghi.",
            "hint_id": "h1",
            "penalty_policy": "supported_evidence"
          }
        ],
        "module_id": "day07-g-vector-store",
        "max_points": 4,
        "interaction": {
          "type": "short_text",
          "prompt": "Bối cảnh:\nKho A có 2 bản ghi, nhưng truy vấn yêu cầu `top_k=5`; kho B rỗng. Khi điểm bằng nhau, quy ước sắp xếp tiếp theo `record_id` tăng dần.\n\nCâu hỏi:\nNêu kết quả mong đợi cho mỗi kho và quy tắc sắp xếp.",
          "prompt_presentation": {
            "render_sections": true,
            "preserve_line_breaks": true
          }
        },
        "question_id": "d07-q044",
        "primary_kc_id": "kc-vector-semantic-search-implementation",
        "grading_method": "criterion_rubric",
        "question_version": 5,
        "cognitive_operation": "Apply",
        "contributing_kc_ids": [],
        "estimated_difficulty": "medium"
      },
      {
        "servable": false,
        "role": "reassessment",
        "hints": [
          {
            "text": "Áp top-k sau khi đã xác định candidate hợp lệ.",
            "hint_id": "h1",
            "penalty_policy": "supported_evidence"
          }
        ],
        "module_id": "day07-g-vector-store",
        "max_points": 4,
        "interaction": {
          "type": "short_text",
          "prompt": "Bối cảnh:\nKhi không lọc, kết quả hạng 1 là Marketing điểm .95; kết quả Engineering tốt nhất điểm .90. Truy vấn yêu cầu `department=engineering`, `top_k=1`.\n\nCâu hỏi:\nSo sánh lọc trước khi xếp hạng với xếp hạng trước khi lọc.",
          "prompt_presentation": {
            "render_sections": true,
            "preserve_line_breaks": true
          }
        },
        "question_id": "d07-q045",
        "primary_kc_id": "kc-vector-search-metadata-prefilter",
        "grading_method": "criterion_rubric",
        "question_version": 5,
        "cognitive_operation": "Analyze",
        "contributing_kc_ids": [],
        "estimated_difficulty": "hard"
      },
      {
        "servable": true,
        "role": "initial_check",
        "hints": [
          {
            "text": "Một bản ghi chỉ đủ điều kiện khi thỏa đủ condition.",
            "hint_id": "h1",
            "penalty_policy": "supported_evidence"
          }
        ],
        "module_id": "day07-g-vector-store",
        "max_points": 4,
        "interaction": {
          "left": [
            {
              "id": "x1",
              "text": "`metadata_filter=None`"
            },
            {
              "id": "x2",
              "text": "tập được phép rỗng"
            },
            {
              "id": "x3",
              "text": "lọc có hai key-value"
            },
            {
              "id": "x4",
              "text": "bản ghi thiếu một key được yêu cầu"
            }
          ],
          "type": "matching",
          "right": [
            {
              "id": "r1",
              "text": "Tương đương tìm kiếm thường."
            },
            {
              "id": "r2",
              "text": "Trả []."
            },
            {
              "id": "r3",
              "text": "bản ghi phải match mọi điều kiện trước khi xếp hạng."
            },
            {
              "id": "r4",
              "text": "Không match."
            }
          ],
          "prompt": "Ghép điều kiện của `search_with_filter` với hành vi đúng.",
          "presentation_policy": {
            "do_not_align_pairs_by_row": true,
            "shuffle_right_at_delivery": true,
            "do_not_expose_internal_ids": true,
            "shuffle_choices_at_delivery": false
          },
          "prompt_presentation": {
            "render_sections": true,
            "preserve_line_breaks": true
          }
        },
        "question_id": "d07-q046",
        "primary_kc_id": "kc-vector-search-metadata-prefilter",
        "grading_method": "objective_key",
        "question_version": 5,
        "cognitive_operation": "Analyze",
        "contributing_kc_ids": [],
        "estimated_difficulty": "medium"
      },
      {
        "servable": true,
        "role": "initial_check",
        "hints": [
          {
            "text": "Match ở tài liệu danh tính, không ở chunk ID duy nhất.",
            "hint_id": "h1",
            "penalty_policy": "supported_evidence"
          }
        ],
        "module_id": "day07-g-vector-store",
        "max_points": 1,
        "interaction": {
          "type": "single_select",
          "prompt": "Kho có A::0, A::1, A::2, B::0. API `delete_document(doc_id)` trả số bản ghi đã xóa; nếu không còn bản ghi khớp, API trả 0. Gọi `delete_document(\"A\")` hai lần. Hành vi nào đúng?",
          "choices": [
            {
              "text": "Lần một chỉ xóa A::0; lần hai xóa A::1.",
              "choice_id": "c1"
            },
            {
              "text": "Lần một xóa toàn bộ A::0, A::1, A::2 và giữ B::0; lần hai trả 0, không thay đổi kho.",
              "choice_id": "c2"
            },
            {
              "text": "Lần một xóa mọi bản ghi vì A là tiền tố ngắn nhất.",
              "choice_id": "c3"
            },
            {
              "text": "Lần hai là lỗi bắt buộc vì tài liệu đã không còn.",
              "choice_id": "c4"
            }
          ],
          "presentation_policy": {
            "do_not_align_pairs_by_row": false,
            "shuffle_right_at_delivery": false,
            "do_not_expose_internal_ids": true,
            "shuffle_choices_at_delivery": true
          },
          "prompt_presentation": {
            "render_sections": true,
            "preserve_line_breaks": true
          }
        },
        "question_id": "d07-q047",
        "primary_kc_id": "kc-vector-store-document-deletion",
        "grading_method": "objective_key",
        "question_version": 6,
        "cognitive_operation": "Apply",
        "contributing_kc_ids": [],
        "estimated_difficulty": "easy"
      },
      {
        "servable": false,
        "role": "initial_check",
        "hints": [
          {
            "text": "Mỗi experiment chỉ đổi một control rồi mới kết hợp các thay đổi.",
            "hint_id": "h1",
            "penalty_policy": "supported_evidence"
          }
        ],
        "module_id": "day07-g-vector-store",
        "max_points": 4,
        "interaction": {
          "type": "short_text",
          "prompt": "Bối cảnh:\n`k=2` bỏ sót bằng chứng thứ ba; `k=8` thêm 5 chunk nhiễu; `threshold=0.85` trả rỗng ở 30% truy vấn; filter theo semester cũ che đáp án mới.\n\nCâu hỏi:\nLập tuning plan.",
          "prompt_presentation": {
            "render_sections": true,
            "preserve_line_breaks": true
          }
        },
        "question_id": "d07-q048",
        "primary_kc_id": "kc-retrieval-control-tuning",
        "grading_method": "criterion_rubric",
        "question_version": 4,
        "cognitive_operation": "Evaluate",
        "contributing_kc_ids": [],
        "estimated_difficulty": "hard"
      },
      {
        "servable": true,
        "role": "reassessment",
        "hints": [
          {
            "text": "Giữ một biến thay đổi và xác định rõ hành vi khi không có kết quả.",
            "hint_id": "h1",
            "penalty_policy": "supported_evidence"
          }
        ],
        "module_id": "day07-g-vector-store",
        "max_points": 1,
        "interaction": {
          "type": "single_select",
          "prompt": "Bối cảnh:\nNgưỡng 0,85 trả rỗng cho 30% truy vấn, còn hạ ngưỡng làm tăng kết quả nhiễu.\n\nCâu hỏi:\nQuyết định nào phù hợp nhất khi điều chỉnh ngưỡng?",
          "choices": [
            {
              "text": "Giữ threshold và bắt generator tự trả lời mọi câu còn lại mà không có context",
              "choice_id": "a"
            },
            {
              "text": "Đánh giá recall/no-result consequence rồi chọn threshold cùng fallback rõ",
              "choice_id": "b"
            },
            {
              "text": "Hạ threshold về 0 cho mọi corpus để không còn bất kỳ empty result nào",
              "choice_id": "c"
            },
            {
              "text": "Kết luận cosine 0,8 là cutoff universal áp được cho mọi model và domain",
              "choice_id": "d"
            }
          ],
          "presentation_policy": {
            "shuffle_at_delivery": true,
            "do_not_expose_choice_ids": true
          },
          "prompt_presentation": {
            "render_sections": true,
            "preserve_line_breaks": true
          }
        },
        "question_id": "d07-q049",
        "primary_kc_id": "kc-retrieval-control-tuning",
        "grading_method": "objective_key",
        "question_version": 4,
        "cognitive_operation": "Understand",
        "contributing_kc_ids": [],
        "estimated_difficulty": "easy"
      },
      {
        "servable": true,
        "role": "initial_check",
        "hints": [
          {
            "text": "Hỏi rõ ai chịu trách nhiệm backup, scaling và availability.",
            "hint_id": "h1",
            "penalty_policy": "supported_evidence"
          }
        ],
        "module_id": "day07-g-vector-store",
        "max_points": 4,
        "interaction": {
          "left": [
            {
              "id": "x1",
              "text": "Prototype local nhỏ, một process"
            },
            {
              "id": "x2",
              "text": "Team đã vận hành Postgres và cần joins/filter"
            },
            {
              "id": "x3",
              "text": "Dữ liệu phải on-prem, team có ops"
            },
            {
              "id": "x4",
              "text": "Cần scale nhanh, ít ops, chấp nhận vendor"
            }
          ],
          "type": "matching",
          "right": [
            {
              "id": "r1",
              "text": "Embedded"
            },
            {
              "id": "r2",
              "text": "Existing DB extension"
            },
            {
              "id": "r3",
              "text": "Self-hosted service"
            },
            {
              "id": "r4",
              "text": "Managed service"
            }
          ],
          "prompt": "Ghép constraint với deployment class phù hợp để bắt đầu.",
          "presentation_policy": {
            "do_not_align_pairs_by_row": true,
            "shuffle_right_at_delivery": true,
            "do_not_expose_internal_ids": true
          },
          "prompt_presentation": {
            "render_sections": true,
            "preserve_line_breaks": true
          }
        },
        "question_id": "d07-q050",
        "primary_kc_id": "kc-vector-store-deployment-selection",
        "grading_method": "objective_key",
        "question_version": 4,
        "cognitive_operation": "Understand",
        "contributing_kc_ids": [],
        "estimated_difficulty": "easy"
      },
      {
        "servable": false,
        "role": "reassessment",
        "hints": [
          {
            "text": "Đừng biến tên vendor hoặc giá hiện tại thành kiến thức cố định.",
            "hint_id": "h1",
            "penalty_policy": "supported_bằng chứng"
          }
        ],
        "module_id": "day07-g-vector-store",
        "max_points": 4,
        "interaction": {
          "type": "short_text",
          "prompt": "Bối cảnh:\nStartup có 2 kỹ sư, 10M vectors, cần HA/backup, metadata filter; policy cho phép cloud nhưng latency theo region phải thấp.\n\nCâu hỏi:\nChọn deployment class và nêu các thông tin phụ thuộc phiên bản cần kiểm tra trước khi quyết định.",
          "prompt_presentation": {
            "render_sections": true,
            "preserve_line_breaks": true
          }
        },
        "question_id": "d07-q051",
        "primary_kc_id": "kc-vector-store-deployment-selection",
        "grading_method": "criterion_rubric",
        "question_version": 4,
        "cognitive_operation": "Evaluate",
        "contributing_kc_ids": [],
        "estimated_difficulty": "hard"
      },
      {
        "servable": true,
        "role": "initial_check",
        "hints": [
          {
            "text": "Xác định thao tác được kích hoạt bởi nguồn thay đổi hay bởi câu hỏi người dùng, sau đó xét thứ tự trong pha đó.",
            "hint_id": "h1",
            "penalty_policy": "supported_bằng chứng"
          }
        ],
        "module_id": "day07-g-rag-flow",
        "max_points": 4,
        "interaction": {
          "left": [
            {
              "id": "x1",
              "text": "Extract/clean nguồn"
            },
            {
              "id": "x2",
              "text": "Chunk/embed/index"
            },
            {
              "id": "x3",
              "text": "Embed user query"
            },
            {
              "id": "x4",
              "text": "Search/filter/select ngữ cảnh"
            }
          ],
          "type": "matching",
          "right": [
            {
              "id": "r1",
              "text": "Offline — nguồn normalization"
            },
            {
              "id": "r2",
              "text": "Offline — index construction"
            },
            {
              "id": "r3",
              "text": "Online — query encoding"
            },
            {
              "id": "r4",
              "text": "Online — bằng chứng retrieval"
            }
          ],
          "prompt": "Câu hỏi:\nGhép thao tác với đúng giai đoạn trong hai pha offline/online.",
          "presentation_policy": {
            "do_not_align_pairs_by_row": true,
            "shuffle_right_at_delivery": true,
            "do_not_expose_internal_ids": true
          },
          "prompt_presentation": {
            "render_sections": true,
            "preserve_line_breaks": true
          }
        },
        "question_id": "d07-q052",
        "primary_kc_id": "kc-rag-offline-online-phase-separation",
        "grading_method": "objective_key",
        "question_version": 2,
        "cognitive_operation": "Understand",
        "contributing_kc_ids": [],
        "estimated_difficulty": "easy"
      },
      {
        "servable": false,
        "role": "reassessment",
        "hints": [
          {
            "text": "Đóng băng đầu ra nào ở giữa hai pha?",
            "hint_id": "h1",
            "penalty_policy": "supported_bằng chứng"
          }
        ],
        "module_id": "day07-g-rag-flow",
        "max_points": 4,
        "interaction": {
          "type": "short_text",
          "prompt": "Bối cảnh:\nApp re-extract và re-embed toàn corpus ở mọi câu hỏi; khi policy đổi, cache query vẫn dùng index cũ.\n\nCâu hỏi:\nThiết kế kích hoạt và ranh giới đầu ra đúng.",
          "prompt_presentation": {
            "render_sections": true,
            "preserve_line_breaks": true
          }
        },
        "question_id": "d07-q053",
        "primary_kc_id": "kc-rag-offline-online-phase-separation",
        "grading_method": "criterion_rubric",
        "question_version": 3,
        "cognitive_operation": "Analyze",
        "contributing_kc_ids": [],
        "estimated_difficulty": "medium"
      },
      {
        "servable": false,
        "role": "initial_check",
        "hints": [
          {
            "text": "Một document-level field phải xuất hiện ở mọi chunk cần dùng nó.",
            "hint_id": "h1",
            "penalty_policy": "supported_bằng chứng"
          }
        ],
        "module_id": "day07-g-rag-flow",
        "max_points": 4,
        "interaction": {
          "type": "short_text",
          "prompt": "Bối cảnh:\nFile có metadata đầu tệp `doc_id: library`, `audience: student`, `source_url: ...`; phần nội dung tạo ba chunk.\n\nCâu hỏi:\nNêu danh tính bản ghi/metadata từng chunk và điều kiện kiểm tra.",
          "prompt_presentation": {
            "render_sections": true,
            "preserve_line_breaks": true
          }
        },
        "question_id": "d07-q054",
        "primary_kc_id": "kc-ingestion-chunk-metadata-propagation",
        "grading_method": "criterion_rubric",
        "question_version": 5,
        "cognitive_operation": "Create",
        "contributing_kc_ids": [],
        "estimated_difficulty": "hard"
      },
      {
        "servable": true,
        "role": "initial_check",
        "hints": [
          {
            "text": "Hỏi đây là thông tin thực chung hay state của user/session.",
            "hint_id": "h1",
            "penalty_policy": "supported_bằng chứng"
          }
        ],
        "module_id": "day07-g-rag-flow",
        "max_points": 3,
        "interaction": {
          "left": [
            {
              "id": "x1",
              "text": "Policy học vụ dùng cho mọi sinh viên"
            },
            {
              "id": "x2",
              "text": "Câu hỏi vừa trước trong cuộc hội thoại"
            },
            {
              "id": "x3",
              "text": "Preference “trả lời ngắn” được user cho phép lưu"
            }
          ],
          "type": "matching",
          "right": [
            {
              "id": "r1",
              "text": "Knowledge retrieval"
            },
            {
              "id": "r2",
              "text": "Short-term ngữ cảnh"
            },
            {
              "id": "r3",
              "text": "Governed long-term memory"
            }
          ],
          "prompt": "Ghép từng loại information với route phù hợp.",
          "presentation_policy": {
            "do_not_align_pairs_by_row": true,
            "shuffle_right_at_delivery": true,
            "do_not_expose_internal_ids": true
          },
          "prompt_presentation": {
            "render_sections": true,
            "preserve_line_breaks": true
          }
        },
        "question_id": "d07-q055",
        "primary_kc_id": "kc-knowledge-retrieval-memory-routing",
        "grading_method": "objective_key",
        "question_version": 3,
        "cognitive_operation": "Understand",
        "contributing_kc_ids": [],
        "estimated_difficulty": "easy"
      },
      {
        "servable": false,
        "role": "reassessment",
        "hints": [
          {
            "text": "Một record trả lời “thế giới nói gì”; record kia trả lời “người dùng này đang ở trạng thái nào”.",
            "hint_id": "h1",
            "penalty_policy": "supported_bằng chứng"
          }
        ],
        "module_id": "day07-g-rag-flow",
        "max_points": 4,
        "interaction": {
          "type": "short_text",
          "prompt": "Bối cảnh:\nMột kho vector chứa cả policy và ghi chú “Lan đang stress, hãy ưu tiên dễ”.\n\nCâu hỏi:\nTách quy ước đọc/cập nhật và nêu rủi ro nếu query chung.",
          "prompt_presentation": {
            "render_sections": true,
            "preserve_line_breaks": true
          }
        },
        "question_id": "d07-q056",
        "primary_kc_id": "kc-knowledge-retrieval-memory-routing",
        "grading_method": "criterion_rubric",
        "question_version": 4,
        "cognitive_operation": "Analyze",
        "contributing_kc_ids": [],
        "estimated_difficulty": "hard"
      },
      {
        "servable": false,
        "role": "initial_check",
        "hints": [
          {
            "text": "Điểm truy xuất không thay thế điều kiện đủ dùng/nguồn chính.",
            "hint_id": "h1",
            "penalty_policy": "supported_bằng chứng"
          }
        ],
        "module_id": "day07-g-rag-flow",
        "max_points": 4,
        "interaction": {
          "type": "short_text",
          "prompt": "Bối cảnh:\nRetrieved chunks gồm C1 policy hiện hành, C2 blog không nguồn, C3 policy cũ. Query hỏi deadline mới.\n\nCâu hỏi:\nThiết kế cách chọn context và answer contract.",
          "prompt_presentation": {
            "render_sections": true,
            "preserve_line_breaks": true
          }
        },
        "question_id": "d07-q057",
        "primary_kc_id": "kc-grounded-context-prompt-assembly",
        "grading_method": "criterion_rubric",
        "question_version": 4,
        "cognitive_operation": "Create",
        "contributing_kc_ids": [],
        "estimated_difficulty": "hard"
      },
      {
        "servable": true,
        "role": "reassessment",
        "hints": [
          {
            "text": "Citation không thể thay một thông tin thực không có trong ngữ cảnh.",
            "hint_id": "h1",
            "penalty_policy": "supported_bằng chứng"
          }
        ],
        "module_id": "day07-g-rag-flow",
        "max_points": 1,
        "interaction": {
          "type": "single_select",
          "prompt": "Nếu retrieved context không chứa câu trả lời, behavior nào đúng nhất?",
          "choices": [
            {
              "text": "Cho model dùng kiến thức nền nhưng vẫn cite chunk gần nhất",
              "choice_id": "a"
            },
            {
              "text": "Trả rõ ràng không đủ thông tin/yêu cầu làm rõ theo contract",
              "choice_id": "b"
            },
            {
              "text": "Tăng temperature để tìm câu trả lời",
              "choice_id": "c"
            },
            {
              "text": "Bịa citation từ metadata",
              "choice_id": "d"
            }
          ],
          "presentation_policy": {
            "shuffle_at_delivery": true,
            "do_not_expose_choice_ids": true
          },
          "prompt_presentation": {
            "render_sections": true,
            "preserve_line_breaks": true
          }
        },
        "question_id": "d07-q058",
        "primary_kc_id": "kc-grounded-context-prompt-assembly",
        "grading_method": "objective_key",
        "question_version": 3,
        "cognitive_operation": "Understand",
        "contributing_kc_ids": [],
        "estimated_difficulty": "easy"
      },
      {
        "servable": false,
        "role": "initial_check",
        "hints": [
          {
            "text": "Mỗi gold phải chỉ về nguồn cụ thể trước experiment.",
            "hint_id": "h1",
            "penalty_policy": "supported_bằng chứng"
          }
        ],
        "module_id": "day07-g-evaluation",
        "max_points": 4,
        "interaction": {
          "type": "short_text",
          "prompt": "Bối cảnh:\nKho dữ liệu có policy library cho student/staff và course registration.\n\nCâu hỏi:\nThiết kế ba dòng kiểm thử, trong đó một row phụ thuộc metadata; nêu quy tắc đóng băng.",
          "prompt_presentation": {
            "render_sections": true,
            "preserve_line_breaks": true
          }
        },
        "question_id": "d07-q059",
        "primary_kc_id": "kc-retrieval-benchmark-query-gold-design",
        "grading_method": "criterion_rubric",
        "question_version": 2,
        "cognitive_operation": "Create",
        "contributing_kc_ids": [],
        "estimated_difficulty": "hard"
      },
      {
        "servable": false,
        "role": "initial_check",
        "hints": [
          {
            "text": "MRR chỉ nhìn rank của relevant đầu tiên.",
            "hint_id": "h1",
            "penalty_policy": "supported_bằng chứng"
          }
        ],
        "module_id": "day07-g-evaluation",
        "max_points": 4,
        "interaction": {
          "type": "short_text",
          "prompt": "Bối cảnh:\nTop-5 có mức liên quan `[1,0,1,0,0]`; cả kho có 4 tài liệu liên quan.\n\nCâu hỏi:\nTính Precision@5, Recall@5, MRR và diễn giải ngắn điều gì cho thấy kết quả nhiễu hoặc mục tiêu bị bỏ sót.",
          "prompt_presentation": {
            "render_sections": true,
            "preserve_line_breaks": true
          }
        },
        "question_id": "d07-q060",
        "primary_kc_id": "kc-retrieval-ranking-metric-computation",
        "grading_method": "criterion_rubric",
        "question_version": 5,
        "cognitive_operation": "Apply",
        "contributing_kc_ids": [],
        "estimated_difficulty": "medium"
      },
      {
        "servable": true,
        "role": "reassessment",
        "hints": [
          {
            "text": "Tách độ sạch, độ bao phủ, lần trúng đầu tiên và thứ tự có mức liên quan.",
            "hint_id": "h1",
            "penalty_policy": "supported_bằng chứng"
          }
        ],
        "module_id": "day07-g-evaluation",
        "max_points": 4,
        "interaction": {
          "left": [
            {
              "id": "x1",
              "text": "Bao nhiêu result trong top-k là relevant?"
            },
            {
              "id": "x2",
              "text": "Đã lấy được bao nhiêu trong toàn bộ relevant set?"
            },
            {
              "id": "x3",
              "text": "Relevant đầu tiên đến sớm không?"
            },
            {
              "id": "x4",
              "text": "Graded mức liên quan có được xếp đúng thứ tự?"
            }
          ],
          "type": "matching",
          "right": [
            {
              "id": "r1",
              "text": "Precision@k"
            },
            {
              "id": "r2",
              "text": "Recall@k"
            },
            {
              "id": "r3",
              "text": "MRR"
            },
            {
              "id": "r4",
              "text": "NDCG"
            }
          ],
          "prompt": "Câu hỏi:\nGhép metric với câu hỏi failure nó nhấn mạnh.",
          "presentation_policy": {
            "do_not_align_pairs_by_row": true,
            "shuffle_right_at_delivery": true,
            "do_not_expose_internal_ids": true
          },
          "prompt_presentation": {
            "render_sections": true,
            "preserve_line_breaks": true
          }
        },
        "question_id": "d07-q061",
        "primary_kc_id": "kc-retrieval-ranking-metric-computation",
        "grading_method": "objective_key",
        "question_version": 2,
        "cognitive_operation": "Understand",
        "contributing_kc_ids": [],
        "estimated_difficulty": "easy"
      },
      {
        "servable": false,
        "role": "initial_check",
        "hints": [
          {
            "text": "Mỗi defect cần một boundary-level repair riêng.",
            "hint_id": "h1",
            "penalty_policy": "supported_bằng chứng"
          }
        ],
        "module_id": "day07-g-evaluation",
        "max_points": 4,
        "interaction": {
          "type": "short_text",
          "prompt": "Bối cảnh:\nChunk A kết thúc “Được hoàn phí nếu…”; chunk B bắt đầu bằng mức tiền nhưng thiếu điều kiện. Chunk C chứa hai policy không liên quan.\n\nCâu hỏi:\nChấm tính mạch lạc và đề xuất sửa đúng lớp.",
          "prompt_presentation": {
            "render_sections": true,
            "preserve_line_breaks": true
          }
        },
        "question_id": "d07-q062",
        "primary_kc_id": "kc-retrieved-chunk-coherence-evaluation",
        "grading_method": "criterion_rubric",
        "question_version": 3,
        "cognitive_operation": "Analyze",
        "contributing_kc_ids": [],
        "estimated_difficulty": "hard"
      },
      {
        "servable": false,
        "role": "initial_check",
        "hints": [
          {
            "text": "Tách lỗi của filter logic khỏi lỗi metadata độ bao phủ.",
            "hint_id": "h1",
            "penalty_policy": "supported_bằng chứng"
          }
        ],
        "module_id": "day07-g-evaluation",
        "max_points": 4,
        "interaction": {
          "type": "short_text",
          "prompt": "Bối cảnh:\nKhông lọc, top-3 có 2 relevant records đúng audience. Filter `audience=student` cho 3 relevant records nhưng bỏ một policy đúng vì metadata thiếu audience.\n\nCâu hỏi:\nĐánh giá utility của filter và quyết định bước tiếp theo.",
          "prompt_presentation": {
            "render_sections": true,
            "preserve_line_breaks": true
          }
        },
        "question_id": "d07-q063",
        "primary_kc_id": "kc-metadata-filter-utility-evaluation",
        "grading_method": "criterion_rubric",
        "question_version": 3,
        "cognitive_operation": "Analyze",
        "contributing_kc_ids": [],
        "estimated_difficulty": "hard"
      },
      {
        "servable": true,
        "role": "reassessment",
        "hints": [
          {
            "text": "Một filter chỉ hữu ích nếu field phân biệt ứng viên phù hợp.",
            "hint_id": "h1",
            "penalty_policy": "supported_bằng chứng"
          }
        ],
        "module_id": "day07-g-evaluation",
        "max_points": 1,
        "interaction": {
          "type": "single_select",
          "prompt": "Bối cảnh:\nFilter theo department không đổi result nào trên 20 metadata-dependent queries vì mọi record đều có cùng department.\n\nCâu hỏi:\nKết luận nào đúng nhất?",
          "choices": [
            {
              "text": "Filter đã chứng minh rất hiệu quả dù ứng viên set trước và sau hoàn toàn giống nhau",
              "choice_id": "a"
            },
            {
              "text": "Trường không có discriminatory utility trong corpus/test này; cân nhắc remove hoặc redesign",
              "choice_id": "b"
            },
            {
              "text": "Tăng top-k đủ lớn sẽ tự làm field department có thêm giá trị phân biệt ứng viên",
              "choice_id": "c"
            },
            {
              "text": "Gán ngẫu nhiên department cho các record để tạo khác biệt quan sát được trong A/B test",
              "choice_id": "d"
            }
          ],
          "presentation_policy": {
            "shuffle_at_delivery": true,
            "do_not_expose_choice_ids": true
          },
          "prompt_presentation": {
            "render_sections": true,
            "preserve_line_breaks": true
          }
        },
        "question_id": "d07-q064",
        "primary_kc_id": "kc-metadata-filter-utility-evaluation",
        "grading_method": "objective_key",
        "question_version": 3,
        "cognitive_operation": "Understand",
        "contributing_kc_ids": [],
        "estimated_difficulty": "easy"
      },
      {
        "servable": false,
        "role": "initial_check",
        "hints": [
          {
            "text": "Theo gold fact từ source tới extracted corpus trước khi nhìn model.",
            "hint_id": "h1",
            "penalty_policy": "supported_bằng chứng"
          }
        ],
        "module_id": "day07-g-evaluation",
        "max_points": 4,
        "interaction": {
          "type": "short_text",
          "prompt": "Bối cảnh:\nGold answer có trong source. Extracted text làm mất bảng chứa answer; index và search chỉ nhận bản text thiếu. Generator trả “không có thông tin”.\n\nCâu hỏi:\nXác định earliest defect, phương án thay thế và rerun.",
          "prompt_presentation": {
            "render_sections": true,
            "preserve_line_breaks": true
          }
        },
        "question_id": "d07-q065",
        "primary_kc_id": "kc-retrieval-failure-layer-diagnosis",
        "grading_method": "criterion_rubric",
        "question_version": 4,
        "cognitive_operation": "Analyze",
        "contributing_kc_ids": [],
        "estimated_difficulty": "hard"
      },
      {
        "servable": false,
        "role": "reassessment",
        "hints": [
          {
            "text": "Nếu unfiltered result đã đúng, failure nằm ở eligibility control.",
            "hint_id": "h1",
            "penalty_policy": "supported_bằng chứng"
          }
        ],
        "module_id": "day07-g-evaluation",
        "max_points": 4,
        "interaction": {
          "type": "short_text",
          "prompt": "Bối cảnh:\nMục tiêu là tìm câu trả lời hiện hành cho học viên kỳ `semester=2026`. Bản ghi đáp án chuẩn có `department=engineering`, `semester=2026`. Lần chạy không lọc đưa bản ghi này lên hạng 1; lần chạy dùng bộ lọc `department=engineering`, `semester=2025` lại không trả kết quả.\n\nCâu hỏi:\nChẩn đoán lỗi và nêu phép kiểm hoặc cách sửa tối thiểu.",
          "prompt_presentation": {
            "render_sections": true,
            "preserve_line_breaks": true
          }
        },
        "question_id": "d07-q066",
        "primary_kc_id": "kc-retrieval-failure-layer-diagnosis",
        "grading_method": "criterion_rubric",
        "question_version": 5,
        "cognitive_operation": "Analyze",
        "contributing_kc_ids": [],
        "estimated_difficulty": "hard"
      },
      {
        "servable": true,
        "role": "follow_up",
        "hints": [
          {
            "text": "Muốn locate cause phải giữ các layer khác cố định.",
            "hint_id": "h1",
            "penalty_policy": "supported_bằng chứng"
          }
        ],
        "module_id": "day07-g-evaluation",
        "max_points": 1,
        "interaction": {
          "type": "single_select",
          "prompt": "Bối cảnh:\nTeam cùng lúc đổi corpus, chunk size, embedding model, top-k và prompt; score tăng.\n\nCâu hỏi:\nKết luận nào đúng?",
          "choices": [
            {
              "text": "Đã chứng minh chunk size là nguyên nhân duy nhất làm toàn bộ score tăng",
              "choice_id": "a"
            },
            {
              "text": "Không xác định được layer nào gây tăng; cần thử nghiệm chỉ đổi một biến trên frozen benchmark",
              "choice_id": "b"
            },
            {
              "text": "Embedding model chắc chắn là nguyên nhân vì nó trực tiếp tạo vector mới cho search",
              "choice_id": "c"
            },
            {
              "text": "Có thể giữ khẳng định nhân quả về một layer bất kỳ nếu aggregate cuối cùng đủ đẹp",
              "choice_id": "d"
            }
          ],
          "presentation_policy": {
            "shuffle_at_delivery": true,
            "do_not_expose_choice_ids": true
          },
          "prompt_presentation": {
            "render_sections": true,
            "preserve_line_breaks": true
          }
        },
        "question_id": "d07-q067",
        "primary_kc_id": "kc-retrieval-failure-layer-diagnosis",
        "grading_method": "objective_key",
        "question_version": 3,
        "cognitive_operation": "Understand",
        "contributing_kc_ids": [],
        "estimated_difficulty": "easy"
      },
      {
        "servable": false,
        "role": "initial_check",
        "hints": [
          {
            "text": "Aggregate gần bằng nhau vẫn có thể che strategy thắng ở từng query class.",
            "hint_id": "h1",
            "penalty_policy": "supported_bằng chứng"
          }
        ],
        "module_id": "day07-g-evaluation",
        "max_points": 4,
        "interaction": {
          "type": "short_text",
          "prompt": "So sánh heading chunking với fixed-300 cho cùng handbook.\n\nCâu hỏi:\nThiết kế experiment table và decision rule mà không overclaim.",
          "prompt_presentation": {
            "render_sections": true,
            "preserve_line_breaks": true
          }
        },
        "question_id": "d07-q068",
        "primary_kc_id": "kc-controlled-retrieval-strategy-experiment",
        "grading_method": "criterion_rubric",
        "question_version": 6,
        "cognitive_operation": "Create",
        "contributing_kc_ids": [],
        "estimated_difficulty": "hard"
      },
      {
        "servable": false,
        "role": "reassessment",
        "hints": [
          {
            "text": "Đối với từng nguồn, tách “đọc được” khỏi “được phép và phù hợp để index”.",
            "hint_id": "h1",
            "penalty_policy": "supported_bằng chứng"
          }
        ],
        "module_id": "day07-g-data-strategy",
        "max_points": 4,
        "interaction": {
          "type": "short_text",
          "prompt": "Bối cảnh:\nNhóm có bốn nguồn: tài liệu kỹ thuật công khai có giấy phép rõ; xuất dữ liệu CRM chứa số điện thoại nhưng người phụ trách chưa duyệt; nhật ký thay đổi do Engineering sở hữu, cập nhật mỗi phát hành; thư mục cá nhân không biết nguồn gốc.\n\nCâu hỏi:\nHoàn thiện danh mục decision cho bốn nguồn và nêu điểm chặn trước khi index.",
          "prompt_presentation": {
            "render_sections": true,
            "preserve_line_breaks": true
          }
        },
        "question_id": "d07-q069",
        "primary_kc_id": "kc-retrieval-data-inventory-governance",
        "grading_method": "criterion_rubric",
        "question_version": 3,
        "cognitive_operation": "Evaluate",
        "contributing_kc_ids": [],
        "estimated_difficulty": "hard"
      },
      {
        "servable": false,
        "role": "reassessment",
        "hints": [
          {
            "text": "Reviewer cần biết tệp đến từ đâu, phiên bản nào và dựa trên quyền nào.",
            "hint_id": "h1",
            "penalty_policy": "supported_bằng chứng"
          }
        ],
        "module_id": "day07-g-data-strategy",
        "max_points": 4,
        "interaction": {
          "type": "short_text",
          "prompt": "Bối cảnh:\ntập ứng viên gồm 6 trang hướng dẫn công khai, 2 tệp PDF công khai tải từ trang có version và 1 trang khác yêu cầu đăng nhập. Nhóm chưa có quyền tái sử dụng nội dung sau đăng nhập.\n\nCâu hỏi:\nThiết kế thu thập ranh giới và sổ theo dõi để một người kiểm tra tái tạo corpus mà không vượt quyền.",
          "prompt_presentation": {
            "render_sections": true,
            "preserve_line_breaks": true
          }
        },
        "question_id": "d07-q070",
        "primary_kc_id": "kc-public-corpus-source-provenance",
        "grading_method": "criterion_rubric",
        "question_version": 4,
        "cognitive_operation": "Create",
        "contributing_kc_ids": [],
        "estimated_difficulty": "hard"
      },
      {
        "servable": false,
        "role": "reassessment",
        "hints": [
          {
            "text": "Mỗi sửa đổi cần chỉ ra vùng nguồn nào xác nhận nó.",
            "hint_id": "h1",
            "penalty_policy": "supported_bằng chứng"
          }
        ],
        "module_id": "day07-g-processing",
        "max_points": 4,
        "interaction": {
          "type": "short_text",
          "prompt": "Bối cảnh:\nOCR trả `Top-k = S`, footer “Internal draft” lặp ở mọi trang và một bảng hai cột bị ghép thành từng dòng xen kẽ. Ảnh nguồn xác nhận ký tự là `5`, nhưng tiêu đề cột thứ hai bị che mất.\n\nCâu hỏi:\nNêu các sửa đổi được phép, phần phải giữ uncertainty và bằng chứng kiểm lại.",
          "prompt_presentation": {
            "render_sections": true,
            "preserve_line_breaks": true
          }
        },
        "question_id": "d07-q071",
        "primary_kc_id": "kc-extracted-text-quality-repair",
        "grading_method": "criterion_rubric",
        "question_version": 4,
        "cognitive_operation": "Analyze",
        "contributing_kc_ids": [],
        "estimated_difficulty": "hard"
      },
      {
        "servable": false,
        "role": "reassessment",
        "hints": [
          {
            "text": "Hãy xác định điều kiện GPA thuộc mục nào trước khi quyết định cách lưu nó.",
            "hint_id": "h1",
            "penalty_policy": "supported_bằng chứng"
          }
        ],
        "module_id": "day07-g-processing",
        "max_points": 4,
        "interaction": {
          "type": "short_text",
          "prompt": "Bối cảnh:\nMột trang có hai mục `Học bổng` và `Gia hạn`. Khi trích xuất thành văn bản thuần, điều kiện “chỉ áp dụng khi GPA ≥ 3.2” của mục Học bổng lại bị đặt sau mục Gia hạn. Bảng trên trang ghép từng loại học bổng với mức hỗ trợ.\n\nCâu hỏi:\nDựng biểu diễn chuẩn hóa để điều kiện GPA và bảng không bị gắn nhầm sang mục Gia hạn.",
          "prompt_presentation": {
            "render_sections": true,
            "preserve_line_breaks": true
          }
        },
        "question_id": "d07-q072",
        "primary_kc_id": "kc-document-semantic-structure-preservation",
        "grading_method": "criterion_rubric",
        "question_version": 4,
        "cognitive_operation": "Create",
        "contributing_kc_ids": [],
        "estimated_difficulty": "hard"
      },
      {
        "servable": false,
        "role": "reassessment",
        "hints": [
          {
            "text": "Kiểm danh tính, tập giá trị và nguồn gốc riêng biệt.",
            "hint_id": "h1",
            "penalty_policy": "supported_bằng chứng"
          }
        ],
        "module_id": "day07-g-processing",
        "max_points": 4,
        "interaction": {
          "type": "short_text",
          "prompt": "Bối cảnh:\nĐợt nhập dữ liệu có hai bản ghi cùng `doc_id=policy-9`, cùng `source_url` và cùng `document_version=v3`; một bản ghi dùng `department=CS`, bản ghi kia dùng `department=computer-science`. Bản ghi thứ ba có tiêu đề nhưng thiếu `source_url`.\n\nCâu hỏi:\nTheo quy ước metadata, bản ghi nào cần bị từ chối hoặc đưa vào vùng chờ, cần chuẩn hóa gì và vì sao?",
          "prompt_presentation": {
            "render_sections": true,
            "preserve_line_breaks": true
          }
        },
        "question_id": "d07-q073",
        "primary_kc_id": "kc-retrieval-document-metadata-contract",
        "grading_method": "criterion_rubric",
        "question_version": 5,
        "cognitive_operation": "Analyze",
        "contributing_kc_ids": [],
        "estimated_difficulty": "hard"
      },
      {
        "servable": false,
        "role": "reassessment",
        "hints": [
          {
            "text": "Tách câu trước rồi mới nhóm tối đa ba câu.",
            "hint_id": "h1",
            "penalty_policy": "supported_bằng chứng"
          }
        ],
        "module_id": "day07-g-chunking",
        "max_points": 4,
        "interaction": {
          "type": "short_text",
          "prompt": "Bối cảnh:\nQuy ước nhận các dấu kết thúc câu `. `, `! `, `? `, dấu chấm ngay trước dấu xuống dòng và dấu kết thúc ở cuối đầu vào; `max_sentences_per_chunk=3`.\n\nDữ liệu đầu vào:\n`Một. Hai! Ba? Bốn.`\n`Năm.`\n\nCâu hỏi:\nNêu các câu, các chunk đầu ra và ba điều kiện kiểm thử cho trường hợp biên độc lập.",
          "prompt_presentation": {
            "render_sections": true,
            "preserve_line_breaks": true
          }
        },
        "question_id": "d07-q074",
        "primary_kc_id": "kc-sentence-boundary-chunker-implementation",
        "grading_method": "criterion_rubric",
        "question_version": 9,
        "cognitive_operation": "Apply",
        "contributing_kc_ids": [],
        "estimated_difficulty": "medium"
      },
      {
        "servable": false,
        "role": "reassessment",
        "hints": [
          {
            "text": "Theo dõi hai đại lượng phải giảm: dấu phân tách còn lại và chiều dài phần văn bản.",
            "hint_id": "h1",
            "penalty_policy": "supported_bằng chứng"
          }
        ],
        "module_id": "day07-g-chunking",
        "max_points": 4,
        "interaction": {
          "type": "short_text",
          "prompt": "Bối cảnh:\n`size=18`, thứ tự ưu tiên là `[\"\\n\\n\", \"\\n\", \". \", \" \", \"\"]`. Một mục dài 42 ký tự không có dấu xuống dòng. Tách bằng `. ` cho P1 dài 12 ký tự và P2 dài 28 ký tự; P2 tách tiếp bằng dấu cách thành P2a dài 14 và P2b dài 13 ký tự.\n\nCâu hỏi:\nTheo dõi nhánh đệ quy, liệt kê các phần đầu ra theo thứ tự và nêu bất biến bảo đảm kết thúc.",
          "prompt_presentation": {
            "render_sections": true,
            "preserve_line_breaks": true
          }
        },
        "question_id": "d07-q075",
        "primary_kc_id": "kc-recursive-separator-chunker-implementation",
        "grading_method": "criterion_rubric",
        "question_version": 7,
        "cognitive_operation": "Analyze",
        "contributing_kc_ids": [],
        "estimated_difficulty": "hard"
      },
      {
        "servable": false,
        "role": "reassessment",
        "hints": [
          {
            "text": "Một chunk con vẫn phải biết toàn bộ tổ tiên tiêu đề và phạm vi của ghi chú.",
            "hint_id": "h1",
            "penalty_policy": "supported_bằng chứng"
          }
        ],
        "module_id": "day07-g-chunking",
        "max_points": 4,
        "interaction": {
          "type": "short_text",
          "prompt": "Bối cảnh:\nSổ tay có `# Tuyển sinh`, hai mục `## Hồ sơ` và `## Học bổng`; dưới Học bổng có `### Điều kiện` dài vượt ngân sách kích thước và một ghi chú ngoại lệ ở cuối.\n\nCâu hỏi:\nThiết kế chunk và metadata để truy vấn ngoại lệ vẫn truy đúng phạm vi.",
          "prompt_presentation": {
            "render_sections": true,
            "preserve_line_breaks": true
          }
        },
        "question_id": "d07-q076",
        "primary_kc_id": "kc-heading-section-chunker-design",
        "grading_method": "criterion_rubric",
        "question_version": 6,
        "cognitive_operation": "Create",
        "contributing_kc_ids": [],
        "estimated_difficulty": "hard"
      },
      {
        "servable": false,
        "role": "reassessment",
        "hints": [
          {
            "text": "Hai con số đẹp không đủ nếu dữ liệu đầu vào và thô đầu ra không cùng quy ước.",
            "hint_id": "h1",
            "penalty_policy": "supported_bằng chứng"
          }
        ],
        "module_id": "day07-g-chunking",
        "max_points": 4,
        "interaction": {
          "type": "short_text",
          "prompt": "Bối cảnh:\nBộ so sánh báo cửa sổ cố định: số lượng=8, độ dài trung bình=120; câu: số lượng=6, độ dài trung bình=150; đệ quy: số lượng=7, độ dài trung bình≈128,6. Nhưng cửa sổ cố định chạy trên văn bản thô 960 ký tự, hai chiến lược còn lại chạy trên văn bản đã làm sạch 900 ký tự; đầu ra không giữ các chunk thực tế.\n\nCâu hỏi:\nKiểm tra phép so sánh và thiết kế lần chạy lại tối thiểu.",
          "prompt_presentation": {
            "render_sections": true,
            "preserve_line_breaks": true
          }
        },
        "question_id": "d07-q077",
        "primary_kc_id": "kc-chunking-comparator-implementation",
        "grading_method": "criterion_rubric",
        "question_version": 9,
        "cognitive_operation": "Analyze",
        "contributing_kc_ids": [],
        "estimated_difficulty": "hard"
      },
      {
        "servable": false,
        "role": "reassessment",
        "hints": [
          {
            "text": "Xác định giai đoạn đầu tiên không còn nhìn thấy bốn token cuối.",
            "hint_id": "h1",
            "penalty_policy": "supported_bằng chứng"
          }
        ],
        "module_id": "day07-g-embeddings",
        "max_points": 4,
        "interaction": {
          "type": "short_text",
          "prompt": "Bối cảnh:\nEmbedder có giới hạn đầu vào 8 token. Văn bản tạo 12 token; pipeline cắt còn 8, bộ mã hóa sinh 8 trạng thái token, mean-pool rồi chuẩn hóa thành vector.\n\nCâu hỏi:\nTheo dõi luồng và chỉ ra thông tin nào có thể mất trước khi vector được tạo.",
          "prompt_presentation": {
            "render_sections": true,
            "preserve_line_breaks": true
          }
        },
        "question_id": "d07-q078",
        "primary_kc_id": "kc-embedding-encoder-flow-tracing",
        "grading_method": "criterion_rubric",
        "question_version": 6,
        "cognitive_operation": "Analyze",
        "contributing_kc_ids": [],
        "estimated_difficulty": "medium"
      },
      {
        "servable": true,
        "role": "follow_up",
        "hints": [
          {
            "text": "Dấu của chênh lệch mất đi sau bước bình phương.",
            "hint_id": "h1",
            "penalty_policy": "supported_bằng chứng"
          }
        ],
        "module_id": "day07-g-embeddings",
        "max_points": 1,
        "interaction": {
          "type": "single_select",
          "prompt": "`u=[-1,2,4]`, `v=[2,-2,4]`. Cách tính khoảng cách Euclidean nào đúng?",
          "choices": [
            {
              "text": "Cộng các chênh lệch: -3 + 4 + 0 = 1.",
              "choice_id": "c1"
            },
            {
              "text": "Tính √((-3)² + 4² + 0²) = 5.",
              "choice_id": "c2"
            },
            {
              "text": "Tính dot product rồi chia cho hai norm.",
              "choice_id": "c3"
            },
            {
              "text": "Chỉ so chiều có chênh lệch lớn nhất nên khoảng cách = 4.",
              "choice_id": "c4"
            }
          ],
          "presentation_policy": {
            "do_not_align_pairs_by_row": false,
            "shuffle_right_at_delivery": false,
            "do_not_expose_internal_ids": true,
            "shuffle_choices_at_delivery": true
          },
          "prompt_presentation": {
            "render_sections": true,
            "preserve_line_breaks": true
          }
        },
        "question_id": "d07-q079",
        "primary_kc_id": "kc-euclidean-distance-computation",
        "grading_method": "objective_key",
        "question_version": 6,
        "cognitive_operation": "Apply",
        "contributing_kc_ids": [],
        "estimated_difficulty": "easy"
      },
      {
        "servable": false,
        "role": "reassessment",
        "hints": [
          {
            "text": "danh tính phải cho phép giữ, lọc và xóa từng phiên bản độc lập.",
            "hint_id": "h1",
            "penalty_policy": "supported_bằng chứng"
          }
        ],
        "module_id": "day07-g-vector-store",
        "max_points": 4,
        "interaction": {
          "type": "short_text",
          "prompt": "Bối cảnh:\nHai chunk có cùng nội dung “Hạn nộp là 30/9” nhưng thuộc `policy-v2` và `policy-v3`; chỉ v3 còn hiệu lực.\n\nCâu hỏi:\nThiết kế bản ghi danh tính/metadata để tìm kiếm, trích dẫn và vòng đời không trộn hai phiên bản.",
          "prompt_presentation": {
            "render_sections": true,
            "preserve_line_breaks": true
          }
        },
        "question_id": "d07-q080",
        "primary_kc_id": "kc-vector-store-record-contract",
        "grading_method": "criterion_rubric",
        "question_version": 7,
        "cognitive_operation": "Create",
        "contributing_kc_ids": [],
        "estimated_difficulty": "hard"
      },
      {
        "servable": false,
        "role": "reassessment",
        "hints": [
          {
            "text": "Trạng thái sẵn sàng phải xác nhận cả danh tính của bộ sưu tập lẫn embedder.",
            "hint_id": "h1",
            "penalty_policy": "supported_bằng chứng"
          }
        ],
        "module_id": "day07-g-vector-store",
        "max_points": 4,
        "interaction": {
          "type": "short_text",
          "prompt": "Bối cảnh:\nCấu hình yêu cầu bộ sưu tập `policies-v3` và embedder E3. máy khách khởi tạo được nhưng trả bộ sưu tập `policies-v2` gắn E2; bộ nhớ phương án dự phòng đang chứa dữ liệu test cũ.\n\nCâu hỏi:\nNêu dừng sớm/phương án dự phòng hành vi và khởi động các điều kiện kiểm thử an toàn.",
          "prompt_presentation": {
            "render_sections": true,
            "preserve_line_breaks": true
          }
        },
        "question_id": "d07-q081",
        "primary_kc_id": "kc-vector-store-backend-initialization",
        "grading_method": "criterion_rubric",
        "question_version": 5,
        "cognitive_operation": "Analyze",
        "contributing_kc_ids": [],
        "estimated_difficulty": "hard"
      },
      {
        "servable": false,
        "role": "reassessment",
        "hints": [
          {
            "text": "nội dung bằng nhau không thay thế bản ghi danh tính; theo dõi trạng thái trước và sau từng lần thêm.",
            "hint_id": "h1",
            "penalty_policy": "supported_bằng chứng"
          }
        ],
        "module_id": "day07-g-vector-store",
        "max_points": 4,
        "interaction": {
          "type": "short_text",
          "prompt": "Bối cảnh:\nkho đang có bản ghi `X::0`. Lần thêm thứ nhất nhận `A::0` và `B::0` có cùng nội dung “Chính sách hoàn tiền” nhưng metadata/doc_id khác nhau. Lần thêm thứ hai nhận `A::1` với nội dung khác.\n\nCâu hỏi:\nNêu bản ghi tạo mới, trạng thái và các điều kiện kiểm thử sau hai lần thêm.",
          "prompt_presentation": {
            "render_sections": true,
            "preserve_line_breaks": true
          }
        },
        "question_id": "d07-q082",
        "primary_kc_id": "kc-vector-store-document-addition",
        "grading_method": "criterion_rubric",
        "question_version": 5,
        "cognitive_operation": "Apply",
        "contributing_kc_ids": [],
        "estimated_difficulty": "medium"
      },
      {
        "servable": false,
        "role": "reassessment",
        "hints": [
          {
            "text": "Tên API cho biết đơn vị phải bị xóa là tài liệu hay một chunk.",
            "hint_id": "h1",
            "penalty_policy": "supported_bằng chứng"
          }
        ],
        "module_id": "day07-g-vector-store",
        "max_points": 3,
        "interaction": {
          "type": "short_text",
          "prompt": "Bối cảnh:\nkho có `P::0`, `P::1`, `P::2`, `Q::0`; metadata của ba bản ghi đầu đều có `doc_id=P`. Một giao diện truyền nhầm chunk ID `P::1` vào API vốn nhận tài liệu ID.\n\nCâu hỏi:\nNêu hành vi đúng, kiểm soát cần có và trạng thái sau khi xóa P hợp lệ.",
          "prompt_presentation": {
            "render_sections": true,
            "preserve_line_breaks": true
          }
        },
        "question_id": "d07-q083",
        "primary_kc_id": "kc-vector-store-document-deletion",
        "grading_method": "criterion_rubric",
        "question_version": 6,
        "cognitive_operation": "Apply",
        "contributing_kc_ids": [],
        "estimated_difficulty": "medium"
      },
      {
        "servable": false,
        "role": "reassessment",
        "hints": [
          {
            "text": "So từng trường cấp tài liệu và trường cấp chunk trên cả hai bản ghi.",
            "hint_id": "h1",
            "penalty_policy": "supported_bằng chứng"
          }
        ],
        "module_id": "day07-g-rag-flow",
        "max_points": 4,
        "interaction": {
          "type": "short_text",
          "prompt": "Bối cảnh:\nmetadata đầu tệp có `doc_id=refund`, `source_url=/v4`, `audience=staff`; phần nội dung được chia thành hai chunk. Chunk thứ hai mất `audience` và cả hai chunk đều dùng `chunk_index=0`.\n\nCâu hỏi:\nChẩn đoán hậu quả và nêu bản ghi đã sửa và điều kiện kiểm tra.",
          "prompt_presentation": {
            "render_sections": true,
            "preserve_line_breaks": true
          }
        },
        "question_id": "d07-q084",
        "primary_kc_id": "kc-ingestion-chunk-metadata-propagation",
        "grading_method": "criterion_rubric",
        "question_version": 5,
        "cognitive_operation": "Analyze",
        "contributing_kc_ids": [],
        "estimated_difficulty": "medium"
      },
      {
        "servable": false,
        "role": "reassessment",
        "hints": [
          {
            "text": "Mọi thành phần nào bị thay sau khi nhìn kết quả đều có thể gây rò rỉ.",
            "hint_id": "h1",
            "penalty_policy": "supported_bằng chứng"
          }
        ],
        "module_id": "day07-g-evaluation",
        "max_points": 4,
        "interaction": {
          "type": "short_text",
          "prompt": "Bối cảnh:\nMột bản nháp bộ kiểm thử có truy vấn “Chính sách nào tốt nhất?”, đáp án chuẩn do model tự viết, tài liệu mong đợi để trống; sau khi Chiến lược B thắng, nhóm sửa hai truy vấn để giống đầu ra của B.\n\nCâu hỏi:\nRà soát các lỗi và viết lại quy trình bộ kiểm thử.",
          "prompt_presentation": {
            "render_sections": true,
            "preserve_line_breaks": true
          }
        },
        "question_id": "d07-q085",
        "primary_kc_id": "kc-retrieval-benchmark-query-gold-design",
        "grading_method": "criterion_rubric",
        "question_version": 4,
        "cognitive_operation": "Evaluate",
        "contributing_kc_ids": [],
        "estimated_difficulty": "hard"
      },
      {
        "servable": false,
        "role": "reassessment",
        "hints": [
          {
            "text": "Một chunk có thể đọc trôi chảy nhưng vẫn thuộc sai quy ước.",
            "hint_id": "h1",
            "penalty_policy": "supported_bằng chứng"
          }
        ],
        "module_id": "day07-g-evaluation",
        "max_points": 4,
        "interaction": {
          "type": "short_text",
          "prompt": "Bối cảnh:\nTruy vấn hỏi “Ai được miễn phí trễ hạn?”. Top 3: R1 chỉ có danh sách đối tượng nhưng thiếu tiêu đề; R2 có tiêu đề đúng nhưng câu ngoại lệ bị cắt sau “trừ khi”; R3 hoàn chỉnh nhưng thuộc quy ước khác.\n\nCâu hỏi:\nChấm từng chunk về độ đầy đủ ngữ nghĩa/mức liên quan và đề xuất sửa theo lớp.",
          "prompt_presentation": {
            "render_sections": true,
            "preserve_line_breaks": true
          }
        },
        "question_id": "d07-q086",
        "primary_kc_id": "kc-retrieved-chunk-coherence-evaluation",
        "grading_method": "criterion_rubric",
        "question_version": 4,
        "cognitive_operation": "Analyze",
        "contributing_kc_ids": [],
        "estimated_difficulty": "hard"
      },
      {
        "servable": false,
        "role": "reassessment",
        "hints": [
          {
            "text": "Đừng để một tổng hợp gần bằng nhau xóa mất bên thắng/bên thua theo lớp truy vấn.",
            "hint_id": "h1",
            "penalty_policy": "supported_bằng chứng"
          }
        ],
        "module_id": "day07-g-evaluation",
        "max_points": 4,
        "interaction": {
          "type": "short_text",
          "prompt": "Bối cảnh:\nTrên 20 truy vấn đã đóng băng, chia chunk theo tiêu đề thắng 6/8 truy vấn về ngoại lệ nhưng thua cửa sổ cố định-300 ở 5/6 FAQ ngắn; 6 truy vấn còn lại hòa. Tổng hợp Recall@5 lần lượt 0,80 và 0,79.\n\nCâu hỏi:\nDiễn giải kết quả, nêu quy tắc quyết định và thử nghiệm tiếp theo mà không overclaim.",
          "prompt_presentation": {
            "render_sections": true,
            "preserve_line_breaks": true
          }
        },
        "question_id": "d07-q087",
        "primary_kc_id": "kc-controlled-retrieval-strategy-experiment",
        "grading_method": "criterion_rubric",
        "question_version": 4,
        "cognitive_operation": "Evaluate",
        "contributing_kc_ids": [],
        "estimated_difficulty": "hard"
      },
      {
        "servable": true,
        "role": "follow_up",
        "hints": [
          {
            "text": "Xem giá trị tồn tại bao lâu và được dùng trong phạm vi nào.",
            "hint_id": "h1",
            "penalty_policy": "supported_bằng chứng"
          }
        ],
        "module_id": "day07-g-data-strategy",
        "max_points": 1,
        "interaction": {
          "type": "single_select",
          "prompt": "Trợ lý chỉ nhận `student_language` khi người học chọn ngôn ngữ cho phiên chat hiện tại; giá trị bị bỏ khi phiên kết thúc. Cách xử lý nào phù hợp nhất?",
          "choices": [
            {
              "text": "Dùng như dữ liệu ngữ cảnh của phiên chat, theo chính sách truy cập của phiên.",
              "choice_id": "c1"
            },
            {
              "text": "Đọc trực tiếp như trạng thái vận hành thay đổi sau mỗi giao dịch.",
              "choice_id": "c2"
            },
            {
              "text": "Quản lý phiên bản như một chính sách tham chiếu của khóa học.",
              "choice_id": "c3"
            },
            {
              "text": "Đưa vào kho truy xuất như tài liệu để trích dẫn.",
              "choice_id": "c4"
            }
          ],
          "presentation_policy": {
            "do_not_expose_internal_ids": true,
            "shuffle_choices_at_delivery": true
          },
          "prompt_presentation": {
            "render_sections": true,
            "preserve_line_breaks": true
          }
        },
        "question_id": "d07-q088",
        "primary_kc_id": "kc-ai-data-classification-by-access-semantics",
        "grading_method": "objective_key",
        "question_version": 3,
        "cognitive_operation": "Apply",
        "contributing_kc_ids": [],
        "estimated_difficulty": "medium"
      },
      {
        "servable": true,
        "role": "follow_up",
        "hints": [
          {
            "text": "Xét xem email và số điện thoại còn xuất hiện trước khi embeddings được tạo.",
            "hint_id": "h1",
            "penalty_policy": "supported_bằng chứng"
          }
        ],
        "module_id": "day07-g-data-strategy",
        "max_points": 1,
        "interaction": {
          "type": "single_select",
          "prompt": "Nhóm đã tạo embeddings từ đoạn chat còn nguyên email và số điện thoại. Kết luận nào đúng?",
          "choices": [
            {
              "text": "Embeddings tự động làm dữ liệu ẩn danh nên không cần xử lý thêm.",
              "choice_id": "c1"
            },
            {
              "text": "Cần áp dụng biến đổi phù hợp trước khi tạo embeddings; embeddings không tự xóa rủi ro định danh.",
              "choice_id": "c2"
            },
            {
              "text": "Chỉ cần đổi tên tệp chứa embeddings là đủ.",
              "choice_id": "c3"
            },
            {
              "text": "Có thể bỏ toàn bộ kiểm soát vì đoạn chat dùng nội bộ.",
              "choice_id": "c4"
            }
          ],
          "presentation_policy": {
            "do_not_expose_internal_ids": true,
            "shuffle_choices_at_delivery": true
          },
          "prompt_presentation": {
            "render_sections": true,
            "preserve_line_breaks": true
          }
        },
        "question_id": "d07-q089",
        "primary_kc_id": "kc-preembedding-sensitive-data-transformation",
        "grading_method": "objective_key",
        "question_version": 5,
        "cognitive_operation": "Apply",
        "contributing_kc_ids": [],
        "estimated_difficulty": "medium"
      },
      {
        "servable": true,
        "role": "initial_check",
        "hints": [
          {
            "text": "Kiểm riêng `doc_id`, URL nguồn và tập giá trị được phép của `department`.",
            "hint_id": "h1",
            "penalty_policy": "supported_bằng chứng"
          }
        ],
        "module_id": "day07-g-processing",
        "max_points": 1,
        "interaction": {
          "type": "single_select",
          "prompt": "Bản ghi nào đáp ứng quy ước metadata để có thể lọc, trích dẫn và cập nhật đáng tin cậy?",
          "choices": [
            {
              "text": "`doc_id=policy-9`, không có URL gốc, `department=CS hoặc computer-science`",
              "choice_id": "c1"
            },
            {
              "text": "`doc_id=policy-9`, URL gốc, thời điểm lấy, phiên bản, căn cứ quyền, `department=computer-science` theo tập giá trị cho phép",
              "choice_id": "c2"
            },
            {
              "text": "Hai bản ghi cùng `doc_id=policy-9`; dùng tiêu đề khác nhau để phân biệt",
              "choice_id": "c3"
            },
            {
              "text": "Có URL và tiêu đề, còn `doc_id` để trống để hệ thống tự suy đoán",
              "choice_id": "c4"
            }
          ],
          "presentation_policy": {
            "do_not_expose_internal_ids": true,
            "shuffle_choices_at_delivery": true
          },
          "prompt_presentation": {
            "render_sections": true,
            "preserve_line_breaks": true
          }
        },
        "question_id": "d07-q090",
        "primary_kc_id": "kc-retrieval-document-metadata-contract",
        "grading_method": "objective_key",
        "question_version": 5,
        "cognitive_operation": "Apply",
        "contributing_kc_ids": [],
        "estimated_difficulty": "medium"
      },
      {
        "servable": true,
        "role": "follow_up",
        "hints": [
          {
            "text": "Đọc từng bất biến rồi tìm đúng phép kiểm xác minh bất biến đó.",
            "hint_id": "h1",
            "penalty_policy": "supported_bằng chứng"
          }
        ],
        "module_id": "day07-g-chunking",
        "max_points": 4,
        "interaction": {
          "left": [
            {
              "id": "x1",
              "text": "Giới hạn số câu trong một chunk"
            },
            {
              "id": "x2",
              "text": "Bảo toàn câu và thứ tự"
            },
            {
              "id": "x3",
              "text": "Khoảng trắng ở đầu/cuối"
            },
            {
              "id": "x4",
              "text": "Dữ liệu đầu vào rỗng"
            }
          ],
          "type": "matching",
          "right": [
            {
              "id": "r1",
              "text": "Không chunk nào vượt `max_sentences_per_chunk`"
            },
            {
              "id": "r2",
              "text": "Các câu và dấu câu xuất hiện theo đúng thứ tự đầu vào"
            },
            {
              "id": "r3",
              "text": "Mỗi chunk được bỏ khoảng trắng thừa ở đầu và cuối"
            },
            {
              "id": "r4",
              "text": "Trả danh sách rỗng"
            }
          ],
          "prompt": "Với dữ liệu đầu vào có dấu câu lẫn dấu xuống dòng, ghép điều kiện kiểm thử của bộ chia theo câu với cách xác minh.",
          "presentation_policy": {
            "do_not_align_pairs_by_row": true,
            "shuffle_right_at_delivery": true,
            "do_not_expose_internal_ids": true
          },
          "prompt_presentation": {
            "render_sections": true,
            "preserve_line_breaks": true
          }
        },
        "question_id": "d07-q091",
        "primary_kc_id": "kc-sentence-boundary-chunker-implementation",
        "grading_method": "objective_key",
        "question_version": 7,
        "cognitive_operation": "Analyze",
        "contributing_kc_ids": [],
        "estimated_difficulty": "medium"
      },
      {
        "servable": true,
        "role": "follow_up",
        "hints": [
          {
            "text": "Xác định cơ chế làm dữ liệu ngắn dần, bảo toàn thứ tự và chặn lặp vô hạn.",
            "hint_id": "h1",
            "penalty_policy": "supported_bằng chứng"
          }
        ],
        "module_id": "day07-g-chunking",
        "max_points": 3,
        "interaction": {
          "left": [
            {
              "id": "x1",
              "text": "Token vẫn phải ngắn dần"
            },
            {
              "id": "x2",
              "text": "Các phần đầu ra phải đúng thứ tự"
            },
            {
              "id": "x3",
              "text": "Thuật toán phải dừng"
            }
          ],
          "type": "matching",
          "right": [
            {
              "id": "r1",
              "text": "Chuyển sang chia theo ký tự có giới hạn"
            },
            {
              "id": "r2",
              "text": "Giữ thứ tự văn bản qua các phần đầu ra"
            },
            {
              "id": "r3",
              "text": "Không gọi lại mãi với cùng dữ liệu và cùng thứ tự ưu tiên"
            }
          ],
          "prompt": "Khi bộ chia đệ quy gặp một token dài hơn giới hạn kích thước và không còn dấu phân tách hữu ích, ghép yêu cầu với hành vi cần có.",
          "presentation_policy": {
            "do_not_align_pairs_by_row": true,
            "shuffle_right_at_delivery": true,
            "do_not_expose_internal_ids": true
          },
          "prompt_presentation": {
            "render_sections": true,
            "preserve_line_breaks": true
          }
        },
        "question_id": "d07-q092",
        "primary_kc_id": "kc-recursive-separator-chunker-implementation",
        "grading_method": "objective_key",
        "question_version": 5,
        "cognitive_operation": "Analyze",
        "contributing_kc_ids": [],
        "estimated_difficulty": "medium"
      },
      {
        "servable": true,
        "role": "follow_up",
        "hints": [
          {
            "text": "Mỗi điểm chỉ có ý nghĩa trong đúng mô hình, chỉ mục và cách đánh giá đã nêu.",
            "hint_id": "h1",
            "penalty_policy": "supported_bằng chứng"
          }
        ],
        "module_id": "day07-g-embeddings",
        "max_points": 3,
        "interaction": {
          "left": [
            {
              "id": "x1",
              "text": "Cùng truy vấn, mô hình và chỉ mục: A=0,82; B=0,61"
            },
            {
              "id": "x2",
              "text": "Một mô hình khác cho C điểm 0,90 với cùng truy vấn"
            },
            {
              "id": "x3",
              "text": "Một đội muốn dùng ngưỡng 0,70 cho mọi mô hình và mọi kho"
            }
          ],
          "type": "matching",
          "right": [
            {
              "id": "r1",
              "text": "A xếp trên B trong xếp hạng của quy ước hiện tại"
            },
            {
              "id": "r2",
              "text": "Không so sánh trực tiếp 0,90 với các điểm của mô hình/chỉ mục khác"
            },
            {
              "id": "r3",
              "text": "Cần hiệu chuẩn bằng đánh giá phù hợp, không khẳng định ngưỡng phổ quát"
            }
          ],
          "prompt": "Ba nhận định dưới đây nói về điểm tương đồng. Ghép từng tình huống với kết luận được dữ kiện hỗ trợ.",
          "presentation_policy": {
            "do_not_align_pairs_by_row": true,
            "shuffle_right_at_delivery": true,
            "do_not_expose_internal_ids": true
          },
          "prompt_presentation": {
            "render_sections": true,
            "preserve_line_breaks": true
          }
        },
        "question_id": "d07-q093",
        "primary_kc_id": "kc-cosine-score-interpretation",
        "grading_method": "objective_key",
        "question_version": 4,
        "cognitive_operation": "Analyze",
        "contributing_kc_ids": [],
        "estimated_difficulty": "medium"
      },
      {
        "servable": true,
        "role": "reassessment",
        "hints": [
          {
            "text": "Sắp xếp từ khoảng cách nhỏ nhất đến lớn nhất: 2, rồi 3, rồi 5.",
            "hint_id": "h1",
            "penalty_policy": "supported_bằng chứng"
          }
        ],
        "module_id": "day07-g-embeddings",
        "max_points": 1,
        "interaction": {
          "type": "single_select",
          "prompt": "truy vấn Q có khoảng cách tới A là 2, tới B là 5 và tới C là 3 trong cùng không gian vector. Thứ tự gần đến xa đúng là gì?",
          "choices": [
            {
              "text": "A, C, B",
              "choice_id": "c1"
            },
            {
              "text": "B, C, A",
              "choice_id": "c2"
            },
            {
              "text": "C, A, B vì 3 lớn hơn 2",
              "choice_id": "c3"
            },
            {
              "text": "Không thể xếp vì Euclidean không dùng cho vector",
              "choice_id": "c4"
            }
          ],
          "presentation_policy": {
            "do_not_align_pairs_by_row": false,
            "shuffle_right_at_delivery": false,
            "do_not_expose_internal_ids": true,
            "shuffle_choices_at_delivery": true
          },
          "prompt_presentation": {
            "render_sections": true,
            "preserve_line_breaks": true
          }
        },
        "question_id": "d07-q094",
        "primary_kc_id": "kc-euclidean-distance-computation",
        "grading_method": "objective_key",
        "question_version": 5,
        "cognitive_operation": "Apply",
        "contributing_kc_ids": [],
        "estimated_difficulty": "medium"
      },
      {
        "servable": true,
        "role": "follow_up",
        "hints": [
          {
            "text": "Mô hình, cách chuẩn hóa và thước đo phải khớp ở cả tài liệu lẫn truy vấn.",
            "hint_id": "h1",
            "penalty_policy": "supported_bằng chứng"
          }
        ],
        "module_id": "day07-g-embeddings",
        "max_points": 1,
        "interaction": {
          "type": "single_select",
          "prompt": "mô hình đầu ra đã L2-chuẩn hóa và backend quy ước dùng cosine. Lựa chọn nào ít rủi ro nhất?",
          "choices": [
            {
              "text": "Trộn thô vector của mô hình khác vào bộ sưu tập hiện tại.",
              "choice_id": "c1"
            },
            {
              "text": "Giữ mô hình, chuẩn hóa và thước đo tương thích cho kho tài liệu lẫn truy vấn; chuyển đổi cần re-embed/reindex.",
              "choice_id": "c2"
            },
            {
              "text": "Đổi thước đo chỉ cho truy vấn vì dimension giống nhau.",
              "choice_id": "c3"
            },
            {
              "text": "Dùng thước đo có điểm lớn nhất trên một truy vấn bất kỳ.",
              "choice_id": "c4"
            }
          ],
          "presentation_policy": {
            "do_not_align_pairs_by_row": false,
            "shuffle_right_at_delivery": false,
            "do_not_expose_internal_ids": true,
            "shuffle_choices_at_delivery": true
          },
          "prompt_presentation": {
            "render_sections": true,
            "preserve_line_breaks": true
          }
        },
        "question_id": "d07-q095",
        "primary_kc_id": "kc-vector-metric-selection",
        "grading_method": "objective_key",
        "question_version": 6,
        "cognitive_operation": "Analyze",
        "contributing_kc_ids": [],
        "estimated_difficulty": "medium"
      },
      {
        "servable": true,
        "role": "follow_up",
        "hints": [
          {
            "text": "Tách bốn việc: đánh giá chất lượng, chi phí, tạo lại toàn kho và phương án quay lui.",
            "hint_id": "h1",
            "penalty_policy": "supported_bằng chứng"
          }
        ],
        "module_id": "day07-g-embeddings",
        "max_points": 4,
        "interaction": {
          "left": [
            {
              "id": "x1",
              "text": "Chọn mô hình theo nhu cầu truy vấn thực tế"
            },
            {
              "id": "x2",
              "text": "Chấp nhận chi phí vận hành của chuyển đổi"
            },
            {
              "id": "x3",
              "text": "Tránh trộn hai không gian vector trong kho"
            },
            {
              "id": "x4",
              "text": "Kiểm soát sự cố sau khi chuyển đổi"
            }
          ],
          "type": "matching",
          "right": [
            {
              "id": "r1",
              "text": "Benchmark theo ngôn ngữ và loại truy vấn đại diện"
            },
            {
              "id": "r2",
              "text": "Đánh giá SLO độ trễ cùng chi phí lưu trữ, tạo lại embeddings và lập chỉ mục"
            },
            {
              "id": "r3",
              "text": "Lập kế hoạch tạo lại embeddings cho toàn kho trước khi chuyển"
            },
            {
              "id": "r4",
              "text": "Đặt tiêu chí quay lui hoặc không chuyển nếu quy ước không đạt"
            }
          ],
          "prompt": "Trước khi chuyển mô hình embeddings cho 5M chunk, ghép quyết định cần chốt với bằng chứng hoặc kế hoạch tương ứng.",
          "presentation_policy": {
            "do_not_align_pairs_by_row": true,
            "shuffle_right_at_delivery": true,
            "do_not_expose_internal_ids": true
          },
          "prompt_presentation": {
            "render_sections": true,
            "preserve_line_breaks": true
          }
        },
        "question_id": "d07-q096",
        "primary_kc_id": "kc-embedding-model-evidence-selection",
        "grading_method": "objective_key",
        "question_version": 4,
        "cognitive_operation": "Evaluate",
        "contributing_kc_ids": [],
        "estimated_difficulty": "medium"
      },
      {
        "servable": true,
        "role": "follow_up",
        "hints": [
          {
            "text": "Mỗi thao tác cần đúng trường metadata để truy vết, cập nhật hoặc xóa.",
            "hint_id": "h1",
            "penalty_policy": "supported_bằng chứng"
          }
        ],
        "module_id": "day07-g-vector-store",
        "max_points": 3,
        "interaction": {
          "left": [
            {
              "id": "x1",
              "text": "Hiển thị trích dẫn cho kết quả"
            },
            {
              "id": "x2",
              "text": "Cập nhật `policy-17` lên phiên bản mới"
            },
            {
              "id": "x3",
              "text": "Xóa toàn bộ các chunk của một tài liệu"
            }
          ],
          "type": "matching",
          "right": [
            {
              "id": "r1",
              "text": "nguồn URL, mục, phiên bản và danh tính tài liệu/chunk."
            },
            {
              "id": "r2",
              "text": "tài liệu danh tính + phiên bản để thay đúng bản ghi."
            },
            {
              "id": "r3",
              "text": "tài liệu danh tính liên kết mọi chunk cần xóa."
            }
          ],
          "prompt": "Ghép sự kiện vòng đời với trường bản ghi cần dùng để kiểm tra đúng.",
          "presentation_policy": {
            "do_not_align_pairs_by_row": true,
            "shuffle_right_at_delivery": true,
            "do_not_expose_internal_ids": true,
            "shuffle_choices_at_delivery": false
          },
          "prompt_presentation": {
            "render_sections": true,
            "preserve_line_breaks": true
          }
        },
        "question_id": "d07-q097",
        "primary_kc_id": "kc-vector-store-record-contract",
        "grading_method": "objective_key",
        "question_version": 8,
        "cognitive_operation": "Apply",
        "contributing_kc_ids": [],
        "estimated_difficulty": "medium"
      },
      {
        "servable": true,
        "role": "follow_up",
        "hints": [
          {
            "text": "Trạng thái đang hoạt động chỉ được công bố sau khi backend, bộ sưu tập và cấu hình đã được xác minh.",
            "hint_id": "h1",
            "penalty_policy": "supported_bằng chứng"
          }
        ],
        "module_id": "day07-g-vector-store",
        "max_points": 1,
        "interaction": {
          "type": "ordering",
          "prompt": "Sắp xếp khởi động kiểm tra cho backend kho vector.",
          "options": [
            {
              "text": "Khởi tạo máy khách/backend theo cấu hình.",
              "option_id": "o1"
            },
            {
              "text": "Mở hoặc tạo đúng bộ sưu tập.",
              "option_id": "o2"
            },
            {
              "text": "Xác minh bộ sưu tập, embedder, thước đo và trạng thái rỗng/phương án dự phòng.",
              "option_id": "o3"
            },
            {
              "text": "Chỉ sau đó công bố đang hoạt động backend cho tìm kiếm/thêm.",
              "option_id": "o4"
            }
          ],
          "presentation_policy": {
            "do_not_align_pairs_by_row": false,
            "shuffle_right_at_delivery": false,
            "do_not_expose_internal_ids": true,
            "shuffle_choices_at_delivery": true
          },
          "prompt_presentation": {
            "render_sections": true,
            "preserve_line_breaks": true
          }
        },
        "question_id": "d07-q098",
        "primary_kc_id": "kc-vector-store-backend-initialization",
        "grading_method": "objective_key",
        "question_version": 6,
        "cognitive_operation": "Analyze",
        "contributing_kc_ids": [],
        "estimated_difficulty": "medium"
      },
      {
        "servable": true,
        "role": "follow_up",
        "hints": [
          {
            "text": "Đặt câu hỏi: hai nội dung khác nhau có được phép dùng cùng một danh tính ổn định hay không?",
            "hint_id": "h1",
            "penalty_policy": "supported_bằng chứng"
          }
        ],
        "module_id": "day07-g-vector-store",
        "max_points": 1,
        "interaction": {
          "type": "single_select",
          "prompt": "Kho đã có `A::0` với nội dung cũ. Lần thêm mới đưa một bản ghi cũng có `record_id=A::0` nhưng nội dung khác. Quy ước không cho phép ghi đè im lặng. Điều kiện kiểm thử nào đúng nhất?",
          "choices": [
            {
              "text": "Ghi đè A::0 vì `record_id` trùng nên hệ thống tự chọn bản mới.",
              "choice_id": "c1"
            },
            {
              "text": "Tạo A::0 thứ hai để giữ cả hai bản ghi cùng danh tính.",
              "choice_id": "c2"
            },
            {
              "text": "Từ chối hoặc báo lỗi xung đột danh tính trước khi thay đổi kho; chỉ cập nhật qua luồng có quy ước rõ ràng.",
              "choice_id": "c3"
            },
            {
              "text": "Đổi ngẫu nhiên `record_id` của bản cũ mà không ghi dấu vết.",
              "choice_id": "c4"
            }
          ],
          "presentation_policy": {
            "do_not_align_pairs_by_row": false,
            "shuffle_right_at_delivery": false,
            "do_not_expose_internal_ids": true,
            "shuffle_choices_at_delivery": true
          },
          "prompt_presentation": {
            "render_sections": true,
            "preserve_line_breaks": true
          }
        },
        "question_id": "d07-q099",
        "primary_kc_id": "kc-vector-store-document-addition",
        "grading_method": "objective_key",
        "question_version": 4,
        "cognitive_operation": "Apply",
        "contributing_kc_ids": [],
        "estimated_difficulty": "medium"
      },
      {
        "servable": true,
        "role": "follow_up",
        "hints": [
          {
            "text": "Muốn kiểm quy tắc đồng điểm, dữ liệu kiểm thử phải có đúng các điểm bằng nhau.",
            "hint_id": "h1",
            "penalty_policy": "supported_bằng chứng"
          }
        ],
        "module_id": "day07-g-vector-store",
        "max_points": 1,
        "interaction": {
          "type": "single_select",
          "prompt": "Kho có ba bản ghi điểm 0,9; 0,9; 0,7. Quy ước phân giải đồng điểm theo `record_id` tăng dần và `top_k=2`. Dữ liệu kiểm thử nào kiểm tra đúng hành vi khi đồng điểm?",
          "choices": [
            {
              "text": "Chỉ kiểm bản ghi điểm 0,7 bị loại.",
              "choice_id": "c1"
            },
            {
              "text": "Gán hai bản ghi 0,9 có record_id đảo thứ tự rồi kiểm tra kết quả theo record_id tăng dần.",
              "choice_id": "c2"
            },
            {
              "text": "Tăng top_k lên 100 để đồng điểm tự biến mất.",
              "choice_id": "c3"
            },
            {
              "text": "Chỉ kiểm điểm lớn nhất không âm.",
              "choice_id": "c4"
            }
          ],
          "presentation_policy": {
            "do_not_align_pairs_by_row": false,
            "shuffle_right_at_delivery": false,
            "do_not_expose_internal_ids": true,
            "shuffle_choices_at_delivery": true
          },
          "prompt_presentation": {
            "render_sections": true,
            "preserve_line_breaks": true
          }
        },
        "question_id": "d07-q100",
        "primary_kc_id": "kc-vector-semantic-search-implementation",
        "grading_method": "objective_key",
        "question_version": 7,
        "cognitive_operation": "Analyze",
        "contributing_kc_ids": [],
        "estimated_difficulty": "medium"
      },
      {
        "servable": true,
        "role": "follow_up",
        "hints": [
          {
            "text": "Lọc nhiều điều kiện dùng đồng thời tất cả điều kiện bắt buộc.",
            "hint_id": "h1",
            "penalty_policy": "supported_bằng chứng"
          }
        ],
        "module_id": "day07-g-vector-store",
        "max_points": 1,
        "interaction": {
          "type": "single_select",
          "prompt": "Lọc yêu cầu `department=engineering` và `semester=2026`. Bản ghi R có department đúng nhưng thiếu semester; bản ghi S có cả hai đúng. Kết quả đủ điều kiện đúng là gì?",
          "choices": [
            {
              "text": "R và S đều khớp vì chỉ cần một điều kiện đúng.",
              "choice_id": "c1"
            },
            {
              "text": "Chỉ S khớp; R thiếu trường bắt buộc.",
              "choice_id": "c2"
            },
            {
              "text": "Chỉ R khớp vì thiếu trường được coi là ký tự đại diện.",
              "choice_id": "c3"
            },
            {
              "text": "Không bản ghi nào khớp vì lọc có hai điều kiện.",
              "choice_id": "c4"
            }
          ],
          "presentation_policy": {
            "do_not_align_pairs_by_row": false,
            "shuffle_right_at_delivery": false,
            "do_not_expose_internal_ids": true,
            "shuffle_choices_at_delivery": true
          },
          "prompt_presentation": {
            "render_sections": true,
            "preserve_line_breaks": true
          }
        },
        "question_id": "d07-q101",
        "primary_kc_id": "kc-vector-search-metadata-prefilter",
        "grading_method": "objective_key",
        "question_version": 7,
        "cognitive_operation": "Apply",
        "contributing_kc_ids": [],
        "estimated_difficulty": "medium"
      },
      {
        "servable": true,
        "role": "follow_up",
        "hints": [
          {
            "text": "Tách ba nhu cầu: lọc bản hiện hành, trích dẫn đúng bản và dọn đúng bản cũ.",
            "hint_id": "h1",
            "penalty_policy": "supported_bằng chứng"
          }
        ],
        "module_id": "day07-g-vector-store",
        "max_points": 3,
        "interaction": {
          "left": [
            {
              "id": "x1",
              "text": "Kết quả tìm kiếm thông thường chỉ dùng chính sách hiện hành"
            },
            {
              "id": "x2",
              "text": "Trích dẫn một kết quả từ v3 phải phân biệt rõ với v2"
            },
            {
              "id": "x3",
              "text": "Dọn dữ liệu v2 khi hết thời gian lưu giữ"
            }
          ],
          "type": "matching",
          "right": [
            {
              "id": "r1",
              "text": "Lọc theo phiên bản hoặc trạng thái hiệu lực trước khi trả kết quả"
            },
            {
              "id": "r2",
              "text": "Giữ `doc_id`, phiên bản và URL nguồn trong metadata/kết quả"
            },
            {
              "id": "r3",
              "text": "Xóa theo danh tính tài liệu có phiên bản để chỉ tác động v2"
            }
          ],
          "prompt": "Sau khi `policy-v3` thay `policy-v2`, ghép mục tiêu vòng đời với thao tác cần có để kho không trả về chính sách cũ.",
          "presentation_policy": {
            "do_not_align_pairs_by_row": true,
            "shuffle_right_at_delivery": true,
            "do_not_expose_internal_ids": true
          },
          "prompt_presentation": {
            "render_sections": true,
            "preserve_line_breaks": true
          }
        },
        "question_id": "d07-q102",
        "primary_kc_id": "kc-vector-store-document-deletion",
        "grading_method": "objective_key",
        "question_version": 5,
        "cognitive_operation": "Apply",
        "contributing_kc_ids": [],
        "estimated_difficulty": "medium"
      },
      {
        "servable": true,
        "role": "follow_up",
        "hints": [
          {
            "text": "Dựa vào bằng chứng của từng bước, không đổi nhiều biến kiểm soát cùng lúc.",
            "hint_id": "h1",
            "penalty_policy": "supported_bằng chứng"
          }
        ],
        "module_id": "day07-g-vector-store",
        "max_points": 1,
        "interaction": {
          "type": "single_select",
          "prompt": "k=2 bỏ bằng chứng thứ ba; k=8 thêm nhiều chunk nhiễu. Khi giữ ngưỡng/lọc cố định, bước thử tiếp theo tốt nhất là gì?",
          "choices": [
            {
              "text": "Đổi đồng thời k, ngưỡng và mô hình embeddings.",
              "choice_id": "c1"
            },
            {
              "text": "So k=2, 3, 4 trên cùng bộ truy vấn đã đóng băng rồi ghi độ bao phủ và bằng chứng trùng lặp.",
              "choice_id": "c2"
            },
            {
              "text": "Chọn k=8 vì nhiều chunk luôn tốt hơn.",
              "choice_id": "c3"
            },
            {
              "text": "Bỏ bộ kiểm thử vì điểm truy xuất thay đổi theo truy vấn.",
              "choice_id": "c4"
            }
          ],
          "presentation_policy": {
            "do_not_align_pairs_by_row": false,
            "shuffle_right_at_delivery": false,
            "do_not_expose_internal_ids": true,
            "shuffle_choices_at_delivery": true
          },
          "prompt_presentation": {
            "render_sections": true,
            "preserve_line_breaks": true
          }
        },
        "question_id": "d07-q103",
        "primary_kc_id": "kc-retrieval-control-tuning",
        "grading_method": "objective_key",
        "question_version": 4,
        "cognitive_operation": "Analyze",
        "contributing_kc_ids": [],
        "estimated_difficulty": "medium"
      },
      {
        "servable": true,
        "role": "follow_up",
        "hints": [
          {
            "text": "So từng trường cấp tài liệu với trường cấp chunk trên cả ba chunk.",
            "hint_id": "h1",
            "penalty_policy": "supported_bằng chứng"
          }
        ],
        "module_id": "day07-g-rag-flow",
        "max_points": 3,
        "interaction": {
          "left": [
            {
              "id": "x1",
              "text": "Danh tính chunk"
            },
            {
              "id": "x2",
              "text": "Metadata được kế thừa"
            },
            {
              "id": "x3",
              "text": "Chỉ số chunk"
            }
          ],
          "type": "matching",
          "right": [
            {
              "id": "r1",
              "text": "Mỗi chunk có danh tính ổn định liên kết tới tài liệu library."
            },
            {
              "id": "r2",
              "text": "Cả ba giữ audience và source_url để lọc và trích dẫn."
            },
            {
              "id": "r3",
              "text": "Có giá trị 0, 1, 2 duy nhất trong cùng tài liệu/phiên bản."
            }
          ],
          "prompt": "Tệp có `doc_id=library`, `audience=student`, `source_url=...` và tạo ba chunk. Ghép trường trong bản ghi với điều kiện kiểm tra đúng.",
          "presentation_policy": {
            "do_not_align_pairs_by_row": true,
            "shuffle_right_at_delivery": true,
            "do_not_expose_internal_ids": true,
            "shuffle_choices_at_delivery": false
          },
          "prompt_presentation": {
            "render_sections": true,
            "preserve_line_breaks": true
          }
        },
        "question_id": "d07-q104",
        "primary_kc_id": "kc-ingestion-chunk-metadata-propagation",
        "grading_method": "objective_key",
        "question_version": 4,
        "cognitive_operation": "Apply",
        "contributing_kc_ids": [],
        "estimated_difficulty": "medium"
      },
      {
        "servable": true,
        "role": "follow_up",
        "hints": [
          {
            "text": "Tách câu hỏi “có phải nguồn đáng tin để dùng không?” khỏi “điểm có cao không?”.",
            "hint_id": "h1",
            "penalty_policy": "supported_bằng chứng"
          }
        ],
        "module_id": "day07-g-rag-flow",
        "max_points": 4,
        "interaction": {
          "left": [
            {
              "id": "x1",
              "text": "C1 có phiên bản và trạng thái hiệu lực hiện hành"
            },
            {
              "id": "x2",
              "text": "C2 không có nguồn để trích dẫn"
            },
            {
              "id": "x3",
              "text": "C3 là chính sách cũ cho hạn chót mới"
            },
            {
              "id": "x4",
              "text": "Không còn bằng chứng đủ sau khi sàng lọc"
            }
          ],
          "type": "matching",
          "right": [
            {
              "id": "r1",
              "text": "Dùng làm nguồn chính nếu trả lời đúng truy vấn."
            },
            {
              "id": "r2",
              "text": "Loại hoặc hạ ưu tiên, không dùng làm nguồn chính."
            },
            {
              "id": "r3",
              "text": "Không dùng làm nguồn chính cho hạn chót hiện hành."
            },
            {
              "id": "r4",
              "text": "Trả không đủ thông tin thay vì suy đoán."
            }
          ],
          "prompt": "Kết quả truy xuất gồm C1 là chính sách hiện hành có URL, C2 là blog không nguồn, C3 là chính sách cũ. Ghép tình trạng với cách chọn ngữ cảnh có căn cứ.",
          "presentation_policy": {
            "do_not_align_pairs_by_row": true,
            "shuffle_right_at_delivery": true,
            "do_not_expose_internal_ids": true
          },
          "prompt_presentation": {
            "render_sections": true,
            "preserve_line_breaks": true
          }
        },
        "question_id": "d07-q105",
        "primary_kc_id": "kc-grounded-context-prompt-assembly",
        "grading_method": "objective_key",
        "question_version": 5,
        "cognitive_operation": "Analyze",
        "contributing_kc_ids": [],
        "estimated_difficulty": "medium"
      },
      {
        "servable": true,
        "role": "follow_up",
        "hints": [
          {
            "text": "Câu hỏi, đáp án chuẩn, bằng chứng và điều kiện metadata phải được khóa trước khi chạy.",
            "hint_id": "h1",
            "penalty_policy": "supported_bằng chứng"
          }
        ],
        "module_id": "day07-g-evaluation",
        "max_points": 4,
        "interaction": {
          "left": [
            {
              "id": "x1",
              "text": "truy vấn"
            },
            {
              "id": "x2",
              "text": "Tài liệu/chunk mong đợi"
            },
            {
              "id": "x3",
              "text": "Ràng buộc metadata"
            },
            {
              "id": "x4",
              "text": "Quy tắc đóng băng"
            }
          ],
          "type": "matching",
          "right": [
            {
              "id": "r1",
              "text": "Nêu nhu cầu trả lời cụ thể, không mơ hồ."
            },
            {
              "id": "r2",
              "text": "Xác định bằng chứng đáp án chuẩn trước khi đánh giá."
            },
            {
              "id": "r3",
              "text": "Nêu đối tượng, phiên bản và bộ lọc phải thỏa."
            },
            {
              "id": "r4",
              "text": "Không sửa truy vấn/đáp án chuẩn sau khi đã thấy bên thắng."
            }
          ],
          "prompt": "Ghép trường của bộ kiểm thử với vai trò cần được khóa trước khi so chiến lược.",
          "presentation_policy": {
            "do_not_align_pairs_by_row": true,
            "shuffle_right_at_delivery": true,
            "do_not_expose_internal_ids": true,
            "shuffle_choices_at_delivery": false
          },
          "prompt_presentation": {
            "render_sections": true,
            "preserve_line_breaks": true
          }
        },
        "question_id": "d07-q106",
        "primary_kc_id": "kc-retrieval-benchmark-query-gold-design",
        "grading_method": "objective_key",
        "question_version": 5,
        "cognitive_operation": "Analyze",
        "contributing_kc_ids": [],
        "estimated_difficulty": "medium"
      },
      {
        "servable": true,
        "role": "follow_up",
        "hints": [
          {
            "text": "Tính DCG của xếp hạng thực tế và IDCG của xếp hạng lý tưởng trước khi chia.",
            "hint_id": "h1",
            "penalty_policy": "supported_bằng chứng"
          }
        ],
        "module_id": "day07-g-evaluation",
        "max_points": 1,
        "interaction": {
          "type": "numeric_input",
          "prompt": "mức liên quan top-3 là `[2,0,1]`; top-3 lý tưởng là `[2,1,0]`. Dùng `DCG=Σ(2^rel−1)/log2(rank+1)`, nhập NDCG@3 làm tròn ba chữ số.",
          "required_unit": "",
          "presentation_policy": {
            "do_not_align_pairs_by_row": false,
            "shuffle_right_at_delivery": false,
            "do_not_expose_internal_ids": true,
            "shuffle_choices_at_delivery": true
          },
          "prompt_presentation": {
            "render_sections": true,
            "preserve_line_breaks": true
          }
        },
        "question_id": "d07-q107",
        "primary_kc_id": "kc-retrieval-ranking-metric-computation",
        "grading_method": "objective_key",
        "question_version": 5,
        "cognitive_operation": "Apply",
        "contributing_kc_ids": [],
        "estimated_difficulty": "medium"
      },
      {
        "servable": true,
        "role": "follow_up",
        "hints": [
          {
            "text": "Xác định ý nghĩa bị mất ở ranh giới, mục hay tiêu đề trước khi chọn lớp sửa.",
            "hint_id": "h1",
            "penalty_policy": "supported_bằng chứng"
          }
        ],
        "module_id": "day07-g-evaluation",
        "max_points": 3,
        "interaction": {
          "left": [
            {
              "id": "x1",
              "text": "Điều kiện bị cắt qua ranh giới"
            },
            {
              "id": "x2",
              "text": "Chunk trộn hai chính sách không liên quan"
            },
            {
              "id": "x3",
              "text": "Chunk thiếu tiêu đề hoặc ngoại lệ cần thiết"
            }
          ],
          "type": "matching",
          "right": [
            {
              "id": "r1",
              "text": "Điều chỉnh ranh giới/overlap và kiểm truy vấn đi qua ranh giới."
            },
            {
              "id": "r2",
              "text": "Sửa chiến lược chia theo mục."
            },
            {
              "id": "r3",
              "text": "Giữ đường dẫn tiêu đề và đủ ngữ cảnh trong chunk."
            }
          ],
          "prompt": "Ghép lỗi của chunk được truy xuất với lớp sửa chữa phù hợp.",
          "presentation_policy": {
            "do_not_align_pairs_by_row": true,
            "shuffle_right_at_delivery": true,
            "do_not_expose_internal_ids": true,
            "shuffle_choices_at_delivery": false
          },
          "prompt_presentation": {
            "render_sections": true,
            "preserve_line_breaks": true
          }
        },
        "question_id": "d07-q108",
        "primary_kc_id": "kc-retrieved-chunk-coherence-evaluation",
        "grading_method": "objective_key",
        "question_version": 5,
        "cognitive_operation": "Analyze",
        "contributing_kc_ids": [],
        "estimated_difficulty": "medium"
      }
    ],
    "round_sizes": {
      "post": 10,
      "recommended": 6,
      "all": 6
    }
  }
}

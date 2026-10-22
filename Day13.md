{
  "course_id": "K4P1",
  "day_code": "day_4b7297bd4c062621",
  "public_code": "D17",
  "version_id": "edcbd8bb-0a00-4755-a515-c1606e510654",
  "version_no": 15,
  "synthesized": false,
  "lesson": {
    "index": 13,
    "title": "Day13-monitoring-logging-observability",
    "subtitle": null,
    "slides_url": "/api/v1/content/days/day_4b7297bd4c062621/slides.pdf",
    "modules": [
      {
        "module_id": "day",
        "title": "Slides",
        "kind": "lesson",
        "from": 0,
        "to": 5,
        "sections": [
          {
            "section_id": "day-slides",
            "title": "Slides",
            "kind": "theory",
            "from": 0,
            "to": 5
          }
        ]
      },
      {
        "module_id": "codelab-a2fe732449b44de79b6ea22236b67831",
        "title": "Day 13 — Monitoring & LLMOps (K4-L3B)",
        "kind": "lab",
        "from": 5,
        "to": 14,
        "sections": [
          {
            "section_id": "codelab-a2fe732449b44de79b6ea22236b67831-s01",
            "title": "Bài toán và mục tiêu",
            "kind": "practice",
            "from": 5,
            "to": 6
          },
          {
            "section_id": "codelab-a2fe732449b44de79b6ea22236b67831-s02",
            "title": "Fork starter về tài khoản cá nhân",
            "kind": "practice",
            "from": 6,
            "to": 7
          },
          {
            "section_id": "codelab-a2fe732449b44de79b6ea22236b67831-s03",
            "title": "Lộ trình",
            "kind": "practice",
            "from": 7,
            "to": 8
          },
          {
            "section_id": "codelab-a2fe732449b44de79b6ea22236b67831-s04",
            "title": "CP0 — Cài đặt môi trường và chạy baseline",
            "kind": "practice",
            "from": 8,
            "to": 9
          },
          {
            "section_id": "codelab-a2fe732449b44de79b6ea22236b67831-s05",
            "title": "CP1 — Structured logging và bảo vệ PII",
            "kind": "practice",
            "from": 9,
            "to": 10
          },
          {
            "section_id": "codelab-a2fe732449b44de79b6ea22236b67831-s06",
            "title": "CP2 — Traces, prompt, dashboard và alert",
            "kind": "practice",
            "from": 10,
            "to": 11
          },
          {
            "section_id": "codelab-a2fe732449b44de79b6ea22236b67831-s07",
            "title": "CP3 — Điều tra challenge",
            "kind": "practice",
            "from": 11,
            "to": 12
          },
          {
            "section_id": "codelab-a2fe732449b44de79b6ea22236b67831-s08",
            "title": "CP4 — Báo cáo, evidence và nộp bài",
            "kind": "practice",
            "from": 12,
            "to": 14
          }
        ]
      }
    ],
    "parts": [
      {
        "id": "day-slides-material_mu0w5mvf_v8ynxj",
        "type": "slide",
        "title": "day13-monitoring-logging-observability_v2",
        "duration_min": null,
        "ai_prompts": [],
        "status": "done",
        "body": {
          "material_id": "material_mu0w5mvf_v8ynxj",
          "page_from": 1,
          "page_to": 114,
          "notes": null,
          "deck_url": "/api/v1/documents/K4P1/Lecture_material_mu0w5mvf_v8ynxj/material_mu0w5mvf_v8ynxj/stream",
          "deck_cdn_url": "https://slides.vlearn.dev/slides/k4p1/Lecture_material_mu0w5mvf_v8ynxj/material_mu0w5mvf_v8ynxj/adbab4fca3a443166b1c71d1446257c8a1353dcc1433954fdd5928d323e24ab0.pdf?exp=1792168047&sub=728ae799387402308487372bea160411&sig=M7zEzGfx36-yvTUIfCHwAmbc4Yti2dg40qoi9icC--A"
        }
      },
      {
        "id": "day-slides-material_mu0w5pkc_j11fjj",
        "type": "slide",
        "title": "day13-monitoring-logging-observability",
        "duration_min": null,
        "ai_prompts": [],
        "status": "current",
        "body": {
          "material_id": "material_mu0w5pkc_j11fjj",
          "page_from": 1,
          "page_to": 78,
          "notes": "Link mini Lab: https://github.com/VinUni-AI20k/day13-cohort4-monitoring-llmops",
          "deck_url": "/api/v1/documents/K4P1/Lecture_material_mu0w5pkc_j11fjj/material_mu0w5pkc_j11fjj/stream",
          "deck_cdn_url": "https://slides.vlearn.dev/slides/k4p1/Lecture_material_mu0w5pkc_j11fjj/material_mu0w5pkc_j11fjj/53f3e57184f0596dbd8e6c391e4923367c504785988928ba5ab2f1c6f7c20a57.pdf?exp=1792168047&sub=728ae799387402308487372bea160411&sig=G0dm2Hb3b6RS5TPoGHewBZkae6e9vk0iGQCuLRkU8-w"
        }
      },
      {
        "id": "day-slides-material_mu0w5rbh_uanjca",
        "type": "slide",
        "title": "day13-monitoring-logging-observability (2)",
        "duration_min": null,
        "ai_prompts": [],
        "status": "todo",
        "body": {
          "material_id": "material_mu0w5rbh_uanjca",
          "page_from": 1,
          "page_to": 85,
          "notes": null,
          "deck_url": "/api/v1/documents/K4P1/Lecture_material_mu0w5rbh_uanjca/material_mu0w5rbh_uanjca/stream",
          "deck_cdn_url": "https://slides.vlearn.dev/slides/k4p1/Lecture_material_mu0w5rbh_uanjca/material_mu0w5rbh_uanjca/60882237b5c6a625f7d221efc9c44b908a7c8d1427332d2794b8ba237f4f3938.pdf?exp=1792168047&sub=728ae799387402308487372bea160411&sig=xUEMHG2dGrWkWa_MVbUk6YZBcLNzU1R5hrv0Hq_PgzM"
        }
      },
      {
        "id": "video-1",
        "type": "video",
        "title": "Bài 13 Tổng quan",
        "duration_min": 8,
        "ai_prompts": [],
        "status": "todo",
        "body": {
          "src": "",
          "youtube_url": null,
          "poster": null,
          "length": null,
          "presenter": null,
          "chapters": [],
          "transcript": [],
          "tracks": [],
          "related_materials": [],
          "media_url": null,
          "poster_url": null,
          "source": {
            "kind": "hls",
            "assetId": "e92debf0-9a85-4c62-8614-47541cb8a5e9",
            "status": "ready"
          }
        }
      },
      {
        "id": "slide-1",
        "type": "slide",
        "title": "Part 14",
        "duration_min": null,
        "ai_prompts": [],
        "status": "todo",
        "body": {
          "material_id": "material_mumbuebk_dazo8q",
          "page_from": 1,
          "page_to": 91,
          "notes": null,
          "deck_url": "/api/v1/documents/K4P1/Lecture_material_mumbuebk_dazo8q/material_mumbuebk_dazo8q/stream",
          "deck_cdn_url": "https://slides.vlearn.dev/slides/k4p1/Lecture_material_mumbuebk_dazo8q/material_mumbuebk_dazo8q/fd3298fb0db068b87cad746b3576a5a974189f272e3f6c2f144837b22491d0f0.pdf?exp=1792168047&sub=728ae799387402308487372bea160411&sig=l1yhsxzNvPHjIQt3oZB2nz_E6yd52ZBPA37hY1nsd0M"
        }
      },
      {
        "id": "codelab-a2fe732449b44de79b6ea22236b67831-s01-doc",
        "type": "text",
        "title": "Bài toán và mục tiêu",
        "duration_min": null,
        "ai_prompts": [],
        "status": "todo",
        "body": {
          "reading_label": null,
          "blocks": [
            {
              "t": "alert",
              "html": "Lab cá nhân K4-L3B — instrument AI API, dựng dashboard và điều tra incident theo Metrics → Logs → Traces",
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
              "html": "\u003Cstrong\u003ECodelab dành riêng cho lớp K4-L3B.\u003C/strong\u003E Nếu bạn thuộc K4-L3A, hãy chuyển sang tài liệu của lớp mình nhé. \u003Cstrong\u003EStarter repository:\u003C/strong\u003E \u003Ca href=\"https://github.com/VinUni-AI20k/K4-L3B-Day13-Monitoring-LLMOps\" target=\"_blank\" rel=\"noopener noreferrer\"\u003Ehttps://github.com/VinUni-AI20k/K4-L3B-Day13-Monitoring-LLMOps\u003C/a\u003E",
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
              "t": "p",
              "html": "Một API trả mã HTTP 200 chưa chắc đã hoạt động tốt: nó có thể phản hồi chậm, tốn nhiều token, gọi tool thất bại hoặc ngầm giảm chất lượng câu trả lời. Trong bài lab cá nhân từ \u003Cstrong\u003E9:00 đến 13:00 (240 phút)\u003C/strong\u003E, bạn sẽ thêm telemetry để tự phát hiện và giải thích những vấn đề này trước khi người dùng phàn nàn.",
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
              "html": "Khi có sự cố, luôn đi theo chuỗi bằng chứng:",
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
              "md": "```text\nMetrics -\u003E Logs -\u003E Traces -\u003E Root cause\n```"
            },
            {
              "t": "ul",
              "html": null,
              "items": [
                "\u003Cstrong\u003E1.\u003C/strong\u003E \u003Cstrong\u003EMetrics\u003C/strong\u003E: hệ thống có triệu chứng gì, xấu từ lúc nào.",
                "\u003Cstrong\u003E2.\u003C/strong\u003E \u003Cstrong\u003ELogs\u003C/strong\u003E: chọn ra một request cụ thể bị ảnh hưởng bằng \u003Ccode\u003Ecorrelation_id\u003C/code\u003E.",
                "\u003Cstrong\u003E3.\u003C/strong\u003E \u003Cstrong\u003ETraces\u003C/strong\u003E: request đó chậm hoặc lỗi ở bước nào (retrieval hay LLM generation).",
                "\u003Cstrong\u003E4.\u003C/strong\u003E \u003Cstrong\u003ERoot cause\u003C/strong\u003E: kết luận dựa trên bằng chứng của cả ba lớp, không phải đoán."
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
              "html": "Nếu gặp thuật ngữ lạ (\u003Ccode\u003Ecorrelation_id\u003C/code\u003E, P95, TTFT, retrieval success, error budget…), hãy xem bảng \u003Cstrong\u003E\"Đọc nhanh để hiểu bài lab\"\u003C/strong\u003E trong \u003Ccode\u003EREADME.md\u003C/code\u003E của repo.",
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
              "t": "p",
              "html": "Sau lab, bạn có thể:",
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
                "ghi structured log dạng JSON, truyền correlation ID và che PII trước khi ghi log;",
                "đo latency P50/P95/P99, TTFT, traffic, error, token, cost, retrieval success và quality proxy;",
                "tạo ít nhất 10 traces trên Langfuse, có span tree đọc được và metadata không chứa PII;",
                "liên kết trace với prompt name/label/version và chứng minh được một lần rollback;",
                "dựng dashboard 6 panel, định nghĩa một SLO cùng error budget và ba alert có runbook;",
                "viết incident note có chuỗi bằng chứng metric → log → trace."
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
              "html": "\u003Cstrong\u003EHình thức:\u003C/strong\u003E cá nhân. Mỗi học viên làm trên fork riêng và nộp URL repo cùng commit SHA cuối.",
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
        "id": "codelab-a2fe732449b44de79b6ea22236b67831-s02-doc",
        "type": "text",
        "title": "Fork starter về tài khoản cá nhân",
        "duration_min": null,
        "ai_prompts": [],
        "status": "todo",
        "body": {
          "reading_label": null,
          "blocks": [
            {
              "t": "p",
              "html": "Starter \u003Ca href=\"https://github.com/VinUni-AI20k/K4-L3B-Day13-Monitoring-LLMOps\" target=\"_blank\" rel=\"noopener noreferrer\"\u003EK4-L3B-Day13-Monitoring-LLMOps\u003C/a\u003E chỉ là đề bài, không phải nơi nộp bài. Không clone rồi push ngược lên starter; hãy tạo fork riêng:",
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
                "\u003Cstrong\u003E1.\u003C/strong\u003E Mở \u003Ca href=\"https://github.com/VinUni-AI20k/K4-L3B-Day13-Monitoring-LLMOps\" target=\"_blank\" rel=\"noopener noreferrer\"\u003Estarter K4-L3B\u003C/a\u003E.",
                "\u003Cstrong\u003E2.\u003C/strong\u003E Chọn \u003Cstrong\u003EFork → Create a new fork\u003C/strong\u003E.",
                "\u003Cstrong\u003E3.\u003C/strong\u003E Ở phần \u003Cstrong\u003EOwner\u003C/strong\u003E, chọn tài khoản GitHub cá nhân.",
                "\u003Cstrong\u003E4.\u003C/strong\u003E Đặt tên repo theo mẫu \u003Ccode\u003EK4-L3-DAY13-HoVaTen-MSSV-Monitoring-LLMOps\u003C/code\u003E (viết liền, không dấu), ví dụ \u003Ccode\u003EK4-L3-DAY13-NguyenVanAn-123456-Monitoring-LLMOps\u003C/code\u003E.",
                "\u003Cstrong\u003E5.\u003C/strong\u003E Chọn \u003Cstrong\u003ECreate fork\u003C/strong\u003E, rồi clone \u003Cstrong\u003Efork của bạn\u003C/strong\u003E về máy:"
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
              "t": "md",
              "html": null,
              "items": [],
              "lang": null,
              "kind": null,
              "icon": null,
              "title": null,
              "src": null,
              "alt": null,
              "md": "```bash\ngit clone https://github.com/YOUR_GITHUB_USERNAME/YOUR_REPOSITORY_NAME.git\ncd YOUR_REPOSITORY_NAME\ngit remote -v\n```"
            },
            {
              "t": "p",
              "html": "Hoàn thành khi URL \u003Ccode\u003Eorigin\u003C/code\u003E chứa username GitHub của bạn, không phải \u003Ccode\u003EVinUni-AI20k\u003C/code\u003E. Không dùng chung fork với người khác, và không tạo Pull Request về repo đề.",
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
        "id": "codelab-a2fe732449b44de79b6ea22236b67831-s03-doc",
        "type": "text",
        "title": "Lộ trình",
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
              "md": "| Mốc | Thời gian | Việc chính | Hoàn thành khi | Evidence chụp ngay |\n| --- | --- | --- | --- | --- |\n| CP0 | 9:00–9:30 (0–30 phút) | Setup, chạy API và baseline | `/health` trả `ok: true`, log được tạo, trace xuất hiện trong project Langfuse của bạn | Ghi số baseline vào report |\n| CP1 | 9:30–10:20 (30–80 phút) | Correlation ID, structured log, PII | `validate_logs.py` đạt ít nhất 80/100 | 04, 05 |\n| CP2 | 10:20–11:40 (80–160 phút) | Trace, prompt, dashboard, SLO/alert | có span tree; dashboard validator đạt 6/6 | 06–11 |\n| CP3 | 11:40–12:30 (160–210 phút) | Điều tra challenge K4-L3B | có metric, log và trace cùng một request | 12–14 |\n| CP4 | 12:30–13:00 (210–240 phút) | Report, evidence và kiểm tra cuối | tests/validators chạy xong trên commit nộp | 01–03 |"
            },
            {
              "t": "p",
              "html": "Chụp evidence \u003Cstrong\u003Engay khi xong từng checkpoint\u003C/strong\u003E; danh sách và cách chụp ở \u003Cstrong\u003Emục 8.2\u003C/strong\u003E. Phần Q&amp;A cuối buổi yêu cầu bạn tự giải thích được luồng end-to-end; có thể ôn trước bằng \u003Ccode\u003Edocs/mock-debug-qa.md\u003C/code\u003E.",
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
        "id": "codelab-a2fe732449b44de79b6ea22236b67831-s04-doc",
        "type": "text",
        "title": "CP0 — Cài đặt môi trường và chạy baseline",
        "duration_min": null,
        "ai_prompts": [],
        "status": "todo",
        "body": {
          "reading_label": null,
          "blocks": [
            {
              "t": "p",
              "html": "Cần có: \u003Cstrong\u003EPython 3.11–3.13\u003C/strong\u003E (khuyên dùng 3.12; \u003Cstrong\u003Ekhông dùng 3.14\u003C/strong\u003E, vì cài \u003Ccode\u003Erequirements.txt\u003C/code\u003E sẽ treo hoặc lỗi khi build \u003Ccode\u003Epydantic-core\u003C/code\u003E), Git, và tài khoản Langfuse Cloud của riêng bạn.",
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
              "html": "\u003Cem\u003E(Mọi lệnh trong lab đều chạy ở \u003Cstrong\u003Ethư mục gốc repo\u003C/strong\u003E, nơi có \u003Ccode\u003Erequirements.txt\u003C/code\u003E.)\u003C/em\u003E",
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
              "html": "4.1. Tạo môi trường Python",
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
              "html": "\u003Cstrong\u003ECách A: dùng \u003Ccode\u003Euv\u003C/code\u003E\u003C/strong\u003E (nhanh, tự tải đúng Python 3.12, giống nhau trên mọi hệ điều hành)",
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
              "md": "```powershell\n# Windows PowerShell: cài uv (một lần)\npowershell -ExecutionPolicy ByPass -c \"irm https://astral.sh/uv/install.ps1 | iex\"\n```"
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
              "md": "```bash\n# macOS / Linux: cài uv (một lần)\ncurl -LsSf https://astral.sh/uv/install.sh | sh\n```"
            },
            {
              "t": "p",
              "html": "Mở terminal mới rồi chạy:",
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
              "md": "```bash\nuv venv -p 3.12 .venv\nuv pip install -r requirements.txt\n```"
            },
            {
              "t": "p",
              "html": "Sau đó activate venv và tạo \u003Ccode\u003E.env\u003C/code\u003E như dòng cuối của Cách B.",
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
              "html": "\u003Cstrong\u003ECách B: dùng Python có sẵn trên máy\u003C/strong\u003E (giống \u003Ccode\u003EREADME.md\u003C/code\u003E, chỉ khác lệnh gọi Python)",
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
              "md": "| Hệ điều hành | Tạo venv | Activate | Tạo `.env` |\n| --- | --- | --- | --- |\n| Windows (PowerShell) | `py -3.12 -m venv .venv` | `Set-ExecutionPolicy -Scope Process -ExecutionPolicy Bypass` rồi `.\\.venv\\Scripts\\Activate.ps1` | `Copy-Item .env.example .env` |\n| macOS | `brew install python@3.12` rồi `python3.12 -m venv .venv` | `source .venv/bin/activate` | `cp .env.example .env` |\n| Ubuntu/Debian | `sudo apt install python3-venv` rồi `python3 -m venv .venv` | `source .venv/bin/activate` | `cp .env.example .env` |"
            },
            {
              "t": "p",
              "html": "Sau khi activate: \u003Ccode\u003Epython -m pip install --upgrade pip\u003C/code\u003E và \u003Ccode\u003Epip install -r requirements.txt\u003C/code\u003E. Kiểm tra \u003Ccode\u003Epython --version\u003C/code\u003E in ra \u003Cstrong\u003E3.11, 3.12 hoặc 3.13\u003C/strong\u003E.",
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
              "html": "Lưu ý theo hệ điều hành:",
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
                "Windows: dùng cmd thì activate bằng \u003Ccode\u003E.venv\\Scripts\\activate.bat\u003C/code\u003E; dùng Git Bash thì \u003Ccode\u003Esource .venv/Scripts/activate\u003C/code\u003E.",
                "macOS: \u003Ccode\u003Epython3\u003C/code\u003E có sẵn của máy là 3.9, còn \u003Ccode\u003Ebrew install python\u003C/code\u003E (không kèm version) sẽ cài 3.14, đều không dùng được.",
                "Ubuntu 22.04: chỉ có sẵn Python 3.10, hãy dùng Cách A."
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
              "html": "4.2. Tạo project Langfuse cá nhân",
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
                "\u003Cstrong\u003E1.\u003C/strong\u003E Đăng ký hoặc đăng nhập \u003Ca href=\"https://cloud.langfuse.com\" target=\"_blank\" rel=\"noopener noreferrer\"\u003ELangfuse Cloud\u003C/a\u003E. \u003Cstrong\u003EGhi nhớ region\u003C/strong\u003E bạn chọn (EU hoặc US).",
                "\u003Cstrong\u003E2.\u003C/strong\u003E Tạo một \u003Cstrong\u003EOrganization\u003C/strong\u003E, rồi tạo project tên \u003Ccode\u003Eday13-k4-l3b-&lt;MSSV&gt;\u003C/code\u003E (vd \u003Ccode\u003Eday13-k4-l3b-123456\u003C/code\u003E).",
                "\u003Cstrong\u003E3.\u003C/strong\u003E Vào \u003Cstrong\u003EProject Settings → API Keys\u003C/strong\u003E, tạo key pair. Copy secret key ngay, vì nó chỉ hiện một lần.",
                "\u003Cstrong\u003E4.\u003C/strong\u003E Mở \u003Ccode\u003E.env\u003C/code\u003E, \u003Cstrong\u003Echỉ sửa 3 dòng\u003C/strong\u003E dưới đây và giữ nguyên các dòng khác (\u003Ccode\u003ELANGFUSE_PROMPT_NAME=day13-chat\u003C/code\u003E, \u003Ccode\u003ELANGFUSE_PROMPT_LABEL=production\u003C/code\u003E đã có sẵn):"
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
              "t": "md",
              "html": null,
              "items": [],
              "lang": null,
              "kind": null,
              "icon": null,
              "title": null,
              "src": null,
              "alt": null,
              "md": "```dotenv\nLANGFUSE_PUBLIC_KEY=pk-lf-...\nLANGFUSE_SECRET_KEY=sk-lf-...\nLANGFUSE_BASE_URL=https://cloud.langfuse.com\n```"
            },
            {
              "t": "p",
              "html": "Chọn region US thì đổi thành \u003Ccode\u003Ehttps://us.cloud.langfuse.com\u003C/code\u003E. Không để dấu cách quanh dấu \u003Ccode\u003E=\u003C/code\u003E. Nếu chưa tạo được Langfuse (vd đang chờ xác thực email), app vẫn chạy được: cứ làm CP1 trước, điền key sau rồi khởi động lại API.",
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
              "html": "4.3. Chạy baseline",
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
              "html": "Mở \u003Cstrong\u003E2 terminal\u003C/strong\u003E, cả hai đều ở thư mục gốc repo và \u003Cstrong\u003Eđều phải activate venv\u003C/strong\u003E.",
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
              "html": "Terminal 1 (API):",
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
              "md": "```bash\nuvicorn app.main:app --reload --env-file .env\n```"
            },
            {
              "t": "p",
              "html": "Terminal 2:",
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
              "md": "```bash\npython scripts/load_test.py\npython scripts/validate_logs.py\npython scripts/validate_dashboard.py\npython -m pytest -q\n```"
            },
            {
              "t": "p",
              "html": "CP0 hoàn thành khi \u003Ccode\u003Ehttp://127.0.0.1:8000/health\u003C/code\u003E trả \u003Ccode\u003Eok: true\u003C/code\u003E và \u003Ccode\u003Etracing_enabled: true\u003C/code\u003E, có file \u003Ccode\u003Edata/logs.jsonl\u003C/code\u003E, và thấy trace mới trong project Langfuse của bạn. Ở bước này validator log chỉ khoảng 30/100 là \u003Cstrong\u003Ebình thường\u003C/strong\u003E; ghi số baseline vào \u003Ccode\u003Esubmission/REPORT.md\u003C/code\u003E trước khi sửa code.",
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
              "html": "4.4. Lỗi thường gặp",
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
              "md": "| Triệu chứng | Cách xử lý |  |\n| --- | --- | --- |\n| `pip install` treo lâu, hoặc báo lỗi `maturin`, `Rust`, `Microsoft Visual C++ 14.0 is required` | Đang dùng Python 3.14. Xoá `.venv`, tạo lại bằng 3.12 |  |\n| PowerShell chặn `Activate.ps1` | `Set-ExecutionPolicy -Scope Process -ExecutionPolicy Bypass` rồi activate lại |  |\n| `Python was not found` (Windows) | Dùng `py -3.12`, hoặc cài Python 3.12 từ python.org (tick \"Add python.exe to PATH\") |  |\n| `ensurepip is not available` (Linux) | `sudo apt install python3-venv` |  |\n| `ModuleNotFoundError: No module named 'httpx'` / `'fastapi'` | Terminal đó chưa activate venv |  |\n| `ModuleNotFoundError: No module named 'app'` khi test | Chạy `python -m pytest -q` ở thư mục gốc |  |\n| `address already in use` / `WinError 10048` | Port 8000 đang bị chiếm. Tìm tiến trình: Windows `netstat -ano \\ | findstr :8000`, macOS/Linux `lsof -i :8000`; tắt nó rồi chạy lại. Các script của lab luôn gọi port 8000 |\n| Đã sửa code và restart mà response vẫn như cũ | API cũ có thể **chưa tắt hẳn** (bị treo khi đang gửi trace lúc mạng chậm) và vẫn giữ port 8000. Dùng lệnh ở dòng trên để tìm và tắt tiến trình cũ |  |\n| `/health` trả `tracing_enabled: false` | `.env` thiếu key, hoặc chưa chạy uvicorn với `--env-file .env` |  |\n| Không thấy trace | Kiểm tra key và `LANGFUSE_BASE_URL` đúng region, restart API, mở đúng project, chọn khoảng thời gian gần nhất |  |\n| Terminal API in `Failed to export spans … timed out` | Mạng chậm nên trace của batch đó **bị mất**. Chạy lại load test |  |\n| Langfuse có trace lạ `session-01`, `correlation_id=MISSING` | Do chạy `pytest` trong terminal đã nạp key Langfuse. Không tính vào 10 trace của bạn |  |"
            }
          ]
        }
      },
      {
        "id": "codelab-a2fe732449b44de79b6ea22236b67831-s05-doc",
        "type": "text",
        "title": "CP1 — Structured logging và bảo vệ PII",
        "duration_min": null,
        "ai_prompts": [],
        "status": "todo",
        "body": {
          "reading_label": null,
          "blocks": [
            {
              "t": "p",
              "html": "Mục tiêu: mỗi request có \u003Cstrong\u003Emột mã theo dõi duy nhất\u003C/strong\u003E đi cùng nó từ lúc nhận vào, ghi log, tạo trace đến lúc trả response; log phải \u003Cstrong\u003Ean toàn\u003C/strong\u003E (không có PII thô).",
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
              "md": "| File | Việc cần làm |\n| --- | --- |\n| `app/middleware.py` | Xoá context cũ (`clear_contextvars()`); nhận header `x-request-id` hoặc sinh ID dạng `req-` + 8 ký tự hex; bind ID; trả `x-request-id` và `x-response-time-ms` trong response header |\n| `app/main.py` | Bind `user_id_hash`, `session_id`, `feature`, `model`, `env` **trước dòng log `request_received`** |\n| `app/logging_config.py` | Bật PII scrubber (`scrub_event`) trước bước ghi file/render JSON |\n| `app/pii.py`, `tests/test_pii.py` | Pattern email, điện thoại VN, CCCD, thẻ **đã có sẵn** (README ghi \"hoàn thiện pattern\"); việc cần làm là viết thêm **test cho CCCD và thẻ**, có thể bổ sung pattern khác |"
            },
            {
              "t": "p",
              "html": "Kiểm tra:",
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
                "\u003Cstrong\u003E1.\u003C/strong\u003E \u003Cstrong\u003EChuyển log cũ ra ngoài repo\u003C/strong\u003E (không chỉ đổi tên trong \u003Ccode\u003Edata/\u003C/code\u003E, vì \u003Ccode\u003E.gitignore\u003C/code\u003E chỉ bỏ qua đúng \u003Ccode\u003Edata/logs.jsonl\u003C/code\u003E, file đã đổi tên sẽ bị commit):"
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
              "t": "ul",
              "html": null,
              "items": [
                "macOS/Linux: \u003Ccode\u003Emv data/logs.jsonl ../logs-cp0-baseline.jsonl\u003C/code\u003E",
                "Windows: \u003Ccode\u003EMove-Item data\\logs.jsonl ..\\logs-cp0-baseline.jsonl\u003C/code\u003E"
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
              "t": "ul",
              "html": null,
              "items": [
                "\u003Cstrong\u003E1.\u003C/strong\u003E Restart API.",
                "\u003Cstrong\u003E2.\u003C/strong\u003E \u003Ccode\u003Epython scripts/load_test.py\u003C/code\u003E",
                "\u003Cstrong\u003E3.\u003C/strong\u003E \u003Ccode\u003Epython scripts/validate_logs.py\u003C/code\u003E"
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
              "html": "CP1 hoàn thành khi điểm ≥ 80/100, response header có \u003Ccode\u003Ex-request-id\u003C/code\u003E đúng format, và log không còn PII thô. Chụp \u003Cstrong\u003E04, 05\u003C/strong\u003E ngay (xem 8.2).",
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
        "id": "codelab-a2fe732449b44de79b6ea22236b67831-s06-doc",
        "type": "text",
        "title": "CP2 — Traces, prompt, dashboard và alert",
        "duration_min": null,
        "ai_prompts": [],
        "status": "todo",
        "body": {
          "reading_label": null,
          "blocks": [
            {
              "t": "h3",
              "html": "6.1. Trace trên Langfuse",
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
              "html": "Starter mới có root observation \u003Ccode\u003Elab-agent-run\u003C/code\u003E. Bạn cần thêm child observation để trace đọc được như cây sau (giống README):",
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
              "md": "```text\nday13-agent-request\n└── lab-agent-run\n    ├── retrieval: tìm tài liệu/context liên quan      (loại retriever hoặc span)\n    └── generation: gọi LLM để sinh câu trả lời         (loại generation)\n```"
            },
            {
              "t": "p",
              "html": "Generation cần có:",
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
                "\u003Cstrong\u003Emodel\u003C/strong\u003E;",
                "\u003Cstrong\u003Eusage\u003C/strong\u003E (token input/output);",
                "\u003Cstrong\u003Ecost\u003C/strong\u003E;",
                "\u003Cstrong\u003Eliên kết tới prompt version\u003C/strong\u003E: truyền đối tượng prompt lấy từ Langfuse qua tham số \u003Ccode\u003Eprompt=\u003C/code\u003E, \u003Cstrong\u003Ekhông\u003C/strong\u003E gửi nội dung prompt đã điền câu hỏi."
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
              "html": "Không capture raw input/output (câu hỏi có thể chứa PII). \u003Ccode\u003Ecorrelation_id\u003C/code\u003E phải có trong metadata của trace để nối với log.",
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
              "html": "Mục tiêu: \u003Cstrong\u003E≥ 10 trace\u003C/strong\u003E đủ cây trong project của bạn.",
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
                "Public test \u003Ccode\u003Etests/test_agent_prompt_trace.py\u003C/code\u003E được viết theo cách tạo child observation bằng decorator \u003Ccode\u003E@observe(...)\u003C/code\u003E trên \u003Ccode\u003Eretrieve\u003C/code\u003E và \u003Ccode\u003EFakeLLM.generate\u003C/code\u003E. Nếu bạn dùng cách khác mà test này fail, hãy chuyển sang \u003Ccode\u003E@observe\u003C/code\u003E.",
                "Trace được gửi lên Langfuse ở chế độ nền: sau request cuối, \u003Cstrong\u003Echờ vài giây rồi mới dừng hoặc restart API\u003C/strong\u003E, nếu không trace sẽ mất. Đối chiếu số trace trên Langfuse với số request trong log."
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
              "html": "6.2. Quản lý phiên bản prompt",
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
              "html": "Ý tưởng (xem thêm README, phần \"Hiểu nhanh về prompt versioning\"): \u003Cstrong\u003Elabel\u003C/strong\u003E là con trỏ tới một \u003Cstrong\u003Eversion\u003C/strong\u003E. App lấy prompt theo \u003Ccode\u003ELANGFUSE_PROMPT_LABEL\u003C/code\u003E, nên đổi prompt đang dùng \u003Cstrong\u003Ekhông cần sửa code\u003C/strong\u003E, chỉ cần dời label.",
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
              "md": "```text\nproduction -\u003E day13-chat v1   →(promote)→   production -\u003E day13-chat v2   →(rollback)→   production -\u003E day13-chat v1\n```"
            },
            {
              "t": "p",
              "html": "Làm theo \u003Ccode\u003Edocs/PROMPT_VERSIONING.md\u003C/code\u003E:",
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
                "\u003Cstrong\u003E1.\u003C/strong\u003E Tạo \u003Cstrong\u003Etext prompt\u003C/strong\u003E (không phải chat) tên \u003Ccode\u003Eday13-chat\u003C/code\u003E, giữ đúng 3 biến \u003Ccode\u003E{{feature}}\u003C/code\u003E, \u003Ccode\u003E{{docs}}\u003C/code\u003E, \u003Ccode\u003E{{message}}\u003C/code\u003E. Gắn labels \u003Ccode\u003Ebaseline\u003C/code\u003E và \u003Ccode\u003Eproduction\u003C/code\u003E cho version 1.",
                "\u003Cstrong\u003E2.\u003C/strong\u003E Tạo version 2 với một thay đổi nhỏ (vd thêm dòng \"trả lời ngắn gọn\"), gắn label \u003Ccode\u003Ecandidate\u003C/code\u003E.",
                "\u003Cstrong\u003E3.\u003C/strong\u003E Đặt \u003Ccode\u003ELANGFUSE_PROMPT_LABEL=baseline\u003C/code\u003E trong \u003Ccode\u003E.env\u003C/code\u003E, restart API, gửi request. Đổi thành \u003Ccode\u003Ecandidate\u003C/code\u003E, restart, gửi request. Xong thì \u003Cstrong\u003Eđặt lại \u003Ccode\u003Eproduction\u003C/code\u003E\u003C/strong\u003E.",
                "\u003Cstrong\u003E4.\u003C/strong\u003E Mở 2 trace, bấm vào dòng \u003Ccode\u003Elab-agent-run\u003C/code\u003E, xem tab \u003Cstrong\u003EMetadata\u003C/strong\u003E: \u003Ccode\u003Eprompt_name\u003C/code\u003E, \u003Ccode\u003Eprompt_label\u003C/code\u003E, \u003Ccode\u003Eprompt_version\u003C/code\u003E phải đúng. Ghi lại \u003Cstrong\u003E2 trace ID\u003C/strong\u003E (một của v1, một của v2).",
                "\u003Cstrong\u003E5.\u003C/strong\u003E \u003Cstrong\u003EPromote:\u003C/strong\u003E dời label \u003Ccode\u003Eproduction\u003C/code\u003E sang v2, restart API, gửi 1 request để kiểm tra.",
                "\u003Cstrong\u003E6.\u003C/strong\u003E \u003Cstrong\u003ERollback:\u003C/strong\u003E dời \u003Ccode\u003Eproduction\u003C/code\u003E về v1, restart, gửi 1 request để kiểm tra. Chụp trạng thái label sau bước 5 và sau bước 6."
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
              "html": "Những điều hay làm học viên bối rối:",
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
                "\u003Cstrong\u003ELàm cả promote lẫn rollback\u003C/strong\u003E (bước 5 và 6).",
                "Langfuse \u003Cstrong\u003Etự gắn label \u003Ccode\u003Elatest\u003C/code\u003E\u003C/strong\u003E vào version mới nhất; đây là bình thường.",
                "Mỗi label chỉ nằm trên \u003Cstrong\u003Emột\u003C/strong\u003E version: gắn \u003Ccode\u003Eproduction\u003C/code\u003E cho v2 thì v1 tự mất label đó.",
                "App cache prompt khoảng 60 giây, nên \u003Cstrong\u003Esau mỗi lần đổi label thì restart API\u003C/strong\u003E rồi mới kiểm tra.",
                "Fake LLM luôn trả \u003Cstrong\u003Ecùng một câu trả lời\u003C/strong\u003E, nên v1 và v2 chỉ khác \u003Ccode\u003Eprompt_version\u003C/code\u003E và \u003Ccode\u003Etokens_in\u003C/code\u003E. Đây là bình thường.",
                "Metadata hiện \u003Ccode\u003Elocal-v1\u003C/code\u003E: \u003Ccode\u003Eprompt_source=local\u003C/code\u003E nghĩa là chưa bật Langfuse; \u003Ccode\u003Elocal-fallback\u003C/code\u003E nghĩa là tải prompt lỗi. Kiểm tra key/region, tên và label, prompt có phải loại Text không, rồi restart API."
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
              "html": "6.3. Dashboard",
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
              "html": "Dựng đúng \u003Cstrong\u003E6 panel\u003C/strong\u003E từ \u003Ccode\u003Edata/logs.jsonl\u003C/code\u003E theo \u003Ccode\u003Econfig/dashboard.yaml\u003C/code\u003E. Công cụ tuỳ chọn: Streamlit, notebook, Grafana, script vẽ biểu đồ…",
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
              "md": "| Panel | Câu hỏi cần trả lời |\n| --- | --- |\n| Latency | Request có chậm không? P50/P95/P99 và TTFT đang ở mức nào? |\n| Traffic | Hệ thống đang nhận bao nhiêu request theo thời gian? |\n| Errors | Error rate có tăng không, retrieval có đang fail không? |\n| Cost | Chi phí có tăng bất thường không? |\n| Tokens | Input/output token có dài bất thường không? |\n| Quality | Quality proxy có giảm dưới mức chấp nhận được không? |"
            },
            {
              "t": "p",
              "html": "Mỗi panel cần: tên, đơn vị, time range 60 phút, refresh 30 giây (nếu công cụ hỗ trợ), và \u003Cstrong\u003Eđường threshold\u003C/strong\u003E.",
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
              "html": "Gợi ý:",
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
                "\u003Cstrong\u003ERetrieval success\u003C/strong\u003E = tỉ lệ \u003Ccode\u003Etool_success == true\u003C/code\u003E trên \u003Cstrong\u003Emọi\u003C/strong\u003E event có field \u003Ccode\u003Etool_success\u003C/code\u003E, gồm cả \u003Ccode\u003Eresponse_sent\u003C/code\u003E lẫn \u003Ccode\u003Erequest_failed\u003C/code\u003E. Nếu chỉ lấy \u003Ccode\u003Erequest_failed\u003C/code\u003E (như danh sách events trong YAML) thì kết quả luôn là 0 %.",
                "Công cụ vẽ không có sẵn trong \u003Ccode\u003Erequirements.txt\u003C/code\u003E, hãy cài vào \u003Cstrong\u003Evenv riêng\u003C/strong\u003E. Streamlit cài chung sẽ hạ phiên bản thư viện mà API đang dùng.",
                "\u003Ccode\u003Est.line_chart\u003C/code\u003E không vẽ được threshold; dùng altair \u003Ccode\u003Emark_rule\u003C/code\u003E, plotly \u003Ccode\u003Eadd_hline\u003C/code\u003E hoặc matplotlib \u003Ccode\u003Eaxhline\u003C/code\u003E.",
                "Trường \u003Ccode\u003Ets\u003C/code\u003E trong log là giờ \u003Cstrong\u003EUTC\u003C/strong\u003E. Chạy \u003Ccode\u003Eload_test.py\u003C/code\u003E rải rác 10–15 phút để biểu đồ theo phút có đủ điểm.",
                "Đã chạy practice thì trước khi chụp dashboard, chuyển log cũ ra ngoài repo (như CP1) rồi chạy lại load test; nếu không, request lỗi của practice sẽ làm lệch error rate."
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
              "html": "Kiểm tra contract: \u003Ccode\u003Epython scripts/validate_dashboard.py\u003C/code\u003E (chỉ kiểm tra cấu trúc YAML; ảnh dashboard có dữ liệu vẫn bắt buộc).",
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
              "html": "6.4. SLO và alerts",
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
                "\u003Ccode\u003Econfig/slo.yaml\u003C/code\u003E: giải thích hoặc điều chỉnh SLO dựa trên baseline của bạn, và \u003Cstrong\u003Etính error budget ra số request\u003C/strong\u003E. Ví dụ: SLO 99,5 % với 10.000 request thì tối đa 50 request được phép chậm hoặc lỗi.",
                "\u003Ccode\u003Econfig/alert_rules.yaml\u003C/code\u003E: thay hết \u003Ccode\u003ETODO\u003C/code\u003E bằng \u003Cstrong\u003E3 alert symptom-based\u003C/strong\u003E, mỗi alert có \u003Ccode\u003Econdition\u003C/code\u003E, \u003Ccode\u003Eduration\u003C/code\u003E, \u003Ccode\u003Eseverity\u003C/code\u003E, \u003Ccode\u003Eowner\u003C/code\u003E, Slack channel, \u003Ccode\u003Erunbook\u003C/code\u003E.",
                "\u003Ccode\u003Edocs/alerts.md\u003C/code\u003E: viết runbook cho từng alert (ba bước kiểm tra Metrics → Logs → Traces, mitigation). Đầu file có \u003Cstrong\u003Ealert mẫu\u003C/strong\u003E để tham khảo. \u003Cstrong\u003EGiữ nguyên heading \u003Ccode\u003E## Alert 1/2/3\u003C/code\u003E\u003C/strong\u003E, vì link \u003Ccode\u003E#alert-1\u003C/code\u003E trong YAML trỏ vào đó."
              ],
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
        "id": "codelab-a2fe732449b44de79b6ea22236b67831-s07-doc",
        "type": "text",
        "title": "CP3 — Điều tra challenge",
        "duration_min": null,
        "ai_prompts": [],
        "status": "todo",
        "body": {
          "reading_label": null,
          "blocks": [
            {
              "t": "p",
              "html": "Starter \u003Cstrong\u003Ekhông\u003C/strong\u003E chứa file đề. Khi mở CP3, Lab Coach đưa file đề lên starter và gửi \u003Cstrong\u003Emột đường link\u003C/strong\u003E. Ở thư mục gốc repo, tải file về đúng vị trí:",
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
              "md": "```bash\n# macOS / Linux / Git Bash\ncurl -fsSL -o config/challenge.json \"\u003CLINK_LAB_COACH_GỬI\u003E\"\n```"
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
              "md": "```powershell\n# Windows PowerShell (gõ đúng curl.exe)\ncurl.exe -fsSL -o config/challenge.json \"\u003CLINK_LAB_COACH_GỬI\u003E\"\n```"
            },
            {
              "t": "ul",
              "html": null,
              "items": [
                "Mở file, xác nhận \u003Ccode\u003Echallenge_id\u003C/code\u003E là \u003Ccode\u003Eday13-k4-l3b-monitoring-llmops-v1\u003C/code\u003E.",
                "\u003Cstrong\u003EKhông bấm Sync fork\u003C/strong\u003E để lấy đề; file chỉ cần có trên máy bạn.",
                "\u003Ccode\u003Econfig/challenge.json\u003C/code\u003E đã nằm trong \u003Ccode\u003E.gitignore\u003C/code\u003E: \u003Cstrong\u003Ekhông force-add, commit, push hoặc chia sẻ\u003C/strong\u003E."
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
              "html": "\u003Cstrong\u003EChuẩn bị\u003C/strong\u003E (làm theo thứ tự):",
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
                "\u003Cstrong\u003E1.\u003C/strong\u003E Chuyển log hiện tại ra ngoài repo (như CP1), để dashboard CP3 chỉ còn dữ liệu mới.",
                "\u003Cstrong\u003E2.\u003C/strong\u003E Tắt incident practice nếu còn bật: \u003Ccode\u003Epython scripts/inject_incident.py --scenario &lt;tên&gt; --disable\u003C/code\u003E. Mở \u003Ccode\u003E/health\u003C/code\u003E, kiểm tra mọi \u003Ccode\u003Eincidents\u003C/code\u003E đều \u003Ccode\u003Efalse\u003C/code\u003E.",
                "\u003Cstrong\u003E3.\u003C/strong\u003E Chạy API \u003Cstrong\u003Ekhông có \u003Ccode\u003E--reload\u003C/code\u003E\u003C/strong\u003E: \u003Ccode\u003Euvicorn app.main:app --env-file .env\u003C/code\u003E. Với \u003Ccode\u003E--reload\u003C/code\u003E, chỉ cần lưu file là server khởi động lại và incident tự tắt.",
                "\u003Cstrong\u003E4.\u003C/strong\u003E Chạy \u003Ccode\u003Epython scripts/load_test.py\u003C/code\u003E một lần (chưa bật incident) để có \u003Cstrong\u003Ebaseline\u003C/strong\u003E trong cửa sổ CP3."
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
              "html": "\u003Cstrong\u003EChạy challenge\u003C/strong\u003E (chỉ khi Lab Coach thông báo mở):",
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
              "md": "```bash\npython scripts/inject_incident.py\npython scripts/load_test.py --challenge --concurrency 5\n```"
            },
            {
              "t": "p",
              "html": "Chưa có file đề thì script in lỗi, dòng cuối là \u003Ccode\u003EFileNotFoundError: config/challenge.json chưa được Lab Coach release…\u003C/code\u003E. Khi đó cứ tiếp tục practice bằng \u003Ccode\u003E--scenario\u003C/code\u003E (xem danh sách bằng \u003Ccode\u003Epython scripts/inject_incident.py --help\u003C/code\u003E).",
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
              "html": "\u003Cstrong\u003EĐiều tra theo đúng thứ tự\u003C/strong\u003E (không đoán root cause, không mở trace ngẫu nhiên):",
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
                "\u003Cstrong\u003E1.\u003C/strong\u003E \u003Cstrong\u003EMetrics:\u003C/strong\u003E panel nào bất thường, giá trị bao nhiêu \u003Cstrong\u003Eso với baseline\u003C/strong\u003E, lúc mấy giờ. Latency lấy từ \u003Ccode\u003Elatency_ms\u003C/code\u003E trong log/dashboard. \u003Cstrong\u003EKhông\u003C/strong\u003E dùng thời gian mà \u003Ccode\u003Eload_test.py\u003C/code\u003E in ra: với \u003Ccode\u003E--concurrency 5\u003C/code\u003E các request xếp hàng, nên số phía client lớn hơn nhiều so với thực tế.",
                "\u003Cstrong\u003E2.\u003C/strong\u003E \u003Cstrong\u003ELogs:\u003C/strong\u003E lọc \u003Ccode\u003Edata/logs.jsonl\u003C/code\u003E trong khoảng đó, chọn một request bất thường, ghi \u003Ccode\u003Ecorrelation_id\u003C/code\u003E.",
                "\u003Cstrong\u003E3.\u003C/strong\u003E \u003Cstrong\u003ETraces:\u003C/strong\u003E mở trace có cùng \u003Ccode\u003Ecorrelation_id\u003C/code\u003E, so sánh thời gian và trạng thái các span.",
                "\u003Cstrong\u003E4.\u003C/strong\u003E \u003Cstrong\u003EKết luận:\u003C/strong\u003E root cause, fix action, preventive measure vào \u003Ccode\u003Esubmission/REPORT.md\u003C/code\u003E, kèm challenge ID, metric, log line/\u003Ccode\u003Ecorrelation_id\u003C/code\u003E, trace ID. Ba bằng chứng phải cùng chỉ về một nguyên nhân."
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
              "html": "Chỉ dùng file Lab Coach gửi cho K4-L3B; không sửa nội dung, không tự tạo, không lấy file của lớp khác (0 điểm phần incident).",
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
              "t": "p",
              "html": "Nếu hoàn thành sớm, Lab Coach có thể gửi thêm link một \u003Cstrong\u003Echallenge phụ\u003C/strong\u003E (\u003Ccode\u003Echallenge_id\u003C/code\u003E khác). Tắt incident vừa điều tra (\u003Ccode\u003E--scenario &lt;tên&gt; --disable\u003C/code\u003E), tải file mới đè lên \u003Ccode\u003Econfig/challenge.json\u003C/code\u003E, chuyển log ra ngoài repo, rồi làm lại các bước trên. Cách ghi vào report theo hướng dẫn của Lab Coach.",
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
        "id": "codelab-a2fe732449b44de79b6ea22236b67831-s08-doc",
        "type": "text",
        "title": "CP4 — Báo cáo, evidence và nộp bài",
        "duration_min": null,
        "ai_prompts": [],
        "status": "todo",
        "body": {
          "reading_label": null,
          "blocks": [
            {
              "t": "h3",
              "html": "8.1. Báo cáo",
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
              "html": "Điền \u003Cstrong\u003Eđủ mọi mục\u003C/strong\u003E trong \u003Ccode\u003Esubmission/REPORT.md\u003C/code\u003E (danh sách ở \u003Ccode\u003Edocs/SUBMISSION.md\u003C/code\u003E §8): thông tin, evidence index, bảng baseline và kết quả cuối, logging/PII, tracing/prompt (có 2 trace ID), dashboard/SLO/alert, điều tra challenge, quyết định kỹ thuật, blocker, bài học. Ảnh dẫn bằng đường dẫn tương đối, ví dụ \u003Ccode\u003E![Trace waterfall](evidence/07-trace-waterfall.png)\u003C/code\u003E. Không dùng đường dẫn máy như \u003Ccode\u003EC:\\Users\\...\u003C/code\u003E.",
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
              "html": "8.2. Chụp evidence",
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
              "html": "Lưu ảnh \u003Ccode\u003E.png\u003C/code\u003E (test/validator có thể dùng \u003Ccode\u003E.txt\u003C/code\u003E) vào \u003Ccode\u003Esubmission/evidence/\u003C/code\u003E.",
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
              "html": "\u003Cstrong\u003ECách chụp:\u003C/strong\u003E",
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
              "md": "| Hệ điều hành | Phím tắt chụp một vùng |\n| --- | --- |\n| Windows | `Win + Shift + S` |\n| macOS | `Cmd + Shift + 4` |\n| Ubuntu | `Shift + PrtSc` |"
            },
            {
              "t": "p",
              "html": "\u003Cstrong\u003EQuy tắc chung:\u003C/strong\u003E",
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
                "Ảnh phải thấy \u003Cstrong\u003Elệnh + kết quả\u003C/strong\u003E (terminal), hoặc \u003Cstrong\u003Etên project + khoảng thời gian\u003C/strong\u003E (Langfuse).",
                "Chữ đọc được.",
                "\u003Cstrong\u003EKhông\u003C/strong\u003E lộ \u003Ccode\u003E.env\u003C/code\u003E, trang API Keys hay secret."
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
              "html": "Để lấy log của \u003Cstrong\u003Emột\u003C/strong\u003E request, gửi request có ID tự đặt (\u003Ccode\u003Ereq-\u003C/code\u003E + 8 ký tự hex) rồi in log của nó. Hai lệnh này dùng được trên mọi hệ điều hành; thay \u003Ccode\u003Ereq-1a2b3c4d\u003C/code\u003E bằng ID của bạn:",
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
              "md": "```bash\npython -c \"import httpx; r = httpx.post('http://127.0.0.1:8000/chat', json={'user_id':'demo','session_id':'demo-01','feature':'qa','message':'Explain traces'}, headers={'x-request-id':'req-1a2b3c4d'}); print(r.status_code, r.headers.get('x-request-id'), r.headers.get('x-response-time-ms'))\"\npython -c \"import json,sys; [print(json.dumps(json.loads(l), ensure_ascii=False, indent=2)) for l in open('data/logs.jsonl', encoding='utf-8') if sys.argv[1] in l]\" req-1a2b3c4d\n```"
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
              "md": "| # | Tên file | Chụp ở đâu / làm gì | Ảnh phải thấy |\n| --- | --- | --- | --- |\n| 01 | `01-pytest.png` | Sau commit code cuối: `git log -1 --oneline` rồi `python -m pytest -q` | Mã commit + `N passed` |\n| 02 | `02-log-validator.png` | Chuyển log cũ ra ngoài repo → restart → `load_test.py` → `validate_logs.py` | Khối Grading Scorecard + `Estimated Score` ≥ 80 |\n| 03 | `03-dashboard-validator.png` | `python scripts/validate_dashboard.py` | `HỢP LỆ: 6/6 panel` |\n| 04 | `04-structured-log.png` | 2 lệnh ở trên với ID tự đặt | 2 khối JSON `request_received` + `response_sent`, đủ `ts`, `event`, `correlation_id`, `user_id_hash`, `session_id`, `feature`, `model`, `env`, `latency_ms`. **Ghi ID vào report** |\n| 05 | `05-pii-redaction.png` | Như 04 nhưng `message` = `a@b.vn 0901234567 001099012345 4111 1111 1111 1111` (câu ngắn vì preview bị cắt ở 80 ký tự) | Lệnh có PII **và** log hiện `[REDACTED_EMAIL] [REDACTED_PHONE_VN] [REDACTED_CCCD] [REDACTED_CREDIT_CARD]` |\n| 06 | `06-trace-list.png` | Langfuse → **Tracing** | Tên project, khoảng thời gian, ≥ 10 trace `day13-agent-request`, cột Input/Output trống |\n| 07 | `07-trace-waterfall.png` | Mở trace của request ở 04 → **Timeline** (bật *Show labels*) hoặc **Tree** | `lab-agent-run` là cha của retrieval và generation, mỗi dòng có thời gian |\n| 08 | `08a-…png`, `08b-…png` | **08a:** bấm `lab-agent-run` → Metadata. **08b:** bấm generation | 08a: `correlation_id` **trùng ảnh 04**, `prompt_name/label/version`, `prompt_source=langfuse`. 08b: model, token, cost, nhãn **Prompt: day13-chat - vN**. Input/Output trống |\n| 09 | `09-prompt-versions.png` | Langfuse → **Prompts** → `day13-chat` | v1, v2 với nhãn `baseline`, `candidate`, `production` (có thêm `latest` là bình thường) |\n| 10 | `10a-…png`, `10b-…png` | Trang prompt sau khi promote (10a) và sau khi rollback (10b) | Nhãn `production` nằm ở v2 (10a), rồi quay về v1 (10b) |\n| 11 | `11-dashboard-overview.png` (hoặc `11a/11b/11c`) | Dashboard, chụp đủ 6 panel | Tên panel, đơn vị, threshold, time range; latency có TTFT; errors có retrieval success |\n| 12 | `12-incident-metric.png` | Dashboard ngay sau challenge | Đoạn baseline và đoạn bất thường trên cùng trục thời gian |\n| 13 | `13-incident-log.png` | Lọc request bất thường (lệnh bên dưới), rồi in 1 request bằng lệnh ở 04 | Dòng log có `correlation_id`, giờ, giá trị bất thường |\n| 14 | `14-incident-trace.png` | Langfuse, trace có **cùng `correlation_id` với ảnh 13** | Waterfall thấy span bất thường + metadata `correlation_id` |"
            },
            {
              "t": "p",
              "html": "Lệnh lọc request bất thường cho ảnh 13:",
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
              "md": "```bash\n# request chậm\npython -c \"import json; rows=[json.loads(l) for l in open('data/logs.jsonl', encoding='utf-8')]; [print(r['ts'], r['correlation_id'], r['session_id'], r['latency_ms'], 'ms') for r in rows if r.get('event')=='response_sent' and r.get('latency_ms',0)\u003E2000]\"\n# request lỗi\npython -c \"import json; rows=[json.loads(l) for l in open('data/logs.jsonl', encoding='utf-8')]; [print(r['ts'], r['correlation_id'], r.get('session_id'), r.get('error_type'), r.get('tool_success')) for r in rows if r.get('event')=='request_failed']\"\n```"
            },
            {
              "t": "h3",
              "html": "8.3. Tự kiểm tra chéo",
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
              "md": "| Phải khớp | Giữa |\n| --- | --- |\n| Cùng `correlation_id` | 04 ↔ 08a; 13 ↔ 14 ↔ phần incident trong report |\n| Cùng trace | 07, 08a, 08b là một trace, và trace đó có trong danh sách ở 06 |\n| Cùng thời điểm | Giờ trong log là **UTC**; Langfuse hiện giờ Việt Nam (**+7 tiếng**). Vd `04:39Z` trong log = `11:39` trên Langfuse |\n| Cùng version | 2 trace ID trong report có `prompt_version` 1 và 2 |\n| Cùng người | Tên project `day13-k4-l3b-\u003CMSSV\u003E` trong ảnh khớp MSSV trong report và tên repo |\n| Cùng đề | `challenge_id` trong report khớp đề đã tải |"
            },
            {
              "t": "h3",
              "html": "8.4. Kiểm tra cuối và nộp",
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
              "md": "```bash\npython -m pytest -q\npython scripts/validate_logs.py\npython scripts/validate_dashboard.py\ngit status --short\ngit log -1 --oneline\n```"
            },
            {
              "t": "ul",
              "html": null,
              "items": [
                "\u003Cstrong\u003EKhông dùng \u003Ccode\u003Egit add .\u003C/code\u003E\u003C/strong\u003E. Chỉ add đúng phần bài làm, vd \u003Ccode\u003Egit add app tests config docs submission\u003C/code\u003E (cùng thư mục dashboard nếu có).",
                "Kiểm tra \u003Ccode\u003Egit status\u003C/code\u003E không có \u003Ccode\u003E.env\u003C/code\u003E, \u003Ccode\u003Econfig/challenge.json\u003C/code\u003E, file log \u003Ccode\u003E*.jsonl\u003C/code\u003E, \u003Ccode\u003E.venv/\u003C/code\u003E."
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
              "html": "Checklist:",
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
                "\u003Ccode\u003Esubmission/REPORT.md\u003C/code\u003E đủ mọi mục; ảnh dẫn bằng đường dẫn tương đối và mở được trên GitHub.",
                "Có evidence 01–14; tests pass, log validator ≥ 80/100, dashboard validator 6/6.",
                "≥ 10 trace trong project cá nhân; waterfall, metadata, prompt v1/v2, promote và rollback.",
                "Dashboard đủ 6 panel; SLO/error budget có số cụ thể; 3 alert + runbook.",
                "Incident đi theo Metrics → Logs → Traces, dùng cùng \u003Ccode\u003Ecorrelation_id\u003C/code\u003E.",
                "Không có secret, PII thô, \u003Ccode\u003Econfig/challenge.json\u003C/code\u003E, log, hay bài của người khác/lớp khác."
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
              "html": "Nộp \u003Cstrong\u003EURL fork\u003C/strong\u003E trên \u003Cstrong\u003EVLearn LMS/Codelabs\u003C/strong\u003E trước \u003Cstrong\u003E23:59:59 ngày diễn ra lab\u003C/strong\u003E (giờ Asia/Ho_Chi_Minh). Nộp trễ 0–2 giờ trừ 10 %, 2–12 giờ trừ 25 %, quá 12 giờ 0 điểm (\u003Ccode\u003Edocs/RULES.md\u003C/code\u003E). Thang điểm: 100 + tối đa 10 bonus (\u003Ccode\u003Edocs/RUBRIC.md\u003C/code\u003E). Validator chỉ là technical gate, không thay thế dashboard/trace thật hay phần Q&amp;A.",
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
        "id": "codelab-a2fe732449b44de79b6ea22236b67831-submit",
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
          },
          "deadline_at": "2026-09-30T16:59:00+00:00"
        }
      }
    ]
  },
  "progress": {
    "done": 1,
    "total": 14,
    "percent": 7,
    "current_part_id": "day-slides-material_mu0w5pkc_j11fjj"
  },
  "kc_quiz": {
    "release_id": "ae42310e-07ba-44c9-acb7-228a1853782a",
    "course_id": "K4P1",
    "day_code": "day13",
    "revision_no": 1,
    "published_at": "2026-09-18T08:20:51.997045+00:00",
    "groups": [
      {
        "group_id": "day13-g-foundations",
        "name": "Nền tảng observability và chọn signal",
        "leaf_kc_ids": [
          "kc-monitoring-observability-boundary",
          "kc-ai-observability-failure-model",
          "kc-observability-feedback-loop",
          "kc-telemetry-pillar-question-selection",
          "kc-online-eval-fourth-pillar"
        ]
      },
      {
        "group_id": "day13-g-metrics",
        "name": "Metric contract cho AI service",
        "leaf_kc_ids": [
          "kc-agent-metric-family-contract",
          "kc-red-use-view-selection",
          "kc-latency-percentile-ttft-interpretation",
          "kc-tail-latency-compounding",
          "kc-production-quality-signal-pyramid",
          "kc-hallucination-multisignal-detection",
          "kc-tool-call-metric-contract",
          "kc-retrieval-metric-contract",
          "kc-agent-runtime-error-taxonomy",
          "kc-ai-drift-monitoring-contract",
          "kc-stakeholder-metric-selection"
        ]
      },
      {
        "group_id": "day13-g-logs",
        "name": "Structured logging có correlation và an toàn PII",
        "leaf_kc_ids": [
          "kc-structured-event-schema",
          "kc-llm-call-event-fields",
          "kc-telemetry-payload-minimization",
          "kc-pii-redaction-before-emission",
          "kc-log-level-severity-semantics",
          "kc-correlation-id-request-lifecycle",
          "kc-async-log-context-isolation",
          "kc-outcome-aware-telemetry-sampling",
          "kc-application-audit-log-separation"
        ]
      },
      {
        "group_id": "day13-g-traces",
        "name": "Distributed tracing cho agent workflow",
        "leaf_kc_ids": [
          "kc-trace-span-context-model",
          "kc-agent-span-boundary-design",
          "kc-otel-vendor-neutral-export",
          "kc-genai-trace-semantic-contract",
          "kc-trace-sampling-outcome-policy",
          "kc-trace-bottleneck-pattern-diagnosis",
          "kc-prompt-version-traceability"
        ]
      },
      {
        "group_id": "day13-g-platform",
        "name": "Telemetry instrumentation và platform fit",
        "leaf_kc_ids": [
          "kc-observability-stack-constraint-fit",
          "kc-collector-signal-fanout",
          "kc-prometheus-metric-type-selection",
          "kc-agent-metric-instrumentation",
          "kc-metric-label-cardinality-control"
        ]
      },
      {
        "group_id": "day13-g-dashboard",
        "name": "Dashboard theo quyết định",
        "leaf_kc_ids": [
          "kc-layered-dashboard-audience-design",
          "kc-ai-service-panel-coverage",
          "kc-dashboard-panel-form-selection",
          "kc-dashboard-operational-context",
          "kc-dashboard-as-code-reproducibility"
        ]
      },
      {
        "group_id": "day13-g-alerts",
        "name": "Alerting, SLO và on-call control",
        "leaf_kc_ids": [
          "kc-symptom-cause-alert-separation",
          "kc-actionable-alert-contract",
          "kc-alert-routing-fatigue-control",
          "kc-sli-slo-sla-contract",
          "kc-error-budget-calculation",
          "kc-multiwindow-burn-rate-alert",
          "kc-oncall-severity-escalation"
        ]
      },
      {
        "group_id": "day13-g-costeval",
        "name": "Cost attribution và online quality evaluation",
        "leaf_kc_ids": [
          "kc-agent-task-cost-rollup",
          "kc-ai-cost-attribution-dimensions",
          "kc-online-offline-eval-separation",
          "kc-human-feedback-signal-interpretation",
          "kc-sampled-eval-as-metric",
          "kc-production-failure-regression-promotion",
          "kc-evaluator-drift-monitoring"
        ]
      },
      {
        "group_id": "day13-g-governance",
        "name": "Privacy và governance cho telemetry",
        "leaf_kc_ids": [
          "kc-telemetry-retention-access-audit",
          "kc-telemetry-transfer-compliance-assessment"
        ]
      },
      {
        "group_id": "day13-g-incident",
        "name": "Incident diagnosis dựa trên evidence",
        "leaf_kc_ids": [
          "kc-metric-log-trace-triage",
          "kc-converging-root-cause-evidence",
          "kc-blameless-postmortem-actionability"
        ]
      }
    ],
    "knowledge_components": [
      {
        "kc_id": "kc-actionable-alert-contract",
        "group_id": "day13-g-alerts",
        "name": "Viết actionable alert và runbook contract",
        "knowledge": "Actionable alert nêu severity, affected service/feature, current value, threshold/duration, user impact, dashboard/trace link, runbook, mitigation và owner. Responder phải biết first check mà không dựng lại context lúc page.",
        "remediation_target": "Luyện review alert từ context thật của on-call responder.",
        "is_core": true
      },
      {
        "kc_id": "kc-agent-metric-family-contract",
        "group_id": "day13-g-metrics",
        "name": "Phân biệt metric family performance, reliability, cost và quality",
        "knowledge": "Agent metric contract tách performance, reliability, cost và quality. Bốn golden signal gồm latency, traffic, errors, saturation; AI thêm token-priced cost và output quality vì service vẫn available dù đắt hoặc sai.",
        "remediation_target": "Luyện classify measurement và tìm blind spot theo family.",
        "is_core": true
      },
      {
        "kc_id": "kc-agent-metric-instrumentation",
        "group_id": "day13-g-platform",
        "name": "Instrument request, latency và token metric đúng lifecycle point",
        "knowledge": "Request/token counter increment theo outcome đã định nghĩa, latency histogram observe một duration mỗi scoped operation, label bind nhất quán. Vị trí instrument quyết định failure, retry, partial work được count hay bị bỏ.",
        "remediation_target": "Luyện normal, failed, retried và exception request path.",
        "is_core": true
      },
      {
        "kc_id": "kc-agent-runtime-error-taxonomy",
        "group_id": "day13-g-metrics",
        "name": "Phân loại agent runtime failure thành actionable type",
        "knowledge": "Provider failure, timeout, tool execution error, schema-invalid argument, guardrail block, empty response và context overflow có owner/mitigation khác. Typed taxonomy hỗ trợ segment/route; một aggregate error rate thì không.",
        "remediation_target": "Luyện mixed failure có owner/mitigation khác nhau.",
        "is_core": true
      },
      {
        "kc_id": "kc-agent-span-boundary-design",
        "group_id": "day13-g-traces",
        "name": "Đặt span boundary quanh reasoning, retrieval, model và tool work",
        "knowledge": "Agent trace tách root invocation khỏi planning/model generation, retrieval, tool execution và synthesis. Boundary lộ repeated loop và giữ model/tool nào sinh timed outcome; một span cho cả agent che internal path.",
        "remediation_target": "Luyện review span boundary cho RAG và tool-using agent.",
        "is_core": true
      },
      {
        "kc_id": "kc-agent-task-cost-rollup",
        "group_id": "day13-g-costeval",
        "name": "Roll up LLM-call usage thành agent-task và period cost",
        "knowledge": "Một agent task có thể gồm planning, tool-selection, retry, synthesis model call. Call usage phải rollup đúng một lần sang task rồi sang reporting period, giữ input/output direction và áp dụng retry-counting rule rõ ràng.",
        "remediation_target": "Luyện nested call, retry, cached và failed-task accounting.",
        "is_core": true
      },
      {
        "kc_id": "kc-ai-cost-attribution-dimensions",
        "group_id": "day13-g-costeval",
        "name": "Phân bổ AI spend vào accountable dimension",
        "knowledge": "Cost dimension như user, feature, model, tenant, environment, plan trả lời pricing/optimization question khác nhau. Tag phải có trên relevant call hoặc inherit từ trusted request context; missing dimension vào unattributed bucket, không đoán owner.",
        "remediation_target": "Luyện grouped spend có missing/inconsistent/inherited tag.",
        "is_core": true
      },
      {
        "kc_id": "kc-ai-drift-monitoring-contract",
        "group_id": "day13-g-metrics",
        "name": "Tách monitoring cho data drift, concept drift và model drift",
        "knowledge": "Data drift đổi input distribution, concept drift đổi desired input-output relation, model drift đổi provider behavior/version. PSI, divergence hay embedding shift là indicator cần baseline, segment và confirmation, không tự chứng minh degradation.",
        "remediation_target": "Luyện drift case có explanation cạnh tranh và threshold theo thời điểm.",
        "is_core": true
      },
      {
        "kc_id": "kc-ai-observability-failure-model",
        "group_id": "day13-g-foundations",
        "name": "Chuyển AI-specific production failure thành observable question",
        "knowledge": "AI service có thể trả HTTP 200 nhưng answer tệ, tool argument sai, loop, context overflow, token cost tăng hoặc behavior drift. Infrastructure health một mình không chứng minh answer quality, task success hay spend control.",
        "remediation_target": "Luyện chuyển healthy-looking incident thành cặp question-evidence.",
        "is_core": true
      },
      {
        "kc_id": "kc-ai-service-panel-coverage",
        "group_id": "day13-g-dashboard",
        "name": "Bind bộ AI-service panel bắt buộc vào event/field contract rõ",
        "knowledge": "Mỗi required panel cần source event, field, aggregation, unit và threshold rõ. Profile trong slide gộp cost/token và có tool-call success; profile trong lab tách cost/token và bỏ panel đó. Chỉ panel title không chứng minh population/query của profile nào là đúng.",
        "remediation_target": "Luyện audit schema-to-query-to-panel.",
        "is_core": true
      },
      {
        "kc_id": "kc-alert-routing-fatigue-control",
        "group_id": "day13-g-alerts",
        "name": "Route page, warning và ticket để control alert fatigue",
        "knowledge": "Immediate page dành cho urgent action/user impact nặng; degraded condition có thể warning trong giờ làm, minor/slow-burn issue thành ticket. Repeated non-actionable signal cần dedup, suppression hoặc review threshold thay vì thêm notification.",
        "remediation_target": "Luyện mixed-impact condition và repeated noisy alert.",
        "is_core": true
      },
      {
        "kc_id": "kc-application-audit-log-separation",
        "group_id": "day13-g-logs",
        "name": "Tách application log contract và audit log contract",
        "knowledge": "Application log phục vụ debug/performance và có thể sample, retention ngắn hơn. Audit log ghi actor, action, target, time cho compliance/forensics, cần restricted access và integrity/tamper resistance theo policy, không sample như debug evidence.",
        "remediation_target": "Luyện event routing cho request, config change, access, export và failure.",
        "is_core": true
      },
      {
        "kc_id": "kc-async-log-context-isolation",
        "group_id": "day13-g-logs",
        "name": "Isolate structured-log context giữa async request",
        "knowledge": "Execution-context binding có thể enrich mọi event tự động, nhưng async concurrency cần per-request context và clear rõ. Shared mutable hoặc thread-local assumption có thể trộn user, feature, correlation metadata giữa interleaved task.",
        "remediation_target": "Luyện interleaved-task test bắt missing/leaked context.",
        "is_core": true
      },
      {
        "kc_id": "kc-blameless-postmortem-actionability",
        "group_id": "day13-g-incident",
        "name": "Viết blameless postmortem có evidence và corrective action",
        "knowledge": "Postmortem ghi timeline, impact, detection/recovery interval, verified cause, điều giúp hoặc làm chậm response và corrective action. Nó cải thiện system, không gọi một người là cause.",
        "remediation_target": "Luyện postmortem tách cause, enabling condition và corrective action.",
        "is_core": true
      },
      {
        "kc_id": "kc-collector-signal-fanout",
        "group_id": "day13-g-platform",
        "name": "Route metrics, logs và traces qua collector fan-out",
        "knowledge": "Telemetry collector decouple app emission khỏi storage/visualization: metrics tới metric backend, logs tới log store, traces tới trace backend, LLM traces tới specialized UI. Routing phải giữ correlation, tránh double-count/drop âm thầm.",
        "remediation_target": "Luyện routing table và failure case nhiều destination.",
        "is_core": true
      },
      {
        "kc_id": "kc-converging-root-cause-evidence",
        "group_id": "day13-g-incident",
        "name": "Phân biệt anomalous span với verified root cause",
        "knowledge": "Slow/failed span là observation, chưa tự là root cause. Verification cần timing, log, config/change evidence hội tụ, so baseline và fix/rollback có predicted metric improvement không contradicted signal.",
        "remediation_target": "Luyện incident có false lead thuyết phục và verification sau remediation.",
        "is_core": true
      },
      {
        "kc_id": "kc-correlation-id-request-lifecycle",
        "group_id": "day13-g-logs",
        "name": "Tạo, propagate, expose và clear request correlation identity",
        "knowledge": "Request boundary validate hoặc generate một correlation ID, bind trước request event, propagate qua downstream call, trả trong response metadata và clear execution context trước reuse. ID nối evidence nhưng không thay trace/span identity.",
        "remediation_target": "Luyện missing/supplied header, downstream call, exception và concurrent request.",
        "is_core": true
      },
      {
        "kc_id": "kc-dashboard-as-code-reproducibility",
        "group_id": "day13-g-dashboard",
        "name": "Version và validate dashboard-as-code",
        "knowledge": "Dashboard JSON/YAML trong version control làm panel definition review/reproduce được. Validation bắt field thiếu như query/threshold; runtime screenshot/data check verify rendering/behavior mà schema validation không chứng minh.",
        "remediation_target": "Luyện missing query, missing threshold, empty data và reproducible rebuild.",
        "is_core": true
      },
      {
        "kc_id": "kc-dashboard-operational-context",
        "group_id": "day13-g-dashboard",
        "name": "Làm dashboard panel hiểu được trong một operational glance",
        "knowledge": "Ops panel hữu ích có default time range có bound, unit rõ, baseline/objective line, refresh phù hợp và panel set đủ nhỏ để locate problem nhanh. Contract validation không thay human readability check.",
        "remediation_target": "Luyện review status/anomaly trong ba mươi giây.",
        "is_core": true
      },
      {
        "kc_id": "kc-dashboard-panel-form-selection",
        "group_id": "day13-g-dashboard",
        "name": "Chọn panel form từ analytical task",
        "knowledge": "Time series lộ change theo time, single-value stat tóm current state, heatmap cho distribution theo time, table hỗ trợ top-N/categorical breakdown. Visual form theo comparison/distribution cần, không theo aesthetic preference.",
        "remediation_target": "Luyện match trend/current-state/distribution/breakdown question với panel form.",
        "is_core": true
      },
      {
        "kc_id": "kc-error-budget-calculation",
        "group_id": "day13-g-alerts",
        "name": "Tính allowed unreliability từ SLO window",
        "knowledge": "Error budget chuyển SLO thành allowed bad-event fraction hoặc downtime trong window đã nêu. Calculation phụ thuộc eligible population, objective, window; không copy monthly table khi service contract khác.",
        "remediation_target": "Luyện time-based/event-based budget ở nhiều window.",
        "is_core": true
      },
      {
        "kc_id": "kc-evaluator-drift-monitoring",
        "group_id": "day13-g-costeval",
        "name": "Phát hiện evaluator drift bằng score distribution và human gold set",
        "knowledge": "LLM judge có thể đổi theo model hoặc version update. Theo dõi score distribution giúp thấy population shift; so định kỳ trên human-scored gold set kiểm tra chính evaluator có đổi hay không thay vì agent được chấm.",
        "remediation_target": "Luyện comparison tách evaluator change khỏi agent-quality change.",
        "is_core": true
      },
      {
        "kc_id": "kc-genai-trace-semantic-contract",
        "group_id": "day13-g-traces",
        "name": "Map agent operation vào GenAI trace semantic contract có version",
        "knowledge": "GenAI trace attribute tách operation, provider, requested model, input/output token usage, finish reason và tool name. Vì convention trong nguồn experimental, capability bền vững là giữ internal meaning, version mapping rõ và compatibility test, không học thuộc spelling hiện tại.",
        "remediation_target": "Luyện convention migration có semantic-equivalence check.",
        "is_core": true
      },
      {
        "kc_id": "kc-hallucination-multisignal-detection",
        "group_id": "day13-g-metrics",
        "name": "Phát hiện hallucination risk bằng evidence bổ sung nhau",
        "knowledge": "Không một production metric nào tự chứng minh hallucination. Groundedness check so claim với retrieved context, entity check verify tên/số quan trọng với system of record, self-consistency lộ generation mâu thuẫn, user behavior cho confirmation trễ.",
        "remediation_target": "Luyện evidence groundedness/entity/consistency/feedback xung đột.",
        "is_core": true
      },
      {
        "kc_id": "kc-human-feedback-signal-interpretation",
        "group_id": "day13-g-costeval",
        "name": "Diễn giải explicit và implicit user feedback mà không coi là truth",
        "knowledge": "Explicit rating/comment rõ nhưng sparse và self-selected. Regenerate, rephrase, copy, abandon, human escalation thường nhiều hơn nhưng ambiguous. Cả hai cần link request context và interpret cùng bias/alternative explanation.",
        "remediation_target": "Luyện ambiguous behavior có competing product explanation.",
        "is_core": true
      },
      {
        "kc_id": "kc-latency-percentile-ttft-interpretation",
        "group_id": "day13-g-metrics",
        "name": "Diễn giải latency percentile và time to first token",
        "knowledge": "P50 mô tả median request, P95/P99 lộ tail ngày càng chậm mà average có thể che. TTFT đo lúc user bắt đầu nhận response, còn end-to-end latency đo task completion; reasoning mode/workload class không nên trộn mù quáng.",
        "remediation_target": "Luyện distribution và streaming case có objective đối lập.",
        "is_core": true
      },
      {
        "kc_id": "kc-layered-dashboard-audience-design",
        "group_id": "day13-g-dashboard",
        "name": "Thiết kế dashboard layer overview, detail và drill-down",
        "knowledge": "Overview trả lời leadership về health/key alert, detail hỗ trợ engineering so latency/error/cost/quality, drill-down link tới request trace/log. Không audience nào nên bị buộc đọc evidence level của audience khác.",
        "remediation_target": "Luyện dashboard information architecture từ audience question.",
        "is_core": true
      },
      {
        "kc_id": "kc-llm-call-event-fields",
        "group_id": "day13-g-logs",
        "name": "Chọn field decision-ready cho LLM-call event",
        "knowledge": "LLM-call event nhận diện request correlation, provider/model/version, prompt-template identity, input/output token, latency/TTFT, sanitized tool outcome, finish reason, cost, optional eval score và typed error. Không cần raw prompt để event hữu ích.",
        "remediation_target": "Luyện field minimization theo investigation question.",
        "is_core": true
      },
      {
        "kc_id": "kc-log-level-severity-semantics",
        "group_id": "day13-g-logs",
        "name": "Gán log level theo operational meaning",
        "knowledge": "DEBUG là diagnostic detail tạm thời, INFO ghi normal milestone, WARN ghi degraded nhưng còn chạy, ERROR ghi failed work cần attention. Level theo operational state, không theo cảm giác message quan trọng hay developer preference.",
        "remediation_target": "Luyện normal, degraded, recovered và failed path.",
        "is_core": true
      },
      {
        "kc_id": "kc-metric-label-cardinality-control",
        "group_id": "day13-g-platform",
        "name": "Kiểm soát time-series growth từ metric label cardinality",
        "knowledge": "Mỗi tổ hợp label-value unique tạo một time series. Label bounded như model, status, direction, tool có thể giúp segment; user, request, session, raw prompt identifier thuộc logs/traces. Phải estimate series growth trước rollout.",
        "remediation_target": "Luyện series calculation và placement metric-versus-log.",
        "is_core": true
      },
      {
        "kc_id": "kc-metric-log-trace-triage",
        "group_id": "day13-g-incident",
        "name": "Thu hẹp incident từ metrics sang logs sang traces",
        "knowledge": "Metrics locate affected time window/symptom, structured logs chọn concrete request bằng filter/correlation, traces locate anomalous step trong request đó. Mỗi stage giảm search space cho stage sau.",
        "remediation_target": "Luyện incident dataset có normal/affected request xen kẽ.",
        "is_core": true
      },
      {
        "kc_id": "kc-monitoring-observability-boundary",
        "group_id": "day13-g-foundations",
        "name": "Phân biệt monitoring và observability theo câu hỏi chúng trả lời",
        "knowledge": "Monitoring theo dõi indicator/alert đã định nghĩa cho condition dự kiến. Observability là thuộc tính hệ thống phát telemetry đủ giàu để điều tra câu hỏi mới và unknown failure mà không phải thêm instrumentation cho từng câu hỏi.",
        "remediation_target": "Luyện cặp scenario known-condition và novel diagnosis.",
        "is_core": true
      },
      {
        "kc_id": "kc-multiwindow-burn-rate-alert",
        "group_id": "day13-g-alerts",
        "name": "Kết hợp short/long window cho error-budget burn alert",
        "knowledge": "Burn rate đo tốc độ tiêu error budget so với SLO allowance. Yêu cầu đồng thời short responsive window và long confirmation window giúp detect sustained severe burn, filter noise ngắn; rate/window là policy input, không universal constant.",
        "remediation_target": "Luyện paired-window calculation quanh threshold.",
        "is_core": true
      },
      {
        "kc_id": "kc-observability-feedback-loop",
        "group_id": "day13-g-foundations",
        "name": "Vận hành observability như feedback loop observe-analyze-act",
        "knowledge": "Telemetry hỗ trợ control loop: observe behavior, compare với objective, act để mitigate/improve rồi verify state mới. Detection time và recovery time là hai khoảng khác nhau, cần evidence và cải tiến khác nhau.",
        "remediation_target": "Luyện timeline tách detection delay và recovery delay.",
        "is_core": true
      },
      {
        "kc_id": "kc-observability-stack-constraint-fit",
        "group_id": "day13-g-platform",
        "name": "Chọn observability stack theo signal, team, budget và data constraint",
        "knowledge": "Stack choice theo required signal, infra sẵn có, operating skill, scale, budget, residency, compliance và exit path. LLM-native tool bổ sung chứ không tự thay metrics/log infra; không product nào best khi thiếu constraint.",
        "remediation_target": "Luyện architecture decision với cost/privacy/staffing conflict.",
        "is_core": true
      },
      {
        "kc_id": "kc-oncall-severity-escalation",
        "group_id": "day13-g-alerts",
        "name": "Định nghĩa on-call severity và escalation từ impact",
        "knowledge": "Severity map user/business impact sang response urgency/channel. Primary responder, secondary, lead escalation path ngăn incident bị stall; MTTD/MTTR vẫn là outcome measure riêng.",
        "remediation_target": "Luyện impact-based routing trong normal hour và on-call period.",
        "is_core": true
      },
      {
        "kc_id": "kc-online-eval-fourth-pillar",
        "group_id": "day13-g-foundations",
        "name": "Nhận ra khi service telemetry chưa chứng minh được chất lượng output AI",
        "knowledge": "Metrics, logs và traces không chứng minh generated output còn đúng/hữu ích. Sampled online evaluation bổ sung production quality signal; nó bổ sung chứ không thay offline benchmark trước release.",
        "remediation_target": "Luyện case operational health và output quality không đồng thuận.",
        "is_core": true
      },
      {
        "kc_id": "kc-online-offline-eval-separation",
        "group_id": "day13-g-costeval",
        "name": "Tách online production eval khỏi offline release eval",
        "knowledge": "Offline eval dùng fixed test set/expected answer trước release để detect regression. Online eval sample traffic production không đủ ground truth để detect deterioration/drift. Mỗi loại trả lời timing/evidence question khác.",
        "remediation_target": "Luyện eval choice cho regression, drift và unseen traffic.",
        "is_core": true
      },
      {
        "kc_id": "kc-otel-vendor-neutral-export",
        "group_id": "day13-g-traces",
        "name": "Tách instrumentation khỏi telemetry backend bằng OpenTelemetry",
        "knowledge": "Application instrumentation emit telemetry qua vendor-neutral SDK và collector boundary. Collector transform/fan-out metrics, logs, traces tới backend chuyên biệt, cho phép đổi backend không viết lại business instrumentation.",
        "remediation_target": "Luyện diagram backend swap và multi-destination routing.",
        "is_core": true
      },
      {
        "kc_id": "kc-outcome-aware-telemetry-sampling",
        "group_id": "day13-g-logs",
        "name": "Kiểm soát log volume mà không bỏ rare hoặc severe event",
        "knowledge": "Log sampling giảm normal-event volume nhưng vẫn giữ evidence cần cho diagnosis. Có thể giữ error/warning, sample routine INFO/DEBUG và dùng bounded reservoir hoặc rule riêng cho slow/high-cost outlier.",
        "remediation_target": "Luyện log policy với normal traffic, rare error, tail latency và cost outlier.",
        "is_core": true
      },
      {
        "kc_id": "kc-pii-redaction-before-emission",
        "group_id": "day13-g-logs",
        "name": "Redact hoặc transform PII trước khi emit telemetry",
        "knowledge": "Sensitive value phải detect rồi mask, tokenize, hash hoặc omit trước JSON render, buffer, export hay sampling. Regex cover fixed pattern, entity recognition cover contextual data, local identifier cần locale-specific test; hash low-entropy vẫn có thể đoán ngược.",
        "remediation_target": "Luyện seeded email, SĐT Việt Nam, identity number, card, tool-argument và error path.",
        "is_core": true
      },
      {
        "kc_id": "kc-production-failure-regression-promotion",
        "group_id": "day13-g-costeval",
        "name": "Đưa production quality failure thành regression case",
        "knowledge": "Low-rated hoặc low-scored production answer là candidate cho future regression set. Quyết định promote giữ failed example cùng feedback/evaluator evidence để đo lại sau khi đổi prompt/model; không biến mọi negative interaction thành training data ngay.",
        "remediation_target": "Luyện chọn production case có thể lộ lại cùng regression sau này.",
        "is_core": true
      },
      {
        "kc_id": "kc-production-quality-signal-pyramid",
        "group_id": "day13-g-metrics",
        "name": "Layer production quality signal theo cost, speed và evidence strength",
        "knowledge": "Format/safety/PII heuristic rẻ và nhanh; model judge thêm semantic coverage; explicit/implicit user signal thêm behavioral evidence; business outcome mạnh nhưng trễ và confounded. Không layer nào đủ một mình.",
        "remediation_target": "Luyện ghép early-warning signal với confirmation chậm hơn.",
        "is_core": true
      },
      {
        "kc_id": "kc-prometheus-metric-type-selection",
        "group_id": "day13-g-platform",
        "name": "Chọn counter, gauge hoặc histogram theo behavior của metric",
        "knowledge": "Counter tích lũy monotonic event, gauge biểu diễn value tăng/giảm, histogram bucket distribution để estimate percentile. Type theo update semantics và query, không theo visual panel chọn sau.",
        "remediation_target": "Luyện classify request, error, token, active-work, queue, eval-score và latency.",
        "is_core": true
      },
      {
        "kc_id": "kc-prompt-version-traceability",
        "group_id": "day13-g-traces",
        "name": "Nối mỗi request với resolved prompt version và chứng minh rollback",
        "knowledge": "Prompt name, label, immutable version, source và managed-prompt link làm request reproducible. Managed fetch fail phải hiển thị rõ local/fallback thay vì giả managed version; đổi label rồi rollback cần before/after trace evidence.",
        "remediation_target": "Luyện managed success, missing credential, fetch failure, label change và rollback.",
        "is_core": true
      },
      {
        "kc_id": "kc-red-use-view-selection",
        "group_id": "day13-g-metrics",
        "name": "Dùng RED cho request symptom và USE cho resource diagnosis",
        "knowledge": "RED đo request Rate, Errors, Duration trên user-facing path. USE đo resource Utilization, Saturation, Errors. RED phát hiện service symptom; USE test resource cause candidate nhưng resource metric không tự là user outcome.",
        "remediation_target": "Luyện symptom-to-resource hypothesis có counterexample.",
        "is_core": true
      },
      {
        "kc_id": "kc-retrieval-metric-contract",
        "group_id": "day13-g-metrics",
        "name": "Định nghĩa retrieval availability, relevance và latency metric",
        "knowledge": "RAG observability tách empty-result rate, retrieval latency, chunk relevance và quality proxy như recall@k. Có result không đồng nghĩa relevance; proxy không phải ground truth nếu chưa định nghĩa reference set.",
        "remediation_target": "Luyện retrieval case tách availability khỏi usefulness.",
        "is_core": true
      },
      {
        "kc_id": "kc-sampled-eval-as-metric",
        "group_id": "day13-g-costeval",
        "name": "Biến sampled production eval thành monitored metric",
        "knowledge": "Traffic sample có định nghĩa được chấm bằng judge/evaluator có tên, aggregate thành quality distribution/gauge, display cùng population/version context và chỉ alert theo deterioration rule có justification. Eval cost làm sampling thành explicit decision.",
        "remediation_target": "Luyện stratified sample, version change và cost bound.",
        "is_core": true
      },
      {
        "kc_id": "kc-sli-slo-sla-contract",
        "group_id": "day13-g-alerts",
        "name": "Tách SLI measurement, SLO target và SLA commitment",
        "knowledge": "SLI định nghĩa measured good/eligible event trên population, SLO đặt internal target theo window, SLA là external commitment có consequence rõ. Bare percentage thiếu scope/window chưa là contract hoàn chỉnh.",
        "remediation_target": "Luyện reliability statement thiếu và xung đột.",
        "is_core": true
      },
      {
        "kc_id": "kc-stakeholder-metric-selection",
        "group_id": "day13-g-metrics",
        "name": "Chọn metric từ stakeholder decision",
        "knowledge": "Engineering cần diagnostic system health, product cần experience/task outcome, finance cần attributable cost, leadership cần view ngắn về value/reliability. Cùng raw telemetry có thể sinh derived metric khác nhưng mỗi metric phải trả lời owner decision.",
        "remediation_target": "Luyện dịch business/technical question thành metric contract.",
        "is_core": true
      },
      {
        "kc_id": "kc-structured-event-schema",
        "group_id": "day13-g-logs",
        "name": "Thiết kế structured event schema ổn định",
        "knowledge": "Structured log serialize field typed ổn định để filter, aggregate, validate và join event. Core tier mang timestamp, level, service, event, correlation identity; context và event-specific payload mở rộng mà không biến record thành free text.",
        "remediation_target": "Luyện schema change với filter/aggregate/join query cụ thể.",
        "is_core": true
      },
      {
        "kc_id": "kc-symptom-cause-alert-separation",
        "group_id": "day13-g-alerts",
        "name": "Page theo user-visible symptom, dùng cause để diagnosis",
        "knowledge": "Paging signal nên biểu diễn user-visible latency, error, availability hoặc quality impact. CPU, cache miss và candidate cause khác hỗ trợ diagnosis nhưng noisy, không nên wake responder nếu chưa gắn actionable policy.",
        "remediation_target": "Luyện tách wake-up signal khỏi investigation signal.",
        "is_core": true
      },
      {
        "kc_id": "kc-tail-latency-compounding",
        "group_id": "day13-g-metrics",
        "name": "Lập luận tail-event probability qua interaction nhiều bước",
        "knowledge": "Tail probability nhỏ ở từng turn/step sẽ compound qua repeated turn và multi-step agent workflow. Vì vậy không thể suy end-to-end exposure chỉ từ P99 của một component; phải nêu event definition và independence assumption.",
        "remediation_target": "Luyện probability theo session/pipeline với assumption rõ.",
        "is_core": true
      },
      {
        "kc_id": "kc-telemetry-payload-minimization",
        "group_id": "day13-g-logs",
        "name": "Minimize log/trace payload ngay lúc collect",
        "knowledge": "Telemetry nên capture identifier, length, summary, outcome và approved field cần cho operation, đồng thời loại secret, raw personal data, full prompt/response không cần. Content-capture default là privacy boundary, không phải storage cleanup về sau.",
        "remediation_target": "Luyện minimum-evidence design cho debugging, cost, quality và security.",
        "is_core": true
      },
      {
        "kc_id": "kc-telemetry-pillar-question-selection",
        "group_id": "day13-g-foundations",
        "name": "Chọn metrics, logs và traces từ investigation question",
        "knowledge": "Metrics cho aggregate rate/trend, logs giữ event chi tiết, traces nối timed work trong một request. Combination tối thiểu phụ thuộc câu hỏi về fleet trend, individual event hay end-to-end path/bottleneck.",
        "remediation_target": "Luyện map question sang evidence trong collection cost có bound.",
        "is_core": true
      },
      {
        "kc_id": "kc-telemetry-retention-access-audit",
        "group_id": "day13-g-governance",
        "name": "Đặt retention, access, deletion và access-audit control cho telemetry",
        "knowledge": "Retention theo data class/operational purpose: detailed trace có thể sống ngắn hơn aggregate metric. Role/need giới hạn ai xem user-linked telemetry, access cũng được audit, deletion/access request phải support khi policy yêu cầu.",
        "remediation_target": "Luyện inventory raw trace, redacted log, aggregate metric và audit record.",
        "is_core": true
      },
      {
        "kc_id": "kc-telemetry-transfer-compliance-assessment",
        "group_id": "day13-g-governance",
        "name": "Xác định processor và cross-border compliance question cho telemetry",
        "knowledge": "Log/trace có thể chứa personal data và export sang external processor/foreign region. Trước export, architecture review cần xác định data category, purpose, processor, region, legal basis, impact-assessment/incident obligation và câu hỏi cần legal review hiện hành.",
        "remediation_target": "Luyện data-flow review có unresolved legal question rõ.",
        "is_core": true
      },
      {
        "kc_id": "kc-tool-call-metric-contract",
        "group_id": "day13-g-metrics",
        "name": "Định nghĩa tool-call outcome và loop metric",
        "knowledge": "Tool observability tách call success, timeout, schema-invalid argument, invented argument, repeated call và latency. Outcome cần denominator typed và tool identity để HTTP request khỏe không che failed/looping agent action.",
        "remediation_target": "Luyện typed tool outcome và loop definition.",
        "is_core": true
      },
      {
        "kc_id": "kc-trace-bottleneck-pattern-diagnosis",
        "group_id": "day13-g-traces",
        "name": "Chẩn đoán serial, waiting, repeated-call và retry pattern từ trace",
        "knowledge": "Trace topology tách sequential dependency, external waiting dài, repeated short call có thể batch và retry storm. Remediation theo pattern: safe parallelization, timeout/cache, batching hoặc bounded backoff/circuit breaker.",
        "remediation_target": "Luyện dependency-aware diagnosis có false lead hợp lý.",
        "is_core": true
      },
      {
        "kc_id": "kc-trace-sampling-outcome-policy",
        "group_id": "day13-g-traces",
        "name": "Giữ diagnostic trace bằng outcome-aware sampling",
        "knowledge": "Trace head sampling rẻ vì quyết định lúc request bắt đầu nhưng có thể bỏ later error/latency outlier. Tail sampling buffer tới completion để giữ failed/slow trace, đổi lại memory/processing cost cao hơn.",
        "remediation_target": "Luyện trade-off rare error, latency outlier và normal volume.",
        "is_core": true
      },
      {
        "kc_id": "kc-trace-span-context-model",
        "group_id": "day13-g-traces",
        "name": "Mô hình một operation bằng trace, span và propagated context",
        "knowledge": "Trace biểu diễn end-to-end operation; span biểu diễn timed work unit có ID, parentage, attribute, status, event, link. Context propagation mang trace identity qua HTTP, queue, service, tool để operation còn nối liền.",
        "remediation_target": "Luyện synchronous, parallel, queued và retried workflow.",
        "is_core": true
      }
    ],
    "questions": [
      {
        "servable": true,
        "role": "initial_check",
        "hints": [
          {
            "text": "Đối chiếu các lựa chọn với: Predefined indicator, Known failure mode.",
            "hint_id": "h1",
            "after_attempt": 1
          }
        ],
        "module_id": "day13-g-foundations",
        "max_points": 1,
        "interaction": {
          "type": "single_select",
          "prompt": "Bối cảnh:\nDashboard đã alert khi error rate \u003E5%. Hôm nay user báo một kiểu sai mới nhưng mọi threshold đã biết đều xanh.\n\nCâu hỏi:\nCách tiếp cận nào đúng với câu hỏi mới?",
          "choices": [
            {
              "text": "Điều tra câu hỏi mới từ telemetry",
              "choice_id": "a"
            },
            {
              "text": "Thêm một threshold error rate khác rồi gọi đó là observability",
              "choice_id": "b"
            },
            {
              "text": "Bỏ toàn bộ monitoring vì nó chỉ trả lời known failures",
              "choice_id": "c"
            },
            {
              "text": "Đổi sang vendor observability khác mà không đổi evidence",
              "choice_id": "d"
            }
          ],
          "presentation_policy": {
            "shuffle_at_delivery": true,
            "do_not_expose_choice_ids": true
          },
          "prompt_presentation": {
            "format": "sectioned_plain_text",
            "preserve_line_breaks": true
          }
        },
        "question_id": "d13-q001",
        "primary_kc_id": "kc-monitoring-observability-boundary",
        "grading_method": "deterministic",
        "question_version": 3,
        "cognitive_operation": "Analyze",
        "contributing_kc_ids": [],
        "estimated_difficulty": "medium"
      },
      {
        "servable": false,
        "role": "reassessment",
        "hints": [
          {
            "text": "Bắt đầu từ observable outcome rồi lần lượt kiểm tra Predefined indicator, Known failure mode.",
            "hint_id": "h1",
            "after_attempt": 1
          }
        ],
        "module_id": "day13-g-foundations",
        "max_points": 3,
        "interaction": {
          "type": "short_text",
          "prompt": "Bối cảnh:\nMột job định kỳ có điều kiện “queue depth \u003E100” và một incident lạ “chỉ tenant A bị sai output khi dùng tool X”.\n\nCâu hỏi:\nPhân loại phần nào là monitoring, phần nào là observability và nêu signal còn thiếu cho incident lạ.",
          "prompt_presentation": {
            "format": "sectioned_plain_text",
            "preserve_line_breaks": true
          }
        },
        "question_id": "d13-q002",
        "primary_kc_id": "kc-monitoring-observability-boundary",
        "grading_method": "criterion_rubric",
        "question_version": 3,
        "cognitive_operation": "Analyze",
        "contributing_kc_ids": [],
        "estimated_difficulty": "medium"
      },
      {
        "servable": true,
        "role": "follow_up",
        "hints": [
          {
            "text": "Tool đang cung cấp capability gì ngoài predefined checks?",
            "hint_id": "h1",
            "after_attempt": 1
          }
        ],
        "module_id": "day13-g-foundations",
        "max_points": 1,
        "interaction": {
          "type": "single_select",
          "prompt": "Bối cảnh:\nTeam mua một observability SaaS nhưng chỉ cấu hình ba threshold cố định.\n\nCâu hỏi:\nViệc mua tool đã tự tạo observability chưa?",
          "choices": [
            {
              "text": "Chưa; cần telemetry đủ giàu để hỏi câu mới",
              "choice_id": "a"
            },
            {
              "text": "Rồi; tên sản phẩm quyết định thuộc tính hệ thống",
              "choice_id": "b"
            },
            {
              "text": "Rồi nếu dashboard đẹp",
              "choice_id": "c"
            },
            {
              "text": "Chưa vì monitoring luôn vô dụng",
              "choice_id": "d"
            }
          ],
          "presentation_policy": {
            "shuffle_at_delivery": true,
            "do_not_expose_choice_ids": true
          },
          "prompt_presentation": {
            "format": "sectioned_plain_text",
            "preserve_line_breaks": true
          }
        },
        "question_id": "d13-q003",
        "primary_kc_id": "kc-monitoring-observability-boundary",
        "grading_method": "deterministic",
        "question_version": 3,
        "cognitive_operation": "Analyze",
        "contributing_kc_ids": [],
        "estimated_difficulty": "easy"
      },
      {
        "servable": true,
        "role": "initial_check",
        "hints": [
          {
            "text": "Đối chiếu các lựa chọn với: Correctness dù status success, Work tính tiền theo token.",
            "hint_id": "h1",
            "after_attempt": 1
          }
        ],
        "module_id": "day13-g-foundations",
        "max_points": 1,
        "interaction": {
          "type": "single_select",
          "prompt": "Bối cảnh:\nAPI trả 200, P95 ổn và CPU thấp nhưng chi phí tăng gấp ba, tool-call success chỉ 60% và câu trả lời bắt đầu bịa.\n\nCâu hỏi:\nKết luận nào đầy đủ nhất?",
          "choices": [
            {
              "text": "HTTP 200 và CPU thấp chứng minh agent khỏe",
              "choice_id": "a"
            },
            {
              "text": "Chỉ latency đủ đại diện mọi failure của AI service",
              "choice_id": "b"
            },
            {
              "text": "Tăng log level sẽ tự phát hiện hallucination",
              "choice_id": "c"
            },
            {
              "text": "Cần signal riêng cho cost, tool và quality",
              "choice_id": "d"
            }
          ],
          "presentation_policy": {
            "shuffle_at_delivery": true,
            "do_not_expose_choice_ids": true
          },
          "prompt_presentation": {
            "format": "sectioned_plain_text",
            "preserve_line_breaks": true
          }
        },
        "question_id": "d13-q004",
        "primary_kc_id": "kc-ai-observability-failure-model",
        "grading_method": "deterministic",
        "question_version": 3,
        "cognitive_operation": "Analyze",
        "contributing_kc_ids": [],
        "estimated_difficulty": "medium"
      },
      {
        "servable": false,
        "role": "reassessment",
        "hints": [
          {
            "text": "Bắt đầu từ observable outcome rồi lần lượt kiểm tra Correctness dù status success, Work tính tiền theo token.",
            "hint_id": "h1",
            "after_attempt": 1
          }
        ],
        "module_id": "day13-g-foundations",
        "max_points": 3,
        "interaction": {
          "type": "short_text",
          "prompt": "Bối cảnh:\nMột agent production có error rate 0%, nhưng user regenerate tăng và retrieval empty-result tăng sau khi đổi corpus.\n\nCâu hỏi:\nViết ba observable question và evidence để phân biệt quality, retrieval và cost/runtime failure.",
          "prompt_presentation": {
            "format": "sectioned_plain_text",
            "preserve_line_breaks": true
          }
        },
        "question_id": "d13-q005",
        "primary_kc_id": "kc-ai-observability-failure-model",
        "grading_method": "criterion_rubric",
        "question_version": 3,
        "cognitive_operation": "Analyze",
        "contributing_kc_ids": [],
        "estimated_difficulty": "hard"
      },
      {
        "servable": true,
        "role": "initial_check",
        "hints": [
          {
            "text": "Đối chiếu các lựa chọn với: Observe-analyze-act, So với objective.",
            "hint_id": "h1",
            "after_attempt": 1
          }
        ],
        "module_id": "day13-g-foundations",
        "max_points": 1,
        "interaction": {
          "type": "single_select",
          "prompt": "Bối cảnh:\nIncident bắt đầu 09:00, alert lúc 09:08, mitigation hoàn tất 09:38.\n\nCâu hỏi:\nMTTD và MTTR nào đúng nếu MTTR tính từ detection tới recovery?",
          "choices": [
            {
              "text": "MTTD 30 phút; MTTR 38 phút",
              "choice_id": "a"
            },
            {
              "text": "Cả hai đều 38 phút",
              "choice_id": "b"
            },
            {
              "text": "MTTD 8 phút; MTTR 30 phút",
              "choice_id": "c"
            },
            {
              "text": "MTTD 38 phút; MTTR 8 phút",
              "choice_id": "d"
            }
          ],
          "presentation_policy": {
            "shuffle_at_delivery": true,
            "do_not_expose_choice_ids": true
          },
          "prompt_presentation": {
            "format": "sectioned_plain_text",
            "preserve_line_breaks": true
          }
        },
        "question_id": "d13-q006",
        "primary_kc_id": "kc-observability-feedback-loop",
        "grading_method": "deterministic",
        "question_version": 3,
        "cognitive_operation": "Apply",
        "contributing_kc_ids": [],
        "estimated_difficulty": "easy"
      },
      {
        "servable": false,
        "role": "reassessment",
        "hints": [
          {
            "text": "Bắt đầu từ observable outcome rồi lần lượt kiểm tra Observe-analyze-act, So với objective.",
            "hint_id": "h1",
            "after_attempt": 1
          }
        ],
        "module_id": "day13-g-foundations",
        "max_points": 4,
        "interaction": {
          "type": "short_text",
          "prompt": "Bối cảnh:\nMột alert giúp giảm detection từ 20 xuống 4 phút nhưng fix vẫn mất 50 phút; sau action, team chỉ xem dashboard một lần.\n\nCâu hỏi:\nĐánh giá stage yếu và thiết kế observation tiếp theo.",
          "prompt_presentation": {
            "format": "sectioned_plain_text",
            "preserve_line_breaks": true
          }
        },
        "question_id": "d13-q007",
        "primary_kc_id": "kc-observability-feedback-loop",
        "grading_method": "criterion_rubric",
        "question_version": 3,
        "cognitive_operation": "Evaluate",
        "contributing_kc_ids": [],
        "estimated_difficulty": "medium"
      },
      {
        "servable": true,
        "role": "initial_check",
        "hints": [
          {
            "text": "Đối chiếu các lựa chọn với: Aggregate metric, Detailed event log.",
            "hint_id": "h1",
            "after_attempt": 1
          }
        ],
        "module_id": "day13-g-foundations",
        "max_points": 1,
        "interaction": {
          "type": "single_select",
          "prompt": "Bối cảnh:\nCâu hỏi là “request req-42 chậm ở bước model hay retrieval, và payload nào gây lỗi?”.\n\nCâu hỏi:\nBộ signal tối thiểu phù hợp?",
          "choices": [
            {
              "text": "Chỉ thumbs-up của user",
              "choice_id": "a"
            },
            {
              "text": "Trace + correlated log",
              "choice_id": "b"
            },
            {
              "text": "Chỉ counter tổng request",
              "choice_id": "c"
            },
            {
              "text": "Chỉ CPU host",
              "choice_id": "d"
            }
          ],
          "presentation_policy": {
            "shuffle_at_delivery": true,
            "do_not_expose_choice_ids": true
          },
          "prompt_presentation": {
            "format": "sectioned_plain_text",
            "preserve_line_breaks": true
          }
        },
        "question_id": "d13-q008",
        "primary_kc_id": "kc-telemetry-pillar-question-selection",
        "grading_method": "deterministic",
        "question_version": 3,
        "cognitive_operation": "Analyze",
        "contributing_kc_ids": [],
        "estimated_difficulty": "medium"
      },
      {
        "servable": false,
        "role": "reassessment",
        "hints": [
          {
            "text": "Bắt đầu từ observable outcome rồi lần lượt kiểm tra Aggregate metric, Detailed event log.",
            "hint_id": "h1",
            "after_attempt": 1
          }
        ],
        "module_id": "day13-g-foundations",
        "max_points": 3,
        "interaction": {
          "type": "short_text",
          "prompt": "Bối cảnh:\nError rate tăng lúc 10:00; cần biết cohort nào bị ảnh hưởng, request nào lỗi và dependency nào tạo critical path.\n\nCâu hỏi:\nChọn pillar cho từng bước điều tra và nói điều mỗi pillar chưa chứng minh.",
          "prompt_presentation": {
            "format": "sectioned_plain_text",
            "preserve_line_breaks": true
          }
        },
        "question_id": "d13-q009",
        "primary_kc_id": "kc-telemetry-pillar-question-selection",
        "grading_method": "criterion_rubric",
        "question_version": 3,
        "cognitive_operation": "Analyze",
        "contributing_kc_ids": [],
        "estimated_difficulty": "hard"
      },
      {
        "servable": true,
        "role": "initial_check",
        "hints": [
          {
            "text": "Đối chiếu các lựa chọn với: HTTP success khác correctness, Output quality chưa chứng minh.",
            "hint_id": "h1",
            "after_attempt": 1
          }
        ],
        "module_id": "day13-g-foundations",
        "max_points": 1,
        "interaction": {
          "type": "single_select",
          "prompt": "Bối cảnh:\nLatency, traffic, error và saturation đều tốt; 20% câu trả lời lại trái policy source.\n\nCâu hỏi:\nSignal nào trực tiếp lấp khoảng trống?",
          "choices": [
            {
              "text": "Sampled online quality evaluation",
              "choice_id": "a"
            },
            {
              "text": "Thêm host uptime",
              "choice_id": "b"
            },
            {
              "text": "Tăng log retention nhưng không chấm output",
              "choice_id": "c"
            },
            {
              "text": "Chỉ theo dõi HTTP status",
              "choice_id": "d"
            }
          ],
          "presentation_policy": {
            "shuffle_at_delivery": true,
            "do_not_expose_choice_ids": true
          },
          "prompt_presentation": {
            "format": "sectioned_plain_text",
            "preserve_line_breaks": true
          }
        },
        "question_id": "d13-q010",
        "primary_kc_id": "kc-online-eval-fourth-pillar",
        "grading_method": "deterministic",
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
            "text": "Bắt đầu từ observable outcome rồi lần lượt kiểm tra HTTP success khác correctness, Output quality chưa chứng minh.",
            "hint_id": "h1",
            "after_attempt": 1
          }
        ],
        "module_id": "day13-g-foundations",
        "max_points": 4,
        "interaction": {
          "type": "short_text",
          "prompt": "Bối cảnh:\nProduction vẫn 200 OK sau prompt release, nhưng complaint “trả lời sai điều khoản” tăng.\n\nCâu hỏi:\nThiết kế observation chất lượng bổ sung ba pillar truyền thống.",
          "prompt_presentation": {
            "format": "sectioned_plain_text",
            "preserve_line_breaks": true
          }
        },
        "question_id": "d13-q011",
        "primary_kc_id": "kc-online-eval-fourth-pillar",
        "grading_method": "criterion_rubric",
        "question_version": 3,
        "cognitive_operation": "Create",
        "contributing_kc_ids": [],
        "estimated_difficulty": "hard"
      },
      {
        "servable": true,
        "role": "follow_up",
        "hints": [
          {
            "text": "HTTP outcome có chấm nội dung answer không?",
            "hint_id": "h1",
            "after_attempt": 1
          }
        ],
        "module_id": "day13-g-foundations",
        "max_points": 1,
        "interaction": {
          "type": "single_select",
          "prompt": "Bối cảnh:\nMọi request trả 200 trong 300ms nhưng answer trái source policy.\n\nCâu hỏi:\nService telemetry hiện chứng minh được gì?",
          "choices": [
            {
              "text": "Chỉ chứng minh delivery khỏe",
              "choice_id": "a"
            },
            {
              "text": "Correctness đã đạt vì latency thấp",
              "choice_id": "b"
            },
            {
              "text": "Không cần eval vì error rate 0",
              "choice_id": "c"
            },
            {
              "text": "CPU thấp chứng minh groundedness",
              "choice_id": "d"
            }
          ],
          "presentation_policy": {
            "shuffle_at_delivery": true,
            "do_not_expose_choice_ids": true
          },
          "prompt_presentation": {
            "format": "sectioned_plain_text",
            "preserve_line_breaks": true
          }
        },
        "question_id": "d13-q012",
        "primary_kc_id": "kc-online-eval-fourth-pillar",
        "grading_method": "deterministic",
        "question_version": 3,
        "cognitive_operation": "Understand",
        "contributing_kc_ids": [],
        "estimated_difficulty": "easy"
      },
      {
        "servable": true,
        "role": "initial_check",
        "hints": [
          {
            "text": "Hỏi mỗi measurement đang mô tả tốc độ, outcome, tiền hay chất lượng.",
            "hint_id": "h1",
            "after_attempt": 1
          }
        ],
        "module_id": "day13-g-metrics",
        "max_points": 4,
        "interaction": {
          "left": [
            {
              "id": "x1",
              "text": "TTFT P95"
            },
            {
              "id": "x2",
              "text": "Tool-call failure rate"
            },
            {
              "id": "x3",
              "text": "Cost per task"
            },
            {
              "id": "x4",
              "text": "Sampled groundedness"
            }
          ],
          "type": "matching",
          "right": [
            {
              "id": "r1",
              "text": "Performance"
            },
            {
              "id": "r2",
              "text": "Reliability"
            },
            {
              "id": "r3",
              "text": "Cost"
            },
            {
              "id": "r4",
              "text": "Quality"
            }
          ],
          "prompt": "Bối cảnh:\nMột AI service theo dõi bốn loại evidence.\n\nCâu hỏi:\nGhép measurement với metric family chính.",
          "presentation_policy": {
            "do_not_align_pairs_by_row": true,
            "shuffle_right_at_delivery": true,
            "do_not_expose_internal_ids": true
          },
          "prompt_presentation": {
            "format": "sectioned_plain_text",
            "preserve_line_breaks": true
          }
        },
        "question_id": "d13-q013",
        "primary_kc_id": "kc-agent-metric-family-contract",
        "grading_method": "deterministic",
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
            "text": "Bắt đầu từ observable outcome rồi lần lượt kiểm tra Performance, Reliability.",
            "hint_id": "h1",
            "after_attempt": 1
          }
        ],
        "module_id": "day13-g-metrics",
        "max_points": 4,
        "interaction": {
          "type": "short_text",
          "prompt": "Bối cảnh:\nAgent có latency thấp, error HTTP bằng 0, token tăng 4×, tool schema-fail 12% và groundedness giảm.\n\nCâu hỏi:\nĐịnh metric contract không trộn bốn family.",
          "prompt_presentation": {
            "format": "sectioned_plain_text",
            "preserve_line_breaks": true
          }
        },
        "question_id": "d13-q014",
        "primary_kc_id": "kc-agent-metric-family-contract",
        "grading_method": "criterion_rubric",
        "question_version": 3,
        "cognitive_operation": "Analyze",
        "contributing_kc_ids": [],
        "estimated_difficulty": "hard"
      },
      {
        "servable": true,
        "role": "initial_check",
        "hints": [
          {
            "text": "Tách user-visible request signal khỏi resource signal.",
            "hint_id": "h1",
            "after_attempt": 1
          }
        ],
        "module_id": "day13-g-metrics",
        "max_points": 5,
        "interaction": {
          "left": [
            {
              "id": "x1",
              "text": "Request rate"
            },
            {
              "id": "x2",
              "text": "Request error rate"
            },
            {
              "id": "x3",
              "text": "Request duration"
            },
            {
              "id": "x4",
              "text": "Worker utilization"
            },
            {
              "id": "x5",
              "text": "Queue saturation"
            }
          ],
          "type": "matching",
          "right": [
            {
              "id": "r1",
              "text": "RED traffic"
            },
            {
              "id": "r2",
              "text": "RED failure symptom"
            },
            {
              "id": "r3",
              "text": "RED latency symptom"
            },
            {
              "id": "r4",
              "text": "USE resource use"
            },
            {
              "id": "r5",
              "text": "USE pressure"
            }
          ],
          "prompt": "Bối cảnh:\nUser báo agent chậm và worker queue có dấu hiệu saturation.\n\nCâu hỏi:\nGhép signal với vai trò điều tra.",
          "presentation_policy": {
            "do_not_align_pairs_by_row": true,
            "shuffle_right_at_delivery": true,
            "do_not_expose_internal_ids": true
          },
          "prompt_presentation": {
            "format": "sectioned_plain_text",
            "preserve_line_breaks": true
          }
        },
        "question_id": "d13-q015",
        "primary_kc_id": "kc-red-use-view-selection",
        "grading_method": "deterministic",
        "question_version": 3,
        "cognitive_operation": "Understand",
        "contributing_kc_ids": [],
        "estimated_difficulty": "medium"
      },
      {
        "servable": false,
        "role": "reassessment",
        "hints": [
          {
            "text": "Bắt đầu từ observable outcome rồi lần lượt kiểm tra RED rate/errors/duration, USE utilization/saturation/errors.",
            "hint_id": "h1",
            "after_attempt": 1
          }
        ],
        "module_id": "day13-g-metrics",
        "max_points": 3,
        "interaction": {
          "type": "short_text",
          "prompt": "Bối cảnh:\nP95 tăng chỉ ở route `/chat`; GPU utilization bình thường nhưng queue saturation cao.\n\nCâu hỏi:\nChọn RED/USE indicators và nêu bước xác nhận.",
          "prompt_presentation": {
            "format": "sectioned_plain_text",
            "preserve_line_breaks": true
          }
        },
        "question_id": "d13-q016",
        "primary_kc_id": "kc-red-use-view-selection",
        "grading_method": "criterion_rubric",
        "question_version": 3,
        "cognitive_operation": "Analyze",
        "contributing_kc_ids": [],
        "estimated_difficulty": "hard"
      },
      {
        "servable": true,
        "role": "initial_check",
        "hints": [
          {
            "text": "Đối chiếu các lựa chọn với: Median, P95/P99 tail.",
            "hint_id": "h1",
            "after_attempt": 1
          }
        ],
        "module_id": "day13-g-metrics",
        "max_points": 1,
        "interaction": {
          "type": "single_select",
          "prompt": "Bối cảnh:\n100 request đã sort; request thứ 95 mất 4,8s, median 1,2s; TTFT P95 là 0,7s.\n\nCâu hỏi:\nDiễn giải nào đúng?",
          "choices": [
            {
              "text": "TTFT 0,7s nghĩa total latency 0,7s",
              "choice_id": "a"
            },
            {
              "text": "Completion P95≈4,8s; TTFT P95≈0,7s",
              "choice_id": "b"
            },
            {
              "text": "95% request chậm hơn 4,8s",
              "choice_id": "c"
            },
            {
              "text": "P95 là trung bình của 95 request đầu",
              "choice_id": "d"
            }
          ],
          "presentation_policy": {
            "shuffle_at_delivery": true,
            "do_not_expose_choice_ids": true
          },
          "prompt_presentation": {
            "format": "sectioned_plain_text",
            "preserve_line_breaks": true
          }
        },
        "question_id": "d13-q017",
        "primary_kc_id": "kc-latency-percentile-ttft-interpretation",
        "grading_method": "deterministic",
        "question_version": 3,
        "cognitive_operation": "Understand",
        "contributing_kc_ids": [],
        "estimated_difficulty": "medium"
      },
      {
        "servable": false,
        "role": "reassessment",
        "hints": [
          {
            "text": "Bắt đầu từ observable outcome rồi lần lượt kiểm tra Median, P95/P99 tail.",
            "hint_id": "h1",
            "after_attempt": 1
          }
        ],
        "module_id": "day13-g-metrics",
        "max_points": 4,
        "interaction": {
          "type": "short_text",
          "prompt": "Bối cảnh:\nHai release có cùng mean 2s. A: P95=3s, TTFT P95=0,5s; B: P95=8s, TTFT P95=2s.\n\nCâu hỏi:\nChọn release theo mục tiêu “phản hồi sớm và ít tail lag”, nêu giới hạn.",
          "prompt_presentation": {
            "format": "sectioned_plain_text",
            "preserve_line_breaks": true
          }
        },
        "question_id": "d13-q018",
        "primary_kc_id": "kc-latency-percentile-ttft-interpretation",
        "grading_method": "criterion_rubric",
        "question_version": 3,
        "cognitive_operation": "Evaluate",
        "contributing_kc_ids": [],
        "estimated_difficulty": "medium"
      },
      {
        "servable": true,
        "role": "follow_up",
        "hints": [
          {
            "text": "Hai đồng hồ bắt đầu giống nhau nhưng dừng ở sự kiện nào?",
            "hint_id": "h1",
            "after_attempt": 1
          }
        ],
        "module_id": "day13-g-metrics",
        "max_points": 1,
        "interaction": {
          "type": "single_select",
          "prompt": "Bối cảnh:\nP95 completion=6s, TTFT P95=0,6s.\n\nCâu hỏi:\nKết luận nào đúng?",
          "choices": [
            {
              "text": "TTFT sớm; tail vẫn 6s",
              "choice_id": "a"
            },
            {
              "text": "95% request chậm hơn 6s",
              "choice_id": "b"
            },
            {
              "text": "Total latency bằng TTFT",
              "choice_id": "c"
            },
            {
              "text": "P95 là mean",
              "choice_id": "d"
            }
          ],
          "presentation_policy": {
            "shuffle_at_delivery": true,
            "do_not_expose_choice_ids": true
          },
          "prompt_presentation": {
            "format": "sectioned_plain_text",
            "preserve_line_breaks": true
          }
        },
        "question_id": "d13-q019",
        "primary_kc_id": "kc-latency-percentile-ttft-interpretation",
        "grading_method": "deterministic",
        "question_version": 3,
        "cognitive_operation": "Understand",
        "contributing_kc_ids": [],
        "estimated_difficulty": "easy"
      },
      {
        "servable": true,
        "role": "initial_check",
        "hints": [
          {
            "text": "Tính xác suất không có tail ở cả 10 lượt trước.",
            "hint_id": "h1",
            "after_attempt": 1
          }
        ],
        "module_id": "day13-g-metrics",
        "max_points": 1,
        "interaction": {
          "type": "numeric_input",
          "prompt": "Bối cảnh:\nMỗi lượt chat độc lập có 1% khả năng latency vượt 5s. User thực hiện 10 lượt.\n\nCâu hỏi:\nTính xác suất gặp ít nhất một lượt vượt 5s, làm tròn hai chữ số phần trăm.",
          "required_unit": "%",
          "prompt_presentation": {
            "format": "sectioned_plain_text",
            "preserve_line_breaks": true
          }
        },
        "question_id": "d13-q020",
        "primary_kc_id": "kc-tail-latency-compounding",
        "grading_method": "deterministic",
        "question_version": 3,
        "cognitive_operation": "Apply",
        "contributing_kc_ids": [],
        "estimated_difficulty": "medium"
      },
      {
        "servable": false,
        "role": "reassessment",
        "hints": [
          {
            "text": "Bắt đầu từ observable outcome rồi lần lượt kiểm tra At-least-one probability, Repeated turn.",
            "hint_id": "h1",
            "after_attempt": 1
          }
        ],
        "module_id": "day13-g-metrics",
        "max_points": 4,
        "interaction": {
          "type": "short_text",
          "prompt": "Bối cảnh:\nMột workflow có 5 bước độc lập, mỗi bước có 2% xác suất tail event.\n\nCâu hỏi:\nTính xác suất ít nhất một tail và nêu giới hạn của mô hình.",
          "prompt_presentation": {
            "format": "sectioned_plain_text",
            "preserve_line_breaks": true
          }
        },
        "question_id": "d13-q021",
        "primary_kc_id": "kc-tail-latency-compounding",
        "grading_method": "criterion_rubric",
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
            "text": "Kiểm tra giả định đứng sau phép nhân xác suất không-tail.",
            "hint_id": "h1",
            "after_attempt": 1
          }
        ],
        "module_id": "day13-g-metrics",
        "max_points": 1,
        "interaction": {
          "type": "single_select",
          "prompt": "Bối cảnh:\nNăm bước có tail probability 2%, nhưng chúng cùng phụ thuộc một overloaded database.\n\nCâu hỏi:\nCó được dùng trực tiếp 1−0,98^5 như exact probability không?",
          "choices": [
            {
              "text": "Không; các bước có tương quan",
              "choice_id": "a"
            },
            {
              "text": "Có; mọi workflow step luôn independent",
              "choice_id": "b"
            },
            {
              "text": "Có nếu P95 giống nhau",
              "choice_id": "c"
            },
            {
              "text": "Không vì probability không dùng trong latency",
              "choice_id": "d"
            }
          ],
          "presentation_policy": {
            "shuffle_at_delivery": true,
            "do_not_expose_choice_ids": true
          },
          "prompt_presentation": {
            "format": "sectioned_plain_text",
            "preserve_line_breaks": true
          }
        },
        "question_id": "d13-q022",
        "primary_kc_id": "kc-tail-latency-compounding",
        "grading_method": "deterministic",
        "question_version": 3,
        "cognitive_operation": "Analyze",
        "contributing_kc_ids": [],
        "estimated_difficulty": "medium"
      },
      {
        "servable": true,
        "role": "initial_check",
        "hints": [
          {
            "text": "Xếp theo cost/lag/evidence strength, không coi layer nào là truth tuyệt đối.",
            "hint_id": "h1",
            "after_attempt": 1
          }
        ],
        "module_id": "day13-g-metrics",
        "max_points": 1,
        "interaction": {
          "type": "ordering",
          "prompt": "Bối cảnh:\nXếp signal từ rẻ/nhanh nhưng evidence yếu hơn tới chậm/đắt nhưng gần outcome hơn.\n\nCâu hỏi:\nSắp thứ tự layer.",
          "options": [
            {
              "text": "Automated heuristic",
              "option_id": "o1"
            },
            {
              "text": "Sampled model-based judge",
              "option_id": "o2"
            },
            {
              "text": "Explicit/implicit user signal",
              "option_id": "o3"
            },
            {
              "text": "Business/task outcome",
              "option_id": "o4"
            }
          ],
          "presentation_policy": {
            "do_not_expose_option_ids": true,
            "shuffle_initial_order_at_delivery": true
          },
          "prompt_presentation": {
            "format": "sectioned_plain_text",
            "preserve_line_breaks": true
          }
        },
        "question_id": "d13-q023",
        "primary_kc_id": "kc-production-quality-signal-pyramid",
        "grading_method": "deterministic",
        "question_version": 3,
        "cognitive_operation": "Understand",
        "contributing_kc_ids": [],
        "estimated_difficulty": "medium"
      },
      {
        "servable": false,
        "role": "reassessment",
        "hints": [
          {
            "text": "Bắt đầu từ observable outcome rồi lần lượt kiểm tra Automated heuristic, Model judge.",
            "hint_id": "h1",
            "after_attempt": 1
          }
        ],
        "module_id": "day13-g-metrics",
        "max_points": 4,
        "interaction": {
          "type": "short_text",
          "prompt": "Bối cảnh:\nMột feature medical-summary cần phát hiện PII leak nhanh và factual error có hậu quả cao.\n\nCâu hỏi:\nThiết kế signal stack theo tốc độ, evidence strength và cost.",
          "prompt_presentation": {
            "format": "sectioned_plain_text",
            "preserve_line_breaks": true
          }
        },
        "question_id": "d13-q024",
        "primary_kc_id": "kc-production-quality-signal-pyramid",
        "grading_method": "criterion_rubric",
        "question_version": 3,
        "cognitive_operation": "Create",
        "contributing_kc_ids": [],
        "estimated_difficulty": "hard"
      },
      {
        "servable": true,
        "role": "initial_check",
        "hints": [
          {
            "text": "Chọn signal thực sự so output với evidence hoặc authority.",
            "hint_id": "h1",
            "after_attempt": 1
          }
        ],
        "module_id": "day13-g-metrics",
        "max_points": 3,
        "interaction": {
          "type": "multi_select",
          "prompt": "Bối cảnh:\nAnswer chứa con số không có trong retrieved context; traffic lớn và không thể chấm tay toàn bộ.\n\nCâu hỏi:\nNhững evidence nào bổ sung nhau để đánh giá hallucination risk? Chọn tất cả phương án đúng.",
          "choices": [
            {
              "text": "Claim/entity check với retrieved source",
              "choice_id": "a"
            },
            {
              "text": "Sampled groundedness judge có version",
              "choice_id": "b"
            },
            {
              "text": "Human/system-of-record review cho high-risk disagreement",
              "choice_id": "c"
            },
            {
              "text": "HTTP 200",
              "choice_id": "d"
            },
            {
              "text": "Không có thumbs-down",
              "choice_id": "e"
            }
          ],
          "presentation_policy": {
            "shuffle_at_delivery": true,
            "do_not_expose_choice_ids": true
          },
          "prompt_presentation": {
            "format": "sectioned_plain_text",
            "preserve_line_breaks": true
          },
          "selection_instruction": "Chọn tất cả phương án đúng."
        },
        "question_id": "d13-q025",
        "primary_kc_id": "kc-hallucination-multisignal-detection",
        "grading_method": "deterministic",
        "question_version": 3,
        "cognitive_operation": "Analyze",
        "contributing_kc_ids": [],
        "estimated_difficulty": "medium"
      },
      {
        "servable": false,
        "role": "reassessment",
        "hints": [
          {
            "text": "Bắt đầu từ observable outcome rồi lần lượt kiểm tra Groundedness, Entity verification.",
            "hint_id": "h1",
            "after_attempt": 1
          }
        ],
        "module_id": "day13-g-metrics",
        "max_points": 4,
        "interaction": {
          "type": "short_text",
          "prompt": "Bối cảnh:\nMột corpus policy có reference text, traffic 100k/ngày và budget chỉ chấm 1%.\n\nCâu hỏi:\nThiết kế sampled multi-signal hallucination check.",
          "prompt_presentation": {
            "format": "sectioned_plain_text",
            "preserve_line_breaks": true
          }
        },
        "question_id": "d13-q026",
        "primary_kc_id": "kc-hallucination-multisignal-detection",
        "grading_method": "criterion_rubric",
        "question_version": 3,
        "cognitive_operation": "Create",
        "contributing_kc_ids": [],
        "estimated_difficulty": "hard"
      },
      {
        "servable": true,
        "role": "initial_check",
        "hints": [
          {
            "text": "Đối chiếu các lựa chọn với: Tool success rate, Timeout rate.",
            "hint_id": "h1",
            "after_attempt": 1
          }
        ],
        "module_id": "day13-g-metrics",
        "max_points": 1,
        "interaction": {
          "type": "single_select",
          "prompt": "Bối cảnh:\nTrong 100 tool attempts: 80 success, 8 timeout, 7 schema-invalid, 5 provider failure; 10 request gọi cùng tool quá 4 lần.\n\nCâu hỏi:\nMetric nào đúng?",
          "choices": [
            {
              "text": "Latency chỉ đo success để trông tốt hơn",
              "choice_id": "a"
            },
            {
              "text": "Success 80%; failure và loop dùng đúng denominator",
              "choice_id": "b"
            },
            {
              "text": "Gộp timeout và schema-invalid thành success vì có response",
              "choice_id": "c"
            },
            {
              "text": "Loop rate bằng 10/100 tool attempts mà không khai contract",
              "choice_id": "d"
            }
          ],
          "presentation_policy": {
            "shuffle_at_delivery": true,
            "do_not_expose_choice_ids": true
          },
          "prompt_presentation": {
            "format": "sectioned_plain_text",
            "preserve_line_breaks": true
          }
        },
        "question_id": "d13-q027",
        "primary_kc_id": "kc-tool-call-metric-contract",
        "grading_method": "deterministic",
        "question_version": 3,
        "cognitive_operation": "Analyze",
        "contributing_kc_ids": [],
        "estimated_difficulty": "medium"
      },
      {
        "servable": false,
        "role": "reassessment",
        "hints": [
          {
            "text": "Bắt đầu từ observable outcome rồi lần lượt kiểm tra Tool success rate, Timeout rate.",
            "hint_id": "h1",
            "after_attempt": 1
          }
        ],
        "module_id": "day13-g-metrics",
        "max_points": 4,
        "interaction": {
          "type": "short_text",
          "prompt": "Bối cảnh:\nMột tool được retry; cần phân biệt logical call, attempt và request loop.\n\nCâu hỏi:\nViết outcome/latency/loop contract.",
          "prompt_presentation": {
            "format": "sectioned_plain_text",
            "preserve_line_breaks": true
          }
        },
        "question_id": "d13-q028",
        "primary_kc_id": "kc-tool-call-metric-contract",
        "grading_method": "criterion_rubric",
        "question_version": 3,
        "cognitive_operation": "Create",
        "contributing_kc_ids": [],
        "estimated_difficulty": "hard"
      },
      {
        "servable": true,
        "role": "initial_check",
        "hints": [
          {
            "text": "Đối chiếu các lựa chọn với: Empty-result rate, Retrieval latency.",
            "hint_id": "h1",
            "after_attempt": 1
          }
        ],
        "module_id": "day13-g-metrics",
        "max_points": 1,
        "interaction": {
          "type": "single_select",
          "prompt": "Bối cảnh:\nTrong 1.000 retrievals có 40 empty result; latency P95 180ms; relevance chỉ được chấm trên 100 sample.\n\nCâu hỏi:\nCách báo cáo nào đúng?",
          "choices": [
            {
              "text": "Empty 4%; P95 180ms; relevance dùng n=100",
              "choice_id": "a"
            },
            {
              "text": "Relevance=96% vì 40 empty",
              "choice_id": "b"
            },
            {
              "text": "Empty-result và latency là cùng một metric",
              "choice_id": "c"
            },
            {
              "text": "Recall@k có thể tính không cần reference",
              "choice_id": "d"
            }
          ],
          "presentation_policy": {
            "shuffle_at_delivery": true,
            "do_not_expose_choice_ids": true
          },
          "prompt_presentation": {
            "format": "sectioned_plain_text",
            "preserve_line_breaks": true
          }
        },
        "question_id": "d13-q029",
        "primary_kc_id": "kc-retrieval-metric-contract",
        "grading_method": "deterministic",
        "question_version": 3,
        "cognitive_operation": "Analyze",
        "contributing_kc_ids": [],
        "estimated_difficulty": "medium"
      },
      {
        "servable": false,
        "role": "reassessment",
        "hints": [
          {
            "text": "Bắt đầu từ observable outcome rồi lần lượt kiểm tra Empty-result rate, Retrieval latency.",
            "hint_id": "h1",
            "after_attempt": 1
          }
        ],
        "module_id": "day13-g-metrics",
        "max_points": 4,
        "interaction": {
          "type": "short_text",
          "prompt": "Bối cảnh:\nSau corpus update, empty-result giảm nhưng sampled relevance giảm mạnh.\n\nCâu hỏi:\nThiết kế metric để không đánh tráo availability với quality.",
          "prompt_presentation": {
            "format": "sectioned_plain_text",
            "preserve_line_breaks": true
          }
        },
        "question_id": "d13-q030",
        "primary_kc_id": "kc-retrieval-metric-contract",
        "grading_method": "criterion_rubric",
        "question_version": 3,
        "cognitive_operation": "Analyze",
        "contributing_kc_ids": [],
        "estimated_difficulty": "hard"
      },
      {
        "servable": true,
        "role": "initial_check",
        "hints": [
          {
            "text": "Dùng boundary nơi failure được quan sát, chưa tự gọi đó là root cause.",
            "hint_id": "h1",
            "after_attempt": 1
          }
        ],
        "module_id": "day13-g-metrics",
        "max_points": 4,
        "interaction": {
          "left": [
            {
              "id": "x1",
              "text": "Provider trả 503"
            },
            {
              "id": "x2",
              "text": "Tool args sai JSON schema"
            },
            {
              "id": "x3",
              "text": "Retrieval trả zero chunks"
            },
            {
              "id": "x4",
              "text": "Guardrail chặn nội dung"
            }
          ],
          "type": "matching",
          "right": [
            {
              "id": "r1",
              "text": "Provider/runtime error"
            },
            {
              "id": "r2",
              "text": "Tool schema invalid"
            },
            {
              "id": "r3",
              "text": "Empty retrieval"
            },
            {
              "id": "r4",
              "text": "Guardrail outcome"
            }
          ],
          "prompt": "Bối cảnh:\nCần route failure tới owner ban đầu.\n\nCâu hỏi:\nGhép evidence với typed outcome.",
          "presentation_policy": {
            "do_not_align_pairs_by_row": true,
            "shuffle_right_at_delivery": true,
            "do_not_expose_internal_ids": true
          },
          "prompt_presentation": {
            "format": "sectioned_plain_text",
            "preserve_line_breaks": true
          }
        },
        "question_id": "d13-q031",
        "primary_kc_id": "kc-agent-runtime-error-taxonomy",
        "grading_method": "deterministic",
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
            "text": "Bắt đầu từ observable outcome rồi lần lượt kiểm tra Provider failure, Timeout.",
            "hint_id": "h1",
            "after_attempt": 1
          }
        ],
        "module_id": "day13-g-metrics",
        "max_points": 4,
        "interaction": {
          "type": "short_text",
          "prompt": "Bối cảnh:\nMột agent bị guardrail block, empty retrieval và cuối cùng trả degraded answer 200.\n\nCâu hỏi:\nGán taxonomy, owner và response mà không lẫn symptom/cause.",
          "prompt_presentation": {
            "format": "sectioned_plain_text",
            "preserve_line_breaks": true
          }
        },
        "question_id": "d13-q032",
        "primary_kc_id": "kc-agent-runtime-error-taxonomy",
        "grading_method": "criterion_rubric",
        "question_version": 3,
        "cognitive_operation": "Analyze",
        "contributing_kc_ids": [],
        "estimated_difficulty": "hard"
      },
      {
        "servable": true,
        "role": "initial_check",
        "hints": [
          {
            "text": "Tìm thành phần nào thực sự đổi: input, relation hay model.",
            "hint_id": "h1",
            "after_attempt": 1
          }
        ],
        "module_id": "day13-g-metrics",
        "max_points": 3,
        "interaction": {
          "left": [
            {
              "id": "x1",
              "text": "Input language mix đổi, relation target chưa chứng minh đổi"
            },
            {
              "id": "x2",
              "text": "Quan hệ input→correct label đổi theo thời gian"
            },
            {
              "id": "x3",
              "text": "Cùng stable input/reference nhưng model v2 khác v1"
            }
          ],
          "type": "matching",
          "right": [
            {
              "id": "r1",
              "text": "Data drift"
            },
            {
              "id": "r2",
              "text": "Concept drift"
            },
            {
              "id": "r3",
              "text": "Model drift"
            }
          ],
          "prompt": "Bối cảnh:\nBa before/after patterns cần phân loại drift candidate.\n\nCâu hỏi:\nGhép pattern với candidate.",
          "presentation_policy": {
            "do_not_align_pairs_by_row": true,
            "shuffle_right_at_delivery": true,
            "do_not_expose_internal_ids": true
          },
          "prompt_presentation": {
            "format": "sectioned_plain_text",
            "preserve_line_breaks": true
          }
        },
        "question_id": "d13-q033",
        "primary_kc_id": "kc-ai-drift-monitoring-contract",
        "grading_method": "deterministic",
        "question_version": 3,
        "cognitive_operation": "Analyze",
        "contributing_kc_ids": [],
        "estimated_difficulty": "medium"
      },
      {
        "servable": false,
        "role": "reassessment",
        "hints": [
          {
            "text": "Bắt đầu từ observable outcome rồi lần lượt kiểm tra Data drift, Concept drift.",
            "hint_id": "h1",
            "after_attempt": 1
          }
        ],
        "module_id": "day13-g-metrics",
        "max_points": 4,
        "interaction": {
          "type": "short_text",
          "prompt": "Bối cảnh:\nInput distribution ổn; cùng input/reference nhưng model v2 score giảm so với v1, đồng thời label relation chưa chứng minh thay đổi.\n\nCâu hỏi:\nPhân loại candidate và confirmation evidence.",
          "prompt_presentation": {
            "format": "sectioned_plain_text",
            "preserve_line_breaks": true
          }
        },
        "question_id": "d13-q034",
        "primary_kc_id": "kc-ai-drift-monitoring-contract",
        "grading_method": "criterion_rubric",
        "question_version": 3,
        "cognitive_operation": "Analyze",
        "contributing_kc_ids": [],
        "estimated_difficulty": "hard"
      },
      {
        "servable": true,
        "role": "initial_check",
        "hints": [
          {
            "text": "Hỏi mỗi stakeholder sẽ hành động khác đi nhờ con số nào.",
            "hint_id": "h1",
            "after_attempt": 1
          }
        ],
        "module_id": "day13-g-metrics",
        "max_points": 4,
        "interaction": {
          "left": [
            {
              "id": "x1",
              "text": "Engineering"
            },
            {
              "id": "x2",
              "text": "Product"
            },
            {
              "id": "x3",
              "text": "Finance/Ops"
            },
            {
              "id": "x4",
              "text": "Leadership"
            }
          ],
          "type": "matching",
          "right": [
            {
              "id": "r1",
              "text": "Latency/error/tool failure"
            },
            {
              "id": "r2",
              "text": "Task completion/quality by feature"
            },
            {
              "id": "r3",
              "text": "Cost by task/tenant/model"
            },
            {
              "id": "r4",
              "text": "Adoption, value và reliability overview"
            }
          ],
          "prompt": "Bối cảnh:\nDashboard phải phục vụ quyết định khác nhau.\n\nCâu hỏi:\nGhép stakeholder với metric set chính.",
          "presentation_policy": {
            "do_not_align_pairs_by_row": true,
            "shuffle_right_at_delivery": true,
            "do_not_expose_internal_ids": true
          },
          "prompt_presentation": {
            "format": "sectioned_plain_text",
            "preserve_line_breaks": true
          }
        },
        "question_id": "d13-q035",
        "primary_kc_id": "kc-stakeholder-metric-selection",
        "grading_method": "deterministic",
        "question_version": 3,
        "cognitive_operation": "Analyze",
        "contributing_kc_ids": [],
        "estimated_difficulty": "medium"
      },
      {
        "servable": false,
        "role": "reassessment",
        "hints": [
          {
            "text": "Bắt đầu từ observable outcome rồi lần lượt kiểm tra Engineering, Product.",
            "hint_id": "h1",
            "after_attempt": 1
          }
        ],
        "module_id": "day13-g-metrics",
        "max_points": 4,
        "interaction": {
          "type": "short_text",
          "prompt": "Bối cảnh:\nEngineering, Product và Finance cùng xem một dashboard.\n\nCâu hỏi:\nMap decision của từng stakeholder sang metric và loại vanity metric.",
          "prompt_presentation": {
            "format": "sectioned_plain_text",
            "preserve_line_breaks": true
          }
        },
        "question_id": "d13-q036",
        "primary_kc_id": "kc-stakeholder-metric-selection",
        "grading_method": "criterion_rubric",
        "question_version": 3,
        "cognitive_operation": "Analyze",
        "contributing_kc_ids": [],
        "estimated_difficulty": "hard"
      },
      {
        "servable": true,
        "role": "initial_check",
        "hints": [
          {
            "text": "Đối chiếu các lựa chọn với: Typed JSON event, Required core field.",
            "hint_id": "h1",
            "after_attempt": 1
          }
        ],
        "module_id": "day13-g-logs",
        "max_points": 1,
        "interaction": {
          "type": "single_select",
          "prompt": "Bối cảnh:\nCần query error rate theo route/model và join request qua services; event hiện chỉ là chuỗi “call failed”.\n\nCâu hỏi:\nSchema nào phù hợp?",
          "choices": [
            {
              "text": "Stable typed fields + correlation ID",
              "choice_id": "a"
            },
            {
              "text": "Thêm full raw prompt vào mọi event để debug",
              "choice_id": "b"
            },
            {
              "text": "Chỉ giữ message tự do rồi search toàn văn",
              "choice_id": "c"
            },
            {
              "text": "Mỗi service tự chọn field name và unit riêng",
              "choice_id": "d"
            }
          ],
          "presentation_policy": {
            "shuffle_at_delivery": true,
            "do_not_expose_choice_ids": true
          },
          "prompt_presentation": {
            "format": "sectioned_plain_text",
            "preserve_line_breaks": true
          }
        },
        "question_id": "d13-q037",
        "primary_kc_id": "kc-structured-event-schema",
        "grading_method": "deterministic",
        "question_version": 3,
        "cognitive_operation": "Analyze",
        "contributing_kc_ids": [],
        "estimated_difficulty": "medium"
      },
      {
        "servable": false,
        "role": "reassessment",
        "hints": [
          {
            "text": "Bắt đầu từ observable outcome rồi lần lượt kiểm tra Typed JSON event, Required core field.",
            "hint_id": "h1",
            "after_attempt": 1
          }
        ],
        "module_id": "day13-g-logs",
        "max_points": 4,
        "interaction": {
          "type": "short_text",
          "prompt": "Bối cảnh:\nHai service emit `latency`, một bên seconds một bên ms; error field lúc string lúc object.\n\nCâu hỏi:\nThiết kế schema và validation contract.",
          "prompt_presentation": {
            "format": "sectioned_plain_text",
            "preserve_line_breaks": true
          }
        },
        "question_id": "d13-q038",
        "primary_kc_id": "kc-structured-event-schema",
        "grading_method": "criterion_rubric",
        "question_version": 3,
        "cognitive_operation": "Create",
        "contributing_kc_ids": [],
        "estimated_difficulty": "hard"
      },
      {
        "servable": true,
        "role": "initial_check",
        "hints": [
          {
            "text": "Đối chiếu các lựa chọn với: Correlation, Provider/model/version.",
            "hint_id": "h1",
            "after_attempt": 1
          }
        ],
        "module_id": "day13-g-logs",
        "max_points": 1,
        "interaction": {
          "type": "single_select",
          "prompt": "Bối cảnh:\nMục tiêu là debug latency/cost theo model và prompt release mà không lưu PII.\n\nCâu hỏi:\nField set tối thiểu?",
          "choices": [
            {
              "text": "Raw prompt/output nhưng không ghi version hay outcome",
              "choice_id": "a"
            },
            {
              "text": "Chỉ HTTP status và latency tổng của endpoint",
              "choice_id": "b"
            },
            {
              "text": "Chỉ model display name, không có call identity",
              "choice_id": "c"
            },
            {
              "text": "ID, version, token, timing và outcome",
              "choice_id": "d"
            }
          ],
          "presentation_policy": {
            "shuffle_at_delivery": true,
            "do_not_expose_choice_ids": true
          },
          "prompt_presentation": {
            "format": "sectioned_plain_text",
            "preserve_line_breaks": true
          }
        },
        "question_id": "d13-q039",
        "primary_kc_id": "kc-llm-call-event-fields",
        "grading_method": "deterministic",
        "question_version": 3,
        "cognitive_operation": "Analyze",
        "contributing_kc_ids": [],
        "estimated_difficulty": "medium"
      },
      {
        "servable": false,
        "role": "reassessment",
        "hints": [
          {
            "text": "Bắt đầu từ observable outcome rồi lần lượt kiểm tra Correlation, Provider/model/version.",
            "hint_id": "h1",
            "after_attempt": 1
          }
        ],
        "module_id": "day13-g-logs",
        "max_points": 4,
        "interaction": {
          "type": "short_text",
          "prompt": "Bối cảnh:\nMột LLM call có retry, tool outcome và sampled eval score.\n\nCâu hỏi:\nChọn field phục vụ debug/cost/quality nhưng minimize content.",
          "prompt_presentation": {
            "format": "sectioned_plain_text",
            "preserve_line_breaks": true
          }
        },
        "question_id": "d13-q040",
        "primary_kc_id": "kc-llm-call-event-fields",
        "grading_method": "criterion_rubric",
        "question_version": 3,
        "cognitive_operation": "Create",
        "contributing_kc_ids": [],
        "estimated_difficulty": "hard"
      },
      {
        "servable": true,
        "role": "initial_check",
        "hints": [
          {
            "text": "Giữ operational purpose tối thiểu cho từng field.",
            "hint_id": "h1",
            "after_attempt": 1
          }
        ],
        "module_id": "day13-g-logs",
        "max_points": 4,
        "interaction": {
          "left": [
            {
              "id": "x1",
              "text": "Raw medical prompt"
            },
            {
              "id": "x2",
              "text": "Prompt-template ID"
            },
            {
              "id": "x3",
              "text": "Token count"
            },
            {
              "id": "x4",
              "text": "Stack trace chứa email"
            }
          ],
          "type": "matching",
          "right": [
            {
              "id": "r1",
              "text": "Omit raw content"
            },
            {
              "id": "r2",
              "text": "Collect stable template metadata"
            },
            {
              "id": "r3",
              "text": "Collect numeric aggregate"
            },
            {
              "id": "r4",
              "text": "Transform/redact diagnostic text"
            }
          ],
          "prompt": "Bối cảnh:\nMục tiêu là debug latency/cost mà không giữ raw medical data.\n\nCâu hỏi:\nGhép field với collection action phù hợp.",
          "presentation_policy": {
            "do_not_align_pairs_by_row": true,
            "shuffle_right_at_delivery": true,
            "do_not_expose_internal_ids": true
          },
          "prompt_presentation": {
            "format": "sectioned_plain_text",
            "preserve_line_breaks": true
          }
        },
        "question_id": "d13-q041",
        "primary_kc_id": "kc-telemetry-payload-minimization",
        "grading_method": "deterministic",
        "question_version": 3,
        "cognitive_operation": "Analyze",
        "contributing_kc_ids": [],
        "estimated_difficulty": "medium"
      },
      {
        "servable": false,
        "role": "reassessment",
        "hints": [
          {
            "text": "Bắt đầu từ observable outcome rồi lần lượt kiểm tra Purpose limitation, Field allowlist.",
            "hint_id": "h1",
            "after_attempt": 1
          }
        ],
        "module_id": "day13-g-logs",
        "max_points": 4,
        "interaction": {
          "type": "short_text",
          "prompt": "Bối cảnh:\nMột trace tool-call có full arguments, customer ID, operation name và payload-size.\n\nCâu hỏi:\nLập collect/transform/summarize/omit plan theo purpose.",
          "prompt_presentation": {
            "format": "sectioned_plain_text",
            "preserve_line_breaks": true
          }
        },
        "question_id": "d13-q042",
        "primary_kc_id": "kc-telemetry-payload-minimization",
        "grading_method": "criterion_rubric",
        "question_version": 3,
        "cognitive_operation": "Create",
        "contributing_kc_ids": [],
        "estimated_difficulty": "hard"
      },
      {
        "servable": true,
        "role": "initial_check",
        "hints": [
          {
            "text": "Đối chiếu các lựa chọn với: Pre-render redaction, Regex và entity recognition.",
            "hint_id": "h1",
            "after_attempt": 1
          }
        ],
        "module_id": "day13-g-logs",
        "max_points": 1,
        "interaction": {
          "type": "single_select",
          "prompt": "Bối cảnh:\nLogger scrub sau khi JSON đã gửi exporter; raw phone vẫn nằm trong trace buffer.\n\nCâu hỏi:\nBoundary sửa đúng?",
          "choices": [
            {
              "text": "Giữ raw value trong validation evidence",
              "choice_id": "a"
            },
            {
              "text": "Redact trước mọi telemetry emission",
              "choice_id": "b"
            },
            {
              "text": "Chỉ xóa ở dashboard",
              "choice_id": "c"
            },
            {
              "text": "Mã hóa transport là đủ",
              "choice_id": "d"
            }
          ],
          "presentation_policy": {
            "shuffle_at_delivery": true,
            "do_not_expose_choice_ids": true
          },
          "prompt_presentation": {
            "format": "sectioned_plain_text",
            "preserve_line_breaks": true
          }
        },
        "question_id": "d13-q043",
        "primary_kc_id": "kc-pii-redaction-before-emission",
        "grading_method": "deterministic",
        "question_version": 3,
        "cognitive_operation": "Analyze",
        "contributing_kc_ids": [],
        "estimated_difficulty": "medium"
      },
      {
        "servable": false,
        "role": "reassessment",
        "hints": [
          {
            "text": "Bắt đầu từ observable outcome rồi lần lượt kiểm tra Pre-render redaction, Regex và entity recognition.",
            "hint_id": "h1",
            "after_attempt": 1
          }
        ],
        "module_id": "day13-g-logs",
        "max_points": 4,
        "interaction": {
          "type": "short_text",
          "prompt": "Bối cảnh:\nNested event có email, phone trong list, free-text error và safe correlation ID.\n\nCâu hỏi:\nThiết kế scrubber và negative verification.",
          "prompt_presentation": {
            "format": "sectioned_plain_text",
            "preserve_line_breaks": true
          }
        },
        "question_id": "d13-q044",
        "primary_kc_id": "kc-pii-redaction-before-emission",
        "grading_method": "criterion_rubric",
        "question_version": 3,
        "cognitive_operation": "Create",
        "contributing_kc_ids": [],
        "estimated_difficulty": "hard"
      },
      {
        "servable": true,
        "role": "follow_up",
        "hints": [
          {
            "text": "Raw value có từng rời application boundary không?",
            "hint_id": "h1",
            "after_attempt": 1
          }
        ],
        "module_id": "day13-g-logs",
        "max_points": 1,
        "interaction": {
          "type": "single_select",
          "prompt": "Bối cảnh:\nRaw email đã vào trace buffer rồi mới bị ẩn ở dashboard.\n\nCâu hỏi:\nĐã đạt redaction-before-emission chưa?",
          "choices": [
            {
              "text": "Chưa; raw PII đã vào buffer",
              "choice_id": "a"
            },
            {
              "text": "Rồi vì dashboard không hiện",
              "choice_id": "b"
            },
            {
              "text": "Rồi vì TLS mã hóa transport",
              "choice_id": "c"
            },
            {
              "text": "Rồi nếu retention ngắn",
              "choice_id": "d"
            }
          ],
          "presentation_policy": {
            "shuffle_at_delivery": true,
            "do_not_expose_choice_ids": true
          },
          "prompt_presentation": {
            "format": "sectioned_plain_text",
            "preserve_line_breaks": true
          }
        },
        "question_id": "d13-q045",
        "primary_kc_id": "kc-pii-redaction-before-emission",
        "grading_method": "deterministic",
        "question_version": 3,
        "cognitive_operation": "Analyze",
        "contributing_kc_ids": [],
        "estimated_difficulty": "easy"
      },
      {
        "servable": true,
        "role": "initial_check",
        "hints": [
          {
            "text": "Xét event có expected không và làm operation/process thất bại tới đâu.",
            "hint_id": "h1",
            "after_attempt": 1
          }
        ],
        "module_id": "day13-g-logs",
        "max_points": 4,
        "interaction": {
          "left": [
            {
              "id": "x1",
              "text": "Service startup bình thường"
            },
            {
              "id": "x2",
              "text": "Cache miss có expected fallback"
            },
            {
              "id": "x3",
              "text": "Payment tool failure làm request fail"
            },
            {
              "id": "x4",
              "text": "Corrupt config khiến process không start"
            }
          ],
          "type": "matching",
          "right": [
            {
              "id": "r1",
              "text": "INFO"
            },
            {
              "id": "r2",
              "text": "DEBUG/INFO theo volume"
            },
            {
              "id": "r3",
              "text": "ERROR"
            },
            {
              "id": "r4",
              "text": "FATAL/CRITICAL"
            }
          ],
          "prompt": "Bối cảnh:\nGán level theo operational meaning.\n\nCâu hỏi:\nGhép event với level hợp lý trong contract đã nêu.",
          "presentation_policy": {
            "do_not_align_pairs_by_row": true,
            "shuffle_right_at_delivery": true,
            "do_not_expose_internal_ids": true
          },
          "prompt_presentation": {
            "format": "sectioned_plain_text",
            "preserve_line_breaks": true
          }
        },
        "question_id": "d13-q046",
        "primary_kc_id": "kc-log-level-severity-semantics",
        "grading_method": "deterministic",
        "question_version": 3,
        "cognitive_operation": "Apply",
        "contributing_kc_ids": [],
        "estimated_difficulty": "medium"
      },
      {
        "servable": false,
        "role": "reassessment",
        "hints": [
          {
            "text": "Bắt đầu từ observable outcome rồi lần lượt kiểm tra DEBUG, INFO.",
            "hint_id": "h1",
            "after_attempt": 1
          }
        ],
        "module_id": "day13-g-logs",
        "max_points": 4,
        "interaction": {
          "type": "short_text",
          "prompt": "Bối cảnh:\nTrong incident cần tăng chi tiết 30 phút cho một tenant nhưng payload có PII.\n\nCâu hỏi:\nThiết kế temporary diagnostic escalation.",
          "prompt_presentation": {
            "format": "sectioned_plain_text",
            "preserve_line_breaks": true
          }
        },
        "question_id": "d13-q047",
        "primary_kc_id": "kc-log-level-severity-semantics",
        "grading_method": "criterion_rubric",
        "question_version": 3,
        "cognitive_operation": "Create",
        "contributing_kc_ids": [],
        "estimated_difficulty": "hard"
      },
      {
        "servable": true,
        "role": "initial_check",
        "hints": [
          {
            "text": "Theo vòng đời request từ ingress tới cleanup.",
            "hint_id": "h1",
            "after_attempt": 1
          }
        ],
        "module_id": "day13-g-logs",
        "max_points": 1,
        "interaction": {
          "type": "ordering",
          "prompt": "Bối cảnh:\nMột request đi gateway→agent→worker.\n\nCâu hỏi:\nSắp correlation lifecycle cho request.",
          "options": [
            {
              "text": "Validate hoặc tạo opaque correlation ID ở ingress",
              "option_id": "o1"
            },
            {
              "text": "Bind vào request-local context",
              "option_id": "o2"
            },
            {
              "text": "Propagate qua downstream/queue",
              "option_id": "o3"
            },
            {
              "text": "Emit trên mọi event và safe response metadata",
              "option_id": "o4"
            },
            {
              "text": "Reset context trong finally",
              "option_id": "o5"
            }
          ],
          "presentation_policy": {
            "do_not_expose_option_ids": true,
            "shuffle_initial_order_at_delivery": true
          },
          "prompt_presentation": {
            "format": "sectioned_plain_text",
            "preserve_line_breaks": true
          }
        },
        "question_id": "d13-q048",
        "primary_kc_id": "kc-correlation-id-request-lifecycle",
        "grading_method": "deterministic",
        "question_version": 3,
        "cognitive_operation": "Apply",
        "contributing_kc_ids": [],
        "estimated_difficulty": "medium"
      },
      {
        "servable": false,
        "role": "reassessment",
        "hints": [
          {
            "text": "Bắt đầu từ observable outcome rồi lần lượt kiểm tra Generate/validate ở boundary, Bind context sớm.",
            "hint_id": "h1",
            "after_attempt": 1
          }
        ],
        "module_id": "day13-g-logs",
        "max_points": 4,
        "interaction": {
          "type": "short_text",
          "prompt": "Bối cảnh:\nHai async requests A/B interleave; downstream trả correlation ID trong safe response header.\n\nCâu hỏi:\nThiết kế create/propagate/expose/clear lifecycle.",
          "prompt_presentation": {
            "format": "sectioned_plain_text",
            "preserve_line_breaks": true
          }
        },
        "question_id": "d13-q049",
        "primary_kc_id": "kc-correlation-id-request-lifecycle",
        "grading_method": "criterion_rubric",
        "question_version": 3,
        "cognitive_operation": "Create",
        "contributing_kc_ids": [],
        "estimated_difficulty": "hard"
      },
      {
        "servable": true,
        "role": "follow_up",
        "hints": [
          {
            "text": "ID nào đại diện toàn request?",
            "hint_id": "h1",
            "after_attempt": 1
          }
        ],
        "module_id": "day13-g-logs",
        "max_points": 1,
        "interaction": {
          "type": "single_select",
          "prompt": "Bối cảnh:\nMỗi downstream service tạo correlation ID mới.\n\nCâu hỏi:\nTại sao không join được request?",
          "choices": [
            {
              "text": "Mất identity end-to-end",
              "choice_id": "a"
            },
            {
              "text": "Vì ID chưa chứa user email",
              "choice_id": "b"
            },
            {
              "text": "Vì mọi service cần chung process",
              "choice_id": "c"
            },
            {
              "text": "Vì trace phải bỏ parent-child",
              "choice_id": "d"
            }
          ],
          "presentation_policy": {
            "shuffle_at_delivery": true,
            "do_not_expose_choice_ids": true
          },
          "prompt_presentation": {
            "format": "sectioned_plain_text",
            "preserve_line_breaks": true
          }
        },
        "question_id": "d13-q050",
        "primary_kc_id": "kc-correlation-id-request-lifecycle",
        "grading_method": "deterministic",
        "question_version": 3,
        "cognitive_operation": "Analyze",
        "contributing_kc_ids": [],
        "estimated_difficulty": "easy"
      },
      {
        "servable": true,
        "role": "initial_check",
        "hints": [
          {
            "text": "Đối chiếu các lựa chọn với: Execution context, Context binding.",
            "hint_id": "h1",
            "after_attempt": 1
          }
        ],
        "module_id": "day13-g-logs",
        "max_points": 1,
        "interaction": {
          "type": "single_select",
          "prompt": "Bối cảnh:\nHai coroutine dùng mutable global `current_user`; log của A đôi khi mang tenant B.\n\nCâu hỏi:\nSửa nào đúng?",
          "choices": [
            {
              "text": "Dùng global lock quanh toàn request",
              "choice_id": "a"
            },
            {
              "text": "Bỏ correlation ID",
              "choice_id": "b"
            },
            {
              "text": "Context cô lập theo task",
              "choice_id": "c"
            },
            {
              "text": "Thêm sleep để tránh interleave",
              "choice_id": "d"
            }
          ],
          "presentation_policy": {
            "shuffle_at_delivery": true,
            "do_not_expose_choice_ids": true
          },
          "prompt_presentation": {
            "format": "sectioned_plain_text",
            "preserve_line_breaks": true
          }
        },
        "question_id": "d13-q051",
        "primary_kc_id": "kc-async-log-context-isolation",
        "grading_method": "deterministic",
        "question_version": 3,
        "cognitive_operation": "Analyze",
        "contributing_kc_ids": [],
        "estimated_difficulty": "medium"
      },
      {
        "servable": false,
        "role": "reassessment",
        "hints": [
          {
            "text": "Bắt đầu từ observable outcome rồi lần lượt kiểm tra Execution context, Context binding.",
            "hint_id": "h1",
            "after_attempt": 1
          }
        ],
        "module_id": "day13-g-logs",
        "max_points": 4,
        "interaction": {
          "type": "short_text",
          "prompt": "Bối cảnh:\nMột request spawn background task sau response; context parent không được leak sang job khác.\n\nCâu hỏi:\nThiết kế isolation và test interleaving/background.",
          "prompt_presentation": {
            "format": "sectioned_plain_text",
            "preserve_line_breaks": true
          }
        },
        "question_id": "d13-q052",
        "primary_kc_id": "kc-async-log-context-isolation",
        "grading_method": "criterion_rubric",
        "question_version": 3,
        "cognitive_operation": "Create",
        "contributing_kc_ids": [],
        "estimated_difficulty": "hard"
      },
      {
        "servable": true,
        "role": "initial_check",
        "hints": [
          {
            "text": "Tách error khỏi normal trước khi áp sampling rate.",
            "hint_id": "h1",
            "after_attempt": 1
          }
        ],
        "module_id": "day13-g-logs",
        "max_points": 1,
        "interaction": {
          "type": "numeric_input",
          "prompt": "Bối cảnh:\nCó 1.000.000 event/ngày; error chiếm 1%. Policy giữ 100% error và lấy mẫu 9% phần normal.\n\nCâu hỏi:\nTính tổng số event được giữ lại.",
          "required_unit": "event",
          "prompt_presentation": {
            "format": "sectioned_plain_text",
            "preserve_line_breaks": true
          }
        },
        "question_id": "d13-q053",
        "primary_kc_id": "kc-outcome-aware-telemetry-sampling",
        "grading_method": "deterministic",
        "question_version": 3,
        "cognitive_operation": "Apply",
        "contributing_kc_ids": [],
        "estimated_difficulty": "medium"
      },
      {
        "servable": false,
        "role": "reassessment",
        "hints": [
          {
            "text": "Bắt đầu từ observable outcome rồi lần lượt kiểm tra Giữ log theo severity, Sample routine event.",
            "hint_id": "h1",
            "after_attempt": 1
          }
        ],
        "module_id": "day13-g-logs",
        "max_points": 4,
        "interaction": {
          "type": "short_text",
          "prompt": "Bối cảnh:\nNgoài error còn slow/high-cost event hiếm và có overlap.\n\nCâu hỏi:\nThiết kế sampling không double-count và giữ diagnosis.",
          "prompt_presentation": {
            "format": "sectioned_plain_text",
            "preserve_line_breaks": true
          }
        },
        "question_id": "d13-q054",
        "primary_kc_id": "kc-outcome-aware-telemetry-sampling",
        "grading_method": "criterion_rubric",
        "question_version": 3,
        "cognitive_operation": "Create",
        "contributing_kc_ids": [],
        "estimated_difficulty": "hard"
      },
      {
        "servable": true,
        "role": "initial_check",
        "hints": [
          {
            "text": "Hỏi event dùng để vận hành hay để chứng minh ai đã làm gì.",
            "hint_id": "h1",
            "after_attempt": 1
          }
        ],
        "module_id": "day13-g-logs",
        "max_points": 4,
        "interaction": {
          "left": [
            {
              "id": "x1",
              "text": "Model call latency 900ms"
            },
            {
              "id": "x2",
              "text": "Admin đổi retention 7→90 ngày"
            },
            {
              "id": "x3",
              "text": "User đọc export PII"
            },
            {
              "id": "x4",
              "text": "Cache miss bình thường"
            }
          ],
          "type": "matching",
          "right": [
            {
              "id": "r1",
              "text": "Application log — performance event"
            },
            {
              "id": "r2",
              "text": "Audit log — configuration change"
            },
            {
              "id": "r3",
              "text": "Audit log — sensitive-data access"
            },
            {
              "id": "r4",
              "text": "Application log — expected fallback"
            }
          ],
          "prompt": "Bối cảnh:\nHai contract log phục vụ mục đích khác nhau.\n\nCâu hỏi:\nGhép event với route chính.",
          "presentation_policy": {
            "do_not_align_pairs_by_row": true,
            "shuffle_right_at_delivery": true,
            "do_not_expose_internal_ids": true
          },
          "prompt_presentation": {
            "format": "sectioned_plain_text",
            "preserve_line_breaks": true
          }
        },
        "question_id": "d13-q055",
        "primary_kc_id": "kc-application-audit-log-separation",
        "grading_method": "deterministic",
        "question_version": 3,
        "cognitive_operation": "Analyze",
        "contributing_kc_ids": [],
        "estimated_difficulty": "medium"
      },
      {
        "servable": false,
        "role": "reassessment",
        "hints": [
          {
            "text": "Bắt đầu từ observable outcome rồi lần lượt kiểm tra Debug khác accountability purpose, Actor/action/target/time.",
            "hint_id": "h1",
            "after_attempt": 1
          }
        ],
        "module_id": "day13-g-logs",
        "max_points": 4,
        "interaction": {
          "type": "short_text",
          "prompt": "Bối cảnh:\nMột user đọc export chứa PII rồi xóa trace theo request hợp lệ.\n\nCâu hỏi:\nThiết kế application/audit contracts.",
          "prompt_presentation": {
            "format": "sectioned_plain_text",
            "preserve_line_breaks": true
          }
        },
        "question_id": "d13-q056",
        "primary_kc_id": "kc-application-audit-log-separation",
        "grading_method": "criterion_rubric",
        "question_version": 3,
        "cognitive_operation": "Create",
        "contributing_kc_ids": [],
        "estimated_difficulty": "hard"
      },
      {
        "servable": true,
        "role": "initial_check",
        "hints": [
          {
            "text": "Đối chiếu các lựa chọn với: Trace identity, Root/child span.",
            "hint_id": "h1",
            "after_attempt": 1
          }
        ],
        "module_id": "day13-g-traces",
        "max_points": 1,
        "interaction": {
          "type": "single_select",
          "prompt": "Bối cảnh:\nTrace có root gateway, child agent, child model và child tool; async worker tiếp tục sau queue.\n\nCâu hỏi:\nMô hình nào đúng?",
          "choices": [
            {
              "text": "Tạo trace mới không liên hệ",
              "choice_id": "a"
            },
            {
              "text": "Dùng correlation ID thay mọi span relationship",
              "choice_id": "b"
            },
            {
              "text": "Cho mọi span cùng parent root dù execution nested",
              "choice_id": "c"
            },
            {
              "text": "Propagate/link context qua queue đúng causality",
              "choice_id": "d"
            }
          ],
          "presentation_policy": {
            "shuffle_at_delivery": true,
            "do_not_expose_choice_ids": true
          },
          "prompt_presentation": {
            "format": "sectioned_plain_text",
            "preserve_line_breaks": true
          }
        },
        "question_id": "d13-q057",
        "primary_kc_id": "kc-trace-span-context-model",
        "grading_method": "deterministic",
        "question_version": 3,
        "cognitive_operation": "Analyze",
        "contributing_kc_ids": [],
        "estimated_difficulty": "medium"
      },
      {
        "servable": false,
        "role": "reassessment",
        "hints": [
          {
            "text": "Bắt đầu từ observable outcome rồi lần lượt kiểm tra Trace identity, Root/child span.",
            "hint_id": "h1",
            "after_attempt": 1
          }
        ],
        "module_id": "day13-g-traces",
        "max_points": 4,
        "interaction": {
          "type": "short_text",
          "prompt": "Bối cảnh:\nRequest fan-out hai tool song song rồi join synthesis.\n\nCâu hỏi:\nDựng trace graph và status contract.",
          "prompt_presentation": {
            "format": "sectioned_plain_text",
            "preserve_line_breaks": true
          }
        },
        "question_id": "d13-q058",
        "primary_kc_id": "kc-trace-span-context-model",
        "grading_method": "criterion_rubric",
        "question_version": 3,
        "cognitive_operation": "Create",
        "contributing_kc_ids": [],
        "estimated_difficulty": "hard"
      },
      {
        "servable": true,
        "role": "initial_check",
        "hints": [
          {
            "text": "Đối chiếu các lựa chọn với: Root invocation, Model generation span.",
            "hint_id": "h1",
            "after_attempt": 1
          }
        ],
        "module_id": "day13-g-traces",
        "max_points": 1,
        "interaction": {
          "type": "single_select",
          "prompt": "Bối cảnh:\nAgent loop plan→retrieve→model→tool→synthesize, hiện toàn bộ là một span 12s.\n\nCâu hỏi:\nThiết kế span nào hữu ích?",
          "choices": [
            {
              "text": "Chỉ một root span cho toàn bộ agent loop",
              "choice_id": "a"
            },
            {
              "text": "Span chứa full chain-of-thought của model",
              "choice_id": "b"
            },
            {
              "text": "Span theo operation/retry, không theo token",
              "choice_id": "c"
            },
            {
              "text": "Span cho từng dòng code và từng token sinh ra",
              "choice_id": "d"
            }
          ],
          "presentation_policy": {
            "shuffle_at_delivery": true,
            "do_not_expose_choice_ids": true
          },
          "prompt_presentation": {
            "format": "sectioned_plain_text",
            "preserve_line_breaks": true
          }
        },
        "question_id": "d13-q059",
        "primary_kc_id": "kc-agent-span-boundary-design",
        "grading_method": "deterministic",
        "question_version": 3,
        "cognitive_operation": "Analyze",
        "contributing_kc_ids": [],
        "estimated_difficulty": "medium"
      },
      {
        "servable": false,
        "role": "reassessment",
        "hints": [
          {
            "text": "Bắt đầu từ observable outcome rồi lần lượt kiểm tra Root invocation, Model generation span.",
            "hint_id": "h1",
            "after_attempt": 1
          }
        ],
        "module_id": "day13-g-traces",
        "max_points": 4,
        "interaction": {
          "type": "short_text",
          "prompt": "Bối cảnh:\nLoop có ba model attempts và hai tool retries.\n\nCâu hỏi:\nĐặt boundary để nhìn repeated-call/retry mà không fragment trivial work.",
          "prompt_presentation": {
            "format": "sectioned_plain_text",
            "preserve_line_breaks": true
          }
        },
        "question_id": "d13-q060",
        "primary_kc_id": "kc-agent-span-boundary-design",
        "grading_method": "criterion_rubric",
        "question_version": 3,
        "cognitive_operation": "Create",
        "contributing_kc_ids": [],
        "estimated_difficulty": "hard"
      },
      {
        "servable": true,
        "role": "initial_check",
        "hints": [
          {
            "text": "Trace signal từ code tới nơi query.",
            "hint_id": "h1",
            "after_attempt": 1
          }
        ],
        "module_id": "day13-g-traces",
        "max_points": 1,
        "interaction": {
          "type": "ordering",
          "prompt": "Bối cảnh:\nApp cần gửi OTel signals qua một processing boundary trước backend.\n\nCâu hỏi:\nSắp data path.",
          "options": [
            {
              "text": "SDK instrument và tạo signal/context",
              "option_id": "o1"
            },
            {
              "text": "OTLP gửi tới Collector",
              "option_id": "o2"
            },
            {
              "text": "Processor redact/enrich/sample",
              "option_id": "o3"
            },
            {
              "text": "Exporter route theo destination",
              "option_id": "o4"
            },
            {
              "text": "Backend store/query",
              "option_id": "o5"
            }
          ],
          "presentation_policy": {
            "do_not_expose_option_ids": true,
            "shuffle_initial_order_at_delivery": true
          },
          "prompt_presentation": {
            "format": "sectioned_plain_text",
            "preserve_line_breaks": true
          }
        },
        "question_id": "d13-q061",
        "primary_kc_id": "kc-otel-vendor-neutral-export",
        "grading_method": "deterministic",
        "question_version": 3,
        "cognitive_operation": "Understand",
        "contributing_kc_ids": [],
        "estimated_difficulty": "medium"
      },
      {
        "servable": false,
        "role": "reassessment",
        "hints": [
          {
            "text": "Bắt đầu từ observable outcome rồi lần lượt kiểm tra SDK instrumentation, Collector boundary.",
            "hint_id": "h1",
            "after_attempt": 1
          }
        ],
        "module_id": "day13-g-traces",
        "max_points": 4,
        "interaction": {
          "type": "short_text",
          "prompt": "Bối cảnh:\nMetrics, logs và traces cần redact rồi fan-out sang storage riêng.\n\nCâu hỏi:\nĐặt SDK/collector/processor/exporter/backend và migration behavior.",
          "prompt_presentation": {
            "format": "sectioned_plain_text",
            "preserve_line_breaks": true
          }
        },
        "question_id": "d13-q062",
        "primary_kc_id": "kc-otel-vendor-neutral-export",
        "grading_method": "criterion_rubric",
        "question_version": 3,
        "cognitive_operation": "Create",
        "contributing_kc_ids": [],
        "estimated_difficulty": "hard"
      },
      {
        "servable": true,
        "role": "initial_check",
        "hints": [
          {
            "text": "Đối chiếu các lựa chọn với: Operation name, Provider/model.",
            "hint_id": "h1",
            "after_attempt": 1
          }
        ],
        "module_id": "day13-g-traces",
        "max_points": 1,
        "interaction": {
          "type": "single_select",
          "prompt": "Bối cảnh:\nDashboard query field cũ nhưng service nâng semantic convention đổi tên/meaning attribute.\n\nCâu hỏi:\nCách xử lý đúng?",
          "choices": [
            {
              "text": "Version contract và map compatibility",
              "choice_id": "a"
            },
            {
              "text": "Coi mọi attribute name ổn định mãi",
              "choice_id": "b"
            },
            {
              "text": "Copy raw prompt để tránh schema change",
              "choice_id": "c"
            },
            {
              "text": "Chỉ sửa dashboard không ghi version",
              "choice_id": "d"
            }
          ],
          "presentation_policy": {
            "shuffle_at_delivery": true,
            "do_not_expose_choice_ids": true
          },
          "prompt_presentation": {
            "format": "sectioned_plain_text",
            "preserve_line_breaks": true
          }
        },
        "question_id": "d13-q063",
        "primary_kc_id": "kc-genai-trace-semantic-contract",
        "grading_method": "deterministic",
        "question_version": 3,
        "cognitive_operation": "Analyze",
        "contributing_kc_ids": [],
        "estimated_difficulty": "medium"
      },
      {
        "servable": false,
        "role": "reassessment",
        "hints": [
          {
            "text": "Bắt đầu từ observable outcome rồi lần lượt kiểm tra Operation name, Provider/model.",
            "hint_id": "h1",
            "after_attempt": 1
          }
        ],
        "module_id": "day13-g-traces",
        "max_points": 4,
        "interaction": {
          "type": "short_text",
          "prompt": "Bối cảnh:\nModel span cần model identity, token usage, finish reason và tool relation; content capture là opt-in.\n\nCâu hỏi:\nThiết kế versioned mapping và validation.",
          "prompt_presentation": {
            "format": "sectioned_plain_text",
            "preserve_line_breaks": true
          }
        },
        "question_id": "d13-q064",
        "primary_kc_id": "kc-genai-trace-semantic-contract",
        "grading_method": "criterion_rubric",
        "question_version": 3,
        "cognitive_operation": "Create",
        "contributing_kc_ids": [],
        "estimated_difficulty": "hard"
      },
      {
        "servable": true,
        "role": "initial_check",
        "hints": [
          {
            "text": "Chọn các rule dùng outcome nhưng không mở rộng data risk.",
            "hint_id": "h1",
            "after_attempt": 1
          }
        ],
        "module_id": "day13-g-traces",
        "max_points": 3,
        "interaction": {
          "type": "multi_select",
          "prompt": "Bối cảnh:\nTraffic lớn; error hiếm chỉ biết sau response; collector buffer hữu hạn.\n\nCâu hỏi:\nPolicy nào giữ diagnosis mà vẫn có budget? Chọn tất cả phương án đúng.",
          "choices": [
            {
              "text": "Tail-sample giữ error/slow/high-cost",
              "choice_id": "a"
            },
            {
              "text": "Sample normal traffic theo budget",
              "choice_id": "b"
            },
            {
              "text": "Bound buffer và ghi coverage/bias",
              "choice_id": "c"
            },
            {
              "text": "Head-sample 1% rồi khẳng định đã giữ mọi error",
              "choice_id": "d"
            },
            {
              "text": "Capture raw PII để quyết định sample",
              "choice_id": "e"
            }
          ],
          "presentation_policy": {
            "shuffle_at_delivery": true,
            "do_not_expose_choice_ids": true
          },
          "prompt_presentation": {
            "format": "sectioned_plain_text",
            "preserve_line_breaks": true
          },
          "selection_instruction": "Chọn tất cả phương án đúng."
        },
        "question_id": "d13-q065",
        "primary_kc_id": "kc-trace-sampling-outcome-policy",
        "grading_method": "deterministic",
        "question_version": 3,
        "cognitive_operation": "Analyze",
        "contributing_kc_ids": [],
        "estimated_difficulty": "hard"
      },
      {
        "servable": false,
        "role": "reassessment",
        "hints": [
          {
            "text": "Bắt đầu từ observable outcome rồi lần lượt kiểm tra Head decision timing, Tail decision timing.",
            "hint_id": "h1",
            "after_attempt": 1
          }
        ],
        "module_id": "day13-g-traces",
        "max_points": 4,
        "interaction": {
          "type": "short_text",
          "prompt": "Bối cảnh:\nTraffic cao, collector buffer hữu hạn và privacy policy cấm raw content.\n\nCâu hỏi:\nThiết kế outcome-aware trace sampling.",
          "prompt_presentation": {
            "format": "sectioned_plain_text",
            "preserve_line_breaks": true
          }
        },
        "question_id": "d13-q066",
        "primary_kc_id": "kc-trace-sampling-outcome-policy",
        "grading_method": "criterion_rubric",
        "question_version": 3,
        "cognitive_operation": "Create",
        "contributing_kc_ids": [],
        "estimated_difficulty": "hard"
      },
      {
        "servable": true,
        "role": "initial_check",
        "hints": [
          {
            "text": "Đối chiếu các lựa chọn với: Sequential dependency, External waiting.",
            "hint_id": "h1",
            "after_attempt": 1
          }
        ],
        "module_id": "day13-g-traces",
        "max_points": 1,
        "interaction": {
          "type": "single_select",
          "prompt": "Bối cảnh:\nWaterfall: model 1s, tool A 2s rồi tool B 2s không overlap dù độc lập.\n\nCâu hỏi:\nPattern và intervention?",
          "choices": [
            {
              "text": "Retry storm",
              "choice_id": "a"
            },
            {
              "text": "Model-token bottleneck",
              "choice_id": "b"
            },
            {
              "text": "Serial execution; parallelize A/B",
              "choice_id": "c"
            },
            {
              "text": "Queue waiting",
              "choice_id": "d"
            }
          ],
          "presentation_policy": {
            "shuffle_at_delivery": true,
            "do_not_expose_choice_ids": true
          },
          "prompt_presentation": {
            "format": "sectioned_plain_text",
            "preserve_line_breaks": true
          }
        },
        "question_id": "d13-q067",
        "primary_kc_id": "kc-trace-bottleneck-pattern-diagnosis",
        "grading_method": "deterministic",
        "question_version": 3,
        "cognitive_operation": "Analyze",
        "contributing_kc_ids": [],
        "estimated_difficulty": "medium"
      },
      {
        "servable": false,
        "role": "reassessment",
        "hints": [
          {
            "text": "Bắt đầu từ observable outcome rồi lần lượt kiểm tra Sequential dependency, External waiting.",
            "hint_id": "h1",
            "after_attempt": 1
          }
        ],
        "module_id": "day13-g-traces",
        "max_points": 4,
        "interaction": {
          "type": "short_text",
          "prompt": "Bối cảnh:\nTrace khác có cùng tool gọi 5 lần, mỗi lần ngắn, do result schema fail.\n\nCâu hỏi:\nPhân loại repeated-call/retry pattern và kế hoạch verify.",
          "prompt_presentation": {
            "format": "sectioned_plain_text",
            "preserve_line_breaks": true
          }
        },
        "question_id": "d13-q068",
        "primary_kc_id": "kc-trace-bottleneck-pattern-diagnosis",
        "grading_method": "criterion_rubric",
        "question_version": 3,
        "cognitive_operation": "Analyze",
        "contributing_kc_ids": [],
        "estimated_difficulty": "hard"
      },
      {
        "servable": true,
        "role": "initial_check",
        "hints": [
          {
            "text": "Đối chiếu các lựa chọn với: Prompt name/label/version, Resolved source.",
            "hint_id": "h1",
            "after_attempt": 1
          }
        ],
        "module_id": "day13-g-traces",
        "max_points": 1,
        "interaction": {
          "type": "single_select",
          "prompt": "Bối cảnh:\nProduction label trỏ prompt v7 nhưng trace không ghi resolved version; rollback nói về v6 không chứng minh được.\n\nCâu hỏi:\nFix đúng?",
          "choices": [
            {
              "text": "Đổi model name để phân biệt prompt",
              "choice_id": "a"
            },
            {
              "text": "Resolved prompt version/hash",
              "choice_id": "b"
            },
            {
              "text": "Chỉ log label `production`",
              "choice_id": "c"
            },
            {
              "text": "Copy full prompt chứa PII",
              "choice_id": "d"
            }
          ],
          "presentation_policy": {
            "shuffle_at_delivery": true,
            "do_not_expose_choice_ids": true
          },
          "prompt_presentation": {
            "format": "sectioned_plain_text",
            "preserve_line_breaks": true
          }
        },
        "question_id": "d13-q069",
        "primary_kc_id": "kc-prompt-version-traceability",
        "grading_method": "deterministic",
        "question_version": 3,
        "cognitive_operation": "Analyze",
        "contributing_kc_ids": [],
        "estimated_difficulty": "medium"
      },
      {
        "servable": false,
        "role": "reassessment",
        "hints": [
          {
            "text": "Bắt đầu từ observable outcome rồi lần lượt kiểm tra Prompt name/label/version, Resolved source.",
            "hint_id": "h1",
            "after_attempt": 1
          }
        ],
        "module_id": "day13-g-traces",
        "max_points": 4,
        "interaction": {
          "type": "short_text",
          "prompt": "Bối cảnh:\nCùng input chạy baseline v6 và candidate v7; sau canary quality giảm.\n\nCâu hỏi:\nThiết kế compare, rollout và rollback evidence.",
          "prompt_presentation": {
            "format": "sectioned_plain_text",
            "preserve_line_breaks": true
          }
        },
        "question_id": "d13-q070",
        "primary_kc_id": "kc-prompt-version-traceability",
        "grading_method": "criterion_rubric",
        "question_version": 3,
        "cognitive_operation": "Create",
        "contributing_kc_ids": [],
        "estimated_difficulty": "hard"
      },
      {
        "servable": true,
        "role": "initial_check",
        "hints": [
          {
            "text": "Đối chiếu các lựa chọn với: Signal coverage, Existing stack/team skill.",
            "hint_id": "h1",
            "after_attempt": 1
          }
        ],
        "module_id": "day13-g-platform",
        "max_points": 1,
        "interaction": {
          "type": "single_select",
          "prompt": "Bối cảnh:\nTeam nhỏ, cần metrics/logs/traces, dữ liệu PII không được ra region, ngân sách ops thấp.\n\nCâu hỏi:\nQuyết định nào hợp lý?",
          "choices": [
            {
              "text": "Managed/hybrid nếu giữ PII đúng region; self-host phần bắt buộc",
              "choice_id": "a"
            },
            {
              "text": "Dùng SaaS ngoài region vì giảm được ops burden",
              "choice_id": "b"
            },
            {
              "text": "Self-host toàn bộ dù team không đủ sức vận hành",
              "choice_id": "c"
            },
            {
              "text": "Chọn backend có nhiều dashboard dựng sẵn nhất",
              "choice_id": "d"
            }
          ],
          "presentation_policy": {
            "shuffle_at_delivery": true,
            "do_not_expose_choice_ids": true
          },
          "prompt_presentation": {
            "format": "sectioned_plain_text",
            "preserve_line_breaks": true
          }
        },
        "question_id": "d13-q071",
        "primary_kc_id": "kc-observability-stack-constraint-fit",
        "grading_method": "deterministic",
        "question_version": 3,
        "cognitive_operation": "Evaluate",
        "contributing_kc_ids": [],
        "estimated_difficulty": "medium"
      },
      {
        "servable": false,
        "role": "reassessment",
        "hints": [
          {
            "text": "Bắt đầu từ observable outcome rồi lần lượt kiểm tra Signal coverage, Existing stack/team skill.",
            "hint_id": "h1",
            "after_attempt": 1
          }
        ],
        "module_id": "day13-g-platform",
        "max_points": 4,
        "interaction": {
          "type": "short_text",
          "prompt": "Bối cảnh:\nMột team có SRE mạnh, air-gapped workload và cần LLM-specific eval/traces.\n\nCâu hỏi:\nLập stack decision matrix.",
          "prompt_presentation": {
            "format": "sectioned_plain_text",
            "preserve_line_breaks": true
          }
        },
        "question_id": "d13-q072",
        "primary_kc_id": "kc-observability-stack-constraint-fit",
        "grading_method": "criterion_rubric",
        "question_version": 3,
        "cognitive_operation": "Evaluate",
        "contributing_kc_ids": [],
        "estimated_difficulty": "hard"
      },
      {
        "servable": true,
        "role": "initial_check",
        "hints": [
          {
            "text": "Đối chiếu các lựa chọn với: Collector, Metric route.",
            "hint_id": "h1",
            "after_attempt": 1
          }
        ],
        "module_id": "day13-g-platform",
        "max_points": 1,
        "interaction": {
          "type": "single_select",
          "prompt": "Bối cảnh:\nService gửi cùng trace trực tiếp backend A và qua collector tới A, gây duplicate.\n\nCâu hỏi:\nFix đúng?",
          "choices": [
            {
              "text": "Giữ cả hai để tăng reliability mà không dedupe",
              "choice_id": "a"
            },
            {
              "text": "Đổi trace ID ở collector",
              "choice_id": "b"
            },
            {
              "text": "Chỉ xóa dashboard duplicate",
              "choice_id": "c"
            },
            {
              "text": "Một route qua collector với explicit fan-out",
              "choice_id": "d"
            }
          ],
          "presentation_policy": {
            "shuffle_at_delivery": true,
            "do_not_expose_choice_ids": true
          },
          "prompt_presentation": {
            "format": "sectioned_plain_text",
            "preserve_line_breaks": true
          }
        },
        "question_id": "d13-q073",
        "primary_kc_id": "kc-collector-signal-fanout",
        "grading_method": "deterministic",
        "question_version": 3,
        "cognitive_operation": "Analyze",
        "contributing_kc_ids": [],
        "estimated_difficulty": "medium"
      },
      {
        "servable": false,
        "role": "reassessment",
        "hints": [
          {
            "text": "Bắt đầu từ observable outcome rồi lần lượt kiểm tra Collector, Metric route.",
            "hint_id": "h1",
            "after_attempt": 1
          }
        ],
        "module_id": "day13-g-platform",
        "max_points": 4,
        "interaction": {
          "type": "short_text",
          "prompt": "Bối cảnh:\nMetrics tới Prometheus, logs tới Loki, traces tới Tempo; mọi signal cần cùng correlation semantics.\n\nCâu hỏi:\nThiết kế route và phát hiện path thiếu/duplicate.",
          "prompt_presentation": {
            "format": "sectioned_plain_text",
            "preserve_line_breaks": true
          }
        },
        "question_id": "d13-q074",
        "primary_kc_id": "kc-collector-signal-fanout",
        "grading_method": "criterion_rubric",
        "question_version": 3,
        "cognitive_operation": "Create",
        "contributing_kc_ids": [],
        "estimated_difficulty": "hard"
      },
      {
        "servable": true,
        "role": "initial_check",
        "hints": [
          {
            "text": "Xét update operation: increment-only, current value hay observe sample.",
            "hint_id": "h1",
            "after_attempt": 1
          }
        ],
        "module_id": "day13-g-platform",
        "max_points": 3,
        "interaction": {
          "left": [
            {
              "id": "x1",
              "text": "Total requests"
            },
            {
              "id": "x2",
              "text": "Jobs đang chạy"
            },
            {
              "id": "x3",
              "text": "Request latency distribution"
            }
          ],
          "type": "matching",
          "right": [
            {
              "id": "r1",
              "text": "Counter"
            },
            {
              "id": "r2",
              "text": "Gauge"
            },
            {
              "id": "r3",
              "text": "Histogram"
            }
          ],
          "prompt": "Bối cảnh:\nChọn Prometheus metric type theo behavior.\n\nCâu hỏi:\nGhép measurement với type.",
          "presentation_policy": {
            "do_not_align_pairs_by_row": true,
            "shuffle_right_at_delivery": true,
            "do_not_expose_internal_ids": true
          },
          "prompt_presentation": {
            "format": "sectioned_plain_text",
            "preserve_line_breaks": true
          }
        },
        "question_id": "d13-q075",
        "primary_kc_id": "kc-prometheus-metric-type-selection",
        "grading_method": "deterministic",
        "question_version": 3,
        "cognitive_operation": "Apply",
        "contributing_kc_ids": [],
        "estimated_difficulty": "easy"
      },
      {
        "servable": false,
        "role": "reassessment",
        "hints": [
          {
            "text": "Bắt đầu từ observable outcome rồi lần lượt kiểm tra Counter, Gauge.",
            "hint_id": "h1",
            "after_attempt": 1
          }
        ],
        "module_id": "day13-g-platform",
        "max_points": 3,
        "interaction": {
          "type": "short_text",
          "prompt": "Bối cảnh:\nCache hit total, queue depth và TTFT cần dashboard rate/current/P95.\n\nCâu hỏi:\nChọn type, update và query.",
          "prompt_presentation": {
            "format": "sectioned_plain_text",
            "preserve_line_breaks": true
          }
        },
        "question_id": "d13-q076",
        "primary_kc_id": "kc-prometheus-metric-type-selection",
        "grading_method": "criterion_rubric",
        "question_version": 3,
        "cognitive_operation": "Apply",
        "contributing_kc_ids": [],
        "estimated_difficulty": "medium"
      },
      {
        "servable": true,
        "role": "initial_check",
        "hints": [
          {
            "text": "Đối chiếu các lựa chọn với: Request counter, Latency observation.",
            "hint_id": "h1",
            "after_attempt": 1
          }
        ],
        "module_id": "day13-g-platform",
        "max_points": 1,
        "interaction": {
          "type": "single_select",
          "prompt": "Bối cảnh:\nHandler increment success trước khi model/tool chạy; exception vẫn được tính success.\n\nCâu hỏi:\nFix đúng?",
          "choices": [
            {
              "text": "Chỉ increment success tại entry trước mọi call",
              "choice_id": "a"
            },
            {
              "text": "Đếm ingress, đo finally, gán outcome terminal",
              "choice_id": "b"
            },
            {
              "text": "Loại failed request khỏi latency để giữ SLO đẹp",
              "choice_id": "c"
            },
            {
              "text": "Đếm mỗi retry như một user request độc lập",
              "choice_id": "d"
            }
          ],
          "presentation_policy": {
            "shuffle_at_delivery": true,
            "do_not_expose_choice_ids": true
          },
          "prompt_presentation": {
            "format": "sectioned_plain_text",
            "preserve_line_breaks": true
          }
        },
        "question_id": "d13-q077",
        "primary_kc_id": "kc-agent-metric-instrumentation",
        "grading_method": "deterministic",
        "question_version": 3,
        "cognitive_operation": "Analyze",
        "contributing_kc_ids": [],
        "estimated_difficulty": "medium"
      },
      {
        "servable": false,
        "role": "reassessment",
        "hints": [
          {
            "text": "Bắt đầu từ observable outcome rồi lần lượt kiểm tra Request counter, Latency observation.",
            "hint_id": "h1",
            "after_attempt": 1
          }
        ],
        "module_id": "day13-g-platform",
        "max_points": 4,
        "interaction": {
          "type": "short_text",
          "prompt": "Bối cảnh:\nMột request có hai model retries và cuối cùng success.\n\nCâu hỏi:\nĐặt instrumentation points cho request, attempts, token và duration.",
          "prompt_presentation": {
            "format": "sectioned_plain_text",
            "preserve_line_breaks": true
          }
        },
        "question_id": "d13-q078",
        "primary_kc_id": "kc-agent-metric-instrumentation",
        "grading_method": "criterion_rubric",
        "question_version": 3,
        "cognitive_operation": "Create",
        "contributing_kc_ids": [],
        "estimated_difficulty": "hard"
      },
      {
        "servable": true,
        "role": "initial_check",
        "hints": [
          {
            "text": "Nhân số giá trị độc lập của từng label.",
            "hint_id": "h1",
            "after_attempt": 1
          }
        ],
        "module_id": "day13-g-platform",
        "max_points": 1,
        "interaction": {
          "type": "numeric_input",
          "prompt": "Bối cảnh:\nMột metric có labels `user_id` 1.000.000 giá trị, `request_id` 10.000.000 giá trị và `model` 5 giá trị. Giả sử mọi combination có thể xuất hiện.\n\nCâu hỏi:\nUpper bound có bao nhiêu time series?",
          "required_unit": "series",
          "prompt_presentation": {
            "format": "sectioned_plain_text",
            "preserve_line_breaks": true
          }
        },
        "question_id": "d13-q079",
        "primary_kc_id": "kc-metric-label-cardinality-control",
        "grading_method": "deterministic",
        "question_version": 3,
        "cognitive_operation": "Apply",
        "contributing_kc_ids": [],
        "estimated_difficulty": "hard"
      },
      {
        "servable": false,
        "role": "reassessment",
        "hints": [
          {
            "text": "Bắt đầu từ observable outcome rồi lần lượt kiểm tra Tổ hợp Cartesian của label, Bounded label.",
            "hint_id": "h1",
            "after_attempt": 1
          }
        ],
        "module_id": "day13-g-platform",
        "max_points": 4,
        "interaction": {
          "type": "short_text",
          "prompt": "Bối cảnh:\nCần cost theo tenant/feature/model nhưng vẫn debug request cụ thể.\n\nCâu hỏi:\nSửa label/event contract và verify query.",
          "prompt_presentation": {
            "format": "sectioned_plain_text",
            "preserve_line_breaks": true
          }
        },
        "question_id": "d13-q080",
        "primary_kc_id": "kc-metric-label-cardinality-control",
        "grading_method": "criterion_rubric",
        "question_version": 3,
        "cognitive_operation": "Create",
        "contributing_kc_ids": [],
        "estimated_difficulty": "hard"
      },
      {
        "servable": true,
        "role": "follow_up",
        "hints": [
          {
            "text": "Metric series có nhân theo số giá trị ID không?",
            "hint_id": "h1",
            "after_attempt": 1
          }
        ],
        "module_id": "day13-g-platform",
        "max_points": 1,
        "interaction": {
          "type": "single_select",
          "prompt": "Bối cảnh:\nTeam cần debug một request cụ thể và định thêm `request_id` làm metric label.\n\nCâu hỏi:\nĐặt identity đó ở đâu phù hợp hơn?",
          "choices": [
            {
              "text": "request_id ở log/trace",
              "choice_id": "a"
            },
            {
              "text": "Metric label vì mọi ID đều query tốt",
              "choice_id": "b"
            },
            {
              "text": "Metric name riêng cho mỗi request",
              "choice_id": "c"
            },
            {
              "text": "Không lưu ở đâu",
              "choice_id": "d"
            }
          ],
          "presentation_policy": {
            "shuffle_at_delivery": true,
            "do_not_expose_choice_ids": true
          },
          "prompt_presentation": {
            "format": "sectioned_plain_text",
            "preserve_line_breaks": true
          }
        },
        "question_id": "d13-q081",
        "primary_kc_id": "kc-metric-label-cardinality-control",
        "grading_method": "deterministic",
        "question_version": 3,
        "cognitive_operation": "Analyze",
        "contributing_kc_ids": [],
        "estimated_difficulty": "easy"
      },
      {
        "servable": true,
        "role": "initial_check",
        "hints": [
          {
            "text": "Đối chiếu các lựa chọn với: Overview, Engineering detail.",
            "hint_id": "h1",
            "after_attempt": 1
          }
        ],
        "module_id": "day13-g-dashboard",
        "max_points": 1,
        "interaction": {
          "type": "single_select",
          "prompt": "Bối cảnh:\nCEO dashboard mở thẳng 80 span latency panels và không có business outcome.\n\nCâu hỏi:\nSửa nào đúng?",
          "choices": [
            {
              "text": "Thêm thêm mọi metric vào một trang",
              "choice_id": "a"
            },
            {
              "text": "Chỉ giữ raw traces",
              "choice_id": "b"
            },
            {
              "text": "Dùng cùng density cho CEO và SRE",
              "choice_id": "c"
            },
            {
              "text": "Overview → detail → drill-down",
              "choice_id": "d"
            }
          ],
          "presentation_policy": {
            "shuffle_at_delivery": true,
            "do_not_expose_choice_ids": true
          },
          "prompt_presentation": {
            "format": "sectioned_plain_text",
            "preserve_line_breaks": true
          }
        },
        "question_id": "d13-q082",
        "primary_kc_id": "kc-layered-dashboard-audience-design",
        "grading_method": "deterministic",
        "question_version": 3,
        "cognitive_operation": "Analyze",
        "contributing_kc_ids": [],
        "estimated_difficulty": "medium"
      },
      {
        "servable": false,
        "role": "reassessment",
        "hints": [
          {
            "text": "Bắt đầu từ observable outcome rồi lần lượt kiểm tra Overview, Engineering detail.",
            "hint_id": "h1",
            "after_attempt": 1
          }
        ],
        "module_id": "day13-g-dashboard",
        "max_points": 4,
        "interaction": {
          "type": "short_text",
          "prompt": "Bối cảnh:\nProduct cần overview quality/cost; on-call cần error/latency; cả hai cần drill-down request.\n\nCâu hỏi:\nThiết kế ba layer và handoff.",
          "prompt_presentation": {
            "format": "sectioned_plain_text",
            "preserve_line_breaks": true
          }
        },
        "question_id": "d13-q083",
        "primary_kc_id": "kc-layered-dashboard-audience-design",
        "grading_method": "criterion_rubric",
        "question_version": 3,
        "cognitive_operation": "Create",
        "contributing_kc_ids": [],
        "estimated_difficulty": "hard"
      },
      {
        "servable": true,
        "role": "initial_check",
        "hints": [
          {
            "text": "Đối chiếu các lựa chọn với: Named panel profile, Traffic.",
            "hint_id": "h1",
            "after_attempt": 1
          }
        ],
        "module_id": "day13-g-dashboard",
        "max_points": 1,
        "interaction": {
          "type": "single_select",
          "prompt": "Bối cảnh:\nSpec yêu cầu TTFT P95, task cost P95, tool-failure rate và groundedness; dashboard chỉ có CPU, QPS, average latency.\n\nCâu hỏi:\nKết luận nào đúng?",
          "choices": [
            {
              "text": "CPU suy ra groundedness",
              "choice_id": "a"
            },
            {
              "text": "QPS suy ra task cost",
              "choice_id": "b"
            },
            {
              "text": "Thiếu bốn binding",
              "choice_id": "c"
            },
            {
              "text": "Average latency thay TTFT P95",
              "choice_id": "d"
            }
          ],
          "presentation_policy": {
            "shuffle_at_delivery": true,
            "do_not_expose_choice_ids": true
          },
          "prompt_presentation": {
            "format": "sectioned_plain_text",
            "preserve_line_breaks": true
          }
        },
        "question_id": "d13-q084",
        "primary_kc_id": "kc-ai-service-panel-coverage",
        "grading_method": "deterministic",
        "question_version": 3,
        "cognitive_operation": "Analyze",
        "contributing_kc_ids": [],
        "estimated_difficulty": "medium"
      },
      {
        "servable": false,
        "role": "reassessment",
        "hints": [
          {
            "text": "Bắt đầu từ observable outcome rồi lần lượt kiểm tra Named panel profile, Traffic.",
            "hint_id": "h1",
            "after_attempt": 1
          }
        ],
        "module_id": "day13-g-dashboard",
        "max_points": 4,
        "interaction": {
          "type": "short_text",
          "prompt": "Bối cảnh:\nCó hai profile dashboard khác nhau: API service và AI task quality.\n\nCâu hỏi:\nMap required panel sang event/field/aggregation và báo binding sai.",
          "prompt_presentation": {
            "format": "sectioned_plain_text",
            "preserve_line_breaks": true
          }
        },
        "question_id": "d13-q085",
        "primary_kc_id": "kc-ai-service-panel-coverage",
        "grading_method": "criterion_rubric",
        "question_version": 3,
        "cognitive_operation": "Analyze",
        "contributing_kc_ids": [],
        "estimated_difficulty": "hard"
      },
      {
        "servable": true,
        "role": "initial_check",
        "hints": [
          {
            "text": "Hỏi viewer cần compare, detect distribution hay trace một request.",
            "hint_id": "h1",
            "after_attempt": 1
          }
        ],
        "module_id": "day13-g-dashboard",
        "max_points": 4,
        "interaction": {
          "left": [
            {
              "id": "x1",
              "text": "Latency trend theo thời gian"
            },
            {
              "id": "x2",
              "text": "Cost so sánh theo model"
            },
            {
              "id": "x3",
              "text": "Latency distribution"
            },
            {
              "id": "x4",
              "text": "Một request critical path"
            }
          ],
          "type": "matching",
          "right": [
            {
              "id": "r1",
              "text": "Time series"
            },
            {
              "id": "r2",
              "text": "Bar/table"
            },
            {
              "id": "r3",
              "text": "Histogram/heatmap"
            },
            {
              "id": "r4",
              "text": "Trace waterfall"
            }
          ],
          "prompt": "Bối cảnh:\nChọn panel theo analytical task.\n\nCâu hỏi:\nGhép task với form.",
          "presentation_policy": {
            "do_not_align_pairs_by_row": true,
            "shuffle_right_at_delivery": true,
            "do_not_expose_internal_ids": true
          },
          "prompt_presentation": {
            "format": "sectioned_plain_text",
            "preserve_line_breaks": true
          }
        },
        "question_id": "d13-q086",
        "primary_kc_id": "kc-dashboard-panel-form-selection",
        "grading_method": "deterministic",
        "question_version": 3,
        "cognitive_operation": "Apply",
        "contributing_kc_ids": [],
        "estimated_difficulty": "easy"
      },
      {
        "servable": false,
        "role": "reassessment",
        "hints": [
          {
            "text": "Bắt đầu từ observable outcome rồi lần lượt kiểm tra Time series, Single-value stat.",
            "hint_id": "h1",
            "after_attempt": 1
          }
        ],
        "module_id": "day13-g-dashboard",
        "max_points": 4,
        "interaction": {
          "type": "short_text",
          "prompt": "Bối cảnh:\nCần so cost theo model, error trend và trace waterfall của một request.\n\nCâu hỏi:\nChọn panel form cho từng task.",
          "prompt_presentation": {
            "format": "sectioned_plain_text",
            "preserve_line_breaks": true
          }
        },
        "question_id": "d13-q087",
        "primary_kc_id": "kc-dashboard-panel-form-selection",
        "grading_method": "criterion_rubric",
        "question_version": 3,
        "cognitive_operation": "Apply",
        "contributing_kc_ids": [],
        "estimated_difficulty": "medium"
      },
      {
        "servable": true,
        "role": "initial_check",
        "hints": [
          {
            "text": "Đối chiếu các lựa chọn với: Time range, Unit.",
            "hint_id": "h1",
            "after_attempt": 1
          }
        ],
        "module_id": "day13-g-dashboard",
        "max_points": 1,
        "interaction": {
          "type": "single_select",
          "prompt": "Bối cảnh:\nPanel ghi “Latency 2.4” không unit, không window, không threshold và last refresh 2h trước.\n\nCâu hỏi:\nVấn đề chính?",
          "choices": [
            {
              "text": "Thiếu unit, window, threshold và freshness",
              "choice_id": "a"
            },
            {
              "text": "Chỉ thiếu màu để nhận biết good/bad",
              "choice_id": "b"
            },
            {
              "text": "Chỉ cần tăng font, không cần metadata",
              "choice_id": "c"
            },
            {
              "text": "Giá trị tự đủ nghĩa nếu viewer thuộc team",
              "choice_id": "d"
            }
          ],
          "presentation_policy": {
            "shuffle_at_delivery": true,
            "do_not_expose_choice_ids": true
          },
          "prompt_presentation": {
            "format": "sectioned_plain_text",
            "preserve_line_breaks": true
          }
        },
        "question_id": "d13-q088",
        "primary_kc_id": "kc-dashboard-operational-context",
        "grading_method": "deterministic",
        "question_version": 3,
        "cognitive_operation": "Analyze",
        "contributing_kc_ids": [],
        "estimated_difficulty": "medium"
      },
      {
        "servable": false,
        "role": "reassessment",
        "hints": [
          {
            "text": "Bắt đầu từ observable outcome rồi lần lượt kiểm tra Time range, Unit.",
            "hint_id": "h1",
            "after_attempt": 1
          }
        ],
        "module_id": "day13-g-dashboard",
        "max_points": 4,
        "interaction": {
          "type": "short_text",
          "prompt": "Bối cảnh:\nMột reviewer ngoài team phải nhận ra anomaly trong 30 giây.\n\nCâu hỏi:\nRevise panel contract.",
          "prompt_presentation": {
            "format": "sectioned_plain_text",
            "preserve_line_breaks": true
          }
        },
        "question_id": "d13-q089",
        "primary_kc_id": "kc-dashboard-operational-context",
        "grading_method": "criterion_rubric",
        "question_version": 3,
        "cognitive_operation": "Create",
        "contributing_kc_ids": [],
        "estimated_difficulty": "medium"
      },
      {
        "servable": true,
        "role": "initial_check",
        "hints": [
          {
            "text": "Đối chiếu các lựa chọn với: Versioned definition, Code review.",
            "hint_id": "h1",
            "after_attempt": 1
          }
        ],
        "module_id": "day13-g-dashboard",
        "max_points": 1,
        "interaction": {
          "type": "single_select",
          "prompt": "Bối cảnh:\nDashboard chỉnh tay production nhưng file versioned không đổi; recreate staging mất panel.\n\nCâu hỏi:\nControl đúng?",
          "choices": [
            {
              "text": "Chụp screenshot production là đủ source of truth",
              "choice_id": "a"
            },
            {
              "text": "Chỉ ghi changelog",
              "choice_id": "b"
            },
            {
              "text": "Export sau này nếu nhớ",
              "choice_id": "c"
            },
            {
              "text": "Dashboard-as-code, validate và reproduce",
              "choice_id": "d"
            }
          ],
          "presentation_policy": {
            "shuffle_at_delivery": true,
            "do_not_expose_choice_ids": true
          },
          "prompt_presentation": {
            "format": "sectioned_plain_text",
            "preserve_line_breaks": true
          }
        },
        "question_id": "d13-q090",
        "primary_kc_id": "kc-dashboard-as-code-reproducibility",
        "grading_method": "deterministic",
        "question_version": 3,
        "cognitive_operation": "Analyze",
        "contributing_kc_ids": [],
        "estimated_difficulty": "medium"
      },
      {
        "servable": false,
        "role": "reassessment",
        "hints": [
          {
            "text": "Bắt đầu từ observable outcome rồi lần lượt kiểm tra Versioned definition, Code review.",
            "hint_id": "h1",
            "after_attempt": 1
          }
        ],
        "module_id": "day13-g-dashboard",
        "max_points": 4,
        "interaction": {
          "type": "short_text",
          "prompt": "Bối cảnh:\nMột panel đổi source metric và threshold.\n\nCâu hỏi:\nThiết kế change/validation/rollback path.",
          "prompt_presentation": {
            "format": "sectioned_plain_text",
            "preserve_line_breaks": true
          }
        },
        "question_id": "d13-q091",
        "primary_kc_id": "kc-dashboard-as-code-reproducibility",
        "grading_method": "criterion_rubric",
        "question_version": 3,
        "cognitive_operation": "Create",
        "contributing_kc_ids": [],
        "estimated_difficulty": "hard"
      },
      {
        "servable": true,
        "role": "initial_check",
        "hints": [
          {
            "text": "Đối chiếu các lựa chọn với: User-visible symptom, Cause candidate.",
            "hint_id": "h1",
            "after_attempt": 1
          }
        ],
        "module_id": "day13-g-alerts",
        "max_points": 1,
        "interaction": {
          "type": "single_select",
          "prompt": "Bối cảnh:\nGPU utilization 95% nhưng user latency/error vẫn trong SLO; một route khác latency breach rõ.\n\nCâu hỏi:\nAlert nào nên page?",
          "choices": [
            {
              "text": "Không alert gì vì error thấp",
              "choice_id": "a"
            },
            {
              "text": "Page mọi raw resource metric",
              "choice_id": "b"
            },
            {
              "text": "Page symptom; GPU diagnostic",
              "choice_id": "c"
            },
            {
              "text": "Page GPU 95% trước mọi symptom",
              "choice_id": "d"
            }
          ],
          "presentation_policy": {
            "shuffle_at_delivery": true,
            "do_not_expose_choice_ids": true
          },
          "prompt_presentation": {
            "format": "sectioned_plain_text",
            "preserve_line_breaks": true
          }
        },
        "question_id": "d13-q092",
        "primary_kc_id": "kc-symptom-cause-alert-separation",
        "grading_method": "deterministic",
        "question_version": 3,
        "cognitive_operation": "Analyze",
        "contributing_kc_ids": [],
        "estimated_difficulty": "medium"
      },
      {
        "servable": false,
        "role": "reassessment",
        "hints": [
          {
            "text": "Bắt đầu từ observable outcome rồi lần lượt kiểm tra User-visible symptom, Cause candidate.",
            "hint_id": "h1",
            "after_attempt": 1
          }
        ],
        "module_id": "day13-g-alerts",
        "max_points": 4,
        "interaction": {
          "type": "short_text",
          "prompt": "Bối cảnh:\nQueue saturation thường đi trước latency breach nhưng đôi lúc tự hồi.\n\nCâu hỏi:\nThiết kế page/warning rule.",
          "prompt_presentation": {
            "format": "sectioned_plain_text",
            "preserve_line_breaks": true
          }
        },
        "question_id": "d13-q093",
        "primary_kc_id": "kc-symptom-cause-alert-separation",
        "grading_method": "criterion_rubric",
        "question_version": 3,
        "cognitive_operation": "Create",
        "contributing_kc_ids": [],
        "estimated_difficulty": "hard"
      },
      {
        "servable": true,
        "role": "initial_check",
        "hints": [
          {
            "text": "Đối chiếu các lựa chọn với: Condition/duration, Severity.",
            "hint_id": "h1",
            "after_attempt": 1
          }
        ],
        "module_id": "day13-g-alerts",
        "max_points": 1,
        "interaction": {
          "type": "single_select",
          "prompt": "Bối cảnh:\nAlert hiện chỉ ghi “High latency!” không duration, owner hay link evidence.\n\nCâu hỏi:\nBổ sung nào cần?",
          "choices": [
            {
              "text": "Thêm màu đỏ và tăng số lần notify mỗi phút",
              "choice_id": "a"
            },
            {
              "text": "Condition, impact, evidence, action và owner",
              "choice_id": "b"
            },
            {
              "text": "Chỉ gắn CPU chart không cùng symptom window",
              "choice_id": "c"
            },
            {
              "text": "Gửi alert thiếu context cho toàn bộ nhân sự",
              "choice_id": "d"
            }
          ],
          "presentation_policy": {
            "shuffle_at_delivery": true,
            "do_not_expose_choice_ids": true
          },
          "prompt_presentation": {
            "format": "sectioned_plain_text",
            "preserve_line_breaks": true
          }
        },
        "question_id": "d13-q094",
        "primary_kc_id": "kc-actionable-alert-contract",
        "grading_method": "deterministic",
        "question_version": 3,
        "cognitive_operation": "Analyze",
        "contributing_kc_ids": [],
        "estimated_difficulty": "medium"
      },
      {
        "servable": false,
        "role": "reassessment",
        "hints": [
          {
            "text": "Bắt đầu từ observable outcome rồi lần lượt kiểm tra Condition/duration, Severity.",
            "hint_id": "h1",
            "after_attempt": 1
          }
        ],
        "module_id": "day13-g-alerts",
        "max_points": 4,
        "interaction": {
          "type": "short_text",
          "prompt": "Bối cảnh:\nSLO burn alert cho `/chat` enterprise users.\n\nCâu hỏi:\nViết alert và runbook contract.",
          "prompt_presentation": {
            "format": "sectioned_plain_text",
            "preserve_line_breaks": true
          }
        },
        "question_id": "d13-q095",
        "primary_kc_id": "kc-actionable-alert-contract",
        "grading_method": "criterion_rubric",
        "question_version": 3,
        "cognitive_operation": "Create",
        "contributing_kc_ids": [],
        "estimated_difficulty": "hard"
      },
      {
        "servable": true,
        "role": "initial_check",
        "hints": [
          {
            "text": "Đối chiếu các lựa chọn với: Page, Warning.",
            "hint_id": "h1",
            "after_attempt": 1
          }
        ],
        "module_id": "day13-g-alerts",
        "max_points": 1,
        "interaction": {
          "type": "single_select",
          "prompt": "Bối cảnh:\nMột transient spike 30s tự hồi mỗi giờ; paging policy cần sustained 5 phút.\n\nCâu hỏi:\nRouting đúng?",
          "choices": [
            {
              "text": "Không page transient spike",
              "choice_id": "a"
            },
            {
              "text": "Page ngay mọi spike",
              "choice_id": "b"
            },
            {
              "text": "Xóa metric",
              "choice_id": "c"
            },
            {
              "text": "Route thành P0 ticket",
              "choice_id": "d"
            }
          ],
          "presentation_policy": {
            "shuffle_at_delivery": true,
            "do_not_expose_choice_ids": true
          },
          "prompt_presentation": {
            "format": "sectioned_plain_text",
            "preserve_line_breaks": true
          }
        },
        "question_id": "d13-q096",
        "primary_kc_id": "kc-alert-routing-fatigue-control",
        "grading_method": "deterministic",
        "question_version": 3,
        "cognitive_operation": "Apply",
        "contributing_kc_ids": [],
        "estimated_difficulty": "easy"
      },
      {
        "servable": false,
        "role": "reassessment",
        "hints": [
          {
            "text": "Bắt đầu từ observable outcome rồi lần lượt kiểm tra Page, Warning.",
            "hint_id": "h1",
            "after_attempt": 1
          }
        ],
        "module_id": "day13-g-alerts",
        "max_points": 4,
        "interaction": {
          "type": "short_text",
          "prompt": "Bối cảnh:\nCó critical SLO burn, warning disk trend và noisy duplicate alerts từ ba replicas.\n\nCâu hỏi:\nRoute từng loại và control fatigue.",
          "prompt_presentation": {
            "format": "sectioned_plain_text",
            "preserve_line_breaks": true
          }
        },
        "question_id": "d13-q097",
        "primary_kc_id": "kc-alert-routing-fatigue-control",
        "grading_method": "criterion_rubric",
        "question_version": 3,
        "cognitive_operation": "Analyze",
        "contributing_kc_ids": [],
        "estimated_difficulty": "hard"
      },
      {
        "servable": true,
        "role": "initial_check",
        "hints": [
          {
            "text": "Tách cái đo, mục tiêu nội bộ và cam kết bên ngoài.",
            "hint_id": "h1",
            "after_attempt": 1
          }
        ],
        "module_id": "day13-g-alerts",
        "max_points": 3,
        "interaction": {
          "left": [
            {
              "id": "x1",
              "text": "SLI"
            },
            {
              "id": "x2",
              "text": "SLO"
            },
            {
              "id": "x3",
              "text": "SLA"
            }
          ],
          "type": "matching",
          "right": [
            {
              "id": "r1",
              "text": "Measured good/eligible event ratio"
            },
            {
              "id": "r2",
              "text": "Internal target trong window"
            },
            {
              "id": "r3",
              "text": "External commitment và consequence"
            }
          ],
          "prompt": "Bối cảnh:\nReliability contract có ba lớp.\n\nCâu hỏi:\nGhép khái niệm với vai trò.",
          "presentation_policy": {
            "do_not_align_pairs_by_row": true,
            "shuffle_right_at_delivery": true,
            "do_not_expose_internal_ids": true
          },
          "prompt_presentation": {
            "format": "sectioned_plain_text",
            "preserve_line_breaks": true
          }
        },
        "question_id": "d13-q098",
        "primary_kc_id": "kc-sli-slo-sla-contract",
        "grading_method": "deterministic",
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
            "text": "Bắt đầu từ observable outcome rồi lần lượt kiểm tra Good/eligible event, Population/scope.",
            "hint_id": "h1",
            "after_attempt": 1
          }
        ],
        "module_id": "day13-g-alerts",
        "max_points": 4,
        "interaction": {
          "type": "short_text",
          "prompt": "Bối cảnh:\nService hứa user request success, có internal target và hợp đồng penalty riêng.\n\nCâu hỏi:\nViết ba contract không trộn.",
          "prompt_presentation": {
            "format": "sectioned_plain_text",
            "preserve_line_breaks": true
          }
        },
        "question_id": "d13-q099",
        "primary_kc_id": "kc-sli-slo-sla-contract",
        "grading_method": "criterion_rubric",
        "question_version": 3,
        "cognitive_operation": "Create",
        "contributing_kc_ids": [],
        "estimated_difficulty": "hard"
      },
      {
        "servable": true,
        "role": "follow_up",
        "hints": [
          {
            "text": "So cùng SLI với từng contract riêng.",
            "hint_id": "h1",
            "after_attempt": 1
          }
        ],
        "module_id": "day13-g-alerts",
        "max_points": 1,
        "interaction": {
          "type": "single_select",
          "prompt": "Bối cảnh:\nInternal SLO fail nhưng contractual SLA threshold vẫn đạt.\n\nCâu hỏi:\nKết luận nào đúng?",
          "choices": [
            {
              "text": "SLO fail chưa phải SLA breach",
              "choice_id": "a"
            },
            {
              "text": "SLA chắc chắn breach",
              "choice_id": "b"
            },
            {
              "text": "SLO và SLA luôn cùng threshold",
              "choice_id": "c"
            },
            {
              "text": "SLI tự là penalty",
              "choice_id": "d"
            }
          ],
          "presentation_policy": {
            "shuffle_at_delivery": true,
            "do_not_expose_choice_ids": true
          },
          "prompt_presentation": {
            "format": "sectioned_plain_text",
            "preserve_line_breaks": true
          }
        },
        "question_id": "d13-q100",
        "primary_kc_id": "kc-sli-slo-sla-contract",
        "grading_method": "deterministic",
        "question_version": 3,
        "cognitive_operation": "Understand",
        "contributing_kc_ids": [],
        "estimated_difficulty": "easy"
      },
      {
        "servable": true,
        "role": "initial_check",
        "hints": [
          {
            "text": "Đổi 0,1% thành tỷ lệ rồi nhân tổng phút trong window.",
            "hint_id": "h1",
            "after_attempt": 1
          }
        ],
        "module_id": "day13-g-alerts",
        "max_points": 1,
        "interaction": {
          "type": "numeric_input",
          "prompt": "Bối cảnh:\nSLO availability 99,9% trên cửa sổ 30 ngày. Dùng time approximation 30×24×60 phút.\n\nCâu hỏi:\nDowntime allowance là bao nhiêu phút?",
          "required_unit": "phút",
          "prompt_presentation": {
            "format": "sectioned_plain_text",
            "preserve_line_breaks": true
          }
        },
        "question_id": "d13-q101",
        "primary_kc_id": "kc-error-budget-calculation",
        "grading_method": "deterministic",
        "question_version": 3,
        "cognitive_operation": "Apply",
        "contributing_kc_ids": [],
        "estimated_difficulty": "medium"
      },
      {
        "servable": false,
        "role": "reassessment",
        "hints": [
          {
            "text": "Bắt đầu từ observable outcome rồi lần lượt kiểm tra Allowed bad fraction, Window duration.",
            "hint_id": "h1",
            "after_attempt": 1
          }
        ],
        "module_id": "day13-g-alerts",
        "max_points": 4,
        "interaction": {
          "type": "short_text",
          "prompt": "Bối cảnh:\nSLO event-based 99,5% trên 200.000 eligible requests; đã có 700 bad.\n\nCâu hỏi:\nTính budget còn lại và diễn giải.",
          "prompt_presentation": {
            "format": "sectioned_plain_text",
            "preserve_line_breaks": true
          }
        },
        "question_id": "d13-q102",
        "primary_kc_id": "kc-error-budget-calculation",
        "grading_method": "criterion_rubric",
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
            "text": "Lấy allowance trừ actual spend và giữ đúng unit.",
            "hint_id": "h1",
            "after_attempt": 1
          }
        ],
        "module_id": "day13-g-alerts",
        "max_points": 1,
        "interaction": {
          "type": "single_select",
          "prompt": "Bối cảnh:\nSLO event-based cho phép 1.000 bad requests; đã có 700 bad.\n\nCâu hỏi:\nBudget còn lại?",
          "choices": [
            {
              "text": "300 bad requests",
              "choice_id": "a"
            },
            {
              "text": "300 phút",
              "choice_id": "b"
            },
            {
              "text": "700 requests",
              "choice_id": "c"
            },
            {
              "text": "30% uptime",
              "choice_id": "d"
            }
          ],
          "presentation_policy": {
            "shuffle_at_delivery": true,
            "do_not_expose_choice_ids": true
          },
          "prompt_presentation": {
            "format": "sectioned_plain_text",
            "preserve_line_breaks": true
          }
        },
        "question_id": "d13-q103",
        "primary_kc_id": "kc-error-budget-calculation",
        "grading_method": "deterministic",
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
            "text": "Đối chiếu các lựa chọn với: Burn-rate denominator, Short window.",
            "hint_id": "h1",
            "after_attempt": 1
          }
        ],
        "module_id": "day13-g-alerts",
        "max_points": 1,
        "interaction": {
          "type": "single_select",
          "prompt": "Bối cảnh:\nPage policy yêu cầu cả short 5m và long 1h đều burn \u003E14,4×. Hiện short=20×, long=8×.\n\nCâu hỏi:\nCó page không?",
          "choices": [
            {
              "text": "Tạo ticket P0 bất kể policy",
              "choice_id": "a"
            },
            {
              "text": "Không; long window chưa đạt",
              "choice_id": "b"
            },
            {
              "text": "Có vì short window vượt",
              "choice_id": "c"
            },
            {
              "text": "Có vì trung bình 14× gần threshold",
              "choice_id": "d"
            }
          ],
          "presentation_policy": {
            "shuffle_at_delivery": true,
            "do_not_expose_choice_ids": true
          },
          "prompt_presentation": {
            "format": "sectioned_plain_text",
            "preserve_line_breaks": true
          }
        },
        "question_id": "d13-q104",
        "primary_kc_id": "kc-multiwindow-burn-rate-alert",
        "grading_method": "deterministic",
        "question_version": 3,
        "cognitive_operation": "Analyze",
        "contributing_kc_ids": [],
        "estimated_difficulty": "medium"
      },
      {
        "servable": false,
        "role": "reassessment",
        "hints": [
          {
            "text": "Bắt đầu từ observable outcome rồi lần lượt kiểm tra Burn-rate denominator, Short window.",
            "hint_id": "h1",
            "after_attempt": 1
          }
        ],
        "module_id": "day13-g-alerts",
        "max_points": 4,
        "interaction": {
          "type": "short_text",
          "prompt": "Bối cảnh:\nWarning policy 6× cần cả 30m và 6h; quan sát lần lượt 7× và 6,5×.\n\nCâu hỏi:\nTính joint result và nêu vì sao cần hai window.",
          "prompt_presentation": {
            "format": "sectioned_plain_text",
            "preserve_line_breaks": true
          }
        },
        "question_id": "d13-q105",
        "primary_kc_id": "kc-multiwindow-burn-rate-alert",
        "grading_method": "criterion_rubric",
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
            "text": "Rule dùng AND hay OR?",
            "hint_id": "h1",
            "after_attempt": 1
          }
        ],
        "module_id": "day13-g-alerts",
        "max_points": 1,
        "interaction": {
          "type": "single_select",
          "prompt": "Bối cảnh:\nRule page cần short và long window cùng vượt threshold; chỉ short vượt.\n\nCâu hỏi:\nCó page không?",
          "choices": [
            {
              "text": "Không; joint condition chưa đạt",
              "choice_id": "a"
            },
            {
              "text": "Có vì lấy max hai window",
              "choice_id": "b"
            },
            {
              "text": "Có vì short luôn ưu tiên",
              "choice_id": "c"
            },
            {
              "text": "Không vì burn rate không dùng cho page",
              "choice_id": "d"
            }
          ],
          "presentation_policy": {
            "shuffle_at_delivery": true,
            "do_not_expose_choice_ids": true
          },
          "prompt_presentation": {
            "format": "sectioned_plain_text",
            "preserve_line_breaks": true
          }
        },
        "question_id": "d13-q106",
        "primary_kc_id": "kc-multiwindow-burn-rate-alert",
        "grading_method": "deterministic",
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
            "text": "Đối chiếu các lựa chọn với: Severity, Impact.",
            "hint_id": "h1",
            "after_attempt": 1
          }
        ],
        "module_id": "day13-g-alerts",
        "max_points": 1,
        "interaction": {
          "type": "single_select",
          "prompt": "Bối cảnh:\nMột tenant nhỏ chậm nhẹ, workaround có sẵn; toàn bộ payment unavailable là scenario khác.\n\nCâu hỏi:\nRouting nào đúng?",
          "choices": [
            {
              "text": "Severity theo impact và urgency",
              "choice_id": "a"
            },
            {
              "text": "Cả hai luôn P0",
              "choice_id": "b"
            },
            {
              "text": "Cả hai chỉ ticket",
              "choice_id": "c"
            },
            {
              "text": "Severity theo người báo lớn tiếng nhất",
              "choice_id": "d"
            }
          ],
          "presentation_policy": {
            "shuffle_at_delivery": true,
            "do_not_expose_choice_ids": true
          },
          "prompt_presentation": {
            "format": "sectioned_plain_text",
            "preserve_line_breaks": true
          }
        },
        "question_id": "d13-q107",
        "primary_kc_id": "kc-oncall-severity-escalation",
        "grading_method": "deterministic",
        "question_version": 3,
        "cognitive_operation": "Evaluate",
        "contributing_kc_ids": [],
        "estimated_difficulty": "medium"
      },
      {
        "servable": false,
        "role": "reassessment",
        "hints": [
          {
            "text": "Bắt đầu từ observable outcome rồi lần lượt kiểm tra Severity, Impact.",
            "hint_id": "h1",
            "after_attempt": 1
          }
        ],
        "module_id": "day13-g-alerts",
        "max_points": 4,
        "interaction": {
          "type": "short_text",
          "prompt": "Bối cảnh:\nIncident ảnh hưởng 40% enterprise traffic, chưa có workaround, primary owner không ack trong 10 phút.\n\nCâu hỏi:\nThiết kế severity và escalation sequence.",
          "prompt_presentation": {
            "format": "sectioned_plain_text",
            "preserve_line_breaks": true
          }
        },
        "question_id": "d13-q108",
        "primary_kc_id": "kc-oncall-severity-escalation",
        "grading_method": "criterion_rubric",
        "question_version": 3,
        "cognitive_operation": "Create",
        "contributing_kc_ids": [],
        "estimated_difficulty": "hard"
      },
      {
        "servable": true,
        "role": "initial_check",
        "hints": [
          {
            "text": "Loại record duplicate trước khi sum.",
            "hint_id": "h1",
            "after_attempt": 1
          }
        ],
        "module_id": "day13-g-costeval",
        "max_points": 1,
        "interaction": {
          "type": "numeric_input",
          "prompt": "Bối cảnh:\nTask T có ba unique calls giá 0,002; 0,005; 0,003 USD. Một record retry duplicate trùng `call_id` với call 0,003 USD.\n\nCâu hỏi:\nTask cost sau dedupe là bao nhiêu?",
          "required_unit": "USD",
          "prompt_presentation": {
            "format": "sectioned_plain_text",
            "preserve_line_breaks": true
          }
        },
        "question_id": "d13-q109",
        "primary_kc_id": "kc-agent-task-cost-rollup",
        "grading_method": "deterministic",
        "question_version": 3,
        "cognitive_operation": "Apply",
        "contributing_kc_ids": [],
        "estimated_difficulty": "medium"
      },
      {
        "servable": false,
        "role": "reassessment",
        "hints": [
          {
            "text": "Bắt đầu từ observable outcome rồi lần lượt kiểm tra Call-level usage, Multi-call task.",
            "hint_id": "h1",
            "after_attempt": 1
          }
        ],
        "module_id": "day13-g-costeval",
        "max_points": 4,
        "interaction": {
          "type": "short_text",
          "prompt": "Bối cảnh:\nHai tasks có calls thiếu task_id và giá metadata khác ngày.\n\nCâu hỏi:\nThiết kế rollup/reconcile.",
          "prompt_presentation": {
            "format": "sectioned_plain_text",
            "preserve_line_breaks": true
          }
        },
        "question_id": "d13-q110",
        "primary_kc_id": "kc-agent-task-cost-rollup",
        "grading_method": "criterion_rubric",
        "question_version": 3,
        "cognitive_operation": "Create",
        "contributing_kc_ids": [],
        "estimated_difficulty": "hard"
      },
      {
        "servable": true,
        "role": "follow_up",
        "hints": [
          {
            "text": "Budget owner trả tiền cho call hay outcome task?",
            "hint_id": "h1",
            "after_attempt": 1
          }
        ],
        "module_id": "day13-g-costeval",
        "max_points": 1,
        "interaction": {
          "type": "single_select",
          "prompt": "Bối cảnh:\nMột task gọi model 5 lần, dashboard chỉ hiển thị cost trung bình mỗi call.\n\nCâu hỏi:\nCon số đó đủ cho budget theo task chưa?",
          "choices": [
            {
              "text": "Chưa; cần cost tổng theo task",
              "choice_id": "a"
            },
            {
              "text": "Đủ vì call nào cũng cùng task",
              "choice_id": "b"
            },
            {
              "text": "Đủ nếu call cuối rẻ",
              "choice_id": "c"
            },
            {
              "text": "Không cần dedupe retry",
              "choice_id": "d"
            }
          ],
          "presentation_policy": {
            "shuffle_at_delivery": true,
            "do_not_expose_choice_ids": true
          },
          "prompt_presentation": {
            "format": "sectioned_plain_text",
            "preserve_line_breaks": true
          }
        },
        "question_id": "d13-q111",
        "primary_kc_id": "kc-agent-task-cost-rollup",
        "grading_method": "deterministic",
        "question_version": 3,
        "cognitive_operation": "Analyze",
        "contributing_kc_ids": [],
        "estimated_difficulty": "easy"
      },
      {
        "servable": true,
        "role": "initial_check",
        "hints": [
          {
            "text": "Đối chiếu các lựa chọn với: User, Feature.",
            "hint_id": "h1",
            "after_attempt": 1
          }
        ],
        "module_id": "day13-g-costeval",
        "max_points": 1,
        "interaction": {
          "type": "single_select",
          "prompt": "Bối cảnh:\nCFO hỏi tenant nào tiêu nhiều; record chỉ có model và total cost.\n\nCâu hỏi:\nTag thiếu quyết định?",
          "choices": [
            {
              "text": "host_pid",
              "choice_id": "a"
            },
            {
              "text": "trace sampling probability",
              "choice_id": "b"
            },
            {
              "text": "tenant_id",
              "choice_id": "c"
            },
            {
              "text": "request_id",
              "choice_id": "d"
            }
          ],
          "presentation_policy": {
            "shuffle_at_delivery": true,
            "do_not_expose_choice_ids": true
          },
          "prompt_presentation": {
            "format": "sectioned_plain_text",
            "preserve_line_breaks": true
          }
        },
        "question_id": "d13-q112",
        "primary_kc_id": "kc-ai-cost-attribution-dimensions",
        "grading_method": "deterministic",
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
            "text": "Bắt đầu từ observable outcome rồi lần lượt kiểm tra User, Feature.",
            "hint_id": "h1",
            "after_attempt": 1
          }
        ],
        "module_id": "day13-g-costeval",
        "max_points": 4,
        "interaction": {
          "type": "short_text",
          "prompt": "Bối cảnh:\nProduct hỏi feature nào cost cao nhưng completion thấp; Finance hỏi margin theo plan.\n\nCâu hỏi:\nThiết kế attribution và grouped report.",
          "prompt_presentation": {
            "format": "sectioned_plain_text",
            "preserve_line_breaks": true
          }
        },
        "question_id": "d13-q113",
        "primary_kc_id": "kc-ai-cost-attribution-dimensions",
        "grading_method": "criterion_rubric",
        "question_version": 3,
        "cognitive_operation": "Create",
        "contributing_kc_ids": [],
        "estimated_difficulty": "hard"
      },
      {
        "servable": true,
        "role": "initial_check",
        "hints": [
          {
            "text": "Tách population cố định trước release khỏi traffic thật sau release.",
            "hint_id": "h1",
            "after_attempt": 1
          }
        ],
        "module_id": "day13-g-costeval",
        "max_points": 4,
        "interaction": {
          "type": "multi_select",
          "prompt": "Bối cảnh:\nTeam cần phân biệt pre-release repeatability với production behavior.\n\nCâu hỏi:\nChọn tất cả mapping đúng giữa activity và eval mode.",
          "choices": [
            {
              "text": "Fixed benchmark trước release → offline eval",
              "choice_id": "a"
            },
            {
              "text": "Sample traffic thật sau release → online eval",
              "choice_id": "b"
            },
            {
              "text": "CI regression gate → offline eval",
              "choice_id": "c"
            },
            {
              "text": "Production drift/cohort monitoring → online eval",
              "choice_id": "d"
            },
            {
              "text": "Fixed benchmark trước release → online eval",
              "choice_id": "e"
            },
            {
              "text": "Live cohort monitoring → offline eval",
              "choice_id": "f"
            }
          ],
          "presentation_policy": {
            "shuffle_at_delivery": true,
            "do_not_expose_choice_ids": true
          },
          "prompt_presentation": {
            "format": "sectioned_plain_text",
            "preserve_line_breaks": true
          },
          "selection_instruction": "Chọn tất cả phương án đúng."
        },
        "question_id": "d13-q114",
        "primary_kc_id": "kc-online-offline-eval-separation",
        "grading_method": "deterministic",
        "question_version": 3,
        "cognitive_operation": "Understand",
        "contributing_kc_ids": [],
        "estimated_difficulty": "medium"
      },
      {
        "servable": false,
        "role": "reassessment",
        "hints": [
          {
            "text": "Bắt đầu từ observable outcome rồi lần lượt kiểm tra Fixed test set, Production traffic.",
            "hint_id": "h1",
            "after_attempt": 1
          }
        ],
        "module_id": "day13-g-costeval",
        "max_points": 4,
        "interaction": {
          "type": "short_text",
          "prompt": "Bối cảnh:\nMột incident quality không có ground truth tức thời nhưng có benchmark curated từ tuần trước.\n\nCâu hỏi:\nChọn online/offline/both và giới hạn.",
          "prompt_presentation": {
            "format": "sectioned_plain_text",
            "preserve_line_breaks": true
          }
        },
        "question_id": "d13-q115",
        "primary_kc_id": "kc-online-offline-eval-separation",
        "grading_method": "criterion_rubric",
        "question_version": 3,
        "cognitive_operation": "Analyze",
        "contributing_kc_ids": [],
        "estimated_difficulty": "hard"
      },
      {
        "servable": true,
        "role": "initial_check",
        "hints": [
          {
            "text": "Đối chiếu các lựa chọn với: Explicit rating, Implicit behavior.",
            "hint_id": "h1",
            "after_attempt": 1
          }
        ],
        "module_id": "day13-g-costeval",
        "max_points": 1,
        "interaction": {
          "type": "single_select",
          "prompt": "Bối cảnh:\nRegenerate tăng sau UI đổi vị trí button; thumbs-down chỉ 0,2% user phản hồi.\n\nCâu hỏi:\nKết luận nào đúng?",
          "choices": [
            {
              "text": "Cả hai là signal còn bias/confounder",
              "choice_id": "a"
            },
            {
              "text": "Regenerate tăng chứng minh model xấu",
              "choice_id": "b"
            },
            {
              "text": "Thumbs-down thấp chứng minh quality cao",
              "choice_id": "c"
            },
            {
              "text": "Implicit feedback luôn là truth",
              "choice_id": "d"
            }
          ],
          "presentation_policy": {
            "shuffle_at_delivery": true,
            "do_not_expose_choice_ids": true
          },
          "prompt_presentation": {
            "format": "sectioned_plain_text",
            "preserve_line_breaks": true
          }
        },
        "question_id": "d13-q116",
        "primary_kc_id": "kc-human-feedback-signal-interpretation",
        "grading_method": "deterministic",
        "question_version": 3,
        "cognitive_operation": "Analyze",
        "contributing_kc_ids": [],
        "estimated_difficulty": "medium"
      },
      {
        "servable": false,
        "role": "reassessment",
        "hints": [
          {
            "text": "Bắt đầu từ observable outcome rồi lần lượt kiểm tra Explicit rating, Implicit behavior.",
            "hint_id": "h1",
            "after_attempt": 1
          }
        ],
        "module_id": "day13-g-costeval",
        "max_points": 4,
        "interaction": {
          "type": "short_text",
          "prompt": "Bối cảnh:\nMột feature có copy-rate cao, abandon cũng cao và rating thấp ở nhóm nhỏ.\n\nCâu hỏi:\nThiết kế metric và confirmation path.",
          "prompt_presentation": {
            "format": "sectioned_plain_text",
            "preserve_line_breaks": true
          }
        },
        "question_id": "d13-q117",
        "primary_kc_id": "kc-human-feedback-signal-interpretation",
        "grading_method": "criterion_rubric",
        "question_version": 3,
        "cognitive_operation": "Analyze",
        "contributing_kc_ids": [],
        "estimated_difficulty": "hard"
      },
      {
        "servable": true,
        "role": "follow_up",
        "hints": [
          {
            "text": "Behavior đổi cùng model hay cùng interface?",
            "hint_id": "h1",
            "after_attempt": 1
          }
        ],
        "module_id": "day13-g-costeval",
        "max_points": 1,
        "interaction": {
          "type": "single_select",
          "prompt": "Bối cảnh:\nRegenerate tăng ngay sau khi UI đưa button lên vị trí nổi bật.\n\nCâu hỏi:\nCó thể kết luận model quality giảm chưa?",
          "choices": [
            {
              "text": "Chưa; UI exposure là confounder",
              "choice_id": "a"
            },
            {
              "text": "Có; regenerate luôn là ground truth",
              "choice_id": "b"
            },
            {
              "text": "Có nếu error rate bằng 0",
              "choice_id": "c"
            },
            {
              "text": "Không cần theo dõi implicit feedback",
              "choice_id": "d"
            }
          ],
          "presentation_policy": {
            "shuffle_at_delivery": true,
            "do_not_expose_choice_ids": true
          },
          "prompt_presentation": {
            "format": "sectioned_plain_text",
            "preserve_line_breaks": true
          }
        },
        "question_id": "d13-q118",
        "primary_kc_id": "kc-human-feedback-signal-interpretation",
        "grading_method": "deterministic",
        "question_version": 3,
        "cognitive_operation": "Analyze",
        "contributing_kc_ids": [],
        "estimated_difficulty": "easy"
      },
      {
        "servable": true,
        "role": "initial_check",
        "hints": [
          {
            "text": "Tính sample volume trước rồi nhân unit cost.",
            "hint_id": "h1",
            "after_attempt": 1
          }
        ],
        "module_id": "day13-g-costeval",
        "max_points": 1,
        "interaction": {
          "type": "numeric_input",
          "prompt": "Bối cảnh:\nCó 1.000.000 requests/ngày, sample 1%; judge cost 0,002 USD cho mỗi sampled request.\n\nCâu hỏi:\nTính chi phí eval mỗi ngày.",
          "required_unit": "USD",
          "prompt_presentation": {
            "format": "sectioned_plain_text",
            "preserve_line_breaks": true
          }
        },
        "question_id": "d13-q119",
        "primary_kc_id": "kc-sampled-eval-as-metric",
        "grading_method": "deterministic",
        "question_version": 3,
        "cognitive_operation": "Apply",
        "contributing_kc_ids": [],
        "estimated_difficulty": "medium"
      },
      {
        "servable": false,
        "role": "reassessment",
        "hints": [
          {
            "text": "Bắt đầu từ observable outcome rồi lần lượt kiểm tra Sampling population, Evaluator identity/version.",
            "hint_id": "h1",
            "after_attempt": 1
          }
        ],
        "module_id": "day13-g-costeval",
        "max_points": 4,
        "interaction": {
          "type": "short_text",
          "prompt": "Bối cảnh:\nQuality metric cần theo feature/model và alert khi score tụt, nhưng judge có version.\n\nCâu hỏi:\nThiết kế sampling-to-metric loop.",
          "prompt_presentation": {
            "format": "sectioned_plain_text",
            "preserve_line_breaks": true
          }
        },
        "question_id": "d13-q120",
        "primary_kc_id": "kc-sampled-eval-as-metric",
        "grading_method": "criterion_rubric",
        "question_version": 3,
        "cognitive_operation": "Create",
        "contributing_kc_ids": [],
        "estimated_difficulty": "hard"
      },
      {
        "servable": true,
        "role": "initial_check",
        "hints": [
          {
            "text": "Đối chiếu các lựa chọn với: Quality failure candidate, Feedback hoặc judge evidence.",
            "hint_id": "h1",
            "after_attempt": 1
          }
        ],
        "module_id": "day13-g-costeval",
        "max_points": 1,
        "interaction": {
          "type": "single_select",
          "prompt": "Bối cảnh:\nMột production answer sai có PII nên team định copy nguyên prompt/output vào public test repo.\n\nCâu hỏi:\nXử lý đúng?",
          "choices": [
            {
              "text": "Bỏ case vì production failure không dùng cho offline eval",
              "choice_id": "a"
            },
            {
              "text": "Chỉ lưu thumbs-down",
              "choice_id": "b"
            },
            {
              "text": "Sanitize case rồi promote có review",
              "choice_id": "c"
            },
            {
              "text": "Copy nguyên để tái lập tuyệt đối",
              "choice_id": "d"
            }
          ],
          "presentation_policy": {
            "shuffle_at_delivery": true,
            "do_not_expose_choice_ids": true
          },
          "prompt_presentation": {
            "format": "sectioned_plain_text",
            "preserve_line_breaks": true
          }
        },
        "question_id": "d13-q121",
        "primary_kc_id": "kc-production-failure-regression-promotion",
        "grading_method": "deterministic",
        "question_version": 3,
        "cognitive_operation": "Evaluate",
        "contributing_kc_ids": [],
        "estimated_difficulty": "medium"
      },
      {
        "servable": false,
        "role": "reassessment",
        "hints": [
          {
            "text": "Bắt đầu từ observable outcome rồi lần lượt kiểm tra Quality failure candidate, Feedback hoặc judge evidence.",
            "hint_id": "h1",
            "after_attempt": 1
          }
        ],
        "module_id": "day13-g-costeval",
        "max_points": 4,
        "interaction": {
          "type": "short_text",
          "prompt": "Bối cảnh:\nFailure chỉ do outage tạm thời, không phản ánh product contract; case khác là prompt regression tái lập.\n\nCâu hỏi:\nChọn case để promote và evidence cần giữ.",
          "prompt_presentation": {
            "format": "sectioned_plain_text",
            "preserve_line_breaks": true
          }
        },
        "question_id": "d13-q122",
        "primary_kc_id": "kc-production-failure-regression-promotion",
        "grading_method": "criterion_rubric",
        "question_version": 3,
        "cognitive_operation": "Evaluate",
        "contributing_kc_ids": [],
        "estimated_difficulty": "hard"
      },
      {
        "servable": true,
        "role": "initial_check",
        "hints": [
          {
            "text": "Đối chiếu các lựa chọn với: Judge identity/version, Score distribution.",
            "hint_id": "h1",
            "after_attempt": 1
          }
        ],
        "module_id": "day13-g-costeval",
        "max_points": 1,
        "interaction": {
          "type": "single_select",
          "prompt": "Bối cảnh:\nJudge mean giảm sau nâng judge v2, nhưng human gold agreement của v2 cũng giảm.\n\nCâu hỏi:\nSignal phù hợp?",
          "choices": [
            {
              "text": "Gold set không liên quan",
              "choice_id": "a"
            },
            {
              "text": "Kiểm evaluator drift trước",
              "choice_id": "b"
            },
            {
              "text": "Product quality chắc chắn giảm",
              "choice_id": "c"
            },
            {
              "text": "Mean đủ, không cần distribution",
              "choice_id": "d"
            }
          ],
          "presentation_policy": {
            "shuffle_at_delivery": true,
            "do_not_expose_choice_ids": true
          },
          "prompt_presentation": {
            "format": "sectioned_plain_text",
            "preserve_line_breaks": true
          }
        },
        "question_id": "d13-q123",
        "primary_kc_id": "kc-evaluator-drift-monitoring",
        "grading_method": "deterministic",
        "question_version": 3,
        "cognitive_operation": "Analyze",
        "contributing_kc_ids": [],
        "estimated_difficulty": "medium"
      },
      {
        "servable": false,
        "role": "reassessment",
        "hints": [
          {
            "text": "Bắt đầu từ observable outcome rồi lần lượt kiểm tra Judge identity/version, Score distribution.",
            "hint_id": "h1",
            "after_attempt": 1
          }
        ],
        "module_id": "day13-g-costeval",
        "max_points": 4,
        "interaction": {
          "type": "short_text",
          "prompt": "Bối cảnh:\nProduction answer population cũng đổi cùng lúc judge version đổi.\n\nCâu hỏi:\nThiết kế kiểm tra để tách evaluator drift và product drift.",
          "prompt_presentation": {
            "format": "sectioned_plain_text",
            "preserve_line_breaks": true
          }
        },
        "question_id": "d13-q124",
        "primary_kc_id": "kc-evaluator-drift-monitoring",
        "grading_method": "criterion_rubric",
        "question_version": 3,
        "cognitive_operation": "Analyze",
        "contributing_kc_ids": [],
        "estimated_difficulty": "hard"
      },
      {
        "servable": true,
        "role": "follow_up",
        "hints": [
          {
            "text": "Giữ answer population nào cố định để so judge?",
            "hint_id": "h1",
            "after_attempt": 1
          }
        ],
        "module_id": "day13-g-costeval",
        "max_points": 1,
        "interaction": {
          "type": "single_select",
          "prompt": "Bối cảnh:\nJudge score giảm sau đổi judge version, còn stable human gold outputs không đổi.\n\nCâu hỏi:\nCheck nào ưu tiên?",
          "choices": [
            {
              "text": "Replay gold set qua cả hai judge",
              "choice_id": "a"
            },
            {
              "text": "Kết luận product regression ngay",
              "choice_id": "b"
            },
            {
              "text": "Chỉ xem mean production mới",
              "choice_id": "c"
            },
            {
              "text": "Bỏ judge version khỏi telemetry",
              "choice_id": "d"
            }
          ],
          "presentation_policy": {
            "shuffle_at_delivery": true,
            "do_not_expose_choice_ids": true
          },
          "prompt_presentation": {
            "format": "sectioned_plain_text",
            "preserve_line_breaks": true
          }
        },
        "question_id": "d13-q125",
        "primary_kc_id": "kc-evaluator-drift-monitoring",
        "grading_method": "deterministic",
        "question_version": 3,
        "cognitive_operation": "Analyze",
        "contributing_kc_ids": [],
        "estimated_difficulty": "medium"
      },
      {
        "servable": true,
        "role": "initial_check",
        "hints": [
          {
            "text": "Đối chiếu các lựa chọn với: Data-class retention, TTL.",
            "hint_id": "h1",
            "after_attempt": 1
          }
        ],
        "module_id": "day13-g-governance",
        "max_points": 1,
        "interaction": {
          "type": "single_select",
          "prompt": "Bối cảnh:\nRaw traces có user text giữ 400 ngày cho mọi employee; aggregate metrics giữ 7 ngày.\n\nCâu hỏi:\nSửa nào hợp purpose/risk?",
          "choices": [
            {
              "text": "TTL/RBAC theo sensitivity và purpose",
              "choice_id": "a"
            },
            {
              "text": "Giữ raw trace lâu hơn để phòng nhu cầu debug",
              "choice_id": "b"
            },
            {
              "text": "Cho mọi employee vì data nằm trong công ty",
              "choice_id": "c"
            },
            {
              "text": "Xóa access audit để giảm telemetry volume",
              "choice_id": "d"
            }
          ],
          "presentation_policy": {
            "shuffle_at_delivery": true,
            "do_not_expose_choice_ids": true
          },
          "prompt_presentation": {
            "format": "sectioned_plain_text",
            "preserve_line_breaks": true
          }
        },
        "question_id": "d13-q126",
        "primary_kc_id": "kc-telemetry-retention-access-audit",
        "grading_method": "deterministic",
        "question_version": 3,
        "cognitive_operation": "Evaluate",
        "contributing_kc_ids": [],
        "estimated_difficulty": "medium"
      },
      {
        "servable": false,
        "role": "reassessment",
        "hints": [
          {
            "text": "Bắt đầu từ observable outcome rồi lần lượt kiểm tra Data-class retention, TTL.",
            "hint_id": "h1",
            "after_attempt": 1
          }
        ],
        "module_id": "day13-g-governance",
        "max_points": 4,
        "interaction": {
          "type": "short_text",
          "prompt": "Bối cảnh:\nInventory gồm raw trace, redacted log, aggregate metric và access event.\n\nCâu hỏi:\nGán retention/access/deletion/audit contract.",
          "prompt_presentation": {
            "format": "sectioned_plain_text",
            "preserve_line_breaks": true
          }
        },
        "question_id": "d13-q127",
        "primary_kc_id": "kc-telemetry-retention-access-audit",
        "grading_method": "criterion_rubric",
        "question_version": 3,
        "cognitive_operation": "Create",
        "contributing_kc_ids": [],
        "estimated_difficulty": "hard"
      },
      {
        "servable": true,
        "role": "initial_check",
        "hints": [
          {
            "text": "Đối chiếu các lựa chọn với: Personal-data flow, Processor/vendor.",
            "hint_id": "h1",
            "after_attempt": 1
          }
        ],
        "module_id": "day13-g-governance",
        "max_points": 1,
        "interaction": {
          "type": "single_select",
          "prompt": "Bối cảnh:\nTrace chứa user VN được gửi SaaS region nước ngoài; chưa rõ processor terms hay legal basis.\n\nCâu hỏi:\nKết luận đúng?",
          "choices": [
            {
              "text": "Khẳng định chắc chắn hợp pháp vì dùng HTTPS",
              "choice_id": "a"
            },
            {
              "text": "Khẳng định chắc chắn bất hợp pháp không cần context",
              "choice_id": "b"
            },
            {
              "text": "Bỏ qua vì chỉ là telemetry",
              "choice_id": "c"
            },
            {
              "text": "Flag để legal/policy review",
              "choice_id": "d"
            }
          ],
          "presentation_policy": {
            "shuffle_at_delivery": true,
            "do_not_expose_choice_ids": true
          },
          "prompt_presentation": {
            "format": "sectioned_plain_text",
            "preserve_line_breaks": true
          }
        },
        "question_id": "d13-q128",
        "primary_kc_id": "kc-telemetry-transfer-compliance-assessment",
        "grading_method": "deterministic",
        "question_version": 3,
        "cognitive_operation": "Evaluate",
        "contributing_kc_ids": [],
        "estimated_difficulty": "medium"
      },
      {
        "servable": false,
        "role": "reassessment",
        "hints": [
          {
            "text": "Bắt đầu từ observable outcome rồi lần lượt kiểm tra Personal-data flow, Processor/vendor.",
            "hint_id": "h1",
            "after_attempt": 1
          }
        ],
        "module_id": "day13-g-governance",
        "max_points": 4,
        "interaction": {
          "type": "short_text",
          "prompt": "Bối cảnh:\nVendor subprocessor đổi region và retention feature có thể đổi theo version.\n\nCâu hỏi:\nLập assessment record không đưa legal conclusion.",
          "prompt_presentation": {
            "format": "sectioned_plain_text",
            "preserve_line_breaks": true
          }
        },
        "question_id": "d13-q129",
        "primary_kc_id": "kc-telemetry-transfer-compliance-assessment",
        "grading_method": "criterion_rubric",
        "question_version": 3,
        "cognitive_operation": "Create",
        "contributing_kc_ids": [],
        "estimated_difficulty": "hard"
      },
      {
        "servable": true,
        "role": "follow_up",
        "hints": [
          {
            "text": "Facts nào đổi và ai có authority kết luận?",
            "hint_id": "h1",
            "after_attempt": 1
          }
        ],
        "module_id": "day13-g-governance",
        "max_points": 1,
        "interaction": {
          "type": "single_select",
          "prompt": "Bối cảnh:\nSaaS đổi subprocessor region; team chưa có updated contract review.\n\nCâu hỏi:\nHành động đúng?",
          "choices": [
            {
              "text": "Flag để legal/policy review",
              "choice_id": "a"
            },
            {
              "text": "Tự kết luận hợp pháp vì vendor lớn",
              "choice_id": "b"
            },
            {
              "text": "Tự kết luận bất hợp pháp không cần facts",
              "choice_id": "c"
            },
            {
              "text": "Bỏ qua vì data đã redacted một phần",
              "choice_id": "d"
            }
          ],
          "presentation_policy": {
            "shuffle_at_delivery": true,
            "do_not_expose_choice_ids": true
          },
          "prompt_presentation": {
            "format": "sectioned_plain_text",
            "preserve_line_breaks": true
          }
        },
        "question_id": "d13-q130",
        "primary_kc_id": "kc-telemetry-transfer-compliance-assessment",
        "grading_method": "deterministic",
        "question_version": 3,
        "cognitive_operation": "Evaluate",
        "contributing_kc_ids": [],
        "estimated_difficulty": "medium"
      },
      {
        "servable": true,
        "role": "initial_check",
        "hints": [
          {
            "text": "Không nhảy từ aggregate metric thẳng sang root-cause claim.",
            "hint_id": "h1",
            "after_attempt": 1
          }
        ],
        "module_id": "day13-g-incident",
        "max_points": 1,
        "interaction": {
          "type": "ordering",
          "prompt": "Bối cảnh:\nP95 tăng và có hàng triệu events.\n\nCâu hỏi:\nSắp investigation path để thu hẹp evidence.",
          "options": [
            {
              "text": "Dùng metrics xác định symptom/window/cohort",
              "option_id": "o1"
            },
            {
              "text": "Lọc structured logs để lấy affected correlation ID",
              "option_id": "o2"
            },
            {
              "text": "Mở trace của affected request",
              "option_id": "o3"
            },
            {
              "text": "Xác định anomalous span",
              "option_id": "o4"
            },
            {
              "text": "Đối chiếu log/change/backend evidence trước kết luận",
              "option_id": "o5"
            }
          ],
          "presentation_policy": {
            "do_not_expose_option_ids": true,
            "shuffle_initial_order_at_delivery": true
          },
          "prompt_presentation": {
            "format": "sectioned_plain_text",
            "preserve_line_breaks": true
          }
        },
        "question_id": "d13-q131",
        "primary_kc_id": "kc-metric-log-trace-triage",
        "grading_method": "deterministic",
        "question_version": 3,
        "cognitive_operation": "Analyze",
        "contributing_kc_ids": [],
        "estimated_difficulty": "medium"
      },
      {
        "servable": false,
        "role": "reassessment",
        "hints": [
          {
            "text": "Bắt đầu từ observable outcome rồi lần lượt kiểm tra Metric time window, Symptom segmentation.",
            "hint_id": "h1",
            "after_attempt": 1
          }
        ],
        "module_id": "day13-g-incident",
        "max_points": 4,
        "interaction": {
          "type": "short_text",
          "prompt": "Bối cảnh:\nMetrics khoanh 09:00–09:20, logs chỉ ra req-77, trace có retrieval span 4,2s.\n\nCâu hỏi:\nGhi evidence chain và next check.",
          "prompt_presentation": {
            "format": "sectioned_plain_text",
            "preserve_line_breaks": true
          }
        },
        "question_id": "d13-q132",
        "primary_kc_id": "kc-metric-log-trace-triage",
        "grading_method": "criterion_rubric",
        "question_version": 3,
        "cognitive_operation": "Analyze",
        "contributing_kc_ids": [],
        "estimated_difficulty": "hard"
      },
      {
        "servable": true,
        "role": "initial_check",
        "hints": [
          {
            "text": "Đối chiếu các lựa chọn với: Span anomaly, Baseline comparison.",
            "hint_id": "h1",
            "after_attempt": 1
          }
        ],
        "module_id": "day13-g-incident",
        "max_points": 1,
        "interaction": {
          "type": "single_select",
          "prompt": "Bối cảnh:\nTrace thấy retrieval chậm, nhưng không có deploy/change log và retry test chưa làm.\n\nCâu hỏi:\nKết luận nào đúng?",
          "choices": [
            {
              "text": "Scale vector DB ngay không cần prediction",
              "choice_id": "a"
            },
            {
              "text": "Chỉ là cause candidate",
              "choice_id": "b"
            },
            {
              "text": "Retrieval chắc chắn là root cause",
              "choice_id": "c"
            },
            {
              "text": "Model chắc chắn vô can",
              "choice_id": "d"
            }
          ],
          "presentation_policy": {
            "shuffle_at_delivery": true,
            "do_not_expose_choice_ids": true
          },
          "prompt_presentation": {
            "format": "sectioned_plain_text",
            "preserve_line_breaks": true
          }
        },
        "question_id": "d13-q133",
        "primary_kc_id": "kc-converging-root-cause-evidence",
        "grading_method": "deterministic",
        "question_version": 3,
        "cognitive_operation": "Evaluate",
        "contributing_kc_ids": [],
        "estimated_difficulty": "medium"
      },
      {
        "servable": false,
        "role": "reassessment",
        "hints": [
          {
            "text": "Bắt đầu từ observable outcome rồi lần lượt kiểm tra Span anomaly, Baseline comparison.",
            "hint_id": "h1",
            "after_attempt": 1
          }
        ],
        "module_id": "day13-g-incident",
        "max_points": 4,
        "interaction": {
          "type": "short_text",
          "prompt": "Bối cảnh:\nConfig change 08:55 bỏ index filter; latency tăng 09:00; restore filter làm span và P95 về baseline.\n\nCâu hỏi:\nĐánh giá converging evidence và residual uncertainty.",
          "prompt_presentation": {
            "format": "sectioned_plain_text",
            "preserve_line_breaks": true
          }
        },
        "question_id": "d13-q134",
        "primary_kc_id": "kc-converging-root-cause-evidence",
        "grading_method": "criterion_rubric",
        "question_version": 3,
        "cognitive_operation": "Evaluate",
        "contributing_kc_ids": [],
        "estimated_difficulty": "hard"
      },
      {
        "servable": true,
        "role": "follow_up",
        "hints": [
          {
            "text": "Fix giả thuyết có làm metric/span phục hồi như dự đoán không?",
            "hint_id": "h1",
            "after_attempt": 1
          }
        ],
        "module_id": "day13-g-incident",
        "max_points": 1,
        "interaction": {
          "type": "single_select",
          "prompt": "Bối cảnh:\nMột span chậm nhưng rollback unrelated change không làm latency đổi.\n\nCâu hỏi:\nSpan đó đã là verified root cause chưa?",
          "choices": [
            {
              "text": "Chưa; evidence chưa hội tụ",
              "choice_id": "a"
            },
            {
              "text": "Rồi; span chậm luôn là root cause",
              "choice_id": "b"
            },
            {
              "text": "Rồi nếu trace dài",
              "choice_id": "c"
            },
            {
              "text": "Chưa vì traces không bao giờ hữu ích",
              "choice_id": "d"
            }
          ],
          "presentation_policy": {
            "shuffle_at_delivery": true,
            "do_not_expose_choice_ids": true
          },
          "prompt_presentation": {
            "format": "sectioned_plain_text",
            "preserve_line_breaks": true
          }
        },
        "question_id": "d13-q135",
        "primary_kc_id": "kc-converging-root-cause-evidence",
        "grading_method": "deterministic",
        "question_version": 3,
        "cognitive_operation": "Evaluate",
        "contributing_kc_ids": [],
        "estimated_difficulty": "medium"
      },
      {
        "servable": true,
        "role": "initial_check",
        "hints": [
          {
            "text": "Đối chiếu các lựa chọn với: Timeline, Impact.",
            "hint_id": "h1",
            "after_attempt": 1
          }
        ],
        "module_id": "day13-g-incident",
        "max_points": 1,
        "interaction": {
          "type": "single_select",
          "prompt": "Bối cảnh:\nPostmortem ghi “Nam deploy sai, cần cẩn thận hơn” nhưng không có timeline hay action owner.\n\nCâu hỏi:\nSửa nào đúng?",
          "choices": [
            {
              "text": "System evidence, timeline/impact và action owner",
              "choice_id": "a"
            },
            {
              "text": "Giữ người deploy làm root cause duy nhất",
              "choice_id": "b"
            },
            {
              "text": "Chỉ thêm screenshot mà không có evidence chain",
              "choice_id": "c"
            },
            {
              "text": "Xóa mọi deploy và contributing condition",
              "choice_id": "d"
            }
          ],
          "presentation_policy": {
            "shuffle_at_delivery": true,
            "do_not_expose_choice_ids": true
          },
          "prompt_presentation": {
            "format": "sectioned_plain_text",
            "preserve_line_breaks": true
          }
        },
        "question_id": "d13-q136",
        "primary_kc_id": "kc-blameless-postmortem-actionability",
        "grading_method": "deterministic",
        "question_version": 3,
        "cognitive_operation": "Evaluate",
        "contributing_kc_ids": [],
        "estimated_difficulty": "medium"
      },
      {
        "servable": false,
        "role": "reassessment",
        "hints": [
          {
            "text": "Bắt đầu từ observable outcome rồi lần lượt kiểm tra Timeline, Impact.",
            "hint_id": "h1",
            "after_attempt": 1
          }
        ],
        "module_id": "day13-g-incident",
        "max_points": 4,
        "interaction": {
          "type": "short_text",
          "prompt": "Bối cảnh:\nIncident do index filter thiếu và alert chậm 25 phút.\n\nCâu hỏi:\nViết postmortem skeleton có thể hành động.",
          "prompt_presentation": {
            "format": "sectioned_plain_text",
            "preserve_line_breaks": true
          }
        },
        "question_id": "d13-q137",
        "primary_kc_id": "kc-blameless-postmortem-actionability",
        "grading_method": "criterion_rubric",
        "question_version": 3,
        "cognitive_operation": "Create",
        "contributing_kc_ids": [],
        "estimated_difficulty": "hard"
      }
    ],
    "round_sizes": {
      "post": 10,
      "recommended": 6,
      "all": 6
    }
  }
}

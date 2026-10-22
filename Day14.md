{
  "course_id": "K4P1",
  "day_code": "day_1c82b95833813a59",
  "public_code": "D18",
  "version_id": "5d9852b9-b728-4c2c-996a-3a50822bc030",
  "version_no": 11,
  "synthesized": false,
  "lesson": {
    "index": 14,
    "title": "Day14-ai-evaluation-benchmarking",
    "subtitle": null,
    "slides_url": "/api/v1/content/days/day_1c82b95833813a59/slides.pdf",
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
        "module_id": "codelab-b7e8003823124c879d40660d2faf9a24",
        "title": "K4 — Level 3B, Ngày 14: AI Evaluation & Benchmarking Pipeline",
        "kind": "lab",
        "from": 5,
        "to": 14,
        "sections": [
          {
            "section_id": "codelab-b7e8003823124c879d40660d2faf9a24-s01",
            "title": "Chuẩn bị repository và xác nhận môi trường — CP0",
            "kind": "practice",
            "from": 5,
            "to": 6
          },
          {
            "section_id": "codelab-b7e8003823124c879d40660d2faf9a24-s02",
            "title": "Hoàn thiện dữ liệu đầu vào và cách tính Overall — CP1",
            "kind": "practice",
            "from": 6,
            "to": 7
          },
          {
            "section_id": "codelab-b7e8003823124c879d40660d2faf9a24-s03",
            "title": "Tính năm metrics và kiểm tra LLMJudge — CP2",
            "kind": "practice",
            "from": 7,
            "to": 8
          },
          {
            "section_id": "codelab-b7e8003823124c879d40660d2faf9a24-s04",
            "title": "Nối benchmark và công cụ phân tích lỗi — CP3",
            "kind": "practice",
            "from": 8,
            "to": 9
          },
          {
            "section_id": "codelab-b7e8003823124c879d40660d2faf9a24-s05",
            "title": "Tạo golden dataset có evidence kiểm chứng được — CP4, phần dữ liệu",
            "kind": "practice",
            "from": 9,
            "to": 10
          },
          {
            "section_id": "codelab-b7e8003823124c879d40660d2faf9a24-s06",
            "title": "Sinh actual answers và ghi benchmark — CP4, phần đánh giá",
            "kind": "practice",
            "from": 10,
            "to": 11
          },
          {
            "section_id": "codelab-b7e8003823124c879d40660d2faf9a24-s07",
            "title": "Viết failure analysis và chiến lược regression — CP5",
            "kind": "practice",
            "from": 11,
            "to": 12
          },
          {
            "section_id": "codelab-b7e8003823124c879d40660d2faf9a24-s08",
            "title": "Kiểm tra và nộp repository cá nhân",
            "kind": "practice",
            "from": 12,
            "to": 14
          }
        ]
      }
    ],
    "parts": [
      {
        "id": "day-slides-material_mu0w5tjs_b4es3u",
        "type": "slide",
        "title": "day14-ai-evaluation-benchmarking",
        "duration_min": null,
        "ai_prompts": [],
        "status": "current",
        "body": {
          "material_id": "material_munrqimz_qy57x1",
          "page_from": 1,
          "page_to": 129,
          "notes": null,
          "deck_url": "/api/v1/documents/K4P1/Lecture_material_munrqimz_qy57x1/material_munrqimz_qy57x1/stream",
          "deck_cdn_url": "https://slides.vlearn.dev/slides/k4p1/Lecture_material_munrqimz_qy57x1/material_munrqimz_qy57x1/8acbd7b405873c92a299072d9efc7023b2a2045caa0cab4b5871a88d1092bcc2.pdf?exp=1792168066&sub=728ae799387402308487372bea160411&sig=nK5I4IEdGaQL3heLFqjzt4ifEQrVuzG8M4samx48_34"
        }
      },
      {
        "id": "slide-1",
        "type": "slide",
        "title": "Slide bài giảng (Mai Anh)",
        "duration_min": null,
        "ai_prompts": [],
        "status": "todo",
        "body": {
          "material_id": "material_mungh04m_2df7mu",
          "page_from": 1,
          "page_to": 74,
          "notes": null,
          "deck_url": "/api/v1/documents/K4P1/Lecture_material_mungh04m_2df7mu/material_mungh04m_2df7mu/stream",
          "deck_cdn_url": "https://slides.vlearn.dev/slides/k4p1/Lecture_material_mungh04m_2df7mu/material_mungh04m_2df7mu/0a49dbb5714581761ebe2463f1827a114393515e491627b94b795479eb94d400.pdf?exp=1792168066&sub=728ae799387402308487372bea160411&sig=ztI5vGbrg4OgxsGskzIbwtTyk256dENPe3qsE_IGoHk"
        }
      },
      {
        "id": "slide-2",
        "type": "slide",
        "title": "Day14 (Hoa)",
        "duration_min": null,
        "ai_prompts": [],
        "status": "todo",
        "body": {
          "material_id": "material_munru5je_q9j3cl",
          "page_from": 1,
          "page_to": 129,
          "notes": null,
          "deck_url": "/api/v1/documents/K4P1/Lecture_material_munru5je_q9j3cl/material_munru5je_q9j3cl/stream",
          "deck_cdn_url": "https://slides.vlearn.dev/slides/k4p1/Lecture_material_munru5je_q9j3cl/material_munru5je_q9j3cl/8acbd7b405873c92a299072d9efc7023b2a2045caa0cab4b5871a88d1092bcc2.pdf?exp=1792168066&sub=728ae799387402308487372bea160411&sig=tP1RS3T7FB4YIZTyckHLBqCqfqFia3VW-GAVnhYDVhY"
        }
      },
      {
        "id": "video-1",
        "type": "video",
        "title": "How to build world-class AI products — Sarah Sachs (AI lead @ Notion) & Carlos Esteban (Braintrust)",
        "duration_min": null,
        "ai_prompts": [],
        "status": "todo",
        "body": {
          "src": null,
          "youtube_url": "https://www.youtube.com/watch?v=6YdPI9YbjbI",
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
            "kind": "youtube",
            "videoId": "6YdPI9YbjbI"
          }
        }
      },
      {
        "id": "slide-3",
        "type": "slide",
        "title": "Lec14-AI-Evaluation (Mr Tu)",
        "duration_min": null,
        "ai_prompts": [],
        "status": "todo",
        "body": {
          "material_id": "material_munstbfe_5aepvb",
          "page_from": 1,
          "page_to": 81,
          "notes": null,
          "deck_url": "/api/v1/documents/K4P1/Lecture_material_munstbfe_5aepvb/material_munstbfe_5aepvb/stream",
          "deck_cdn_url": "https://slides.vlearn.dev/slides/k4p1/Lecture_material_munstbfe_5aepvb/material_munstbfe_5aepvb/77fdef98fa993f1ea2267b9e3247b249a22a48c18e8214f05c2d482d47e8c784.pdf?exp=1792168066&sub=728ae799387402308487372bea160411&sig=HrpiWpwzZoxeTSNcLyPY1VefwyQhIoQ6fmzLzbLuOOM"
        }
      },
      {
        "id": "codelab-b7e8003823124c879d40660d2faf9a24-s01-doc",
        "type": "text",
        "title": "Chuẩn bị repository và xác nhận môi trường — CP0",
        "duration_min": null,
        "ai_prompts": [],
        "status": "todo",
        "body": {
          "reading_label": null,
          "blocks": [
            {
              "t": "alert",
              "html": "Hoàn thiện evaluation core, xây dựng golden dataset 20 QA và phân tích benchmark trên câu trả lời thật của trợ lý OrbitTech Store.",
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
              "t": "h2",
              "html": "K4 — Level 3B, Ngày 14: AI Evaluation &amp; Benchmarking Pipeline",
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
              "html": "Bạn sẽ tạo một pipeline đánh giá AI có thể chạy lại: code chấm điểm, bộ 20 câu hỏi có đáp án tham chiếu, kết quả benchmark và báo cáo phân tích lỗi. Hệ thống được đánh giá là trợ lý \u003Cstrong\u003EOrbitTech Store Customer Support\u003C/strong\u003E. Bạn cần Python 3.11+, Git, trình soạn thảo và OpenAI API key; phần viết evaluation core chưa cần gọi API.",
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
              "html": "Nguồn bài học là \u003Ca href=\"https://github.com/VinUni-AI20k/K4-L3B-AI-Evaluation\" target=\"_blank\" rel=\"noopener noreferrer\"\u003EK4-L3B-AI-Evaluation\u003C/a\u003E. Quy định nộp bài, chấm điểm và làm bài nằm trong \u003Ca href=\"https://github.com/VinUni-AI20k/K4-L3B-AI-Evaluation/blob/main/SUBMISSION.md\" target=\"_blank\" rel=\"noopener noreferrer\"\u003ESUBMISSION.md\u003C/a\u003E, \u003Ca href=\"https://github.com/VinUni-AI20k/K4-L3B-AI-Evaluation/blob/main/RUBRIC.md\" target=\"_blank\" rel=\"noopener noreferrer\"\u003ERUBRIC.md\u003C/a\u003E và \u003Ca href=\"https://github.com/VinUni-AI20k/K4-L3B-AI-Evaluation/blob/main/RULES.md\" target=\"_blank\" rel=\"noopener noreferrer\"\u003ERULES.md\u003C/a\u003E.",
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
              "html": "Lab thuộc \u003Cstrong\u003EAICB-P1 · Phase 1 · Ngày 14 trong 15 · K4\u003C/strong\u003E",
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
                "Làm \u003Cstrong\u003Ecá nhân\u003C/strong\u003E, thời lượng \u003Cstrong\u003E225 phút\u003C/strong\u003E.",
                "Buổi học bắt đầu từ \u003Cstrong\u003E9:15 đến 13:00\u003C/strong\u003E;",
                "\u003Cstrong\u003E12:00\u003C/strong\u003E: bắt đầu demo và Q&amp;A.",
                "Các checkpoint dưới đây theo \u003Ca href=\"https://github.com/VinUni-AI20k/K4-L3B-AI-Evaluation/blob/main/CHECKPOINTS.md\" target=\"_blank\" rel=\"noopener noreferrer\"\u003ECHECKPOINTS.md\u003C/a\u003E."
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
                "Hoàn thiện năm Task bắt buộc và kiểm chứng bằng bộ unit tests của repo.",
                "Tạo golden dataset 20 QA có evidence từ đủ 10 tài liệu nguồn.",
                "Sinh actual answers, đo năm metrics và thiết kế rubric chấm điểm 1–5.",
                "Phân tích ba trường hợp bằng 5 Whys và đề xuất cách kiểm tra regression."
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
                "Có Python 3.11 trở lên và Git để làm việc trên repository cá nhân.",
                "Có OpenAI API key để chạy phần sinh câu trả lời thật.",
                "Trình soạn thảo, terminal và tài khoản GitHub.",
                "Các thư viện trong requirements.txt của starter repo."
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
              "html": "Mở repo nguồn trên GitHub trước khi cài đặt. Cuối pha này, bạn có repository cá nhân và terminal chạy được bộ tests. Baseline là trạng thái starter để đối chiếu với những lần kiểm tra sau.",
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
                "\u003Cstrong\u003E1.\u003C/strong\u003E Trên GitHub, chọn \u003Cstrong\u003EFork\u003C/strong\u003E và đặt tên repository theo mẫu bên dưới. Thay phần họ tên bằng tên viết liền không dấu, PascalCase; điền MSSV của chính bạn. Mỗi học viên dùng một repository riêng."
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
              "md": "```text\nK4-L3B-\u003CHoVaTen\u003E-\u003CMSSV\u003E-AIEvaluation\n```"
            },
            {
              "t": "ul",
              "html": null,
              "items": [
                "\u003Cstrong\u003E1.\u003C/strong\u003E Sao chép URL clone của fork từ GitHub và clone về máy. Đặt tên thư mục làm việc là \u003Ccode\u003EK4-L3B-HoVaTen-MSSV\u003C/code\u003E, thay hai thành phần cuối bằng thông tin của bạn. Mở thư mục này trong editor; terminal phải đứng tại nơi chứa \u003Ccode\u003Etemplate.py\u003C/code\u003E, \u003Ccode\u003Erequirements.txt\u003C/code\u003E và \u003Ccode\u003Egolden_dataset.json\u003C/code\u003E. Tên thư mục trên máy và tên repository GitHub có quy định riêng như trên."
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
                "\u003Cstrong\u003E1.\u003C/strong\u003E Trong terminal, tạo môi trường theo hệ điều hành. Với macOS/Linux, kiểm tra Python từ 3.11 trở lên rồi chạy:"
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
              "md": "```bash\npython3 --version\npython3 -m venv .venv\nsource .venv/bin/activate\n```"
            },
            {
              "t": "p",
              "html": "Với Windows PowerShell, dùng Python 3.11 đã cài; nếu máy có 3.12, thay \u003Ccode\u003E-3.11\u003C/code\u003E bằng \u003Ccode\u003E-3.12\u003C/code\u003E:",
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
              "md": "```powershell\npy -0p\npy -3.11 -m venv .venv\n.venv\\Scripts\\Activate.ps1\n```"
            },
            {
              "t": "ul",
              "html": null,
              "items": [
                "\u003Cstrong\u003E1.\u003C/strong\u003E Sau khi kích hoạt môi trường, cài dependencies và chạy baseline từ thư mục gốc:"
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
              "md": "```bash\npython --version\npython -m pip install -r requirements.txt\npython -c \"import openai, dotenv, pytest; print('Environment OK')\"\npytest tests/ -v\n```"
            },
            {
              "t": "p",
              "html": "Bạn cần thấy \u003Ccode\u003EEnvironment OK\u003C/code\u003E và tests được thu thập. Starter nguyên trạng có mốc dự kiến \u003Cstrong\u003E42 failed\u003C/strong\u003E do TODO chưa hoàn thiện. Nếu gặp lỗi import hoặc collection, sửa môi trường theo \u003Ca href=\"https://github.com/VinUni-AI20k/K4-L3B-AI-Evaluation/blob/main/guide_lab.md\" target=\"_blank\" rel=\"noopener noreferrer\"\u003Eguide_lab.md\u003C/a\u003E trước khi viết code.",
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
              "html": "\u003Cstrong\u003EHoàn thành CP0:\u003C/strong\u003E editor mở đúng repo, Python đạt yêu cầu và tests chạy đến các lỗi của starter. Giữ terminal này cho các pha tiếp theo.",
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
        "id": "codelab-b7e8003823124c879d40660d2faf9a24-s02-doc",
        "type": "text",
        "title": "Hoàn thiện dữ liệu đầu vào và cách tính Overall — CP1",
        "duration_min": null,
        "ai_prompts": [],
        "status": "todo",
        "body": {
          "reading_label": null,
          "blocks": [
            {
              "t": "p",
              "html": "Mở \u003Ccode\u003Eexercises.md\u003C/code\u003E cạnh \u003Ccode\u003Etemplate.py\u003C/code\u003E. Trước khi tính điểm, bạn cần phân biệt dữ liệu dùng làm đáp án tham chiếu với câu trả lời do hệ thống sinh ra. Nếu trộn hai loại này, điểm số có thể trông hợp lệ nhưng không còn đo hành vi thật của trợ lý. Pha này kết thúc khi hai data models nhận đúng dữ liệu và ba tests của \u003Ccode\u003Eoverall_score()\u003C/code\u003E pass.",
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
              "html": "Trong Lab, \u003Cstrong\u003Egolden dataset\u003C/strong\u003E là bộ câu hỏi cùng đáp án và evidence do bạn biên soạn từ corpus. \u003Cstrong\u003EActual answer\u003C/strong\u003E là câu trả lời thật được lưu sau khi chạy trợ lý. \u003Ccode\u003EQAPair\u003C/code\u003E giữ câu hỏi, đáp án tham chiếu và context; \u003Ccode\u003EEvalResult\u003C/code\u003E giữ actual answer cùng các điểm đánh giá. Dữ liệu đi từ câu hỏi sang kết quả qua hai cấu trúc này, nên tên trường và signature phải khớp starter.",
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
              "html": "Ba \u003Cstrong\u003Eanswer metrics\u003C/strong\u003E đo câu trả lời: Faithfulness, Relevance và Completeness. Hai \u003Cstrong\u003Eretrieval metrics\u003C/strong\u003E đo các đoạn tài liệu được lấy về: Context Recall và Context Precision. \u003Ccode\u003Eoverall_score()\u003C/code\u003E chỉ lấy trung bình ba answer metrics. Hai retrieval metrics được giữ riêng để bạn chẩn đoán bước lấy tài liệu khi phân tích benchmark.",
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
                "\u003Cstrong\u003E1.\u003C/strong\u003E Trong \u003Cstrong\u003EPart 1 — Warm-up\u003C/strong\u003E của \u003Ccode\u003Eexercises.md\u003C/code\u003E, điền Exercises 1.1–1.3. Ghi trường hợp điểm thấp cần điều tra, cách thử bias và đề xuất quality gate. Đây là lập luận của bạn; các ngưỡng bạn đề xuất trong worksheet không thay thế công thức đã quy định trong code."
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
                "\u003Cstrong\u003E1.\u003C/strong\u003E Trong \u003Cstrong\u003ETask 1\u003C/strong\u003E của \u003Ccode\u003Etemplate.py\u003C/code\u003E, hoàn thiện \u003Ccode\u003EQAPair\u003C/code\u003E theo docstring: \u003Ccode\u003Equestion\u003C/code\u003E, \u003Ccode\u003Eexpected_answer\u003C/code\u003E, \u003Ccode\u003Econtext\u003C/code\u003E, \u003Ccode\u003Emetadata\u003C/code\u003E, \u003Ccode\u003Eretrieved_contexts\u003C/code\u003E. Giữ default cho các trường tùy chọn. Với list và dict, dùng \u003Ccode\u003Efield(default_factory=...)\u003C/code\u003E như gợi ý để mỗi instance có dữ liệu riêng. Kiểm tra rằng \u003Ccode\u003Econtext\u003C/code\u003E là chuỗi gold evidence, còn \u003Ccode\u003Eretrieved_contexts\u003C/code\u003E là danh sách các chunks theo thứ tự truy xuất."
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
                "\u003Cstrong\u003E1.\u003C/strong\u003E Hoàn thiện \u003Ccode\u003EEvalResult\u003C/code\u003E và \u003Ccode\u003Eoverall_score()\u003C/code\u003E. Giữ \u003Ccode\u003Eqa_pair\u003C/code\u003E, \u003Ccode\u003Eactual_answer\u003C/code\u003E, ba answer scores, \u003Ccode\u003Epassed\u003C/code\u003E, \u003Ccode\u003Efailure_type\u003C/code\u003E cùng hai retrieval scores tùy chọn. \u003Ccode\u003ENone\u003C/code\u003E ở một retrieval score có nghĩa là metric chưa được tính; giá trị \u003Ccode\u003E0.0\u003C/code\u003E là kết quả đã tính. Đừng gộp hai trạng thái này khi viết model hoặc report."
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
                "\u003Cstrong\u003E1.\u003C/strong\u003E Lưu code, đồng bộ file được tests sử dụng rồi chạy nhóm test của pha. Trong Lab này, chọn \u003Ccode\u003Etemplate.py\u003C/code\u003E làm bản làm việc chính. Sau mỗi nhóm TODO đã sửa, copy sang \u003Ccode\u003Esolution/solution.py\u003C/code\u003E trước khi chạy tests."
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
                "MacOS/Linux:"
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
              "md": "```bash\ncp template.py solution/solution.py\npytest tests/test_solution.py::TestEvalResultOverallScore -v\n```"
            },
            {
              "t": "ul",
              "html": null,
              "items": [
                "Windows PowerShell:"
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
              "md": "```powershell\nCopy-Item template.py solution/solution.py\npytest tests/test_solution.py::TestEvalResultOverallScore -v\n```"
            },
            {
              "t": "p",
              "html": "Tests ưu tiên \u003Ccode\u003Esolution/solution.py\u003C/code\u003E khi file tồn tại; \u003Ccode\u003Eevaluate_answers.py\u003C/code\u003E lại import \u003Ccode\u003Etemplate.py\u003C/code\u003E. Vì vậy, lưu file trong editor chưa đủ để tests đọc bản mới. Nếu trước đó bạn đã làm trực tiếp trong \u003Ccode\u003Esolution/solution.py\u003C/code\u003E, đối chiếu và đưa phần hoàn thiện về \u003Ccode\u003Etemplate.py\u003C/code\u003E trước khi dùng lệnh copy; tránh ghi đè bài đã làm.",
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
              "html": "\u003Cstrong\u003EHoàn thành CP1:\u003C/strong\u003E nhóm \u003Ccode\u003ETestEvalResultOverallScore\u003C/code\u003E đạt \u003Cstrong\u003E3 passed\u003C/strong\u003E. Nếu lỗi xuất hiện ngay khi tạo \u003Ccode\u003EQAPair\u003C/code\u003E hoặc \u003Ccode\u003EEvalResult\u003C/code\u003E, đọc lại tên trường và defaults trước khi sửa phép tính. Khi models đã nhận đúng dữ liệu, bạn có thể triển khai từng metric ở pha tiếp theo mà không phải thay đổi cấu trúc đầu vào.",
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
              "html": "Khi toàn suite vẫn còn tests fail ở CP1, hãy xem chúng thuộc Task nào. Các Task 2–5 chưa hoàn thiện sẽ tiếp tục báo lỗi; dùng nhóm test của pha để quyết định chuyển bước.",
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
        "id": "codelab-b7e8003823124c879d40660d2faf9a24-s03-doc",
        "type": "text",
        "title": "Tính năm metrics và kiểm tra LLMJudge — CP2",
        "duration_min": null,
        "ai_prompts": [],
        "status": "todo",
        "body": {
          "reading_label": null,
          "blocks": [
            {
              "t": "p",
              "html": "Tiếp tục trong \u003Ccode\u003Etemplate.py\u003C/code\u003E, tại \u003Cstrong\u003ETask 2\u003C/strong\u003E và \u003Cstrong\u003ETask 3\u003C/strong\u003E. Đích của pha là một evaluator trả được năm metrics đúng trách nhiệm và một judge xử lý được phản hồi theo interface đã cho. Các metrics trong starter dùng \u003Cstrong\u003Eword overlap\u003C/strong\u003E, tức mức giao nhau giữa các tập từ; kết quả cần được đọc cùng evidence khi bạn đánh giá chất lượng câu trả lời.",
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
              "html": "Hàm \u003Ccode\u003E_tokenize()\u003C/code\u003E đã xử lý chữ thường, dấu câu và loại \u003Ccode\u003ESTOPWORDS\u003C/code\u003E. Hãy dùng hàm này trong các phép đo để cùng một văn bản được xử lý nhất quán. Điểm overlap không tự xác nhận một chính sách đúng về ý nghĩa: câu trả lời có thể dùng nhiều từ giống nguồn nhưng sai điều kiện. Khi báo cáo, bạn vẫn cần mở actual answer và đoạn evidence tương ứng.",
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
              "html": "Mỗi metric đang so sánh những dữ liệu nào?",
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
              "html": "Trong benchmark của repo, adapter ghép gold evidence thành \u003Ccode\u003EQAPair.context\u003C/code\u003E. Faithfulness dùng context này để so với actual answer. Context Recall và Context Precision dùng các chunks thật trong \u003Ccode\u003Eretrieved_contexts\u003C/code\u003E. Giữ đúng đường đi này khi triển khai; nó quyết định bạn có thể diễn giải mỗi score đến đâu.",
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
              "md": "| Metric | Dữ liệu so sánh | Điều cần kiểm tra |\n| --- | --- | --- |\n| Faithfulness | Answer với gold context | Tỷ lệ từ của answer có trong context |\n| Relevance | Answer với question | Tỷ lệ từ của question được answer phủ |\n| Completeness | Answer với expected answer | Tỷ lệ từ của expected được answer phủ |\n| Context Recall | Hợp các chunks với expected | Evidence cần thiết có được lấy về |\n| Context Precision | Chunks theo hạng với expected | Chunks liên quan có đứng sớm |"
            },
            {
              "t": "p",
              "html": "\u003Cstrong\u003EAverage Precision@K\u003C/strong\u003E xét vị trí của các chunks liên quan. Theo docstring, một chunk được xem là liên quan khi phủ ít nhất \u003Ccode\u003Erelevance_threshold\u003C/code\u003E, mặc định \u003Ccode\u003E0.1\u003C/code\u003E, của tập từ expected. Bạn tính precision tại từng hạng có chunk liên quan, rồi lấy trung bình trên số chunk liên quan. Chỉ đếm số chunks liên quan sẽ bỏ mất thông tin thứ tự mà metric này cần đo.",
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
                "\u003Cstrong\u003E1.\u003C/strong\u003E Hoàn thiện ba answer metrics theo docstring. Kiểm tra mẫu số của từng metric trước khi viết phép chia. Giữ điểm trong \u003Ccode\u003E[0.0, 1.0]\u003C/code\u003E và xử lý trường hợp tập từ ở mẫu số rỗng theo contract: answer rỗng với Faithfulness, question rỗng với Relevance, expected rỗng với Completeness trả \u003Ccode\u003E1.0\u003C/code\u003E. Khi một test fail, kiểm tra tập từ thực tế sau \u003Ccode\u003E_tokenize()\u003C/code\u003E trước khi đổi công thức."
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
                "\u003Cstrong\u003E1.\u003C/strong\u003E Hoàn thiện hai retrieval metrics. Context Recall dùng \u003Cstrong\u003Ehợp\u003C/strong\u003E tập từ của tất cả chunks, nên việc đổi thứ tự cùng một tập chunks không đổi coverage. Context Precision phải giữ thứ tự để tính điểm theo hạng. Expected rỗng trả \u003Ccode\u003E1.0\u003C/code\u003E; với expected có nội dung, precision trả \u003Ccode\u003E0.0\u003C/code\u003E khi không có chunks hoặc không có chunk liên quan."
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
                "\u003Cstrong\u003E1.\u003C/strong\u003E Nối các phép đo trong \u003Ccode\u003Erun_full_eval()\u003C/code\u003E. Khi \u003Ccode\u003Econtexts is None\u003C/code\u003E, giữ hai retrieval scores là \u003Ccode\u003ENone\u003C/code\u003E; khi được truyền danh sách, kể cả danh sách rỗng, gọi các hàm retrieval. \u003Ccode\u003Epassed\u003C/code\u003E chỉ là \u003Ccode\u003ETrue\u003C/code\u003E khi cả ba answer scores từ \u003Ccode\u003E0.5\u003C/code\u003E trở lên. Giữ thứ tự phân loại đầu tiên khớp: Faithfulness dưới \u003Ccode\u003E0.3\u003C/code\u003E → \u003Ccode\u003Ehallucination\u003C/code\u003E; Relevance dưới \u003Ccode\u003E0.3\u003C/code\u003E → \u003Ccode\u003Eirrelevant\u003C/code\u003E; Completeness dưới \u003Ccode\u003E0.3\u003C/code\u003E → \u003Ccode\u003Eincomplete\u003C/code\u003E; còn lại nếu failed → \u003Ccode\u003Eoff_topic\u003C/code\u003E."
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
                "\u003Cstrong\u003E1.\u003C/strong\u003E Trong \u003Ccode\u003ELLMJudge\u003C/code\u003E, lưu callable \u003Ccode\u003Ejudge_llm_fn\u003C/code\u003E, tạo prompt chứa question, answer và rubric, rồi đọc JSON scores từ kết quả. Theo interface hiện tại, scores trong code nằm trên thang \u003Ccode\u003E0–1\u003C/code\u003E; nếu không parse được JSON scores, trả fallback \u003Ccode\u003E0.5\u003C/code\u003E cho mỗi tiêu chí. Phần rubric bạn sẽ viết ở Exercise 3.3 dùng thang \u003Ccode\u003E1–5\u003C/code\u003E. Giữ rõ hai thang này khi trình bày và không tự thay đổi contract của class. \u003Ccode\u003Edetect_bias()\u003C/code\u003E cần trả các khóa \u003Ccode\u003Epositional_bias\u003C/code\u003E, \u003Ccode\u003Eleniency_bias\u003C/code\u003E, \u003Ccode\u003Eseverity_bias\u003C/code\u003E; hai ngưỡng trong docstring là trung bình \u003Ccode\u003E&gt; 0.8\u003C/code\u003E và \u003Ccode\u003E&lt; 0.3\u003C/code\u003E."
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
                "\u003Cstrong\u003E1.\u003C/strong\u003E Đồng bộ hai file theo CP1 rồi chạy các nhóm tests sau từ thư mục gốc. Unit tests cung cấp callable phản hồi cho judge nên chưa cần API key."
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
              "md": "```bash\npytest tests/test_solution.py::TestRAGASEvaluator tests/test_solution.py::TestContextMetrics tests/test_solution.py::TestRetrievalMetricWiring::test_run_full_eval_connects_optional_retrieval_metrics -v\npytest tests/test_solution.py::TestLLMJudge -v\npytest tests/ -v\n```"
            },
            {
              "t": "p",
              "html": "\u003Cstrong\u003EHoàn thành CP2:\u003C/strong\u003E",
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
                "Nhóm evaluator đạt \u003Cstrong\u003E14 passed, 1 skipped\u003C/strong\u003E, nhóm judge \u003Cstrong\u003E4 passed\u003C/strong\u003E;",
                "Toàn suite cộng dồn dự kiến \u003Cstrong\u003E21 passed, 20 failed, 1 skipped\u003C/strong\u003E.",
                "Test skipped thuộc bonus reranking.",
                "Những tests còn fail cần thuộc phần Runner và Analyzer chưa hoàn thiện.",
                "Nếu retrieval score bị \u003Ccode\u003ENone\u003C/code\u003E khi test đã truyền chunks, kiểm tra nhánh \u003Ccode\u003Econtexts\u003C/code\u003E trong \u003Ccode\u003Erun_full_eval()\u003C/code\u003E",
                "Nếu điểm khác kỳ vọng, xác định đúng mẫu số và thứ tự hạng trước khi sửa."
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
              "html": "Judge trong code phát hiện các tín hiệu bias nêu trong docstring. Worksheet còn yêu cầu lập phương án kiểm soát position, verbosity và self-preference bias; các yêu cầu đó cần phần lập luận riêng của bạn. Khi evaluator và judge qua checkpoint, chuyển sang nối pipeline để mỗi QA tạo một kết quả có thể truy ngược về câu hỏi ban đầu.",
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
        "id": "codelab-b7e8003823124c879d40660d2faf9a24-s04-doc",
        "type": "text",
        "title": "Nối benchmark và công cụ phân tích lỗi — CP3",
        "duration_min": null,
        "ai_prompts": [],
        "status": "todo",
        "body": {
          "reading_label": null,
          "blocks": [
            {
              "t": "p",
              "html": "Mở \u003Cstrong\u003ETask 4–5\u003C/strong\u003E trong \u003Ccode\u003Etemplate.py\u003C/code\u003E. Các metrics đã tính được từng score; bây giờ bạn cần chạy chúng trên danh sách QA, tổng hợp kết quả và nhận diện thay đổi giữa hai lần đánh giá. Cuối pha này, toàn bộ required tests phải pass để benchmark thật có thể dùng evaluation core của bạn.",
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
              "html": "\u003Ccode\u003EBenchmarkRunner.run()\u003C/code\u003E nhận \u003Ccode\u003Eqa_pairs\u003C/code\u003E, một \u003Ccode\u003Eagent_fn\u003C/code\u003E nhận câu hỏi và trả câu trả lời, cùng evaluator. Với benchmark thật, adapter sẽ cấp một hàm trả lại actual answer đã lưu. Nhờ đó bạn có thể sửa evaluation core và đo lại cùng đầu vào mà không cần sinh thêm câu trả lời mỗi lần. Điều kiện là giữ đúng QA và thứ tự chunks gắn với từng kết quả.",
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
              "html": "\u003Cstrong\u003ERegression\u003C/strong\u003E trong Lab là trung bình một answer metric giảm \u003Cstrong\u003Ehơn \u003Ccode\u003E0.05\u003C/code\u003E\u003C/strong\u003E so với baseline. Đây là phép so sánh giữa hai lần chạy, khác với \u003Ccode\u003Epassed\u003C/code\u003E của một QA dựa trên ngưỡng \u003Ccode\u003E0.5\u003C/code\u003E. Bạn cần giữ riêng hai quyết định này khi viết report và đề xuất quality gate trong reflection. Repo yêu cầu chiến lược CI/CD; phần bắt buộc ở đây là hàm so sánh và báo cáo, chưa yêu cầu tạo workflow triển khai.",
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
                "\u003Cstrong\u003E1.\u003C/strong\u003E Hoàn thiện \u003Ccode\u003EBenchmarkRunner.run()\u003C/code\u003E. Với mỗi pair, gọi \u003Ccode\u003Eagent_fn(pair.question)\u003C/code\u003E, chuyển actual answer vào \u003Ccode\u003Erun_full_eval()\u003C/code\u003E và truyền \u003Ccode\u003Epair.retrieved_contexts\u003C/code\u003E qua tham số \u003Ccode\u003Econtexts\u003C/code\u003E. Giữ lại pair gốc trên \u003Ccode\u003EEvalResult\u003C/code\u003E, vì adapter cần \u003Ccode\u003Emetadata.id\u003C/code\u003E để in bảng và liên kết với artifacts. Nếu tạo pair mới mà mất metadata, điểm vẫn có thể được tính nhưng bạn sẽ khó biết nó thuộc câu hỏi nào."
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
                "\u003Cstrong\u003E1.\u003C/strong\u003E Hoàn thiện \u003Ccode\u003Egenerate_report()\u003C/code\u003E, \u003Ccode\u003Eidentify_failures()\u003C/code\u003E và \u003Ccode\u003Erun_regression()\u003C/code\u003E. Report cần tổng số cases, số passed, pass rate, trung bình ba answer metrics, trung bình hai retrieval metrics và thống kê failure types. Chỉ lấy trung bình retrieval trên các giá trị khác \u003Ccode\u003ENone\u003C/code\u003E; nếu toàn bộ đều thiếu, trả \u003Ccode\u003ENone\u003C/code\u003E. Đối chiếu docstring và tests cho dữ liệu rỗng, thay vì để phép chia gây lỗi."
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
                "\u003Cstrong\u003E1.\u003C/strong\u003E Hoàn thiện \u003Ccode\u003EFailureAnalyzer\u003C/code\u003E. \u003Ccode\u003Ecategorize_failures()\u003C/code\u003E đếm theo \u003Ccode\u003Efailure_type\u003C/code\u003E; \u003Ccode\u003Efind_root_cause()\u003C/code\u003E gợi ý nguyên nhân từ scores; \u003Ccode\u003Egenerate_improvement_suggestions()\u003C/code\u003E trả gợi ý cụ thể; \u003Ccode\u003Egenerate_improvement_log()\u003C/code\u003E tạo bảng Markdown theo các cột đã quy định, với trạng thái \u003Ccode\u003EOpen\u003C/code\u003E. Dùng gợi ý root cause làm điểm bắt đầu kiểm tra trace. Một score thấp chưa đủ chứng minh nguyên nhân thực tế nằm ở retrieval hay generation."
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
                "\u003Cstrong\u003E1.\u003C/strong\u003E Đồng bộ \u003Ccode\u003Etemplate.py\u003C/code\u003E sang \u003Ccode\u003Esolution/solution.py\u003C/code\u003E, rồi chạy nhóm tests tương ứng và toàn suite:"
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
              "md": "```bash\npytest tests/test_solution.py::TestBenchmarkRunner tests/test_solution.py::TestRunRegression tests/test_solution.py::TestRetrievalMetricWiring::test_runner_forwards_retrieved_contexts tests/test_solution.py::TestRetrievalMetricWiring::test_report_includes_retrieval_averages -v\npytest tests/test_solution.py::TestFailureAnalyzer tests/test_solution.py::TestGenerateImprovementLog -v\npytest tests/ -v\n```"
            },
            {
              "t": "p",
              "html": "Nhóm Runner dự kiến \u003Cstrong\u003E11 passed\u003C/strong\u003E, nhóm Analyzer \u003Cstrong\u003E9 passed\u003C/strong\u003E. Nếu hai retrieval averages bị thiếu, kiểm tra đường truyền từ \u003Ccode\u003EQAPair.retrieved_contexts\u003C/code\u003E tới \u003Ccode\u003Erun_full_eval()\u003C/code\u003E trước, rồi mới kiểm tra cách tổng hợp report. Nếu regression báo sai, đối chiếu cả new và baseline cùng metric, đúng chiều giảm và đúng điều kiện \"hơn \u003Ccode\u003E0.05\u003C/code\u003E\".",
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
              "html": "\u003Cstrong\u003EHoàn thành CP3:\u003C/strong\u003E toàn suite đạt \u003Cstrong\u003E41 passed, 1 skipped\u003C/strong\u003E khi chưa làm bonus. Các con số này là mốc cần đạt sau khi bạn hoàn thiện code. Chạy \u003Ccode\u003Epython template.py\u003C/code\u003E chỉ thực hiện demo nhỏ có sẵn; nó không thay thế unit tests hay benchmark 20 QA. Khi required tests đã pass và hai file code đồng bộ, bạn có thể chuyển sang xây dựng dữ liệu để đánh giá hệ thống thật.",
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
        "id": "codelab-b7e8003823124c879d40660d2faf9a24-s05-doc",
        "type": "text",
        "title": "Tạo golden dataset có evidence kiểm chứng được — CP4, phần dữ liệu",
        "duration_min": null,
        "ai_prompts": [],
        "status": "todo",
        "body": {
          "reading_label": null,
          "blocks": [
            {
              "t": "p",
              "html": "Mở \u003Ccode\u003Edata/technology_store/manifest.json\u003C/code\u003E, sau đó mở các tài liệu Markdown được liệt kê. Corpus này là dữ liệu mô phỏng của OrbitTech Store và là nguồn sự thật duy nhất cho Lab. Đầu ra của pha là \u003Ccode\u003Egolden_dataset.json\u003C/code\u003E chứa đúng 20 QA, dùng đủ 10 tài liệu và được validator chấp nhận.",
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
              "html": "\u003Cstrong\u003EGround truth\u003C/strong\u003E ở đây là expected answer do bạn viết từ evidence. \u003Cstrong\u003EProvenance\u003C/strong\u003E là khả năng truy lại evidence về đúng \u003Ccode\u003Esource_doc\u003C/code\u003E và đoạn trích nguyên văn. Hai điều này bổ sung cho nhau: một đoạn trích đúng nguồn vẫn có thể không hỗ trợ toàn bộ câu trả lời bạn viết. Validator kiểm tra cấu trúc và provenance; bạn chịu trách nhiệm đọc lại ý nghĩa, điều kiện và ngoại lệ.",
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
              "html": "\u003Cstrong\u003EStratified sampling\u003C/strong\u003E trong bài là phân bổ 5 Easy, 7 Medium, 5 Hard và 3 Adversarial. Easy kiểm tra tra cứu trực tiếp; Medium yêu cầu kết hợp quy trình hoặc nhiều tài liệu; Hard xử lý điều kiện, ngoại lệ hoặc phiên bản chính sách. Độ khó cần đến từ việc suy luận trên nguồn. Kéo dài câu hỏi mà vẫn chỉ tra một thông tin không làm nó thành Hard.",
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
                "\u003Cstrong\u003E1.\u003C/strong\u003E Đọc manifest và corpus trước khi điền QA. Ghi nhận tài liệu nào hỗ trợ từng chủ đề như sản phẩm, thanh toán, vận chuyển, bảo hành, quyền riêng tư và cập nhật chính sách. Giữ corpus nguyên trạng. Khi một điều bạn định viết không có trong nguồn, điều chỉnh câu hỏi hoặc expected answer để trở về phạm vi nguồn."
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
                "\u003Cstrong\u003E1.\u003C/strong\u003E Trong \u003Ccode\u003Egolden_dataset.json\u003C/code\u003E, giữ cấu trúc cấp cao và 20 slots có sẵn. Giữ \u003Ccode\u003Eschema_version\u003C/code\u003E, \u003Ccode\u003Ecorpus_id\u003C/code\u003E, thứ tự IDs, \u003Ccode\u003Edifficulty\u003C/code\u003E, \u003Ccode\u003Eattack_type\u003C/code\u003E. Điền \u003Ccode\u003Equestion\u003C/code\u003E, \u003Ccode\u003Eexpected_answer\u003C/code\u003E và \u003Ccode\u003Econtexts\u003C/code\u003E. Với mỗi context, đặt \u003Ccode\u003Esource_doc\u003C/code\u003E đúng tên file và copy đoạn ngắn nguyên văn vào \u003Ccode\u003Etext\u003C/code\u003E. Có thể thêm hoặc bớt context objects theo evidence cần dùng, nhưng không để lại object rỗng. Nên viết question và answer bằng tiếng Anh để khớp corpus và prompt của trợ lý."
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
                "\u003Cstrong\u003E1.\u003C/strong\u003E Kiểm tra ba slots Adversarial. A01 giữ \u003Ccode\u003Eout_of_scope\u003C/code\u003E; A02 giữ \u003Ccode\u003Eprompt_injection\u003C/code\u003E; A03 giữ \u003Ccode\u003Efalse_premise_or_ambiguous_trap\u003C/code\u003E. Cả ba cần evidence phù hợp từ \u003Ccode\u003E00_system_scope.md\u003C/code\u003E. Viết expected answer mô tả hành vi được chính sách hỗ trợ: giới hạn phạm vi, giữ quy tắc hệ thống hoặc xử lý tiền đề sai. Đừng dùng một câu vô nghĩa chỉ để lấp slot."
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
                "\u003Cstrong\u003E1.\u003C/strong\u003E Tự đọc lại từng QA rồi chạy validator từ thư mục gốc. Kiểm tra mọi claim trong expected answer có evidence; các câu hỏi không trùng ý; ngày, số tiền, điều kiện và ngoại lệ quan trọng vẫn đầy đủ. Coverage toàn bộ tài liệu phải đến từ những QA có lý do sử dụng nguồn đó."
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
              "md": "```bash\npython validate_golden_dataset.py\n```"
            },
            {
              "t": "p",
              "html": "Khi cấu trúc và provenance hợp lệ, validator in:",
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
              "md": "```text\nPASS: dataset structure and evidence provenance are valid.\n```"
            },
            {
              "t": "ul",
              "html": null,
              "items": [
                "\u003Cstrong\u003E1.\u003C/strong\u003E Trong Exercise 3.1 của \u003Ccode\u003Eexercises.md\u003C/code\u003E, ghi phân bố, coverage và trạng thái validator. Chọn ba case đại diện, giải thích vì sao mỗi case phù hợp difficulty hoặc attack type. Dataset đầy đủ nằm trong JSON; worksheet chỉ ghi kết quả và quyết định thiết kế để người review hiểu cách bạn xây dựng nó."
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
              "html": "Nếu validator báo \u003Ccode\u003Etext is not a verbatim substring\u003C/code\u003E, copy lại từ đúng file nguồn, giữ dấu câu và khoảng trắng. Nếu thiếu coverage, xem tài liệu còn thiếu và thiết kế case phù hợp; thêm evidence không liên quan chỉ để đủ số không giải quyết chất lượng dataset. Các lỗi \u003Ccode\u003Eexpected difficulty\u003C/code\u003E hoặc \u003Ccode\u003Eexpected attack_type\u003C/code\u003E cần được xử lý bằng cách khôi phục giá trị slot ban đầu.",
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
              "html": "\u003Cstrong\u003EHoàn thành phần dữ liệu:\u003C/strong\u003E validator báo PASS, phân bố đạt \u003Cstrong\u003E5/7/5/3\u003C/strong\u003E, coverage \u003Cstrong\u003E10/10\u003C/strong\u003E và Exercise 3.1 giải thích được ba lựa chọn thiết kế. PASS chưa xác nhận chất lượng ngữ nghĩa hay độ khó thực tế. Khi bạn đã đối chiếu thủ công expected answer với evidence, dataset mới sẵn sàng làm đầu vào sinh actual answers mà không đưa đáp án tham chiếu vào bước generation.",
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
        "id": "codelab-b7e8003823124c879d40660d2faf9a24-s06-doc",
        "type": "text",
        "title": "Sinh actual answers và ghi benchmark — CP4, phần đánh giá",
        "duration_min": null,
        "ai_prompts": [],
        "status": "todo",
        "body": {
          "reading_label": null,
          "blocks": [
            {
              "t": "p",
              "html": "Giữ terminal ở thư mục gốc. Trước pha này, golden dataset phải PASS validator và evaluation core phải qua CP3. Bạn sẽ tạo \u003Ccode\u003Eartifacts/actual_answers.json\u003C/code\u003E, dùng nó để sinh \u003Ccode\u003Eartifacts/benchmark_results.json\u003C/code\u003E, rồi hoàn thành Exercises 3.2–3.3. Đây là lúc cần OpenAI API key đã chuẩn bị.",
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
              "html": "\u003Ccode\u003Edomain_assistant.py\u003C/code\u003E thực hiện RAG: truy xuất chunks bằng BM25, đưa chúng cùng question cho model và lưu câu trả lời kèm trace. Khi sinh answer, nó chỉ lấy \u003Ccode\u003Eid\u003C/code\u003E và \u003Ccode\u003Equestion\u003C/code\u003E từ từng QA, không dùng expected answer hay gold contexts. \u003Cstrong\u003EData leakage\u003C/strong\u003E sẽ xảy ra nếu bạn đưa đáp án tham chiếu vào hệ thống đang được chấm; khi đó benchmark không còn đo khả năng trả lời từ corpus như yêu cầu.",
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
              "html": "\u003Ccode\u003Eevaluate_answers.py\u003C/code\u003E đọc lại artifacts và gọi core trong \u003Ccode\u003Etemplate.py\u003C/code\u003E. Bước này không gọi model để sinh câu trả lời mới và không tự chạy \u003Ccode\u003ELLMJudge\u003C/code\u003E để tạo điểm trong Exercise 3.2. Năm metrics của bảng đến từ evaluator bạn vừa triển khai; rubric LLM-as-a-Judge là sản phẩm thiết kế riêng ở Exercise 3.3.",
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
                "\u003Cstrong\u003E1.\u003C/strong\u003E Nếu chưa có \u003Ccode\u003E.env\u003C/code\u003E, tạo file từ \u003Ccode\u003E.env.example\u003C/code\u003E. Trên macOS/Linux, dùng:"
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
              "md": "```bash\ncp .env.example .env\n```"
            },
            {
              "t": "p",
              "html": "Trên Windows PowerShell, dùng:",
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
              "md": "```powershell\nCopy-Item .env.example .env\n```"
            },
            {
              "t": "p",
              "html": "Mở \u003Ccode\u003E.env\u003C/code\u003E trong editor, điền \u003Ccode\u003EOPENAI_API_KEY\u003C/code\u003E của bạn và giữ \u003Ccode\u003EOPENAI_MODEL=gpt-4o-mini\u003C/code\u003E theo cấu hình mẫu của repo. Nếu đã cấu hình file, kiểm tra các trường thay vì copy đè. \u003Ccode\u003E.env\u003C/code\u003E được ignore trong Git; không đưa key vào code, worksheet, ảnh terminal hoặc commit.",
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
                "\u003Cstrong\u003E1.\u003C/strong\u003E Chạy trợ lý từ thư mục gốc và theo dõi tiến độ từng ID:"
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
              "md": "```bash\npython domain_assistant.py\n```"
            },
            {
              "t": "p",
              "html": "Mở \u003Ccode\u003Eartifacts/actual_answers.json\u003C/code\u003E sau khi hoàn tất. Danh sách \u003Ccode\u003Eanswers\u003C/code\u003E phải có đủ 20 IDs khớp golden dataset; mỗi \u003Ccode\u003Eactual_answer\u003C/code\u003E có nội dung, \u003Ccode\u003Eerror\u003C/code\u003E là \u003Ccode\u003Enull\u003C/code\u003E, và \u003Ccode\u003Eretrieved_contexts\u003C/code\u003E có \u003Ccode\u003Esource_doc\u003C/code\u003E, \u003Ccode\u003Echunk_id\u003C/code\u003E, \u003Ccode\u003Etext\u003C/code\u003E, \u003Ccode\u003Escore\u003C/code\u003E. Các trường này là trace để bạn biết câu trả lời đã được tạo từ tài liệu nào. Nếu script dừng ở lỗi, sửa nguyên nhân rồi chạy lại; không điền answer bằng tay để tạo artifact có vẻ hoàn chỉnh. File từ lần chạy trước có thể vẫn còn khi lần mới lỗi; đối chiếu \u003Ccode\u003Egenerated_at\u003C/code\u003E với lần chạy vừa hoàn tất trước khi dùng kết quả.",
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
                "\u003Cstrong\u003E1.\u003C/strong\u003E Khi actual answers đã đầy đủ, chạy adapter:"
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
              "md": "```bash\npython evaluate_answers.py\n```"
            },
            {
              "t": "p",
              "html": "Terminal in bảng Exercise 3.2, aggregate report và ba cases có Overall thấp nhất. Mở \u003Ccode\u003Eartifacts/benchmark_results.json\u003C/code\u003E, kiểm tra \u003Ccode\u003Eresults\u003C/code\u003E có đủ 20 cases và \u003Ccode\u003Esummary\u003C/code\u003E khớp báo cáo terminal. Nếu adapter báo question khác giữa artifacts, golden dataset đã đổi sau lần sinh answers; validate rồi sinh lại answers trước khi đánh giá.",
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
                "\u003Cstrong\u003E1.\u003C/strong\u003E Trong Exercise 3.2, điền bảng và aggregate report từ lần chạy vừa kiểm tra. Giữ đủ Context Recall, Context Precision, Faithfulness, Relevance, Completeness, Overall, Passed và Failure Type. Ghi ba ID có Overall thấp nhất. Dùng các cặp metrics để đề xuất hướng điều tra: recall thấp cùng completeness thấp gợi ý thiếu evidence; recall cao nhưng precision thấp gợi ý vấn đề hạng hoặc noise. Sau đó đọc trace trước khi kết luận."
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
                "\u003Cstrong\u003E1.\u003C/strong\u003E Trong Exercise 3.3, chọn \u003Cstrong\u003E3–5 dimensions\u003C/strong\u003E theo worksheet và viết rubric \u003Cstrong\u003E1–5\u003C/strong\u003E cho từng dimension. Rubric chấm yêu cầu tối thiểu hai tiêu chí; làm theo 3–5 dimensions của worksheet đáp ứng cả hai tài liệu. Mỗi mức cần mô tả hành vi quan sát được trong hỗ trợ khách hàng OrbitTech, chẳng hạn giữ đúng điều kiện chính sách hoặc xử lý thông tin riêng tư. Điền ba edge cases khó chấm và giải thích cách giảm position, verbosity, self-preference bias. Tự thiết kế tiêu chí từ corpus; không lấy độ dài câu trả lời làm bằng chứng đủ về chất lượng."
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
              "html": "Nếu benchmark báo core chưa hoàn thiện dù tests pass, kiểm tra \u003Ccode\u003Etemplate.py\u003C/code\u003E: adapter import file này, còn tests ưu tiên \u003Ccode\u003Esolution/solution.py\u003C/code\u003E. Nếu retrieval scores là \u003Ccode\u003ENone\u003C/code\u003E, kiểm tra chunks trong actual artifact và đường truyền qua Runner. Bạn có thể chạy lại evaluation trên actual answers đã lưu sau khi sửa core; việc đó giữ đầu vào câu trả lời ổn định để đối chiếu thay đổi.",
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
              "html": "\u003Cstrong\u003EHoàn thành CP4:\u003C/strong\u003E hai artifacts có dữ liệu đủ 20 QA, Exercise 3.2 có năm metrics cùng ba cases thấp nhất, Exercise 3.3 có rubric và bias controls. Theo rubric chính thức, \u003Cstrong\u003Ebenchmark score không quyết định điểm Lab\u003C/strong\u003E. Điểm được chấm dựa trên pipeline, dataset, evidence và phân tích. Giữ kết quả thực tế để dùng cho reflection, kể cả khi nhiều câu trả lời có điểm thấp.",
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
        "id": "codelab-b7e8003823124c879d40660d2faf9a24-s07-doc",
        "type": "text",
        "title": "Viết failure analysis và chiến lược regression — CP5",
        "duration_min": null,
        "ai_prompts": [],
        "status": "todo",
        "body": {
          "reading_label": null,
          "blocks": [
            {
              "t": "p",
              "html": "Mở \u003Ccode\u003Ereflection.md\u003C/code\u003E cùng hai artifacts và \u003Ccode\u003Egolden_dataset.json\u003C/code\u003E. Bắt đầu từ ba cases thấp nhất đã ghi trong Exercise 3.2. Bạn cần giải thích bằng evidence điều gì xảy ra, đề xuất cách xử lý và nêu phép đo sẽ dùng để kiểm tra. Đầu ra của pha là báo cáo mà người review có thể truy từ kết luận về đúng câu hỏi, answer và chunks.",
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
              "html": "\u003Cstrong\u003EFailure taxonomy\u003C/strong\u003E nhóm theo loại lỗi như \u003Ccode\u003Ehallucination\u003C/code\u003E, \u003Ccode\u003Eirrelevant\u003C/code\u003E, \u003Ccode\u003Eincomplete\u003C/code\u003E, \u003Ccode\u003Eoff_topic\u003C/code\u003E. \u003Cstrong\u003EFailure clustering\u003C/strong\u003E đi xa hơn: nhóm những cases có chung nguyên nhân có thể xử lý. Hai cases cùng metric thấp chưa chắc cùng nguyên nhân; bạn cần so sánh trace. Kỹ thuật \u003Cstrong\u003E5 Whys\u003C/strong\u003E giúp nối triệu chứng với nguyên nhân, nhưng mỗi mắt xích cần evidence hoặc được ghi rõ là giả thuyết cần kiểm tra.",
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
              "html": "Gợi ý của \u003Ccode\u003Efind_root_cause()\u003C/code\u003E dựa trên scores, nên cần đối chiếu với chính sách và retrieved chunks. Trong adapter hiện tại, mỗi phần tử \u003Ccode\u003Eresults\u003C/code\u003E không có trường \u003Ccode\u003Eroot_cause\u003C/code\u003E. Bạn có thể gọi lại Analyzer trên các câu trả lời đã lưu để lấy output đúng case mà không phát sinh lần gọi API mới.",
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
                "\u003Cstrong\u003E1.\u003C/strong\u003E Điền phần Benchmark Results Summary: pass rate, average/min/max, phân bố failure types và nhận định dùng ít nhất hai metrics. Lấy số liệu từ artifacts của cùng lần chạy. Bảng reflection có hàng \u003Ccode\u003Erefusal\u003C/code\u003E, nhưng \u003Ccode\u003Erun_full_eval()\u003C/code\u003E không tự sinh nhãn này. Ghi số liệu của core theo thực tế; nếu thấy hành vi từ chối qua đọc answer, mô tả riêng và nêu evidence thay vì tự đổi nhãn đã đo."
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
                "\u003Cstrong\u003E1.\u003C/strong\u003E Với từng case trong phần Top 3 Worst Failures, điền ID, question, expected answer, actual answer, scores và kiểm tra evidence. Đối chiếu gold evidence với chunks: đoạn cần thiết có được retrieve, điều kiện có bị bỏ sót, câu trả lời có thêm claim ngoài nguồn hay không. Sau khi tự viết symptom và thử chuỗi 5 Whys, lấy gợi ý của Analyzer để so sánh. Nếu cần, mở Python REPL bằng \u003Ccode\u003Epython\u003C/code\u003E từ thư mục gốc rồi dùng đoạn dưới để in gợi ý cho ba cases thấp nhất:"
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
              "md": "```python\nfrom evaluate_answers import load_evaluation_inputs\nfrom template import BenchmarkRunner, RAGASEvaluator, FailureAnalyzer\npairs, answers = load_evaluation_inputs(\n    \"golden_dataset.json\", \"artifacts/actual_answers.json\"\n)\nresults = BenchmarkRunner().run(pairs, answers.__getitem__, RAGASEvaluator())\nanalyzer = FailureAnalyzer()\nfor result in sorted(results, key=lambda item: item.overall_score())[:3]:\n    print(result.qa_pair.metadata[\"id\"], analyzer.find_root_cause(result))\n\n```"
            },
            {
              "t": "p",
              "html": "Sau dòng \u003Ccode\u003Eprint\u003C/code\u003E, nhấn Enter thêm một lần để gửi dòng trống và thực thi vòng lặp trong REPL. Output sẽ phụ thuộc implementation và dữ liệu của bạn. Sao chép đúng gợi ý theo ID vào reflection, rồi giải thích bạn đồng ý hay chưa đồng ý bằng trace. Nếu một case thấp điểm vẫn có \u003Ccode\u003Epassed=True\u003C/code\u003E, ghi đúng trạng thái đó và phân tích hạn chế quan sát được; không sửa số liệu để biến nó thành failure. Nếu toàn benchmark có dưới ba failures, ghi rõ số lượng thực tế và hỏi coach cách nghiệm thu yêu cầu ba failure analyses; giữ nguyên rubric và kết quả đã đo.",
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
                "\u003Cstrong\u003E1.\u003C/strong\u003E Hoàn thành Failure Clustering và Improvement Log. Trường \u003Ccode\u003Efailure_analysis.improvement_log\u003C/code\u003E trong benchmark artifact chứa bảng do hàm của bạn tạo. Đưa bảng vào reflection và đối chiếu mỗi hàng với case thực tế; nếu dùng mã \u003Ccode\u003EF001\u003C/code\u003E theo mẫu bảng, ghi rõ QA ID tương ứng khi phân tích. Chọn ba hành động ưu tiên, nêu target metric và cách đo lại. Ưu tiên xử lý một nguyên nhân chung khi trace cho thấy nó ảnh hưởng nhiều cases."
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
                "\u003Cstrong\u003E1.\u003C/strong\u003E Viết Regression Testing Strategy và các phần reflection còn lại. Nêu khi nào chạy \u003Ccode\u003Erun_regression()\u003C/code\u003E, bộ dữ liệu dùng so sánh, metric chặn triển khai và metric chỉ cảnh báo. Giữ contract giảm hơn \u003Ccode\u003E0.05\u003C/code\u003E trong code; bạn có thể thảo luận mức phù hợp của ngưỡng này trong báo cáo. Đề xuất 2–3 cases cho vòng benchmark tiếp theo trong reflection, đồng thời giữ dataset nộp hiện tại đúng 20 slots để đáp ứng validator."
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
              "html": "\u003Cstrong\u003EHoàn thành CP5:\u003C/strong\u003E ba phân tích truy được về ID và evidence, 5 Whys phân biệt quan sát với giả thuyết, improvement log có cách kiểm chứng, regression strategy nêu điều kiện chạy và xử lý kết quả. Theo \u003Ccode\u003ERULES.md\u003C/code\u003E, bạn được dùng AI hỗ trợ giải thích và debug nhưng phải tự viết phần phân tích, hiểu code và giải thích được bài khi coach review.",
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
              "html": "Sau phần bắt buộc, bạn có thể làm Exercise 3.4 (\u003Cstrong\u003E+5\u003C/strong\u003E) để so sánh hai frameworks trên cùng input, hoặc Exercise 3.5 (\u003Cstrong\u003E+5\u003C/strong\u003E) để đo reranking trên ít nhất năm cases với cùng tập chunks. Ghi phương pháp và kết quả trong worksheet. Tổng bonus tối đa \u003Cstrong\u003E+10\u003C/strong\u003E, chỉ xét khi phần bắt buộc hoàn thành; quy chế giới hạn tổng điểm nằm trong \u003Ccode\u003ERULES.md\u003C/code\u003E.",
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
        "id": "codelab-b7e8003823124c879d40660d2faf9a24-s08-doc",
        "type": "text",
        "title": "Kiểm tra và nộp repository cá nhân",
        "duration_min": null,
        "ai_prompts": [],
        "status": "todo",
        "body": {
          "reading_label": null,
          "blocks": [
            {
              "t": "p",
              "html": "Bạn nộp \u003Cstrong\u003Elink repository GitHub cá nhân lên Codelab\u003C/strong\u003E theo thông báo của giảng viên hoặc coach. Trước khi gửi link, kiểm tra bài trên chính repository sẽ nộp để người chấm mở được code và báo cáo.",
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
                "\u003Cstrong\u003E1.\u003C/strong\u003E Kiểm tra thư mục gốc theo mẫu \u003Ccode\u003EK4-L3B-HoVaTen-MSSV\u003C/code\u003E và repository GitHub theo mẫu \u003Ccode\u003EK4-L3B-&lt;HoVaTen&gt;-&lt;MSSV&gt;-AIEvaluation\u003C/code\u003E. Thay thông tin bằng họ tên, MSSV thật của bạn. Giữ các file starter cần chạy lại bài; bốn deliverables bắt buộc là:"
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
              "md": "```text\nK4-L3B-HoVaTen-MSSV/\n├── solution/solution.py\n├── golden_dataset.json\n├── exercises.md\n└── reflection.md\n```"
            },
            {
              "t": "ul",
              "html": null,
              "items": [
                "\u003Cstrong\u003E1.\u003C/strong\u003E Đồng bộ code theo CP1 và chạy kiểm tra cuối từ thư mục gốc. Mốc phần bắt buộc là \u003Cstrong\u003E41 passed, 1 skipped\u003C/strong\u003E và validator \u003Cstrong\u003EPASS\u003C/strong\u003E; nếu hoàn thiện bonus reranking đúng, suite đạt \u003Cstrong\u003E42 passed\u003C/strong\u003E."
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
              "md": "```bash\npytest tests/ -v\npython validate_golden_dataset.py\ngit status\ngit diff --check\ngit diff\n```"
            },
            {
              "t": "ul",
              "html": null,
              "items": [
                "\u003Cstrong\u003E1.\u003C/strong\u003E Kiểm tra thay đổi rồi commit, push theo workflow Git của lớp. Không đưa \u003Ccode\u003E.env\u003C/code\u003E, API key hoặc dữ liệu nhạy cảm lên GitHub. Hai artifacts là file nộp tùy chọn, nhưng Exercises 3.2 và reflection phải dựa trên kết quả chạy thật. Không sửa tests để đạt checkpoint."
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
                "\u003Cstrong\u003E1.\u003C/strong\u003E Mở lại repository trên GitHub, kiểm tra bốn deliverables đã cập nhật. Để Public hoặc cấp quyền cho giảng viên/coach theo yêu cầu, rồi tự nộp link lên Codelab. Hạn mặc định là \u003Cstrong\u003E12h trưa ngày hôm sau lab (GMT+7)\u003C/strong\u003E."
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
              "html": "Rubric chính thức phân bổ điểm như sau:",
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
              "md": "| Tiêu chí | Điểm |\n| --- | --- |\n| Core coding + required tests pass | 50 |\n| Golden dataset 20 QA | 15 |\n| LLM-as-a-Judge rubric design | 10 |\n| Benchmark, 5 Whys, failure analysis | 15 |\n| Code quality, type hints, regression strategy | 10 |\n| **Total** | **100** |"
            },
            {
              "t": "p",
              "html": "Sai tên repository bị trừ \u003Cstrong\u003E5 điểm\u003C/strong\u003E; commit secret bị trừ \u003Cstrong\u003E10 điểm\u003C/strong\u003E. Không giải thích được phần bài làm sẽ bị hủy điểm phần đó; đạo văn khiến cả hai bên nhận \u003Cstrong\u003E0 điểm toàn bài\u003C/strong\u003E.",
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
              "html": "\u003Cstrong\u003EHoàn thành:\u003C/strong\u003E link đã được nộp, người chấm truy cập được repo và kiểm tra lại được các deliverables cùng bằng chứng của bạn.",
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
        "id": "codelab-b7e8003823124c879d40660d2faf9a24-submit",
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
          "deadline_at": "2026-10-01T16:59:00+00:00"
        }
      }
    ]
  },
  "progress": {
    "done": 0,
    "total": 14,
    "percent": 0,
    "current_part_id": "day-slides-material_mu0w5tjs_b4es3u"
  },
  "kc_quiz": {
    "release_id": "d8f045d6-2814-429c-87d6-0b8c28d94e0a",
    "course_id": "K4P1",
    "day_code": "day14",
    "revision_no": 1,
    "published_at": "2026-09-18T16:23:47.028703+00:00",
    "groups": [
      {
        "group_id": "day14-g-foundations",
        "name": "Thiết kế evaluation và kiến trúc đo lường",
        "leaf_kc_ids": [
          "kc-eval-hypothesis-experiment",
          "kc-eval-mode-trigger-selection",
          "kc-failure-mode-to-metric",
          "kc-task-completion-scoring",
          "kc-answer-quality-dimensions",
          "kc-eval-metric-role-architecture"
        ]
      },
      {
        "group_id": "day14-g-answer-metrics",
        "name": "Metric deterministic và semantic cho answer",
        "leaf_kc_ids": [
          "kc-exact-match-normalization-limit",
          "kc-token-f1-overlap-limit",
          "kc-bleu-interpretation",
          "kc-rouge-interpretation",
          "kc-wer-edit-distance",
          "kc-cosine-similarity-contradiction"
        ]
      },
      {
        "group_id": "day14-g-rag",
        "name": "Evaluation RAG và ranking retrieval",
        "leaf_kc_ids": [
          "kc-ragas-answer-relevance",
          "kc-retrieval-map"
        ]
      },
      {
        "group_id": "day14-g-dataset",
        "name": "Taxonomy từ trace và dữ liệu benchmark",
        "leaf_kc_ids": [
          "kc-trace-sampling-strategy",
          "kc-trace-open-coding-observation",
          "kc-axial-root-cause-coding",
          "kc-taxonomy-operational-definition",
          "kc-taxonomy-saturation-rare-search",
          "kc-taxonomy-agreement-kappa",
          "kc-golden-dataset-record-design",
          "kc-eval-slice-stratification",
          "kc-counterfactual-fairness-slice-evaluation",
          "kc-benchmark-version-contamination",
          "kc-synthetic-eval-case-generation",
          "kc-synthetic-eval-case-filtering"
        ]
      },
      {
        "group_id": "day14-g-agent",
        "name": "Evaluation agent, tool và session",
        "leaf_kc_ids": [
          "kc-outcome-trajectory-eval-boundary",
          "kc-agent-final-state-verifier",
          "kc-agent-step-efficiency",
          "kc-agent-redundant-tool-calls",
          "kc-agent-loop-deadlock-control",
          "kc-tool-selection-evaluation",
          "kc-tool-payload-evaluation",
          "kc-missing-information-clarification-eval",
          "kc-stochastic-agent-reliability",
          "kc-multiturn-constraint-decay-eval",
          "kc-dialog-state-tracking-evaluator",
          "kc-session-resolution-abandonment-eval"
        ]
      },
      {
        "group_id": "day14-g-judge",
        "name": "Thiết kế và calibration LLM judge",
        "leaf_kc_ids": [
          "kc-judge-prompt-contract",
          "kc-judge-verdict-scale-selection",
          "kc-judge-reference-mode-selection",
          "kc-pairwise-ranking-aggregation",
          "kc-judge-verdict-order",
          "kc-judge-position-swap",
          "kc-judge-verbosity-format-bias",
          "kc-judge-self-preference-bias",
          "kc-judge-human-calibration",
          "kc-judge-relative-delta-validity",
          "kc-judge-panel-correlation"
        ]
      },
      {
        "group_id": "day14-g-stats",
        "name": "So sánh thống kê và nondeterminism",
        "leaf_kc_ids": [
          "kc-eval-confidence-interval",
          "kc-eval-sample-size-power",
          "kc-paired-eval-comparison-design",
          "kc-mcnemar-discordant-pair-test",
          "kc-statistical-practical-release-decision"
        ]
      },
      {
        "group_id": "day14-g-production",
        "name": "Vận hành evaluation và release control",
        "leaf_kc_ids": [
          "kc-eval-framework-selection",
          "kc-production-quality-latency-cost",
          "kc-production-ttft-tps",
          "kc-eval-cost-allocation",
          "kc-regression-release-gate",
          "kc-shadow-semantic-diff-validation"
        ]
      },
      {
        "group_id": "day14-g-improvement",
        "name": "Cải tiến failure dựa evidence",
        "leaf_kc_ids": [
          "kc-eval-failure-five-whys",
          "kc-regression-case-promotion-loop"
        ]
      }
    ],
    "knowledge_components": [
      {
        "kc_id": "kc-agent-final-state-verifier",
        "group_id": "day14-g-agent",
        "name": "Xây deterministic final-state verifier",
        "knowledge": "Khi success quan sát được trong database, file, environment hoặc structured record, phải verify state trực tiếp thay vì tin confirmation text của agent. Benchmark so cả scaffold agent-plus-tools dưới cùng environment contract.",
        "remediation_target": "Luyện case confirmation text và environment state thực tế không khớp.",
        "is_core": true
      },
      {
        "kc_id": "kc-agent-loop-deadlock-control",
        "group_id": "day14-g-agent",
        "name": "Phát hiện và giới hạn loop/deadlock",
        "knowledge": "Chu kỳ state-action thất bại lặp lại đốt token/tool budget. Cần detect cycle không đổi, enforce step/cost limit và test recovery/clarification.",
        "remediation_target": "Luyện bounded retry, identical failure và clarification exit.",
        "is_core": true
      },
      {
        "kc_id": "kc-agent-redundant-tool-calls",
        "group_id": "day14-g-agent",
        "name": "Phát hiện redundant tool call",
        "knowledge": "Redundant call lặp action và payload không có state change/evidence mới. Phải kiểm tra state, payload và retry policy trước khi gán lãng phí.",
        "remediation_target": "Luyện call lặp có và không có state change.",
        "is_core": true
      },
      {
        "kc_id": "kc-agent-step-efficiency",
        "group_id": "day14-g-agent",
        "name": "Đo trajectory step efficiency",
        "knowledge": "Step efficiency so minimum valid action với observed action nhưng vẫn giữ dependency; nó phát hiện lãng phí mà không thưởng unsafe shortcut.",
        "remediation_target": "Luyện optional, required và recovery step.",
        "is_core": true
      },
      {
        "kc_id": "kc-answer-quality-dimensions",
        "group_id": "day14-g-foundations",
        "name": "Tách correctness, relevance, completeness và coherence",
        "knowledge": "Answer có thể đúng nhưng thiếu, grounded nhưng lệch intent, hoặc từng câu hợp lý nhưng không coherent trong session; mỗi dimension cần evidence và remediation riêng.",
        "remediation_target": "Luyện cặp answer chỉ fail đúng một dimension.",
        "is_core": true
      },
      {
        "kc_id": "kc-axial-root-cause-coding",
        "group_id": "day14-g-dataset",
        "name": "Gom failure theo root cause có thể sửa",
        "knowledge": "Axial coding gom observation theo shared cause có thể sửa, không chỉ symptom hoặc metric name; quyết định merge/split phải dẫn đến cùng next fix.",
        "remediation_target": "Luyện gom cùng failure theo symptom rồi theo cause.",
        "is_core": true
      },
      {
        "kc_id": "kc-benchmark-version-contamination",
        "group_id": "day14-g-dataset",
        "name": "Version benchmark và kiểm soát contamination",
        "knowledge": "Benchmark cần case identity bất biến, provenance, split policy và change history. Public exposure và tuning lặp lại tạo contamination; held-out/living set giữ evidence.",
        "remediation_target": "Luyện review thay đổi benchmark vừa giữ history vừa thêm coverage.",
        "is_core": true
      },
      {
        "kc_id": "kc-bleu-interpretation",
        "group_id": "day14-g-answer-metrics",
        "name": "Diễn giải BLEU và brevity penalty",
        "knowledge": "BLEU tổng hợp modified n-gram precision với brevity penalty; nó có thể thưởng lexical overlap dù sự thật bị đảo ngược.",
        "remediation_target": "Luyện candidate ngắn, dài, paraphrase và phủ định.",
        "is_core": true
      },
      {
        "kc_id": "kc-cosine-similarity-contradiction",
        "group_id": "day14-g-answer-metrics",
        "name": "Dùng cosine similarity mà không nhận contradiction",
        "knowledge": "Cosine similarity nhận paraphrase nhưng topical proximity không phải entailment; claim đối lập hoặc phủ định vẫn có thể gần nhau trong vector space.",
        "remediation_target": "Luyện cặp dùng chung từ nhưng đảo điều kiện đúng sai.",
        "is_core": true
      },
      {
        "kc_id": "kc-counterfactual-fairness-slice-evaluation",
        "group_id": "day14-g-dataset",
        "name": "Đánh giá fairness bằng counterfactual slice có kiểm soát",
        "knowledge": "Fairness probe giữ nguyên task và fact liên quan, chỉ đổi một sensitive hoặc access-related attribute được nêu rõ, rồi so outcome/quality giữa các matched case và slice. Gap là evidence để điều tra, chưa tự chứng minh cause hay discrimination.",
        "remediation_target": "Luyện cặp theo gender, dialect, language, age và accessibility nhưng giữ nguyên task fact.",
        "is_core": true
      },
      {
        "kc_id": "kc-dialog-state-tracking-evaluator",
        "group_id": "day14-g-agent",
        "name": "Đánh giá dialog state tracking theo target state",
        "knowledge": "Dialog State Tracking extract goal, slot, constraint và status có cấu trúc qua các turn. Evaluation so recovered state và final status với target được định nghĩa, không lấy average answer quality theo turn.",
        "remediation_target": "Luyện slot carry-over, correction, slot chưa giải quyết và terminal-state error.",
        "is_core": true
      },
      {
        "kc_id": "kc-eval-confidence-interval",
        "group_id": "day14-g-stats",
        "name": "Report confidence interval kèm sample context",
        "knowledge": "Sample hữu hạn có uncertainty. Interval method phải khớp statistic/design và report phải kèm n, population/slice, repeated-run policy, assumption.",
        "remediation_target": "Luyện small-sample và interval overlap.",
        "is_core": true
      },
      {
        "kc_id": "kc-eval-cost-allocation",
        "group_id": "day14-g-production",
        "name": "Lập budget evaluation cost mà không mất coverage",
        "knowledge": "Cost gồm generation, retrieval, judge, repeated trial, human review, latency và engineering. Deterministic-first, risk-tiered sampling, cache, batch, async và escalation chỉ hợp lệ khi giữ detection coverage đã công bố.",
        "remediation_target": "Luyện cost model chỉ rõ detection được giữ và bị mất.",
        "is_core": true
      },
      {
        "kc_id": "kc-eval-failure-five-whys",
        "group_id": "day14-g-improvement",
        "name": "Phân loại failure và chạy Five Whys dựa evidence",
        "knowledge": "Failure label thu hẹp điều tra nhưng không chứng minh cause. Five Whys phải đi theo question, gold, output, retrieved chunk, tool trace, config đến stage sửa được và mỗi why đều có evidence.",
        "remediation_target": "Luyện why chain có false lead có chủ đích.",
        "is_core": true
      },
      {
        "kc_id": "kc-eval-framework-selection",
        "group_id": "day14-g-production",
        "name": "Chọn evaluation framework theo workflow constraint",
        "knowledge": "RAG metric library, LLM test kiểu pytest và trace-feedback platform phục vụ workflow khác nhau. Cần so semantics, fit online/offline, effort, reproducibility, cost và exit path.",
        "remediation_target": "Luyện decision matrix cho một benchmark workflow thật.",
        "is_core": true
      },
      {
        "kc_id": "kc-eval-hypothesis-experiment",
        "group_id": "day14-g-foundations",
        "name": "Đặt evaluation thành thí nghiệm có thể bác bỏ",
        "knowledge": "Quality claim chỉ kiểm chứng được khi nêu hypothesis có thể bác bỏ, population case so sánh được, thay đổi được kiểm soát, protocol lặp lại được, measure và giới hạn của kết luận.",
        "remediation_target": "Luyện chuyển product claim thành evaluation contract đầy đủ.",
        "is_core": true
      },
      {
        "kc_id": "kc-eval-metric-role-architecture",
        "group_id": "day14-g-foundations",
        "name": "Phân vai north-star, guardrail và diagnostic",
        "knowledge": "North-star đại diện core value, guardrail không được regress, diagnostic dùng định vị cause. Tối ưu diagnostic như target dễ gây Goodhart.",
        "remediation_target": "Luyện rút gọn metric list và gán mỗi metric một decision role.",
        "is_core": true
      },
      {
        "kc_id": "kc-eval-mode-trigger-selection",
        "group_id": "day14-g-foundations",
        "name": "Chọn mode, cadence và trigger evaluation",
        "knowledge": "Offline, online, inline và human evaluation khác nhau về evidence source, response time, risk, scale và cost; trigger phải khớp decision.",
        "remediation_target": "Luyện ghép failure cost và response time với evaluation mode.",
        "is_core": true
      },
      {
        "kc_id": "kc-eval-sample-size-power",
        "group_id": "day14-g-stats",
        "name": "Tính cỡ evaluation theo power và slice",
        "knowledge": "Case count phụ thuộc baseline, detectable effect, variance, significance, power, pairing và critical slice nhỏ nhất; total lớn vẫn có thể để mọi slice underpowered.",
        "remediation_target": "Luyện sizing theo release-critical slice nhỏ nhất.",
        "is_core": true
      },
      {
        "kc_id": "kc-eval-slice-stratification",
        "group_id": "day14-g-dataset",
        "name": "Thiết kế risk slice và coverage phân tầng",
        "knowledge": "Dataset cần slice rõ theo task, difficulty, cohort, policy và adversarial risk. Production weighting ước lượng prevalence; stress slice oversample phải report riêng hoặc reweight.",
        "remediation_target": "Luyện prevalence view và stress-test view từ một ledger.",
        "is_core": true
      },
      {
        "kc_id": "kc-exact-match-normalization-limit",
        "group_id": "day14-g-answer-metrics",
        "name": "Chỉ dùng exact match cho output có dạng chuẩn",
        "knowledge": "Exact match là phép kiểm tra equality deterministic sau bước normalize được nêu rõ. Nó hợp với label, ID và answer có format chặt, nhưng loại cả paraphrase tương đương về nghĩa.",
        "remediation_target": "Luyện label, identifier, biến thể format và paraphrase hợp lệ.",
        "is_core": true
      },
      {
        "kc_id": "kc-failure-mode-to-metric",
        "group_id": "day14-g-foundations",
        "name": "Suy ra metric từ failure mode",
        "knowledge": "Metric design phải đi từ failure cụ thể, sang câu hỏi trả lời được, rồi đến phép đo rẻ nhất đủ dùng và blind spot rõ ràng.",
        "remediation_target": "Luyện suy ra check độc lập từ failed trace thật.",
        "is_core": true
      },
      {
        "kc_id": "kc-golden-dataset-record-design",
        "group_id": "day14-g-dataset",
        "name": "Viết golden record grounded bằng evidence",
        "knowledge": "Golden record nối question thực tế với expert expected behavior, exact evidence, stable source ID, metadata difficulty/risk và case ID bền; mọi claim phải được support.",
        "remediation_target": "Luyện audit evidence theo từng claim.",
        "is_core": true
      },
      {
        "kc_id": "kc-judge-human-calibration",
        "group_id": "day14-g-judge",
        "name": "Calibrate judge theo case do human gán nhãn",
        "knowledge": "Coi judge là noisy classifier và so với adjudicated human set. Report TPR, TNR, error pattern và uncertainty theo class/slice; raw agreement có thể che failure ở minority class.",
        "remediation_target": "Luyện calibration set mất cân bằng và error riêng theo slice.",
        "is_core": true
      },
      {
        "kc_id": "kc-judge-panel-correlation",
        "group_id": "day14-g-judge",
        "name": "Thiết kế judge panel mà không giả định error độc lập",
        "knowledge": "Majority vote chỉ giảm variance khi error giữa judge đủ độc lập. Shared training, prompt, reference hoặc blind spot tạo correlated bias, nên diversity và calibration từng judge quan trọng hơn chỉ tăng judge count.",
        "remediation_target": "Luyện panel có judge độc lập, correlated và cùng bias.",
        "is_core": true
      },
      {
        "kc_id": "kc-judge-position-swap",
        "group_id": "day14-g-judge",
        "name": "Đo position bias bằng swap testing",
        "knowledge": "Pairwise judge có thể ưu tiên order bất kể content. Chạy cả hai order, đo flip và định nghĩa cách xử lý inconsistent tie.",
        "remediation_target": "Luyện tie và reversal có chủ đích.",
        "is_core": true
      },
      {
        "kc_id": "kc-judge-prompt-contract",
        "group_id": "day14-g-judge",
        "name": "Viết judge prompt có kiểm soát",
        "knowledge": "Judge prompt cần role, question/context/answer có delimiter, một criterion, evidence visibility, output schema và abstention behavior.",
        "remediation_target": "Luyện judge output nghiêm ngặt cho một criterion.",
        "is_core": true
      },
      {
        "kc_id": "kc-judge-reference-mode-selection",
        "group_id": "day14-g-judge",
        "name": "Chọn reference và mode pointwise/pairwise",
        "knowledge": "Reference-based judging dùng trusted gold; reference-free dựa rubric/context. Pointwise label tuyệt đối dễ drift; pairwise dễ so hơn nhưng có order bias và không chứng minh absolute quality.",
        "remediation_target": "Luyện task nhiều gold, thiếu gold và comparison.",
        "is_core": true
      },
      {
        "kc_id": "kc-judge-relative-delta-validity",
        "group_id": "day14-g-judge",
        "name": "Chỉ dùng judge delta đã calibrate khi các điều kiện bất biến",
        "knowledge": "Judge có noise có thể báo absolute failure rate cao hơn thực tế. So hai version có thể triệt stable false-positive intercept và giữ hướng thay đổi, nhưng chỉ khi judge, prompt, test set và output-format distribution liên quan không đổi; độ lớn quan sát vẫn có thể bị co theo Youden J của judge.",
        "remediation_target": "Luyện case judge prompt, format và test population được giữ ổn định hoặc bị đổi.",
        "is_core": true
      },
      {
        "kc_id": "kc-judge-self-preference-bias",
        "group_id": "day14-g-judge",
        "name": "Phát hiện và giảm self-preference của judge",
        "knowledge": "Judge có thể ưu ái answer có model family hoặc linguistic style giống chính nó. Cần control khác family và human label held-out để tách answer quality khỏi evaluator affinity.",
        "remediation_target": "Luyện answer cùng quality nhưng sinh từ same-family và cross-family model.",
        "is_core": true
      },
      {
        "kc_id": "kc-judge-verbosity-format-bias",
        "group_id": "day14-g-judge",
        "name": "Kiểm soát verbosity và formatting bias",
        "knowledge": "Judge có thể nhầm length, format đẹp hoặc style quen với correctness. Matched-content probe, normalization, criterion isolation và few-shot anchor giúp giảm bias.",
        "remediation_target": "Luyện controlled pair chỉ khác style.",
        "is_core": true
      },
      {
        "kc_id": "kc-judge-verdict-order",
        "group_id": "day14-g-judge",
        "name": "Phân tích evidence trước khi xuất verdict",
        "knowledge": "Score xuất trước có thể anchor phần biện minh sau. Ghi finding evidence ngắn trước final verdict parse được; không yêu cầu hoặc lưu private chain-of-thought.",
        "remediation_target": "Luyện finding evidence ngắn rồi mới final verdict.",
        "is_core": true
      },
      {
        "kc_id": "kc-judge-verdict-scale-selection",
        "group_id": "day14-g-judge",
        "name": "Chọn verdict scale của judge khớp với decision",
        "knowledge": "Sau khi criterion đã được operationalize, decision phía sau quyết định số mức verdict. Dùng binary verdict cho gate rời rạc; chỉ dùng level ordinal có anchor khi partial quality làm thay đổi action. Rubric nhiều criterion cần aggregation và critical-failure cap rõ để average không che defect phải block.",
        "remediation_target": "Luyện chọn binary hay ordinal scoring rồi test xem các level liền kề có làm đổi decision thật không.",
        "is_core": true
      },
      {
        "kc_id": "kc-mcnemar-discordant-pair-test",
        "group_id": "day14-g-stats",
        "name": "Kiểm định binary outcome theo các pair bất đồng",
        "knowledge": "Với outcome pass/fail theo pair, chỉ pair old-pass/new-fail và old-fail/new-pass cho biết hướng thay đổi. McNemar hoặc exact binomial dùng các discordant count này; concordant pair không đi vào test statistic.",
        "remediation_target": "Luyện bảng discordant cân bằng, lệch và có quá ít discordant case.",
        "is_core": true
      },
      {
        "kc_id": "kc-missing-information-clarification-eval",
        "group_id": "day14-g-agent",
        "name": "Đánh giá behavior hỏi lại khi input thiếu hoặc mơ hồ",
        "knowledge": "Với action có quyền ghi, parameter bị thiếu, mơ hồ hoặc user đưa nhưng không hợp lệ là các benchmark case riêng. Behavior cần đo là clarify, verify hoặc abstain theo yêu cầu, không đoán value chỉ vì nó pass schema.",
        "remediation_target": "Luyện thiếu identifier, reference mơ hồ, ownership không hợp lệ và safe refusal.",
        "is_core": true
      },
      {
        "kc_id": "kc-multiturn-constraint-decay-eval",
        "group_id": "day14-g-agent",
        "name": "Đánh giá việc giữ constraint trên toàn session",
        "knowledge": "Session có thể fail dù từng turn nhìn riêng đều hợp lý. Cần đánh giá constraint ở đầu còn được giữ sau các turn trung gian, correction và tool payload hay không, đồng thời dùng delayed probe để lộ context decay.",
        "remediation_target": "Luyện constraint bị trì hoãn, correction và turn đúng cục bộ nhưng sai toàn session.",
        "is_core": true
      },
      {
        "kc_id": "kc-outcome-trajectory-eval-boundary",
        "group_id": "day14-g-agent",
        "name": "Định nghĩa riêng outcome oracle và permissible-trajectory oracle",
        "knowledge": "Outcome evaluation check final environment state; trajectory evaluation check tool choice, argument, order, retry, loop và efficiency. Evaluator phải cho phép nhiều path hợp lệ trừ khi safety/process constraint khiến một thuộc tính path thành bắt buộc.",
        "remediation_target": "Luyện trace hợp lệ thay thế bằng rubric độc lập.",
        "is_core": true
      },
      {
        "kc_id": "kc-paired-eval-comparison-design",
        "group_id": "day14-g-stats",
        "name": "Thiết kế comparison evaluation theo pair và repeated run",
        "knowledge": "Hai version phải chạy trên cùng case để độ khó từng case bị triệt trong per-case difference. Hệ nondeterministic còn cần policy repeated-run hoặc seed rõ ràng; một lần chạy may mắn không phải version comparison.",
        "remediation_target": "Luyện case set lệch nhau, pair bị thiếu và repeated run có noise.",
        "is_core": true
      },
      {
        "kc_id": "kc-pairwise-ranking-aggregation",
        "group_id": "day14-g-judge",
        "name": "Tổng hợp pairwise judgment bằng Bradley-Terry hoặc Elo",
        "knowledge": "Win, loss và tie theo cặp chỉ là comparison cục bộ. Bradley-Terry ước lượng latent strength từ comparison graph, còn Elo cập nhật rating tuần tự từ outcome kỳ vọng và quan sát; cả hai không sửa được match bị bias hoặc sample kém.",
        "remediation_target": "Luyện comparison graph thưa, tie, sequential update và match schedule bị bias.",
        "is_core": true
      },
      {
        "kc_id": "kc-production-quality-latency-cost",
        "group_id": "day14-g-production",
        "name": "Chọn operating point quality-latency-cost",
        "knowledge": "Thiết kế production trade accuracy, latency và cost. Phải nêu service constraint/guardrail thay vì giấu hy sinh trong một composite score.",
        "remediation_target": "Luyện so theo constraint và Pareto.",
        "is_core": true
      },
      {
        "kc_id": "kc-production-ttft-tps",
        "group_id": "day14-g-production",
        "name": "Tách TTFT khỏi TPS",
        "knowledge": "TTFT đo thời gian đến token stream đầu, gồm network, retrieval, prefill, initial reasoning; TPS đo throughput sau khi generation bắt đầu. Không metric nào tự là total task latency.",
        "remediation_target": "Luyện trace mà TTFT, TPS và total latency khác hướng.",
        "is_core": true
      },
      {
        "kc_id": "kc-ragas-answer-relevance",
        "group_id": "day14-g-rag",
        "name": "Audit evaluator answer relevance dùng reverse-question",
        "knowledge": "Evaluator relevance kiểu reverse-question sinh các câu hỏi mà answer có thể trả lời rồi so với câu hỏi gốc. Score có thể fail vì answer lệch intent hoặc vì reverse question/embedding bị lỗi; hai nguyên nhân cần cách sửa khác nhau.",
        "remediation_target": "Luyện riêng answer lệch intent và reverse-question trace bị lỗi.",
        "is_core": true
      },
      {
        "kc_id": "kc-regression-case-promotion-loop",
        "group_id": "day14-g-improvement",
        "name": "Đưa confirmed failure thành regression case có version",
        "knowledge": "Sau khi root cause và systemic fix được verify, failure đại diện trở thành case lâu dài có evidence trong regression set có version. Khi promote phải giữ provenance, expected behavior, slice và defect mà case cần ngăn tái diễn.",
        "remediation_target": "Luyện promote case đại diện nhưng vẫn giữ một neighboring check độc lập.",
        "is_core": true
      },
      {
        "kc_id": "kc-regression-release-gate",
        "group_id": "day14-g-production",
        "name": "Định nghĩa regression release gate có version",
        "knowledge": "Release gate so candidate với baseline được pin trên cùng protocol có version. Nó kết hợp north-star delta, guardrail không được regress, critical slice, uncertainty và constraint quality-cost-latency; aggregate win không được che một slice bị block.",
        "remediation_target": "Luyện aggregate win che regression trong release-critical slice.",
        "is_core": true
      },
      {
        "kc_id": "kc-retrieval-map",
        "group_id": "day14-g-rag",
        "name": "Tính MAP cho binary ranked relevance",
        "knowledge": "Average Precision lấy trung bình precision tại rank có relevant item; MAP lấy trung bình AP qua query và thưởng việc đưa mọi binary-relevant item lên sớm.",
        "remediation_target": "Luyện AP với nhiều relevant item và item bị miss.",
        "is_core": true
      },
      {
        "kc_id": "kc-rouge-interpretation",
        "group_id": "day14-g-answer-metrics",
        "name": "Diễn giải overlap thiên recall của ROUGE",
        "knowledge": "ROUGE-N và ROUGE-L nhấn vào lượng reference content được bắt lại. Recall cao vẫn có thể giữ gần hết từ nhưng đảo một mệnh đề critical.",
        "remediation_target": "Luyện so reference coverage với meaning thực tế.",
        "is_core": true
      },
      {
        "kc_id": "kc-session-resolution-abandonment-eval",
        "group_id": "day14-g-agent",
        "name": "Tách task resolution khỏi session abandonment",
        "knowledge": "Task resolution hỏi target end state có đạt hay không, có thể kèm điều kiện không handoff sang human. Abandonment ghi user kết thúc session; nó không tự động chứng minh dissatisfaction hoặc agent failure nếu thiếu evidence hỗ trợ.",
        "remediation_target": "Luyện user exit do thành công, frustration, interruption và human handoff.",
        "is_core": true
      },
      {
        "kc_id": "kc-shadow-semantic-diff-validation",
        "group_id": "day14-g-production",
        "name": "Validate behavior an toàn bằng shadow traffic và semantic diff",
        "knowledge": "Shadow evaluation mirror cùng production request sang baseline và candidate mà không đưa candidate output cho user. Semantic difference là review signal, không tự động là regression; rollout an toàn cần pairing, attribution, guardrail, staged exposure và rollback rule.",
        "remediation_target": "Luyện behavior change hợp lệ, regression thật, judge drift và case phải rollback ngay.",
        "is_core": true
      },
      {
        "kc_id": "kc-statistical-practical-release-decision",
        "group_id": "day14-g-stats",
        "name": "Tách statistical evidence khỏi giá trị release thực tế",
        "knowledge": "P-value nhỏ nói về mức tương thích với giả thuyết không đổi dưới assumption của test; nó không chứng minh effect hữu ích, slice an toàn, cost hay risk chấp nhận được. Quyết định release cần effect size và hậu quả vận hành.",
        "remediation_target": "Luyện change statistically significant nhưng trivial và change chưa chắc chắn nhưng risk cao.",
        "is_core": true
      },
      {
        "kc_id": "kc-stochastic-agent-reliability",
        "group_id": "day14-g-agent",
        "name": "Đo stochastic reliability bằng repeated run",
        "knowledge": "Pass rate ước lượng success mỗi run; pass@k hỏi có ít nhất một success, pass^k hỏi mọi attempt đều success. Statistic phải khớp yêu cầu retry và consistency.",
        "remediation_target": "Luyện contract được retry và phải luôn thành công.",
        "is_core": true
      },
      {
        "kc_id": "kc-synthetic-eval-case-filtering",
        "group_id": "day14-g-dataset",
        "name": "Lọc và adjudicate synthetic evaluation case bằng bước độc lập",
        "knowledge": "Candidate được sinh chỉ là silver data cho đến khi bước filter độc lập loại case unsupported, unanswerable, duplicate, trivial, malformed hoặc lệch distribution và ghi rejection reason. Human review vẫn cần cho gold subset đáng tin.",
        "remediation_target": "Luyện batch có candidate unsupported, trivial, duplicate và lệch distribution.",
        "is_core": true
      },
      {
        "kc_id": "kc-synthetic-eval-case-generation",
        "group_id": "day14-g-dataset",
        "name": "Sinh synthetic evaluation case từ gap trong taxonomy",
        "knowledge": "Synthetic generation dùng để mở rộng coverage gap đã nêu sau khi đã có taxonomy. Concept lấy từ source chunk, question được sinh hoặc mutate có chủ đích cho target cell, và expected answer phải giữ source provenance.",
        "remediation_target": "Luyện generation grid làm lộ cell trống thay vì sinh nhiều case dễ bị trùng.",
        "is_core": true
      },
      {
        "kc_id": "kc-task-completion-scoring",
        "group_id": "day14-g-foundations",
        "name": "Chọn cách chấm task completion dạng binary, partial hoặc weighted",
        "knowledge": "Task completion nói về state đạt được, không phải response đã kết thúc. Binary success, partial step credit và trọng số critical step trả lời các câu hỏi completion khác nhau; chất lượng path được đánh giá riêng.",
        "remediation_target": "Luyện chấm cùng workflow bằng nhiều completion contract.",
        "is_core": true
      },
      {
        "kc_id": "kc-taxonomy-agreement-kappa",
        "group_id": "day14-g-dataset",
        "name": "Dùng agreement statistic để test độ rõ label",
        "knowledge": "Cohen's kappa điều chỉnh agreement của hai rater theo chance và prevalence. Agreement test consistency của definition, không test semantic correctness.",
        "remediation_target": "Luyện matrix label mất cân bằng.",
        "is_core": true
      },
      {
        "kc_id": "kc-taxonomy-operational-definition",
        "group_id": "day14-g-dataset",
        "name": "Viết taxonomy category thành check quan sát được",
        "knowledge": "Category hữu ích phải hẹp để reviewer khác áp được pass/fail check và có inclusion, exclusion, counterexample, tie-break rule.",
        "remediation_target": "Luyện boundary example đến khi reviewer gán label nhất quán.",
        "is_core": true
      },
      {
        "kc_id": "kc-taxonomy-saturation-rare-search",
        "group_id": "day14-g-dataset",
        "name": "Dùng saturation mà không che rare failure",
        "knowledge": "Không có common category mới trong nhiều trace liên tiếp là evidence saturation nhưng không chứng minh rare failure vắng mặt; rare risk tác động cao cần directed/adversarial search.",
        "remediation_target": "Luyện stopping rule riêng cho common và rare coverage.",
        "is_core": true
      },
      {
        "kc_id": "kc-token-f1-overlap-limit",
        "group_id": "day14-g-answer-metrics",
        "name": "Tính token F1 mà không coi overlap là meaning",
        "knowledge": "Token F1 dùng token-level precision, recall và harmonic mean. Nó cho partial credit theo overlap, nhưng tokenization, paraphrase và phủ định có thể làm score lệch khỏi semantic correctness.",
        "remediation_target": "Luyện case tokenization, paraphrase, thừa token, thiếu token và phủ định.",
        "is_core": true
      },
      {
        "kc_id": "kc-tool-payload-evaluation",
        "group_id": "day14-g-agent",
        "name": "Đánh giá tool payload theo schema và task evidence",
        "knowledge": "Chọn đúng tool không làm payload đúng. Evaluator phải check required field, type, structural constraint và mỗi value có được request/state support hay không; syntax hợp lệ chưa chứng minh semantic correctness.",
        "remediation_target": "Luyện wrong type, thiếu field, invalid enum và identifier có vẻ hợp lý nhưng không có evidence.",
        "is_core": true
      },
      {
        "kc_id": "kc-tool-selection-evaluation",
        "group_id": "day14-g-agent",
        "name": "Đánh giá tool selection",
        "knowledge": "Tool selection check action cần, thừa và bị cấm. Precision/recall làm rõ false-positive call so với missed call, độc lập với payload validity.",
        "remediation_target": "Luyện missed, unnecessary, prohibited và correct call.",
        "is_core": true
      },
      {
        "kc_id": "kc-trace-open-coding-observation",
        "group_id": "day14-g-dataset",
        "name": "Open-code observation từ trace trước khi gán cause",
        "knowledge": "Open coding ghi một observation cụ thể có link evidence cho mỗi trace trước khi mở taxonomy cố định hoặc suy cause. Ghi downstream symptom thành primary failure riêng có thể làm lệch cluster count sau đó.",
        "remediation_target": "Luyện tách defect sớm nhất khỏi downstream symptom trong một trace.",
        "is_core": true
      },
      {
        "kc_id": "kc-trace-sampling-strategy",
        "group_id": "day14-g-dataset",
        "name": "Sample trace mà không lọc mất failure chưa biết",
        "knowledge": "Discovery bottom-up trộn random traffic với đại diện cluster, outlier, automated flag và negative feedback. Phần random được giữ lại là thành phần duy nhất không bị lọc qua thứ hệ thống đã biết cách detect.",
        "remediation_target": "Luyện batch mà biased sampling che một failure chưa biết nhưng tần suất cao.",
        "is_core": true
      },
      {
        "kc_id": "kc-wer-edit-distance",
        "group_id": "day14-g-answer-metrics",
        "name": "Tính và giới hạn word error rate",
        "knowledge": "WER lấy substitution, deletion và insertion chia cho reference length; thấp hơn tốt hơn và score có thể vượt một. Nó mù với semantic rewording hợp lệ.",
        "remediation_target": "Luyện alignment thủ công trước khi diễn giải aggregate.",
        "is_core": true
      }
    ],
    "questions": [
      {
        "servable": true,
        "role": "initial_check",
        "hints": [
          {
            "text": "Hỏi điều gì phải được giữ giống nhau để một khác biệt có thể quy cho version.",
            "hint_id": "h1",
            "after_attempt": 1
          }
        ],
        "module_id": "day14-g-foundations",
        "max_points": 1,
        "interaction": {
          "type": "single_select",
          "prompt": "Bối cảnh:\nTeam nói: ‘Agent v2 tốt hơn v1’ sau khi xem năm demo khác nhau.\n\nCâu hỏi:\nThiết kế nào biến nhận định đó thành giả thuyết có thể bác bỏ?",
          "choices": [
            {
              "text": "Same population/protocol; metric và rule đặt trước",
              "choice_id": "a"
            },
            {
              "text": "Chọn năm câu v2 trả lời đẹp nhất rồi so với ký ức về v1",
              "choice_id": "b"
            },
            {
              "text": "Đổi đồng thời model, prompt và dataset rồi lấy score cao nhất",
              "choice_id": "c"
            },
            {
              "text": "Dùng một leaderboard công khai làm kết luận cho mọi user",
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
        "question_id": "d14-q001",
        "primary_kc_id": "kc-eval-hypothesis-experiment",
        "grading_method": "deterministic",
        "question_version": 1,
        "cognitive_operation": "Evaluate",
        "contributing_kc_ids": [],
        "estimated_difficulty": "medium"
      },
      {
        "servable": false,
        "role": "reassessment",
        "hints": [
          {
            "text": "Biến “tốt hơn” thành delta và điều kiện reject rõ ràng.",
            "hint_id": "h1",
            "after_attempt": 1
          }
        ],
        "module_id": "day14-g-foundations",
        "max_points": 4,
        "interaction": {
          "type": "short_text",
          "prompt": "Bối cảnh:\nV2 dùng prompt mới trên cùng model. Team có 300 case thực, gồm ba risk slice, và muốn biết task success có tăng mà safety không giảm.\n\nCâu hỏi:\nViết hypothesis, controlled protocol và acceptance rule có thể bác bỏ.",
          "prompt_presentation": {
            "format": "sectioned_plain_text",
            "preserve_line_breaks": true
          }
        },
        "question_id": "d14-q002",
        "primary_kc_id": "kc-eval-hypothesis-experiment",
        "grading_method": "criterion_rubric",
        "question_version": 1,
        "cognitive_operation": "Evaluate",
        "contributing_kc_ids": [],
        "estimated_difficulty": "hard"
      },
      {
        "servable": true,
        "role": "initial_check",
        "hints": [
          {
            "text": "Mode phải khớp latency quyết định, risk và cost.",
            "hint_id": "h1",
            "after_attempt": 1
          }
        ],
        "module_id": "day14-g-foundations",
        "max_points": 4,
        "interaction": {
          "left": [
            {
              "id": "x1",
              "text": "Regression trước merge"
            },
            {
              "id": "x2",
              "text": "Theo dõi drift trên traffic thật"
            },
            {
              "id": "x3",
              "text": "Chặn PII trước response"
            },
            {
              "id": "x4",
              "text": "Calibrate case judge bất đồng"
            }
          ],
          "type": "matching",
          "right": [
            {
              "id": "r1",
              "text": "Offline suite"
            },
            {
              "id": "r2",
              "text": "Online sampled eval"
            },
            {
              "id": "r3",
              "text": "Inline deterministic check"
            },
            {
              "id": "r4",
              "text": "Human review"
            }
          ],
          "prompt": "Bối cảnh:\nBốn rủi ro cần evidence ở thời điểm khác nhau.\n\nCâu hỏi:\nGhép rủi ro với mode phù hợp nhất.",
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
        "question_id": "d14-q003",
        "primary_kc_id": "kc-eval-mode-trigger-selection",
        "grading_method": "deterministic",
        "question_version": 1,
        "cognitive_operation": "Apply",
        "contributing_kc_ids": [],
        "estimated_difficulty": "medium"
      },
      {
        "servable": false,
        "role": "reassessment",
        "hints": [
          {
            "text": "Mỗi mode cần nói khi chạy và action gì theo sau.",
            "hint_id": "h1",
            "after_attempt": 1
          }
        ],
        "module_id": "day14-g-foundations",
        "max_points": 4,
        "interaction": {
          "type": "short_text",
          "prompt": "Bối cảnh:\nMột medical assistant cần regression check khi đổi prompt, chặn PII tức thời, theo dõi drift production và calibrate judge bất đồng.\n\nCâu hỏi:\nPhân vai mode, trigger, sampling và action cho bốn nhu cầu.",
          "prompt_presentation": {
            "format": "sectioned_plain_text",
            "preserve_line_breaks": true
          }
        },
        "question_id": "d14-q004",
        "primary_kc_id": "kc-eval-mode-trigger-selection",
        "grading_method": "criterion_rubric",
        "question_version": 1,
        "cognitive_operation": "Create",
        "contributing_kc_ids": [],
        "estimated_difficulty": "hard"
      },
      {
        "servable": true,
        "role": "initial_check",
        "hints": [
          {
            "text": "Đừng chọn metric trước khi biết failure nào cần phân biệt.",
            "hint_id": "h1",
            "after_attempt": 1
          }
        ],
        "module_id": "day14-g-foundations",
        "max_points": 1,
        "interaction": {
          "type": "ordering",
          "prompt": "Bối cảnh:\nMột trace cho thấy agent trả policy cũ sau khi corpus vừa cập nhật.\n\nCâu hỏi:\nSắp chuỗi thiết kế metric theo evidence.",
          "options": [
            {
              "text": "Ghi failure cụ thể và population",
              "option_id": "o1"
            },
            {
              "text": "Đặt câu hỏi evaluation cần trả lời",
              "option_id": "o2"
            },
            {
              "text": "Chọn phép đo rẻ nhất đủ phân biệt",
              "option_id": "o3"
            },
            {
              "text": "Nêu blind spot và evidence xác nhận",
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
        "question_id": "d14-q005",
        "primary_kc_id": "kc-failure-mode-to-metric",
        "grading_method": "deterministic",
        "question_version": 1,
        "cognitive_operation": "Analyze",
        "contributing_kc_ids": [],
        "estimated_difficulty": "medium"
      },
      {
        "servable": false,
        "role": "reassessment",
        "hints": [
          {
            "text": "Bắt đầu từ failure cụ thể chứ không từ metric có sẵn.",
            "hint_id": "h1",
            "after_attempt": 1
          }
        ],
        "module_id": "day14-g-foundations",
        "max_points": 4,
        "interaction": {
          "type": "short_text",
          "prompt": "Bối cảnh:\nAgent trả đúng policy nhưng mất 18 giây do lặp tool; HTTP vẫn 200.\n\nCâu hỏi:\nThiết kế failure→question→measure và nêu blind spot.",
          "prompt_presentation": {
            "format": "sectioned_plain_text",
            "preserve_line_breaks": true
          }
        },
        "question_id": "d14-q006",
        "primary_kc_id": "kc-failure-mode-to-metric",
        "grading_method": "criterion_rubric",
        "question_version": 1,
        "cognitive_operation": "Analyze",
        "contributing_kc_ids": [],
        "estimated_difficulty": "hard"
      },
      {
        "servable": true,
        "role": "initial_check",
        "hints": [
          {
            "text": "Phân biệt agent nói đã xong với environment thực sự đạt state nào.",
            "hint_id": "h1",
            "after_attempt": 1
          }
        ],
        "module_id": "day14-g-foundations",
        "max_points": 1,
        "interaction": {
          "type": "single_select",
          "prompt": "Bối cảnh:\nWorkflow đặt vé có success state là row `reservation=confirmed`. Agent tìm chuyến và thanh toán thử nhưng DB không có row; agent vẫn nhắn ‘đã đặt xong’.\n\nCâu hỏi:\nCách chấm completion nào đúng?",
          "choices": [
            {
              "text": "Binary fail; partial chỉ ghi bước đã verify",
              "choice_id": "a"
            },
            {
              "text": "Binary pass vì agent đã gửi confirmation text",
              "choice_id": "b"
            },
            {
              "text": "Weighted pass 100% vì thanh toán là bước khó",
              "choice_id": "c"
            },
            {
              "text": "Trajectory đẹp nên thay được final-state verifier",
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
        "question_id": "d14-q007",
        "primary_kc_id": "kc-task-completion-scoring",
        "grading_method": "deterministic",
        "question_version": 1,
        "cognitive_operation": "Apply",
        "contributing_kc_ids": [],
        "estimated_difficulty": "medium"
      },
      {
        "servable": false,
        "role": "reassessment",
        "hints": [
          {
            "text": "Critical state phải được giữ riêng khỏi số điểm cộng dồn.",
            "hint_id": "h1",
            "after_attempt": 1
          }
        ],
        "module_id": "day14-g-foundations",
        "max_points": 4,
        "interaction": {
          "type": "short_text",
          "prompt": "Bối cảnh:\nWorkflow gồm xác minh danh tính 20%, tạo refund 60% là critical, gửi email 20%. Trace chỉ xác minh và gửi email; refund state không tồn tại.\n\nCâu hỏi:\nSo binary, partial và weighted completion; nêu score nào được dùng cho gate.",
          "prompt_presentation": {
            "format": "sectioned_plain_text",
            "preserve_line_breaks": true
          }
        },
        "question_id": "d14-q008",
        "primary_kc_id": "kc-task-completion-scoring",
        "grading_method": "criterion_rubric",
        "question_version": 1,
        "cognitive_operation": "Apply",
        "contributing_kc_ids": [],
        "estimated_difficulty": "hard"
      },
      {
        "servable": true,
        "role": "initial_check",
        "hints": [
          {
            "text": "Một answer có thể fail một dimension nhưng vẫn đạt dimension khác.",
            "hint_id": "h1",
            "after_attempt": 1
          }
        ],
        "module_id": "day14-g-foundations",
        "max_points": 4,
        "interaction": {
          "left": [
            {
              "id": "x1",
              "text": "Nêu sai ngày hiệu lực"
            },
            {
              "id": "x2",
              "text": "Đúng fact nhưng không trả intent user"
            },
            {
              "id": "x3",
              "text": "Thiếu ngoại lệ quan trọng"
            },
            {
              "id": "x4",
              "text": "Các turn tự mâu thuẫn nhau"
            }
          ],
          "type": "matching",
          "right": [
            {
              "id": "r1",
              "text": "Correctness"
            },
            {
              "id": "r2",
              "text": "Relevance"
            },
            {
              "id": "r3",
              "text": "Completeness"
            },
            {
              "id": "r4",
              "text": "Coherence"
            }
          ],
          "prompt": "Bối cảnh:\nBốn answer fail theo bốn cách khác nhau.\n\nCâu hỏi:\nGhép failure với dimension chính.",
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
        "question_id": "d14-q009",
        "primary_kc_id": "kc-answer-quality-dimensions",
        "grading_method": "deterministic",
        "question_version": 1,
        "cognitive_operation": "Analyze",
        "contributing_kc_ids": [],
        "estimated_difficulty": "easy"
      },
      {
        "servable": true,
        "role": "initial_check",
        "hints": [
          {
            "text": "Hỏi metric dùng để tối ưu, chặn hay chỉ debug.",
            "hint_id": "h1",
            "after_attempt": 1
          }
        ],
        "module_id": "day14-g-foundations",
        "max_points": 3,
        "interaction": {
          "left": [
            {
              "id": "x1",
              "text": "Tỷ lệ case giải quyết đúng"
            },
            {
              "id": "x2",
              "text": "PII leak rate"
            },
            {
              "id": "x3",
              "text": "Retrieval empty-result rate"
            }
          ],
          "type": "matching",
          "right": [
            {
              "id": "r1",
              "text": "North-star để optimize"
            },
            {
              "id": "r2",
              "text": "Guardrail có thể block"
            },
            {
              "id": "r3",
              "text": "Diagnostic để điều tra"
            }
          ],
          "prompt": "Bối cảnh:\nProduct tối ưu trợ lý hoàn tiền.\n\nCâu hỏi:\nGhép metric với vai trò quyết định.",
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
        "question_id": "d14-q010",
        "primary_kc_id": "kc-eval-metric-role-architecture",
        "grading_method": "deterministic",
        "question_version": 1,
        "cognitive_operation": "Analyze",
        "contributing_kc_ids": [],
        "estimated_difficulty": "medium"
      },
      {
        "servable": false,
        "role": "reassessment",
        "hints": [
          {
            "text": "Đừng cộng ba metric thành một average xóa mất vai trò.",
            "hint_id": "h1",
            "after_attempt": 1
          }
        ],
        "module_id": "day14-g-foundations",
        "max_points": 4,
        "interaction": {
          "type": "short_text",
          "prompt": "Bối cảnh:\nNorth-star task success tăng 3 điểm; PII leak guardrail có block threshold là 0% nhưng candidate tăng từ 0 lên 0,2%; retrieval empty giảm.\n\nCâu hỏi:\nĐưa ra release decision và vai trò từng metric.",
          "prompt_presentation": {
            "format": "sectioned_plain_text",
            "preserve_line_breaks": true
          }
        },
        "question_id": "d14-q011",
        "primary_kc_id": "kc-eval-metric-role-architecture",
        "grading_method": "criterion_rubric",
        "question_version": 1,
        "cognitive_operation": "Evaluate",
        "contributing_kc_ids": [],
        "estimated_difficulty": "medium"
      },
      {
        "servable": true,
        "role": "initial_check",
        "hints": [
          {
            "text": "Exact match chỉ phù hợp khi có một representation chuẩn sau normalize.",
            "hint_id": "h1",
            "after_attempt": 1
          }
        ],
        "module_id": "day14-g-answer-metrics",
        "max_points": 1,
        "interaction": {
          "type": "single_select",
          "prompt": "Bối cảnh:\nTarget output là một trong ba label chuẩn `APPROVE`, `REVIEW`, `REJECT`; contract cho phép trim whitespace và uppercase.\n\nCâu hỏi:\nMetric nào hợp lệ nhất?",
          "choices": [
            {
              "text": "Exact match sau normalization",
              "choice_id": "a"
            },
            {
              "text": "BLEU trên phần giải thích tự do",
              "choice_id": "b"
            },
            {
              "text": "Cosine similarity giữa label",
              "choice_id": "c"
            },
            {
              "text": "LLM judge không rubric",
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
        "question_id": "d14-q012",
        "primary_kc_id": "kc-exact-match-normalization-limit",
        "grading_method": "deterministic",
        "question_version": 1,
        "cognitive_operation": "Apply",
        "contributing_kc_ids": [],
        "estimated_difficulty": "easy"
      },
      {
        "servable": true,
        "role": "follow_up",
        "hints": [
          {
            "text": "Task này yêu cầu equality chuỗi hay equivalence về nghĩa?",
            "hint_id": "h1",
            "after_attempt": 1
          }
        ],
        "module_id": "day14-g-answer-metrics",
        "max_points": 1,
        "interaction": {
          "type": "single_select",
          "prompt": "Bối cảnh:\nReference là `Hà Nội là thủ đô Việt Nam`; candidate là `Thủ đô của Việt Nam là Hà Nội`.\n\nCâu hỏi:\nExact match bằng 0 có chứng minh candidate sai nghĩa không?",
          "choices": [
            {
              "text": "Không; open answer không có canonical string",
              "choice_id": "a"
            },
            {
              "text": "Có; khác chuỗi luôn là sai",
              "choice_id": "b"
            },
            {
              "text": "Có nếu candidate dài hơn",
              "choice_id": "c"
            },
            {
              "text": "Không vì exact match luôn vô dụng",
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
        "question_id": "d14-q013",
        "primary_kc_id": "kc-exact-match-normalization-limit",
        "grading_method": "deterministic",
        "question_version": 1,
        "cognitive_operation": "Analyze",
        "contributing_kc_ids": [],
        "estimated_difficulty": "easy"
      },
      {
        "servable": true,
        "role": "initial_check",
        "hints": [
          {
            "text": "Tính precision và recall trước khi lấy harmonic mean.",
            "hint_id": "h1",
            "after_attempt": 1
          }
        ],
        "module_id": "day14-g-answer-metrics",
        "max_points": 1,
        "interaction": {
          "type": "numeric_input",
          "prompt": "Bối cảnh:\nToken hóa theo whitespace. Reference: `mèo ngồi trên thảm`. Candidate: `mèo nằm trên thảm`. Multiset overlap có 3 token; candidate và reference đều có 4 token.\n\nCâu hỏi:\nTính token F1.",
          "required_unit": "",
          "prompt_presentation": {
            "format": "sectioned_plain_text",
            "preserve_line_breaks": true
          }
        },
        "question_id": "d14-q014",
        "primary_kc_id": "kc-token-f1-overlap-limit",
        "grading_method": "deterministic",
        "question_version": 1,
        "cognitive_operation": "Apply",
        "contributing_kc_ids": [],
        "estimated_difficulty": "medium"
      },
      {
        "servable": false,
        "role": "reassessment",
        "hints": [
          {
            "text": "Mẫu số precision và recall khác nhau.",
            "hint_id": "h1",
            "after_attempt": 1
          }
        ],
        "module_id": "day14-g-answer-metrics",
        "max_points": 4,
        "interaction": {
          "type": "short_text",
          "prompt": "Bối cảnh:\nToken multiset reference có 5 token, candidate có 4 token, overlap là 3 token.\n\nCâu hỏi:\nTính precision, recall và F1; nói điều F1 chưa chứng minh.",
          "prompt_presentation": {
            "format": "sectioned_plain_text",
            "preserve_line_breaks": true
          }
        },
        "question_id": "d14-q015",
        "primary_kc_id": "kc-token-f1-overlap-limit",
        "grading_method": "criterion_rubric",
        "question_version": 1,
        "cognitive_operation": "Apply",
        "contributing_kc_ids": [],
        "estimated_difficulty": "medium"
      },
      {
        "servable": true,
        "role": "initial_check",
        "hints": [
          {
            "text": "Tách điều metric đo trực tiếp khỏi điều ta muốn biết về meaning.",
            "hint_id": "h1",
            "after_attempt": 1
          }
        ],
        "module_id": "day14-g-answer-metrics",
        "max_points": 1,
        "interaction": {
          "type": "single_select",
          "prompt": "Bối cảnh:\nReference nói ‘Agent không nên hoàn tiền’; candidate bỏ từ ‘không’ nhưng giữ gần toàn bộ n-gram.\n\nCâu hỏi:\nBLEU cao trong case này support kết luận nào?",
          "choices": [
            {
              "text": "Chỉ support lexical overlap",
              "choice_id": "a"
            },
            {
              "text": "Candidate chắc chắn đúng nghĩa",
              "choice_id": "b"
            },
            {
              "text": "Brevity penalty sẽ phát hiện mọi phủ định",
              "choice_id": "c"
            },
            {
              "text": "BLEU là phép entailment claim-level",
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
        "question_id": "d14-q016",
        "primary_kc_id": "kc-bleu-interpretation",
        "grading_method": "deterministic",
        "question_version": 1,
        "cognitive_operation": "Analyze",
        "contributing_kc_ids": [],
        "estimated_difficulty": "medium"
      },
      {
        "servable": true,
        "role": "follow_up",
        "hints": [
          {
            "text": "Metric đang đo n-gram hay truth condition?",
            "hint_id": "h1",
            "after_attempt": 1
          }
        ],
        "module_id": "day14-g-answer-metrics",
        "max_points": 1,
        "interaction": {
          "type": "single_select",
          "prompt": "Bối cảnh:\nCandidate giữ gần hết n-gram nhưng thêm một phủ định làm conclusion đảo ngược.\n\nCâu hỏi:\nCó được dùng BLEU cao làm factuality gate không?",
          "choices": [
            {
              "text": "Không; cần semantic/claim-level check",
              "choice_id": "a"
            },
            {
              "text": "Có; overlap cao đủ chứng minh entailment",
              "choice_id": "b"
            },
            {
              "text": "Có nếu brevity penalty bằng 1",
              "choice_id": "c"
            },
            {
              "text": "Không vì BLEU chỉ dùng cho audio",
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
        "question_id": "d14-q017",
        "primary_kc_id": "kc-bleu-interpretation",
        "grading_method": "deterministic",
        "question_version": 1,
        "cognitive_operation": "Analyze",
        "contributing_kc_ids": [],
        "estimated_difficulty": "easy"
      },
      {
        "servable": true,
        "role": "initial_check",
        "hints": [
          {
            "text": "N là n-gram; L là longest common subsequence.",
            "hint_id": "h1",
            "after_attempt": 1
          }
        ],
        "module_id": "day14-g-answer-metrics",
        "max_points": 2,
        "interaction": {
          "left": [
            {
              "id": "x1",
              "text": "N-gram overlap"
            },
            {
              "id": "x2",
              "text": "Longest common subsequence theo thứ tự"
            }
          ],
          "type": "matching",
          "right": [
            {
              "id": "r1",
              "text": "ROUGE-N"
            },
            {
              "id": "r2",
              "text": "ROUGE-L"
            }
          ],
          "prompt": "Bối cảnh:\nCần chọn biến thể ROUGE theo loại overlap.\n\nCâu hỏi:\nGhép biến thể với evidence nó ưu tiên.",
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
        "question_id": "d14-q018",
        "primary_kc_id": "kc-rouge-interpretation",
        "grading_method": "deterministic",
        "question_version": 1,
        "cognitive_operation": "Understand",
        "contributing_kc_ids": [],
        "estimated_difficulty": "easy"
      },
      {
        "servable": true,
        "role": "initial_check",
        "hints": [
          {
            "text": "Mẫu số là số từ của reference.",
            "hint_id": "h1",
            "after_attempt": 1
          }
        ],
        "module_id": "day14-g-answer-metrics",
        "max_points": 1,
        "interaction": {
          "type": "numeric_input",
          "prompt": "Bối cảnh:\nReference có 4 từ. Alignment của candidate có 1 substitution, 0 deletion và 1 insertion.\n\nCâu hỏi:\nTính WER.",
          "required_unit": "",
          "prompt_presentation": {
            "format": "sectioned_plain_text",
            "preserve_line_breaks": true
          }
        },
        "question_id": "d14-q019",
        "primary_kc_id": "kc-wer-edit-distance",
        "grading_method": "deterministic",
        "question_version": 1,
        "cognitive_operation": "Apply",
        "contributing_kc_ids": [],
        "estimated_difficulty": "easy"
      },
      {
        "servable": true,
        "role": "follow_up",
        "hints": [
          {
            "text": "Công thức có phép clamp về 1 không?",
            "hint_id": "h1",
            "after_attempt": 1
          }
        ],
        "module_id": "day14-g-answer-metrics",
        "max_points": 1,
        "interaction": {
          "type": "single_select",
          "prompt": "Bối cảnh:\nReference có 3 từ; candidate cần 4 insertion ngoài 3 substitution.\n\nCâu hỏi:\nWER có thể lớn hơn 100% không?",
          "choices": [
            {
              "text": "Có; tử số có thể vượt N reference",
              "choice_id": "a"
            },
            {
              "text": "Không; mọi metric đều bị chặn ở 1",
              "choice_id": "b"
            },
            {
              "text": "Không nếu candidate dài hơn",
              "choice_id": "c"
            },
            {
              "text": "Chỉ khi exact match bằng 1",
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
        "question_id": "d14-q020",
        "primary_kc_id": "kc-wer-edit-distance",
        "grading_method": "deterministic",
        "question_version": 1,
        "cognitive_operation": "Understand",
        "contributing_kc_ids": [],
        "estimated_difficulty": "easy"
      },
      {
        "servable": true,
        "role": "initial_check",
        "hints": [
          {
            "text": "Cùng vùng vector không đồng nghĩa cùng truth condition.",
            "hint_id": "h1",
            "after_attempt": 1
          }
        ],
        "module_id": "day14-g-answer-metrics",
        "max_points": 1,
        "interaction": {
          "type": "single_select",
          "prompt": "Bối cảnh:\nHai câu cùng nói về refund và cosine similarity là 0,94, nhưng một câu có phủ định làm policy đảo nghĩa.\n\nCâu hỏi:\nBước đánh giá tiếp theo hợp lý nhất?",
          "choices": [
            {
              "text": "Thêm claim-level entailment/contradiction check",
              "choice_id": "a"
            },
            {
              "text": "Kết luận paraphrase vì cosine \u003E0,9",
              "choice_id": "b"
            },
            {
              "text": "Tăng threshold cosine lên đúng 0,95 rồi coi là truth",
              "choice_id": "c"
            },
            {
              "text": "Dùng token count thay semantic check",
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
        "question_id": "d14-q021",
        "primary_kc_id": "kc-cosine-similarity-contradiction",
        "grading_method": "deterministic",
        "question_version": 1,
        "cognitive_operation": "Analyze",
        "contributing_kc_ids": [],
        "estimated_difficulty": "medium"
      },
      {
        "servable": false,
        "role": "reassessment",
        "hints": [
          {
            "text": "Similarity là screening signal, không phải truth oracle.",
            "hint_id": "h1",
            "after_attempt": 1
          }
        ],
        "module_id": "day14-g-answer-metrics",
        "max_points": 4,
        "interaction": {
          "type": "short_text",
          "prompt": "Bối cảnh:\nCandidate A paraphrase đúng reference; candidate B giữ cùng topic nhưng đảo nghĩa bằng phủ định. Cả hai cosine \u003E0,9.\n\nCâu hỏi:\nThiết kế decision path không đồng nhất similarity với truth.",
          "prompt_presentation": {
            "format": "sectioned_plain_text",
            "preserve_line_breaks": true
          }
        },
        "question_id": "d14-q022",
        "primary_kc_id": "kc-cosine-similarity-contradiction",
        "grading_method": "criterion_rubric",
        "question_version": 1,
        "cognitive_operation": "Create",
        "contributing_kc_ids": [],
        "estimated_difficulty": "hard"
      },
      {
        "servable": true,
        "role": "initial_check",
        "hints": [
          {
            "text": "Score cuối không cho biết reverse-question generation có hỏng hay không.",
            "hint_id": "h1",
            "after_attempt": 1
          }
        ],
        "module_id": "day14-g-rag",
        "max_points": 1,
        "interaction": {
          "type": "ordering",
          "prompt": "Bối cảnh:\nEvaluator reverse-question trả relevance thấp.\n\nCâu hỏi:\nSắp audit path để tách agent error khỏi evaluator error.",
          "options": [
            {
              "text": "Giữ question gốc và answer",
              "option_id": "o1"
            },
            {
              "text": "Đọc reverse question được evaluator sinh",
              "option_id": "o2"
            },
            {
              "text": "Kiểm similarity/mapping output",
              "option_id": "o3"
            },
            {
              "text": "Quy lỗi agent hoặc evaluator theo evidence",
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
        "question_id": "d14-q023",
        "primary_kc_id": "kc-ragas-answer-relevance",
        "grading_method": "deterministic",
        "question_version": 1,
        "cognitive_operation": "Analyze",
        "contributing_kc_ids": [],
        "estimated_difficulty": "medium"
      },
      {
        "servable": false,
        "role": "reassessment",
        "hints": [
          {
            "text": "Có hai failure candidate độc lập cần tách.",
            "hint_id": "h1",
            "after_attempt": 1
          }
        ],
        "module_id": "day14-g-rag",
        "max_points": 4,
        "interaction": {
          "type": "short_text",
          "prompt": "Bối cảnh:\nQuestion hỏi thủ tục hủy. Answer nói chi tiết đổi ngày. Reverse question sinh ra lại hỏi hủy do evaluator hallucination.\n\nCâu hỏi:\nAttribution score relevance thấp thế nào?",
          "prompt_presentation": {
            "format": "sectioned_plain_text",
            "preserve_line_breaks": true
          }
        },
        "question_id": "d14-q024",
        "primary_kc_id": "kc-ragas-answer-relevance",
        "grading_method": "criterion_rubric",
        "question_version": 1,
        "cognitive_operation": "Analyze",
        "contributing_kc_ids": [],
        "estimated_difficulty": "hard"
      },
      {
        "servable": true,
        "role": "initial_check",
        "hints": [
          {
            "text": "Tính precision tại từng rank relevant, lấy AP từng query rồi mới lấy mean.",
            "hint_id": "h1",
            "after_attempt": 1
          }
        ],
        "module_id": "day14-g-rag",
        "max_points": 1,
        "interaction": {
          "type": "numeric_input",
          "prompt": "Bối cảnh:\nCó hai query, mỗi query có đúng 2 tài liệu relevant. Q1 relevant ở rank 1 và 3; Q2 relevant ở rank 2 và 3.\n\nCâu hỏi:\nTính MAP, làm tròn 3 chữ số thập phân.",
          "required_unit": "",
          "prompt_presentation": {
            "format": "sectioned_plain_text",
            "preserve_line_breaks": true
          }
        },
        "question_id": "d14-q025",
        "primary_kc_id": "kc-retrieval-map",
        "grading_method": "deterministic",
        "question_version": 1,
        "cognitive_operation": "Apply",
        "contributing_kc_ids": [],
        "estimated_difficulty": "hard"
      },
      {
        "servable": false,
        "role": "reassessment",
        "hints": [
          {
            "text": "Precision chỉ được lấy tại rank có relevant item.",
            "hint_id": "h1",
            "after_attempt": 1
          }
        ],
        "module_id": "day14-g-rag",
        "max_points": 4,
        "interaction": {
          "type": "short_text",
          "prompt": "Bối cảnh:\nQ1 có 3 relevant ở rank 1,2,5. Q2 có 2 relevant ở rank 1,4; relevance được quy ước là binary.\n\nCâu hỏi:\nTính AP từng query và MAP, làm tròn 3 chữ số; nêu relevance assumption.",
          "prompt_presentation": {
            "format": "sectioned_plain_text",
            "preserve_line_breaks": true
          }
        },
        "question_id": "d14-q026",
        "primary_kc_id": "kc-retrieval-map",
        "grading_method": "criterion_rubric",
        "question_version": 1,
        "cognitive_operation": "Apply",
        "contributing_kc_ids": [],
        "estimated_difficulty": "hard"
      },
      {
        "servable": true,
        "role": "initial_check",
        "hints": [
          {
            "text": "Thành phần nào không phụ thuộc detector hiện có?",
            "hint_id": "h1",
            "after_attempt": 1
          }
        ],
        "module_id": "day14-g-dataset",
        "max_points": 4,
        "interaction": {
          "type": "multi_select",
          "prompt": "Bối cảnh:\nMục tiêu vừa tìm failure chưa biết vừa phủ known risk.\n\nCâu hỏi:\nChọn các thành phần hợp lệ của mixed trace sample.",
          "choices": [
            {
              "text": "Random traffic giữ một tỷ lệ đã khai báo",
              "choice_id": "a"
            },
            {
              "text": "Đại diện cluster phổ biến",
              "choice_id": "b"
            },
            {
              "text": "Outlier và automated flag",
              "choice_id": "c"
            },
            {
              "text": "Negative user feedback",
              "choice_id": "d"
            },
            {
              "text": "Chỉ lấy case hệ thống đã flag",
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
        "question_id": "d14-q027",
        "primary_kc_id": "kc-trace-sampling-strategy",
        "grading_method": "deterministic",
        "question_version": 1,
        "cognitive_operation": "Analyze",
        "contributing_kc_ids": [],
        "estimated_difficulty": "medium"
      },
      {
        "servable": false,
        "role": "reassessment",
        "hints": [
          {
            "text": "Nếu bỏ random, unknown coverage bị phụ thuộc detector cũ.",
            "hint_id": "h1",
            "after_attempt": 1
          }
        ],
        "module_id": "day14-g-dataset",
        "max_points": 4,
        "interaction": {
          "type": "short_text",
          "prompt": "Bối cảnh:\nTraffic một triệu trace/ngày; detector biết timeout và negative feedback nhưng chưa biết failure mới.\n\nCâu hỏi:\nThiết kế sample 2.000 trace để vừa discovery vừa risk coverage.",
          "prompt_presentation": {
            "format": "sectioned_plain_text",
            "preserve_line_breaks": true
          }
        },
        "question_id": "d14-q028",
        "primary_kc_id": "kc-trace-sampling-strategy",
        "grading_method": "criterion_rubric",
        "question_version": 1,
        "cognitive_operation": "Create",
        "contributing_kc_ids": [],
        "estimated_difficulty": "hard"
      },
      {
        "servable": true,
        "role": "initial_check",
        "hints": [
          {
            "text": "Mô tả điều quan sát được và thứ tự, không nhảy tới nguyên nhân.",
            "hint_id": "h1",
            "after_attempt": 1
          }
        ],
        "module_id": "day14-g-dataset",
        "max_points": 1,
        "interaction": {
          "type": "single_select",
          "prompt": "Bối cảnh:\nTrace: retrieval trả empty; model sau đó đoán policy và answer bị sai.\n\nCâu hỏi:\nOpen code nào phù hợp nhất trước khi gán cause?",
          "choices": [
            {
              "text": "Retrieval trả empty trước answer unsupported",
              "choice_id": "a"
            },
            {
              "text": "Root cause chắc chắn là model yếu",
              "choice_id": "b"
            },
            {
              "text": "Category: bad answer",
              "choice_id": "c"
            },
            {
              "text": "Fix ngay bằng đổi vendor",
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
        "question_id": "d14-q029",
        "primary_kc_id": "kc-trace-open-coding-observation",
        "grading_method": "deterministic",
        "question_version": 1,
        "cognitive_operation": "Analyze",
        "contributing_kc_ids": [],
        "estimated_difficulty": "medium"
      },
      {
        "servable": true,
        "role": "initial_check",
        "hints": [
          {
            "text": "Nếu hai nhóm cần next fix khác nhau, chúng không phải một cause category.",
            "hint_id": "h1",
            "after_attempt": 1
          }
        ],
        "module_id": "day14-g-dataset",
        "max_points": 1,
        "interaction": {
          "type": "single_select",
          "prompt": "Bối cảnh:\nMười trace có symptom ‘wrong answer’: sáu trace policy mới chưa được index; bốn trace retrieved đủ nhưng prompt bỏ citation constraint.\n\nCâu hỏi:\nCách axial coding nào action-ready?",
          "choices": [
            {
              "text": "Tách cause vì remediation khác nhau",
              "choice_id": "a"
            },
            {
              "text": "Gộp tất cả thành `wrong answer`",
              "choice_id": "b"
            },
            {
              "text": "Tách theo model name dù next fix giống nhau",
              "choice_id": "c"
            },
            {
              "text": "Gộp vì cùng metric faithfulness thấp",
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
        "question_id": "d14-q030",
        "primary_kc_id": "kc-axial-root-cause-coding",
        "grading_method": "deterministic",
        "question_version": 1,
        "cognitive_operation": "Analyze",
        "contributing_kc_ids": [],
        "estimated_difficulty": "medium"
      },
      {
        "servable": false,
        "role": "reassessment",
        "hints": [
          {
            "text": "Không gom chỉ vì metric hay symptom giống nhau.",
            "hint_id": "h1",
            "after_attempt": 1
          }
        ],
        "module_id": "day14-g-dataset",
        "max_points": 4,
        "interaction": {
          "type": "short_text",
          "prompt": "Bối cảnh:\nOpen codes gồm empty retrieval, stale chunk, unsupported answer và wrong citation trên 30 trace.\n\nCâu hỏi:\nTạo axial categories theo cause và bảo vệ merge/split.",
          "prompt_presentation": {
            "format": "sectioned_plain_text",
            "preserve_line_breaks": true
          }
        },
        "question_id": "d14-q031",
        "primary_kc_id": "kc-axial-root-cause-coding",
        "grading_method": "criterion_rubric",
        "question_version": 1,
        "cognitive_operation": "Analyze",
        "contributing_kc_ids": [],
        "estimated_difficulty": "hard"
      },
      {
        "servable": true,
        "role": "initial_check",
        "hints": [
          {
            "text": "Reviewer khác phải áp được cùng check mà không đoán ý tác giả.",
            "hint_id": "h1",
            "after_attempt": 1
          }
        ],
        "module_id": "day14-g-dataset",
        "max_points": 1,
        "interaction": {
          "type": "single_select",
          "prompt": "Bối cảnh:\nCategory hiện là `answer tệ` và hai reviewer áp rất khác nhau.\n\nCâu hỏi:\nĐịnh nghĩa nào kiểm tra được nhất?",
          "choices": [
            {
              "text": "Unsupported factual claim; loại case chỉ khác style",
              "choice_id": "a"
            },
            {
              "text": "FAIL nếu reviewer cảm thấy chưa hay",
              "choice_id": "b"
            },
            {
              "text": "FAIL nếu answer ngắn",
              "choice_id": "c"
            },
            {
              "text": "FAIL nếu score tổng dưới ngưỡng chưa rõ nguồn",
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
        "question_id": "d14-q032",
        "primary_kc_id": "kc-taxonomy-operational-definition",
        "grading_method": "deterministic",
        "question_version": 1,
        "cognitive_operation": "Evaluate",
        "contributing_kc_ids": [],
        "estimated_difficulty": "medium"
      },
      {
        "servable": false,
        "role": "reassessment",
        "hints": [
          {
            "text": "Định nghĩa phải dẫn reviewer tới cùng decision.",
            "hint_id": "h1",
            "after_attempt": 1
          }
        ],
        "module_id": "day14-g-dataset",
        "max_points": 4,
        "interaction": {
          "type": "short_text",
          "prompt": "Bối cảnh:\nLabel `tool failure` đang lẫn wrong tool, wrong payload và provider timeout.\n\nCâu hỏi:\nViết operational definitions và xử lý trace có hai lỗi.",
          "prompt_presentation": {
            "format": "sectioned_plain_text",
            "preserve_line_breaks": true
          }
        },
        "question_id": "d14-q033",
        "primary_kc_id": "kc-taxonomy-operational-definition",
        "grading_method": "criterion_rubric",
        "question_version": 1,
        "cognitive_operation": "Create",
        "contributing_kc_ids": [],
        "estimated_difficulty": "hard"
      },
      {
        "servable": true,
        "role": "initial_check",
        "hints": [
          {
            "text": "Tách câu hỏi ‘common theme còn mới không’ khỏi ‘rare high-impact risk đã được thử chưa’.",
            "hint_id": "h1",
            "after_attempt": 1
          }
        ],
        "module_id": "day14-g-dataset",
        "max_points": 1,
        "interaction": {
          "type": "single_select",
          "prompt": "Bối cảnh:\nSau 80 trace liên tiếp không xuất hiện common category mới; risk PII leak hiếm nhưng impact cao chưa có case.\n\nCâu hỏi:\nKết luận và hành động nào đúng?",
          "choices": [
            {
              "text": "Saturation common; vẫn search PII risk",
              "choice_id": "a"
            },
            {
              "text": "Dừng toàn bộ sampling vì không còn failure nào",
              "choice_id": "b"
            },
            {
              "text": "PII leak chắc chắn không tồn tại",
              "choice_id": "c"
            },
            {
              "text": "Chỉ tăng random sample, bỏ adversarial search",
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
        "question_id": "d14-q034",
        "primary_kc_id": "kc-taxonomy-saturation-rare-search",
        "grading_method": "deterministic",
        "question_version": 1,
        "cognitive_operation": "Evaluate",
        "contributing_kc_ids": [],
        "estimated_difficulty": "medium"
      },
      {
        "servable": false,
        "role": "reassessment",
        "hints": [
          {
            "text": "Saturation luôn đi kèm scope của sampling.",
            "hint_id": "h1",
            "after_attempt": 1
          }
        ],
        "module_id": "day14-g-dataset",
        "max_points": 4,
        "interaction": {
          "type": "short_text",
          "prompt": "Bối cảnh:\nSau ba batch không có common code mới, nhưng safety slice chỉ có hai trace và chưa có adversarial case.\n\nCâu hỏi:\nQuyết định tiếp tục/dừng sampling thế nào.",
          "prompt_presentation": {
            "format": "sectioned_plain_text",
            "preserve_line_breaks": true
          }
        },
        "question_id": "d14-q035",
        "primary_kc_id": "kc-taxonomy-saturation-rare-search",
        "grading_method": "criterion_rubric",
        "question_version": 1,
        "cognitive_operation": "Evaluate",
        "contributing_kc_ids": [],
        "estimated_difficulty": "hard"
      },
      {
        "servable": true,
        "role": "follow_up",
        "hints": [
          {
            "text": "Saturation được quan sát trên sampling population nào?",
            "hint_id": "h1",
            "after_attempt": 1
          }
        ],
        "module_id": "day14-g-dataset",
        "max_points": 1,
        "interaction": {
          "type": "single_select",
          "prompt": "Bối cảnh:\nCommon categories đã saturation nhưng chưa từng chạy adversarial PII probes.\n\nCâu hỏi:\nCó được kết luận PII risk đã phủ không?",
          "choices": [
            {
              "text": "Không; cần directed/adversarial search riêng",
              "choice_id": "a"
            },
            {
              "text": "Có; saturation chứng minh mọi rare failure vắng mặt",
              "choice_id": "b"
            },
            {
              "text": "Có nếu random sample lớn hơn 50",
              "choice_id": "c"
            },
            {
              "text": "Không cần vì rare risk không ảnh hưởng taxonomy",
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
        "question_id": "d14-q036",
        "primary_kc_id": "kc-taxonomy-saturation-rare-search",
        "grading_method": "deterministic",
        "question_version": 1,
        "cognitive_operation": "Evaluate",
        "contributing_kc_ids": [],
        "estimated_difficulty": "easy"
      },
      {
        "servable": true,
        "role": "initial_check",
        "hints": [
          {
            "text": "Trừ chance agreement ở tử và chia cho dư địa còn lại.",
            "hint_id": "h1",
            "after_attempt": 1
          }
        ],
        "module_id": "day14-g-dataset",
        "max_points": 1,
        "interaction": {
          "type": "numeric_input",
          "prompt": "Bối cảnh:\nHai reviewer có observed agreement p_o=0,80 và expected-by-chance agreement p_e=0,50.\n\nCâu hỏi:\nTính Cohen's kappa.",
          "required_unit": "",
          "prompt_presentation": {
            "format": "sectioned_plain_text",
            "preserve_line_breaks": true
          }
        },
        "question_id": "d14-q037",
        "primary_kc_id": "kc-taxonomy-agreement-kappa",
        "grading_method": "deterministic",
        "question_version": 1,
        "cognitive_operation": "Apply",
        "contributing_kc_ids": [],
        "estimated_difficulty": "medium"
      },
      {
        "servable": false,
        "role": "reassessment",
        "hints": [
          {
            "text": "Kappa đo consistency đã trừ chance, không đo semantic truth.",
            "hint_id": "h1",
            "after_attempt": 1
          }
        ],
        "module_id": "day14-g-dataset",
        "max_points": 4,
        "interaction": {
          "type": "short_text",
          "prompt": "Bối cảnh:\nObserved agreement là 0,95 nhưng cả hai reviewer gần như luôn gán PASS, expected agreement là 0,90.\n\nCâu hỏi:\nTính kappa và diễn giải prevalence trap.",
          "prompt_presentation": {
            "format": "sectioned_plain_text",
            "preserve_line_breaks": true
          }
        },
        "question_id": "d14-q038",
        "primary_kc_id": "kc-taxonomy-agreement-kappa",
        "grading_method": "criterion_rubric",
        "question_version": 1,
        "cognitive_operation": "Analyze",
        "contributing_kc_ids": [],
        "estimated_difficulty": "hard"
      },
      {
        "servable": true,
        "role": "follow_up",
        "hints": [
          {
            "text": "Một reviewer luôn PASS có thể đạt raw agreement cao tới đâu?",
            "hint_id": "h1",
            "after_attempt": 1
          }
        ],
        "module_id": "day14-g-dataset",
        "max_points": 1,
        "interaction": {
          "type": "single_select",
          "prompt": "Bối cảnh:\nHai reviewer agreement 95% nhưng cả hai gần như luôn gán PASS.\n\nCâu hỏi:\nCon số nào cần kiểm thêm trước khi nói label rất rõ?",
          "choices": [
            {
              "text": "Chance agreement/prevalence và kappa",
              "choice_id": "a"
            },
            {
              "text": "Chỉ số token F1 của answer",
              "choice_id": "b"
            },
            {
              "text": "BLEU giữa hai label",
              "choice_id": "c"
            },
            {
              "text": "MAP của retrieval",
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
        "question_id": "d14-q039",
        "primary_kc_id": "kc-taxonomy-agreement-kappa",
        "grading_method": "deterministic",
        "question_version": 1,
        "cognitive_operation": "Analyze",
        "contributing_kc_ids": [],
        "estimated_difficulty": "easy"
      },
      {
        "servable": true,
        "role": "initial_check",
        "hints": [
          {
            "text": "Mọi claim trong expected answer phải truy được về evidence nào?",
            "hint_id": "h1",
            "after_attempt": 1
          }
        ],
        "module_id": "day14-g-dataset",
        "max_points": 4,
        "interaction": {
          "type": "multi_select",
          "prompt": "Bối cảnh:\nMột benchmark case sẽ trở thành golden record.\n\nCâu hỏi:\nChọn các trường bắt buộc để record grounded và audit được.",
          "choices": [
            {
              "text": "Stable case ID",
              "choice_id": "a"
            },
            {
              "text": "Question và expert expected behavior",
              "choice_id": "b"
            },
            {
              "text": "Exact source/evidence reference",
              "choice_id": "c"
            },
            {
              "text": "Difficulty/risk metadata và provenance",
              "choice_id": "d"
            },
            {
              "text": "Model output được tự động coi là gold",
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
        "question_id": "d14-q040",
        "primary_kc_id": "kc-golden-dataset-record-design",
        "grading_method": "deterministic",
        "question_version": 1,
        "cognitive_operation": "Analyze",
        "contributing_kc_ids": [],
        "estimated_difficulty": "medium"
      },
      {
        "servable": false,
        "role": "reassessment",
        "hints": [
          {
            "text": "Link cả PDF không chứng minh từng claim cụ thể.",
            "hint_id": "h1",
            "after_attempt": 1
          }
        ],
        "module_id": "day14-g-dataset",
        "max_points": 4,
        "interaction": {
          "type": "short_text",
          "prompt": "Bối cảnh:\nCase refund có amount/date/exception; draft gold chỉ ghi answer chung và link cả PDF.\n\nCâu hỏi:\nSửa thành golden record audit được.",
          "prompt_presentation": {
            "format": "sectioned_plain_text",
            "preserve_line_breaks": true
          }
        },
        "question_id": "d14-q041",
        "primary_kc_id": "kc-golden-dataset-record-design",
        "grading_method": "criterion_rubric",
        "question_version": 1,
        "cognitive_operation": "Create",
        "contributing_kc_ids": [],
        "estimated_difficulty": "hard"
      },
      {
        "servable": true,
        "role": "initial_check",
        "hints": [
          {
            "text": "Phân biệt mục tiêu tìm failure với mục tiêu ước lượng tần suất production.",
            "hint_id": "h1",
            "after_attempt": 1
          }
        ],
        "module_id": "day14-g-dataset",
        "max_points": 1,
        "interaction": {
          "type": "single_select",
          "prompt": "Bối cảnh:\nProduction có 5% case policy-risk nhưng stress set cố ý chứa 50% case đó.\n\nCâu hỏi:\nCách report nào đúng?",
          "choices": [
            {
              "text": "Tách stress report; reweight production",
              "choice_id": "a"
            },
            {
              "text": "Dùng mean stress set như production mean",
              "choice_id": "b"
            },
            {
              "text": "Xóa slice hiếm để tỷ lệ giống production",
              "choice_id": "c"
            },
            {
              "text": "Kết luận 50% traffic là policy-risk",
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
        "question_id": "d14-q042",
        "primary_kc_id": "kc-eval-slice-stratification",
        "grading_method": "deterministic",
        "question_version": 1,
        "cognitive_operation": "Analyze",
        "contributing_kc_ids": [],
        "estimated_difficulty": "medium"
      },
      {
        "servable": false,
        "role": "reassessment",
        "hints": [
          {
            "text": "Hai mục tiêu sampling cần hai cách diễn giải.",
            "hint_id": "h1",
            "after_attempt": 1
          }
        ],
        "module_id": "day14-g-dataset",
        "max_points": 4,
        "interaction": {
          "type": "short_text",
          "prompt": "Bối cảnh:\nCó 1.000 production-weighted case và stress set 200 case safety oversample. Team muốn vừa estimate prevalence vừa gate safety.\n\nCâu hỏi:\nThiết kế allocation và report.",
          "prompt_presentation": {
            "format": "sectioned_plain_text",
            "preserve_line_breaks": true
          }
        },
        "question_id": "d14-q043",
        "primary_kc_id": "kc-eval-slice-stratification",
        "grading_method": "criterion_rubric",
        "question_version": 1,
        "cognitive_operation": "Create",
        "contributing_kc_ids": [],
        "estimated_difficulty": "hard"
      },
      {
        "servable": true,
        "role": "initial_check",
        "hints": [
          {
            "text": "Giữ các fact liên quan cố định và chỉ đổi attribute đang probe.",
            "hint_id": "h1",
            "after_attempt": 1
          }
        ],
        "module_id": "day14-g-dataset",
        "max_points": 1,
        "interaction": {
          "type": "single_select",
          "prompt": "Bối cảnh:\nHai case giống toàn bộ task, lịch sử và eligibility; chỉ tên gợi giới tính khác nhau. Outcome approval lệch.\n\nCâu hỏi:\nKết luận nào được evidence support?",
          "choices": [
            {
              "text": "Gap cần điều tra, chưa chứng minh causality",
              "choice_id": "a"
            },
            {
              "text": "Tên đã chứng minh model phân biệt đối xử",
              "choice_id": "b"
            },
            {
              "text": "Gap không đáng xem vì chỉ có một attribute đổi",
              "choice_id": "c"
            },
            {
              "text": "Phải đổi cả task và income để probe mạnh hơn",
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
        "question_id": "d14-q044",
        "primary_kc_id": "kc-counterfactual-fairness-slice-evaluation",
        "grading_method": "deterministic",
        "question_version": 1,
        "cognitive_operation": "Evaluate",
        "contributing_kc_ids": [],
        "estimated_difficulty": "medium"
      },
      {
        "servable": false,
        "role": "reassessment",
        "hints": [
          {
            "text": "Counterfactual phải kiểm soát các fact quyết định đúng.",
            "hint_id": "h1",
            "after_attempt": 1
          }
        ],
        "module_id": "day14-g-dataset",
        "max_points": 4,
        "interaction": {
          "type": "short_text",
          "prompt": "Bối cảnh:\nTạo cặp loan-assistant case chỉ đổi postcode, nhưng postcode đồng thời thay eligibility rule thật.\n\nCâu hỏi:\nĐánh giá probe và thiết kế lại.",
          "prompt_presentation": {
            "format": "sectioned_plain_text",
            "preserve_line_breaks": true
          }
        },
        "question_id": "d14-q045",
        "primary_kc_id": "kc-counterfactual-fairness-slice-evaluation",
        "grading_method": "criterion_rubric",
        "question_version": 1,
        "cognitive_operation": "Evaluate",
        "contributing_kc_ids": [],
        "estimated_difficulty": "hard"
      },
      {
        "servable": true,
        "role": "initial_check",
        "hints": [
          {
            "text": "Evidence nào cho biết model đã nhìn thấy case và case đã đổi ra sao?",
            "hint_id": "h1",
            "after_attempt": 1
          }
        ],
        "module_id": "day14-g-dataset",
        "max_points": 4,
        "interaction": {
          "type": "multi_select",
          "prompt": "Bối cảnh:\nPublic benchmark đã được dùng nhiều vòng tuning; team vẫn cần regression evidence đáng tin.\n\nCâu hỏi:\nChọn các control phù hợp.",
          "choices": [
            {
              "text": "Giữ stable case ID và change history",
              "choice_id": "a"
            },
            {
              "text": "Tách public/dev với private held-out",
              "choice_id": "b"
            },
            {
              "text": "Ghi access/provenance và bump version",
              "choice_id": "c"
            },
            {
              "text": "Thêm confirmed failure vào living set qua review",
              "choice_id": "d"
            },
            {
              "text": "Âm thầm sửa expected answer cũ",
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
        "question_id": "d14-q046",
        "primary_kc_id": "kc-benchmark-version-contamination",
        "grading_method": "deterministic",
        "question_version": 1,
        "cognitive_operation": "Analyze",
        "contributing_kc_ids": [],
        "estimated_difficulty": "hard"
      },
      {
        "servable": false,
        "role": "reassessment",
        "hints": [
          {
            "text": "Contamination control cần cả exposure và change history.",
            "hint_id": "h1",
            "after_attempt": 1
          }
        ],
        "module_id": "day14-g-dataset",
        "max_points": 4,
        "interaction": {
          "type": "short_text",
          "prompt": "Bối cảnh:\nMột confirmed production failure sẽ được thêm vào living benchmark đang có public/dev và private held-out split.\n\nCâu hỏi:\nThiết kế change record không làm hỏng historical comparability.",
          "prompt_presentation": {
            "format": "sectioned_plain_text",
            "preserve_line_breaks": true
          }
        },
        "question_id": "d14-q047",
        "primary_kc_id": "kc-benchmark-version-contamination",
        "grading_method": "criterion_rubric",
        "question_version": 1,
        "cognitive_operation": "Create",
        "contributing_kc_ids": [],
        "estimated_difficulty": "hard"
      },
      {
        "servable": true,
        "role": "initial_check",
        "hints": [
          {
            "text": "Đừng sinh câu trước khi biết cell nào thiếu và expected answer dựa vào đâu.",
            "hint_id": "h1",
            "after_attempt": 1
          }
        ],
        "module_id": "day14-g-dataset",
        "max_points": 1,
        "interaction": {
          "type": "ordering",
          "prompt": "Bối cảnh:\nTaxonomy có cell `refund × Vietnamese × ambiguous date` chưa có case.\n\nCâu hỏi:\nSắp generation path đúng.",
          "options": [
            {
              "text": "Xác nhận coverage gap trong taxonomy",
              "option_id": "o1"
            },
            {
              "text": "Lấy concept/fact từ source chunk",
              "option_id": "o2"
            },
            {
              "text": "Sinh hoặc mutate question nhắm đúng cell",
              "option_id": "o3"
            },
            {
              "text": "Tạo expected answer kèm source provenance",
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
        "question_id": "d14-q048",
        "primary_kc_id": "kc-synthetic-eval-case-generation",
        "grading_method": "deterministic",
        "question_version": 1,
        "cognitive_operation": "Apply",
        "contributing_kc_ids": [],
        "estimated_difficulty": "medium"
      },
      {
        "servable": true,
        "role": "initial_check",
        "hints": [
          {
            "text": "Filter đánh chất lượng/evidence của candidate, không chỉ acceptance rate.",
            "hint_id": "h1",
            "after_attempt": 1
          }
        ],
        "module_id": "day14-g-dataset",
        "max_points": 4,
        "interaction": {
          "type": "multi_select",
          "prompt": "Bối cảnh:\nMột batch synthetic candidate vừa được sinh.\n\nCâu hỏi:\nNhững lý do nào đủ để reject candidate?",
          "choices": [
            {
              "text": "Expected answer không được source support",
              "choice_id": "a"
            },
            {
              "text": "Question thiếu dữ kiện để có một đáp án",
              "choice_id": "b"
            },
            {
              "text": "Trùng semantic với case đã có",
              "choice_id": "c"
            },
            {
              "text": "Chỉ đổi tên riêng nhưng không đổi target work",
              "choice_id": "d"
            },
            {
              "text": "Case khó hơn average",
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
        "question_id": "d14-q049",
        "primary_kc_id": "kc-synthetic-eval-case-filtering",
        "grading_method": "deterministic",
        "question_version": 1,
        "cognitive_operation": "Evaluate",
        "contributing_kc_ids": [],
        "estimated_difficulty": "medium"
      },
      {
        "servable": false,
        "role": "reassessment",
        "hints": [
          {
            "text": "Cần identity-level dedupe trước khi report acceptance.",
            "hint_id": "h1",
            "after_attempt": 1
          }
        ],
        "module_id": "day14-g-dataset",
        "max_points": 4,
        "interaction": {
          "type": "short_text",
          "prompt": "Bối cảnh:\nBatch 100 candidate: 15 unsupported, 10 duplicate, 5 unanswerable. Có đúng 4 case nằm đồng thời trong unsupported và duplicate; không có giao nào khác giữa ba nhóm.\n\nCâu hỏi:\nTính số unique reject, số case giữ lại và nêu bước adjudication trước khi report coverage.",
          "prompt_presentation": {
            "format": "sectioned_plain_text",
            "preserve_line_breaks": true
          }
        },
        "question_id": "d14-q050",
        "primary_kc_id": "kc-synthetic-eval-case-filtering",
        "grading_method": "criterion_rubric",
        "question_version": 1,
        "cognitive_operation": "Apply",
        "contributing_kc_ids": [],
        "estimated_difficulty": "hard"
      },
      {
        "servable": true,
        "role": "initial_check",
        "hints": [
          {
            "text": "Một path khác reference chỉ fail nếu vi phạm constraint đã công bố.",
            "hint_id": "h1",
            "after_attempt": 1
          }
        ],
        "module_id": "day14-g-agent",
        "max_points": 3,
        "interaction": {
          "left": [
            {
              "id": "x1",
              "text": "Row reservation đúng state"
            },
            {
              "id": "x2",
              "text": "Tool bị cấm đã được gọi"
            },
            {
              "id": "x3",
              "text": "Có hai retry không cần thiết"
            }
          ],
          "type": "matching",
          "right": [
            {
              "id": "r1",
              "text": "Outcome oracle"
            },
            {
              "id": "r2",
              "text": "Mandatory trajectory constraint"
            },
            {
              "id": "r3",
              "text": "Trajectory efficiency diagnostic"
            }
          ],
          "prompt": "Bối cảnh:\nAgent đặt vé bằng một path khác reference nhưng DB cuối cùng đúng.\n\nCâu hỏi:\nGhép evidence với oracle tương ứng.",
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
        "question_id": "d14-q051",
        "primary_kc_id": "kc-outcome-trajectory-eval-boundary",
        "grading_method": "deterministic",
        "question_version": 1,
        "cognitive_operation": "Analyze",
        "contributing_kc_ids": [],
        "estimated_difficulty": "medium"
      },
      {
        "servable": false,
        "role": "reassessment",
        "hints": [
          {
            "text": "Các evidence phải được chấm riêng trước khi quyết định tích hợp.",
            "hint_id": "h1",
            "after_attempt": 1
          }
        ],
        "module_id": "day14-g-agent",
        "max_points": 4,
        "interaction": {
          "type": "short_text",
          "prompt": "Bối cảnh:\nAgent đạt đúng final state qua path khác reference; path dùng một tool bị policy cấm nhưng ít bước hơn.\n\nCâu hỏi:\nViết outcome và trajectory oracle rồi kết luận.",
          "prompt_presentation": {
            "format": "sectioned_plain_text",
            "preserve_line_breaks": true
          }
        },
        "question_id": "d14-q052",
        "primary_kc_id": "kc-outcome-trajectory-eval-boundary",
        "grading_method": "criterion_rubric",
        "question_version": 1,
        "cognitive_operation": "Evaluate",
        "contributing_kc_ids": [],
        "estimated_difficulty": "hard"
      },
      {
        "servable": true,
        "role": "initial_check",
        "hints": [
          {
            "text": "Success state nằm trong database hay trong câu agent nói?",
            "hint_id": "h1",
            "after_attempt": 1
          }
        ],
        "module_id": "day14-g-agent",
        "max_points": 1,
        "interaction": {
          "type": "single_select",
          "prompt": "Bối cảnh:\nAgent nhắn ‘đã hoàn tiền’, nhưng task success được định nghĩa là transaction `refund_status=completed` đúng order_id.\n\nCâu hỏi:\nVerifier nào đáng tin nhất?",
          "choices": [
            {
              "text": "Query DB state theo order_id",
              "choice_id": "a"
            },
            {
              "text": "Exact-match confirmation text",
              "choice_id": "b"
            },
            {
              "text": "Đếm số tool call",
              "choice_id": "c"
            },
            {
              "text": "Judge độ tự tin của câu trả lời",
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
        "question_id": "d14-q053",
        "primary_kc_id": "kc-agent-final-state-verifier",
        "grading_method": "deterministic",
        "question_version": 1,
        "cognitive_operation": "Apply",
        "contributing_kc_ids": [],
        "estimated_difficulty": "easy"
      },
      {
        "servable": false,
        "role": "reassessment",
        "hints": [
          {
            "text": "Mỗi success condition phải thành predicate chạy được.",
            "hint_id": "h1",
            "after_attempt": 1
          }
        ],
        "module_id": "day14-g-agent",
        "max_points": 4,
        "interaction": {
          "type": "short_text",
          "prompt": "Bối cảnh:\nTask tạo file CSV đúng schema và 100 rows; agent nhắn xong nhưng file có 99 rows và thiếu cột id.\n\nCâu hỏi:\nViết verifier deterministic và verdict.",
          "prompt_presentation": {
            "format": "sectioned_plain_text",
            "preserve_line_breaks": true
          }
        },
        "question_id": "d14-q054",
        "primary_kc_id": "kc-agent-final-state-verifier",
        "grading_method": "criterion_rubric",
        "question_version": 1,
        "cognitive_operation": "Create",
        "contributing_kc_ids": [],
        "estimated_difficulty": "medium"
      },
      {
        "servable": true,
        "role": "initial_check",
        "hints": [
          {
            "text": "Action dài hơn có tạo evidence/state mới theo retry policy không?",
            "hint_id": "h1",
            "after_attempt": 1
          }
        ],
        "module_id": "day14-g-agent",
        "max_points": 1,
        "interaction": {
          "type": "single_select",
          "prompt": "Bối cảnh:\nMinimum valid path cần 4 action. Trace dùng 6 action; hai action thêm là retry sau timeout theo policy và cuối cùng success.\n\nCâu hỏi:\nĐánh giá nào đúng?",
          "choices": [
            {
              "text": "Kiểm retry necessity trước khi gán waste",
              "choice_id": "a"
            },
            {
              "text": "Efficiency luôn là 4/6 và hai retry đều sai",
              "choice_id": "b"
            },
            {
              "text": "Path 4 bước luôn tốt hơn dù bỏ safety check",
              "choice_id": "c"
            },
            {
              "text": "Chỉ outcome pass nên trajectory không cần xem",
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
        "question_id": "d14-q055",
        "primary_kc_id": "kc-agent-step-efficiency",
        "grading_method": "deterministic",
        "question_version": 1,
        "cognitive_operation": "Analyze",
        "contributing_kc_ids": [],
        "estimated_difficulty": "medium"
      },
      {
        "servable": false,
        "role": "reassessment",
        "hints": [
          {
            "text": "Observed step count cần được phân loại theo necessity.",
            "hint_id": "h1",
            "after_attempt": 1
          }
        ],
        "module_id": "day14-g-agent",
        "max_points": 4,
        "interaction": {
          "type": "short_text",
          "prompt": "Bối cảnh:\nMinimum safe path có 5 action. Trace A dùng 7 do hai lookup trùng; trace B dùng 6 vì một retry sau timeout theo policy.\n\nCâu hỏi:\nChấm efficiency mà không thưởng unsafe shortcut.",
          "prompt_presentation": {
            "format": "sectioned_plain_text",
            "preserve_line_breaks": true
          }
        },
        "question_id": "d14-q056",
        "primary_kc_id": "kc-agent-step-efficiency",
        "grading_method": "criterion_rubric",
        "question_version": 1,
        "cognitive_operation": "Analyze",
        "contributing_kc_ids": [],
        "estimated_difficulty": "hard"
      },
      {
        "servable": true,
        "role": "initial_check",
        "hints": [
          {
            "text": "Chỉ đếm call thỏa đủ điều kiện redundant đã nêu.",
            "hint_id": "h1",
            "after_attempt": 1
          }
        ],
        "module_id": "day14-g-agent",
        "max_points": 1,
        "interaction": {
          "type": "numeric_input",
          "prompt": "Bối cảnh:\nTrace có 8 tool calls. Hai call lặp cùng action+payload, state không đổi, không có evidence mới và không thuộc retry policy; sáu call còn lại hợp lệ.\n\nCâu hỏi:\nTính redundancy rate theo tổng tool calls.",
          "required_unit": "%",
          "prompt_presentation": {
            "format": "sectioned_plain_text",
            "preserve_line_breaks": true
          }
        },
        "question_id": "d14-q057",
        "primary_kc_id": "kc-agent-redundant-tool-calls",
        "grading_method": "deterministic",
        "question_version": 1,
        "cognitive_operation": "Apply",
        "contributing_kc_ids": [],
        "estimated_difficulty": "easy"
      },
      {
        "servable": true,
        "role": "follow_up",
        "hints": [
          {
            "text": "Call đầu đã tạo state hay policy có cho retry không?",
            "hint_id": "h1",
            "after_attempt": 1
          }
        ],
        "module_id": "day14-g-agent",
        "max_points": 1,
        "interaction": {
          "type": "single_select",
          "prompt": "Bối cảnh:\nTool call thứ hai lặp payload nhưng call đầu timeout trước khi tạo state; policy cho phép đúng một retry.\n\nCâu hỏi:\nCall thứ hai có tự động là redundant không?",
          "choices": [
            {
              "text": "Không; đây có thể là legitimate retry",
              "choice_id": "a"
            },
            {
              "text": "Có; tool name lặp là đủ",
              "choice_id": "b"
            },
            {
              "text": "Có nếu duration dài",
              "choice_id": "c"
            },
            {
              "text": "Không vì không tool call nào redundant",
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
        "question_id": "d14-q058",
        "primary_kc_id": "kc-agent-redundant-tool-calls",
        "grading_method": "deterministic",
        "question_version": 1,
        "cognitive_operation": "Analyze",
        "contributing_kc_ids": [],
        "estimated_difficulty": "easy"
      },
      {
        "servable": true,
        "role": "initial_check",
        "hints": [
          {
            "text": "Phân biệt một retry có state mới với chu kỳ không đổi.",
            "hint_id": "h1",
            "after_attempt": 1
          }
        ],
        "module_id": "day14-g-agent",
        "max_points": 1,
        "interaction": {
          "type": "ordering",
          "prompt": "Bối cảnh:\nAgent lặp cùng state và cùng failed action nhiều lần.\n\nCâu hỏi:\nSắp control path hợp lý.",
          "options": [
            {
              "text": "Fingerprint state-action cycle",
              "option_id": "o1"
            },
            {
              "text": "Phát hiện không có progress",
              "option_id": "o2"
            },
            {
              "text": "Enforce step/cost stopping rule",
              "option_id": "o3"
            },
            {
              "text": "Clarify, abstain hoặc bounded recovery",
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
        "question_id": "d14-q059",
        "primary_kc_id": "kc-agent-loop-deadlock-control",
        "grading_method": "deterministic",
        "question_version": 1,
        "cognitive_operation": "Analyze",
        "contributing_kc_ids": [],
        "estimated_difficulty": "medium"
      },
      {
        "servable": false,
        "role": "reassessment",
        "hints": [
          {
            "text": "Không gán retry có backoff/new state là deadlock.",
            "hint_id": "h1",
            "after_attempt": 1
          }
        ],
        "module_id": "day14-g-agent",
        "max_points": 4,
        "interaction": {
          "type": "short_text",
          "prompt": "Bối cảnh:\nTrace lặp search→same empty result→rewrite identical query bốn vòng và chưa đạt state mới.\n\nCâu hỏi:\nThiết kế detector, budget và recovery oracle.",
          "prompt_presentation": {
            "format": "sectioned_plain_text",
            "preserve_line_breaks": true
          }
        },
        "question_id": "d14-q060",
        "primary_kc_id": "kc-agent-loop-deadlock-control",
        "grading_method": "criterion_rubric",
        "question_version": 1,
        "cognitive_operation": "Create",
        "contributing_kc_ids": [],
        "estimated_difficulty": "hard"
      },
      {
        "servable": true,
        "role": "initial_check",
        "hints": [
          {
            "text": "Selection false positive là call nào không nằm trong required set?",
            "hint_id": "h1",
            "after_attempt": 1
          }
        ],
        "module_id": "day14-g-agent",
        "max_points": 1,
        "interaction": {
          "type": "single_select",
          "prompt": "Bối cảnh:\nRequired tools là `{search, calculator}`. Agent gọi `{search, email, calculator}`; bỏ qua thứ tự và payload.\n\nCâu hỏi:\nTool-selection precision và recall là bao nhiêu?",
          "choices": [
            {
              "text": "Precision 2/3; recall 1",
              "choice_id": "a"
            },
            {
              "text": "Precision 1; recall 2/3",
              "choice_id": "b"
            },
            {
              "text": "Precision 1/3; recall 1/2",
              "choice_id": "c"
            },
            {
              "text": "Cả hai bằng 1 vì task hoàn tất",
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
        "question_id": "d14-q061",
        "primary_kc_id": "kc-tool-selection-evaluation",
        "grading_method": "deterministic",
        "question_version": 1,
        "cognitive_operation": "Apply",
        "contributing_kc_ids": [],
        "estimated_difficulty": "medium"
      },
      {
        "servable": false,
        "role": "reassessment",
        "hints": [
          {
            "text": "Selection và redundancy dùng hai unit khác nhau.",
            "hint_id": "h1",
            "after_attempt": 1
          }
        ],
        "module_id": "day14-g-agent",
        "max_points": 4,
        "interaction": {
          "type": "short_text",
          "prompt": "Bối cảnh:\nContract tính tool-selection trên unique tool names. Required là `{search, calculator}`; agent gọi search hai lần, calculator không gọi, email một lần.\n\nCâu hỏi:\nTính selection precision/recall và tách duplicate-call evidence.",
          "prompt_presentation": {
            "format": "sectioned_plain_text",
            "preserve_line_breaks": true
          }
        },
        "question_id": "d14-q062",
        "primary_kc_id": "kc-tool-selection-evaluation",
        "grading_method": "criterion_rubric",
        "question_version": 1,
        "cognitive_operation": "Analyze",
        "contributing_kc_ids": [],
        "estimated_difficulty": "hard"
      },
      {
        "servable": true,
        "role": "initial_check",
        "hints": [
          {
            "text": "Tách schema conformance, value grounding và tool choice.",
            "hint_id": "h1",
            "after_attempt": 1
          }
        ],
        "module_id": "day14-g-agent",
        "max_points": 2,
        "interaction": {
          "type": "multi_select",
          "prompt": "Bối cảnh:\nSchema `transfer(amount:number, currency:enum, account_id:string)`; user chỉ cho amount=100 và account_id=A7. Agent gọi amount=`100` dạng string, currency=`USD`, account_id=A7.\n\nCâu hỏi:\nChọn tất cả lỗi payload có thể kết luận.",
          "choices": [
            {
              "text": "amount sai type",
              "choice_id": "a"
            },
            {
              "text": "currency không được user/state support",
              "choice_id": "b"
            },
            {
              "text": "account_id có evidence",
              "choice_id": "c"
            },
            {
              "text": "Tool selection chắc chắn sai",
              "choice_id": "d"
            },
            {
              "text": "Syntax hợp lệ nên semantic đúng",
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
        "question_id": "d14-q063",
        "primary_kc_id": "kc-tool-payload-evaluation",
        "grading_method": "deterministic",
        "question_version": 1,
        "cognitive_operation": "Analyze",
        "contributing_kc_ids": [],
        "estimated_difficulty": "hard"
      },
      {
        "servable": false,
        "role": "reassessment",
        "hints": [
          {
            "text": "Một payload có thể đồng thời fail structure và grounding.",
            "hint_id": "h1",
            "after_attempt": 1
          }
        ],
        "module_id": "day14-g-agent",
        "max_points": 4,
        "interaction": {
          "type": "short_text",
          "prompt": "Bối cảnh:\nAgent chọn đúng `book_flight`; schema hợp lệ nhưng tự điền passport number không có trong user/state, còn date sai type.\n\nCâu hỏi:\nGán lỗi và remediation evaluator.",
          "prompt_presentation": {
            "format": "sectioned_plain_text",
            "preserve_line_breaks": true
          }
        },
        "question_id": "d14-q064",
        "primary_kc_id": "kc-tool-payload-evaluation",
        "grading_method": "criterion_rubric",
        "question_version": 1,
        "cognitive_operation": "Analyze",
        "contributing_kc_ids": [],
        "estimated_difficulty": "hard"
      },
      {
        "servable": true,
        "role": "initial_check",
        "hints": [
          {
            "text": "Schema có thể hợp lệ nhưng value có được user cung cấp không?",
            "hint_id": "h1",
            "after_attempt": 1
          }
        ],
        "module_id": "day14-g-agent",
        "max_points": 1,
        "interaction": {
          "type": "single_select",
          "prompt": "Bối cảnh:\nUser yêu cầu chuyển tiền nhưng không nêu tài khoản nhận; đây là action có quyền ghi.\n\nCâu hỏi:\nBehavior nào nên được oracle chấp nhận?",
          "choices": [
            {
              "text": "Clarify account nhận hoặc abstain",
              "choice_id": "a"
            },
            {
              "text": "Đoán account thường dùng rồi gọi tool",
              "choice_id": "b"
            },
            {
              "text": "Điền chuỗi bất kỳ miễn pass schema",
              "choice_id": "c"
            },
            {
              "text": "Gọi tool trước rồi xin xác nhận sau",
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
        "question_id": "d14-q065",
        "primary_kc_id": "kc-missing-information-clarification-eval",
        "grading_method": "deterministic",
        "question_version": 1,
        "cognitive_operation": "Apply",
        "contributing_kc_ids": [],
        "estimated_difficulty": "easy"
      },
      {
        "servable": false,
        "role": "reassessment",
        "hints": [
          {
            "text": "Ba failure mode input cần behavior oracle riêng.",
            "hint_id": "h1",
            "after_attempt": 1
          }
        ],
        "module_id": "day14-g-agent",
        "max_points": 4,
        "interaction": {
          "type": "short_text",
          "prompt": "Bối cảnh:\nBenchmark cần ba case: missing account, hai account mơ hồ và account có format invalid.\n\nCâu hỏi:\nViết oracle quan sát được cho từng case.",
          "prompt_presentation": {
            "format": "sectioned_plain_text",
            "preserve_line_breaks": true
          }
        },
        "question_id": "d14-q066",
        "primary_kc_id": "kc-missing-information-clarification-eval",
        "grading_method": "criterion_rubric",
        "question_version": 1,
        "cognitive_operation": "Create",
        "contributing_kc_ids": [],
        "estimated_difficulty": "hard"
      },
      {
        "servable": true,
        "role": "initial_check",
        "hints": [
          {
            "text": "‘Tất cả k lần’ dùng p^k, không phải pass@k.",
            "hint_id": "h1",
            "after_attempt": 1
          }
        ],
        "module_id": "day14-g-agent",
        "max_points": 1,
        "interaction": {
          "type": "numeric_input",
          "prompt": "Bối cảnh:\nMỗi run success độc lập với xác suất p=0,8. Product yêu cầu cả 3 run liên tiếp đều success.\n\nCâu hỏi:\nTính pass^3 theo phần trăm.",
          "required_unit": "%",
          "prompt_presentation": {
            "format": "sectioned_plain_text",
            "preserve_line_breaks": true
          }
        },
        "question_id": "d14-q067",
        "primary_kc_id": "kc-stochastic-agent-reliability",
        "grading_method": "deterministic",
        "question_version": 1,
        "cognitive_operation": "Apply",
        "contributing_kc_ids": [],
        "estimated_difficulty": "medium"
      },
      {
        "servable": false,
        "role": "reassessment",
        "hints": [
          {
            "text": "Phân biệt retry success với reliability mọi lần.",
            "hint_id": "h1",
            "after_attempt": 1
          }
        ],
        "module_id": "day14-g-agent",
        "max_points": 4,
        "interaction": {
          "type": "short_text",
          "prompt": "Bối cảnh:\nAgent success mỗi run với p=0,7 và các run được giả định độc lập. Product cho phép tối đa 3 lần chạy tổng cộng và chỉ cần ít nhất một success.\n\nCâu hỏi:\nTính pass@3 và nêu giới hạn.",
          "prompt_presentation": {
            "format": "sectioned_plain_text",
            "preserve_line_breaks": true
          }
        },
        "question_id": "d14-q068",
        "primary_kc_id": "kc-stochastic-agent-reliability",
        "grading_method": "criterion_rubric",
        "question_version": 1,
        "cognitive_operation": "Apply",
        "contributing_kc_ids": [],
        "estimated_difficulty": "medium"
      },
      {
        "servable": true,
        "role": "follow_up",
        "hints": [
          {
            "text": "Dùng complement của việc cả ba lần đều fail.",
            "hint_id": "h1",
            "after_attempt": 1
          }
        ],
        "module_id": "day14-g-agent",
        "max_points": 1,
        "interaction": {
          "type": "numeric_input",
          "prompt": "Bối cảnh:\nMỗi run success độc lập với p=0,8; được thử tối đa 3 lần và chỉ cần ít nhất một success.\n\nCâu hỏi:\nTính pass@3 theo phần trăm.",
          "required_unit": "%",
          "prompt_presentation": {
            "format": "sectioned_plain_text",
            "preserve_line_breaks": true
          }
        },
        "question_id": "d14-q069",
        "primary_kc_id": "kc-stochastic-agent-reliability",
        "grading_method": "deterministic",
        "question_version": 1,
        "cognitive_operation": "Apply",
        "contributing_kc_ids": [],
        "estimated_difficulty": "easy"
      },
      {
        "servable": true,
        "role": "initial_check",
        "hints": [
          {
            "text": "Theo dõi constraint qua cả text và tool action.",
            "hint_id": "h1",
            "after_attempt": 1
          }
        ],
        "module_id": "day14-g-agent",
        "max_points": 1,
        "interaction": {
          "type": "single_select",
          "prompt": "Bối cảnh:\nTurn 1: user nói không gửi dữ liệu ra ngoài. Turn 2–3 agent giữ constraint. Turn 4 agent gọi external API với payload user; turn 5 mới xin lỗi.\n\nCâu hỏi:\nTurn đầu tiên session vi phạm constraint là turn nào?",
          "choices": [
            {
              "text": "Turn 4",
              "choice_id": "a"
            },
            {
              "text": "Turn 1",
              "choice_id": "b"
            },
            {
              "text": "Turn 3",
              "choice_id": "c"
            },
            {
              "text": "Turn 5",
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
        "question_id": "d14-q070",
        "primary_kc_id": "kc-multiturn-constraint-decay-eval",
        "grading_method": "deterministic",
        "question_version": 1,
        "cognitive_operation": "Analyze",
        "contributing_kc_ids": [],
        "estimated_difficulty": "easy"
      },
      {
        "servable": false,
        "role": "reassessment",
        "hints": [
          {
            "text": "Session-level constraint phải sống qua context trung gian.",
            "hint_id": "h1",
            "after_attempt": 1
          }
        ],
        "module_id": "day14-g-agent",
        "max_points": 4,
        "interaction": {
          "type": "short_text",
          "prompt": "Bối cảnh:\nConstraint `không mua nếu giá \u003E2 triệu` xuất hiện turn 1; turn 6 tool payload mua 2,4 triệu sau nhiều topic trung gian.\n\nCâu hỏi:\nThiết kế session eval để phát hiện decay.",
          "prompt_presentation": {
            "format": "sectioned_plain_text",
            "preserve_line_breaks": true
          }
        },
        "question_id": "d14-q071",
        "primary_kc_id": "kc-multiturn-constraint-decay-eval",
        "grading_method": "criterion_rubric",
        "question_version": 1,
        "cognitive_operation": "Create",
        "contributing_kc_ids": [],
        "estimated_difficulty": "hard"
      },
      {
        "servable": true,
        "role": "initial_check",
        "hints": [
          {
            "text": "Đừng thay state comparison bằng average quality của từng turn.",
            "hint_id": "h1",
            "after_attempt": 1
          }
        ],
        "module_id": "day14-g-agent",
        "max_points": 4,
        "interaction": {
          "left": [
            {
              "id": "x1",
              "text": "book"
            },
            {
              "id": "x2",
              "text": "12/9"
            },
            {
              "id": "x3",
              "text": "Hà Nội"
            },
            {
              "id": "x4",
              "text": "awaiting_confirmation"
            }
          ],
          "type": "matching",
          "right": [
            {
              "id": "r1",
              "text": "Goal"
            },
            {
              "id": "r2",
              "text": "Slot: date"
            },
            {
              "id": "r3",
              "text": "Slot: city"
            },
            {
              "id": "r4",
              "text": "Status"
            }
          ],
          "prompt": "Bối cảnh:\nTarget state sau hội thoại đặt lịch: goal=book, date=12/9, city=Hà Nội, status=awaiting_confirmation.\n\nCâu hỏi:\nGhép thành phần với loại state.",
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
        "question_id": "d14-q072",
        "primary_kc_id": "kc-dialog-state-tracking-evaluator",
        "grading_method": "deterministic",
        "question_version": 1,
        "cognitive_operation": "Apply",
        "contributing_kc_ids": [],
        "estimated_difficulty": "easy"
      },
      {
        "servable": true,
        "role": "initial_check",
        "hints": [
          {
            "text": "Tách state task khỏi việc session đã kết thúc như thế nào.",
            "hint_id": "h1",
            "after_attempt": 1
          }
        ],
        "module_id": "day14-g-agent",
        "max_points": 4,
        "interaction": {
          "left": [
            {
              "id": "x1",
              "text": "Target state đạt, không handoff"
            },
            {
              "id": "x2",
              "text": "Chuyển human theo policy"
            },
            {
              "id": "x3",
              "text": "User rời khi task chưa xong"
            },
            {
              "id": "x4",
              "text": "Session còn mở, chưa đạt target"
            }
          ],
          "type": "matching",
          "right": [
            {
              "id": "r1",
              "text": "Resolved"
            },
            {
              "id": "r2",
              "text": "Handed-off"
            },
            {
              "id": "r3",
              "text": "Abandoned"
            },
            {
              "id": "r4",
              "text": "Unresolved-active"
            }
          ],
          "prompt": "Bối cảnh:\nPhân loại bốn terminal evidence.\n\nCâu hỏi:\nGhép session với outcome phù hợp.",
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
        "question_id": "d14-q073",
        "primary_kc_id": "kc-session-resolution-abandonment-eval",
        "grading_method": "deterministic",
        "question_version": 1,
        "cognitive_operation": "Analyze",
        "contributing_kc_ids": [],
        "estimated_difficulty": "medium"
      },
      {
        "servable": false,
        "role": "reassessment",
        "hints": [
          {
            "text": "User exit và task resolution là hai biến riêng.",
            "hint_id": "h1",
            "after_attempt": 1
          }
        ],
        "module_id": "day14-g-agent",
        "max_points": 4,
        "interaction": {
          "type": "short_text",
          "prompt": "Bối cảnh:\nUser đóng chat sau khi agent đưa đúng kết quả và target state đã đạt; session khác user rời khi tool đang pending.\n\nCâu hỏi:\nPhân loại outcome và giới hạn inference.",
          "prompt_presentation": {
            "format": "sectioned_plain_text",
            "preserve_line_breaks": true
          }
        },
        "question_id": "d14-q074",
        "primary_kc_id": "kc-session-resolution-abandonment-eval",
        "grading_method": "criterion_rubric",
        "question_version": 1,
        "cognitive_operation": "Analyze",
        "contributing_kc_ids": [],
        "estimated_difficulty": "medium"
      },
      {
        "servable": true,
        "role": "initial_check",
        "hints": [
          {
            "text": "Necessary input phải nằm trước output contract; verdict không thay criterion.",
            "hint_id": "h1",
            "after_attempt": 1
          }
        ],
        "module_id": "day14-g-judge",
        "max_points": 1,
        "interaction": {
          "type": "ordering",
          "prompt": "Bối cảnh:\nCần judge một criterion `faithfulness` và output parse được. Contract yêu cầu khóa criterion trước khi mở input, áp evidence policy lên input đã phân ranh và chỉ xuất verdict sau finding.\n\nCâu hỏi:\nSắp các phần contract theo dependency đã nêu.",
          "options": [
            {
              "text": "Role và criterion duy nhất",
              "option_id": "o1"
            },
            {
              "text": "Delimited question/context/answer",
              "option_id": "o2"
            },
            {
              "text": "Evidence visibility và abstention rule",
              "option_id": "o3"
            },
            {
              "text": "Output schema với finding rồi verdict",
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
        "question_id": "d14-q075",
        "primary_kc_id": "kc-judge-prompt-contract",
        "grading_method": "deterministic",
        "question_version": 1,
        "cognitive_operation": "Create",
        "contributing_kc_ids": [],
        "estimated_difficulty": "medium"
      },
      {
        "servable": false,
        "role": "reassessment",
        "hints": [
          {
            "text": "Không để criterion khác bù hoặc làm mờ faithfulness.",
            "hint_id": "h1",
            "after_attempt": 1
          }
        ],
        "module_id": "day14-g-judge",
        "max_points": 4,
        "interaction": {
          "type": "short_text",
          "prompt": "Bối cảnh:\nCần judge faithfulness dựa context nhưng hiện prompt trộn relevance, style và helpfulness, output là prose tự do.\n\nCâu hỏi:\nViết lại contract một criterion và parse được.",
          "prompt_presentation": {
            "format": "sectioned_plain_text",
            "preserve_line_breaks": true
          }
        },
        "question_id": "d14-q076",
        "primary_kc_id": "kc-judge-prompt-contract",
        "grading_method": "criterion_rubric",
        "question_version": 1,
        "cognitive_operation": "Create",
        "contributing_kc_ids": [],
        "estimated_difficulty": "hard"
      },
      {
        "servable": true,
        "role": "initial_check",
        "hints": [
          {
            "text": "Mỗi level thêm vào phải làm downstream action khác đi.",
            "hint_id": "h1",
            "after_attempt": 1
          }
        ],
        "module_id": "day14-g-judge",
        "max_points": 1,
        "interaction": {
          "type": "single_select",
          "prompt": "Bối cảnh:\nRelease gate chỉ có hai action `block` hoặc `allow`; criterion là ‘có PII leak hay không’.\n\nCâu hỏi:\nVerdict scale nào hợp lý?",
          "choices": [
            {
              "text": "Binary PASS/FAIL với PII leak là critical cap",
              "choice_id": "a"
            },
            {
              "text": "Thang 1–10 không anchor",
              "choice_id": "b"
            },
            {
              "text": "Năm level nhưng mọi level cùng action",
              "choice_id": "c"
            },
            {
              "text": "Average nhiều criterion để leak bị bù bởi style",
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
        "question_id": "d14-q077",
        "primary_kc_id": "kc-judge-verdict-scale-selection",
        "grading_method": "deterministic",
        "question_version": 1,
        "cognitive_operation": "Evaluate",
        "contributing_kc_ids": [],
        "estimated_difficulty": "medium"
      },
      {
        "servable": false,
        "role": "reassessment",
        "hints": [
          {
            "text": "Số level được biện minh bằng action khác nhau.",
            "hint_id": "h1",
            "after_attempt": 1
          }
        ],
        "module_id": "day14-g-judge",
        "max_points": 4,
        "interaction": {
          "type": "short_text",
          "prompt": "Bối cảnh:\nCriterion completeness có ba downstream action: accept, request minor revision, block vì thiếu critical condition. Release score còn có một criterion style riêng.\n\nCâu hỏi:\nChọn scale/anchor cho completeness; nêu cách aggregate với style và đặt cap.",
          "prompt_presentation": {
            "format": "sectioned_plain_text",
            "preserve_line_breaks": true
          }
        },
        "question_id": "d14-q078",
        "primary_kc_id": "kc-judge-verdict-scale-selection",
        "grading_method": "criterion_rubric",
        "question_version": 1,
        "cognitive_operation": "Create",
        "contributing_kc_ids": [],
        "estimated_difficulty": "hard"
      },
      {
        "servable": true,
        "role": "initial_check",
        "hints": [
          {
            "text": "Có trusted answer không, và decision cần label tuyệt đối hay so cặp?",
            "hint_id": "h1",
            "after_attempt": 1
          }
        ],
        "module_id": "day14-g-judge",
        "max_points": 3,
        "interaction": {
          "left": [
            {
              "id": "x1",
              "text": "Chấm factual answer có trusted gold"
            },
            {
              "id": "x2",
              "text": "Chấm style theo rubric không có gold"
            },
            {
              "id": "x3",
              "text": "So A/B để chọn preference"
            }
          ],
          "type": "matching",
          "right": [
            {
              "id": "r1",
              "text": "Reference-based pointwise"
            },
            {
              "id": "r2",
              "text": "Reference-free pointwise"
            },
            {
              "id": "r3",
              "text": "Pairwise comparison"
            }
          ],
          "prompt": "Bối cảnh:\nChọn judge configuration theo evidence và claim.\n\nCâu hỏi:\nGhép use case với mode phù hợp.",
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
        "question_id": "d14-q079",
        "primary_kc_id": "kc-judge-reference-mode-selection",
        "grading_method": "deterministic",
        "question_version": 1,
        "cognitive_operation": "Analyze",
        "contributing_kc_ids": [],
        "estimated_difficulty": "medium"
      },
      {
        "servable": false,
        "role": "reassessment",
        "hints": [
          {
            "text": "Một item có thể cần hai decision khác nhau nhưng không copy score.",
            "hint_id": "h1",
            "after_attempt": 1
          }
        ],
        "module_id": "day14-g-judge",
        "max_points": 4,
        "interaction": {
          "type": "short_text",
          "prompt": "Bối cảnh:\nCó trusted contract text; cần absolute compliance gate và thêm A/B preference cho style sau đó.\n\nCâu hỏi:\nChọn reference visibility và hai judging mode, không đánh tráo claim.",
          "prompt_presentation": {
            "format": "sectioned_plain_text",
            "preserve_line_breaks": true
          }
        },
        "question_id": "d14-q080",
        "primary_kc_id": "kc-judge-reference-mode-selection",
        "grading_method": "criterion_rubric",
        "question_version": 1,
        "cognitive_operation": "Evaluate",
        "contributing_kc_ids": [],
        "estimated_difficulty": "hard"
      },
      {
        "servable": true,
        "role": "follow_up",
        "hints": [
          {
            "text": "Judge được hỏi so cặp hay đối chiếu một gold fact?",
            "hint_id": "h1",
            "after_attempt": 1
          }
        ],
        "module_id": "day14-g-judge",
        "max_points": 1,
        "interaction": {
          "type": "single_select",
          "prompt": "Bối cảnh:\nPairwise judge chọn A hơn B về style nhưng không có trusted reference.\n\nCâu hỏi:\nVerdict này chứng minh A factual đúng không?",
          "choices": [
            {
              "text": "Không; preference không phải correctness",
              "choice_id": "a"
            },
            {
              "text": "Có; pairwise winner luôn đúng",
              "choice_id": "b"
            },
            {
              "text": "Có nếu A dài hơn",
              "choice_id": "c"
            },
            {
              "text": "Không vì pairwise không dùng được cho style",
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
        "question_id": "d14-q081",
        "primary_kc_id": "kc-judge-reference-mode-selection",
        "grading_method": "deterministic",
        "question_version": 1,
        "cognitive_operation": "Evaluate",
        "contributing_kc_ids": [],
        "estimated_difficulty": "easy"
      },
      {
        "servable": true,
        "role": "initial_check",
        "hints": [
          {
            "text": "Tính update từ chênh lệch observed và expected.",
            "hint_id": "h1",
            "after_attempt": 1
          }
        ],
        "module_id": "day14-g-judge",
        "max_points": 1,
        "interaction": {
          "type": "numeric_input",
          "prompt": "Bối cảnh:\nDùng Elo: R_A=R_B=1200, K=32. Expected score của A là 0,5 và A thắng (observed=1). Công thức R'_A=R_A+K(observed−expected).\n\nCâu hỏi:\nTính rating mới của A.",
          "required_unit": "Elo",
          "prompt_presentation": {
            "format": "sectioned_plain_text",
            "preserve_line_breaks": true
          }
        },
        "question_id": "d14-q082",
        "primary_kc_id": "kc-pairwise-ranking-aggregation",
        "grading_method": "deterministic",
        "question_version": 1,
        "cognitive_operation": "Apply",
        "contributing_kc_ids": [],
        "estimated_difficulty": "medium"
      },
      {
        "servable": false,
        "role": "reassessment",
        "hints": [
          {
            "text": "Aggregation không sửa được input comparison bị bias.",
            "hint_id": "h1",
            "after_attempt": 1
          }
        ],
        "module_id": "day14-g-judge",
        "max_points": 4,
        "interaction": {
          "type": "short_text",
          "prompt": "Bối cảnh:\nComparison graph có A thắng B, B thắng C nhưng chưa có A–C; match A/B bị position bias 25%.\n\nCâu hỏi:\nĐánh giá ranking và bước tiếp theo.",
          "prompt_presentation": {
            "format": "sectioned_plain_text",
            "preserve_line_breaks": true
          }
        },
        "question_id": "d14-q083",
        "primary_kc_id": "kc-pairwise-ranking-aggregation",
        "grading_method": "criterion_rubric",
        "question_version": 1,
        "cognitive_operation": "Analyze",
        "contributing_kc_ids": [],
        "estimated_difficulty": "hard"
      },
      {
        "servable": true,
        "role": "initial_check",
        "hints": [
          {
            "text": "Verdict là trường kết thúc, không phải điểm xuất phát cho lời biện minh.",
            "hint_id": "h1",
            "after_attempt": 1
          }
        ],
        "module_id": "day14-g-judge",
        "max_points": 1,
        "interaction": {
          "type": "ordering",
          "prompt": "Bối cảnh:\nJudge output cần tránh score-first anchoring nhưng không yêu cầu private chain-of-thought.\n\nCâu hỏi:\nSắp output schema.",
          "options": [
            {
              "text": "Evidence finding ngắn có source IDs",
              "option_id": "o1"
            },
            {
              "text": "Criterion-specific justification",
              "option_id": "o2"
            },
            {
              "text": "Terminal verdict parse được",
              "option_id": "o3"
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
        "question_id": "d14-q084",
        "primary_kc_id": "kc-judge-verdict-order",
        "grading_method": "deterministic",
        "question_version": 1,
        "cognitive_operation": "Apply",
        "contributing_kc_ids": [],
        "estimated_difficulty": "easy"
      },
      {
        "servable": true,
        "role": "initial_check",
        "hints": [
          {
            "text": "Mẫu số là số cặp đã chạy đủ hai order.",
            "hint_id": "h1",
            "after_attempt": 1
          }
        ],
        "module_id": "day14-g-judge",
        "max_points": 1,
        "interaction": {
          "type": "numeric_input",
          "prompt": "Bối cảnh:\nChạy 20 cặp answer ở cả hai order A/B và B/A. Có 6 cặp đổi winner chỉ vì swap vị trí.\n\nCâu hỏi:\nTính flip rate.",
          "required_unit": "%",
          "prompt_presentation": {
            "format": "sectioned_plain_text",
            "preserve_line_breaks": true
          }
        },
        "question_id": "d14-q085",
        "primary_kc_id": "kc-judge-position-swap",
        "grading_method": "deterministic",
        "question_version": 1,
        "cognitive_operation": "Apply",
        "contributing_kc_ids": [],
        "estimated_difficulty": "easy"
      },
      {
        "servable": false,
        "role": "reassessment",
        "hints": [
          {
            "text": "Swap test cần policy cho từng outcome, không chỉ một tỷ lệ.",
            "hint_id": "h1",
            "after_attempt": 1
          }
        ],
        "module_id": "day14-g-judge",
        "max_points": 4,
        "interaction": {
          "type": "short_text",
          "prompt": "Bối cảnh:\n100 pair chạy hai order: 70 consistent winner, 20 consistent tie, 10 flip winner.\n\nCâu hỏi:\nĐịnh nghĩa verdict handling và bias report.",
          "prompt_presentation": {
            "format": "sectioned_plain_text",
            "preserve_line_breaks": true
          }
        },
        "question_id": "d14-q086",
        "primary_kc_id": "kc-judge-position-swap",
        "grading_method": "criterion_rubric",
        "question_version": 1,
        "cognitive_operation": "Analyze",
        "contributing_kc_ids": [],
        "estimated_difficulty": "medium"
      },
      {
        "servable": true,
        "role": "initial_check",
        "hints": [
          {
            "text": "Attribute nào được thay đổi có kiểm soát?",
            "hint_id": "h1",
            "after_attempt": 1
          }
        ],
        "module_id": "day14-g-judge",
        "max_points": 1,
        "interaction": {
          "type": "single_select",
          "prompt": "Bối cảnh:\nHai answer giữ nguyên facts và conclusion; bản B chỉ thêm heading, bullet và dài gấp đôi. Judge đổi từ FAIL sang PASS.\n\nCâu hỏi:\nProbe này cho evidence gì?",
          "choices": [
            {
              "text": "Có verbosity/format bias",
              "choice_id": "a"
            },
            {
              "text": "B chắc chắn factual hơn",
              "choice_id": "b"
            },
            {
              "text": "Position bias đã được chứng minh",
              "choice_id": "c"
            },
            {
              "text": "Self-preference giữa model family",
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
        "question_id": "d14-q087",
        "primary_kc_id": "kc-judge-verbosity-format-bias",
        "grading_method": "deterministic",
        "question_version": 1,
        "cognitive_operation": "Analyze",
        "contributing_kc_ids": [],
        "estimated_difficulty": "medium"
      },
      {
        "servable": false,
        "role": "reassessment",
        "hints": [
          {
            "text": "Probe chỉ có giá trị khi content target được kiểm soát.",
            "hint_id": "h1",
            "after_attempt": 1
          }
        ],
        "module_id": "day14-g-judge",
        "max_points": 4,
        "interaction": {
          "type": "short_text",
          "prompt": "Bối cảnh:\nJudge ưu tiên answer dài. Team tạo matched-content pairs chỉ khác bullet/prose và độ dài.\n\nCâu hỏi:\nThiết kế probe và mitigation.",
          "prompt_presentation": {
            "format": "sectioned_plain_text",
            "preserve_line_breaks": true
          }
        },
        "question_id": "d14-q088",
        "primary_kc_id": "kc-judge-verbosity-format-bias",
        "grading_method": "criterion_rubric",
        "question_version": 1,
        "cognitive_operation": "Create",
        "contributing_kc_ids": [],
        "estimated_difficulty": "hard"
      },
      {
        "servable": true,
        "role": "initial_check",
        "hints": [
          {
            "text": "Giữ quality target cố định và thay family/style relation với judge.",
            "hint_id": "h1",
            "after_attempt": 1
          }
        ],
        "module_id": "day14-g-judge",
        "max_points": 1,
        "interaction": {
          "type": "single_select",
          "prompt": "Bối cảnh:\nJudge J thuộc family X. Answer X và Y được human held-out chấm ngang nhau, nhưng J ưu tiên X ổn định.\n\nCâu hỏi:\nThiết kế xác nhận phù hợp nhất?",
          "choices": [
            {
              "text": "Controlled cross-family test với human labels",
              "choice_id": "a"
            },
            {
              "text": "Chỉ swap vị trí hai answer một lần",
              "choice_id": "b"
            },
            {
              "text": "Cho answer X dài hơn để dễ phân biệt",
              "choice_id": "c"
            },
            {
              "text": "Kết luận X tốt hơn vì judge cùng family hiểu nhau",
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
        "question_id": "d14-q089",
        "primary_kc_id": "kc-judge-self-preference-bias",
        "grading_method": "deterministic",
        "question_version": 1,
        "cognitive_operation": "Evaluate",
        "contributing_kc_ids": [],
        "estimated_difficulty": "hard"
      },
      {
        "servable": false,
        "role": "reassessment",
        "hints": [
          {
            "text": "Không quy mọi chênh lệch family thành quality.",
            "hint_id": "h1",
            "after_attempt": 1
          }
        ],
        "module_id": "day14-g-judge",
        "max_points": 4,
        "interaction": {
          "type": "short_text",
          "prompt": "Bối cảnh:\nBa author model family tạo answer trên cùng prompts; human gold chấm blind, hai judge family khác nhau chấm lại.\n\nCâu hỏi:\nThiết kế estimate affinity và escalation.",
          "prompt_presentation": {
            "format": "sectioned_plain_text",
            "preserve_line_breaks": true
          }
        },
        "question_id": "d14-q090",
        "primary_kc_id": "kc-judge-self-preference-bias",
        "grading_method": "criterion_rubric",
        "question_version": 1,
        "cognitive_operation": "Analyze",
        "contributing_kc_ids": [],
        "estimated_difficulty": "hard"
      },
      {
        "servable": true,
        "role": "initial_check",
        "hints": [
          {
            "text": "Mẫu số gồm toàn bộ case FAIL theo human gold.",
            "hint_id": "h1",
            "after_attempt": 1
          }
        ],
        "module_id": "day14-g-judge",
        "max_points": 1,
        "interaction": {
          "type": "numeric_input",
          "prompt": "Bối cảnh:\nHuman gold có 40 case FAIL. Judge bắt đúng 30 FAIL và bỏ sót 10 FAIL.\n\nCâu hỏi:\nTính TPR trên class FAIL.",
          "required_unit": "%",
          "prompt_presentation": {
            "format": "sectioned_plain_text",
            "preserve_line_breaks": true
          }
        },
        "question_id": "d14-q091",
        "primary_kc_id": "kc-judge-human-calibration",
        "grading_method": "deterministic",
        "question_version": 1,
        "cognitive_operation": "Apply",
        "contributing_kc_ids": [],
        "estimated_difficulty": "medium"
      },
      {
        "servable": false,
        "role": "reassessment",
        "hints": [
          {
            "text": "Đặt từng ô theo human gold trước khi tính rate.",
            "hint_id": "h1",
            "after_attempt": 1
          }
        ],
        "module_id": "day14-g-judge",
        "max_points": 4,
        "interaction": {
          "type": "short_text",
          "prompt": "Bối cảnh:\nHuman gold: 80 PASS, 20 FAIL. Judge: PASS đúng 72, FAIL đúng 12; còn lại là lỗi.\n\nCâu hỏi:\nCoi FAIL là positive: lập confusion matrix, tính TPR/TNR và đề xuất escalation.",
          "prompt_presentation": {
            "format": "sectioned_plain_text",
            "preserve_line_breaks": true
          }
        },
        "question_id": "d14-q092",
        "primary_kc_id": "kc-judge-human-calibration",
        "grading_method": "criterion_rubric",
        "question_version": 1,
        "cognitive_operation": "Analyze",
        "contributing_kc_ids": [],
        "estimated_difficulty": "hard"
      },
      {
        "servable": true,
        "role": "initial_check",
        "hints": [
          {
            "text": "Tính J rồi chia observed delta cho J.",
            "hint_id": "h1",
            "after_attempt": 1
          }
        ],
        "module_id": "day14-g-judge",
        "max_points": 1,
        "interaction": {
          "type": "numeric_input",
          "prompt": "Bối cảnh:\nJudge có TPR=0,8 và TNR=0,9 nên Youden J=0,7. Judge, prompt, test set và format distribution được giữ bất biến. Observed fail-rate delta giữa hai version là +7 điểm phần trăm. Dùng observed delta≈J×true delta.\n\nCâu hỏi:\nƯớc lượng true delta.",
          "required_unit": "điểm phần trăm",
          "prompt_presentation": {
            "format": "sectioned_plain_text",
            "preserve_line_breaks": true
          }
        },
        "question_id": "d14-q093",
        "primary_kc_id": "kc-judge-relative-delta-validity",
        "grading_method": "deterministic",
        "question_version": 1,
        "cognitive_operation": "Apply",
        "contributing_kc_ids": [],
        "estimated_difficulty": "hard"
      },
      {
        "servable": false,
        "role": "reassessment",
        "hints": [
          {
            "text": "Công thức không cứu được comparison confounded.",
            "hint_id": "h1",
            "after_attempt": 1
          }
        ],
        "module_id": "day14-g-judge",
        "max_points": 4,
        "interaction": {
          "type": "short_text",
          "prompt": "Bối cảnh:\nObserved fail rate v1=12%, v2=16%; judge J=0,5 nhưng prompt judge cũng đổi ở v2.\n\nCâu hỏi:\nCó được hiệu chỉnh delta thành 8 điểm phần trăm không?",
          "prompt_presentation": {
            "format": "sectioned_plain_text",
            "preserve_line_breaks": true
          }
        },
        "question_id": "d14-q094",
        "primary_kc_id": "kc-judge-relative-delta-validity",
        "grading_method": "criterion_rubric",
        "question_version": 1,
        "cognitive_operation": "Evaluate",
        "contributing_kc_ids": [],
        "estimated_difficulty": "hard"
      },
      {
        "servable": true,
        "role": "initial_check",
        "hints": [
          {
            "text": "Đếm judge không bằng đếm nguồn sai số độc lập.",
            "hint_id": "h1",
            "after_attempt": 1
          }
        ],
        "module_id": "day14-g-judge",
        "max_points": 1,
        "interaction": {
          "type": "single_select",
          "prompt": "Bối cảnh:\nBa judge dùng cùng model family, cùng prompt và cùng retrieved context; majority vote đồng thuận 3/3.\n\nCâu hỏi:\nKết luận nào đúng?",
          "choices": [
            {
              "text": "Có thể là correlated bias; cần calibration",
              "choice_id": "a"
            },
            {
              "text": "Ba phiếu luôn tương đương ba nguồn độc lập",
              "choice_id": "b"
            },
            {
              "text": "Majority vote tự sửa sampling kém",
              "choice_id": "c"
            },
            {
              "text": "Không cần tie/escalation vì số judge lẻ",
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
        "question_id": "d14-q095",
        "primary_kc_id": "kc-judge-panel-correlation",
        "grading_method": "deterministic",
        "question_version": 1,
        "cognitive_operation": "Evaluate",
        "contributing_kc_ids": [],
        "estimated_difficulty": "medium"
      },
      {
        "servable": false,
        "role": "reassessment",
        "hints": [
          {
            "text": "Majority count cần được đọc cùng error dependence.",
            "hint_id": "h1",
            "after_attempt": 1
          }
        ],
        "module_id": "day14-g-judge",
        "max_points": 4,
        "interaction": {
          "type": "short_text",
          "prompt": "Bối cảnh:\nPanel có hai judge độc lập tương đối và một judge gần như copy lỗi của judge 1; high-risk tie phải có human review.\n\nCâu hỏi:\nThiết kế aggregation và escalation.",
          "prompt_presentation": {
            "format": "sectioned_plain_text",
            "preserve_line_breaks": true
          }
        },
        "question_id": "d14-q096",
        "primary_kc_id": "kc-judge-panel-correlation",
        "grading_method": "criterion_rubric",
        "question_version": 1,
        "cognitive_operation": "Create",
        "contributing_kc_ids": [],
        "estimated_difficulty": "hard"
      },
      {
        "servable": true,
        "role": "follow_up",
        "hints": [
          {
            "text": "Các phiếu có thật sự độc lập về training/prompt/reference không?",
            "hint_id": "h1",
            "after_attempt": 1
          }
        ],
        "module_id": "day14-g-judge",
        "max_points": 1,
        "interaction": {
          "type": "single_select",
          "prompt": "Bối cảnh:\nNăm judge đều dùng cùng base model và prompt; cả năm cùng sai một safety case.\n\nCâu hỏi:\nThêm hai judge cùng cấu hình có giải quyết correlated bias không?",
          "choices": [
            {
              "text": "Không; cần diversity/calibration hoặc escalation",
              "choice_id": "a"
            },
            {
              "text": "Có; số phiếu tăng luôn giảm bias",
              "choice_id": "b"
            },
            {
              "text": "Có nếu majority là 7/7",
              "choice_id": "c"
            },
            {
              "text": "Không cần human vì panel đủ lớn",
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
        "question_id": "d14-q097",
        "primary_kc_id": "kc-judge-panel-correlation",
        "grading_method": "deterministic",
        "question_version": 1,
        "cognitive_operation": "Evaluate",
        "contributing_kc_ids": [],
        "estimated_difficulty": "easy"
      },
      {
        "servable": true,
        "role": "initial_check",
        "hints": [
          {
            "text": "Một tỷ lệ từ sample không phải point truth của population.",
            "hint_id": "h1",
            "after_attempt": 1
          }
        ],
        "module_id": "day14-g-stats",
        "max_points": 1,
        "interaction": {
          "type": "single_select",
          "prompt": "Bối cảnh:\nPass rate 72% trên n=25 case; report chỉ ghi `72%` mà không nói slice hay repeated-run policy.\n\nCâu hỏi:\nSửa report nào đúng?",
          "choices": [
            {
              "text": "Thêm CI, n, slice và run assumptions",
              "choice_id": "a"
            },
            {
              "text": "Ghi 72,00% để tăng precision",
              "choice_id": "b"
            },
            {
              "text": "Kết luận population pass rate đúng 72%",
              "choice_id": "c"
            },
            {
              "text": "Bỏ n để người đọc tập trung score",
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
        "question_id": "d14-q098",
        "primary_kc_id": "kc-eval-confidence-interval",
        "grading_method": "deterministic",
        "question_version": 1,
        "cognitive_operation": "Evaluate",
        "contributing_kc_ids": [],
        "estimated_difficulty": "medium"
      },
      {
        "servable": false,
        "role": "reassessment",
        "hints": [
          {
            "text": "CI phải được diễn giải trong design đã chạy.",
            "hint_id": "h1",
            "after_attempt": 1
          }
        ],
        "module_id": "day14-g-stats",
        "max_points": 4,
        "interaction": {
          "type": "short_text",
          "prompt": "Bối cảnh:\nVersion A pass 78% [70,84], B 82% [74,88] trên paired suite nhỏ; team muốn claim B tốt hơn.\n\nCâu hỏi:\nDiễn giải evidence và đề xuất next step.",
          "prompt_presentation": {
            "format": "sectioned_plain_text",
            "preserve_line_breaks": true
          }
        },
        "question_id": "d14-q099",
        "primary_kc_id": "kc-eval-confidence-interval",
        "grading_method": "criterion_rubric",
        "question_version": 1,
        "cognitive_operation": "Evaluate",
        "contributing_kc_ids": [],
        "estimated_difficulty": "hard"
      },
      {
        "servable": true,
        "role": "follow_up",
        "hints": [
          {
            "text": "Khoảng uncertainty có loại trừ zero không?",
            "hint_id": "h1",
            "after_attempt": 1
          }
        ],
        "module_id": "day14-g-stats",
        "max_points": 1,
        "interaction": {
          "type": "single_select",
          "prompt": "Bối cảnh:\nVersion A 80% và B 82% nhưng interval của delta là [−4,+8] điểm phần trăm.\n\nCâu hỏi:\nCó thể claim B tốt hơn chưa?",
          "choices": [
            {
              "text": "Chưa; CI delta còn gồm zero",
              "choice_id": "a"
            },
            {
              "text": "Có; point estimate B cao hơn",
              "choice_id": "b"
            },
            {
              "text": "Có nếu làm tròn A xuống",
              "choice_id": "c"
            },
            {
              "text": "Chưa vì CI không bao giờ dùng cho eval",
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
        "question_id": "d14-q100",
        "primary_kc_id": "kc-eval-confidence-interval",
        "grading_method": "deterministic",
        "question_version": 1,
        "cognitive_operation": "Evaluate",
        "contributing_kc_ids": [],
        "estimated_difficulty": "easy"
      },
      {
        "servable": true,
        "role": "initial_check",
        "hints": [
          {
            "text": "Mỗi slice là một study nhỏ với sample size riêng.",
            "hint_id": "h1",
            "after_attempt": 1
          }
        ],
        "module_id": "day14-g-stats",
        "max_points": 1,
        "interaction": {
          "type": "single_select",
          "prompt": "Bối cảnh:\nSuite có 2.000 case tổng nhưng critical Vietnamese slice chỉ có 18 case; target là phát hiện regression 4 điểm phần trăm trong slice.\n\nCâu hỏi:\nKết luận nào đúng?",
          "choices": [
            {
              "text": "Phải size theo effect và critical slice",
              "choice_id": "a"
            },
            {
              "text": "2.000 luôn đủ cho mọi slice",
              "choice_id": "b"
            },
            {
              "text": "Chỉ cần tăng số seed, không cần thêm case slice",
              "choice_id": "c"
            },
            {
              "text": "Dùng một magic number 100 cho mọi baseline",
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
        "question_id": "d14-q101",
        "primary_kc_id": "kc-eval-sample-size-power",
        "grading_method": "deterministic",
        "question_version": 1,
        "cognitive_operation": "Evaluate",
        "contributing_kc_ids": [],
        "estimated_difficulty": "medium"
      },
      {
        "servable": false,
        "role": "reassessment",
        "hints": [
          {
            "text": "Không có một case count phổ quát.",
            "hint_id": "h1",
            "after_attempt": 1
          }
        ],
        "module_id": "day14-g-stats",
        "max_points": 4,
        "interaction": {
          "type": "short_text",
          "prompt": "Bối cảnh:\nCritical slice baseline 70%; team muốn phát hiện minimum effect 5 điểm với power 80%, nhưng hiện chỉ có 25 case.\n\nCâu hỏi:\nNêu inputs cần cho sizing và action.",
          "prompt_presentation": {
            "format": "sectioned_plain_text",
            "preserve_line_breaks": true
          }
        },
        "question_id": "d14-q102",
        "primary_kc_id": "kc-eval-sample-size-power",
        "grading_method": "criterion_rubric",
        "question_version": 1,
        "cognitive_operation": "Analyze",
        "contributing_kc_ids": [],
        "estimated_difficulty": "hard"
      },
      {
        "servable": true,
        "role": "initial_check",
        "hints": [
          {
            "text": "Version difference và case difference phải được tách ra.",
            "hint_id": "h1",
            "after_attempt": 1
          }
        ],
        "module_id": "day14-g-stats",
        "max_points": 3,
        "interaction": {
          "left": [
            {
              "id": "x1",
              "text": "Cùng case cho cả hai version"
            },
            {
              "id": "x2",
              "text": "Mỗi version dùng tập case khác"
            },
            {
              "id": "x3",
              "text": "Mỗi case chạy nhiều seed theo policy"
            }
          ],
          "type": "matching",
          "right": [
            {
              "id": "r1",
              "text": "Paired comparison hợp lệ"
            },
            {
              "id": "r2",
              "text": "Confounded bởi case difficulty"
            },
            {
              "id": "r3",
              "text": "Đo run variability"
            }
          ],
          "prompt": "Bối cảnh:\nSo v1 và v2 trên hệ nondeterministic.\n\nCâu hỏi:\nGhép design với đánh giá.",
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
        "question_id": "d14-q103",
        "primary_kc_id": "kc-paired-eval-comparison-design",
        "grading_method": "deterministic",
        "question_version": 1,
        "cognitive_operation": "Analyze",
        "contributing_kc_ids": [],
        "estimated_difficulty": "medium"
      },
      {
        "servable": false,
        "role": "reassessment",
        "hints": [
          {
            "text": "Nondeterminism control phải đối xứng.",
            "hint_id": "h1",
            "after_attempt": 1
          }
        ],
        "module_id": "day14-g-stats",
        "max_points": 4,
        "interaction": {
          "type": "short_text",
          "prompt": "Bối cảnh:\nV1 và v2 chạy trên cùng 100 case, nhưng v1 một run còn v2 chọn best-of-3.\n\nCâu hỏi:\nSửa protocol để comparison hợp lệ.",
          "prompt_presentation": {
            "format": "sectioned_plain_text",
            "preserve_line_breaks": true
          }
        },
        "question_id": "d14-q104",
        "primary_kc_id": "kc-paired-eval-comparison-design",
        "grading_method": "criterion_rubric",
        "question_version": 1,
        "cognitive_operation": "Create",
        "contributing_kc_ids": [],
        "estimated_difficulty": "hard"
      },
      {
        "servable": true,
        "role": "initial_check",
        "hints": [
          {
            "text": "Chỉ cộng hai ô hai version cho kết quả khác nhau.",
            "hint_id": "h1",
            "after_attempt": 1
          }
        ],
        "module_id": "day14-g-stats",
        "max_points": 1,
        "interaction": {
          "type": "numeric_input",
          "prompt": "Bối cảnh:\nPaired table có old-pass/new-fail b=10 và old-fail/new-pass c=22. Hai ô concordant tổng 168.\n\nCâu hỏi:\nCó bao nhiêu discordant pair đi vào McNemar/exact-binomial test?",
          "required_unit": "pair",
          "prompt_presentation": {
            "format": "sectioned_plain_text",
            "preserve_line_breaks": true
          }
        },
        "question_id": "d14-q105",
        "primary_kc_id": "kc-mcnemar-discordant-pair-test",
        "grading_method": "deterministic",
        "question_version": 1,
        "cognitive_operation": "Apply",
        "contributing_kc_ids": [],
        "estimated_difficulty": "easy"
      },
      {
        "servable": false,
        "role": "reassessment",
        "hints": [
          {
            "text": "Đọc hướng và uncertainty tách biệt.",
            "hint_id": "h1",
            "after_attempt": 1
          }
        ],
        "module_id": "day14-g-stats",
        "max_points": 4,
        "interaction": {
          "type": "short_text",
          "prompt": "Bối cảnh:\nTrong 78 discordant case, old-pass/new-fail=34 và old-fail/new-pass=44; exact binomial two-sided p=0,31 được cung cấp.\n\nCâu hỏi:\nDiễn giải kết quả và giới hạn.",
          "prompt_presentation": {
            "format": "sectioned_plain_text",
            "preserve_line_breaks": true
          }
        },
        "question_id": "d14-q106",
        "primary_kc_id": "kc-mcnemar-discordant-pair-test",
        "grading_method": "criterion_rubric",
        "question_version": 1,
        "cognitive_operation": "Evaluate",
        "contributing_kc_ids": [],
        "estimated_difficulty": "hard"
      },
      {
        "servable": true,
        "role": "follow_up",
        "hints": [
          {
            "text": "Test có bao nhiêu sample thực sự mang hướng thay đổi?",
            "hint_id": "h1",
            "after_attempt": 1
          }
        ],
        "module_id": "day14-g-stats",
        "max_points": 1,
        "interaction": {
          "type": "single_select",
          "prompt": "Bối cảnh:\nChỉ có 5 discordant pair và cả 5 đều nghiêng về new; exact two-sided p_min≈0,063.\n\nCâu hỏi:\nKết luận ở alpha=0,05?",
          "choices": [
            {
              "text": "Chưa; discordant sample quá nhỏ",
              "choice_id": "a"
            },
            {
              "text": "New chắc chắn tốt hơn vì thắng 5/5",
              "choice_id": "b"
            },
            {
              "text": "Dùng concordant pairs để hạ p-value",
              "choice_id": "c"
            },
            {
              "text": "Bỏ pairing và dùng mean",
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
        "question_id": "d14-q107",
        "primary_kc_id": "kc-mcnemar-discordant-pair-test",
        "grading_method": "deterministic",
        "question_version": 1,
        "cognitive_operation": "Evaluate",
        "contributing_kc_ids": [],
        "estimated_difficulty": "medium"
      },
      {
        "servable": true,
        "role": "initial_check",
        "hints": [
          {
            "text": "P-value trả lời câu hỏi khác effect size, cost và safety.",
            "hint_id": "h1",
            "after_attempt": 1
          }
        ],
        "module_id": "day14-g-stats",
        "max_points": 1,
        "interaction": {
          "type": "single_select",
          "prompt": "Bối cảnh:\nCandidate có p\u003C0,01 và aggregate pass rate +0,3 điểm phần trăm, nhưng critical safety slice giảm 5 điểm và cost tăng 50%.\n\nCâu hỏi:\nRelease recommendation nào hợp lý?",
          "choices": [
            {
              "text": "Không release vì safety regression",
              "choice_id": "a"
            },
            {
              "text": "Release vì p-value nhỏ",
              "choice_id": "b"
            },
            {
              "text": "Release vì aggregate delta dương",
              "choice_id": "c"
            },
            {
              "text": "Bỏ safety slice vì sample nhỏ",
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
        "question_id": "d14-q108",
        "primary_kc_id": "kc-statistical-practical-release-decision",
        "grading_method": "deterministic",
        "question_version": 1,
        "cognitive_operation": "Evaluate",
        "contributing_kc_ids": [],
        "estimated_difficulty": "medium"
      },
      {
        "servable": false,
        "role": "reassessment",
        "hints": [
          {
            "text": "Recommendation phải phản ánh cả value và uncertainty.",
            "hint_id": "h1",
            "after_attempt": 1
          }
        ],
        "module_id": "day14-g-stats",
        "max_points": 4,
        "interaction": {
          "type": "short_text",
          "prompt": "Bối cảnh:\nCandidate +4 điểm pass rate, CI delta [−1,+9], cost giảm 20%, critical slice không regress trong sample nhỏ.\n\nCâu hỏi:\nĐưa release recommendation có điều kiện.",
          "prompt_presentation": {
            "format": "sectioned_plain_text",
            "preserve_line_breaks": true
          }
        },
        "question_id": "d14-q109",
        "primary_kc_id": "kc-statistical-practical-release-decision",
        "grading_method": "criterion_rubric",
        "question_version": 1,
        "cognitive_operation": "Evaluate",
        "contributing_kc_ids": [],
        "estimated_difficulty": "hard"
      },
      {
        "servable": true,
        "role": "initial_check",
        "hints": [
          {
            "text": "Question là cần dataset metric, CI assertion hay production trace workflow.",
            "hint_id": "h1",
            "after_attempt": 1
          }
        ],
        "module_id": "day14-g-production",
        "max_points": 3,
        "interaction": {
          "left": [
            {
              "id": "x1",
              "text": "RAG metric suite trên dataset"
            },
            {
              "id": "x2",
              "text": "Eval assertions trong CI kiểu pytest"
            },
            {
              "id": "x3",
              "text": "Online trace + feedback exploration"
            }
          ],
          "type": "matching",
          "right": [
            {
              "id": "r1",
              "text": "RAG evaluation library"
            },
            {
              "id": "r2",
              "text": "LLM test framework"
            },
            {
              "id": "r3",
              "text": "Trace-feedback platform"
            }
          ],
          "prompt": "Bối cảnh:\nBa workflow cần công cụ khác nhau.\n\nCâu hỏi:\nGhép workflow với framework fit chính.",
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
        "question_id": "d14-q110",
        "primary_kc_id": "kc-eval-framework-selection",
        "grading_method": "deterministic",
        "question_version": 1,
        "cognitive_operation": "Apply",
        "contributing_kc_ids": [],
        "estimated_difficulty": "medium"
      },
      {
        "servable": false,
        "role": "reassessment",
        "hints": [
          {
            "text": "Tool selection phải có exit path và evidence cùng benchmark.",
            "hint_id": "h1",
            "after_attempt": 1
          }
        ],
        "module_id": "day14-g-production",
        "max_points": 4,
        "interaction": {
          "type": "short_text",
          "prompt": "Bối cảnh:\nTeam cần offline RAG metrics, CI assertions và production trace feedback nhưng không muốn lock-in.\n\nCâu hỏi:\nLập primary/fallback architecture.",
          "prompt_presentation": {
            "format": "sectioned_plain_text",
            "preserve_line_breaks": true
          }
        },
        "question_id": "d14-q111",
        "primary_kc_id": "kc-eval-framework-selection",
        "grading_method": "criterion_rubric",
        "question_version": 1,
        "cognitive_operation": "Evaluate",
        "contributing_kc_ids": [],
        "estimated_difficulty": "hard"
      },
      {
        "servable": true,
        "role": "initial_check",
        "hints": [
          {
            "text": "Đầu tiên loại architecture vi phạm constraint bắt buộc.",
            "hint_id": "h1",
            "after_attempt": 1
          }
        ],
        "module_id": "day14-g-production",
        "max_points": 1,
        "interaction": {
          "type": "single_select",
          "prompt": "Bối cảnh:\nA: quality 0,91, P95 latency 8s, cost $0,12. B: quality 0,89, P95 2s, cost $0,03. Service constraint là P95≤3s và cost≤$0,05; quality floor=0,88.\n\nCâu hỏi:\nOperating point nào feasible?",
          "choices": [
            {
              "text": "B, vì đạt cả ba constraint đã công bố",
              "choice_id": "a"
            },
            {
              "text": "A, vì quality cao nhất bất kể latency/cost",
              "choice_id": "b"
            },
            {
              "text": "Lấy average ba số chưa normalize",
              "choice_id": "c"
            },
            {
              "text": "Không thể quyết định dù constraint đã đủ",
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
        "question_id": "d14-q112",
        "primary_kc_id": "kc-production-quality-latency-cost",
        "grading_method": "deterministic",
        "question_version": 1,
        "cognitive_operation": "Apply",
        "contributing_kc_ids": [],
        "estimated_difficulty": "medium"
      },
      {
        "servable": false,
        "role": "reassessment",
        "hints": [
          {
            "text": "Decision đa mục tiêu cần constraint theo service context.",
            "hint_id": "h1",
            "after_attempt": 1
          }
        ],
        "module_id": "day14-g-production",
        "max_points": 4,
        "interaction": {
          "type": "short_text",
          "prompt": "Bối cảnh:\nBa architecture nằm trên Pareto frontier; không cái nào tốt nhất cả quality, P95 latency và cost. Chưa có constraint riêng cho premium và free tier.\n\nCâu hỏi:\nNêu quy trình và dữ kiện cần có để chọn operating point cho từng tier.",
          "prompt_presentation": {
            "format": "sectioned_plain_text",
            "preserve_line_breaks": true
          }
        },
        "question_id": "d14-q113",
        "primary_kc_id": "kc-production-quality-latency-cost",
        "grading_method": "criterion_rubric",
        "question_version": 1,
        "cognitive_operation": "Evaluate",
        "contributing_kc_ids": [],
        "estimated_difficulty": "hard"
      },
      {
        "servable": true,
        "role": "initial_check",
        "hints": [
          {
            "text": "User chờ ở trước hay sau khi stream bắt đầu?",
            "hint_id": "h1",
            "after_attempt": 1
          }
        ],
        "module_id": "day14-g-production",
        "max_points": 1,
        "interaction": {
          "type": "single_select",
          "prompt": "Bối cảnh:\nStreaming response có TTFT=3,2s nhưng sau đó TPS=20; user phàn nàn chờ lâu trước khi thấy chữ đầu.\n\nCâu hỏi:\nMetric/stage nào cần ưu tiên điều tra?",
          "choices": [
            {
              "text": "Ưu tiên TTFT và pre-token stages",
              "choice_id": "a"
            },
            {
              "text": "TPS vì 20 token/s quá thấp theo dữ kiện",
              "choice_id": "b"
            },
            {
              "text": "Chỉ total token count",
              "choice_id": "c"
            },
            {
              "text": "Task completion vì TPS tự đo success",
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
        "question_id": "d14-q114",
        "primary_kc_id": "kc-production-ttft-tps",
        "grading_method": "deterministic",
        "question_version": 1,
        "cognitive_operation": "Analyze",
        "contributing_kc_ids": [],
        "estimated_difficulty": "medium"
      },
      {
        "servable": false,
        "role": "reassessment",
        "hints": [
          {
            "text": "Giữ đúng denominator stage của từng metric.",
            "hint_id": "h1",
            "after_attempt": 1
          }
        ],
        "module_id": "day14-g-production",
        "max_points": 4,
        "interaction": {
          "type": "short_text",
          "prompt": "Bối cảnh:\nResponse có TTFT=0,8s, sinh thêm 180 token trong 12s sau first token và total task latency=15s.\n\nCâu hỏi:\nTính TPS và diễn giải ba metric.",
          "prompt_presentation": {
            "format": "sectioned_plain_text",
            "preserve_line_breaks": true
          }
        },
        "question_id": "d14-q115",
        "primary_kc_id": "kc-production-ttft-tps",
        "grading_method": "criterion_rubric",
        "question_version": 1,
        "cognitive_operation": "Apply",
        "contributing_kc_ids": [],
        "estimated_difficulty": "medium"
      },
      {
        "servable": true,
        "role": "follow_up",
        "hints": [
          {
            "text": "Complaint xuất hiện trước hay sau khi chữ đầu tiên đã hiện?",
            "hint_id": "h1",
            "after_attempt": 1
          }
        ],
        "module_id": "day14-g-production",
        "max_points": 1,
        "interaction": {
          "type": "single_select",
          "prompt": "Bối cảnh:\nTTFT=0,6s, TPS=2 và user thấy AI viết từng chữ rất chậm sau khi stream bắt đầu.\n\nCâu hỏi:\nMetric nào khớp complaint?",
          "choices": [
            {
              "text": "TPS thấp",
              "choice_id": "a"
            },
            {
              "text": "TTFT cao",
              "choice_id": "b"
            },
            {
              "text": "Chỉ total request count",
              "choice_id": "c"
            },
            {
              "text": "MAP retrieval",
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
        "question_id": "d14-q116",
        "primary_kc_id": "kc-production-ttft-tps",
        "grading_method": "deterministic",
        "question_version": 1,
        "cognitive_operation": "Analyze",
        "contributing_kc_ids": [],
        "estimated_difficulty": "easy"
      },
      {
        "servable": true,
        "role": "initial_check",
        "hints": [
          {
            "text": "Tính từng cost component trước khi cộng.",
            "hint_id": "h1",
            "after_attempt": 1
          }
        ],
        "module_id": "day14-g-production",
        "max_points": 1,
        "interaction": {
          "type": "numeric_input",
          "prompt": "Bối cảnh:\nMột run có 500 deterministic checks giá $0; 200 judge calls giá $0,02/call; 20 human reviews giá $2/review. Bỏ qua chi phí khác.\n\nCâu hỏi:\nTính tổng direct evaluation cost.",
          "required_unit": "USD",
          "prompt_presentation": {
            "format": "sectioned_plain_text",
            "preserve_line_breaks": true
          }
        },
        "question_id": "d14-q117",
        "primary_kc_id": "kc-eval-cost-allocation",
        "grading_method": "deterministic",
        "question_version": 1,
        "cognitive_operation": "Apply",
        "contributing_kc_ids": [],
        "estimated_difficulty": "easy"
      },
      {
        "servable": false,
        "role": "reassessment",
        "hints": [
          {
            "text": "Đừng double-count hoặc âm thầm bỏ escalation.",
            "hint_id": "h1",
            "after_attempt": 1
          }
        ],
        "module_id": "day14-g-production",
        "max_points": 4,
        "interaction": {
          "type": "short_text",
          "prompt": "Bối cảnh:\n10.000 case: deterministic check toàn bộ; 20% cần judge $0,01; 2% cần human $1,50. Judge uncertain 5% được human escalate và nằm ngoài 2% base.\n\nCâu hỏi:\nTính direct cost và đề xuất tiết kiệm không mất declared coverage.",
          "prompt_presentation": {
            "format": "sectioned_plain_text",
            "preserve_line_breaks": true
          }
        },
        "question_id": "d14-q118",
        "primary_kc_id": "kc-eval-cost-allocation",
        "grading_method": "criterion_rubric",
        "question_version": 1,
        "cognitive_operation": "Apply",
        "contributing_kc_ids": [],
        "estimated_difficulty": "hard"
      },
      {
        "servable": true,
        "role": "initial_check",
        "hints": [
          {
            "text": "Một aggregate win có thể che regression nào?",
            "hint_id": "h1",
            "after_attempt": 1
          }
        ],
        "module_id": "day14-g-production",
        "max_points": 4,
        "interaction": {
          "type": "multi_select",
          "prompt": "Bối cảnh:\nCandidate được so với baseline trên suite đã pin.\n\nCâu hỏi:\nChọn các điều kiện cần có trong release gate tái lập.",
          "choices": [
            {
              "text": "Baseline và suite version",
              "choice_id": "a"
            },
            {
              "text": "Same-case metric delta",
              "choice_id": "b"
            },
            {
              "text": "Critical-slice/guardrail threshold",
              "choice_id": "c"
            },
            {
              "text": "Uncertainty handling và deterministic action",
              "choice_id": "d"
            },
            {
              "text": "Chỉ aggregate score mới nhất",
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
        "question_id": "d14-q119",
        "primary_kc_id": "kc-regression-release-gate",
        "grading_method": "deterministic",
        "question_version": 1,
        "cognitive_operation": "Analyze",
        "contributing_kc_ids": [],
        "estimated_difficulty": "hard"
      },
      {
        "servable": false,
        "role": "reassessment",
        "hints": [
          {
            "text": "Gate là decision contract, không phải score summary.",
            "hint_id": "h1",
            "after_attempt": 1
          }
        ],
        "module_id": "day14-g-production",
        "max_points": 4,
        "interaction": {
          "type": "short_text",
          "prompt": "Bối cảnh:\nAggregate north-star +2 điểm; safety slice −3 điểm vượt block threshold −1; CI của aggregate còn rộng; cost đạt budget.\n\nCâu hỏi:\nÁp gate và ghi deterministic action.",
          "prompt_presentation": {
            "format": "sectioned_plain_text",
            "preserve_line_breaks": true
          }
        },
        "question_id": "d14-q120",
        "primary_kc_id": "kc-regression-release-gate",
        "grading_method": "criterion_rubric",
        "question_version": 1,
        "cognitive_operation": "Evaluate",
        "contributing_kc_ids": [],
        "estimated_difficulty": "hard"
      },
      {
        "servable": true,
        "role": "initial_check",
        "hints": [
          {
            "text": "Semantic difference chưa tự là regression.",
            "hint_id": "h1",
            "after_attempt": 1
          }
        ],
        "module_id": "day14-g-production",
        "max_points": 1,
        "interaction": {
          "type": "ordering",
          "prompt": "Bối cảnh:\nCandidate agent cần validation trước khi phục vụ toàn traffic.\n\nCâu hỏi:\nSắp rollout evidence path.",
          "options": [
            {
              "text": "Mirror paired shadow traffic, không trả candidate output",
              "option_id": "o1"
            },
            {
              "text": "Triage semantic diff như review signal",
              "option_id": "o2"
            },
            {
              "text": "Canary theo stage có attribution và guardrail",
              "option_id": "o3"
            },
            {
              "text": "Rollback khi trigger đã định bị breach",
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
        "question_id": "d14-q121",
        "primary_kc_id": "kc-shadow-semantic-diff-validation",
        "grading_method": "deterministic",
        "question_version": 1,
        "cognitive_operation": "Analyze",
        "contributing_kc_ids": [],
        "estimated_difficulty": "medium"
      },
      {
        "servable": false,
        "role": "reassessment",
        "hints": [
          {
            "text": "Không đổi agent và evaluator mà thiếu version attribution.",
            "hint_id": "h1",
            "after_attempt": 1
          }
        ],
        "module_id": "day14-g-production",
        "max_points": 4,
        "interaction": {
          "type": "short_text",
          "prompt": "Bối cảnh:\nShadow candidate khác baseline 18% output, nhưng judge rubric cũng được nâng version cùng lúc; chưa có user exposure.\n\nCâu hỏi:\nThiết kế attribution và staged rollout tiếp theo.",
          "prompt_presentation": {
            "format": "sectioned_plain_text",
            "preserve_line_breaks": true
          }
        },
        "question_id": "d14-q122",
        "primary_kc_id": "kc-shadow-semantic-diff-validation",
        "grading_method": "criterion_rubric",
        "question_version": 1,
        "cognitive_operation": "Create",
        "contributing_kc_ids": [],
        "estimated_difficulty": "hard"
      },
      {
        "servable": true,
        "role": "initial_check",
        "hints": [
          {
            "text": "Tên component không phải root cause nếu chưa có evidence chain.",
            "hint_id": "h1",
            "after_attempt": 1
          }
        ],
        "module_id": "day14-g-improvement",
        "max_points": 1,
        "interaction": {
          "type": "ordering",
          "prompt": "Bối cảnh:\nAgent trả refund policy cũ; trace cho thấy retrieved chunk cũng cũ.\n\nCâu hỏi:\nSắp evidence chain để tìm stage sửa được.",
          "options": [
            {
              "text": "Xác nhận symptom và expected evidence",
              "option_id": "o1"
            },
            {
              "text": "Đọc retrieved chunk/tool trace",
              "option_id": "o2"
            },
            {
              "text": "Kiểm index/corpus/config upstream",
              "option_id": "o3"
            },
            {
              "text": "Test alternative cause và chọn fix",
              "option_id": "o4"
            },
            {
              "text": "Đặt verification metric sau fix",
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
        "question_id": "d14-q123",
        "primary_kc_id": "kc-eval-failure-five-whys",
        "grading_method": "deterministic",
        "question_version": 1,
        "cognitive_operation": "Analyze",
        "contributing_kc_ids": [],
        "estimated_difficulty": "hard"
      },
      {
        "servable": false,
        "role": "reassessment",
        "hints": [
          {
            "text": "Không patch từng answer hoặc đổi model chung chung.",
            "hint_id": "h1",
            "after_attempt": 1
          }
        ],
        "module_id": "day14-g-improvement",
        "max_points": 4,
        "interaction": {
          "type": "short_text",
          "prompt": "Bối cảnh:\nMười failure `wrong answer`; 7 case retrieved stale policy, 3 case retrieval đúng nhưng prompt bỏ condition.\n\nCâu hỏi:\nDựng root-cause analysis và fix verification.",
          "prompt_presentation": {
            "format": "sectioned_plain_text",
            "preserve_line_breaks": true
          }
        },
        "question_id": "d14-q124",
        "primary_kc_id": "kc-eval-failure-five-whys",
        "grading_method": "criterion_rubric",
        "question_version": 1,
        "cognitive_operation": "Analyze",
        "contributing_kc_ids": [],
        "estimated_difficulty": "hard"
      },
      {
        "servable": true,
        "role": "initial_check",
        "hints": [
          {
            "text": "Chỉ promote sau khi cause/fix đã được xác nhận.",
            "hint_id": "h1",
            "after_attempt": 1
          }
        ],
        "module_id": "day14-g-improvement",
        "max_points": 1,
        "interaction": {
          "type": "ordering",
          "prompt": "Bối cảnh:\nRoot cause đã được verify và systemic fix đã qua test.\n\nCâu hỏi:\nSắp promotion path cho regression case.",
          "options": [
            {
              "text": "Chọn failure đại diện đã confirmed",
              "option_id": "o1"
            },
            {
              "text": "Encode oracle, evidence, slice và provenance",
              "option_id": "o2"
            },
            {
              "text": "Bump benchmark version thay vì sửa âm thầm",
              "option_id": "o3"
            },
            {
              "text": "Chạy fixed case và neighboring cases để verify",
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
        "question_id": "d14-q125",
        "primary_kc_id": "kc-regression-case-promotion-loop",
        "grading_method": "deterministic",
        "question_version": 1,
        "cognitive_operation": "Apply",
        "contributing_kc_ids": [],
        "estimated_difficulty": "medium"
      },
      {
        "servable": false,
        "role": "reassessment",
        "hints": [
          {
            "text": "Promotion không được biến một pass thành bằng chứng phổ quát.",
            "hint_id": "h1",
            "after_attempt": 1
          }
        ],
        "module_id": "day14-g-improvement",
        "max_points": 4,
        "interaction": {
          "type": "short_text",
          "prompt": "Bối cảnh:\nSau fix stale-index, một failure đại diện pass; neighboring multilingual case lại fail.\n\nCâu hỏi:\nQuyết định promotion và verification tiếp theo.",
          "prompt_presentation": {
            "format": "sectioned_plain_text",
            "preserve_line_breaks": true
          }
        },
        "question_id": "d14-q126",
        "primary_kc_id": "kc-regression-case-promotion-loop",
        "grading_method": "criterion_rubric",
        "question_version": 1,
        "cognitive_operation": "Evaluate",
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

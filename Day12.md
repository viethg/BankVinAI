{
  "course_id": "K4P1",
  "day_code": "day_4b04815f6b2c199c",
  "public_code": "D16",
  "version_id": "ac15895b-b9a1-465f-9e2c-55d219f30846",
  "version_no": 10,
  "synthesized": false,
  "lesson": {
    "index": 12,
    "title": "Day12-cloud-services-and-deployment",
    "subtitle": null,
    "slides_url": "/api/v1/content/days/day_4b04815f6b2c199c/slides.pdf",
    "modules": [
      {
        "module_id": "day",
        "title": "Slides",
        "kind": "lesson",
        "from": 0,
        "to": 4,
        "sections": [
          {
            "section_id": "day-slides",
            "title": "Slides",
            "kind": "theory",
            "from": 0,
            "to": 4
          }
        ]
      },
      {
        "module_id": "codelab-54106b3009824f10ac0073831cec3727",
        "title": "Lab 12 - 3B — Cloud Services & Deployment",
        "kind": "lab",
        "from": 4,
        "to": 18,
        "sections": [
          {
            "section_id": "codelab-54106b3009824f10ac0073831cec3727-s01",
            "title": "Bài toán và mục tiêu",
            "kind": "practice",
            "from": 4,
            "to": 5
          },
          {
            "section_id": "codelab-54106b3009824f10ac0073831cec3727-s02",
            "title": "Hình thức và starter repository",
            "kind": "practice",
            "from": 5,
            "to": 6
          },
          {
            "section_id": "codelab-54106b3009824f10ac0073831cec3727-s03",
            "title": "Chuẩn bị môi trường",
            "kind": "practice",
            "from": 6,
            "to": 7
          },
          {
            "section_id": "codelab-54106b3009824f10ac0073831cec3727-s04",
            "title": "Tiến độ 240 phút",
            "kind": "practice",
            "from": 7,
            "to": 8
          },
          {
            "section_id": "codelab-54106b3009824f10ac0073831cec3727-s05",
            "title": "CP0 — Setup và baseline",
            "kind": "practice",
            "from": 8,
            "to": 9
          },
          {
            "section_id": "codelab-54106b3009824f10ac0073831cec3727-s06",
            "title": "CP1 — 12-Factor Config, Health và Logging",
            "kind": "practice",
            "from": 9,
            "to": 10
          },
          {
            "section_id": "codelab-54106b3009824f10ac0073831cec3727-s07",
            "title": "CP2 — Docker production-ready",
            "kind": "practice",
            "from": 10,
            "to": 11
          },
          {
            "section_id": "codelab-54106b3009824f10ac0073831cec3727-s08",
            "title": "CP3 — API Security và Cost Guard",
            "kind": "practice",
            "from": 11,
            "to": 12
          },
          {
            "section_id": "codelab-54106b3009824f10ac0073831cec3727-s09",
            "title": "CP4 — Scaling và Reliability",
            "kind": "practice",
            "from": 12,
            "to": 13
          },
          {
            "section_id": "codelab-54106b3009824f10ac0073831cec3727-s10",
            "title": "CP5 — Deploy lên cloud",
            "kind": "practice",
            "from": 13,
            "to": 14
          },
          {
            "section_id": "codelab-54106b3009824f10ac0073831cec3727-s11",
            "title": "Exercises và tự chấm",
            "kind": "practice",
            "from": 14,
            "to": 15
          },
          {
            "section_id": "codelab-54106b3009824f10ac0073831cec3727-s12",
            "title": "Bonus — CI/CD với GitHub Actions",
            "kind": "practice",
            "from": 15,
            "to": 16
          },
          {
            "section_id": "codelab-54106b3009824f10ac0073831cec3727-s13",
            "title": "Kiểm tra và nộp bài",
            "kind": "practice",
            "from": 16,
            "to": 18
          }
        ]
      }
    ],
    "parts": [
      {
        "id": "day-slides-material_mu0w5gvk_w0vmuk",
        "type": "slide",
        "title": "day12-deployment-dua-agent-len-cloud",
        "duration_min": null,
        "ai_prompts": [],
        "status": "current",
        "body": {
          "material_id": "material_mu0w5gvk_w0vmuk",
          "page_from": 1,
          "page_to": 104,
          "notes": null,
          "deck_url": "/api/v1/documents/K4P1/Lecture_material_mu0w5gvk_w0vmuk/material_mu0w5gvk_w0vmuk/stream",
          "deck_cdn_url": "https://slides.vlearn.dev/slides/k4p1/Lecture_material_mu0w5gvk_w0vmuk/material_mu0w5gvk_w0vmuk/0b6c4d2197f01d029a3b525be765da1a79b1e0b459b797d6e601edbd77239f4d.pdf?exp=1792168007&sub=728ae799387402308487372bea160411&sig=sJR3r1sfYP6ZetFkV3QSGD1s4fR-ghJ3UlkwkYkeN1E"
        }
      },
      {
        "id": "day-slides-material_mu0w5kfc_0t6dvk",
        "type": "slide",
        "title": "batch02-day12-cloud-services-and-deployment 16.31.52",
        "duration_min": null,
        "ai_prompts": [],
        "status": "todo",
        "body": {
          "material_id": "material_mu0w5kfc_0t6dvk",
          "page_from": 1,
          "page_to": 60,
          "notes": null,
          "deck_url": "/api/v1/documents/K4P1/Lecture_material_mu0w5kfc_0t6dvk/material_mu0w5kfc_0t6dvk/stream",
          "deck_cdn_url": "https://slides.vlearn.dev/slides/k4p1/Lecture_material_mu0w5kfc_0t6dvk/material_mu0w5kfc_0t6dvk/8e3d35a48dfabbfad367f821adec254950e40e75220d0f2b6c319440a3256352.pdf?exp=1792168007&sub=728ae799387402308487372bea160411&sig=5MBPukrykQbXiCbdMXdTm6Zf-HY3-GXgzNvjTcgTOD8"
        }
      },
      {
        "id": "slide-1",
        "type": "slide",
        "title": "Part 3",
        "duration_min": null,
        "ai_prompts": [],
        "status": "todo",
        "body": {
          "material_id": "material_muklmkps_bo8sql",
          "page_from": 1,
          "page_to": 74,
          "notes": null,
          "deck_url": "/api/v1/documents/K4P1/Lecture_material_muklmkps_bo8sql/material_muklmkps_bo8sql/stream",
          "deck_cdn_url": "https://slides.vlearn.dev/slides/k4p1/Lecture_material_muklmkps_bo8sql/material_muklmkps_bo8sql/2c80c6638d4195bed80712fea2aa27cb586ca85a6d7d4ed4b4c53c5d22dee813.pdf?exp=1792168007&sub=728ae799387402308487372bea160411&sig=TketzZjo0AB9z_3mk6KvdgESOkGCchEhCnQHVSeMzI8"
        }
      },
      {
        "id": "slide-2",
        "type": "slide",
        "title": "Part 9",
        "duration_min": null,
        "ai_prompts": [],
        "status": "todo",
        "body": {
          "material_id": "material_mukx8jqn_edij23",
          "page_from": 1,
          "page_to": 76,
          "notes": null,
          "deck_url": "/api/v1/documents/K4P1/Lecture_material_mukx8jqn_edij23/material_mukx8jqn_edij23/stream",
          "deck_cdn_url": "https://slides.vlearn.dev/slides/k4p1/Lecture_material_mukx8jqn_edij23/material_mukx8jqn_edij23/21e03b593e8bf530e94248c08adcf445b536f8bc499d14045346373bf2e1fdc0.pdf?exp=1792168007&sub=728ae799387402308487372bea160411&sig=BjDzjm7tjvrVMtXnDCYA2aEgo-nBBfBCBYsdKm_Ba74"
        }
      },
      {
        "id": "codelab-54106b3009824f10ac0073831cec3727-s01-doc",
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
              "html": "Đóng gói, bảo vệ, scale và deploy một AI agent lên cloud theo nguyên tắc production-ready",
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
              "html": "\u003Cstrong\u003ECodelab dành cho lớp K4-L3B.\u003C/strong\u003E \u003Cstrong\u003EStarter repository:\u003C/strong\u003E \u003Ca href=\"https://github.com/VinUni-AI20k/K4-L3B-Cloud-Service-And-Deployment\" target=\"_blank\" rel=\"noopener noreferrer\"\u003Ehttps://github.com/VinUni-AI20k/K4-L3B-Cloud-Service-And-Deployment\u003C/a\u003E",
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
              "html": "Một AI agent chạy được trên \u003Ccode\u003Elocalhost:8000\u003C/code\u003E chưa phải là một dịch vụ production. Khi đưa lên Internet, service phải đọc cấu hình đúng cách, không làm lộ secret, có health check, giới hạn request và chi phí, lưu state ngoài process, xử lý shutdown an toàn và vẫn hoạt động sau khi deploy.",
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
              "html": "Trong lab cá nhân khoảng \u003Cstrong\u003E240 phút\u003C/strong\u003E, bạn sẽ đưa starter agent lên một địa chỉ công khai và kiểm chứng toàn bộ luồng:",
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
              "md": "```text\nConfig → Container → Security → Reliability → Cloud deployment\n```"
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
                "tách config khỏi source theo nguyên tắc 12-Factor và fail fast khi thiếu secret;",
                "tạo structured log JSON và phân biệt liveness với readiness;",
                "viết Dockerfile multi-stage, chạy container non-root và bảo vệ build context;",
                "xác thực API key, giới hạn request bằng sliding window và kiểm soát ngân sách;",
                "lưu conversation state trong Redis để service có thể scale ngang;",
                "xử lý SIGTERM/graceful shutdown khi deploy phiên bản mới;",
                "deploy lên Railway hoặc Render và kiểm tra service bằng URL HTTPS thực tế."
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
              "html": "Lab sử dụng mock LLM nên không cần API key của OpenAI hay nhà cung cấp mô hình khác.",
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
        "id": "codelab-54106b3009824f10ac0073831cec3727-s02-doc",
        "type": "text",
        "title": "Hình thức và starter repository",
        "duration_min": null,
        "ai_prompts": [],
        "status": "todo",
        "body": {
          "reading_label": null,
          "blocks": [
            {
              "t": "p",
              "html": "Đây là \u003Cstrong\u003Ebài lab cá nhân\u003C/strong\u003E. Mỗi học viên dùng một repository riêng; không dùng chung repo hoặc commit history với học viên khác.",
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
              "html": "Starter chính thức của lớp K4-L3B:",
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
                "\u003Ca href=\"https://github.com/VinUni-AI20k/K4-L3B-Cloud-Service-And-Deployment\" target=\"_blank\" rel=\"noopener noreferrer\"\u003EK4-L3B-Cloud-Service-And-Deployment\u003C/a\u003E"
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
              "html": "Fork starter và đổi tên repository theo đúng mẫu:",
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
              "md": "```text\nK4-L3B-DAY12-HoVaTen-MSSV-CloudServicesAndDeployment\n```"
            },
            {
              "t": "p",
              "html": "Ví dụ:",
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
              "md": "```text\nK4-L3B-DAY12-NguyenVanAn-L3B202600280-CloudServicesAndDeployment\n```"
            },
            {
              "t": "p",
              "html": "Quy tắc:",
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
                "họ tên viết liền, không dấu, viết hoa chữ cái đầu mỗi từ;",
                "dùng đúng MSSV được cấp;",
                "dùng đúng \u003Ccode\u003EDAY12\u003C/code\u003E và \u003Ccode\u003ECloudServicesAndDeployment\u003C/code\u003E;",
                "không push bài làm trực tiếp lên starter;",
                "commit sau mỗi checkpoint để thể hiện tiến trình làm bài."
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
              "html": "Sai tên repository bị trừ 5 điểm.",
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
        "id": "codelab-54106b3009824f10ac0073831cec3727-s03-doc",
        "type": "text",
        "title": "Chuẩn bị môi trường",
        "duration_min": null,
        "ai_prompts": [],
        "status": "todo",
        "body": {
          "reading_label": null,
          "blocks": [
            {
              "t": "p",
              "html": "Bạn cần:",
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
                "Python 3.11 trở lên;",
                "Git và tài khoản GitHub;",
                "Docker Desktop hoặc Docker Engine cùng Docker Compose;",
                "tài khoản Railway hoặc Render cho CP5."
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
              "html": "Clone repository cá nhân đã fork:",
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
              "md": "```bash\ngit clone \u003CURL-repository-cá-nhân\u003E\ncd K4-L3B-DAY12-HoVaTen-MSSV-CloudServicesAndDeployment\n```"
            },
            {
              "t": "h3",
              "html": "macOS/Linux",
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
              "md": "```bash\npython3 -m venv .venv\nsource .venv/bin/activate\npython -m pip install --upgrade pip\npip install -r requirements.txt\ncp .env.example .env\n```"
            },
            {
              "t": "h3",
              "html": "Windows PowerShell",
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
              "md": "```powershell\npython -m venv .venv\n.venv\\Scripts\\Activate.ps1\npython -m pip install --upgrade pip\npip install -r requirements.txt\nCopy-Item .env.example .env\n```"
            },
            {
              "t": "p",
              "html": "Sinh API key cá nhân:",
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
              "md": "```bash\npython -c \"import secrets; print(secrets.token_urlsafe(32))\"\n```"
            },
            {
              "t": "p",
              "html": "Dán giá trị vào \u003Ccode\u003EAGENT_API_KEY\u003C/code\u003E trong \u003Ccode\u003E.env\u003C/code\u003E. Không commit \u003Ccode\u003E.env\u003C/code\u003E hoặc đưa secret vào screenshot, \u003Ccode\u003EDEPLOYMENT.md\u003C/code\u003E, source hay prompt AI.",
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
              "html": "Bật Redis:",
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
              "md": "```bash\ndocker compose up -d redis\ndocker compose ps\n```"
            },
            {
              "t": "p",
              "html": "Nếu chưa dùng được Docker ở CP0/CP1, tạm đặt \u003Ccode\u003EREDIS_URL=fake://\u003C/code\u003E trong \u003Ccode\u003E.env\u003C/code\u003E. CP2 và cloud deployment vẫn cần container thật.",
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
        "id": "codelab-54106b3009824f10ac0073831cec3727-s04-doc",
        "type": "text",
        "title": "Tiến độ 240 phút",
        "duration_min": null,
        "ai_prompts": [],
        "status": "todo",
        "body": {
          "reading_label": null,
          "blocks": [
            {
              "t": "p",
              "html": "Ghi nhận thời điểm bắt đầu là \u003Ccode\u003EStart\u003C/code\u003E và dùng các mốc tương đối sau:",
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
              "md": "| Giai đoạn | Thời gian | Trọng tâm | Điểm |\n| --- | --- | --- | --- |\n| CP0 | Start +0–20 phút | Setup, repo và baseline | — |\n| CP1 | Start +20–60 phút | 12-Factor config, health và logging | 15 |\n| CP2 | Start +60–105 phút | Docker production-ready | 15 |\n| Giải lao | Start +105–115 phút | Nghỉ 10 phút | — |\n| CP3 | Start +115–160 phút | Authentication, rate limit, cost guard | 20 |\n| CP4 | Start +160–200 phút | Stateless, probes, graceful shutdown | 20 |\n| CP5 | Start +200–230 phút | Cloud deployment | 15 |\n| Wrap-up | Start +230–240 phút | Exercises, grade và nộp bài | 15 |"
            },
            {
              "t": "p",
              "html": "Nếu kẹt một checkpoint quá 10 phút, ghi lại lỗi, hỏi Lab Coach và chuyển sang phần tiếp theo. Điểm checkpoint được tính theo tỷ lệ test pass nên không nên bỏ toàn bộ phần sau chỉ vì một lỗi chưa giải quyết được.",
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
        "id": "codelab-54106b3009824f10ac0073831cec3727-s05-doc",
        "type": "text",
        "title": "CP0 — Setup và baseline",
        "duration_min": null,
        "ai_prompts": [],
        "status": "todo",
        "body": {
          "reading_label": null,
          "blocks": [
            {
              "t": "p",
              "html": "Đọc nhanh các file sau trước khi sửa code:",
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
                "\u003Ccode\u003EREADME.md\u003C/code\u003E: mục tiêu, timeline và quy tắc đặt tên;",
                "\u003Ccode\u003ELAB_GUIDE.md\u003C/code\u003E: hướng dẫn kỹ thuật chi tiết;",
                "\u003Ccode\u003ECHECKPOINTS.md\u003C/code\u003E: điều kiện hoàn thành từng checkpoint;",
                "\u003Ccode\u003ERUBRIC.md\u003C/code\u003E, \u003Ccode\u003ERULES.md\u003C/code\u003E, \u003Ccode\u003ESUBMISSION.md\u003C/code\u003E: cách chấm và nộp bài."
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
              "html": "Chạy baseline:",
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
              "md": "```bash\npytest tests/ -v -m \"not docker\"\n```"
            },
            {
              "t": "p",
              "html": "Ở CP0, phần lớn test rớt là bình thường vì starter còn \u003Ccode\u003ETODO\u003C/code\u003E và \u003Ccode\u003ENotImplementedError\u003C/code\u003E. Bạn chỉ cần xác nhận:",
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
                "pytest chạy được;",
                "không có \u003Ccode\u003EModuleNotFoundError\u003C/code\u003E hoặc lỗi cài môi trường;",
                "\u003Ccode\u003E.env\u003C/code\u003E đã có \u003Ccode\u003EAGENT_API_KEY\u003C/code\u003E cá nhân;",
                "Redis chạy được hoặc đã dùng \u003Ccode\u003Efake://\u003C/code\u003E tạm thời;",
                "repository cá nhân có tên đúng."
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
              "html": "Commit checkpoint đầu tiên:",
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
              "md": "```bash\ngit add .\ngit commit -m \"checkpoint 0: setup environment\"\ngit push origin main\n```"
            }
          ]
        }
      },
      {
        "id": "codelab-54106b3009824f10ac0073831cec3727-s06-doc",
        "type": "text",
        "title": "CP1 — 12-Factor Config, Health và Logging",
        "duration_min": null,
        "ai_prompts": [],
        "status": "todo",
        "body": {
          "reading_label": null,
          "blocks": [
            {
              "t": "h3",
              "html": "6.1. Cấu hình trong \u003Ccode\u003Eapp/config.py\u003C/code\u003E",
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
              "html": "Khai báo đủ sáu trường trong \u003Ccode\u003ESettings\u003C/code\u003E:",
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
              "md": "| Trường | Kiểu | Mặc định |\n| --- | --- | --- |\n| `port` | `int` | `8000` |\n| `agent_api_key` | `str` | không có mặc định |\n| `redis_url` | `str` | `redis://localhost:6379/0` |\n| `rate_limit_per_minute` | `int` | `10` |\n| `monthly_budget_usd` | `float` | `10.0` |\n| `log_level` | `str` | `INFO` |"
            },
            {
              "t": "p",
              "html": "\u003Ccode\u003Eagent_api_key\u003C/code\u003E phải là trường bắt buộc. Nếu cloud thiếu secret, ứng dụng phải fail fast ngay khi khởi động thay vì chạy với khóa mặc định không an toàn.",
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
              "html": "6.2. Structured logging trong \u003Ccode\u003Eapp/logging_utils.py\u003C/code\u003E",
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
              "html": "Hoàn thiện \u003Ccode\u003Elog_event()\u003C/code\u003E để mỗi event được in thành đúng \u003Cstrong\u003Emột dòng JSON\u003C/strong\u003E. Log cần có tối thiểu \u003Ccode\u003Eevent\u003C/code\u003E, \u003Ccode\u003Elevel\u003C/code\u003E, \u003Ccode\u003Etimestamp\u003C/code\u003E và các field bổ sung được truyền vào.",
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
              "html": "Không dùng \u003Ccode\u003Eindent\u003C/code\u003E vì nền tảng cloud thu log theo từng dòng. Dùng UTF-8/\u003Ccode\u003Eensure_ascii=False\u003C/code\u003E để nội dung tiếng Việt không bị biến dạng.",
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
              "html": "6.3. Liveness endpoint \u003Ccode\u003E/health\u003C/code\u003E",
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
              "html": "Hoàn thiện \u003Ccode\u003E/health\u003C/code\u003E trong \u003Ccode\u003Eapp/main.py\u003C/code\u003E:",
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
              "md": "```text\nBình thường  → 200 {\"status\":\"ok\", \"service\":..., \"version\":...}\nĐang tắt    → 503 {\"status\":\"shutting_down\"}\n```"
            },
            {
              "t": "p",
              "html": "\u003Ccode\u003E/health\u003C/code\u003E không được gọi Redis, database hoặc dependency ngoài. Endpoint này chỉ trả lời process còn sống hay cần restart.",
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
              "html": "Chạy thử:",
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
              "md": "```bash\nuvicorn app.main:app --reload --port 8000\ncurl -i http://localhost:8000/health\n```"
            },
            {
              "t": "p",
              "html": "Checkpoint:",
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
              "md": "```bash\npytest tests/test_cp1.py -v\n```"
            },
            {
              "t": "p",
              "html": "Hoàn thành CP1 khi test pass, log JSON nằm trên một dòng và \u003Ccode\u003E/health\u003C/code\u003E không phụ thuộc Redis.",
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
        "id": "codelab-54106b3009824f10ac0073831cec3727-s07-doc",
        "type": "text",
        "title": "CP2 — Docker production-ready",
        "duration_min": null,
        "ai_prompts": [],
        "status": "todo",
        "body": {
          "reading_label": null,
          "blocks": [
            {
              "t": "p",
              "html": "Starter Dockerfile chạy được nhưng chưa an toàn cho production. Hoàn thiện các yêu cầu sau:",
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
              "html": "7.1. Dockerfile",
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
                "dùng multi-stage build với stage \u003Ccode\u003Ebuilder\u003C/code\u003E và \u003Ccode\u003Eruntime\u003C/code\u003E;",
                "dùng base image \u003Ccode\u003Epython:3.11-slim\u003C/code\u003E hoặc image gọn tương đương;",
                "copy \u003Ccode\u003Erequirements.txt\u003C/code\u003E và cài dependency trước khi copy source để tận dụng cache;",
                "tạo user thường và chuyển sang bằng \u003Ccode\u003EUSER\u003C/code\u003E;",
                "thêm \u003Ccode\u003EHEALTHCHECK\u003C/code\u003E gọi \u003Ccode\u003E/health\u003C/code\u003E;",
                "bind Uvicorn vào \u003Ccode\u003E0.0.0.0\u003C/code\u003E;",
                "đọc cổng từ \u003Ccode\u003E${PORT:-8000}\u003C/code\u003E;",
                "image cuối cần nhỏ hơn 500 MB."
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
              "html": "7.2. \u003Ccode\u003E.dockerignore\u003C/code\u003E",
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
              "html": "Không để \u003Ccode\u003E.env\u003C/code\u003E, \u003Ccode\u003E.git\u003C/code\u003E, \u003Ccode\u003E.venv\u003C/code\u003E, \u003Ccode\u003E__pycache__\u003C/code\u003E hoặc file thừa lọt vào build context. Không ignore nhầm \u003Ccode\u003Eapp/\u003C/code\u003E, \u003Ccode\u003Eutils/\u003C/code\u003E hoặc \u003Ccode\u003Erequirements.txt\u003C/code\u003E.",
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
              "html": "7.3. \u003Ccode\u003Edocker-compose.yml\u003C/code\u003E",
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
              "html": "Thêm service \u003Ccode\u003Eagent\u003C/code\u003E:",
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
                "build từ Dockerfile hiện tại;",
                "map cổng \u003Ccode\u003E8000:8000\u003C/code\u003E;",
                "đọc \u003Ccode\u003EAGENT_API_KEY\u003C/code\u003E bằng nội suy biến môi trường, không hard-code;",
                "dùng \u003Ccode\u003EREDIS_URL=redis://redis:6379/0\u003C/code\u003E;",
                "phụ thuộc service \u003Ccode\u003Eredis\u003C/code\u003E;",
                "có healthcheck."
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
              "html": "Tên service \u003Ccode\u003Eredis\u003C/code\u003E chính là hostname bên trong mạng Compose. Không dùng \u003Ccode\u003Elocalhost\u003C/code\u003E để agent kết nối Redis trong container.",
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
              "html": "Build và chạy thật:",
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
              "md": "```bash\ndocker build -t day12-agent:prod .\ndocker images day12-agent:prod\ndocker compose up -d\ndocker compose ps\ncurl http://localhost:8000/health\ndocker compose logs agent\n```"
            },
            {
              "t": "p",
              "html": "Checkpoint:",
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
              "md": "```bash\npytest tests/test_cp2.py -v\n```"
            },
            {
              "t": "p",
              "html": "Nếu cần kiểm tra nhanh mà chưa build image:",
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
              "md": "```bash\npytest tests/test_cp2.py -v -m \"not docker\"\n```"
            },
            {
              "t": "p",
              "html": "Test Docker bị skip không có nghĩa là phần đó đã đạt; Lab Coach có thể yêu cầu evidence build/chạy thực tế.",
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
        "id": "codelab-54106b3009824f10ac0073831cec3727-s08-doc",
        "type": "text",
        "title": "CP3 — API Security và Cost Guard",
        "duration_min": null,
        "ai_prompts": [],
        "status": "todo",
        "body": {
          "reading_label": null,
          "blocks": [
            {
              "t": "p",
              "html": "Public URL sẽ bị người lạ hoặc bot gọi nếu không có lớp bảo vệ. Bạn cần triển khai ba lớp:",
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
              "md": "| Lớp | Câu hỏi | HTTP status |\n| --- | --- | --- |\n| Authentication | Client có khóa hợp lệ không? | 401 |\n| Rate limiting | User gọi có quá nhanh không? | 429 |\n| Cost guard | User đã vượt ngân sách tháng chưa? | 402 |"
            },
            {
              "t": "h3",
              "html": "8.1. Authentication",
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
              "html": "Trong \u003Ccode\u003Eapp/auth.py\u003C/code\u003E:",
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
                "đọc \u003Ccode\u003EX-API-Key\u003C/code\u003E và so sánh với \u003Ccode\u003EAGENT_API_KEY\u003C/code\u003E;",
                "dùng \u003Ccode\u003Esecrets.compare_digest\u003C/code\u003E, không dùng \u003Ccode\u003E==\u003C/code\u003E;",
                "sai hoặc thiếu key trả 401;",
                "key hợp lệ trả về \u003Ccode\u003EX-User-Id\u003C/code\u003E, hoặc \u003Ccode\u003Eanonymous\u003C/code\u003E nếu thiếu user ID."
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
              "html": "8.2. Sliding-window rate limit",
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
              "html": "Trong \u003Ccode\u003Eapp/rate_limiter.py\u003C/code\u003E, dùng Redis Sorted Set:",
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
                "\u003Cstrong\u003E1.\u003C/strong\u003E xóa request cũ hơn 60 giây;",
                "\u003Cstrong\u003E2.\u003C/strong\u003E đếm request còn trong cửa sổ;",
                "\u003Cstrong\u003E3.\u003C/strong\u003E nếu count \u003Ccode\u003E&gt;= limit\u003C/code\u003E, trả 429 và \u003Ccode\u003ERetry-After\u003C/code\u003E;",
                "\u003Cstrong\u003E4.\u003C/strong\u003E nếu còn quota, thêm một member duy nhất rồi đặt TTL."
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
              "html": "Phải kiểm tra trước và ghi nhận sau. Member cần chứa timestamp cùng UUID để hai request đồng thời không ghi đè nhau.",
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
              "html": "8.3. Cost guard",
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
              "html": "Trong \u003Ccode\u003Eapp/cost_guard.py\u003C/code\u003E:",
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
                "\u003Ccode\u003Espent()\u003C/code\u003E trả \u003Ccode\u003E0.0\u003C/code\u003E nếu key chưa tồn tại;",
                "\u003Ccode\u003Echeck()\u003C/code\u003E trả 402 nếu chi phí hiện tại cộng chi phí ước tính vượt ngân sách;",
                "\u003Ccode\u003Erecord()\u003C/code\u003E cộng dồn bằng \u003Ccode\u003Eincrbyfloat\u003C/code\u003E và đặt TTL;",
                "key phải tách theo user và tháng UTC."
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
              "html": "8.4. Ghép \u003Ccode\u003E/ask\u003C/code\u003E đúng thứ tự",
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
              "md": "```text\nverify_api_key\n→ limiter.check\n→ guard.check\n→ store.get_history\n→ ask_llm\n→ store.append user/assistant\n→ guard.record\n→ log_event\n→ response\n```"
            },
            {
              "t": "p",
              "html": "Authentication, rate limit và budget check phải chạy trước khi gọi LLM.",
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
              "t": "md",
              "html": null,
              "items": [],
              "lang": null,
              "kind": null,
              "icon": null,
              "title": null,
              "src": null,
              "alt": null,
              "md": "```bash\n# Thiếu key: mong đợi 401\ncurl -i -X POST http://localhost:8000/ask \\\n  -H \"Content-Type: application/json\" \\\n  -d '{\"question\":\"Hello\"}'\n\n# Có key: mong đợi 200\ncurl -i -X POST http://localhost:8000/ask \\\n  -H \"Content-Type: application/json\" \\\n  -H \"X-API-Key: $AGENT_API_KEY\" \\\n  -H \"X-User-Id: sv01\" \\\n  -d '{\"question\":\"Docker là gì?\"}'\n```"
            },
            {
              "t": "p",
              "html": "Checkpoint:",
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
              "md": "```bash\npytest tests/test_cp3.py -v\n```"
            }
          ]
        }
      },
      {
        "id": "codelab-54106b3009824f10ac0073831cec3727-s09-doc",
        "type": "text",
        "title": "CP4 — Scaling và Reliability",
        "duration_min": null,
        "ai_prompts": [],
        "status": "todo",
        "body": {
          "reading_label": null,
          "blocks": [
            {
              "t": "h3",
              "html": "9.1. Đưa state ra khỏi process",
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
              "html": "Trong \u003Ccode\u003Eapp/store.py\u003C/code\u003E, lưu history vào Redis thay vì dict Python:",
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
                "dùng Redis List theo từng user;",
                "serialize message thành JSON;",
                "dùng \u003Ccode\u003Eltrim\u003C/code\u003E để chỉ giữ 20 message gần nhất;",
                "đặt TTL 7 ngày;",
                "\u003Ccode\u003Eget_history()\u003C/code\u003E trả list theo thứ tự cũ đến mới;",
                "\u003Ccode\u003Eping()\u003C/code\u003E bắt mọi exception và trả \u003Ccode\u003EFalse\u003C/code\u003E khi Redis không sẵn sàng."
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
              "html": "State trong Redis cho phép nhiều container cùng thấy một lịch sử hội thoại và không làm mất dữ liệu tạm thời khi một instance restart.",
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
              "html": "9.2. Phân biệt liveness và readiness",
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
              "md": "| Endpoint | Câu hỏi | Dependency | Khi trả 503 |\n| --- | --- | --- | --- |\n| `/health` | Process còn sống không? | Không kiểm tra Redis | Orchestrator có thể restart container |\n| `/ready` | Có nhận traffic được không? | Kiểm tra Redis | Load balancer ngừng gửi request |"
            },
            {
              "t": "p",
              "html": "\u003Ccode\u003E/ready\u003C/code\u003E phải trả 503 khi Redis lỗi hoặc service đang shutdown; trả 200 khi Redis sẵn sàng.",
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
              "html": "9.3. Graceful shutdown",
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
              "html": "Trong \u003Ccode\u003Eapp/lifecycle.py\u003C/code\u003E:",
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
                "đăng ký SIGTERM và SIGINT;",
                "lưu handler cũ trước khi thay thế;",
                "khi nhận signal, đặt \u003Ccode\u003Eshutting_down=True\u003C/code\u003E;",
                "gọi lại handler cũ nếu callable;",
                "không thực hiện network hoặc tác vụ nặng trong signal handler."
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
              "html": "Nếu không gọi lại handler của Uvicorn, service có thể chỉ đổi trạng thái sang “đang tắt” nhưng không thoát và cuối cùng bị SIGKILL.",
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
              "html": "Checkpoint:",
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
              "md": "```bash\npytest tests/test_cp4.py -v\n```"
            },
            {
              "t": "p",
              "html": "Thử scale nếu Docker đã sẵn sàng:",
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
              "md": "```bash\ndocker compose up -d --scale agent=3\ndocker compose ps\n```"
            },
            {
              "t": "p",
              "html": "Nginx/load balancing là phần mở rộng để học, không phải bonus riêng.",
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
        "id": "codelab-54106b3009824f10ac0073831cec3727-s10-doc",
        "type": "text",
        "title": "CP5 — Deploy lên cloud",
        "duration_min": null,
        "ai_prompts": [],
        "status": "todo",
        "body": {
          "reading_label": null,
          "blocks": [
            {
              "t": "p",
              "html": "Chọn một trong hai nền tảng:",
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
              "md": "| Platform | Cách triển khai | Redis |\n| --- | --- | --- |\n| Railway | Deploy từ Dockerfile/CLI, tạo Redis add-on | Có |\n| Render | Tạo Blueprint từ `render.yaml` | Render Key Value |"
            },
            {
              "t": "h3",
              "html": "10.1. Environment trên cloud",
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
              "html": "Đặt các biến trong dashboard hoặc secret store, không commit giá trị:",
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
                "\u003Ccode\u003EAGENT_API_KEY\u003C/code\u003E;",
                "\u003Ccode\u003EREDIS_URL\u003C/code\u003E;",
                "\u003Ccode\u003ERATE_LIMIT_PER_MINUTE=10\u003C/code\u003E;",
                "\u003Ccode\u003EMONTHLY_BUDGET_USD=10.0\u003C/code\u003E;",
                "\u003Ccode\u003ELOG_LEVEL=INFO\u003C/code\u003E."
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
              "html": "Không tự ghi đè \u003Ccode\u003E$PORT\u003C/code\u003E nếu platform đã cấp. Service phải bind \u003Ccode\u003E0.0.0.0\u003C/code\u003E và đọc port do platform cung cấp.",
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
              "html": "10.2. Railway",
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
              "html": "Bạn có thể deploy qua dashboard hoặc Railway CLI:",
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
              "md": "```bash\nrailway login\nrailway init\nrailway add --database redis\nrailway up\nrailway domain\nrailway logs\n```"
            },
            {
              "t": "p",
              "html": "Kiểm tra \u003Ccode\u003EREDIS_URL\u003C/code\u003E đã được gắn vào service agent và \u003Ccode\u003EAGENT_API_KEY\u003C/code\u003E nằm trong Variables, không nằm trong repo.",
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
              "html": "10.3. Render",
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
                "\u003Cstrong\u003E1.\u003C/strong\u003E Push repository cá nhân lên GitHub.",
                "\u003Cstrong\u003E2.\u003C/strong\u003E Trên Render chọn \u003Cstrong\u003ENew → Blueprint\u003C/strong\u003E.",
                "\u003Cstrong\u003E3.\u003C/strong\u003E Chọn repository cá nhân; Render đọc \u003Ccode\u003Erender.yaml\u003C/code\u003E.",
                "\u003Cstrong\u003E4.\u003C/strong\u003E Điền \u003Ccode\u003EAGENT_API_KEY\u003C/code\u003E khi được hỏi.",
                "\u003Cstrong\u003E5.\u003C/strong\u003E Chờ web service và Redis hoàn tất build/deploy."
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
              "html": "10.4. Kiểm tra URL thật",
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
              "md": "```bash\nURL=https://\u003Cdomain-cua-ban\u003E\n\ncurl -i $URL/health\ncurl -i $URL/ready\ncurl -i -X POST $URL/ask \\\n  -H \"Content-Type: application/json\" \\\n  -d '{\"question\":\"Hello\"}'\n```"
            },
            {
              "t": "p",
              "html": "Kết quả mong đợi:",
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
                "\u003Ccode\u003E/health\u003C/code\u003E trả 200 và \u003Ccode\u003Estatus: ok\u003C/code\u003E;",
                "\u003Ccode\u003E/ready\u003C/code\u003E trả 200 và \u003Ccode\u003Eredis: true\u003C/code\u003E;",
                "\u003Ccode\u003E/ask\u003C/code\u003E không có API key trả 401."
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
              "html": "Điền đầy đủ \u003Ccode\u003EDEPLOYMENT.md\u003C/code\u003E:",
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
                "họ tên, MSSV và repository;",
                "public URL và platform;",
                "tên các environment variables đã set, không ghi giá trị secret;",
                "output các lệnh kiểm tra;",
                "\u003Ccode\u003Escreenshots/dashboard.png\u003C/code\u003E;",
                "\u003Ccode\u003Escreenshots/health.png\u003C/code\u003E."
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
              "html": "Nếu muốn test \u003Ccode\u003E/ask\u003C/code\u003E có xác thực, đặt \u003Ccode\u003EDEPLOY_API_KEY\u003C/code\u003E trong \u003Ccode\u003E.env\u003C/code\u003E cục bộ. Đây là API key của chính service đã deploy, không phải token Railway hoặc Render.",
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
              "html": "Checkpoint:",
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
              "md": "```bash\npytest tests/test_cp5.py -v\n```"
            },
            {
              "t": "h3",
              "html": "Phương án local fallback",
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
              "html": "Nếu không thể đăng ký cloud hoặc mạng bị chặn:",
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
                "\u003Cstrong\u003E1.\u003C/strong\u003E đặt \u003Ccode\u003ELOCAL_FALLBACK=true\u003C/code\u003E trong \u003Ccode\u003E.env\u003C/code\u003E;",
                "\u003Cstrong\u003E2.\u003C/strong\u003E chạy \u003Ccode\u003Edocker compose up -d\u003C/code\u003E;",
                "\u003Cstrong\u003E3.\u003C/strong\u003E kiểm tra \u003Ccode\u003Edocker compose ps\u003C/code\u003E, \u003Ccode\u003E/health\u003C/code\u003E, \u003Ccode\u003E/ready\u003C/code\u003E và auth;",
                "\u003Cstrong\u003E4.\u003C/strong\u003E lưu ảnh vào \u003Ccode\u003Escreenshots/\u003C/code\u003E;",
                "\u003Cstrong\u003E5.\u003C/strong\u003E ghi lý do trong \u003Ccode\u003EDEPLOYMENT.md\u003C/code\u003E;",
                "\u003Cstrong\u003E6.\u003C/strong\u003E chạy lại \u003Ccode\u003Epytest tests/test_cp5.py -v\u003C/code\u003E."
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
              "html": "Phương án fallback làm CP5 bị giới hạn tối đa \u003Cstrong\u003E9/15 điểm\u003C/strong\u003E.",
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
        "id": "codelab-54106b3009824f10ac0073831cec3727-s11-doc",
        "type": "text",
        "title": "Exercises và tự chấm",
        "duration_min": null,
        "ai_prompts": [],
        "status": "todo",
        "body": {
          "reading_label": null,
          "blocks": [
            {
              "t": "p",
              "html": "Hoàn thiện đủ 10 câu trong \u003Ccode\u003Eexercises.md\u003C/code\u003E bằng lời của chính bạn và dựa trên quan sát khi chạy bài:",
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
                "\u003Cstrong\u003E1.\u003C/strong\u003E fail fast khi thiếu secret;",
                "\u003Cstrong\u003E2.\u003C/strong\u003E structured log;",
                "\u003Cstrong\u003E3.\u003C/strong\u003E kích thước image;",
                "\u003Cstrong\u003E4.\u003C/strong\u003E Docker layer cache;",
                "\u003Cstrong\u003E5.\u003C/strong\u003E container non-root;",
                "\u003Cstrong\u003E6.\u003C/strong\u003E sliding window;",
                "\u003Cstrong\u003E7.\u003C/strong\u003E rate limit và cost guard;",
                "\u003Cstrong\u003E8.\u003C/strong\u003E liveness và readiness;",
                "\u003Cstrong\u003E9.\u003C/strong\u003E stateless scaling;",
                "\u003Cstrong\u003E10.\u003C/strong\u003E lỗi thực tế khi deploy."
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
              "html": "Không để lại dòng placeholder:",
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
              "md": "```text\n\u003E *Câu trả lời của bạn*\n```"
            },
            {
              "t": "p",
              "html": "Chạy toàn bộ test và chấm điểm:",
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
              "md": "```bash\npytest tests/ -v\npython grade.py\n```"
            },
            {
              "t": "p",
              "html": "Nếu chưa làm bonus:",
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
              "md": "```bash\npython grade.py --no-bonus\n```"
            },
            {
              "t": "p",
              "html": "Thang điểm bắt buộc:",
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
              "md": "| Nội dung | Điểm |\n| --- | --- |\n| CP1 — Config, Health & Logging | 15 |\n| CP2 — Docker | 15 |\n| CP3 — API Security | 20 |\n| CP4 — Scaling & Reliability | 20 |\n| CP5 — Cloud Deployment | 15 |\n| `exercises.md` | 15 |\n| Tổng | 100 |"
            },
            {
              "t": "p",
              "html": "Điểm checkpoint được tính theo tỷ lệ test pass. Test bị skip do thiếu Docker hoặc điều kiện môi trường không tự động được xem là đạt.",
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
        "id": "codelab-54106b3009824f10ac0073831cec3727-s12-doc",
        "type": "text",
        "title": "Bonus — CI/CD với GitHub Actions",
        "duration_min": null,
        "ai_prompts": [],
        "status": "todo",
        "body": {
          "reading_label": null,
          "blocks": [
            {
              "t": "p",
              "html": "Chỉ làm bonus sau khi CP1–CP5 đã ổn. Tự tạo workflow trong \u003Ccode\u003E.github/workflows/\u003C/code\u003E để:",
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
                "chạy khi push hoặc pull request;",
                "cài dependency;",
                "chạy tests;",
                "build Docker image;",
                "chỉ deploy nhánh chính sau khi tests xanh;",
                "hiển thị badge \u003Ccode\u003Epassing\u003C/code\u003E trong README."
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
              "t": "md",
              "html": null,
              "items": [],
              "lang": null,
              "kind": null,
              "icon": null,
              "title": null,
              "src": null,
              "alt": null,
              "md": "```bash\npytest tests/test_bonus_cicd.py -v\n```"
            },
            {
              "t": "p",
              "html": "Bonus tối đa 10 điểm, nhưng \u003Ccode\u003Egrade.py\u003C/code\u003E vẫn giới hạn tổng cuối ở 100. Nginx/load balancing không thuộc bonus này.",
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
        "id": "codelab-54106b3009824f10ac0073831cec3727-s13-doc",
        "type": "text",
        "title": "Kiểm tra và nộp bài",
        "duration_min": null,
        "ai_prompts": [],
        "status": "todo",
        "body": {
          "reading_label": null,
          "blocks": [
            {
              "t": "p",
              "html": "Repository phải ở chế độ \u003Cstrong\u003Epublic\u003C/strong\u003E để Lab Coach truy cập được trong thời gian chấm.",
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
              "html": "Chạy kiểm tra cuối:",
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
              "md": "```bash\npytest tests/ -v\npython grade.py\ngit status --short\ngit log --oneline --decorate -5\ngit ls-files | grep -E '(^|/)\\.env$|\\.(pem|key)$'\n```"
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
                "Repository đúng tên \u003Ccode\u003EK4-L3B-DAY12-HoVaTen-MSSV-CloudServicesAndDeployment\u003C/code\u003E.",
                "Không còn \u003Ccode\u003ENotImplementedError\u003C/code\u003E trong phần bắt buộc của \u003Ccode\u003Eapp/\u003C/code\u003E.",
                "CP1–CP5 đã được chạy và bạn biết test nào còn fail/skip cùng nguyên nhân.",
                "Dockerfile, \u003Ccode\u003E.dockerignore\u003C/code\u003E và \u003Ccode\u003Edocker-compose.yml\u003C/code\u003E đã hoàn thiện.",
                "\u003Ccode\u003Eexercises.md\u003C/code\u003E đã trả lời đủ 10 câu bằng lời của bạn.",
                "\u003Ccode\u003EDEPLOYMENT.md\u003C/code\u003E đã điền URL/platform/output và không chứa secret.",
                "\u003Ccode\u003Escreenshots/dashboard.png\u003C/code\u003E và \u003Ccode\u003Escreenshots/health.png\u003C/code\u003E mở được.",
                "Không commit \u003Ccode\u003E.env\u003C/code\u003E, API key, token, private key hoặc credential.",
                "Có lịch sử commit theo từng checkpoint.",
                "Repository public và link truy cập được khi đăng xuất GitHub."
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
              "html": "Nộp \u003Cstrong\u003EURL repository GitHub cá nhân\u003C/strong\u003E trên Codelab trước deadline do Lab Coach công bố.",
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
              "html": "Lab Coach có thể hỏi trực tiếp bất kỳ phần code hoặc nội dung phản ánh nào. Không giải thích được phần đã nộp có thể bị hủy điểm phần tương ứng; sao chép bài hoặc evidence có thể bị 0 điểm.",
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
        "id": "codelab-54106b3009824f10ac0073831cec3727-submit",
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
          "deadline_at": "2026-09-29T16:59:00+00:00"
        }
      }
    ]
  },
  "progress": {
    "done": 0,
    "total": 18,
    "percent": 0,
    "current_part_id": "day-slides-material_mu0w5gvk_w0vmuk"
  },
  "kc_quiz": {
    "release_id": "82520455-0ed4-4608-bb0a-743a8078a583",
    "course_id": "K4P1",
    "day_code": "day12",
    "revision_no": 1,
    "published_at": "2026-09-16T20:03:14.621936+00:00",
    "groups": [
      {
        "group_id": "day12-g-foundations",
        "name": "Nền tảng cloud và production",
        "leaf_kc_ids": [
          "kc-agent-production-gap",
          "kc-cloud-resource-layer-mapping",
          "kc-cloud-service-responsibility-model",
          "kc-environment-promotion-parity",
          "kc-twelve-factor-config-port-parity",
          "kc-model-dependency-release-planning"
        ]
      },
      {
        "group_id": "day12-g-container",
        "name": "Đóng gói container và local parity",
        "leaf_kc_ids": [
          "kc-container-artifact-runtime-boundary",
          "kc-reproducible-container-dependencies",
          "kc-docker-layer-cache-ordering",
          "kc-multistage-runtime-minimization",
          "kc-container-nonroot-runtime",
          "kc-docker-build-context-exclusion",
          "kc-image-vulnerability-provenance-release",
          "kc-compose-service-network-and-health"
        ]
      },
      {
        "group_id": "day12-g-lifecycle",
        "name": "Request lifecycle, state và concurrency",
        "leaf_kc_ids": [
          "kc-agent-response-lifecycle-selection",
          "kc-sse-event-stream-contract",
          "kc-sse-proxy-reconnect-contract",
          "kc-async-agent-job-lifecycle",
          "kc-externalized-agent-state",
          "kc-conversation-state-retention-isolation",
          "kc-agent-io-concurrency-control",
          "kc-agent-cold-start-warm-capacity"
        ]
      },
      {
        "group_id": "day12-g-platform",
        "name": "Vị trí thực thi và platform fit",
        "leaf_kc_ids": [
          "kc-agent-execution-placement",
          "kc-browser-bff-secret-boundary",
          "kc-hybrid-device-cloud-routing",
          "kc-cloud-runtime-tier-fit",
          "kc-managed-agent-runtime-tradeoff",
          "kc-cloud-service-binding-verification",
          "kc-remote-mcp-hosting-boundary"
        ]
      },
      {
        "group_id": "day12-g-edge",
        "name": "Security và cost admission ở public edge",
        "leaf_kc_ids": [
          "kc-api-gateway-admission-order",
          "kc-auth-pattern-caller-fit",
          "kc-api-key-verification-boundary",
          "kc-rate-limit-policy-selection",
          "kc-sliding-window-rate-limiter",
          "kc-precall-cost-estimation",
          "kc-tenant-budget-accounting",
          "kc-deployment-secret-lifecycle",
          "kc-https-cors-auth-boundary"
        ]
      },
      {
        "group_id": "day12-g-reliability",
        "name": "Scaling, resilience và rollout",
        "leaf_kc_ids": [
          "kc-vertical-horizontal-scaling-decision",
          "kc-load-balancing-policy-selection",
          "kc-concurrency-queue-autoscaling",
          "kc-liveness-readiness-startup",
          "kc-graceful-shutdown-signal-handoff",
          "kc-zero-downtime-rollout-sequencing",
          "kc-circuit-breaker-state-control",
          "kc-bounded-backoff-retry",
          "kc-timeout-bulkhead-isolation",
          "kc-sli-slo-sla-error-budget",
          "kc-controlled-chaos-experiment"
        ]
      },
      {
        "group_id": "day12-g-delivery",
        "name": "Delivery automation và serving efficiency",
        "leaf_kc_ids": [
          "kc-structured-request-observability",
          "kc-ci-cd-release-stage-distinction",
          "kc-ci-job-dependency-gating",
          "kc-clean-build-test-selection",
          "kc-postdeploy-smoke-traceability",
          "kc-llm-gateway-failover-routing",
          "kc-prompt-semantic-cache-validity",
          "kc-continuous-batching-utilization",
          "kc-paged-kv-cache-memory",
          "kc-speculative-decoding-verification",
          "kc-disaggregated-prefill-decode"
        ]
      },
      {
        "group_id": "day12-g-durable",
        "name": "Durable effect và infrastructure containment",
        "leaf_kc_ids": [
          "kc-agent-sideeffect-retry-ambiguity",
          "kc-stable-intent-idempotency",
          "kc-agent-semantic-intent-deduplication",
          "kc-durable-agent-replay",
          "kc-checkpoint-replay-boundary",
          "kc-saga-compensation-design",
          "kc-irreversible-pivot-approval-placement",
          "kc-durable-wait-validity-recheck",
          "kc-egress-exfiltration-condition-model",
          "kc-trusted-channel-egress-limitation",
          "kc-sandbox-isolation-strength-tradeoff",
          "kc-failclosed-sandbox-policy",
          "kc-per-agent-shortlived-identity"
        ]
      }
    ],
    "knowledge_components": [
      {
        "kc_id": "kc-agent-cold-start-warm-capacity",
        "group_id": "day12-g-lifecycle",
        "name": "Budget initialization và warm capacity cho agent cold start",
        "knowledge": "Cold start gồm image pull, process boot, client init, model/embedding load và connection setup. Minimum warm capacity đổi fixed cost lấy latency, còn hard runtime cap là compatibility constraint riêng.",
        "remediation_target": "Luyện bursty, steady, large-image, slow-dependency và hard-timeout.",
        "is_core": true
      },
      {
        "kc_id": "kc-agent-execution-placement",
        "group_id": "day12-g-platform",
        "name": "Chọn server, client, on-device hoặc hybrid execution placement",
        "knowledge": "Placement đổi secret exposure, privacy, offline, central control, hardware capability, latency và cost attribution. UI location không quyết định privileged loop chạy ở đâu.",
        "remediation_target": "Luyện cùng product dưới constraint privacy, offline, capability và budget khác nhau.",
        "is_core": true
      },
      {
        "kc_id": "kc-agent-io-concurrency-control",
        "group_id": "day12-g-lifecycle",
        "name": "Control concurrency cho agent I/O-bound mà không block event loop",
        "knowledge": "Agent request giữ worker khi chờ model/tool nên CPU có thể thấp lúc concurrency đã đầy. Capacity phụ thuộc in-flight duration, blocking SDK call trong async path, worker limit, queue và downstream quota.",
        "remediation_target": "Luyện long I/O wait, blocking call, queue growth và provider throttling.",
        "is_core": true
      },
      {
        "kc_id": "kc-agent-production-gap",
        "group_id": "day12-g-foundations",
        "name": "Chẩn đoán khoảng cách từ agent localhost tới production",
        "knowledge": "Demo local giả định một user, dependency cài thủ công, config trên máy, network ổn định và restart bằng tay. Production thay các giả định đó bằng artifact tái lập, config được inject, public networking, concurrent user, recovery theo health và ownership rõ cho state/cost.",
        "remediation_target": "Luyện chuyển trace local-only thành cặp requirement-evidence cho production.",
        "is_core": true
      },
      {
        "kc_id": "kc-agent-response-lifecycle-selection",
        "group_id": "day12-g-lifecycle",
        "name": "Chọn lifecycle sync, streaming hoặc async từ constraint workload",
        "knowledge": "Sync hợp work ngắn có bound, streaming cải thiện time-to-first-output nhưng giữ connection, còn async job chạy độc lập với status/result retrieval. Lựa chọn theo duration, progress, disconnect survival, retry semantics và infrastructure limit.",
        "remediation_target": "Luyện phân loại chat, batch, cron, autonomous, copilot và event-driven work.",
        "is_core": true
      },
      {
        "kc_id": "kc-agent-semantic-intent-deduplication",
        "group_id": "day12-g-durable",
        "name": "Phân biệt semantic intent identity với byte-level request equality",
        "knowledge": "Agent có thể regenerate parameter/wording khác cho cùng intended action nên hash raw request byte có thể bỏ sót duplicate. Hệ thống cần authoritative intent identity hoặc bounded semantic adjudication rule; equivalence không chắc phải được nêu ra thay vì merge âm thầm.",
        "remediation_target": "Luyện paraphrase, reordered field, changed amount, changed recipient và insufficient evidence.",
        "is_core": true
      },
      {
        "kc_id": "kc-agent-sideeffect-retry-ambiguity",
        "group_id": "day12-g-durable",
        "name": "Nhận biết ambiguous completion sau timeout của agent side effect",
        "knowledge": "Sau khi external action được gửi, timeout không phân biệt được failure với effect đã commit nhưng reply đến chậm. Blind retry có thể thực hiện payment, email, booking hoặc mutation khác hai lần; thiết kế an toàn vì vậy cần idempotent consumer boundary trước retry.",
        "remediation_target": "Luyện timeout trước send, sau send, sau commit và sau delayed reply.",
        "is_core": true
      },
      {
        "kc_id": "kc-api-gateway-admission-order",
        "group_id": "day12-g-edge",
        "name": "Sắp public-edge admission trước agent work tốn kém hoặc có đặc quyền",
        "knowledge": "Public request phải auth, rate-limit, validate shape và check budget trước retrieval/model/tool. Ordering quan sát được: mọi rejection không được tạo downstream call tốn kém/đặc quyền và phải trả policy outcome riêng.",
        "remediation_target": "Luyện trace cost/side effect cho missing key, malformed input, quota và budget rejection.",
        "is_core": true
      },
      {
        "kc_id": "kc-api-key-verification-boundary",
        "group_id": "day12-g-edge",
        "name": "Verify API key bằng fail-closed identity và constant-time comparison",
        "knowledge": "Boundary lấy nullable header, fail closed bằng 401 khi thiếu/sai, so secret material không có early-exit timing leak và trả bounded caller identity cho per-user control sau. Caller-supplied user ID chỉ là attribution input, không tự là proof identity.",
        "remediation_target": "Luyện missing, wrong-prefix, exact, malformed và forged-user case.",
        "is_core": true
      },
      {
        "kc_id": "kc-async-agent-job-lifecycle",
        "group_id": "day12-g-lifecycle",
        "name": "Mô hình hóa async agent job lifecycle",
        "knowledge": "Job submit tách acceptance khỏi execution và cần stable job identity, queued/running/terminal state cùng status/result retrieval path. HTTP accepted không chứng minh work đã xong; repeated submission hoặc worker retry phải có idempotency policy rõ.",
        "remediation_target": "Luyện normal completion, worker retry, duplicate submission và missing-result.",
        "is_core": true
      },
      {
        "kc_id": "kc-auth-pattern-caller-fit",
        "group_id": "day12-g-edge",
        "name": "Chọn API key, JWT hoặc delegated OAuth theo caller/delegation need",
        "knowledge": "API key nhận diện service/integration, JWT mang signed claim có hạn để verify stateless, delegated OAuth cho user authorization mà không chia sẻ credential. Lựa chọn theo caller identity, delegation, revocation, audience, lifetime và operational complexity.",
        "remediation_target": "Luyện caller matrix có compromised credential, delegation và revocation.",
        "is_core": true
      },
      {
        "kc_id": "kc-bounded-backoff-retry",
        "group_id": "day12-g-reliability",
        "name": "Chỉ retry dependency failure phù hợp bằng bounded backoff",
        "knowledge": "Retry policy phân loại failure, cap attempt/elapsed time, dùng exponential backoff có jitter, tôn trọng server retry hint và dừng theo request deadline. Không retry invalid input hoặc non-idempotent effect chưa được bảo vệ.",
        "remediation_target": "Luyện 429, 5xx, timeout, validation error, expired deadline và unsafe effect.",
        "is_core": true
      },
      {
        "kc_id": "kc-browser-bff-secret-boundary",
        "group_id": "day12-g-platform",
        "name": "Giữ provider credential sau Backend-for-Frontend boundary",
        "knowledge": "Public build variable bị nhúng vào browser code tải xuống. BFF auth user, áp rate/cost policy, giữ provider secret server-side và forward request có bound; CORS/obfuscation không phải authorization.",
        "remediation_target": "Luyện browser bundle inspection và proxy-abuse case.",
        "is_core": true
      },
      {
        "kc_id": "kc-checkpoint-replay-boundary",
        "group_id": "day12-g-durable",
        "name": "Phân biệt node checkpoint replay với call-level durable execution",
        "knowledge": "Node-level checkpoint ghi completed node nhưng unfinished node có thể rerun model/tool call bên trong sau recovery. Call-level durable execution journal các output đó riêng. Hai cơ chế vì vậy có replay granularity và duplicate-work risk khác nhau.",
        "remediation_target": "Luyện crash giữa các node và giữa một multi-call node.",
        "is_core": true
      },
      {
        "kc_id": "kc-ci-cd-release-stage-distinction",
        "group_id": "day12-g-delivery",
        "name": "Phân biệt CI verification với CD promotion",
        "knowledge": "CI kiểm mỗi change trong environment sạch; CD chỉ promote artifact đã định danh và pass gate. Test, build, deploy, post-deploy verification có evidence/failure meaning khác nhau, và pull-request verification không được tự publish production.",
        "remediation_target": "Luyện pull request, main push, failed test/build và manual promotion path.",
        "is_core": true
      },
      {
        "kc_id": "kc-ci-job-dependency-gating",
        "group_id": "day12-g-delivery",
        "name": "Encode job dependency và branch condition thành release gate",
        "knowledge": "Job chạy độc lập nếu workflow không khai dependency. Deploy cần dependency test/build rõ cùng branch/event condition; secret chỉ inject vào job cần nó, reusable action pin version đã review.",
        "remediation_target": "Luyện reordered YAML, failed prerequisite, forked pull request, main push và missing secret.",
        "is_core": true
      },
      {
        "kc_id": "kc-circuit-breaker-state-control",
        "group_id": "day12-g-reliability",
        "name": "Control dependency call bằng circuit-breaker state machine",
        "knowledge": "Closed gọi bình thường và ghi failure, open reject nhanh khi dependency incident, half-open cho một recovery probe có giới hạn sau recovery interval. Failure threshold, cooldown, probe rule và fallback phải rõ để breaker giảm amplification thay vì che permanent failure.",
        "remediation_target": "Luyện transient failure, sustained outage, partial recovery, probe failure và fallback.",
        "is_core": true
      },
      {
        "kc_id": "kc-clean-build-test-selection",
        "group_id": "day12-g-delivery",
        "name": "Chọn test/build check cho clean runner, tránh live dependency và vòng tự tham chiếu",
        "knowledge": "CI cài declared dependency và build image trên fresh runner để lộ hidden local file. Nó chạy deterministic repo test, còn check cần live service chưa deploy hoặc kiểm chính completed badge của workflow thì đặt chỗ khác.",
        "remediation_target": "Luyện missing file, env variable, live test, badge check và network-dependent test.",
        "is_core": true
      },
      {
        "kc_id": "kc-cloud-resource-layer-mapping",
        "group_id": "day12-g-foundations",
        "name": "Map trách nhiệm của agent vào các lớp cloud resource",
        "knowledge": "Agent service trải qua client, gateway, backend, model, data và infrastructure. Compute chạy service, storage giữ artifact/state, networking route và isolate traffic, còn IAM giới hạn ai hoặc workload nào được truy cập; tên sản phẩm không thay được việc gán trách nhiệm.",
        "remediation_target": "Luyện map component cụ thể sang resource, access và failure ownership.",
        "is_core": true
      },
      {
        "kc_id": "kc-cloud-runtime-tier-fit",
        "group_id": "day12-g-platform",
        "name": "Ghép agent workload constraint với cloud runtime tier",
        "knowledge": "Runtime fit theo duration, connection support, state model, scale behavior, GPU/control need, operational burden và cost shape. Free tier/vendor limit có ngày là fact phải verify, không phải ranking vĩnh viễn.",
        "remediation_target": "Luyện workload-runtime decision khi đổi từng constraint.",
        "is_core": true
      },
      {
        "kc_id": "kc-cloud-service-binding-verification",
        "group_id": "day12-g-platform",
        "name": "Bind và verify cloud service qua network/config contract được cấp",
        "knowledge": "Deploy chỉ chạy khi process listen assigned port/public interface, environment/backing service đã bind, external health/readiness pass, auth reject unauthenticated call và evidence không chứa secret value.",
        "remediation_target": "Luyện sai PORT, thiếu Redis, readiness 503 và safe evidence.",
        "is_core": true
      },
      {
        "kc_id": "kc-cloud-service-responsibility-model",
        "group_id": "day12-g-foundations",
        "name": "Chọn cloud service model theo ranh giới trách nhiệm",
        "knowledge": "IaaS mở nhiều infrastructure control và operational burden, PaaS quản nhiều runtime/scaling hơn, SaaS cung cấp capability hoàn chỉnh. Quyết định nằm ở lớp nào team phải control, patch, scale và audit, không phải vendor nào đang nổi.",
        "remediation_target": "Luyện responsibility matrix khi compliance, control và staffing thay đổi.",
        "is_core": true
      },
      {
        "kc_id": "kc-compose-service-network-and-health",
        "group_id": "day12-g-container",
        "name": "Compose service với DNS, config, persistence và dependency health contract",
        "knowledge": "Container gọi peer bằng service DNS thay vì localhost. Local stack hữu ích inject secret qua environment interpolation, externalize durable data vào volume/service và phân biệt process start với dependency readiness; `depends_on` thiếu health condition không phải reliability guarantee.",
        "remediation_target": "Luyện stack lỗi hostname, health, leaked secret và ephemeral data.",
        "is_core": true
      },
      {
        "kc_id": "kc-concurrency-queue-autoscaling",
        "group_id": "day12-g-reliability",
        "name": "Scale agent capacity theo concurrency và queue pressure",
        "knowledge": "CPU có thể bỏ sót backlog của agent I/O-bound. Policy hữu ích theo dõi active concurrency, queue depth/age, saturation, latency và dependency quota; nó định target, cooldown, minimum warm capacity, maximum replica và overload behavior.",
        "remediation_target": "Luyện burst, slow dependency, cold start, cooldown oscillation và quota ceiling.",
        "is_core": true
      },
      {
        "kc_id": "kc-container-artifact-runtime-boundary",
        "group_id": "day12-g-container",
        "name": "Phân biệt container artifact, runtime instance, volume, network và registry",
        "knowledge": "Dockerfile là build recipe, image là layered artifact bất biến, container là instance đang chạy, volume sống ngoài container, network cấp service addressing và registry phân phối image. Nhầm lifecycle gây mất data, release không tái lập và debug sai chỗ.",
        "remediation_target": "Luyện lifecycle trace thay đổi image tag, container replacement, volume, network và registry pull.",
        "is_core": true
      },
      {
        "kc_id": "kc-container-nonroot-runtime",
        "group_id": "day12-g-container",
        "name": "Chạy container với filesystem/process privilege tối thiểu",
        "knowledge": "Final image tạo unprivileged identity ổn định, chỉ cấp ownership cho path cần và switch USER trước khi start app. Non-root giảm impact khi app compromise nhưng không tự sandbox syscall, network, secret hay host mount.",
        "remediation_target": "Luyện runtime test cho filesystem operation được phép và bị cấm.",
        "is_core": true
      },
      {
        "kc_id": "kc-continuous-batching-utilization",
        "group_id": "day12-g-delivery",
        "name": "Giải thích continuous batching tăng serving utilization",
        "knowledge": "Static batch chờ mọi sequence; continuous batching nhận work mới khi decode slot trống, tăng accelerator utilization/throughput khi sequence length khác nhau. Throughput benefit phải được so dưới latency condition đã nêu.",
        "remediation_target": "Luyện mixed sequence length, freed slot, static waiting và equal-latency comparison.",
        "is_core": true
      },
      {
        "kc_id": "kc-controlled-chaos-experiment",
        "group_id": "day12-g-reliability",
        "name": "Thiết kế thử nghiệm inject failure có kiểm soát",
        "knowledge": "Chaos experiment inject một failure cụ thể trong scope có kiểm soát, nêu resilience behavior kỳ vọng, observe metric đã thống nhất và verify recovery hoặc rollback. Nó không phải phá production vô hạn và mỗi lần nên test một resilience claim cụ thể.",
        "remediation_target": "Luyện instance loss, dependency latency, cache loss, queue backlog và failed recovery.",
        "is_core": true
      },
      {
        "kc_id": "kc-conversation-state-retention-isolation",
        "group_id": "day12-g-lifecycle",
        "name": "Định key scope, retention, ordering và isolation cho conversation state",
        "knowledge": "External state vẫn cần key isolation theo tenant/user, giữ message order, serialize an toàn, maximum history và TTL rõ. Các rule này quyết định privacy/continuity độc lập với nơi store chạy.",
        "remediation_target": "Luyện interleaved user, boundary length, TTL expiry và malformed record.",
        "is_core": true
      },
      {
        "kc_id": "kc-deployment-secret-lifecycle",
        "group_id": "day12-g-edge",
        "name": "Quản deployment secret qua injection, scope, rotation, revocation và leak response",
        "knowledge": "Secret được inject runtime từ managed boundary, scope hẹp, loại khỏi code/image/browser/log/evidence và rotate không cần rebuild image. Khi key leak, revocation dừng authority; xóa file hiện tại hoặc rewrite history xử lý exposure nhưng không revoke.",
        "remediation_target": "Luyện leaked repo, log, screenshot, image và browser-bundle.",
        "is_core": true
      },
      {
        "kc_id": "kc-disaggregated-prefill-decode",
        "group_id": "day12-g-delivery",
        "name": "Tách prefill và decode capacity trong disaggregated serving",
        "knowledge": "Prefill compute-heavy trên input, decode iterative và nhạy memory bandwidth. Disaggregation scale hai phase độc lập và isolate latency class nhưng thêm KV transfer, routing, synchronization và failure boundary.",
        "remediation_target": "Luyện long-input/short-output, short-input/long-output, transfer congestion và pool failure.",
        "is_core": true
      },
      {
        "kc_id": "kc-docker-build-context-exclusion",
        "group_id": "day12-g-container",
        "name": "Định build-context boundary loại secret mà không làm mất runtime file",
        "knowledge": "`.dockerignore` kiểm soát thứ đi vào builder, không chỉ thứ xuất hiện trong final COPY. Nó phải loại secret, VCS history, virtual environment, cache và local artifact nhưng giữ application module, manifest và file cần để build/run.",
        "remediation_target": "Luyện repository tree đối kháng có hidden secret và required file tên gần giống.",
        "is_core": true
      },
      {
        "kc_id": "kc-docker-layer-cache-ordering",
        "group_id": "day12-g-container",
        "name": "Sắp Docker layer theo tần suất đổi và khả năng tái dùng dependency",
        "knowledge": "Docker invalidates layer bị đổi và mọi layer phía sau. Copy dependency manifest trước source hay đổi giúp tái dùng install layer; copy cả repo trước buộc cài lại dependency không cần thiết và có thể phình build context.",
        "remediation_target": "Luyện dự đoán cache hit sau source-only, manifest và base-image change.",
        "is_core": true
      },
      {
        "kc_id": "kc-durable-agent-replay",
        "group_id": "day12-g-durable",
        "name": "Replay recorded model/tool result trong durable agent execution",
        "knowledge": "Durable execution journal model hoặc completed-step output ở lần đầu. Sau crash, replay đọc recorded output và skip completed work thay vì gọi model/tool lại; external system vẫn cần idempotency boundary riêng.",
        "remediation_target": "Luyện crash trước record, sau record, trong unfinished step và sau external effect.",
        "is_core": true
      },
      {
        "kc_id": "kc-durable-wait-validity-recheck",
        "group_id": "day12-g-durable",
        "name": "Revalidate real-world state sau durable wait dài",
        "knowledge": "Durable runtime có thể pause nhiều tuần với ít compute nhưng reservation, quote, credential, policy và approval vẫn lão hóa bên ngoài. Resume phải revalidate time-sensitive assumption trước khi action thay vì coi decision cũ là hiện hành.",
        "remediation_target": "Luyện expired hold, changed quote, revoked token, changed policy và still-valid state.",
        "is_core": true
      },
      {
        "kc_id": "kc-egress-exfiltration-condition-model",
        "group_id": "day12-g-durable",
        "name": "Mô hình exfiltration bằng private data + untrusted content + outbound channel",
        "knowledge": "Attack path trong nguồn cần đồng thời ba điều kiện: có private data, untrusted content ảnh hưởng behavior và outbound render/tool channel truyền nó. Bỏ một điều kiện sẽ phá path đó nên architecture review phải tìm đủ ba, không chỉ inspect prompt.",
        "remediation_target": "Luyện remote image, HTML render, tool call và no-private-data variant.",
        "is_core": true
      },
      {
        "kc_id": "kc-environment-promotion-parity",
        "group_id": "day12-g-foundations",
        "name": "Giữ artifact parity nhưng tách environment configuration",
        "knowledge": "Local, staging và production phục vụ user/data khác nhau, nhưng promotion phải giữ nguyên code và image đã test. Secret, endpoint, capacity và data theo môi trường được inject riêng; staging dùng safe data nhưng exercise infrastructure/rollback gần production.",
        "remediation_target": "Luyện tìm artifact, config, data và infrastructure drift giữa các môi trường.",
        "is_core": true
      },
      {
        "kc_id": "kc-externalized-agent-state",
        "group_id": "day12-g-lifecycle",
        "name": "Externalize agent state để compute instance thay thế được",
        "knowledge": "Conversation, job và tool state cần sống qua routing, scaling/restart phải ở shared durable service. Stateless compute nghĩa là thay instance không mất authoritative state; sticky session không sửa được process-local memory.",
        "remediation_target": "Luyện route turn qua các instance và kill instance trước.",
        "is_core": true
      },
      {
        "kc_id": "kc-failclosed-sandbox-policy",
        "group_id": "day12-g-durable",
        "name": "Làm restrictive sandbox config fail closed",
        "knowledge": "Security configuration semantics là một phần control: empty allowlist với ý định allow nothing không được hiểu là no restriction. Restrictive policy invalid, missing hoặc không biểu diễn được phải deny egress/execution thay vì mở ra.",
        "remediation_target": "Luyện empty, absent, malformed, explicit-deny và explicit-allow config.",
        "is_core": true
      },
      {
        "kc_id": "kc-graceful-shutdown-signal-handoff",
        "group_id": "day12-g-reliability",
        "name": "Drain active request khi graceful shutdown",
        "knowledge": "Khi termination, instance đánh dấu không nhận traffic mới, dừng admission, cho active request hoàn tất trong platform grace period, close resource và exit trước forced termination. Grace period phải phản ánh worst supported agent-turn duration.",
        "remediation_target": "Luyện SIGTERM lúc idle, trong short turn, gần deadline và sau grace period.",
        "is_core": true
      },
      {
        "kc_id": "kc-https-cors-auth-boundary",
        "group_id": "day12-g-edge",
        "name": "Phân biệt HTTPS, CORS, authentication và authorization",
        "knowledge": "HTTPS bảo vệ traffic trên đường truyền và xác thực server endpoint; CORS quy định origin nào được browser đọc response; authentication xác lập caller identity; authorization quyết định action được phép. Không control nào thay thế control khác, và non-browser client không bị CORS ràng buộc.",
        "remediation_target": "Luyện browser/curl request từ trusted và untrusted origin, có/không TLS và credential.",
        "is_core": true
      },
      {
        "kc_id": "kc-hybrid-device-cloud-routing",
        "group_id": "day12-g-platform",
        "name": "Route work giữa on-device và cloud model theo constraint rõ",
        "knowledge": "Hybrid system giữ work phổ biến/private/offline ở local và escalate task khó lên cloud. Route phải nêu evidence, data transfer được phép, consent, failure fallback và quality limit.",
        "remediation_target": "Luyện sensitive context, weak connectivity, hard task và user refusal.",
        "is_core": true
      },
      {
        "kc_id": "kc-image-vulnerability-provenance-release",
        "group_id": "day12-g-container",
        "name": "Ra image release decision từ vulnerability, SBOM và immutable identity evidence",
        "knowledge": "Image scan báo known finding tại một thời điểm; SBOM ghi component có mặt; immutable digest xác định đúng artifact đã review. Release policy phải xét severity, reachability, fix, exception owner và rescan trigger thay vì tuyên bố image an toàn mãi.",
        "remediation_target": "Luyện release decision với mutable tag, stale database, reachable finding và exception có lý do.",
        "is_core": true
      },
      {
        "kc_id": "kc-irreversible-pivot-approval-placement",
        "group_id": "day12-g-durable",
        "name": "Đặt irreversible work cuối và gate pivot bằng human approval",
        "knowledge": "Reversible preparation và step có compensation đi trước irreversible pivot. Runtime không cho agent chuyển irreversible work lên trước và đặt human approval gate ngay trước pivot; generic approval lifecycle vẫn là prerequisite từ Day 11.",
        "remediation_target": "Luyện booking, payment, email, deletion và publication plan.",
        "is_core": true
      },
      {
        "kc_id": "kc-liveness-readiness-startup",
        "group_id": "day12-g-reliability",
        "name": "Tách nghĩa startup, liveness và readiness probe",
        "knowledge": "Startup cho phép initialization chậm, liveness hỏi có cần restart không, readiness hỏi có an toàn nhận traffic mới không. Readiness kiểm critical dependency nhưng không biến mọi optional/transient issue thành restart loop.",
        "remediation_target": "Luyện slow boot, deadlock, critical-store outage, optional-provider outage và recovery.",
        "is_core": true
      },
      {
        "kc_id": "kc-llm-gateway-failover-routing",
        "group_id": "day12-g-delivery",
        "name": "Route/failover model call bằng explicit LLM gateway policy",
        "knowledge": "Gateway cung cấp một normalized interface, route qua model/provider group, load-balance key và centralize retry, failover, cost tracking. Fallback chỉ hợp lệ khi route thay thế đáp ứng required capability và interface contract của request.",
        "remediation_target": "Luyện outage, rate limit, incompatible capability, key exhaustion và no-compatible-route.",
        "is_core": true
      },
      {
        "kc_id": "kc-load-balancing-policy-selection",
        "group_id": "day12-g-reliability",
        "name": "Chọn load-balancing policy phù hợp request và state",
        "knowledge": "Round robin chia request tương tự, least-connections phản ứng với duration lệch, sticky routing giữ affinity nhưng tạo skew và làm replacement yếu. Health filtering cùng externally stored state là điều kiện để balance an toàn qua instance thay thế được.",
        "remediation_target": "Luyện short request, long stream, failed instance và mất affinity.",
        "is_core": true
      },
      {
        "kc_id": "kc-managed-agent-runtime-tradeoff",
        "group_id": "day12-g-platform",
        "name": "Chọn managed agent runtime hay self-deployed compute",
        "knowledge": "Managed runtime có thể cấp session isolation, memory, identity và scaling, giảm infra work nhưng tăng phụ thuộc provider semantics. Self-deploy giữ stack/network control nhưng chuyển operations về team.",
        "remediation_target": "Luyện responsibility và exit matrix.",
        "is_core": true
      },
      {
        "kc_id": "kc-model-dependency-release-planning",
        "group_id": "day12-g-foundations",
        "name": "Lập release plan quanh model dependency do provider kiểm soát",
        "knowledge": "Hosted model không phải library nằm trong image: provider kiểm soát availability, throughput ceiling, deprecation và đôi khi behavior change. Release record vì vậy phải pin model/prompt version, tắt uncontrolled upgrade khi có thể, theo dõi retirement, test replacement và giữ rollback/fallback.",
        "remediation_target": "Luyện migration plan khi model retire, rate-limit và provider outage.",
        "is_core": true
      },
      {
        "kc_id": "kc-multistage-runtime-minimization",
        "group_id": "day12-g-container",
        "name": "Tách build tooling khỏi runtime stage tối giản",
        "knowledge": "Builder stage có thể chứa compiler/package tool, còn final stage chỉ nhận runtime dependency, application artifact và start contract. Multi-stage chỉ giảm attack/transfer surface khi COPY boundary loại source, cache, compiler và dev dependency không cần.",
        "remediation_target": "Luyện sửa final-stage omission và build-tool leakage.",
        "is_core": true
      },
      {
        "kc_id": "kc-paged-kv-cache-memory",
        "group_id": "day12-g-delivery",
        "name": "Lý giải paged KV-cache allocation và fragmentation",
        "knowledge": "Paged KV-cache cấp fixed-size non-contiguous block và có thể share compatible prefix block, giảm fragmentation/wasted reservation so với contiguous allocation. Usable KV capacity lớn hơn cho batch lớn hơn trong cùng VRAM.",
        "remediation_target": "Luyện variable sequence length, shared prefix, block boundary, fragmentation và fixed VRAM.",
        "is_core": true
      },
      {
        "kc_id": "kc-per-agent-shortlived-identity",
        "group_id": "day12-g-durable",
        "name": "Cấp narrow, short-lived, audience-bound identity cho từng agent task",
        "knowledge": "Mỗi agent/task dùng identity scope hẹp riêng thay vì một shared god-key. Token short-lived và audience-bound để compromised/confused-deputy use bị giới hạn trong intended service/task; share identity làm mất attribution và mở rộng blast radius.",
        "remediation_target": "Luyện shared god-key, wrong audience, excessive scope, expired token và task-specific token.",
        "is_core": true
      },
      {
        "kc_id": "kc-postdeploy-smoke-traceability",
        "group_id": "day12-g-delivery",
        "name": "Verify release đã deploy và trace về source",
        "knowledge": "Deploy command hoàn thành không đồng nghĩa service healthy. Post-deploy evidence định danh commit/artifact, chờ rollout, check external health hoặc safe functional path bằng exit status biết fail, ghi log/URL không lộ secret và trigger rollback/alert khi lỗi.",
        "remediation_target": "Luyện stale URL, non-2xx, delayed rollout, wrong commit, secret-safe log và rollback.",
        "is_core": true
      },
      {
        "kc_id": "kc-precall-cost-estimation",
        "group_id": "day12-g-edge",
        "name": "Ước tính cost của authorized request trước model call",
        "knowledge": "Admission ước tính input token từ message thực sự được authorize và reserve maximum output theo model pricing có version. Estimate được so per-request cap trước invocation; actual usage ghi sau vì estimate và bill có thể khác.",
        "remediation_target": "Luyện context khác nhau, output cap, pricing update và tokenizer mismatch.",
        "is_core": true
      },
      {
        "kc_id": "kc-prompt-semantic-cache-validity",
        "group_id": "day12-g-delivery",
        "name": "Chọn cache identity/invalidation cho prompt-prefix hoặc semantic reuse",
        "knowledge": "Prompt-prefix cache reuse computation của stable prefix giống hệt; semantic cache reuse prior answer cho query gần nghĩa nên có thể trả sai hoặc stale. Cache identity/invalidation phải gồm model, prompt/prefix version và source-data version liên quan correctness.",
        "remediation_target": "Luyện same prefix, paraphrase, model/prompt change, data refresh và stale semantic answer.",
        "is_core": true
      },
      {
        "kc_id": "kc-rate-limit-policy-selection",
        "group_id": "day12-g-edge",
        "name": "Chọn rate-limit identity, scope và algorithm theo traffic policy",
        "knowledge": "Token bucket cho bounded burst, sliding window enforce count trong recent interval, leaky bucket làm phẳng output. Policy còn chọn identity/scope—user, key, tenant, IP, route hay plan—để limit khớp abuse/cost risk mà không gộp caller không liên quan.",
        "remediation_target": "Luyện bursty, shared-IP, multi-tenant và plan-change trace.",
        "is_core": true
      },
      {
        "kc_id": "kc-remote-mcp-hosting-boundary",
        "group_id": "day12-g-platform",
        "name": "Chọn hosting/auth boundary cho local và remote MCP transport",
        "knowledge": "stdio server được spawn local; remote Streamable HTTP server được host độc lập và bảo vệ như public API. Remote deploy thêm TLS, resource-specific token validation, delegated auth, lifecycle và confused-deputy risk.",
        "remediation_target": "Luyện local, remote, wrong-audience, expired-token và network-failure.",
        "is_core": true
      },
      {
        "kc_id": "kc-reproducible-container-dependencies",
        "group_id": "day12-g-container",
        "name": "Pin runtime và dependency resolution tương thích để image tái lập",
        "knowledge": "Image tái lập dùng runtime family/base rõ, dependency resolution deterministic và build không phụ thuộc workstation state chưa khai báo. Image nhỏ chỉ có ích khi native wheel, debugging, security update và architecture compatibility vẫn thỏa.",
        "remediation_target": "Luyện clean rebuild với slim, Alpine và case native dependency không tương thích.",
        "is_core": true
      },
      {
        "kc_id": "kc-saga-compensation-design",
        "group_id": "day12-g-durable",
        "name": "Ghép saga step với compensating action rõ",
        "knowledge": "Saga phối hợp committed step qua nhiều system bằng compensating action rõ cho từng reversible step; không có global rollback tự động. Compensation order theo dependency của effect, còn irreversible work được tách thành pivot.",
        "remediation_target": "Luyện failure sau từng booking, charge, notification và log step.",
        "is_core": true
      },
      {
        "kc_id": "kc-sandbox-isolation-strength-tradeoff",
        "group_id": "day12-g-durable",
        "name": "Chọn sandbox isolation level theo strength/startup trade-off",
        "knowledge": "OS namespace/seccomp, syscall-interception sandbox, microVM và language isolate có containment strength, compatibility và startup cost khác nhau. Container boundary một mình không tự là isolation mạnh nhất cho untrusted agent tool.",
        "remediation_target": "Luyện trusted utility, dependency execution, hostile code, interactive latency và long-running job.",
        "is_core": true
      },
      {
        "kc_id": "kc-sli-slo-sla-error-budget",
        "group_id": "day12-g-reliability",
        "name": "Chuyển reliability người dùng thấy thành SLI, SLO, SLA và error budget",
        "knowledge": "SLI là ratio/distribution đo user outcome, SLO là target nội bộ trong window, SLA là cam kết bên ngoài có consequence, error budget là phần unreliability cho phép. Definition phải nêu eligible event, good event, window và exclusion có lý do.",
        "remediation_target": "Luyện partial window, exclusion, low traffic, latency distribution và tính error budget.",
        "is_core": true
      },
      {
        "kc_id": "kc-sliding-window-rate-limiter",
        "group_id": "day12-g-edge",
        "name": "Implement/test sliding-window limiter theo identity",
        "knowledge": "Redis sorted-set limiter xóa timestamp hết hạn, đếm member hiện tại, reject ở limit, ghi accepted request bằng unique member và refresh cleanup TTL. Thứ tự check-before-add cùng injected time làm boundary test được; multi-worker thật có thể cần transaction/script atomic.",
        "remediation_target": "Luyện equal timestamp, limit boundary, window expiry, hai user và concurrent arrival.",
        "is_core": true
      },
      {
        "kc_id": "kc-speculative-decoding-verification",
        "group_id": "day12-g-delivery",
        "name": "Giải thích speculative decoding có target-model verification",
        "knowledge": "Draft model nhỏ đề xuất nhiều token và target model verify proposal song song; target vẫn là authority, không serve draft token chưa check. Benefit phụ thuộc lượng proposal được accept so với draft/verification overhead.",
        "remediation_target": "Luyện full acceptance, early rejection, low acceptance và expensive draft.",
        "is_core": true
      },
      {
        "kc_id": "kc-sse-event-stream-contract",
        "group_id": "day12-g-lifecycle",
        "name": "Implement SSE stream có data và terminal event rõ",
        "knowledge": "SSE endpoint emit frame parse được theo tiến trình và tách token/progress khỏi terminal completion event rõ. Chỉ có streaming content type không cho client biết partial output đã complete chưa.",
        "remediation_target": "Luyện stream zero/một/nhiều chunk và duplicate terminal event.",
        "is_core": true
      },
      {
        "kc_id": "kc-sse-proxy-reconnect-contract",
        "group_id": "day12-g-lifecycle",
        "name": "Vận hành SSE qua proxy buffering, idle timeout và reconnect",
        "knowledge": "Streaming production cần early byte, heartbeat khi work im lặng, kiểm soát proxy buffering và event identity hoặc resume policy. Stream logic đúng vẫn có thể đến một cục hoặc duplicate sau reconnect.",
        "remediation_target": "Luyện delayed stream qua proxy, disconnect, reconnect và resume.",
        "is_core": true
      },
      {
        "kc_id": "kc-stable-intent-idempotency",
        "group_id": "day12-g-durable",
        "name": "Replay một side effect an toàn bằng stable idempotency key",
        "knowledge": "Mutating request mang một stable idempotency key qua mọi retry. Receiver ghi first result dưới key bằng atomic create-if-absent rồi trả recorded result cho retry sau thay vì execute effect lại; record cần retention period rõ.",
        "remediation_target": "Luyện same-key retry, new-key retry, simultaneous duplicate, cached failure và expired record.",
        "is_core": true
      },
      {
        "kc_id": "kc-structured-request-observability",
        "group_id": "day12-g-delivery",
        "name": "Emit request event có cấu trúc, correlate được, query được và không lộ secret",
        "knowledge": "Production log emit một structured event mỗi dòng với timestamp, level, event name, request/trace correlation, bounded identity, latency, status, token/cost usage và safe error field. Field name ổn định, user content/secret bị loại hoặc transform, stdout là transport cho platform collector.",
        "remediation_target": "Luyện concurrent request, multi-line output, missing correlation, secret leak, error event và cost aggregation.",
        "is_core": true
      },
      {
        "kc_id": "kc-tenant-budget-accounting",
        "group_id": "day12-g-edge",
        "name": "Account actual spend và enforce budget theo tenant-period",
        "knowledge": "Budget key scope spend theo identity/accounting period, check accumulated spend trước work, ghi actual cost sau đó và chỉ expire sau accounting window. Rate limit không thay money limit vì request có token cost rất khác nhau.",
        "remediation_target": "Luyện month rollover, malformed stored value, two-user isolation và actual cost recording.",
        "is_core": true
      },
      {
        "kc_id": "kc-timeout-bulkhead-isolation",
        "group_id": "day12-g-reliability",
        "name": "Bound dependency time/concurrency bằng timeout và bulkhead",
        "knowledge": "Connection, read và end-to-end timeout giới hạn thời gian chờ; bulkhead tách concurrency pool để một dependency hay workload class không exhaust toàn service.",
        "remediation_target": "Luyện slow model, hung tool, noisy workload và dependency pool tách biệt.",
        "is_core": true
      },
      {
        "kc_id": "kc-trusted-channel-egress-limitation",
        "group_id": "day12-g-durable",
        "name": "Nhận biết giới hạn destination allowlist với trusted egress channel",
        "knowledge": "Destination allowlist là infrastructure control mạnh nhưng trusted provider proxy tự nó có thể mang attacker-controlled render request và leaked data. Khi không thể bỏ required channel, destination policy phải kết hợp render, payload hoặc capability control, không được coi là đủ một mình.",
        "remediation_target": "Luyện direct attacker URL, trusted proxy URL, remote render disabled và protected-payload blocked.",
        "is_core": true
      },
      {
        "kc_id": "kc-twelve-factor-config-port-parity",
        "group_id": "day12-g-foundations",
        "name": "Áp environment config và port binding cho một deployable artifact",
        "knowledge": "Service deploy được phải đọc secret/non-secret config từ environment, fail fast khi thiếu secret bắt buộc, bind port do platform cấp và chạy cùng artifact mà không sửa code giữa các môi trường. `.env` local chỉ là development loader, không phải production secret store.",
        "remediation_target": "Luyện config matrix có missing, malformed, local, staging và production value.",
        "is_core": true
      },
      {
        "kc_id": "kc-vertical-horizontal-scaling-decision",
        "group_id": "day12-g-reliability",
        "name": "Chọn vertical hay horizontal scaling theo bottleneck thật",
        "knowledge": "Vertical scaling tăng resource cho một instance, đơn giản nhưng có trần; horizontal scaling tăng instance và cần stateless routing, shared state, coordination. Quyết định theo CPU, memory, connection, queue hoặc provider bottleneck đo được chứ không chỉ theo traffic.",
        "remediation_target": "Luyện trace bị giới hạn bởi CPU, memory, connection, queue và provider.",
        "is_core": true
      },
      {
        "kc_id": "kc-zero-downtime-rollout-sequencing",
        "group_id": "day12-g-reliability",
        "name": "Sắp zero-downtime rollout và rollback",
        "knowledge": "Rolling, blue-green và canary khác nhau về parallel capacity, traffic control, observation và rollback speed. Sequence an toàn start capacity mới, pass startup/readiness/compatibility, shift traffic có giới hạn, observe signal đã chốt rồi drain capacity cũ; rollback phải giữ schema/state compatibility.",
        "remediation_target": "Luyện rolling, blue-green, canary, failed readiness, bad metric và incompatible migration.",
        "is_core": true
      }
    ],
    "questions": [
      {
        "servable": true,
        "role": "initial_check",
        "hints": [
          {
            "text": "Đối chiếu giả định local với ranh giới và hậu quả cần kiểm tra trước khi chọn.",
            "hint_id": "h1",
            "after_attempt": 1
          }
        ],
        "module_id": "day12-g-foundations",
        "max_points": 1,
        "interaction": {
          "type": "single_select",
          "prompt": "Bối cảnh:\nAgent chạy tốt trên laptop cho một người dùng; production có 200 người dùng đồng thời, thường xuyên restart, HTTPS công khai và chi phí tính theo token.\n\nCâu hỏi:\nKế hoạch nào xử lý đúng khoảng cách khi đưa lên production?",
          "choices": [
            {
              "text": "Viết yêu cầu production kèm bài kiểm tra từng ranh giới",
              "choice_id": "a"
            },
            {
              "text": "Đóng gói container nhưng vẫn giữ state/config trên máy local và thêm script restart",
              "choice_id": "b"
            },
            {
              "text": "Nâng cấp model trước rồi giữ nguyên vòng đời local nếu throughput tăng",
              "choice_id": "c"
            },
            {
              "text": "Chạy nguyên laptop trên VM rồi mở thêm HTTPS công khai",
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
        "question_id": "d12-q001",
        "primary_kc_id": "kc-agent-production-gap",
        "grading_method": "deterministic",
        "question_version": 2,
        "cognitive_operation": "Analyze",
        "contributing_kc_ids": [],
        "estimated_difficulty": "medium"
      },
      {
        "servable": false,
        "role": "reassessment",
        "hints": [
          {
            "text": "Nối từng dấu hiệu trong bối cảnh với một thay đổi và phép kiểm có thể quan sát.",
            "hint_id": "h1",
            "after_attempt": 1
          }
        ],
        "module_id": "day12-g-foundations",
        "max_points": 4,
        "interaction": {
          "type": "short_text",
          "prompt": "Bối cảnh:\nInstance mới không có `.env` local, session trong memory mất khi restart và health check chỉ kiểm tra process.\n\nCâu hỏi:\nChẩn đoán ba giả định local sai trong bối cảnh, nêu phép kiểm cho từng giả định, rồi bổ sung phép kiểm concurrency/chi phí trước production.",
          "prompt_presentation": {
            "format": "sectioned_plain_text",
            "preserve_line_breaks": true
          }
        },
        "question_id": "d12-q002",
        "primary_kc_id": "kc-agent-production-gap",
        "grading_method": "criterion_rubric",
        "question_version": 2,
        "cognitive_operation": "Analyze",
        "contributing_kc_ids": [],
        "estimated_difficulty": "hard"
      },
      {
        "servable": true,
        "role": "initial_check",
        "hints": [
          {
            "text": "Xác định lớp tài nguyên mà thành phần trực tiếp sử dụng.",
            "hint_id": "h1",
            "after_attempt": 1
          }
        ],
        "module_id": "day12-g-foundations",
        "max_points": 4,
        "interaction": {
          "left": [
            {
              "id": "x1",
              "text": "API/worker"
            },
            {
              "id": "x2",
              "text": "Tài liệu vector"
            },
            {
              "id": "x3",
              "text": "Ingress/egress dùng TLS"
            },
            {
              "id": "x4",
              "text": "Thông tin xác thực của workload"
            }
          ],
          "type": "matching",
          "right": [
            {
              "id": "r1",
              "text": "Compute"
            },
            {
              "id": "r2",
              "text": "Storage"
            },
            {
              "id": "r3",
              "text": "Networking"
            },
            {
              "id": "r4",
              "text": "IAM"
            }
          ],
          "prompt": "Bối cảnh:\nMột agent service có API/worker, vector store, cổng vào công khai và thông tin xác thực để truy cập model.\n\nCâu hỏi:\nGhép từng thành phần với lớp tài nguyên chính.",
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
        "question_id": "d12-q003",
        "primary_kc_id": "kc-cloud-resource-layer-mapping",
        "grading_method": "deterministic",
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
            "text": "Nối từng thành phần với lớp tài nguyên, rồi kiểm tra identity còn thiếu ở ranh giới nào.",
            "hint_id": "h1",
            "after_attempt": 1
          }
        ],
        "module_id": "day12-g-foundations",
        "max_points": 5,
        "interaction": {
          "type": "short_text",
          "prompt": "Bối cảnh:\nAgent cần đọc tài liệu private, gọi model provider và mở một public endpoint; worker chưa có identity để truy cập storage.\n\nCâu hỏi:\nGán từng thành phần và ranh giới tin cậy vào các lớp tài nguyên, rồi tìm dependency còn thiếu.",
          "prompt_presentation": {
            "format": "sectioned_plain_text",
            "preserve_line_breaks": true
          }
        },
        "question_id": "d12-q004",
        "primary_kc_id": "kc-cloud-resource-layer-mapping",
        "grading_method": "criterion_rubric",
        "question_version": 2,
        "cognitive_operation": "Analyze",
        "contributing_kc_ids": [],
        "estimated_difficulty": "hard"
      },
      {
        "servable": true,
        "role": "initial_check",
        "hints": [
          {
            "text": "Tách phần vận hành đã giao cho provider khỏi ranh giới ứng dụng và trách nhiệm giải trình vẫn giữ lại.",
            "hint_id": "h1",
            "after_attempt": 1
          }
        ],
        "module_id": "day12-g-foundations",
        "max_points": 1,
        "interaction": {
          "type": "multi_select",
          "prompt": "Bối cảnh:\nTeam hai người chọn PaaS/managed compute cho workload stateless; provider vận hành hạ tầng và runtime nền.\n\nCâu hỏi:\nNhững trách nhiệm nào vẫn thuộc team? Chọn tất cả phương án đúng.",
          "choices": [
            {
              "text": "Mã ứng dụng và config lúc chạy",
              "choice_id": "a"
            },
            {
              "text": "IAM, quyền truy cập dữ liệu và bằng chứng audit",
              "choice_id": "b"
            },
            {
              "text": "Policy nghiệp vụ và đánh giá chất lượng",
              "choice_id": "c"
            },
            {
              "text": "Máy chủ vật lý và việc patch nền do team tự làm",
              "choice_id": "d"
            },
            {
              "text": "Provider nhận cả trách nhiệm giải trình về ứng dụng, dữ liệu và policy",
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
        "question_id": "d12-q005",
        "primary_kc_id": "kc-cloud-service-responsibility-model",
        "grading_method": "deterministic",
        "question_version": 2,
        "cognitive_operation": "Analyze",
        "contributing_kc_ids": [],
        "estimated_difficulty": "medium"
      },
      {
        "servable": false,
        "role": "reassessment",
        "hints": [
          {
            "text": "Đối chiếu mức kiểm soát cần giữ với phần gánh nặng vận hành có thể giao cho provider.",
            "hint_id": "h1",
            "after_attempt": 1
          }
        ],
        "module_id": "day12-g-foundations",
        "max_points": 4,
        "interaction": {
          "type": "short_text",
          "prompt": "Bối cảnh:\nMột ngân hàng cần cô lập network tùy biến, lịch patch và quyền kiểm soát runtime mức thấp; team có nhân sự platform.\n\nCâu hỏi:\nChọn service model và phân chia trách nhiệm giữ lại/giao cho provider.",
          "prompt_presentation": {
            "format": "sectioned_plain_text",
            "preserve_line_breaks": true
          }
        },
        "question_id": "d12-q006",
        "primary_kc_id": "kc-cloud-service-responsibility-model",
        "grading_method": "criterion_rubric",
        "question_version": 2,
        "cognitive_operation": "Analyze",
        "contributing_kc_ids": [],
        "estimated_difficulty": "hard"
      },
      {
        "servable": true,
        "role": "initial_check",
        "hints": [
          {
            "text": "Kiểm tra artifact có giữ nguyên qua các environment hay không; chỉ config và data mới được tách.",
            "hint_id": "h1",
            "after_attempt": 1
          }
        ],
        "module_id": "day12-g-foundations",
        "max_points": 1,
        "interaction": {
          "type": "single_select",
          "prompt": "Bối cảnh:\nDev, staging và prod đều build image từ ba branch; một bug chỉ xuất hiện trong image prod.\n\nCâu hỏi:\nNguyên tắc promotion nào phải áp dụng để tránh drift này?",
          "choices": [
            {
              "text": "Build lại image riêng cho mỗi environment",
              "choice_id": "a"
            },
            {
              "text": "Promote một digest immutable đã được kiểm thử",
              "choice_id": "b"
            },
            {
              "text": "Dùng chung credential production",
              "choice_id": "c"
            },
            {
              "text": "Dùng dữ liệu production để giữ parity",
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
        "question_id": "d12-q007",
        "primary_kc_id": "kc-environment-promotion-parity",
        "grading_method": "deterministic",
        "question_version": 2,
        "cognitive_operation": "Analyze",
        "contributing_kc_ids": [],
        "estimated_difficulty": "medium"
      },
      {
        "servable": false,
        "role": "reassessment",
        "hints": [
          {
            "text": "Giữ nguyên artifact; chỉ tách config, data và capacity theo environment rồi thử đường rollback.",
            "hint_id": "h1",
            "after_attempt": 1
          }
        ],
        "module_id": "day12-g-foundations",
        "max_points": 4,
        "interaction": {
          "type": "short_text",
          "prompt": "Bối cảnh:\nImage digest D đã pass staging; prod cần scale 10 replicas, credential riêng và database production.\n\nCâu hỏi:\nThiết kế promotion/rollback để giữ parity nhưng tách config an toàn.",
          "prompt_presentation": {
            "format": "sectioned_plain_text",
            "preserve_line_breaks": true
          }
        },
        "question_id": "d12-q008",
        "primary_kc_id": "kc-environment-promotion-parity",
        "grading_method": "criterion_rubric",
        "question_version": 2,
        "cognitive_operation": "Create",
        "contributing_kc_ids": [],
        "estimated_difficulty": "hard"
      },
      {
        "servable": true,
        "role": "initial_check",
        "hints": [
          {
            "text": "Tìm giá trị platform cấp lúc chạy và tách nó khỏi secret nằm trong source.",
            "hint_id": "h1",
            "after_attempt": 1
          }
        ],
        "module_id": "day12-g-foundations",
        "max_points": 1,
        "interaction": {
          "type": "single_select",
          "prompt": "Bối cảnh:\nImage hardcode cổng 8000 và API key trong source; platform cấp PORT=4317.\n\nCâu hỏi:\nSửa nào đúng?",
          "choices": [
            {
              "text": "Đọc `.env` lúc build image và dùng chung giá trị cho các environment",
              "choice_id": "a"
            },
            {
              "text": "Giữ cổng 8000 làm cổng chính và bỏ qua PORT=4317 khi chạy",
              "choice_id": "b"
            },
            {
              "text": "Đọc config lúc chạy và bind vào cổng platform cấp",
              "choice_id": "c"
            },
            {
              "text": "Đưa PORT và endpoint vào secret store cùng với API key",
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
        "question_id": "d12-q009",
        "primary_kc_id": "kc-twelve-factor-config-port-parity",
        "grading_method": "deterministic",
        "question_version": 2,
        "cognitive_operation": "Analyze",
        "contributing_kc_ids": [],
        "estimated_difficulty": "easy"
      },
      {
        "servable": false,
        "role": "reassessment",
        "hints": [
          {
            "text": "Kiểm tra giá trị nào thuộc environment, giá trị nào là secret bắt buộc và image có giữ nguyên không.",
            "hint_id": "h1",
            "after_attempt": 1
          }
        ],
        "module_id": "day12-g-foundations",
        "max_points": 4,
        "interaction": {
          "type": "short_text",
          "prompt": "Bối cảnh:\nCùng một image phải chạy ở staging với PORT=5000 và mock endpoint, production với PORT=7000 và real endpoint.\n\nCâu hỏi:\nĐịnh nghĩa config contract và phép kiểm parity.",
          "prompt_presentation": {
            "format": "sectioned_plain_text",
            "preserve_line_breaks": true
          }
        },
        "question_id": "d12-q010",
        "primary_kc_id": "kc-twelve-factor-config-port-parity",
        "grading_method": "criterion_rubric",
        "question_version": 2,
        "cognitive_operation": "Create",
        "contributing_kc_ids": [],
        "estimated_difficulty": "hard"
      },
      {
        "servable": true,
        "role": "initial_check",
        "hints": [
          {
            "text": "Đối chiếu thời hạn sunset với việc kiểm thử, capacity, chuyển traffic và rollback.",
            "hint_id": "h1",
            "after_attempt": 1
          }
        ],
        "module_id": "day12-g-foundations",
        "max_points": 1,
        "interaction": {
          "type": "single_select",
          "prompt": "Bối cảnh:\nProvider báo model M sẽ sunset sau 30 ngày; replacement R có quota thấp hơn và hành vi output khác.\n\nCâu hỏi:\nKế hoạch phát hành nào đầy đủ?",
          "choices": [
            {
              "text": "Giữ model cũ vì dependency đã được pin",
              "choice_id": "a"
            },
            {
              "text": "Đổi tên model đúng ngày sunset",
              "choice_id": "b"
            },
            {
              "text": "Dùng autoscaling local để thay quota của provider",
              "choice_id": "c"
            },
            {
              "text": "Đánh giá – kiểm tra capacity – canary – rollback",
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
        "question_id": "d12-q011",
        "primary_kc_id": "kc-model-dependency-release-planning",
        "grading_method": "deterministic",
        "question_version": 2,
        "cognitive_operation": "Analyze",
        "contributing_kc_ids": [],
        "estimated_difficulty": "medium"
      },
      {
        "servable": false,
        "role": "reassessment",
        "hints": [
          {
            "text": "Tính capacity của R trước, rồi kiểm contract, chuyển traffic theo giai đoạn và giữ phương án quay lui cho M.",
            "hint_id": "h1",
            "after_attempt": 1
          }
        ],
        "module_id": "day12-g-foundations",
        "max_points": 4,
        "interaction": {
          "type": "short_text",
          "prompt": "Bối cảnh:\nTraffic là 100 rps; R hiện chỉ được cấp 60 rps; prompt contract chưa được kiểm và M còn 21 ngày.\n\nCâu hỏi:\nLập lịch chuyển đổi có tính đến capacity, kiểm chứng, chuyển traffic và phương án quay lui.",
          "prompt_presentation": {
            "format": "sectioned_plain_text",
            "preserve_line_breaks": true
          }
        },
        "question_id": "d12-q012",
        "primary_kc_id": "kc-model-dependency-release-planning",
        "grading_method": "criterion_rubric",
        "question_version": 2,
        "cognitive_operation": "Create",
        "contributing_kc_ids": [],
        "estimated_difficulty": "hard"
      },
      {
        "servable": true,
        "role": "initial_check",
        "hints": [
          {
            "text": "Tách công thức build, artifact, instance và state.",
            "hint_id": "h1",
            "after_attempt": 1
          }
        ],
        "module_id": "day12-g-container",
        "max_points": 4,
        "interaction": {
          "left": [
            {
              "id": "x1",
              "text": "Dockerfile"
            },
            {
              "id": "x2",
              "text": "Image digest"
            },
            {
              "id": "x3",
              "text": "Container đang chạy"
            },
            {
              "id": "x4",
              "text": "Volume được mount"
            }
          ],
          "type": "matching",
          "right": [
            {
              "id": "r1",
              "text": "Công thức build"
            },
            {
              "id": "r2",
              "text": "Định danh artifact bất biến"
            },
            {
              "id": "r3",
              "text": "Instance của process lúc chạy"
            },
            {
              "id": "r4",
              "text": "State lúc chạy nằm ngoài image"
            }
          ],
          "prompt": "Bối cảnh:\nCần phân biệt artifact với instance lúc chạy.\n\nCâu hỏi:\nGhép từng thành phần với đúng vai trò.",
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
        "question_id": "d12-q013",
        "primary_kc_id": "kc-container-artifact-runtime-boundary",
        "grading_method": "deterministic",
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
            "text": "Theo dõi riêng mã, dữ liệu, địa chỉ service và instance khi container bị xóa rồi tạo lại.",
            "hint_id": "h1",
            "after_attempt": 1
          }
        ],
        "module_id": "day12-g-container",
        "max_points": 4,
        "interaction": {
          "type": "short_text",
          "prompt": "Bối cảnh:\nỨng dụng ghi tệp tải lên vào volume có tên V; image I2 được đẩy lên registry rồi ba container được tạo qua các lần triển khai.\n\nCâu hỏi:\nTheo dõi mã trong artifact, dữ liệu bền vững, địa chỉ service và định danh instance qua việc xóa rồi triển khai lại.",
          "prompt_presentation": {
            "format": "sectioned_plain_text",
            "preserve_line_breaks": true
          }
        },
        "question_id": "d12-q014",
        "primary_kc_id": "kc-container-artifact-runtime-boundary",
        "grading_method": "criterion_rubric",
        "question_version": 2,
        "cognitive_operation": "Analyze",
        "contributing_kc_ids": [],
        "estimated_difficulty": "hard"
      },
      {
        "servable": true,
        "role": "follow_up",
        "hints": [
          {
            "text": "Tách định danh artifact khỏi state của từng instance.",
            "hint_id": "h1",
            "after_attempt": 1
          }
        ],
        "module_id": "day12-g-container",
        "max_points": 1,
        "interaction": {
          "type": "single_select",
          "prompt": "Bối cảnh:\nHai container khởi động từ cùng image digest nhưng nhận config và volume khác nhau.\n\nCâu hỏi:\nKết luận nào đúng?",
          "choices": [
            {
              "text": "Cùng image vẫn có state lúc chạy khác nhau",
              "choice_id": "a"
            },
            {
              "text": "Cùng image nên hai container dùng chung một process",
              "choice_id": "b"
            },
            {
              "text": "Volume được đóng gói vào image digest khi mount",
              "choice_id": "c"
            },
            {
              "text": "Config lúc chạy tự đổi image digest",
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
        "question_id": "d12-q015",
        "primary_kc_id": "kc-container-artifact-runtime-boundary",
        "grading_method": "deterministic",
        "question_version": 2,
        "cognitive_operation": "Analyze",
        "contributing_kc_ids": [],
        "estimated_difficulty": "easy"
      },
      {
        "servable": true,
        "role": "initial_check",
        "hints": [
          {
            "text": "Xác định ba thứ phải ổn định: base image, dependency resolution và architecture đích.",
            "hint_id": "h1",
            "after_attempt": 1
          }
        ],
        "module_id": "day12-g-container",
        "max_points": 1,
        "interaction": {
          "type": "single_select",
          "prompt": "Bối cảnh:\nDockerfile dùng `python:latest` và `pip install -r requirements.txt` với dải phiên bản; build arm64 hôm nay có thể khác amd64 tuần sau.\n\nCâu hỏi:\nĐiều gì cần pin trước để build tái lập?",
          "choices": [
            {
              "text": "Cache cũ và timestamp của lần build",
              "choice_id": "a"
            },
            {
              "text": "Ưu tiên image nhỏ nhất với package mới nhất",
              "choice_id": "b"
            },
            {
              "text": "Pin base image, khóa dependency và architecture đích",
              "choice_id": "c"
            },
            {
              "text": "Pin số layer và thứ tự metadata của label",
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
        "question_id": "d12-q016",
        "primary_kc_id": "kc-reproducible-container-dependencies",
        "grading_method": "deterministic",
        "question_version": 2,
        "cognitive_operation": "Analyze",
        "contributing_kc_ids": [],
        "estimated_difficulty": "medium"
      },
      {
        "servable": false,
        "role": "reassessment",
        "hints": [
          {
            "text": "Kiểm tra architecture và libc trước; sau đó mới pin dependency và build lại từ cache rỗng.",
            "hint_id": "h1",
            "after_attempt": 1
          }
        ],
        "module_id": "day12-g-container",
        "max_points": 4,
        "interaction": {
          "type": "short_text",
          "prompt": "Bối cảnh:\nGói native chỉ có wheel cho glibc amd64; môi trường production đích là arm64 Alpine.\n\nCâu hỏi:\nThiết kế cách xác minh clean build và xử lý tương thích.",
          "prompt_presentation": {
            "format": "sectioned_plain_text",
            "preserve_line_breaks": true
          }
        },
        "question_id": "d12-q017",
        "primary_kc_id": "kc-reproducible-container-dependencies",
        "grading_method": "criterion_rubric",
        "question_version": 2,
        "cognitive_operation": "Create",
        "contributing_kc_ids": [],
        "estimated_difficulty": "hard"
      },
      {
        "servable": true,
        "role": "initial_check",
        "hints": [
          {
            "text": "Đưa input ổn định trước input hay thay đổi.",
            "hint_id": "h1",
            "after_attempt": 1
          }
        ],
        "module_id": "day12-g-container",
        "max_points": 1,
        "interaction": {
          "type": "ordering",
          "prompt": "Bối cảnh:\nMã nguồn thay đổi thường xuyên, lockfile ít đổi.\n\nCâu hỏi:\nSắp xếp các bước Dockerfile để tái dùng dependency cache mà vẫn build tái lập.",
          "options": [
            {
              "text": "Chép lockfile/manifest",
              "option_id": "o1"
            },
            {
              "text": "Cài dependency bằng chế độ khóa (`--locked`)",
              "option_id": "o2"
            },
            {
              "text": "Chép mã nguồn ứng dụng",
              "option_id": "o3"
            },
            {
              "text": "Build ứng dụng",
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
        "question_id": "d12-q018",
        "primary_kc_id": "kc-docker-layer-cache-ordering",
        "grading_method": "deterministic",
        "question_version": 2,
        "cognitive_operation": "Apply",
        "contributing_kc_ids": [],
        "estimated_difficulty": "easy"
      },
      {
        "servable": false,
        "role": "reassessment",
        "hints": [
          {
            "text": "So sánh file nào đổi với cache key của layer cài dependency.",
            "hint_id": "h1",
            "after_attempt": 1
          }
        ],
        "module_id": "day12-g-container",
        "max_points": 4,
        "interaction": {
          "type": "short_text",
          "prompt": "Bối cảnh:\nRepo có manifest dependency đổi hàng tháng và mã nguồn đổi mỗi giờ.\n\nCâu hỏi:\nSắp xếp layer để thay đổi chỉ ở mã nguồn vẫn tái dùng dependency cache, và nêu khi nào bước cài dependency phải build lại.",
          "prompt_presentation": {
            "format": "sectioned_plain_text",
            "preserve_line_breaks": true
          }
        },
        "question_id": "d12-q019",
        "primary_kc_id": "kc-docker-layer-cache-ordering",
        "grading_method": "criterion_rubric",
        "question_version": 2,
        "cognitive_operation": "Apply",
        "contributing_kc_ids": [],
        "estimated_difficulty": "hard"
      },
      {
        "servable": true,
        "role": "initial_check",
        "hints": [
          {
            "text": "Tách những thứ chỉ cần lúc build khỏi filesystem thật sự cần khi chạy.",
            "hint_id": "h1",
            "after_attempt": 1
          }
        ],
        "module_id": "day12-g-container",
        "max_points": 1,
        "interaction": {
          "type": "single_select",
          "prompt": "Bối cảnh:\nImage một stage giữ compiler, bộ dữ liệu test và cache của package manager dù runtime chỉ cần binary cùng dependency của ứng dụng.\n\nCâu hỏi:\nThiết kế nào đúng?",
          "choices": [
            {
              "text": "Giảm kích thước bằng cách xóa thủ công vài file trong stage hiện tại",
              "choice_id": "a"
            },
            {
              "text": "Tối ưu cache của một stage thay cho việc tách builder và runtime",
              "choice_id": "b"
            },
            {
              "text": "Tách builder khỏi artifact runtime",
              "choice_id": "c"
            },
            {
              "text": "Dùng kích thước image như một tín hiệu đánh giá security",
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
        "question_id": "d12-q020",
        "primary_kc_id": "kc-multistage-runtime-minimization",
        "grading_method": "deterministic",
        "question_version": 2,
        "cognitive_operation": "Analyze",
        "contributing_kc_ids": [],
        "estimated_difficulty": "medium"
      },
      {
        "servable": false,
        "role": "reassessment",
        "hints": [
          {
            "text": "Tách build artifact trước, rồi kiểm tra chính final image có đủ thư viện để khởi động.",
            "hint_id": "h1",
            "after_attempt": 1
          }
        ],
        "module_id": "day12-g-container",
        "max_points": 4,
        "interaction": {
          "type": "short_text",
          "prompt": "Bối cảnh:\nBuilder tạo wheel và asset đã compile; runtime thiếu shared library sẽ crash.\n\nCâu hỏi:\nThiết kế hai stage và xác minh filesystem cuối.",
          "prompt_presentation": {
            "format": "sectioned_plain_text",
            "preserve_line_breaks": true
          }
        },
        "question_id": "d12-q021",
        "primary_kc_id": "kc-multistage-runtime-minimization",
        "grading_method": "criterion_rubric",
        "question_version": 2,
        "cognitive_operation": "Create",
        "contributing_kc_ids": [],
        "estimated_difficulty": "hard"
      },
      {
        "servable": true,
        "role": "initial_check",
        "hints": [
          {
            "text": "Xác định path cần ghi và user sở hữu nó trước khi chuyển sang `USER`.",
            "hint_id": "h1",
            "after_attempt": 1
          }
        ],
        "module_id": "day12-g-container",
        "max_points": 1,
        "interaction": {
          "type": "single_select",
          "prompt": "Bối cảnh:\nỨng dụng cần ghi vào `/app/tmp`; Dockerfile chuyển sang `USER 10001` nhưng thư mục vẫn thuộc về root.\n\nCâu hỏi:\nKết quả và cách sửa nào đúng?",
          "choices": [
            {
              "text": "Chuyển toàn filesystem sang quyền 777 trước khi chạy",
              "choice_id": "a"
            },
            {
              "text": "Cấp quyền ghi tối thiểu cho path trước `USER`",
              "choice_id": "b"
            },
            {
              "text": "Giả định user non-root sẽ tự sở hữu path",
              "choice_id": "c"
            },
            {
              "text": "Chạy lại bằng root nếu thao tác ghi thất bại",
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
        "question_id": "d12-q022",
        "primary_kc_id": "kc-container-nonroot-runtime",
        "grading_method": "deterministic",
        "question_version": 2,
        "cognitive_operation": "Analyze",
        "contributing_kc_ids": [],
        "estimated_difficulty": "medium"
      },
      {
        "servable": false,
        "role": "reassessment",
        "hints": [
          {
            "text": "Phân biệt quyền cần cấp cho `/data/jobs` với thao tác phải bị từ chối ở path đặc quyền.",
            "hint_id": "h1",
            "after_attempt": 1
          }
        ],
        "module_id": "day12-g-container",
        "max_points": 4,
        "interaction": {
          "type": "short_text",
          "prompt": "Bối cảnh:\nAgent chỉ cần ghi `/data/jobs`, không cần bind cổng đặc quyền hay cài package.\n\nCâu hỏi:\nThiết kế runtime non-root và kiểm thử các thao tác phải bị từ chối.",
          "prompt_presentation": {
            "format": "sectioned_plain_text",
            "preserve_line_breaks": true
          }
        },
        "question_id": "d12-q023",
        "primary_kc_id": "kc-container-nonroot-runtime",
        "grading_method": "criterion_rubric",
        "question_version": 2,
        "cognitive_operation": "Create",
        "contributing_kc_ids": [],
        "estimated_difficulty": "hard"
      },
      {
        "servable": true,
        "role": "initial_check",
        "hints": [
          {
            "text": "Phân biệt file bị Git bỏ qua với file Docker vẫn gửi trong build context.",
            "hint_id": "h1",
            "after_attempt": 1
          }
        ],
        "module_id": "day12-g-container",
        "max_points": 1,
        "interaction": {
          "type": "single_select",
          "prompt": "Bối cảnh:\nRepo có `.env`, `.git`, model cache 4GB và `app/config.yaml` bắt buộc; `.gitignore` đã loại `.env` nhưng Docker build context vẫn gửi file đó.\n\nCâu hỏi:\nBiện pháp kiểm soát nào đúng?",
          "choices": [
            {
              "text": "Dựa vào `.gitignore` để context tự loại `.env`",
              "choice_id": "a"
            },
            {
              "text": "COPY toàn bộ rồi xóa `.env` ở layer sau",
              "choice_id": "b"
            },
            {
              "text": "Dùng `.dockerignore` và kiểm tra context",
              "choice_id": "c"
            },
            {
              "text": "Truyền secret qua build argument có log để tránh file",
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
        "question_id": "d12-q024",
        "primary_kc_id": "kc-docker-build-context-exclusion",
        "grading_method": "deterministic",
        "question_version": 2,
        "cognitive_operation": "Analyze",
        "contributing_kc_ids": [],
        "estimated_difficulty": "medium"
      },
      {
        "servable": false,
        "role": "reassessment",
        "hints": [
          {
            "text": "Mỗi rule phải trả lời hai việc: secret không vào context và migration vẫn vào final image.",
            "hint_id": "h1",
            "after_attempt": 1
          }
        ],
        "module_id": "day12-g-container",
        "max_points": 4,
        "interaction": {
          "type": "short_text",
          "prompt": "Bối cảnh:\nDockerfile COPY `app/` và `requirements.txt`; runtime cần file migration nhưng rule `**/*.sql` đang loại tất cả.\n\nCâu hỏi:\nThiết kế boundary loại trừ và kiểm thử để chứng minh secret vắng nhưng file bắt buộc còn.",
          "prompt_presentation": {
            "format": "sectioned_plain_text",
            "preserve_line_breaks": true
          }
        },
        "question_id": "d12-q025",
        "primary_kc_id": "kc-docker-build-context-exclusion",
        "grading_method": "criterion_rubric",
        "question_version": 2,
        "cognitive_operation": "Create",
        "contributing_kc_ids": [],
        "estimated_difficulty": "hard"
      },
      {
        "servable": true,
        "role": "initial_check",
        "hints": [
          {
            "text": "Xác định finding nằm trong final image nào, package còn reachable lúc chạy không và bằng chứng còn hiệu lực đến khi nào.",
            "hint_id": "h1",
            "after_attempt": 1
          }
        ],
        "module_id": "day12-g-container",
        "max_points": 1,
        "interaction": {
          "type": "multi_select",
          "prompt": "Bối cảnh:\nTrình quét báo một CVE nghiêm trọng trong compiler ở builder stage; bản phát hành đang xét là final image D1.\n\nCâu hỏi:\nBằng chứng nào cần để quyết định phát hành D1? Chọn tất cả phương án đúng.",
          "choices": [
            {
              "text": "Digest bất biến D1 của bản phát hành đang xét đã được scan",
              "choice_id": "a"
            },
            {
              "text": "SBOM của final image, sự hiện diện và khả năng đi tới của package",
              "choice_id": "b"
            },
            {
              "text": "Mức độ, trạng thái bản vá và owner/thời hạn exception nếu tạm chấp nhận rủi ro",
              "choice_id": "c"
            },
            {
              "text": "Dùng tag `latest` làm identity chính thay vì digest bất biến",
              "choice_id": "d"
            },
            {
              "text": "Xem một lượt scan sạch của image hiện tại như bằng chứng cho lần build tiếp theo",
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
        "question_id": "d12-q026",
        "primary_kc_id": "kc-image-vulnerability-provenance-release",
        "grading_method": "deterministic",
        "question_version": 2,
        "cognitive_operation": "Evaluate",
        "contributing_kc_ids": [],
        "estimated_difficulty": "medium"
      },
      {
        "servable": false,
        "role": "reassessment",
        "hints": [
          {
            "text": "Ngoại lệ chỉ có hiệu lực trong thời hạn đã ghi; khóa identity bằng digest và đặt mốc scan lại.",
            "hint_id": "h1",
            "after_attempt": 1
          }
        ],
        "module_id": "day12-g-container",
        "max_points": 4,
        "interaction": {
          "type": "short_text",
          "prompt": "Bối cảnh:\nDigest D2 có high CVE còn reachable; bản sửa dự kiến sau 5 ngày, business xin exception 48 giờ.\n\nCâu hỏi:\nNêu quyết định phát hành và bằng chứng/lịch kiểm tra lại cần giữ.",
          "prompt_presentation": {
            "format": "sectioned_plain_text",
            "preserve_line_breaks": true
          }
        },
        "question_id": "d12-q027",
        "primary_kc_id": "kc-image-vulnerability-provenance-release",
        "grading_method": "criterion_rubric",
        "question_version": 2,
        "cognitive_operation": "Analyze",
        "contributing_kc_ids": [],
        "estimated_difficulty": "hard"
      },
      {
        "servable": true,
        "role": "initial_check",
        "hints": [
          {
            "text": "Trong Compose hãy gọi tên service; readiness là khả năng phục vụ, không chỉ process đã start.",
            "hint_id": "h1",
            "after_attempt": 1
          }
        ],
        "module_id": "day12-g-container",
        "max_points": 1,
        "interaction": {
          "type": "single_select",
          "prompt": "Bối cảnh:\nCompose agent gọi Redis bằng `localhost:6379`; mỗi service ở một container riêng.\n\nCâu hỏi:\nCấu hình endpoint và dependency readiness nào đúng?",
          "choices": [
            {
              "text": "Dùng `localhost` cho Redis và kiểm tra service đã khởi động trước agent",
              "choice_id": "a"
            },
            {
              "text": "Gắn IP container cố định cho Redis",
              "choice_id": "b"
            },
            {
              "text": "Đưa credential Redis vào image để service đọc ngay",
              "choice_id": "c"
            },
            {
              "text": "Dùng DNS service kèm điều kiện dependency healthy/readiness",
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
        "question_id": "d12-q028",
        "primary_kc_id": "kc-compose-service-network-and-health",
        "grading_method": "deterministic",
        "question_version": 2,
        "cognitive_operation": "Analyze",
        "contributing_kc_ids": [],
        "estimated_difficulty": "medium"
      },
      {
        "servable": false,
        "role": "reassessment",
        "hints": [
          {
            "text": "Theo dõi ba ranh giới: service discovery, readiness và state persistence.",
            "hint_id": "h1",
            "after_attempt": 1
          }
        ],
        "module_id": "day12-g-container",
        "max_points": 4,
        "interaction": {
          "type": "short_text",
          "prompt": "Bối cảnh:\nAgent, Redis và proxy phải scale agent lên 3; session phải sống qua việc thay container và proxy chỉ route khi agent ready.\n\nCâu hỏi:\nSửa contract Compose và nêu cách xác minh.",
          "prompt_presentation": {
            "format": "sectioned_plain_text",
            "preserve_line_breaks": true
          }
        },
        "question_id": "d12-q029",
        "primary_kc_id": "kc-compose-service-network-and-health",
        "grading_method": "criterion_rubric",
        "question_version": 2,
        "cognitive_operation": "Analyze",
        "contributing_kc_ids": [],
        "estimated_difficulty": "hard"
      },
      {
        "servable": true,
        "role": "initial_check",
        "hints": [
          {
            "text": "Đối chiếu thời lượng tác vụ với timeout, rồi kiểm tra cách lấy kết quả sau khi submit.",
            "hint_id": "h1",
            "after_attempt": 1
          }
        ],
        "module_id": "day12-g-lifecycle",
        "max_points": 1,
        "interaction": {
          "type": "single_select",
          "prompt": "Bối cảnh:\nTác vụ mất 90 giây, gateway hết thời gian chờ sau 30 giây; người dùng không cần nhận từng token nhưng phải quay lại lấy kết quả.\n\nCâu hỏi:\nVòng đời nào phù hợp?",
          "choices": [
            {
              "text": "Giữ request synchronous trong 90 giây rồi tăng timeout client",
              "choice_id": "a"
            },
            {
              "text": "Async job kèm `job_id` và endpoint status/result",
              "choice_id": "b"
            },
            {
              "text": "Dùng SSE dù người dùng không cần nhận token dần",
              "choice_id": "c"
            },
            {
              "text": "Dùng WebSocket để thay đổi cách client chờ gateway",
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
        "question_id": "d12-q030",
        "primary_kc_id": "kc-agent-response-lifecycle-selection",
        "grading_method": "deterministic",
        "question_version": 2,
        "cognitive_operation": "Analyze",
        "contributing_kc_ids": [],
        "estimated_difficulty": "medium"
      },
      {
        "servable": false,
        "role": "reassessment",
        "hints": [
          {
            "text": "Tách ba mốc: token đầu tiên, lúc stream kết thúc và hành vi khi client disconnect.",
            "hint_id": "h1",
            "after_attempt": 1
          }
        ],
        "module_id": "day12-g-lifecycle",
        "max_points": 4,
        "interaction": {
          "type": "short_text",
          "prompt": "Bối cảnh:\nMột cuộc chat trả token đầu tiên sau 300ms và hoàn tất sau 20 giây; client muốn đọc dần và có thể ngắt kết nối.\n\nCâu hỏi:\nChọn vòng đời và mô tả hành vi khi ngắt kết nối hoặc khi hoàn tất.",
          "prompt_presentation": {
            "format": "sectioned_plain_text",
            "preserve_line_breaks": true
          }
        },
        "question_id": "d12-q031",
        "primary_kc_id": "kc-agent-response-lifecycle-selection",
        "grading_method": "criterion_rubric",
        "question_version": 2,
        "cognitive_operation": "Analyze",
        "contributing_kc_ids": [],
        "estimated_difficulty": "hard"
      },
      {
        "servable": true,
        "role": "initial_check",
        "hints": [
          {
            "text": "Theo dõi từ response header đến data frame, flush rồi terminal event.",
            "hint_id": "h1",
            "after_attempt": 1
          }
        ],
        "module_id": "day12-g-lifecycle",
        "max_points": 1,
        "interaction": {
          "type": "ordering",
          "prompt": "Bối cảnh:\nServer stream token qua SSE; connection không bị gián đoạn và cần đúng một terminal event.\n\nCâu hỏi:\nSắp xếp execution contract phù hợp.",
          "options": [
            {
              "text": "Trả response với `Content-Type: text/event-stream`",
              "option_id": "o1"
            },
            {
              "text": "Gửi frame event/data hợp lệ",
              "option_id": "o2"
            },
            {
              "text": "Flush frame khi có chunk",
              "option_id": "o3"
            },
            {
              "text": "Gửi đúng một terminal event `done` hoặc `error`",
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
        "question_id": "d12-q032",
        "primary_kc_id": "kc-sse-event-stream-contract",
        "grading_method": "deterministic",
        "question_version": 2,
        "cognitive_operation": "Apply",
        "contributing_kc_ids": [],
        "estimated_difficulty": "medium"
      },
      {
        "servable": false,
        "role": "reassessment",
        "hints": [
          {
            "text": "Đếm terminal event và kiểm thứ tự A→B trước khi kiểm completion/usage.",
            "hint_id": "h1",
            "after_attempt": 1
          }
        ],
        "module_id": "day12-g-lifecycle",
        "max_points": 4,
        "interaction": {
          "type": "short_text",
          "prompt": "Bối cảnh:\nCần stream hai chunk `A`, `B` rồi gửi completion kèm usage.\n\nCâu hỏi:\nThiết kế chuỗi event và bộ kiểm tra.",
          "prompt_presentation": {
            "format": "sectioned_plain_text",
            "preserve_line_breaks": true
          }
        },
        "question_id": "d12-q033",
        "primary_kc_id": "kc-sse-event-stream-contract",
        "grading_method": "criterion_rubric",
        "question_version": 2,
        "cognitive_operation": "Analyze",
        "contributing_kc_ids": [],
        "estimated_difficulty": "hard"
      },
      {
        "servable": true,
        "role": "follow_up",
        "hints": [
          {
            "text": "Phân biệt first-byte latency với tổng compute.",
            "hint_id": "h1",
            "after_attempt": 1
          }
        ],
        "module_id": "day12-g-lifecycle",
        "max_points": 1,
        "interaction": {
          "type": "single_select",
          "prompt": "Bối cảnh:\nServer flush từng token qua SSE ngay khi model sinh ra.\n\nCâu hỏi:\nNhận định nào đúng?",
          "choices": [
            {
              "text": "Loại bỏ công việc model sinh token",
              "choice_id": "a"
            },
            {
              "text": "Bảo đảm tổng latency gần bằng 0",
              "choice_id": "b"
            },
            {
              "text": "Giảm độ trễ token đầu tiên, không xóa compute",
              "choice_id": "c"
            },
            {
              "text": "Thay thế ranh giới authentication của API",
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
        "question_id": "d12-q034",
        "primary_kc_id": "kc-sse-event-stream-contract",
        "grading_method": "deterministic",
        "question_version": 2,
        "cognitive_operation": "Analyze",
        "contributing_kc_ids": [],
        "estimated_difficulty": "easy"
      },
      {
        "servable": true,
        "role": "initial_check",
        "hints": [
          {
            "text": "Tìm ranh giới intermediary: byte có được đẩy ra sớm, connection có được giữ sống và event có thể resume không.",
            "hint_id": "h1",
            "after_attempt": 1
          }
        ],
        "module_id": "day12-g-lifecycle",
        "max_points": 1,
        "interaction": {
          "type": "single_select",
          "prompt": "Bối cảnh:\nỨng dụng flush SSE mỗi giây nhưng proxy gom toàn bộ response đến cuối.\n\nCâu hỏi:\nCách sửa vận hành nào liên quan nhất?",
          "choices": [
            {
              "text": "Tăng kích thước mỗi chunk để lấp buffer",
              "choice_id": "a"
            },
            {
              "text": "Tăng temperature của model khi stream",
              "choice_id": "b"
            },
            {
              "text": "Bổ sung terminal event ở application mà không đổi proxy",
              "choice_id": "c"
            },
            {
              "text": "Tắt buffering ở proxy, flush sớm và dùng heartbeat/event ID",
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
        "question_id": "d12-q035",
        "primary_kc_id": "kc-sse-proxy-reconnect-contract",
        "grading_method": "deterministic",
        "question_version": 2,
        "cognitive_operation": "Analyze",
        "contributing_kc_ids": [],
        "estimated_difficulty": "medium"
      },
      {
        "servable": false,
        "role": "reassessment",
        "hints": [
          {
            "text": "Đầu tiên giữ connection sống dưới 60 giây, sau đó dùng ID để resume đúng điểm mà không phát trùng.",
            "hint_id": "h1",
            "after_attempt": 1
          }
        ],
        "module_id": "day12-g-lifecycle",
        "max_points": 4,
        "interaction": {
          "type": "short_text",
          "prompt": "Bối cảnh:\nLuồng im lặng 70 giây giữa các chunk; proxy idle timeout 60 giây; client reconnect với `Last-Event-ID`.\n\nCâu hỏi:\nThiết kế cơ chế gửi dần và reconnect không trùng event.",
          "prompt_presentation": {
            "format": "sectioned_plain_text",
            "preserve_line_breaks": true
          }
        },
        "question_id": "d12-q036",
        "primary_kc_id": "kc-sse-proxy-reconnect-contract",
        "grading_method": "criterion_rubric",
        "question_version": 2,
        "cognitive_operation": "Create",
        "contributing_kc_ids": [],
        "estimated_difficulty": "hard"
      },
      {
        "servable": true,
        "role": "initial_check",
        "hints": [
          {
            "text": "Tách lúc nhận job khỏi lúc worker thực thi và lúc lưu kết quả cuối.",
            "hint_id": "h1",
            "after_attempt": 1
          }
        ],
        "module_id": "day12-g-lifecycle",
        "max_points": 1,
        "interaction": {
          "type": "ordering",
          "prompt": "Bối cảnh:\nJob của agent chạy 8 phút, không thể giữ HTTP request mở suốt thời gian đó.\n\nCâu hỏi:\nSắp xếp vòng đời của async job.",
          "options": [
            {
              "text": "Xác minh request và tạo `job_id` ổn định",
              "option_id": "o1"
            },
            {
              "text": "Đưa công việc vào durable queue",
              "option_id": "o2"
            },
            {
              "text": "Trả HTTP 202 kèm URL status",
              "option_id": "o3"
            },
            {
              "text": "Worker nhận việc và thực thi idempotent",
              "option_id": "o4"
            },
            {
              "text": "Lưu kết quả hoặc lỗi terminal",
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
        "question_id": "d12-q037",
        "primary_kc_id": "kc-async-agent-job-lifecycle",
        "grading_method": "deterministic",
        "question_version": 2,
        "cognitive_operation": "Apply",
        "contributing_kc_ids": [],
        "estimated_difficulty": "medium"
      },
      {
        "servable": false,
        "role": "reassessment",
        "hints": [
          {
            "text": "Theo dõi state theo một chiều và tách retry của queue khỏi bảo đảm side effect.",
            "hint_id": "h1",
            "after_attempt": 1
          }
        ],
        "module_id": "day12-g-lifecycle",
        "max_points": 4,
        "interaction": {
          "type": "short_text",
          "prompt": "Bối cảnh:\nJob J đã được nhận; worker crash sau khi chuyển sang running, queue giao lại và cuối cùng job fail terminal.\n\nCâu hỏi:\nTheo dõi state phía client nhìn thấy và xác định trách nhiệm retry.",
          "prompt_presentation": {
            "format": "sectioned_plain_text",
            "preserve_line_breaks": true
          }
        },
        "question_id": "d12-q038",
        "primary_kc_id": "kc-async-agent-job-lifecycle",
        "grading_method": "criterion_rubric",
        "question_version": 2,
        "cognitive_operation": "Analyze",
        "contributing_kc_ids": [],
        "estimated_difficulty": "hard"
      },
      {
        "servable": true,
        "role": "initial_check",
        "hints": [
          {
            "text": "Hỏi dữ liệu nào phải còn sau khi replica bị thay thế, rồi chọn nơi lưu không phụ thuộc process.",
            "hint_id": "h1",
            "after_attempt": 1
          }
        ],
        "module_id": "day12-g-lifecycle",
        "max_points": 1,
        "interaction": {
          "type": "single_select",
          "prompt": "Bối cảnh:\nHai replica luân phiên xử lý cùng conversation; state chỉ nằm trong dict process của replica A.\n\nCâu hỏi:\nRanh giới nào phải sửa để không mất continuity khi đổi replica hoặc restart?",
          "choices": [
            {
              "text": "Đưa state authoritative vào shared store với key có scope",
              "choice_id": "a"
            },
            {
              "text": "Dùng sticky routing lâu dài theo replica",
              "choice_id": "b"
            },
            {
              "text": "Tăng CPU cho instance đang giữ state",
              "choice_id": "c"
            },
            {
              "text": "Lưu private reasoning thay cho session state",
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
        "question_id": "d12-q039",
        "primary_kc_id": "kc-externalized-agent-state",
        "grading_method": "deterministic",
        "question_version": 2,
        "cognitive_operation": "Analyze",
        "contributing_kc_ids": [],
        "estimated_difficulty": "medium"
      },
      {
        "servable": false,
        "role": "reassessment",
        "hints": [
          {
            "text": "Theo dõi nơi lưu message/status qua lần đổi replica; đừng dùng sticky session làm invariant.",
            "hint_id": "h1",
            "after_attempt": 1
          }
        ],
        "module_id": "day12-g-lifecycle",
        "max_points": 4,
        "interaction": {
          "type": "short_text",
          "prompt": "Bối cảnh:\nConversation C có messages và workflow status; replica bị thay thế sau mỗi request.\n\nCâu hỏi:\nThiết kế ranh giới state và kiểm thử khi thay replica.",
          "prompt_presentation": {
            "format": "sectioned_plain_text",
            "preserve_line_breaks": true
          }
        },
        "question_id": "d12-q040",
        "primary_kc_id": "kc-externalized-agent-state",
        "grading_method": "criterion_rubric",
        "question_version": 2,
        "cognitive_operation": "Create",
        "contributing_kc_ids": [],
        "estimated_difficulty": "hard"
      },
      {
        "servable": true,
        "role": "initial_check",
        "hints": [
          {
            "text": "Đặt tenant/user vào key trước khi xét TTL hay cách lưu message.",
            "hint_id": "h1",
            "after_attempt": 1
          }
        ],
        "module_id": "day12-g-lifecycle",
        "max_points": 1,
        "interaction": {
          "type": "single_select",
          "prompt": "Bối cảnh:\nKey chỉ dùng `conversation_id`; hai tenant cùng ID=7 ghi xen kẽ.\n\nCâu hỏi:\nLỗi chính là gì?",
          "choices": [
            {
              "text": "TTL của state dài hơn nhu cầu",
              "choice_id": "a"
            },
            {
              "text": "GPU memory không đủ cho hai tenant",
              "choice_id": "b"
            },
            {
              "text": "Bổ sung tenant scope vào state key",
              "choice_id": "c"
            },
            {
              "text": "SSE framing làm message bị xen kẽ",
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
        "question_id": "d12-q041",
        "primary_kc_id": "kc-conversation-state-retention-isolation",
        "grading_method": "deterministic",
        "question_version": 2,
        "cognitive_operation": "Analyze",
        "contributing_kc_ids": [],
        "estimated_difficulty": "medium"
      },
      {
        "servable": false,
        "role": "reassessment",
        "hints": [
          {
            "text": "Tách bốn invariant: scope, order, bound và TTL; mỗi invariant cần một phép kiểm riêng.",
            "hint_id": "h1",
            "after_attempt": 1
          }
        ],
        "module_id": "day12-g-lifecycle",
        "max_points": 4,
        "interaction": {
          "type": "short_text",
          "prompt": "Bối cảnh:\nPolicy giữ tối đa 20 message và TTL 24 giờ tính từ activity; hai request cùng conversation đến đồng thời.\n\nCâu hỏi:\nThiết kế key, thứ tự, giới hạn và kiểm thử isolation.",
          "prompt_presentation": {
            "format": "sectioned_plain_text",
            "preserve_line_breaks": true
          }
        },
        "question_id": "d12-q042",
        "primary_kc_id": "kc-conversation-state-retention-isolation",
        "grading_method": "criterion_rubric",
        "question_version": 2,
        "cognitive_operation": "Create",
        "contributing_kc_ids": [],
        "estimated_difficulty": "hard"
      },
      {
        "servable": true,
        "role": "initial_check",
        "hints": [
          {
            "text": "Tách thời gian chờ I/O khỏi event loop và giới hạn số call đang in-flight.",
            "hint_id": "h1",
            "after_attempt": 1
          }
        ],
        "module_id": "day12-g-lifecycle",
        "max_points": 1,
        "interaction": {
          "type": "single_select",
          "prompt": "Bối cảnh:\nHandler async gọi trực tiếp SDK blocking trong 8 giây; 100 request làm event loop nghẽn dù CPU thấp.\n\nCâu hỏi:\nCách sửa nào phù hợp?",
          "choices": [
            {
              "text": "Tăng CPU để event loop chờ blocking call",
              "choice_id": "a"
            },
            {
              "text": "Dùng GPU batching cho blocking HTTP SDK",
              "choice_id": "b"
            },
            {
              "text": "Bỏ timeout để worker chờ xong",
              "choice_id": "c"
            },
            {
              "text": "Giới hạn admission async và offload blocking call",
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
        "question_id": "d12-q043",
        "primary_kc_id": "kc-agent-io-concurrency-control",
        "grading_method": "deterministic",
        "question_version": 2,
        "cognitive_operation": "Analyze",
        "contributing_kc_ids": [],
        "estimated_difficulty": "medium"
      },
      {
        "servable": false,
        "role": "reassessment",
        "hints": [
          {
            "text": "Tách giới hạn downstream, queue bound và tín hiệu quan sát; đừng dùng CPU làm tín hiệu duy nhất.",
            "hint_id": "h1",
            "after_attempt": 1
          }
        ],
        "module_id": "day12-g-lifecycle",
        "max_points": 4,
        "interaction": {
          "type": "short_text",
          "prompt": "Bối cảnh:\nProvider cho tối đa 20 call đồng thời; 100 request đến theo burst và p95 tăng mạnh.\n\nCâu hỏi:\nThiết kế worker, concurrency, giới hạn queue và hành vi khi quá tải.",
          "prompt_presentation": {
            "format": "sectioned_plain_text",
            "preserve_line_breaks": true
          }
        },
        "question_id": "d12-q044",
        "primary_kc_id": "kc-agent-io-concurrency-control",
        "grading_method": "criterion_rubric",
        "question_version": 2,
        "cognitive_operation": "Create",
        "contributing_kc_ids": [],
        "estimated_difficulty": "hard"
      },
      {
        "servable": true,
        "role": "initial_check",
        "hints": [
          {
            "text": "Phân biệt liveness với readiness: process có thể sống nhưng chưa sẵn sàng nhận traffic.",
            "hint_id": "h1",
            "after_attempt": 1
          }
        ],
        "module_id": "day12-g-lifecycle",
        "max_points": 1,
        "interaction": {
          "type": "single_select",
          "prompt": "Bối cảnh:\nKhởi động mất 18 giây: load tokenizer 2 giây, index 15 giây, app 1 giây; readiness bật ngay sau process start.\n\nCâu hỏi:\nHành vi startup/readiness nào đúng?",
          "choices": [
            {
              "text": "Tăng request timeout rồi route traffic ngay sau process start",
              "choice_id": "a"
            },
            {
              "text": "Chỉ báo readiness sau khi index init xong",
              "choice_id": "b"
            },
            {
              "text": "Báo liveness fail trong suốt quá trình init",
              "choice_id": "c"
            },
            {
              "text": "Quy mọi cold start cho model provider",
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
        "question_id": "d12-q045",
        "primary_kc_id": "kc-agent-cold-start-warm-capacity",
        "grading_method": "deterministic",
        "question_version": 2,
        "cognitive_operation": "Analyze",
        "contributing_kc_ids": [],
        "estimated_difficulty": "medium"
      },
      {
        "servable": false,
        "role": "reassessment",
        "hints": [
          {
            "text": "Cân bằng burst/SLO với chi phí: readiness phải đợi init, còn warm capacity quyết định first-hit latency.",
            "hint_id": "h1",
            "after_attempt": 1
          }
        ],
        "module_id": "day12-g-lifecycle",
        "max_points": 4,
        "interaction": {
          "type": "short_text",
          "prompt": "Bối cảnh:\nTraffic có burst mỗi giờ, SLO độ trễ là 2 giây; giữ một warm instance là chi phí chấp nhận được, còn scale-to-zero gây 18 giây cho request đầu tiên.\n\nCâu hỏi:\nBiện minh warm capacity và hành vi startup.",
          "prompt_presentation": {
            "format": "sectioned_plain_text",
            "preserve_line_breaks": true
          }
        },
        "question_id": "d12-q046",
        "primary_kc_id": "kc-agent-cold-start-warm-capacity",
        "grading_method": "criterion_rubric",
        "question_version": 2,
        "cognitive_operation": "Evaluate",
        "contributing_kc_ids": [],
        "estimated_difficulty": "hard"
      },
      {
        "servable": true,
        "role": "initial_check",
        "hints": [
          {
            "text": "Tách dữ liệu nào phải ở thiết bị, dữ liệu nào được gửi sau consent và hành vi khi offline.",
            "hint_id": "h1",
            "after_attempt": 1
          }
        ],
        "module_id": "day12-g-platform",
        "max_points": 1,
        "interaction": {
          "type": "single_select",
          "prompt": "Bối cảnh:\nỨng dụng xử lý hồ sơ y tế chủ yếu offline nhưng cần cloud model cho phân tích nặng khi người dùng đồng ý.\n\nCâu hỏi:\nPlacement nào phù hợp?",
          "choices": [
            {
              "text": "Xử lý dữ liệu phía server, thiết bị nhận kết quả khi có mạng",
              "choice_id": "a"
            },
            {
              "text": "Hybrid: xử lý riêng tư ở local, chỉ gửi cloud khi có consent",
              "choice_id": "b"
            },
            {
              "text": "Cho browser gọi provider bằng secret nhúng trong bundle",
              "choice_id": "c"
            },
            {
              "text": "Đưa raw data vào public browser bundle",
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
        "question_id": "d12-q047",
        "primary_kc_id": "kc-agent-execution-placement",
        "grading_method": "deterministic",
        "question_version": 2,
        "cognitive_operation": "Analyze",
        "contributing_kc_ids": [],
        "estimated_difficulty": "medium"
      },
      {
        "servable": false,
        "role": "reassessment",
        "hints": [
          {
            "text": "Vẽ đường đi của raw data, aggregate, user consent và credential; sau đó kiểm fallback offline.",
            "hint_id": "h1",
            "after_attempt": 1
          }
        ],
        "module_id": "day12-g-platform",
        "max_points": 4,
        "interaction": {
          "type": "short_text",
          "prompt": "Bối cảnh:\nỨng dụng camera cần độ trễ thấp khi offline; cloud chỉ xử lý aggregate đã loại định danh, còn tool doanh nghiệp cần credential phía server.\n\nCâu hỏi:\nMô tả vị trí thực thi, ranh giới tin cậy, đường đi dữ liệu, vị trí credential và phương án dự phòng; có thể trả lời bằng sơ đồ chữ hoặc gạch đầu dòng.",
          "prompt_presentation": {
            "format": "sectioned_plain_text",
            "preserve_line_breaks": true
          }
        },
        "question_id": "d12-q048",
        "primary_kc_id": "kc-agent-execution-placement",
        "grading_method": "criterion_rubric",
        "question_version": 2,
        "cognitive_operation": "Create",
        "contributing_kc_ids": [],
        "estimated_difficulty": "hard"
      },
      {
        "servable": true,
        "role": "initial_check",
        "hints": [
          {
            "text": "Hỏi ai có thể đọc bundle; nếu browser đọc được thì đó không còn là secret boundary.",
            "hint_id": "h1",
            "after_attempt": 1
          }
        ],
        "module_id": "day12-g-platform",
        "max_points": 1,
        "interaction": {
          "type": "single_select",
          "prompt": "Bối cảnh:\nFrontend JavaScript bundle chứa provider API key đã được obfuscate. Muốn giữ secret khỏi browser.\n\nCâu hỏi:\nThiết kế boundary nào đúng?",
          "choices": [
            {
              "text": "Dùng HTTPS là đủ để key trong bundle trở thành secret",
              "choice_id": "a"
            },
            {
              "text": "BFF giữ provider secret",
              "choice_id": "b"
            },
            {
              "text": "Obfuscation biến key trong bundle thành secret an toàn như credential phía server",
              "choice_id": "c"
            },
            {
              "text": "CORS biến browser thành trusted backend",
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
        "question_id": "d12-q049",
        "primary_kc_id": "kc-browser-bff-secret-boundary",
        "grading_method": "deterministic",
        "question_version": 2,
        "cognitive_operation": "Analyze",
        "contributing_kc_ids": [],
        "estimated_difficulty": "medium"
      },
      {
        "servable": false,
        "role": "reassessment",
        "hints": [
          {
            "text": "Theo dõi user token đi vào BFF, còn provider key phải ở lại server và không xuất hiện trong bằng chứng.",
            "hint_id": "h1",
            "after_attempt": 1
          }
        ],
        "module_id": "day12-g-platform",
        "max_points": 4,
        "interaction": {
          "type": "short_text",
          "prompt": "Bối cảnh:\nSPA cần gọi model; mỗi user có quota và scope khác nhau.\n\nCâu hỏi:\nThiết kế lại request path qua BFF và kiểm thử boundary.",
          "prompt_presentation": {
            "format": "sectioned_plain_text",
            "preserve_line_breaks": true
          }
        },
        "question_id": "d12-q050",
        "primary_kc_id": "kc-browser-bff-secret-boundary",
        "grading_method": "criterion_rubric",
        "question_version": 2,
        "cognitive_operation": "Create",
        "contributing_kc_ids": [],
        "estimated_difficulty": "hard"
      },
      {
        "servable": true,
        "role": "follow_up",
        "hints": [
          {
            "text": "Nếu bundle đã gửi tới browser, key trong đó còn là secret không?",
            "hint_id": "h1",
            "after_attempt": 1
          }
        ],
        "module_id": "day12-g-platform",
        "max_points": 1,
        "interaction": {
          "type": "single_select",
          "prompt": "Bối cảnh:\nFrontend browser bị CORS chặn khi gọi model provider; team định nhúng provider secret vào JavaScript để client gọi trực tiếp.\n\nCâu hỏi:\nCách sửa nào đúng?",
          "choices": [
            {
              "text": "Tắt CORS ở browser rồi gọi trực tiếp",
              "choice_id": "a"
            },
            {
              "text": "Obfuscate provider secret trong bundle",
              "choice_id": "b"
            },
            {
              "text": "Dùng HTTPS cho provider secret public",
              "choice_id": "c"
            },
            {
              "text": "BFF giữ secret, browser dùng user auth",
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
        "question_id": "d12-q051",
        "primary_kc_id": "kc-browser-bff-secret-boundary",
        "grading_method": "deterministic",
        "question_version": 2,
        "cognitive_operation": "Analyze",
        "contributing_kc_ids": [],
        "estimated_difficulty": "easy"
      },
      {
        "servable": true,
        "role": "initial_check",
        "hints": [
          {
            "text": "Phân loại từng task theo độ nhạy, consent, capability và connectivity trước khi route.",
            "hint_id": "h1",
            "after_attempt": 1
          }
        ],
        "module_id": "day12-g-platform",
        "max_points": 1,
        "interaction": {
          "type": "single_select",
          "prompt": "Bối cảnh:\nTask A OCR private phải chạy offline; B viết marketing không nhạy cảm cần frontier quality; C chứa biometric bị cấm transfer.\n\nCâu hỏi:\nRouting table nào đúng?",
          "choices": [
            {
              "text": "Chỉ route theo giá token của provider",
              "choice_id": "a"
            },
            {
              "text": "Đưa cả ba task lên cloud khi thiết bị có mạng",
              "choice_id": "b"
            },
            {
              "text": "A local; B cloud khi có consent; C local-only hoặc từ chối",
              "choice_id": "c"
            },
            {
              "text": "Giữ cả ba task trên thiết bị dù capability không đủ",
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
        "question_id": "d12-q052",
        "primary_kc_id": "kc-hybrid-device-cloud-routing",
        "grading_method": "deterministic",
        "question_version": 2,
        "cognitive_operation": "Analyze",
        "contributing_kc_ids": [],
        "estimated_difficulty": "medium"
      },
      {
        "servable": false,
        "role": "reassessment",
        "hints": [
          {
            "text": "Giữ nguyên policy dữ liệu khi offline: chỉ dùng local fallback trong capability đã biết hoặc hỏi/queue lại.",
            "hint_id": "h1",
            "after_attempt": 1
          }
        ],
        "module_id": "day12-g-platform",
        "max_points": 4,
        "interaction": {
          "type": "short_text",
          "prompt": "Bối cảnh:\nThiết bị mất mạng giữa một task đã consent lên cloud; local model chỉ hỗ trợ summary ngắn.\n\nCâu hỏi:\nThiết kế route, escalation và fallback.",
          "prompt_presentation": {
            "format": "sectioned_plain_text",
            "preserve_line_breaks": true
          }
        },
        "question_id": "d12-q053",
        "primary_kc_id": "kc-hybrid-device-cloud-routing",
        "grading_method": "criterion_rubric",
        "question_version": 2,
        "cognitive_operation": "Create",
        "contributing_kc_ids": [],
        "estimated_difficulty": "hard"
      },
      {
        "servable": true,
        "role": "initial_check",
        "hints": [
          {
            "text": "Đối chiếu thời lượng SSE, memory, GPU và egress với giới hạn thật của runtime.",
            "hint_id": "h1",
            "after_attempt": 1
          }
        ],
        "module_id": "day12-g-platform",
        "max_points": 1,
        "interaction": {
          "type": "single_select",
          "prompt": "Bối cảnh:\nAgent cần SSE 15 phút, 4GB state local tạm, GPU tùy chỉnh và kiểm soát egress; serverless tier giới hạn request ở 60 giây.\n\nCâu hỏi:\nRuntime nào tương thích với các ràng buộc đã cho?",
          "choices": [
            {
              "text": "Chọn free tier theo mức quen thuộc dù duration và GPU chưa rõ",
              "choice_id": "a"
            },
            {
              "text": "Chọn runtime đủ SSE, memory, GPU và egress",
              "choice_id": "b"
            },
            {
              "text": "Dùng function 60 giây rồi rút ngắn prompt để né timeout",
              "choice_id": "c"
            },
            {
              "text": "Chọn runtime theo vendor brand quen thuộc",
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
        "question_id": "d12-q054",
        "primary_kc_id": "kc-cloud-runtime-tier-fit",
        "grading_method": "deterministic",
        "question_version": 2,
        "cognitive_operation": "Analyze",
        "contributing_kc_ids": [],
        "estimated_difficulty": "medium"
      },
      {
        "servable": false,
        "role": "reassessment",
        "hints": [
          {
            "text": "Ghi rõ thông tin thực tế phải kiểm chứng trong ngày quyết định, không dùng bảng giá hay giới hạn cũ.",
            "hint_id": "h1",
            "after_attempt": 1
          }
        ],
        "module_id": "day12-g-platform",
        "max_points": 3,
        "interaction": {
          "type": "short_text",
          "prompt": "Bối cảnh:\nWorkload HTTP stateless 2 giây, traffic bursty, team nhỏ; pricing và limits có thể thay đổi.\n\nCâu hỏi:\nChọn runtime tier và ghi các thông tin thực tế cần xác minh.",
          "prompt_presentation": {
            "format": "sectioned_plain_text",
            "preserve_line_breaks": true
          }
        },
        "question_id": "d12-q055",
        "primary_kc_id": "kc-cloud-runtime-tier-fit",
        "grading_method": "criterion_rubric",
        "question_version": 2,
        "cognitive_operation": "Analyze",
        "contributing_kc_ids": [],
        "estimated_difficulty": "hard"
      },
      {
        "servable": true,
        "role": "initial_check",
        "hints": [
          {
            "text": "Tách phần provider vận hành khỏi accountability về data, policy, evaluation và khả năng rời platform.",
            "hint_id": "h1",
            "after_attempt": 1
          }
        ],
        "module_id": "day12-g-platform",
        "max_points": 1,
        "interaction": {
          "type": "single_select",
          "prompt": "Bối cảnh:\nTeam cần ship trong 2 tuần, network tiêu chuẩn, không có compliance đặc biệt và thiếu nhân sự platform.\n\nCâu hỏi:\nBoundary nào hợp lý?",
          "choices": [
            {
              "text": "Chọn boundary theo giá token trước các constraint vận hành",
              "choice_id": "a"
            },
            {
              "text": "Chọn managed runtime vì provider sẽ xử lý state thay team",
              "choice_id": "b"
            },
            {
              "text": "Managed runtime, team vẫn giữ accountability",
              "choice_id": "c"
            },
            {
              "text": "Self-host vì lo ngại lock-in dù chưa có constraint cụ thể",
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
        "question_id": "d12-q056",
        "primary_kc_id": "kc-managed-agent-runtime-tradeoff",
        "grading_method": "deterministic",
        "question_version": 2,
        "cognitive_operation": "Analyze",
        "contributing_kc_ids": [],
        "estimated_difficulty": "medium"
      },
      {
        "servable": false,
        "role": "reassessment",
        "hints": [
          {
            "text": "Đối chiếu các ràng buộc compliance/network/staffing với phần trách nhiệm team phải giữ và điều kiện rời mô hình.",
            "hint_id": "h1",
            "after_attempt": 1
          }
        ],
        "module_id": "day12-g-platform",
        "max_points": 4,
        "interaction": {
          "type": "short_text",
          "prompt": "Bối cảnh:\nDoanh nghiệp cần private network, observability tùy chỉnh, portability nghiêm ngặt và có SRE team.\n\nCâu hỏi:\nChọn managed hay self-deployed và lập bản đồ trách nhiệm cùng điều kiện rời nền tảng.",
          "prompt_presentation": {
            "format": "sectioned_plain_text",
            "preserve_line_breaks": true
          }
        },
        "question_id": "d12-q057",
        "primary_kc_id": "kc-managed-agent-runtime-tradeoff",
        "grading_method": "criterion_rubric",
        "question_version": 2,
        "cognitive_operation": "Analyze",
        "contributing_kc_ids": [],
        "estimated_difficulty": "hard"
      },
      {
        "servable": true,
        "role": "initial_check",
        "hints": [
          {
            "text": "Kiểm tra bind address và `PORT` ở runtime trước khi đổ lỗi cho CORS hay build.",
            "hint_id": "h1",
            "after_attempt": 1
          }
        ],
        "module_id": "day12-g-platform",
        "max_points": 1,
        "interaction": {
          "type": "single_select",
          "prompt": "Bối cảnh:\nImage build pass nhưng app bind `127.0.0.1:8000`; platform gán `PORT=9000` và public probe fail.\n\nCâu hỏi:\nChẩn đoán và sửa runtime binding/probe nào đúng?",
          "choices": [
            {
              "text": "Dùng việc build thành công thay cho bằng chứng lúc chạy",
              "choice_id": "a"
            },
            {
              "text": "In runtime secret ra log để debug",
              "choice_id": "b"
            },
            {
              "text": "Quy lỗi kiểm tra công khai cho CORS ngay",
              "choice_id": "c"
            },
            {
              "text": "Bind cổng được cấp và kiểm tra probe lúc chạy",
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
        "question_id": "d12-q058",
        "primary_kc_id": "kc-cloud-service-binding-verification",
        "grading_method": "deterministic",
        "question_version": 2,
        "cognitive_operation": "Analyze",
        "contributing_kc_ids": [],
        "estimated_difficulty": "medium"
      },
      {
        "servable": false,
        "role": "reassessment",
        "hints": [
          {
            "text": "Giữ value bí mật ngoài log; lần lượt kiểm config, bind, readiness rồi request public có auth.",
            "hint_id": "h1",
            "after_attempt": 1
          }
        ],
        "module_id": "day12-g-platform",
        "max_points": 4,
        "interaction": {
          "type": "short_text",
          "prompt": "Bối cảnh:\nDeployment có DB URL là runtime secret, assigned port, `/health` và API auth.\n\nCâu hỏi:\nLập chuỗi kiểm chứng với bằng chứng an toàn.",
          "prompt_presentation": {
            "format": "sectioned_plain_text",
            "preserve_line_breaks": true
          }
        },
        "question_id": "d12-q059",
        "primary_kc_id": "kc-cloud-service-binding-verification",
        "grading_method": "criterion_rubric",
        "question_version": 2,
        "cognitive_operation": "Create",
        "contributing_kc_ids": [],
        "estimated_difficulty": "hard"
      },
      {
        "servable": true,
        "role": "follow_up",
        "hints": [
          {
            "text": "Bằng chứng này được tạo trước hay sau deployment boundary?",
            "hint_id": "h1",
            "after_attempt": 1
          }
        ],
        "module_id": "day12-g-platform",
        "max_points": 1,
        "interaction": {
          "type": "single_select",
          "prompt": "Bối cảnh:\nImage build thành công nhưng service production fail vì workload identity không có quyền đọc vector store.\n\nCâu hỏi:\nBằng chứng build có đủ để kết luận không?",
          "choices": [
            {
              "text": "Unit test pass đã chứng minh IAM",
              "choice_id": "a"
            },
            {
              "text": "Cần probe identity/quyền lúc chạy",
              "choice_id": "b"
            },
            {
              "text": "Tăng timeout thay cho permission test",
              "choice_id": "c"
            },
            {
              "text": "Image build pass đã chứng minh IAM",
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
        "question_id": "d12-q060",
        "primary_kc_id": "kc-cloud-service-binding-verification",
        "grading_method": "deterministic",
        "question_version": 2,
        "cognitive_operation": "Analyze",
        "contributing_kc_ids": [],
        "estimated_difficulty": "easy"
      },
      {
        "servable": true,
        "role": "initial_check",
        "hints": [
          {
            "text": "Xác định MCP server sống cùng process local hay qua remote endpoint trước khi chọn mô hình auth.",
            "hint_id": "h1",
            "after_attempt": 1
          }
        ],
        "module_id": "day12-g-platform",
        "max_points": 1,
        "interaction": {
          "type": "single_select",
          "prompt": "Bối cảnh:\nMột desktop app khởi chạy MCP server bằng stdio chỉ cho process hiện tại.\n\nCâu hỏi:\nGiả định auth nào đúng?",
          "choices": [
            {
              "text": "Local stdio phải expose public HTTPS",
              "choice_id": "a"
            },
            {
              "text": "CORS đóng vai trò MCP authentication",
              "choice_id": "b"
            },
            {
              "text": "Local stdio gắn trust vào parent process",
              "choice_id": "c"
            },
            {
              "text": "Tin process local theo mặc định mà không giới hạn parent process",
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
        "question_id": "d12-q061",
        "primary_kc_id": "kc-remote-mcp-hosting-boundary",
        "grading_method": "deterministic",
        "question_version": 2,
        "cognitive_operation": "Analyze",
        "contributing_kc_ids": [],
        "estimated_difficulty": "medium"
      },
      {
        "servable": false,
        "role": "reassessment",
        "hints": [
          {
            "text": "Tách ba lớp: remote transport, token audience/scope và vòng đời khác với stdio.",
            "hint_id": "h1",
            "after_attempt": 1
          }
        ],
        "module_id": "day12-g-platform",
        "max_points": 4,
        "interaction": {
          "type": "short_text",
          "prompt": "Bối cảnh:\nCần chia sẻ MCP cho nhiều tenant qua remote HTTP và delegated user access.\n\nCâu hỏi:\nThiết kế boundary hosting/auth/resource-audience.",
          "prompt_presentation": {
            "format": "sectioned_plain_text",
            "preserve_line_breaks": true
          }
        },
        "question_id": "d12-q062",
        "primary_kc_id": "kc-remote-mcp-hosting-boundary",
        "grading_method": "criterion_rubric",
        "question_version": 2,
        "cognitive_operation": "Create",
        "contributing_kc_ids": [],
        "estimated_difficulty": "hard"
      },
      {
        "servable": true,
        "role": "initial_check",
        "hints": [
          {
            "text": "Mọi nhánh bị từ chối phải dừng trước khi gọi model hoặc tool.",
            "hint_id": "h1",
            "after_attempt": 1
          }
        ],
        "module_id": "day12-g-edge",
        "max_points": 1,
        "interaction": {
          "type": "ordering",
          "prompt": "Bối cảnh:\nYêu cầu công khai đã qua TLS và kiểm tra kích thước; phần còn lại có thể chưa được xác thực, vượt hạn mức, sai dữ liệu đầu vào hoặc vượt trần chi phí. Hạn mức cần identity đã xác thực, còn ước tính ngân sách cần dữ liệu đầu vào hợp lệ.\n\nCâu hỏi:\nSắp các cổng kiểm soát để từ chối sớm trước phần xử lý tốn kém.",
          "options": [
            {
              "text": "Xác thực bên gọi",
              "option_id": "o1"
            },
            {
              "text": "Áp hạn mức theo identity",
              "option_id": "o2"
            },
            {
              "text": "Kiểm tra hợp đồng dữ liệu đầu vào",
              "option_id": "o3"
            },
            {
              "text": "Ước tính và kiểm tra ngân sách",
              "option_id": "o4"
            },
            {
              "text": "Gọi agent/model",
              "option_id": "o5"
            },
            {
              "text": "Ghi nhận mức sử dụng và kết quả",
              "option_id": "o6"
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
        "question_id": "d12-q063",
        "primary_kc_id": "kc-api-gateway-admission-order",
        "grading_method": "deterministic",
        "question_version": 2,
        "cognitive_operation": "Apply",
        "contributing_kc_ids": [],
        "estimated_difficulty": "medium"
      },
      {
        "servable": false,
        "role": "reassessment",
        "hints": [
          {
            "text": "Nối từng lỗi trong bối cảnh với gate xử lý nó và một dấu vết có thể quan sát.",
            "hint_id": "h1",
            "after_attempt": 1
          }
        ],
        "module_id": "day12-g-edge",
        "max_points": 4,
        "interaction": {
          "type": "short_text",
          "prompt": "Bối cảnh:\nYêu cầu công khai có thân sai định dạng, thiếu xác thực, đã hết hạn mức hoặc vượt ngân sách; model và tool đều tốn phí.\n\nCâu hỏi:\nSắp luồng kiểm duyệt và chứng minh mỗi lần từ chối không gọi các bước xử lý phía sau.",
          "prompt_presentation": {
            "format": "sectioned_plain_text",
            "preserve_line_breaks": true
          }
        },
        "question_id": "d12-q064",
        "primary_kc_id": "kc-api-gateway-admission-order",
        "grading_method": "criterion_rubric",
        "question_version": 2,
        "cognitive_operation": "Apply",
        "contributing_kc_ids": [],
        "estimated_difficulty": "hard"
      },
      {
        "servable": true,
        "role": "initial_check",
        "hints": [
          {
            "text": "Xác định có user delegation hay không, rồi đối chiếu identity, phạm vi quyền và rotation.",
            "hint_id": "h1",
            "after_attempt": 1
          }
        ],
        "module_id": "day12-g-edge",
        "max_points": 1,
        "interaction": {
          "type": "single_select",
          "prompt": "Bối cảnh:\nMột service nội bộ cố định cần danh tính máy, không có ủy quyền thay người dùng và muốn xoay vòng đơn giản.\n\nCâu hỏi:\nMẫu xác thực nào phù hợp nhất?",
          "choices": [
            {
              "text": "Delegated OAuth cho cuộc gọi không mang delegation của user",
              "choice_id": "a"
            },
            {
              "text": "Dùng allowlist CORS làm identity của bên gọi",
              "choice_id": "b"
            },
            {
              "text": "Workload credential giới hạn phạm vi, có rotation",
              "choice_id": "c"
            },
            {
              "text": "Decode JWT nhưng bỏ qua signature và expiry",
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
        "question_id": "d12-q065",
        "primary_kc_id": "kc-auth-pattern-caller-fit",
        "grading_method": "deterministic",
        "question_version": 2,
        "cognitive_operation": "Analyze",
        "contributing_kc_ids": [],
        "estimated_difficulty": "medium"
      },
      {
        "servable": false,
        "role": "reassessment",
        "hints": [
          {
            "text": "Tách ba việc: ai cấp token, token dành cho API nào và token còn hạn/quyền gì.",
            "hint_id": "h1",
            "after_attempt": 1
          }
        ],
        "module_id": "day12-g-edge",
        "max_points": 4,
        "interaction": {
          "type": "short_text",
          "prompt": "Bối cảnh:\nĐối tác B2B gọi thay người dùng; token phải hết hạn và chỉ được dùng cho API có audience A.\n\nCâu hỏi:\nChọn mẫu xác thực và các claim cần kiểm tra.",
          "prompt_presentation": {
            "format": "sectioned_plain_text",
            "preserve_line_breaks": true
          }
        },
        "question_id": "d12-q066",
        "primary_kc_id": "kc-auth-pattern-caller-fit",
        "grading_method": "criterion_rubric",
        "question_version": 2,
        "cognitive_operation": "Analyze",
        "contributing_kc_ids": [],
        "estimated_difficulty": "hard"
      },
      {
        "servable": true,
        "role": "initial_check",
        "hints": [
          {
            "text": "Hỏi điều gì xảy ra với cả header thiếu lẫn header sai trước khi handler được gọi.",
            "hint_id": "h1",
            "after_attempt": 1
          }
        ],
        "module_id": "day12-g-edge",
        "max_points": 1,
        "interaction": {
          "type": "single_select",
          "prompt": "Bối cảnh:\nDependency FastAPI dùng `if header == EXPECTED`; khi thiếu header, giá trị thành `None` nhưng handler vẫn chạy.\n\nCâu hỏi:\nCách sửa nào tạo boundary xác thực đúng?",
          "choices": [
            {
              "text": "Dùng allowlist CORS của trình duyệt để quyết định identity của bên gọi",
              "choice_id": "a"
            },
            {
              "text": "Ghi expected key vào log rồi so sánh bằng `==` ngay trong dependency",
              "choice_id": "b"
            },
            {
              "text": "Khi thiếu header, gán người dùng ẩn danh rồi vẫn cho handler xử lý tiếp",
              "choice_id": "c"
            },
            {
              "text": "Từ chối thiếu/sai; so sánh constant-time; truyền identity xác minh",
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
        "question_id": "d12-q067",
        "primary_kc_id": "kc-api-key-verification-boundary",
        "grading_method": "deterministic",
        "question_version": 2,
        "cognitive_operation": "Analyze",
        "contributing_kc_ids": [],
        "estimated_difficulty": "medium"
      },
      {
        "servable": false,
        "role": "reassessment",
        "hints": [
          {
            "text": "Kiểm riêng ba đường đi: key đúng, key sai và không có key; quan sát status cùng provider_calls.",
            "hint_id": "h1",
            "after_attempt": 1
          }
        ],
        "module_id": "day12-g-edge",
        "max_points": 4,
        "interaction": {
          "type": "short_text",
          "prompt": "Bối cảnh:\nCó hai client key hợp lệ ánh xạ tới hai tenant identity; yêu cầu bị từ chối không được làm tăng mức sử dụng provider.\n\nCâu hỏi:\nThiết kế verifier và bộ test.",
          "prompt_presentation": {
            "format": "sectioned_plain_text",
            "preserve_line_breaks": true
          }
        },
        "question_id": "d12-q068",
        "primary_kc_id": "kc-api-key-verification-boundary",
        "grading_method": "criterion_rubric",
        "question_version": 2,
        "cognitive_operation": "Create",
        "contributing_kc_ids": [],
        "estimated_difficulty": "hard"
      },
      {
        "servable": true,
        "role": "follow_up",
        "hints": [
          {
            "text": "Identity hợp lệ có mặc nhiên được phép mọi thao tác không?",
            "hint_id": "h1",
            "after_attempt": 1
          }
        ],
        "module_id": "day12-g-edge",
        "max_points": 1,
        "interaction": {
          "type": "single_select",
          "prompt": "Bối cảnh:\nGateway xác thực API key của tenant A thành công. Yêu cầu lại muốn xóa tài nguyên của tenant B.\n\nCâu hỏi:\nBước nào còn thiếu?",
          "choices": [
            {
              "text": "Băm API key lần nữa để thay cho phân quyền",
              "choice_id": "a"
            },
            {
              "text": "Phân quyền theo tenant, tài nguyên và thao tác",
              "choice_id": "b"
            },
            {
              "text": "Dùng policy origin của CORS thay cho phân quyền",
              "choice_id": "c"
            },
            {
              "text": "Kéo dài thời hạn key để tự có thêm quyền",
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
        "question_id": "d12-q069",
        "primary_kc_id": "kc-api-key-verification-boundary",
        "grading_method": "deterministic",
        "question_version": 2,
        "cognitive_operation": "Analyze",
        "contributing_kc_ids": [],
        "estimated_difficulty": "easy"
      },
      {
        "servable": true,
        "role": "initial_check",
        "hints": [
          {
            "text": "Chọn các trường trả lời: ai bị giới hạn, thuật toán có tham số gì và retry lúc nào.",
            "hint_id": "h1",
            "after_attempt": 1
          }
        ],
        "module_id": "day12-g-edge",
        "max_points": 1,
        "interaction": {
          "type": "multi_select",
          "prompt": "Bối cảnh:\nGói Free và Pro có hạn mức khác nhau theo route; sản phẩm cho phép burst ngắn và cần client biết khi nào nên retry.\n\nCâu hỏi:\nNhững thành phần nào thuộc policy rate limit đúng? Chọn tất cả phương án đúng.",
          "choices": [
            {
              "text": "Bộ đếm global khiến các tenant cùng chia sẻ hạn mức",
              "choice_id": "a"
            },
            {
              "text": "Khóa đếm theo tenant+tier+route",
              "choice_id": "b"
            },
            {
              "text": "Khai báo capacity và refill của token bucket",
              "choice_id": "c"
            },
            {
              "text": "Dùng số yêu cầu làm đại diện cho chi phí USD",
              "choice_id": "d"
            },
            {
              "text": "429 kèm Retry-After và metadata remaining an toàn",
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
        "question_id": "d12-q070",
        "primary_kc_id": "kc-rate-limit-policy-selection",
        "grading_method": "deterministic",
        "question_version": 2,
        "cognitive_operation": "Analyze",
        "contributing_kc_ids": [],
        "estimated_difficulty": "medium"
      },
      {
        "servable": false,
        "role": "reassessment",
        "hints": [
          {
            "text": "Tách policy thành ba phần: khóa đếm, tham số thuật toán và thông tin trả về khi bị giới hạn.",
            "hint_id": "h1",
            "after_attempt": 1
          }
        ],
        "module_id": "day12-g-edge",
        "max_points": 4,
        "interaction": {
          "type": "short_text",
          "prompt": "Bối cảnh:\nCác gói Free/Pro cần hạn mức riêng theo route; response phải giúp client retry đúng lúc.\n\nCâu hỏi:\nThiết kế key, thuật toán và quy ước của 429 trong policy.",
          "prompt_presentation": {
            "format": "sectioned_plain_text",
            "preserve_line_breaks": true
          }
        },
        "question_id": "d12-q071",
        "primary_kc_id": "kc-rate-limit-policy-selection",
        "grading_method": "criterion_rubric",
        "question_version": 2,
        "cognitive_operation": "Create",
        "contributing_kc_ids": [],
        "estimated_difficulty": "hard"
      },
      {
        "servable": true,
        "role": "initial_check",
        "hints": [
          {
            "text": "Áp đúng điều kiện xóa timestamp rồi đếm số mốc còn lại trước khi thêm mốc mới.",
            "hint_id": "h1",
            "after_attempt": 1
          }
        ],
        "module_id": "day12-g-edge",
        "max_points": 1,
        "interaction": {
          "type": "single_select",
          "prompt": "Bối cảnh:\nHạn mức là 3 yêu cầu trong 60 giây; user U có các mốc t=0,20,40 và gửi yêu cầu tại t=60. Quy tắc hết hạn xóa timestamp ≤ now-window.\n\nCâu hỏi:\nYêu cầu tại t=60 được xử lý thế nào?",
          "choices": [
            {
              "text": "Từ chối: lịch sử từng có ba yêu cầu",
              "choice_id": "a"
            },
            {
              "text": "Cho phép bằng cách xóa mốc t=20",
              "choice_id": "b"
            },
            {
              "text": "Cho phép: mốc t=0 đã rời cửa sổ",
              "choice_id": "c"
            },
            {
              "text": "Từ chối theo khóa global thay vì identity U",
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
        "question_id": "d12-q072",
        "primary_kc_id": "kc-sliding-window-rate-limiter",
        "grading_method": "deterministic",
        "question_version": 2,
        "cognitive_operation": "Analyze",
        "contributing_kc_ids": [],
        "estimated_difficulty": "medium"
      },
      {
        "servable": false,
        "role": "reassessment",
        "hints": [
          {
            "text": "Tìm hai rủi ro riêng: ghi đè do member trùng và race condition giữa các bước đếm–thêm.",
            "hint_id": "h1",
            "after_attempt": 1
          }
        ],
        "module_id": "day12-g-edge",
        "max_points": 4,
        "interaction": {
          "type": "short_text",
          "prompt": "Bối cảnh:\nLimiter theo identity có limit 3/60s. Hai yêu cầu đồng thời có cùng timestamp, nhưng member chỉ là chuỗi timestamp nên một entry bị ghi đè.\n\nCâu hỏi:\nSửa thao tác và kiểm tra boundary/isolation.",
          "prompt_presentation": {
            "format": "sectioned_plain_text",
            "preserve_line_breaks": true
          }
        },
        "question_id": "d12-q073",
        "primary_kc_id": "kc-sliding-window-rate-limiter",
        "grading_method": "criterion_rubric",
        "question_version": 2,
        "cognitive_operation": "Analyze",
        "contributing_kc_ids": [],
        "estimated_difficulty": "hard"
      },
      {
        "servable": true,
        "role": "initial_check",
        "hints": [
          {
            "text": "Tính token đầu vào và đầu ra riêng theo đơn vị 1M rồi cộng hai phần.",
            "hint_id": "h1",
            "after_attempt": 1
          }
        ],
        "module_id": "day12-g-edge",
        "max_points": 1,
        "interaction": {
          "type": "numeric_input",
          "prompt": "Bối cảnh:\nGiá trong bài là 2 USD/1M token đầu vào và 8 USD/1M token đầu ra. Yêu cầu dự kiến dùng 1.000 token đầu vào và 500 token đầu ra.\n\nCâu hỏi:\nTính chi phí ước tính trước khi gọi model.",
          "required_unit": "USD",
          "prompt_presentation": {
            "format": "sectioned_plain_text",
            "preserve_line_breaks": true
          }
        },
        "question_id": "d12-q074",
        "primary_kc_id": "kc-precall-cost-estimation",
        "grading_method": "deterministic",
        "question_version": 2,
        "cognitive_operation": "Apply",
        "contributing_kc_ids": [],
        "estimated_difficulty": "medium"
      },
      {
        "servable": false,
        "role": "reassessment",
        "hints": [
          {
            "text": "So sánh chi phí tối đa ước tính với trần trước khi nghĩ đến chi phí thực tế.",
            "hint_id": "h1",
            "after_attempt": 1
          }
        ],
        "module_id": "day12-g-edge",
        "max_points": 4,
        "interaction": {
          "type": "short_text",
          "prompt": "Bối cảnh:\nTrần chi phí của yêu cầu là 0,004 USD; ước tính từ tokenizer là 0,006 USD trước khi gọi model.\n\nCâu hỏi:\nNêu quyết định và bằng chứng/giới hạn làm căn cứ.",
          "prompt_presentation": {
            "format": "sectioned_plain_text",
            "preserve_line_breaks": true
          }
        },
        "question_id": "d12-q075",
        "primary_kc_id": "kc-precall-cost-estimation",
        "grading_method": "criterion_rubric",
        "question_version": 2,
        "cognitive_operation": "Evaluate",
        "contributing_kc_ids": [],
        "estimated_difficulty": "hard"
      },
      {
        "servable": true,
        "role": "initial_check",
        "hints": [
          {
            "text": "Cộng phần đã dùng với chi phí ước tính cho từng tenant, không gộp hai sổ.",
            "hint_id": "h1",
            "after_attempt": 1
          }
        ],
        "module_id": "day12-g-edge",
        "max_points": 1,
        "interaction": {
          "type": "single_select",
          "prompt": "Bối cảnh:\nTenant A đã dùng 9 USD trên ngân sách tháng 10 USD và có yêu cầu ước tính 2 USD; tenant B đã dùng 1 USD.\n\nCâu hỏi:\nQuyết định trước cuộc gọi là gì?",
          "choices": [
            {
              "text": "Đặt lại ngân sách tháng của A ngay",
              "choice_id": "a"
            },
            {
              "text": "Cho A qua vì số yêu cầu còn thấp",
              "choice_id": "b"
            },
            {
              "text": "Từ chối cả A và B theo tổng chi tiêu global",
              "choice_id": "c"
            },
            {
              "text": "Từ chối A; sổ chi tiêu của B vẫn độc lập",
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
        "question_id": "d12-q076",
        "primary_kc_id": "kc-tenant-budget-accounting",
        "grading_method": "deterministic",
        "question_version": 2,
        "cognitive_operation": "Analyze",
        "contributing_kc_ids": [],
        "estimated_difficulty": "medium"
      },
      {
        "servable": false,
        "role": "reassessment",
        "hints": [
          {
            "text": "Tách ba thời điểm: reserve khi admission, đối soát khi có chi phí thực tế và tạo bucket khi sang kỳ mới.",
            "hint_id": "h1",
            "after_attempt": 1
          }
        ],
        "module_id": "day12-g-edge",
        "max_points": 4,
        "interaction": {
          "type": "short_text",
          "prompt": "Bối cảnh:\nTenant A được cho qua với chi phí ước tính 1 USD nhưng thực tế là 0,7 USD; tenant B có sổ chi tiêu riêng; sang tháng mới có khóa kỳ khác.\n\nCâu hỏi:\nThiết kế việc ghi sổ và chuyển kỳ.",
          "prompt_presentation": {
            "format": "sectioned_plain_text",
            "preserve_line_breaks": true
          }
        },
        "question_id": "d12-q077",
        "primary_kc_id": "kc-tenant-budget-accounting",
        "grading_method": "criterion_rubric",
        "question_version": 2,
        "cognitive_operation": "Create",
        "contributing_kc_ids": [],
        "estimated_difficulty": "hard"
      },
      {
        "servable": true,
        "role": "initial_check",
        "hints": [
          {
            "text": "Hỏi credential đã lộ còn được production chấp nhận hay phải vô hiệu ngay.",
            "hint_id": "h1",
            "after_attempt": 1
          }
        ],
        "module_id": "day12-g-edge",
        "max_points": 1,
        "interaction": {
          "type": "single_select",
          "prompt": "Bối cảnh:\nSecret đã được commit rồi xóa ở commit mới; production vẫn đang dùng credential cũ.\n\nCâu hỏi:\nHành động đầu tiên là gì?",
          "choices": [
            {
              "text": "Thêm `.gitignore` ở commit mới rồi giữ credential đang chạy",
              "choice_id": "a"
            },
            {
              "text": "Thu hồi và khống chế credential đã lộ",
              "choice_id": "b"
            },
            {
              "text": "Chờ đợt rotation định kỳ cuối năm",
              "choice_id": "c"
            },
            {
              "text": "In key ra log để tìm consumer đang dùng",
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
        "question_id": "d12-q078",
        "primary_kc_id": "kc-deployment-secret-lifecycle",
        "grading_method": "deterministic",
        "question_version": 2,
        "cognitive_operation": "Analyze",
        "contributing_kc_ids": [],
        "estimated_difficulty": "medium"
      },
      {
        "servable": false,
        "role": "reassessment",
        "hints": [
          {
            "text": "Tách containment/revoke khỏi cleanup: dọn git history không tự vô hiệu key đã lộ.",
            "hint_id": "h1",
            "after_attempt": 1
          }
        ],
        "module_id": "day12-g-edge",
        "max_points": 4,
        "interaction": {
          "type": "short_text",
          "prompt": "Bối cảnh:\nAPI key xuất hiện trong git history và log CI, đồng thời có phạm vi quyền rộng; nhiều consumer production đang dùng key này.\n\nCâu hỏi:\nSắp quy trình ứng phó sự cố và bước xác minh.",
          "prompt_presentation": {
            "format": "sectioned_plain_text",
            "preserve_line_breaks": true
          }
        },
        "question_id": "d12-q079",
        "primary_kc_id": "kc-deployment-secret-lifecycle",
        "grading_method": "criterion_rubric",
        "question_version": 2,
        "cognitive_operation": "Apply",
        "contributing_kc_ids": [],
        "estimated_difficulty": "hard"
      },
      {
        "servable": true,
        "role": "initial_check",
        "hints": [
          {
            "text": "Hỏi mỗi cơ chế đang trả lời transport, browser, identity hay permission.",
            "hint_id": "h1",
            "after_attempt": 1
          }
        ],
        "module_id": "day12-g-edge",
        "max_points": 4,
        "interaction": {
          "left": [
            {
              "id": "x1",
              "text": "HTTPS"
            },
            {
              "id": "x2",
              "text": "CORS"
            },
            {
              "id": "x3",
              "text": "Authentication (xác thực)"
            },
            {
              "id": "x4",
              "text": "Authorization (phân quyền)"
            }
          ],
          "type": "matching",
          "right": [
            {
              "id": "r1",
              "text": "Bí mật và toàn vẹn của kênh truyền"
            },
            {
              "id": "r2",
              "text": "Policy đọc khác origin của trình duyệt"
            },
            {
              "id": "r3",
              "text": "Identity của bên gọi"
            },
            {
              "id": "r4",
              "text": "Tài nguyên/thao tác được phép"
            }
          ],
          "prompt": "Bối cảnh:\nMột trình duyệt gọi public API qua HTTPS.\n\nCâu hỏi:\nGhép từng cơ chế với ranh giới mà nó thực sự xử lý.",
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
        "question_id": "d12-q080",
        "primary_kc_id": "kc-https-cors-auth-boundary",
        "grading_method": "deterministic",
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
            "text": "Đánh giá lần lượt kênh truyền, origin, identity của token rồi mới kiểm scope của thao tác.",
            "hint_id": "h1",
            "after_attempt": 1
          }
        ],
        "module_id": "day12-g-edge",
        "max_points": 5,
        "interaction": {
          "type": "short_text",
          "prompt": "Bối cảnh:\nYêu cầu từ trình duyệt có origin đúng, TLS hợp lệ và JWT hợp lệ nhưng thiếu scope `write`.\n\nCâu hỏi:\nDự đoán kết quả của từng cơ chế kiểm soát.",
          "prompt_presentation": {
            "format": "sectioned_plain_text",
            "preserve_line_breaks": true
          }
        },
        "question_id": "d12-q081",
        "primary_kc_id": "kc-https-cors-auth-boundary",
        "grading_method": "criterion_rubric",
        "question_version": 2,
        "cognitive_operation": "Analyze",
        "contributing_kc_ids": [],
        "estimated_difficulty": "hard"
      },
      {
        "servable": true,
        "role": "initial_check",
        "hints": [
          {
            "text": "Xác định bottleneck nằm ở CPU, khả năng song song, trạng thái hay quota của dependency.",
            "hint_id": "h1",
            "after_attempt": 1
          }
        ],
        "module_id": "day12-g-reliability",
        "max_points": 1,
        "interaction": {
          "type": "single_select",
          "prompt": "Bối cảnh:\nMột tiến trình đang ở CPU 95%; trạng thái đã tách khỏi instance và lưu lượng có thể chạy song song. Máy còn cấp tài nguyên lớn hơn nhưng hệ thống cần tính sẵn sàng cao.\n\nCâu hỏi:\nLựa chọn nào hợp lý?",
          "choices": [
            {
              "text": "Tăng RAM cho tiến trình đang nghẽn CPU",
              "choice_id": "a"
            },
            {
              "text": "Scale ngang kèm kiểm tra quota và coordination",
              "choice_id": "b"
            },
            {
              "text": "Giữ trạng thái trong bộ nhớ và bật sticky session cho replica",
              "choice_id": "c"
            },
            {
              "text": "Tăng số replica sẽ tự nâng quota provider",
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
        "question_id": "d12-q082",
        "primary_kc_id": "kc-vertical-horizontal-scaling-decision",
        "grading_method": "deterministic",
        "question_version": 2,
        "cognitive_operation": "Analyze",
        "contributing_kc_ids": [],
        "estimated_difficulty": "medium"
      },
      {
        "servable": false,
        "role": "reassessment",
        "hints": [
          {
            "text": "Hỏi yêu cầu có chia nhỏ được không; nếu không, replica mới không giúp yêu cầu đó dùng ít RAM hơn.",
            "hint_id": "h1",
            "after_attempt": 1
          }
        ],
        "module_id": "day12-g-reliability",
        "max_points": 4,
        "interaction": {
          "type": "short_text",
          "prompt": "Bối cảnh:\nMột yêu cầu đơn lẻ cần 20GB RAM và không thể chia nhỏ để chạy song song; lưu lượng thấp.\n\nCâu hỏi:\nChọn chiều mở rộng, nêu giới hạn mới và cách xử lý nếu yêu cầu vượt trần tài nguyên.",
          "prompt_presentation": {
            "format": "sectioned_plain_text",
            "preserve_line_breaks": true
          }
        },
        "question_id": "d12-q083",
        "primary_kc_id": "kc-vertical-horizontal-scaling-decision",
        "grading_method": "criterion_rubric",
        "question_version": 2,
        "cognitive_operation": "Analyze",
        "contributing_kc_ids": [],
        "estimated_difficulty": "hard"
      },
      {
        "servable": true,
        "role": "initial_check",
        "hints": [
          {
            "text": "Đếm kết nối đang mở thay vì chỉ đếm số yêu cầu đã nhận, rồi loại replica không còn healthy.",
            "hint_id": "h1",
            "after_attempt": 1
          }
        ],
        "module_id": "day12-g-reliability",
        "max_points": 1,
        "interaction": {
          "type": "single_select",
          "prompt": "Bối cảnh:\nCó các kết nối SSE có thời lượng khác nhau; round-robin theo số yêu cầu khiến một replica phải giữ quá nhiều kết nối.\n\nCâu hỏi:\nPolicy nào phù hợp?",
          "choices": [
            {
              "text": "Tăng tài nguyên theo chiều dọc thay vì sửa policy cân bằng tải",
              "choice_id": "a"
            },
            {
              "text": "Sticky session dù trạng thái đã externalize",
              "choice_id": "b"
            },
            {
              "text": "Least-connections kèm health filtering",
              "choice_id": "c"
            },
            {
              "text": "Định tuyến ngẫu nhiên không theo dõi trạng thái health",
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
        "question_id": "d12-q084",
        "primary_kc_id": "kc-load-balancing-policy-selection",
        "grading_method": "deterministic",
        "question_version": 2,
        "cognitive_operation": "Analyze",
        "contributing_kc_ids": [],
        "estimated_difficulty": "medium"
      },
      {
        "servable": false,
        "role": "reassessment",
        "hints": [
          {
            "text": "Tách giải pháp tạm thời cho trạng thái session khỏi đích đến stateless có thể thay replica.",
            "hint_id": "h1",
            "after_attempt": 1
          }
        ],
        "module_id": "day12-g-reliability",
        "max_points": 3,
        "interaction": {
          "type": "short_text",
          "prompt": "Bối cảnh:\nTrạng thái session legacy chưa được externalize; rollout sẽ thay replica trong khi stream vẫn dài.\n\nCâu hỏi:\nChọn policy tạm thời và dự đoán lỗi/thay thế.",
          "prompt_presentation": {
            "format": "sectioned_plain_text",
            "preserve_line_breaks": true
          }
        },
        "question_id": "d12-q085",
        "primary_kc_id": "kc-load-balancing-policy-selection",
        "grading_method": "criterion_rubric",
        "question_version": 2,
        "cognitive_operation": "Analyze",
        "contributing_kc_ids": [],
        "estimated_difficulty": "hard"
      },
      {
        "servable": true,
        "role": "initial_check",
        "hints": [
          {
            "text": "Phân biệt khả năng của replica local với khả năng của provider bên ngoài.",
            "hint_id": "h1",
            "after_attempt": 1
          }
        ],
        "module_id": "day12-g-reliability",
        "max_points": 1,
        "interaction": {
          "type": "multi_select",
          "prompt": "Bối cảnh:\nAgent I/O-bound chỉ dùng CPU 35%, số yêu cầu đang chạy chạm 100/100, tuổi queue tăng và provider có quota riêng.\n\nCâu hỏi:\nNhững tín hiệu/cơ chế nào cần cho policy tự động mở rộng? Chọn tất cả phương án đúng.",
          "choices": [
            {
              "text": "Dùng CPU 70% làm tín hiệu chính dù queue đang tăng",
              "choice_id": "a"
            },
            {
              "text": "Mức bão hòa concurrency kéo dài và độ sâu/tuổi queue",
              "choice_id": "b"
            },
            {
              "text": "Cooldown/min/max cùng cơ chế giảm tải khi quota chạm",
              "choice_id": "c"
            },
            {
              "text": "Tăng replica theo queue mà không đặt trần quota provider",
              "choice_id": "d"
            },
            {
              "text": "Quota downstream và giới hạn in-flight toàn cục",
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
        "question_id": "d12-q086",
        "primary_kc_id": "kc-concurrency-queue-autoscaling",
        "grading_method": "deterministic",
        "question_version": 2,
        "cognitive_operation": "Analyze",
        "contributing_kc_ids": [],
        "estimated_difficulty": "medium"
      },
      {
        "servable": false,
        "role": "reassessment",
        "hints": [
          {
            "text": "Phân biệt tín hiệu khiến mở rộng với trần quota khiến phải backpressure hoặc degrade.",
            "hint_id": "h1",
            "after_attempt": 1
          }
        ],
        "module_id": "day12-g-reliability",
        "max_points": 4,
        "interaction": {
          "type": "short_text",
          "prompt": "Bối cảnh:\nQueue tăng nhưng quota provider đã chạm 200 cuộc gọi; tiếp tục scale replica chỉ làm 429 nhiều hơn.\n\nCâu hỏi:\nThiết kế policy mở rộng và cách xử lý khi quota bị giới hạn.",
          "prompt_presentation": {
            "format": "sectioned_plain_text",
            "preserve_line_breaks": true
          }
        },
        "question_id": "d12-q087",
        "primary_kc_id": "kc-concurrency-queue-autoscaling",
        "grading_method": "criterion_rubric",
        "question_version": 2,
        "cognitive_operation": "Create",
        "contributing_kc_ids": [],
        "estimated_difficulty": "hard"
      },
      {
        "servable": true,
        "role": "follow_up",
        "hints": [
          {
            "text": "Tách khả năng xử lý do mình scale khỏi khả năng do dependency giới hạn.",
            "hint_id": "h1",
            "after_attempt": 1
          }
        ],
        "module_id": "day12-g-reliability",
        "max_points": 1,
        "interaction": {
          "type": "single_select",
          "prompt": "Bối cảnh:\nService tăng từ 2 lên 20 replica nhưng model provider giữ quota 100 cuộc gọi đồng thời; mỗi replica có thể mở 20 cuộc gọi.\n\nCâu hỏi:\nRủi ro chính là gì?",
          "choices": [
            {
              "text": "Coi quota provider tăng cùng số replica",
              "choice_id": "a"
            },
            {
              "text": "Kỳ vọng autoscaling tự làm độ trễ giảm trong trạng thái này",
              "choice_id": "b"
            },
            {
              "text": "Bỏ queue/backpressure vì đã có nhiều replica",
              "choice_id": "c"
            },
            {
              "text": "Tổng in-flight có thể lên 400, vượt quota provider và gây 429",
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
        "question_id": "d12-q088",
        "primary_kc_id": "kc-concurrency-queue-autoscaling",
        "grading_method": "deterministic",
        "question_version": 2,
        "cognitive_operation": "Analyze",
        "contributing_kc_ids": [],
        "estimated_difficulty": "medium"
      },
      {
        "servable": true,
        "role": "initial_check",
        "hints": [
          {
            "text": "Restart và định tuyến là hai quyết định khác nhau.",
            "hint_id": "h1",
            "after_attempt": 1
          }
        ],
        "module_id": "day12-g-reliability",
        "max_points": 3,
        "interaction": {
          "left": [
            {
              "id": "x1",
              "text": "Startup"
            },
            {
              "id": "x2",
              "text": "Liveness"
            },
            {
              "id": "x3",
              "text": "Readiness"
            }
          ],
          "type": "matching",
          "right": [
            {
              "id": "r1",
              "text": "Cho ứng dụng thời gian khởi động trước khi áp dụng liveness"
            },
            {
              "id": "r2",
              "text": "Restart khi process không còn tiến triển"
            },
            {
              "id": "r3",
              "text": "Rút instance khỏi lưu lượng khi chưa phục vụ được"
            }
          ],
          "prompt": "Bối cảnh:\nDịch vụ khởi động chậm, có thể deadlock và có lúc không nhận lưu lượng do dependency.\n\nCâu hỏi:\nGhép probe với quyết định.",
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
        "question_id": "d12-q089",
        "primary_kc_id": "kc-liveness-readiness-startup",
        "grading_method": "deterministic",
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
            "text": "Đọc từng điều kiện trong bối cảnh rồi nối nó với một quyết định và phép kiểm có thể quan sát.",
            "hint_id": "h1",
            "after_attempt": 1
          }
        ],
        "module_id": "day12-g-reliability",
        "max_points": 4,
        "interaction": {
          "type": "short_text",
          "prompt": "Bối cảnh:\nApp đã từng ready nhưng sau đó bị deadlock; DB là dependency bắt buộc và tạm thời không khả dụng; metrics exporter là dependency tùy chọn, có thể chạy ở degraded mode.\n\nCâu hỏi:\nThiết kế ba probe và dự đoán orchestrator sẽ xử lý thế nào.",
          "prompt_presentation": {
            "format": "sectioned_plain_text",
            "preserve_line_breaks": true
          }
        },
        "question_id": "d12-q090",
        "primary_kc_id": "kc-liveness-readiness-startup",
        "grading_method": "criterion_rubric",
        "question_version": 2,
        "cognitive_operation": "Create",
        "contributing_kc_ids": [],
        "estimated_difficulty": "hard"
      },
      {
        "servable": true,
        "role": "follow_up",
        "hints": [
          {
            "text": "Mục tiêu là restart process hay ngừng routing?",
            "hint_id": "h1",
            "after_attempt": 1
          }
        ],
        "module_id": "day12-g-reliability",
        "max_points": 1,
        "interaction": {
          "type": "single_select",
          "prompt": "Bối cảnh:\nDịch vụ còn sống nhưng dependency bắt buộc đang không khả dụng; restart dịch vụ không sửa được dependency.\n\nCâu hỏi:\nProbe nào nên fail để ngừng lưu lượng mới?",
          "choices": [
            {
              "text": "Để readiness fail để rút instance khỏi lưu lượng",
              "choice_id": "a"
            },
            {
              "text": "Để liveness fail để restart process",
              "choice_id": "b"
            },
            {
              "text": "Để startup fail sau khi dịch vụ đã khởi động",
              "choice_id": "c"
            },
            {
              "text": "Giữ cả ba probe pass và tiếp tục định tuyến",
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
        "question_id": "d12-q091",
        "primary_kc_id": "kc-liveness-readiness-startup",
        "grading_method": "deterministic",
        "question_version": 2,
        "cognitive_operation": "Analyze",
        "contributing_kc_ids": [],
        "estimated_difficulty": "easy"
      },
      {
        "servable": true,
        "role": "initial_check",
        "hints": [
          {
            "text": "Tách bàn giao lưu lượng, request lọt vào, drain có giới hạn và thoát process.",
            "hint_id": "h1",
            "after_attempt": 1
          }
        ],
        "module_id": "day12-g-reliability",
        "max_points": 1,
        "interaction": {
          "type": "ordering",
          "prompt": "Bối cảnh:\nOrchestrator gửi SIGTERM trước khi thu hồi pod đang có request; ứng dụng có deadline drain nằm trong grace timeout của platform.\n\nCâu hỏi:\nSắp shutdown path an toàn.",
          "options": [
            {
              "text": "Nhận SIGTERM và bật trạng thái draining",
              "option_id": "o1"
            },
            {
              "text": "Readiness chuyển false để rút instance khỏi định tuyến",
              "option_id": "o2"
            },
            {
              "text": "Từ chối request mới lọt vào trong thời gian lan truyền readiness",
              "option_id": "o3"
            },
            {
              "text": "Chờ tác vụ đang chạy trong thời hạn grace",
              "option_id": "o4"
            },
            {
              "text": "Hoàn tất hoặc hủy theo policy khi hết deadline",
              "option_id": "o5"
            },
            {
              "text": "Đóng tài nguyên rồi exit trước khi grace timeout hết",
              "option_id": "o6"
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
        "question_id": "d12-q092",
        "primary_kc_id": "kc-graceful-shutdown-signal-handoff",
        "grading_method": "deterministic",
        "question_version": 2,
        "cognitive_operation": "Apply",
        "contributing_kc_ids": [],
        "estimated_difficulty": "medium"
      },
      {
        "servable": false,
        "role": "reassessment",
        "hints": [
          {
            "text": "Đọc từng điều kiện trong bối cảnh rồi nối nó với một quyết định và phép kiểm có thể quan sát.",
            "hint_id": "h1",
            "after_attempt": 1
          }
        ],
        "module_id": "day12-g-reliability",
        "max_points": 5,
        "interaction": {
          "type": "short_text",
          "prompt": "Bối cảnh:\nCó request mới đến sau khi nhận tín hiệu termination; một request đang chạy vượt quá thời hạn grace.\n\nCâu hỏi:\nMô tả thứ tự shutdown và kết quả xử lý của từng request.",
          "prompt_presentation": {
            "format": "sectioned_plain_text",
            "preserve_line_breaks": true
          }
        },
        "question_id": "d12-q093",
        "primary_kc_id": "kc-graceful-shutdown-signal-handoff",
        "grading_method": "criterion_rubric",
        "question_version": 2,
        "cognitive_operation": "Apply",
        "contributing_kc_ids": [],
        "estimated_difficulty": "hard"
      },
      {
        "servable": true,
        "role": "initial_check",
        "hints": [
          {
            "text": "Giữ D1 sẵn sàng cho tới khi canary D2 vượt observation gate.",
            "hint_id": "h1",
            "after_attempt": 1
          }
        ],
        "module_id": "day12-g-reliability",
        "max_points": 1,
        "interaction": {
          "type": "ordering",
          "prompt": "Bối cảnh:\nBản phát hành D2 phải thay D1 mà không ngắt lưu lượng; thay đổi schema phải tương thích ngược.\n\nCâu hỏi:\nSắp rollout path.",
          "options": [
            {
              "text": "Triển khai schema và thay đổi tương thích ngược",
              "option_id": "o1"
            },
            {
              "text": "Khởi chạy các instance D2",
              "option_id": "o2"
            },
            {
              "text": "D2 đạt startup/readiness",
              "option_id": "o3"
            },
            {
              "text": "Cho D2 nhận một phần lưu lượng canary",
              "option_id": "o4"
            },
            {
              "text": "Theo dõi SLI và rollback nếu gate không đạt",
              "option_id": "o5"
            },
            {
              "text": "Tăng D2 lên tỷ lệ lưu lượng mục tiêu",
              "option_id": "o6"
            },
            {
              "text": "Rút dần lưu lượng khỏi D1",
              "option_id": "o7"
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
        "question_id": "d12-q094",
        "primary_kc_id": "kc-zero-downtime-rollout-sequencing",
        "grading_method": "deterministic",
        "question_version": 2,
        "cognitive_operation": "Apply",
        "contributing_kc_ids": [],
        "estimated_difficulty": "hard"
      },
      {
        "servable": false,
        "role": "reassessment",
        "hints": [
          {
            "text": "Đọc từng điều kiện trong bối cảnh rồi nối nó với một quyết định và phép kiểm có thể quan sát.",
            "hint_id": "h1",
            "after_attempt": 1
          }
        ],
        "module_id": "day12-g-reliability",
        "max_points": 5,
        "interaction": {
          "type": "short_text",
          "prompt": "Bối cảnh:\nSchema tương thích ngược, tài nguyên đủ để chạy song song hai phiên bản và rủi ro phát hành cao.\n\nCâu hỏi:\nChọn chiến lược rollout và thứ tự các gate/rollback.",
          "prompt_presentation": {
            "format": "sectioned_plain_text",
            "preserve_line_breaks": true
          }
        },
        "question_id": "d12-q095",
        "primary_kc_id": "kc-zero-downtime-rollout-sequencing",
        "grading_method": "criterion_rubric",
        "question_version": 2,
        "cognitive_operation": "Analyze",
        "contributing_kc_ids": [],
        "estimated_difficulty": "hard"
      },
      {
        "servable": true,
        "role": "initial_check",
        "hints": [
          {
            "text": "Theo dõi chuyển trạng thái và việc dependency có được gọi hay không.",
            "hint_id": "h1",
            "after_attempt": 1
          }
        ],
        "module_id": "day12-g-reliability",
        "max_points": 1,
        "interaction": {
          "type": "ordering",
          "prompt": "Bối cảnh:\nBreaker closed, failure threshold=3 và cooldown đã cấu hình.\n\nCâu hỏi:\nSắp state path khi ba qualifying failures xảy ra, cooldown hết và probe thành công.",
          "options": [
            {
              "text": "Closed ghi nhận các lỗi dependency đủ điều kiện",
              "option_id": "o1"
            },
            {
              "text": "Chuyển sang Open khi đạt threshold",
              "option_id": "o2"
            },
            {
              "text": "Fail fast hoặc fallback trong Open",
              "option_id": "o3"
            },
            {
              "text": "Cooldown hết, chuyển Half-open và cho một probe",
              "option_id": "o4"
            },
            {
              "text": "Probe thành công, reset về Closed",
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
        "question_id": "d12-q096",
        "primary_kc_id": "kc-circuit-breaker-state-control",
        "grading_method": "deterministic",
        "question_version": 2,
        "cognitive_operation": "Apply",
        "contributing_kc_ids": [],
        "estimated_difficulty": "medium"
      },
      {
        "servable": false,
        "role": "reassessment",
        "hints": [
          {
            "text": "Đọc từng điều kiện trong bối cảnh rồi nối nó với một quyết định và phép kiểm có thể quan sát.",
            "hint_id": "h1",
            "after_attempt": 1
          }
        ],
        "module_id": "day12-g-reliability",
        "max_points": 5,
        "interaction": {
          "type": "short_text",
          "prompt": "Bối cảnh:\nBreaker ở Closed đã ghi nhận đủ threshold lỗi dependency và chuyển sang Open; các request trong Open bị fail fast. Cooldown hết, Half-open cho một probe; probe thành công rồi request sau đến.\n\nCâu hỏi:\nTheo dõi chuyển trạng thái và các call được thực thi hay bị chặn.",
          "prompt_presentation": {
            "format": "sectioned_plain_text",
            "preserve_line_breaks": true
          }
        },
        "question_id": "d12-q097",
        "primary_kc_id": "kc-circuit-breaker-state-control",
        "grading_method": "criterion_rubric",
        "question_version": 2,
        "cognitive_operation": "Analyze",
        "contributing_kc_ids": [],
        "estimated_difficulty": "hard"
      },
      {
        "servable": true,
        "role": "initial_check",
        "hints": [
          {
            "text": "Kiểm tra giả định, ranh giới và hệ quả trước khi chọn.",
            "hint_id": "h1",
            "after_attempt": 1
          }
        ],
        "module_id": "day12-g-reliability",
        "max_points": 1,
        "interaction": {
          "type": "single_select",
          "prompt": "Bối cảnh:\nMột POST có side effect bị timeout, không có idempotency key nên trạng thái hoàn tất chưa xác định.\n\nCâu hỏi:\nQuyết định retry nào an toàn nhất?",
          "choices": [
            {
              "text": "Xác minh trạng thái side effect; nếu retry thì phải có cơ chế idempotency bảo vệ",
              "choice_id": "a"
            },
            {
              "text": "Retry ngay với backoff giới hạn dù chưa có idempotency",
              "choice_id": "b"
            },
            {
              "text": "Đánh dấu thất bại ngay vì client không nhận được response",
              "choice_id": "c"
            },
            {
              "text": "Dùng circuit breaker để ngăn side effect bị thực hiện trùng",
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
        "question_id": "d12-q098",
        "primary_kc_id": "kc-bounded-backoff-retry",
        "grading_method": "deterministic",
        "question_version": 2,
        "cognitive_operation": "Analyze",
        "contributing_kc_ids": [],
        "estimated_difficulty": "medium"
      },
      {
        "servable": false,
        "role": "reassessment",
        "hints": [
          {
            "text": "Đọc từng điều kiện trong bối cảnh rồi nối nó với một quyết định và phép kiểm có thể quan sát.",
            "hint_id": "h1",
            "after_attempt": 1
          }
        ],
        "module_id": "day12-g-reliability",
        "max_points": 4,
        "interaction": {
          "type": "short_text",
          "prompt": "Bối cảnh:\nMột dependency được gọi bằng GET trả 429 kèm Retry-After=5; còn 12 giây trước deadline và tối đa 3 attempt. Attempt 1 vừa thất bại.\n\nCâu hỏi:\nNêu delay và attempt tiếp theo, cùng cách kết thúc khi hết thời gian hoặc số lần thử.",
          "prompt_presentation": {
            "format": "sectioned_plain_text",
            "preserve_line_breaks": true
          }
        },
        "question_id": "d12-q099",
        "primary_kc_id": "kc-bounded-backoff-retry",
        "grading_method": "criterion_rubric",
        "question_version": 2,
        "cognitive_operation": "Analyze",
        "contributing_kc_ids": [],
        "estimated_difficulty": "hard"
      },
      {
        "servable": true,
        "role": "follow_up",
        "hints": [
          {
            "text": "Phân biệt không có response với không có effect.",
            "hint_id": "h1",
            "after_attempt": 1
          }
        ],
        "module_id": "day12-g-reliability",
        "max_points": 1,
        "interaction": {
          "type": "single_select",
          "prompt": "Bối cảnh:\nPOST thanh toán timeout sau khi request đã rời client, không có idempotency key hay receipt query.\n\nCâu hỏi:\nTimeout này chứng minh điều gì?",
          "choices": [
            {
              "text": "Trạng thái hoàn tất của side effect vẫn chưa xác định",
              "choice_id": "a"
            },
            {
              "text": "Suy đoán request đã thất bại dựa trên việc client không nhận được response",
              "choice_id": "b"
            },
            {
              "text": "Tiếp tục retry payload cũ trước khi kiểm tra khả năng lặp an toàn",
              "choice_id": "c"
            },
            {
              "text": "Dùng circuit breaker như tín hiệu cho biết server đã commit hay chưa",
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
        "question_id": "d12-q100",
        "primary_kc_id": "kc-bounded-backoff-retry",
        "grading_method": "deterministic",
        "question_version": 2,
        "cognitive_operation": "Analyze",
        "contributing_kc_ids": [],
        "estimated_difficulty": "medium"
      },
      {
        "servable": true,
        "role": "initial_check",
        "hints": [
          {
            "text": "Kiểm tra giả định, ranh giới và hệ quả trước khi chọn.",
            "hint_id": "h1",
            "after_attempt": 1
          }
        ],
        "module_id": "day12-g-reliability",
        "max_points": 1,
        "interaction": {
          "type": "single_select",
          "prompt": "Bối cảnh:\nDependency search chậm chiếm cả global semaphore 50; lưu lượng thanh toán không dùng search cũng bị treo.\n\nCâu hỏi:\nCách khắc phục nào đúng?",
          "choices": [
            {
              "text": "Bulkhead riêng kèm timeout có giới hạn",
              "choice_id": "a"
            },
            {
              "text": "Retry thanh toán trên cùng pool toàn cục",
              "choice_id": "b"
            },
            {
              "text": "Tự động mở rộng theo CPU cho dependency search",
              "choice_id": "c"
            },
            {
              "text": "Tăng semaphore toàn cục không giới hạn",
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
        "question_id": "d12-q101",
        "primary_kc_id": "kc-timeout-bulkhead-isolation",
        "grading_method": "deterministic",
        "question_version": 2,
        "cognitive_operation": "Analyze",
        "contributing_kc_ids": [],
        "estimated_difficulty": "medium"
      },
      {
        "servable": false,
        "role": "reassessment",
        "hints": [
          {
            "text": "Đọc từng điều kiện trong bối cảnh rồi nối nó với một quyết định và phép kiểm có thể quan sát.",
            "hint_id": "h1",
            "after_attempt": 1
          }
        ],
        "module_id": "day12-g-reliability",
        "max_points": 4,
        "interaction": {
          "type": "short_text",
          "prompt": "Bối cảnh:\nĐồ thị gọi có model, search và payment với latency budget khác nhau.\n\nCâu hỏi:\nThiết kế timeout/bulkhead và dự đoán workload nào vẫn phục vụ được.",
          "prompt_presentation": {
            "format": "sectioned_plain_text",
            "preserve_line_breaks": true
          }
        },
        "question_id": "d12-q102",
        "primary_kc_id": "kc-timeout-bulkhead-isolation",
        "grading_method": "criterion_rubric",
        "question_version": 2,
        "cognitive_operation": "Create",
        "contributing_kc_ids": [],
        "estimated_difficulty": "hard"
      },
      {
        "servable": true,
        "role": "initial_check",
        "hints": [
          {
            "text": "Tính số request lỗi cho phép và thực tế trên cùng mẫu số.",
            "hint_id": "h1",
            "after_attempt": 1
          }
        ],
        "module_id": "day12-g-reliability",
        "max_points": 1,
        "interaction": {
          "type": "numeric_input",
          "prompt": "Bối cảnh:\nTrong 10.000 request đủ điều kiện, 9.950 đạt latency ≤2s. SLO là 99,7% trong cùng cửa sổ đo.\n\nCâu hỏi:\nError budget đã bị vượt bao nhiêu request?",
          "required_unit": "request",
          "prompt_presentation": {
            "format": "sectioned_plain_text",
            "preserve_line_breaks": true
          }
        },
        "question_id": "d12-q103",
        "primary_kc_id": "kc-sli-slo-sla-error-budget",
        "grading_method": "deterministic",
        "question_version": 2,
        "cognitive_operation": "Apply",
        "contributing_kc_ids": [],
        "estimated_difficulty": "medium"
      },
      {
        "servable": false,
        "role": "reassessment",
        "hints": [
          {
            "text": "Đọc từng điều kiện trong bối cảnh rồi nối nó với một quyết định và phép kiểm có thể quan sát.",
            "hint_id": "h1",
            "after_attempt": 1
          }
        ],
        "module_id": "day12-g-reliability",
        "max_points": 4,
        "interaction": {
          "type": "short_text",
          "prompt": "Bối cảnh:\nTrong 10.000 request đủ điều kiện, 9.950 đạt latency ≤2s. SLA cam kết 99,0% với mức phạt, dùng cùng cách tính SLI và cùng cửa sổ đo; SLO nội bộ là 99,7% trong cửa sổ đó.\n\nCâu hỏi:\nPhân biệt mục tiêu nội bộ với cam kết bên ngoài và tính trạng thái error budget.",
          "prompt_presentation": {
            "format": "sectioned_plain_text",
            "preserve_line_breaks": true
          }
        },
        "question_id": "d12-q104",
        "primary_kc_id": "kc-sli-slo-sla-error-budget",
        "grading_method": "criterion_rubric",
        "question_version": 2,
        "cognitive_operation": "Analyze",
        "contributing_kc_ids": [],
        "estimated_difficulty": "hard"
      },
      {
        "servable": true,
        "role": "follow_up",
        "hints": [
          {
            "text": "So cùng SLI lần lượt với hai threshold.",
            "hint_id": "h1",
            "after_attempt": 1
          }
        ],
        "module_id": "day12-g-reliability",
        "max_points": 1,
        "interaction": {
          "type": "single_select",
          "prompt": "Bối cảnh:\nSLO nội bộ 99,9%; SLA hợp đồng 99,0%. Tháng này SLI cùng định nghĩa là 99,5%.\n\nCâu hỏi:\nKết luận nào đúng?",
          "choices": [
            {
              "text": "SLO fail; SLA pass",
              "choice_id": "a"
            },
            {
              "text": "Đạt cả SLO nội bộ và SLA bên ngoài",
              "choice_id": "b"
            },
            {
              "text": "Fail cả internal SLO và external SLA",
              "choice_id": "c"
            },
            {
              "text": "SLO và SLA dùng cùng một ngưỡng",
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
        "question_id": "d12-q105",
        "primary_kc_id": "kc-sli-slo-sla-error-budget",
        "grading_method": "deterministic",
        "question_version": 2,
        "cognitive_operation": "Analyze",
        "contributing_kc_ids": [],
        "estimated_difficulty": "easy"
      },
      {
        "servable": true,
        "role": "initial_check",
        "hints": [
          {
            "text": "Cần biết inject gì, ở đâu, mong đợi gì và lúc nào dừng.",
            "hint_id": "h1",
            "after_attempt": 1
          }
        ],
        "module_id": "day12-g-reliability",
        "max_points": 1,
        "interaction": {
          "type": "multi_select",
          "prompt": "Bối cảnh:\nNhóm muốn kiểm tra nhận định “search chậm không khiến payment mất khả năng phục vụ”.\n\nCâu hỏi:\nMột chaos experiment có kiểm soát cần những gì? Chọn tất cả phương án đúng.",
          "choices": [
            {
              "text": "Chỉ inject latency vào search trong phạm vi staging/canary",
              "choice_id": "a"
            },
            {
              "text": "Hành vi kỳ vọng và ngưỡng SLI cho search/payment",
              "choice_id": "b"
            },
            {
              "text": "Giới hạn blast radius, telemetry, điều kiện abort và kiểm chứng recovery",
              "choice_id": "c"
            },
            {
              "text": "Tắt ngẫu nhiên các production service không có người phụ trách",
              "choice_id": "d"
            },
            {
              "text": "Không cần đường cơ sở vì outage tự là bằng chứng",
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
        "question_id": "d12-q106",
        "primary_kc_id": "kc-controlled-chaos-experiment",
        "grading_method": "deterministic",
        "question_version": 2,
        "cognitive_operation": "Evaluate",
        "contributing_kc_ids": [],
        "estimated_difficulty": "medium"
      },
      {
        "servable": false,
        "role": "reassessment",
        "hints": [
          {
            "text": "Đọc từng điều kiện trong bối cảnh rồi nối nó với một quyết định và phép kiểm có thể quan sát.",
            "hint_id": "h1",
            "after_attempt": 1
          }
        ],
        "module_id": "day12-g-reliability",
        "max_points": 4,
        "interaction": {
          "type": "short_text",
          "prompt": "Bối cảnh:\nNhận định: search chậm không được khiến payment ngừng phục vụ.\n\nCâu hỏi:\nThiết kế một chaos experiment có kiểm soát để kiểm tra nhận định này.",
          "prompt_presentation": {
            "format": "sectioned_plain_text",
            "preserve_line_breaks": true
          }
        },
        "question_id": "d12-q107",
        "primary_kc_id": "kc-controlled-chaos-experiment",
        "grading_method": "criterion_rubric",
        "question_version": 2,
        "cognitive_operation": "Create",
        "contributing_kc_ids": [],
        "estimated_difficulty": "hard"
      },
      {
        "servable": true,
        "role": "initial_check",
        "hints": [
          {
            "text": "Chọn field phục vụ query/trace nhưng không trở thành data exposure.",
            "hint_id": "h1",
            "after_attempt": 1
          }
        ],
        "module_id": "day12-g-delivery",
        "max_points": 1,
        "interaction": {
          "type": "multi_select",
          "prompt": "Bối cảnh:\nMột request đi gateway→agent→model→tool; nhóm cần query latency/error/cost mà không để lộ secret.\n\nCâu hỏi:\nNhững field/practice nào phù hợp? Chọn tất cả phương án đúng.",
          "choices": [
            {
              "text": "Timestamp, event_name và request/trace ID",
              "choice_id": "a"
            },
            {
              "text": "Stage latency, status, token/cost và safe error code",
              "choice_id": "b"
            },
            {
              "text": "One-line structured event có redacted/opaque identity",
              "choice_id": "c"
            },
            {
              "text": "Full prompt và API key để debug",
              "choice_id": "d"
            },
            {
              "text": "Free-form multi-line prose không stable fields",
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
        "question_id": "d12-q108",
        "primary_kc_id": "kc-structured-request-observability",
        "grading_method": "deterministic",
        "question_version": 2,
        "cognitive_operation": "Analyze",
        "contributing_kc_ids": [],
        "estimated_difficulty": "medium"
      },
      {
        "servable": false,
        "role": "reassessment",
        "hints": [
          {
            "text": "Đọc từng điều kiện trong bối cảnh rồi nối nó với một quyết định và phép kiểm có thể quan sát.",
            "hint_id": "h1",
            "after_attempt": 1
          }
        ],
        "module_id": "day12-g-delivery",
        "max_points": 4,
        "interaction": {
          "type": "short_text",
          "prompt": "Bối cảnh:\nMột request đi gateway→agent→model→tool và thất bại 502.\n\nCâu hỏi:\nThiết kế event schema và phép query metric.",
          "prompt_presentation": {
            "format": "sectioned_plain_text",
            "preserve_line_breaks": true
          }
        },
        "question_id": "d12-q109",
        "primary_kc_id": "kc-structured-request-observability",
        "grading_method": "criterion_rubric",
        "question_version": 2,
        "cognitive_operation": "Create",
        "contributing_kc_ids": [],
        "estimated_difficulty": "hard"
      },
      {
        "servable": true,
        "role": "initial_check",
        "hints": [
          {
            "text": "Kiểm tra giả định, ranh giới và hệ quả trước khi chọn.",
            "hint_id": "h1",
            "after_attempt": 1
          }
        ],
        "module_id": "day12-g-delivery",
        "max_points": 1,
        "interaction": {
          "type": "single_select",
          "prompt": "Bối cảnh:\nWorkflow chạy lint/test/build image rồi tự deploy một digest khác vừa build lại ở production.\n\nCâu hỏi:\nLỗi chính là gì?",
          "choices": [
            {
              "text": "CD build lại artifact chưa được CI kiểm chứng",
              "choice_id": "a"
            },
            {
              "text": "Đưa test vào production stage để lấy kết quả gần thật",
              "choice_id": "b"
            },
            {
              "text": "Gọi post-deploy smoke trước khi deploy để tiết kiệm thời gian",
              "choice_id": "c"
            },
            {
              "text": "Gắn nhãn CD cho cả các bước lint, test và build",
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
        "question_id": "d12-q110",
        "primary_kc_id": "kc-ci-cd-release-stage-distinction",
        "grading_method": "deterministic",
        "question_version": 2,
        "cognitive_operation": "Analyze",
        "contributing_kc_ids": [],
        "estimated_difficulty": "medium"
      },
      {
        "servable": false,
        "role": "reassessment",
        "hints": [
          {
            "text": "Đọc từng điều kiện trong bối cảnh rồi nối nó với một quyết định và phép kiểm có thể quan sát.",
            "hint_id": "h1",
            "after_attempt": 1
          }
        ],
        "module_id": "day12-g-delivery",
        "max_points": 4,
        "interaction": {
          "type": "short_text",
          "prompt": "Bối cảnh:\nPull request đạt test, merge vào main tạo digest D; staging/production có các gate phê duyệt khác nhau.\n\nCâu hỏi:\nGắn nhãn stage và mô tả đường promotion.",
          "prompt_presentation": {
            "format": "sectioned_plain_text",
            "preserve_line_breaks": true
          }
        },
        "question_id": "d12-q111",
        "primary_kc_id": "kc-ci-cd-release-stage-distinction",
        "grading_method": "criterion_rubric",
        "question_version": 2,
        "cognitive_operation": "Analyze",
        "contributing_kc_ids": [],
        "estimated_difficulty": "hard"
      },
      {
        "servable": true,
        "role": "initial_check",
        "hints": [
          {
            "text": "Kiểm tra giả định, ranh giới và hệ quả trước khi chọn.",
            "hint_id": "h1",
            "after_attempt": 1
          }
        ],
        "module_id": "day12-g-delivery",
        "max_points": 1,
        "interaction": {
          "type": "single_select",
          "prompt": "Bối cảnh:\nYAML đặt deploy sau test trong file nhưng không có `needs`; deploy chạy song song và trên pull_request vẫn có secrets.\n\nCâu hỏi:\nCần sửa gì?",
          "choices": [
            {
              "text": "DAG, điều kiện event và phạm vi secret",
              "choice_id": "a"
            },
            {
              "text": "Reviewer ghi nhớ không bấm deploy",
              "choice_id": "b"
            },
            {
              "text": "Đổi tên jobs theo thứ tự mong muốn",
              "choice_id": "c"
            },
            {
              "text": "Thêm sleep để test job chạy trước",
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
        "question_id": "d12-q112",
        "primary_kc_id": "kc-ci-job-dependency-gating",
        "grading_method": "deterministic",
        "question_version": 2,
        "cognitive_operation": "Analyze",
        "contributing_kc_ids": [],
        "estimated_difficulty": "medium"
      },
      {
        "servable": false,
        "role": "reassessment",
        "hints": [
          {
            "text": "Đọc từng điều kiện trong bối cảnh rồi nối nó với một quyết định và phép kiểm có thể quan sát.",
            "hint_id": "h1",
            "after_attempt": 1
          }
        ],
        "module_id": "day12-g-delivery",
        "max_points": 5,
        "interaction": {
          "type": "short_text",
          "prompt": "Bối cảnh:\nBuild cần lint+test; deploy chỉ chạy trên main với trusted event và pinned actions.\n\nCâu hỏi:\nDựng DAG và các đường đi khi có lỗi.",
          "prompt_presentation": {
            "format": "sectioned_plain_text",
            "preserve_line_breaks": true
          }
        },
        "question_id": "d12-q113",
        "primary_kc_id": "kc-ci-job-dependency-gating",
        "grading_method": "criterion_rubric",
        "question_version": 2,
        "cognitive_operation": "Create",
        "contributing_kc_ids": [],
        "estimated_difficulty": "hard"
      },
      {
        "servable": true,
        "role": "initial_check",
        "hints": [
          {
            "text": "Xác định giả định, ranh giới chạy và hệ quả cần đo trước khi chọn.",
            "hint_id": "h1",
            "after_attempt": 1
          }
        ],
        "module_id": "day12-g-delivery",
        "max_points": 1,
        "interaction": {
          "type": "single_select",
          "prompt": "Bối cảnh:\nMột bài kiểm tra chạy trên máy developer đạt vì dùng trạng thái có sẵn và gọi endpoint production đang chạy. Bài kiểm tra này hiện bị xếp trong nhóm test của CI.\n\nCâu hỏi:\nĐặt bài kiểm tra vào giai đoạn nào và những phụ thuộc không tái lập nào cần sửa?",
          "choices": [
            {
              "text": "Đưa ra khỏi clean runner; chạy post-deploy/integration với fixture cô lập và dữ liệu do pipeline chuẩn bị",
              "choice_id": "a"
            },
            {
              "text": "Giữ trong unit test, thêm retry rồi tiếp tục gọi endpoint production đang chạy",
              "choice_id": "b"
            },
            {
              "text": "Giữ trong clean runner và mount HOME của developer để tái dùng trạng thái",
              "choice_id": "c"
            },
            {
              "text": "Đổi thành test tĩnh trong CI và bỏ phần gọi endpoint production, dù mục tiêu cần bằng chứng từ dịch vụ đang chạy",
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
        "question_id": "d12-q114",
        "primary_kc_id": "kc-clean-build-test-selection",
        "grading_method": "deterministic",
        "question_version": 2,
        "cognitive_operation": "Analyze",
        "contributing_kc_ids": [],
        "estimated_difficulty": "medium"
      },
      {
        "servable": false,
        "role": "reassessment",
        "hints": [
          {
            "text": "Đọc từng điều kiện rồi nối nó với giai đoạn chạy và phép kiểm có thể quan sát.",
            "hint_id": "h1",
            "after_attempt": 1
          }
        ],
        "module_id": "day12-g-delivery",
        "max_points": 4,
        "interaction": {
          "type": "short_text",
          "prompt": "Bối cảnh:\nDanh sách kiểm tra gồm: unit test dùng mock; build container; smoke test trên public URL; và một test kiểm badge/trạng thái của chính workflow khi workflow còn chưa hoàn tất.\n\nCâu hỏi:\nXếp từng bài kiểm tra vào đúng giai đoạn và nêu cách sửa bài kiểm tra tự tham chiếu.",
          "prompt_presentation": {
            "format": "sectioned_plain_text",
            "preserve_line_breaks": true
          }
        },
        "question_id": "d12-q115",
        "primary_kc_id": "kc-clean-build-test-selection",
        "grading_method": "criterion_rubric",
        "question_version": 2,
        "cognitive_operation": "Apply",
        "contributing_kc_ids": [],
        "estimated_difficulty": "hard"
      },
      {
        "servable": true,
        "role": "initial_check",
        "hints": [
          {
            "text": "So sánh bằng chứng lúc build với bằng chứng đọc trực tiếp từ endpoint đang phục vụ.",
            "hint_id": "h1",
            "after_attempt": 1
          }
        ],
        "module_id": "day12-g-delivery",
        "max_points": 1,
        "interaction": {
          "type": "single_select",
          "prompt": "Bối cảnh:\nNhật ký deploy báo thành công nhưng endpoint vẫn đang phục vụ commit cũ.\n\nCâu hỏi:\nBộ bằng chứng nào vừa xác nhận release đang phục vụ commit đúng, vừa phát hiện lỗi chức năng?",
          "choices": [
            {
              "text": "Smoke từ bên ngoài, kiểm tra định danh release/digest và một đường chức năng nhạy lỗi",
              "choice_id": "a"
            },
            {
              "text": "Dùng nhật ký build chứa digest để kết luận endpoint đang phục vụ digest đó",
              "choice_id": "b"
            },
            {
              "text": "In giá trị secret runtime để chứng minh container đã nhận cấu hình",
              "choice_id": "c"
            },
            {
              "text": "Kiểm tra root page trả HTTP 200 rồi dùng đó làm bằng chứng, không đọc định danh release",
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
        "question_id": "d12-q116",
        "primary_kc_id": "kc-postdeploy-smoke-traceability",
        "grading_method": "deterministic",
        "question_version": 2,
        "cognitive_operation": "Analyze",
        "contributing_kc_ids": [],
        "estimated_difficulty": "medium"
      },
      {
        "servable": false,
        "role": "reassessment",
        "hints": [
          {
            "text": "Đọc cả ba tín hiệu: định danh, health và đường chức năng có xác thực; đừng kết luận từ một tín hiệu.",
            "hint_id": "h1",
            "after_attempt": 1
          }
        ],
        "module_id": "day12-g-delivery",
        "max_points": 4,
        "interaction": {
          "type": "short_text",
          "prompt": "Bối cảnh:\nRollout D7 đã hoàn tất; `/version` trả digest D7, `/health` đạt, nhưng request tối thiểu có xác thực trả 500.\n\nCâu hỏi:\nQuyết định giữ hay rollback release, và ghi lại bằng chứng thế nào?",
          "prompt_presentation": {
            "format": "sectioned_plain_text",
            "preserve_line_breaks": true
          }
        },
        "question_id": "d12-q117",
        "primary_kc_id": "kc-postdeploy-smoke-traceability",
        "grading_method": "criterion_rubric",
        "question_version": 2,
        "cognitive_operation": "Evaluate",
        "contributing_kc_ids": [],
        "estimated_difficulty": "hard"
      },
      {
        "servable": true,
        "role": "initial_check",
        "hints": [
          {
            "text": "Lọc ứng viên không hợp policy trước, rồi mới xét health hoặc chi phí.",
            "hint_id": "h1",
            "after_attempt": 1
          }
        ],
        "module_id": "day12-g-delivery",
        "max_points": 1,
        "interaction": {
          "type": "multi_select",
          "prompt": "Bối cảnh:\nPrimary bị rate limit; F1 đang hoạt động nhưng sai data region; F2 có capability phù hợp nhưng budget có thể cạn.\n\nCâu hỏi:\nNhững quy tắc nào đúng cho failover routing? Chọn tất cả phương án đúng.",
          "choices": [
            {
              "text": "Lọc theo capability, region, auth và budget trước khi xếp hạng health/load",
              "choice_id": "a"
            },
            {
              "text": "Chỉ route tới ứng viên vừa tương thích contract vừa sẵn sàng",
              "choice_id": "b"
            },
            {
              "text": "Trả no-compatible-route hoặc degraded outcome khi không còn ứng viên hợp policy",
              "choice_id": "c"
            },
            {
              "text": "Ưu tiên model có chi phí thấp nhất, ngay cả khi model đó thiếu capability",
              "choice_id": "d"
            },
            {
              "text": "Bỏ policy region/budget để route được ngay khi Primary lỗi",
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
        "question_id": "d12-q118",
        "primary_kc_id": "kc-llm-gateway-failover-routing",
        "grading_method": "deterministic",
        "question_version": 2,
        "cognitive_operation": "Analyze",
        "contributing_kc_ids": [],
        "estimated_difficulty": "hard"
      },
      {
        "servable": false,
        "role": "reassessment",
        "hints": [
          {
            "text": "Lọc từng ứng viên theo policy trước; chỉ sau đó mới xét health hoặc chi phí.",
            "hint_id": "h1",
            "after_attempt": 1
          }
        ],
        "module_id": "day12-g-delivery",
        "max_points": 4,
        "interaction": {
          "type": "short_text",
          "prompt": "Bối cảnh:\nPrimary bị rate limit; F1 đang hoạt động nhưng data region không được phép; F2 tương thích nhưng budget cap đã hết.\n\nCâu hỏi:\nTính chuỗi route/failover và kết quả khi không còn route hợp lệ.",
          "prompt_presentation": {
            "format": "sectioned_plain_text",
            "preserve_line_breaks": true
          }
        },
        "question_id": "d12-q119",
        "primary_kc_id": "kc-llm-gateway-failover-routing",
        "grading_method": "criterion_rubric",
        "question_version": 2,
        "cognitive_operation": "Apply",
        "contributing_kc_ids": [],
        "estimated_difficulty": "hard"
      },
      {
        "servable": true,
        "role": "initial_check",
        "hints": [
          {
            "text": "Phân biệt phần tính prefix có thể tái dùng với câu trả lời phụ thuộc tham số output.",
            "hint_id": "h1",
            "after_attempt": 1
          }
        ],
        "module_id": "day12-g-delivery",
        "max_points": 1,
        "interaction": {
          "type": "single_select",
          "prompt": "Bối cảnh:\nHai request dùng cùng model, phiên bản prompt và source, đồng thời có exact prefix giống nhau; chỉ khác tham số lấy mẫu output.\n\nCâu hỏi:\nDạng tái sử dụng nào có căn cứ?",
          "choices": [
            {
              "text": "Tái sử dụng phần tính exact-prefix với cache key đã version hóa; không tái sử dụng output",
              "choice_id": "a"
            },
            {
              "text": "Dùng semantic similarity cao để tái sử dụng answer mà không cần kiểm version",
              "choice_id": "b"
            },
            {
              "text": "Tái sử dụng entry dù phiên bản source đã đổi, vì query vẫn dùng cùng model",
              "choice_id": "c"
            },
            {
              "text": "Ghép secret dạng plaintext vào cache key cùng model và prompt để phân biệt entry",
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
        "question_id": "d12-q120",
        "primary_kc_id": "kc-prompt-semantic-cache-validity",
        "grading_method": "deterministic",
        "question_version": 2,
        "cognitive_operation": "Analyze",
        "contributing_kc_ids": [],
        "estimated_difficulty": "medium"
      },
      {
        "servable": false,
        "role": "reassessment",
        "hints": [
          {
            "text": "So sánh version của model, prompt và source trước khi xét độ tương đồng của query.",
            "hint_id": "h1",
            "after_attempt": 1
          }
        ],
        "module_id": "day12-g-delivery",
        "max_points": 4,
        "interaction": {
          "type": "short_text",
          "prompt": "Bối cảnh:\nEntry được tạo với source v3; source lên v4 và policy prompt đổi; query có ý nghĩa gần giống.\n\nCâu hỏi:\nPhân loại hit/miss và quyết định invalidation.",
          "prompt_presentation": {
            "format": "sectioned_plain_text",
            "preserve_line_breaks": true
          }
        },
        "question_id": "d12-q121",
        "primary_kc_id": "kc-prompt-semantic-cache-validity",
        "grading_method": "criterion_rubric",
        "question_version": 2,
        "cognitive_operation": "Analyze",
        "contributing_kc_ids": [],
        "estimated_difficulty": "hard"
      },
      {
        "servable": true,
        "role": "follow_up",
        "hints": [
          {
            "text": "Những thành phần nào của cache key đại diện cho correctness context?",
            "hint_id": "h1",
            "after_attempt": 1
          }
        ],
        "module_id": "day12-g-delivery",
        "max_points": 1,
        "interaction": {
          "type": "single_select",
          "prompt": "Bối cảnh:\nHai query có embedding similarity 0,96 nhưng một hỏi policy v3, một hỏi policy v4 đã thay đổi điều khoản.\n\nCâu hỏi:\nĐộ tương đồng có đủ để tái sử dụng answer không?",
          "choices": [
            {
              "text": "Invalidate hoặc kiểm chứng lại khi phiên bản policy/source đổi",
              "choice_id": "a"
            },
            {
              "text": "Tái sử dụng do embedding similarity bằng 0,96 mà không kiểm version",
              "choice_id": "b"
            },
            {
              "text": "Tái sử dụng vì hai request dùng cùng model dù policy version khác",
              "choice_id": "c"
            },
            {
              "text": "Tái sử dụng vì cached answer đủ dài",
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
        "question_id": "d12-q122",
        "primary_kc_id": "kc-prompt-semantic-cache-validity",
        "grading_method": "deterministic",
        "question_version": 2,
        "cognitive_operation": "Analyze",
        "contributing_kc_ids": [],
        "estimated_difficulty": "medium"
      },
      {
        "servable": true,
        "role": "initial_check",
        "hints": [
          {
            "text": "Nhìn vào slot vừa rảnh, không phải số token mỗi model phải decode.",
            "hint_id": "h1",
            "after_attempt": 1
          }
        ],
        "module_id": "day12-g-delivery",
        "max_points": 1,
        "interaction": {
          "type": "single_select",
          "prompt": "Bối cảnh:\nStatic batch có 4 sequence; hai sequence xong sớm nhưng các slot chờ sequence dài nhất trong khi request mới phải đợi.\n\nCâu hỏi:\nContinuous batching cải thiện điều gì?",
          "choices": [
            {
              "text": "Đưa work mới vào decode slot vừa được giải phóng",
              "choice_id": "a"
            },
            {
              "text": "Giảm số token mà model phải decode",
              "choice_id": "b"
            },
            {
              "text": "Thay thế autoscaling bằng GPU scheduler",
              "choice_id": "c"
            },
            {
              "text": "Giảm latency của request mà không cần xét queue hoặc scheduling overhead",
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
        "question_id": "d12-q123",
        "primary_kc_id": "kc-continuous-batching-utilization",
        "grading_method": "deterministic",
        "question_version": 2,
        "cognitive_operation": "Analyze",
        "contributing_kc_ids": [],
        "estimated_difficulty": "medium"
      },
      {
        "servable": false,
        "role": "reassessment",
        "hints": [
          {
            "text": "Theo dõi thời điểm slot A rảnh và thời điểm request C được nhận vào.",
            "hint_id": "h1",
            "after_attempt": 1
          }
        ],
        "module_id": "day12-g-delivery",
        "max_points": 4,
        "interaction": {
          "type": "short_text",
          "prompt": "Bối cảnh:\nRequest A, B, C có độ dài output lần lượt là 2/10/3 token; slot của A rỗng sau bước 2.\n\nCâu hỏi:\nSo sánh lịch của static batching và continuous batching.",
          "prompt_presentation": {
            "format": "sectioned_plain_text",
            "preserve_line_breaks": true
          }
        },
        "question_id": "d12-q124",
        "primary_kc_id": "kc-continuous-batching-utilization",
        "grading_method": "criterion_rubric",
        "question_version": 2,
        "cognitive_operation": "Analyze",
        "contributing_kc_ids": [],
        "estimated_difficulty": "hard"
      },
      {
        "servable": true,
        "role": "initial_check",
        "hints": [
          {
            "text": "Làm tròn từng sequence lên số block 16 token trước khi cộng.",
            "hint_id": "h1",
            "after_attempt": 1
          }
        ],
        "module_id": "day12-g-delivery",
        "max_points": 1,
        "interaction": {
          "type": "single_select",
          "prompt": "Bối cảnh:\nKích thước block là 16 token; hai sequence dài 17 và 31 token, không có prefix sharing.\n\nCâu hỏi:\nTính số token đã cấp phát, đã dùng và phần lãng phí.",
          "choices": [
            {
              "text": "Cấp phát 64; dùng 48; lãng phí ở đuôi 16 token",
              "choice_id": "a"
            },
            {
              "text": "Cấp phát 48; dùng 48; không có lãng phí ở đuôi",
              "choice_id": "b"
            },
            {
              "text": "Cấp phát 64; dùng 48; lãng phí ở đuôi 32 token",
              "choice_id": "c"
            },
            {
              "text": "Cấp phát 64; dùng 64; không có lãng phí ở đuôi",
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
        "question_id": "d12-q125",
        "primary_kc_id": "kc-paged-kv-cache-memory",
        "grading_method": "deterministic",
        "question_version": 2,
        "cognitive_operation": "Analyze",
        "contributing_kc_ids": [],
        "estimated_difficulty": "medium"
      },
      {
        "servable": false,
        "role": "reassessment",
        "hints": [
          {
            "text": "Tính số block cần cho một sequence trước, rồi nhân với năm.",
            "hint_id": "h1",
            "after_attempt": 1
          }
        ],
        "module_id": "day12-g-delivery",
        "max_points": 4,
        "interaction": {
          "type": "short_text",
          "prompt": "Bối cảnh:\nGPU có ngân sách 160 KV token slot, block 16; có năm sequence, mỗi sequence dài 17 token.\n\nCâu hỏi:\nTính ảnh hưởng lên capacity.",
          "prompt_presentation": {
            "format": "sectioned_plain_text",
            "preserve_line_breaks": true
          }
        },
        "question_id": "d12-q126",
        "primary_kc_id": "kc-paged-kv-cache-memory",
        "grading_method": "criterion_rubric",
        "question_version": 2,
        "cognitive_operation": "Apply",
        "contributing_kc_ids": [],
        "estimated_difficulty": "hard"
      },
      {
        "servable": true,
        "role": "initial_check",
        "hints": [
          {
            "text": "Chỉ token đã được target kiểm chứng hoặc target tự chọn mới được emit cuối.",
            "hint_id": "h1",
            "after_attempt": 1
          }
        ],
        "module_id": "day12-g-delivery",
        "max_points": 1,
        "interaction": {
          "type": "single_select",
          "prompt": "Bối cảnh:\nDraft đề xuất A, B, C; target chấp nhận A, B, từ chối C rồi chọn D.\n\nCâu hỏi:\nToken nào được emit thành kết quả cuối?",
          "choices": [
            {
              "text": "Emit A, B rồi D do target chọn; không emit C",
              "choice_id": "a"
            },
            {
              "text": "Emit D sau khi target từ chối C, bỏ qua A và B đã được chấp nhận",
              "choice_id": "b"
            },
            {
              "text": "Emit toàn bộ A, B, C từ draft",
              "choice_id": "c"
            },
            {
              "text": "Emit A, B, C mà không để target kiểm chứng",
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
        "question_id": "d12-q127",
        "primary_kc_id": "kc-speculative-decoding-verification",
        "grading_method": "deterministic",
        "question_version": 2,
        "cognitive_operation": "Analyze",
        "contributing_kc_ids": [],
        "estimated_difficulty": "medium"
      },
      {
        "servable": false,
        "role": "reassessment",
        "hints": [
          {
            "text": "So sánh chi phí draft và kiểm chứng với số proposal thực sự được chấp nhận.",
            "hint_id": "h1",
            "after_attempt": 1
          }
        ],
        "module_id": "day12-g-delivery",
        "max_points": 4,
        "interaction": {
          "type": "short_text",
          "prompt": "Bối cảnh:\nDraft model chậm gần bằng target và tỷ lệ proposal được chấp nhận thấp.\n\nCâu hỏi:\nSo sánh work/latency của speculative decoding với decoding thông thường trong điều kiện này.",
          "prompt_presentation": {
            "format": "sectioned_plain_text",
            "preserve_line_breaks": true
          }
        },
        "question_id": "d12-q128",
        "primary_kc_id": "kc-speculative-decoding-verification",
        "grading_method": "criterion_rubric",
        "question_version": 2,
        "cognitive_operation": "Analyze",
        "contributing_kc_ids": [],
        "estimated_difficulty": "hard"
      },
      {
        "servable": true,
        "role": "initial_check",
        "hints": [
          {
            "text": "Xác định phase đang bão hòa trước khi quyết định pool nào cần scale.",
            "hint_id": "h1",
            "after_attempt": 1
          }
        ],
        "module_id": "day12-g-delivery",
        "max_points": 1,
        "interaction": {
          "type": "single_select",
          "prompt": "Bối cảnh:\nWorkload có prompt 50k token và output 20 token; GPU prefill đã bão hòa, còn decode pool đang rảnh.\n\nCâu hỏi:\nQuyết định scale nào phù hợp?",
          "choices": [
            {
              "text": "Scale hoặc route thêm prefill nếu chi phí KV transfer vẫn có lợi",
              "choice_id": "a"
            },
            {
              "text": "Tách prefill/decode cho workload này mà không đo chi phí KV transfer",
              "choice_id": "b"
            },
            {
              "text": "Scale decode pool dù bottleneck prefill và pool này đang rảnh",
              "choice_id": "c"
            },
            {
              "text": "Chuyển request sang async job queue thay vì xử lý bottleneck prefill",
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
        "question_id": "d12-q129",
        "primary_kc_id": "kc-disaggregated-prefill-decode",
        "grading_method": "deterministic",
        "question_version": 2,
        "cognitive_operation": "Analyze",
        "contributing_kc_ids": [],
        "estimated_difficulty": "medium"
      },
      {
        "servable": false,
        "role": "reassessment",
        "hints": [
          {
            "text": "Đặt độ dài output cạnh bottleneck decode và chi phí KV transfer trước khi chọn placement.",
            "hint_id": "h1",
            "after_attempt": 1
          }
        ],
        "module_id": "day12-g-delivery",
        "max_points": 4,
        "interaction": {
          "type": "short_text",
          "prompt": "Bối cảnh:\nMột workload khác có prompt 20 token và output 5k token; KV transfer latency là 200ms và network không ổn định.\n\nCâu hỏi:\nĐánh giá placement và bottleneck, rồi quyết định có nên disaggregate không.",
          "prompt_presentation": {
            "format": "sectioned_plain_text",
            "preserve_line_breaks": true
          }
        },
        "question_id": "d12-q130",
        "primary_kc_id": "kc-disaggregated-prefill-decode",
        "grading_method": "criterion_rubric",
        "question_version": 2,
        "cognitive_operation": "Analyze",
        "contributing_kc_ids": [],
        "estimated_difficulty": "hard"
      },
      {
        "servable": true,
        "role": "initial_check",
        "hints": [
          {
            "text": "Hỏi request đã qua commit boundary chưa.",
            "hint_id": "h1",
            "after_attempt": 1
          }
        ],
        "module_id": "day12-g-durable",
        "max_points": 3,
        "interaction": {
          "left": [
            {
              "id": "x1",
              "text": "Timeout trước khi có bằng chứng kết nối"
            },
            {
              "id": "x2",
              "text": "Provider trả receipt thành công"
            },
            {
              "id": "x3",
              "text": "Timeout sau khi request đã gửi nhưng không có receipt"
            }
          ],
          "type": "matching",
          "right": [
            {
              "id": "r1",
              "text": "Chắc chắn chưa có side effect, theo bằng chứng truyền tải"
            },
            {
              "id": "r2",
              "text": "Chắc chắn thành công"
            },
            {
              "id": "r3",
              "text": "Chưa rõ đã hoàn tất; cần query/idempotency trước khi retry"
            }
          ],
          "prompt": "Bối cảnh:\nMột thao tác gửi email có ba quan sát khác nhau.\n\nCâu hỏi:\nGhép mỗi quan sát với lớp hoàn tất tương ứng.",
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
        "question_id": "d12-q131",
        "primary_kc_id": "kc-agent-sideeffect-retry-ambiguity",
        "grading_method": "deterministic",
        "question_version": 2,
        "cognitive_operation": "Analyze",
        "contributing_kc_ids": [],
        "estimated_difficulty": "hard"
      },
      {
        "servable": false,
        "role": "reassessment",
        "hints": [
          {
            "text": "Phân biệt timeout trước connect với timeout sau khi request đã được gửi.",
            "hint_id": "h1",
            "after_attempt": 1
          }
        ],
        "module_id": "day12-g-durable",
        "max_points": 4,
        "interaction": {
          "type": "short_text",
          "prompt": "Bối cảnh:\nTimeline A timeout trước khi connect; B provider trả receipt; C timeout sau thời điểm commit không rõ.\n\nCâu hỏi:\nPhân loại completion và đánh giá retry safety.",
          "prompt_presentation": {
            "format": "sectioned_plain_text",
            "preserve_line_breaks": true
          }
        },
        "question_id": "d12-q132",
        "primary_kc_id": "kc-agent-sideeffect-retry-ambiguity",
        "grading_method": "criterion_rubric",
        "question_version": 2,
        "cognitive_operation": "Analyze",
        "contributing_kc_ids": [],
        "estimated_difficulty": "hard"
      },
      {
        "servable": true,
        "role": "follow_up",
        "hints": [
          {
            "text": "Tìm bằng chứng trong system of record trước khi tạo effect mới.",
            "hint_id": "h1",
            "after_attempt": 1
          }
        ],
        "module_id": "day12-g-durable",
        "max_points": 1,
        "interaction": {
          "type": "single_select",
          "prompt": "Bối cảnh:\nEmail provider đã commit thao tác gửi nhưng response bị mất; agent không có stable idempotency key.\n\nCâu hỏi:\nHành động an toàn nhất trước khi retry là gì?",
          "choices": [
            {
              "text": "Đối soát theo stable business intent",
              "choice_id": "a"
            },
            {
              "text": "Retry ngay bằng random key mới",
              "choice_id": "b"
            },
            {
              "text": "Coi timeout là definite no-effect",
              "choice_id": "c"
            },
            {
              "text": "Gửi lại email bằng key mới để tăng xác suất thành công",
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
        "question_id": "d12-q133",
        "primary_kc_id": "kc-agent-sideeffect-retry-ambiguity",
        "grading_method": "deterministic",
        "question_version": 2,
        "cognitive_operation": "Analyze",
        "contributing_kc_ids": [],
        "estimated_difficulty": "hard"
      },
      {
        "servable": true,
        "role": "initial_check",
        "hints": [
          {
            "text": "Theo dõi idempotency key qua từng attempt, không chỉ so payload.",
            "hint_id": "h1",
            "after_attempt": 1
          }
        ],
        "module_id": "day12-g-durable",
        "max_points": 1,
        "interaction": {
          "type": "single_select",
          "prompt": "Bối cảnh:\nCác lần retry cùng một transfer đều dùng random key mới.\n\nCâu hỏi:\nHậu quả nào có thể xảy ra?",
          "choices": [
            {
              "text": "Mỗi random key có thể tạo một intent mới",
              "choice_id": "a"
            },
            {
              "text": "Random key làm dedup chính xác hơn",
              "choice_id": "b"
            },
            {
              "text": "Payload giống nhau được xem là đủ để loại duplicate",
              "choice_id": "c"
            },
            {
              "text": "Timeout chứng minh effect chưa commit",
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
        "question_id": "d12-q134",
        "primary_kc_id": "kc-stable-intent-idempotency",
        "grading_method": "deterministic",
        "question_version": 2,
        "cognitive_operation": "Analyze",
        "contributing_kc_ids": [],
        "estimated_difficulty": "medium"
      },
      {
        "servable": false,
        "role": "reassessment",
        "hints": [
          {
            "text": "Tách attempt đầu tạo record khỏi các attempt chỉ replay record đó.",
            "hint_id": "h1",
            "after_attempt": 1
          }
        ],
        "module_id": "day12-g-durable",
        "max_points": 4,
        "interaction": {
          "type": "short_text",
          "prompt": "Bối cảnh:\nBa attempt cùng intent và key K; attempt đầu tạo effect/result một cách atomic nhưng mất response, rồi các attempt tiếp theo đến.\n\nCâu hỏi:\nTheo dõi lần thực thi và replay.",
          "prompt_presentation": {
            "format": "sectioned_plain_text",
            "preserve_line_breaks": true
          }
        },
        "question_id": "d12-q135",
        "primary_kc_id": "kc-stable-intent-idempotency",
        "grading_method": "criterion_rubric",
        "question_version": 2,
        "cognitive_operation": "Analyze",
        "contributing_kc_ids": [],
        "estimated_difficulty": "hard"
      },
      {
        "servable": true,
        "role": "initial_check",
        "hints": [
          {
            "text": "So sánh business intent và authority, không chỉ so chuỗi byte.",
            "hint_id": "h1",
            "after_attempt": 1
          }
        ],
        "module_id": "day12-g-durable",
        "max_points": 1,
        "interaction": {
          "type": "single_select",
          "prompt": "Bối cảnh:\n“Hoàn tiền toàn bộ cho đơn O7” và “Hoàn toàn bộ đơn O7” khác chuỗi byte nhưng là cùng một business action đã được ủy quyền.\n\nCâu hỏi:\nQuyết định identity thế nào?",
          "choices": [
            {
              "text": "Tái sử dụng identity khi authority xác nhận cùng intent",
              "choice_id": "a"
            },
            {
              "text": "Tách identity vì hai câu khác cách diễn đạt",
              "choice_id": "b"
            },
            {
              "text": "Gộp các yêu cầu hoàn tiền của order mà không xét amount hoặc authority",
              "choice_id": "c"
            },
            {
              "text": "Dùng random key khi intent chưa rõ",
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
        "question_id": "d12-q136",
        "primary_kc_id": "kc-agent-semantic-intent-deduplication",
        "grading_method": "deterministic",
        "question_version": 2,
        "cognitive_operation": "Analyze",
        "contributing_kc_ids": [],
        "estimated_difficulty": "medium"
      },
      {
        "servable": false,
        "role": "reassessment",
        "hints": [
          {
            "text": "Xác minh authority và business identifier trước khi gộp hai request.",
            "hint_id": "h1",
            "after_attempt": 1
          }
        ],
        "module_id": "day12-g-durable",
        "max_points": 4,
        "interaction": {
          "type": "short_text",
          "prompt": "Bối cảnh:\nBốn request cùng order O7: R1 “hoàn tiền toàn bộ”; R2 “hoàn toàn bộ đơn” với cùng authority; R3 “hoàn tiền 20%”; R4 chỉ ghi “hoàn tiền như cũ” nhưng không có intent trước đó đã được xác nhận.\n\nCâu hỏi:\nPhân loại R1–R4 thành cùng intent, intent khác hoặc chưa xác định; sau đó chọn cách dùng identity.",
          "prompt_presentation": {
            "format": "sectioned_plain_text",
            "preserve_line_breaks": true
          }
        },
        "question_id": "d12-q137",
        "primary_kc_id": "kc-agent-semantic-intent-deduplication",
        "grading_method": "criterion_rubric",
        "question_version": 2,
        "cognitive_operation": "Analyze",
        "contributing_kc_ids": [],
        "estimated_difficulty": "hard"
      },
      {
        "servable": true,
        "role": "initial_check",
        "hints": [
          {
            "text": "Đọc trạng thái journal trước, rồi xử lý riêng external write chưa có record.",
            "hint_id": "h1",
            "after_attempt": 1
          }
        ],
        "module_id": "day12-g-durable",
        "max_points": 1,
        "interaction": {
          "type": "single_select",
          "prompt": "Bối cảnh:\nJournal ghi model step M complete và tool read T complete; process crash giữa external write W nhưng W chưa được ghi nhận.\n\nCâu hỏi:\nKhi resume, xử lý thế nào?",
          "choices": [
            {
              "text": "Replay M/T; đối soát W",
              "choice_id": "a"
            },
            {
              "text": "Chạy lại toàn bộ M, T và W từ đầu",
              "choice_id": "b"
            },
            {
              "text": "Bỏ qua W vì unfinished đồng nghĩa với failed",
              "choice_id": "c"
            },
            {
              "text": "Tuyên bố exactly-once cho external effect dù chưa có idempotency",
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
        "question_id": "d12-q138",
        "primary_kc_id": "kc-durable-agent-replay",
        "grading_method": "deterministic",
        "question_version": 2,
        "cognitive_operation": "Analyze",
        "contributing_kc_ids": [],
        "estimated_difficulty": "medium"
      },
      {
        "servable": false,
        "role": "reassessment",
        "hints": [
          {
            "text": "Phân biệt record đã commit với call đã gửi nhưng chưa được journal ghi nhận.",
            "hint_id": "h1",
            "after_attempt": 1
          }
        ],
        "module_id": "day12-g-durable",
        "max_points": 4,
        "interaction": {
          "type": "short_text",
          "prompt": "Bối cảnh:\nProcess crash xảy ra trước khi tool T commit vào journal, nhưng provider có thể đã trả kết quả.\n\nCâu hỏi:\nTheo dõi phần việc đã ghi/chưa ghi và external effect.",
          "prompt_presentation": {
            "format": "sectioned_plain_text",
            "preserve_line_breaks": true
          }
        },
        "question_id": "d12-q139",
        "primary_kc_id": "kc-durable-agent-replay",
        "grading_method": "criterion_rubric",
        "question_version": 2,
        "cognitive_operation": "Analyze",
        "contributing_kc_ids": [],
        "estimated_difficulty": "hard"
      },
      {
        "servable": true,
        "role": "initial_check",
        "hints": [
          {
            "text": "Hỏi checkpoint đã commit ở mức node hay output đã được journal ở mức call.",
            "hint_id": "h1",
            "after_attempt": 1
          }
        ],
        "module_id": "day12-g-durable",
        "max_points": 1,
        "interaction": {
          "type": "single_select",
          "prompt": "Bối cảnh:\nNode N gọi model rồi tool; model call đã hoàn tất nhưng node checkpoint chưa commit thì process crash.\n\nCâu hỏi:\nReplay ở mức node xử lý thế nào?",
          "choices": [
            {
              "text": "Chạy lại node chưa hoàn tất",
              "choice_id": "a"
            },
            {
              "text": "Node checkpoint tự bỏ qua model call đã hoàn tất",
              "choice_id": "b"
            },
            {
              "text": "Node checkpoint và call journal có cùng granularity nên không có duplicate-work risk",
              "choice_id": "c"
            },
            {
              "text": "Chạy lại cả các node đã hoàn tất trước N",
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
        "question_id": "d12-q140",
        "primary_kc_id": "kc-checkpoint-replay-boundary",
        "grading_method": "deterministic",
        "question_version": 2,
        "cognitive_operation": "Analyze",
        "contributing_kc_ids": [],
        "estimated_difficulty": "medium"
      },
      {
        "servable": false,
        "role": "reassessment",
        "hints": [
          {
            "text": "Đếm granularity của record: node hay từng call bên trong node.",
            "hint_id": "h1",
            "after_attempt": 1
          }
        ],
        "module_id": "day12-g-durable",
        "max_points": 4,
        "interaction": {
          "type": "short_text",
          "prompt": "Bối cảnh:\nWorkflow có node A đã checkpoint; node B có hai call bên trong và crash sau call đầu.\n\nCâu hỏi:\nSo sánh node checkpoint với call-level journal.",
          "prompt_presentation": {
            "format": "sectioned_plain_text",
            "preserve_line_breaks": true
          }
        },
        "question_id": "d12-q141",
        "primary_kc_id": "kc-checkpoint-replay-boundary",
        "grading_method": "criterion_rubric",
        "question_version": 2,
        "cognitive_operation": "Analyze",
        "contributing_kc_ids": [],
        "estimated_difficulty": "hard"
      },
      {
        "servable": true,
        "role": "initial_check",
        "hints": [
          {
            "text": "Xác định bước nào có thao tác ngược thật sự.",
            "hint_id": "h1",
            "after_attempt": 1
          }
        ],
        "module_id": "day12-g-durable",
        "max_points": 3,
        "interaction": {
          "left": [
            {
              "id": "x1",
              "text": "Đặt chuyến bay"
            },
            {
              "id": "x2",
              "text": "Đặt khách sạn"
            },
            {
              "id": "x3",
              "text": "Mua vé sự kiện không hoàn tiền"
            }
          ],
          "type": "matching",
          "right": [
            {
              "id": "r1",
              "text": "Hủy chuyến bay"
            },
            {
              "id": "r2",
              "text": "Hủy khách sạn"
            },
            {
              "id": "r3",
              "text": "Pivot không thể hoàn tác; xếp cuối và có cổng duyệt trước commit"
            }
          ],
          "prompt": "Bối cảnh:\nTrip workflow đặt chuyến bay, đặt khách sạn và mua vé sự kiện không hoàn tiền.\n\nCâu hỏi:\nGhép bước thực hiện với thao tác bù trừ hoặc ranh giới tương ứng.",
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
        "question_id": "d12-q142",
        "primary_kc_id": "kc-saga-compensation-design",
        "grading_method": "deterministic",
        "question_version": 2,
        "cognitive_operation": "Analyze",
        "contributing_kc_ids": [],
        "estimated_difficulty": "medium"
      },
      {
        "servable": false,
        "role": "reassessment",
        "hints": [
          {
            "text": "Tìm inverse của từng bước và đặt bước không thể hoàn tác ở cuối.",
            "hint_id": "h1",
            "after_attempt": 1
          }
        ],
        "module_id": "day12-g-durable",
        "max_points": 4,
        "interaction": {
          "type": "short_text",
          "prompt": "Bối cảnh:\nTrip workflow đặt chuyến bay → đặt khách sạn → mua vé sự kiện không hoàn tiền; khách sạn lỗi trước khi mua vé.\n\nCâu hỏi:\nLập saga và xác định irreversible pivot.",
          "prompt_presentation": {
            "format": "sectioned_plain_text",
            "preserve_line_breaks": true
          }
        },
        "question_id": "d12-q143",
        "primary_kc_id": "kc-saga-compensation-design",
        "grading_method": "criterion_rubric",
        "question_version": 2,
        "cognitive_operation": "Create",
        "contributing_kc_ids": [],
        "estimated_difficulty": "hard"
      },
      {
        "servable": true,
        "role": "initial_check",
        "hints": [
          {
            "text": "Tìm pivot không thể hoàn tác rồi đặt cổng duyệt sát ngay trước nó.",
            "hint_id": "h1",
            "after_attempt": 1
          }
        ],
        "module_id": "day12-g-durable",
        "max_points": 1,
        "interaction": {
          "type": "single_select",
          "prompt": "Bối cảnh:\nPlan thu thập dữ liệu → soạn email → gửi email → lưu trữ bản nháp; gửi email là irreversible pivot.\n\nCâu hỏi:\nĐặt approval ở đâu?",
          "choices": [
            {
              "text": "Đặt approval ngay trước lệnh gửi chính xác",
              "choice_id": "a"
            },
            {
              "text": "Đặt sau khi gửi để reviewer xem kết quả",
              "choice_id": "b"
            },
            {
              "text": "Đặt ở đầu session để áp dụng cho các lệnh gửi về sau",
              "choice_id": "c"
            },
            {
              "text": "Bỏ approval nếu bản nháp đúng cú pháp",
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
        "question_id": "d12-q144",
        "primary_kc_id": "kc-irreversible-pivot-approval-placement",
        "grading_method": "deterministic",
        "question_version": 2,
        "cognitive_operation": "Analyze",
        "contributing_kc_ids": [],
        "estimated_difficulty": "medium"
      },
      {
        "servable": false,
        "role": "reassessment",
        "hints": [
          {
            "text": "Phân biệt bước chuẩn bị có thể bù trừ với lệnh public publish không thể thu hồi.",
            "hint_id": "h1",
            "after_attempt": 1
          }
        ],
        "module_id": "day12-g-durable",
        "max_points": 4,
        "interaction": {
          "type": "short_text",
          "prompt": "Bối cảnh:\nPlan tạo report, reserve resource, publish public và cleanup.\n\nCâu hỏi:\nSắp xếp lại thứ tự và đặt cổng duyệt cho pivot.",
          "prompt_presentation": {
            "format": "sectioned_plain_text",
            "preserve_line_breaks": true
          }
        },
        "question_id": "d12-q145",
        "primary_kc_id": "kc-irreversible-pivot-approval-placement",
        "grading_method": "criterion_rubric",
        "question_version": 2,
        "cognitive_operation": "Create",
        "contributing_kc_ids": [],
        "estimated_difficulty": "hard"
      },
      {
        "servable": true,
        "role": "initial_check",
        "hints": [
          {
            "text": "Kiểm tra tuổi của quote và reservation tại thời điểm resume, không chỉ đọc journal.",
            "hint_id": "h1",
            "after_attempt": 1
          }
        ],
        "module_id": "day12-g-durable",
        "max_points": 1,
        "interaction": {
          "type": "single_select",
          "prompt": "Bối cảnh:\nWorkflow pause 24 giờ để chờ approval; quote và reservation chỉ valid trong 30 phút.\n\nCâu hỏi:\nKhi resume, cách xử lý nào đúng?",
          "choices": [
            {
              "text": "Revalidate rồi reapprove/replan nếu trạng thái đã đổi",
              "choice_id": "a"
            },
            {
              "text": "Resume bằng quote đã ghi trước thời gian chờ",
              "choice_id": "b"
            },
            {
              "text": "Chạy lại các tool step mà không recheck",
              "choice_id": "c"
            },
            {
              "text": "Không tốn compute trong lúc chờ nghĩa là không có cost",
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
        "question_id": "d12-q146",
        "primary_kc_id": "kc-durable-wait-validity-recheck",
        "grading_method": "deterministic",
        "question_version": 2,
        "cognitive_operation": "Analyze",
        "contributing_kc_ids": [],
        "estimated_difficulty": "medium"
      },
      {
        "servable": false,
        "role": "reassessment",
        "hints": [
          {
            "text": "Tách dữ liệu đã lưu trong journal khỏi các điều kiện có thể đã hết hạn bên ngoài.",
            "hint_id": "h1",
            "after_attempt": 1
          }
        ],
        "module_id": "day12-g-durable",
        "max_points": 4,
        "interaction": {
          "type": "short_text",
          "prompt": "Bối cảnh:\nToken hết hạn, inventory đã đổi và approver đã duyệt amount cũ.\n\nCâu hỏi:\nChọn path resume, reapprove, re-plan hoặc cancel.",
          "prompt_presentation": {
            "format": "sectioned_plain_text",
            "preserve_line_breaks": true
          }
        },
        "question_id": "d12-q147",
        "primary_kc_id": "kc-durable-wait-validity-recheck",
        "grading_method": "criterion_rubric",
        "question_version": 2,
        "cognitive_operation": "Analyze",
        "contributing_kc_ids": [],
        "estimated_difficulty": "hard"
      },
      {
        "servable": true,
        "role": "initial_check",
        "hints": [
          {
            "text": "Vẽ đủ ba edge: dữ liệu riêng tư, nội dung không tin cậy và kênh outbound.",
            "hint_id": "h1",
            "after_attempt": 1
          }
        ],
        "module_id": "day12-g-durable",
        "max_points": 1,
        "interaction": {
          "type": "single_select",
          "prompt": "Bối cảnh:\nAgent đọc email không tin cậy, private DB và có outbound webhook.\n\nCâu hỏi:\nBiện pháp kiểm soát nào phá được exfiltration path đang tồn tại?",
          "choices": [
            {
              "text": "Loại bỏ hoặc đặt lớp trung gian kiểm soát một exfiltration edge",
              "choice_id": "a"
            },
            {
              "text": "Allowlist destination của webhook nhưng vẫn cho gửi private payload",
              "choice_id": "b"
            },
            {
              "text": "Tin rằng email không tin cậy không thể điều khiển agent",
              "choice_id": "c"
            },
            {
              "text": "Coi một path bị phá là đủ để kết luận toàn hệ an toàn",
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
        "question_id": "d12-q148",
        "primary_kc_id": "kc-egress-exfiltration-condition-model",
        "grading_method": "deterministic",
        "question_version": 2,
        "cognitive_operation": "Analyze",
        "contributing_kc_ids": [],
        "estimated_difficulty": "medium"
      },
      {
        "servable": false,
        "role": "reassessment",
        "hints": [
          {
            "text": "Chọn edge có thể bỏ mà không làm mất tra cứu riêng tư và email cần thiết.",
            "hint_id": "h1",
            "after_attempt": 1
          }
        ],
        "module_id": "day12-g-durable",
        "max_points": 4,
        "interaction": {
          "type": "short_text",
          "prompt": "Bối cảnh:\nArchitecture vẫn cần private DB và email, nhưng job này không cần outbound.\n\nCâu hỏi:\nChọn biện pháp kiểm soát phá path với mức mất chức năng nhỏ.",
          "prompt_presentation": {
            "format": "sectioned_plain_text",
            "preserve_line_breaks": true
          }
        },
        "question_id": "d12-q149",
        "primary_kc_id": "kc-egress-exfiltration-condition-model",
        "grading_method": "criterion_rubric",
        "question_version": 2,
        "cognitive_operation": "Analyze",
        "contributing_kc_ids": [],
        "estimated_difficulty": "hard"
      },
      {
        "servable": true,
        "role": "initial_check",
        "hints": [
          {
            "text": "Phân biệt trust của host với việc payload và action có được phép hay không.",
            "hint_id": "h1",
            "after_attempt": 1
          }
        ],
        "module_id": "day12-g-durable",
        "max_points": 1,
        "interaction": {
          "type": "single_select",
          "prompt": "Bối cảnh:\nAllowlist cho `api.partner.com`; attacker khiến agent gửi private data qua partner API hợp lệ.\n\nCâu hỏi:\nVì sao request vẫn lọt qua allowlist?",
          "choices": [
            {
              "text": "Trusted host vẫn có thể mang payload xấu",
              "choice_id": "a"
            },
            {
              "text": "Host đã nằm trong allowlist nên không cần kiểm tra payload",
              "choice_id": "b"
            },
            {
              "text": "HTTPS tự ngăn private payload rời hệ thống",
              "choice_id": "c"
            },
            {
              "text": "CORS chặn outbound server-side call",
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
        "question_id": "d12-q150",
        "primary_kc_id": "kc-trusted-channel-egress-limitation",
        "grading_method": "deterministic",
        "question_version": 2,
        "cognitive_operation": "Analyze",
        "contributing_kc_ids": [],
        "estimated_difficulty": "medium"
      },
      {
        "servable": false,
        "role": "reassessment",
        "hints": [
          {
            "text": "Bổ sung cơ chế ở payload, rendered output và tool boundary; đừng bỏ qua content.",
            "hint_id": "h1",
            "after_attempt": 1
          }
        ],
        "module_id": "day12-g-durable",
        "max_points": 4,
        "interaction": {
          "type": "short_text",
          "prompt": "Bối cảnh:\nProvider proxy là allowed channel để user nhận rendered content có thể chứa secret.\n\nCâu hỏi:\nBổ sung cơ chế kiểm soát mà không bỏ channel.",
          "prompt_presentation": {
            "format": "sectioned_plain_text",
            "preserve_line_breaks": true
          }
        },
        "question_id": "d12-q151",
        "primary_kc_id": "kc-trusted-channel-egress-limitation",
        "grading_method": "criterion_rubric",
        "question_version": 2,
        "cognitive_operation": "Analyze",
        "contributing_kc_ids": [],
        "estimated_difficulty": "hard"
      },
      {
        "servable": true,
        "role": "follow_up",
        "hints": [
          {
            "text": "Host đúng có đồng nghĩa nội dung được phép không?",
            "hint_id": "h1",
            "after_attempt": 1
          }
        ],
        "module_id": "day12-g-durable",
        "max_points": 1,
        "interaction": {
          "type": "single_select",
          "prompt": "Bối cảnh:\nOutbound chỉ cho `api.partner.com`, nhưng tool cho phép agent điền tự do field `message`; input không tin cậy yêu cầu chèn private record vào field đó.\n\nCâu hỏi:\nAllowlist đã chặn exfiltration chưa?",
          "choices": [
            {
              "text": "Vẫn cần payload authorization",
              "choice_id": "a"
            },
            {
              "text": "Rồi; hostname đã nằm trong allowlist",
              "choice_id": "b"
            },
            {
              "text": "Rồi; HTTPS bảo vệ nội dung",
              "choice_id": "c"
            },
            {
              "text": "Rồi; CORS áp dụng cho server tool",
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
        "question_id": "d12-q152",
        "primary_kc_id": "kc-trusted-channel-egress-limitation",
        "grading_method": "deterministic",
        "question_version": 2,
        "cognitive_operation": "Analyze",
        "contributing_kc_ids": [],
        "estimated_difficulty": "medium"
      },
      {
        "servable": true,
        "role": "initial_check",
        "hints": [
          {
            "text": "Cân bằng containment strength với startup budget và residual boundary.",
            "hint_id": "h1",
            "after_attempt": 1
          }
        ],
        "module_id": "day12-g-durable",
        "max_points": 1,
        "interaction": {
          "type": "single_select",
          "prompt": "Bối cảnh:\nTool chạy untrusted code cần cô lập filesystem/network mạnh; startup budget là 300ms.\n\nCâu hỏi:\nLựa chọn isolation cần đánh đổi điều gì?",
          "choices": [
            {
              "text": "Đánh đổi mức isolation lấy startup cost",
              "choice_id": "a"
            },
            {
              "text": "Dùng language isolate vì startup nhanh, bất kể tool cần filesystem/network",
              "choice_id": "b"
            },
            {
              "text": "Dùng sandbox đơn giản và bỏ qua filesystem/network isolation để giữ startup budget 300ms",
              "choice_id": "c"
            },
            {
              "text": "Chọn isolation theo vendor brand thay vì risk và budget",
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
        "question_id": "d12-q153",
        "primary_kc_id": "kc-sandbox-isolation-strength-tradeoff",
        "grading_method": "deterministic",
        "question_version": 2,
        "cognitive_operation": "Analyze",
        "contributing_kc_ids": [],
        "estimated_difficulty": "medium"
      },
      {
        "servable": false,
        "role": "reassessment",
        "hints": [
          {
            "text": "Bắt đầu từ risk thấp, grammar hẹp và deny file/network rồi mới cân nhắc startup.",
            "hint_id": "h1",
            "after_attempt": 1
          }
        ],
        "module_id": "day12-g-durable",
        "max_points": 4,
        "interaction": {
          "type": "short_text",
          "prompt": "Bối cảnh:\nExpression evaluator rủi ro thấp cần dưới 10ms, không được truy cập file/network và có grammar ngôn ngữ hẹp.\n\nCâu hỏi:\nChọn isolation và nêu residual boundary.",
          "prompt_presentation": {
            "format": "sectioned_plain_text",
            "preserve_line_breaks": true
          }
        },
        "question_id": "d12-q154",
        "primary_kc_id": "kc-sandbox-isolation-strength-tradeoff",
        "grading_method": "criterion_rubric",
        "question_version": 2,
        "cognitive_operation": "Analyze",
        "contributing_kc_ids": [],
        "estimated_difficulty": "hard"
      },
      {
        "servable": true,
        "role": "initial_check",
        "hints": [
          {
            "text": "Hỏi fallback có mở rộng quyền hơn policy hợp lệ hay không.",
            "hint_id": "h1",
            "after_attempt": 1
          }
        ],
        "module_id": "day12-g-durable",
        "max_points": 1,
        "interaction": {
          "type": "single_select",
          "prompt": "Bối cảnh:\nCode đọc allowlist bị thiếu rồi dùng `allowlist or ['*']`.\n\nCâu hỏi:\nCode hiện đang fail-open; sửa semantics nào đúng cho restrictive policy?",
          "choices": [
            {
              "text": "Deny all hoặc abort khi policy không hợp lệ",
              "choice_id": "a"
            },
            {
              "text": "Log warning rồi giữ wildcard để ưu tiên availability",
              "choice_id": "b"
            },
            {
              "text": "Giữ `allowlist or [\"*\"]` vì empty list tự có nghĩa không mở quyền",
              "choice_id": "c"
            },
            {
              "text": "Coi wildcard fallback là least privilege",
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
        "question_id": "d12-q155",
        "primary_kc_id": "kc-failclosed-sandbox-policy",
        "grading_method": "deterministic",
        "question_version": 2,
        "cognitive_operation": "Analyze",
        "contributing_kc_ids": [],
        "estimated_difficulty": "medium"
      },
      {
        "servable": false,
        "role": "reassessment",
        "hints": [
          {
            "text": "Tách ba trạng thái lỗi/empty khỏi nhánh populated được phép truy cập.",
            "hint_id": "h1",
            "after_attempt": 1
          }
        ],
        "module_id": "day12-g-durable",
        "max_points": 4,
        "interaction": {
          "type": "short_text",
          "prompt": "Bối cảnh:\nTest có config empty, missing, invalid JSON và config populated cho `/tmp`.\n\nCâu hỏi:\nSửa decision table cho restrictive policy.",
          "prompt_presentation": {
            "format": "sectioned_plain_text",
            "preserve_line_breaks": true
          }
        },
        "question_id": "d12-q156",
        "primary_kc_id": "kc-failclosed-sandbox-policy",
        "grading_method": "criterion_rubric",
        "question_version": 2,
        "cognitive_operation": "Analyze",
        "contributing_kc_ids": [],
        "estimated_difficulty": "hard"
      },
      {
        "servable": true,
        "role": "follow_up",
        "hints": [
          {
            "text": "Fallback có làm quyền rộng hơn config hợp lệ không?",
            "hint_id": "h1",
            "after_attempt": 1
          }
        ],
        "module_id": "day12-g-durable",
        "max_points": 1,
        "interaction": {
          "type": "single_select",
          "prompt": "Bối cảnh:\nSandbox không đọc được allowlist vì JSON invalid. Code hiện tại fallback sang `['*']`.\n\nCâu hỏi:\nHành vi nào đúng cho restrictive policy?",
          "choices": [
            {
              "text": "Deny/abort và ghi audit",
              "choice_id": "a"
            },
            {
              "text": "Ghi cảnh báo rồi dùng wildcard tạm thời để giữ tính sẵn sàng",
              "choice_id": "b"
            },
            {
              "text": "Bỏ qua lỗi parse và tiếp tục chạy với policy cũ",
              "choice_id": "c"
            },
            {
              "text": "Dùng HOME làm phương án dự phòng khi chưa có policy hợp lệ",
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
        "question_id": "d12-q157",
        "primary_kc_id": "kc-failclosed-sandbox-policy",
        "grading_method": "deterministic",
        "question_version": 2,
        "cognitive_operation": "Analyze",
        "contributing_kc_ids": [],
        "estimated_difficulty": "easy"
      },
      {
        "servable": true,
        "role": "initial_check",
        "hints": [
          {
            "text": "Kiểm tra scope, lifetime và việc identity có bị dùng chung giữa các task không.",
            "hint_id": "h1",
            "after_attempt": 1
          }
        ],
        "module_id": "day12-g-durable",
        "max_points": 1,
        "interaction": {
          "type": "single_select",
          "prompt": "Bối cảnh:\nMọi agent task dùng chung một admin service-account token có hạn 1 năm cho storage và billing.\n\nCâu hỏi:\nLỗi chính là gì?",
          "choices": [
            {
              "text": "Dùng chung identity toàn quyền với thời hạn dài",
              "choice_id": "a"
            },
            {
              "text": "Coi token thời hạn dài là rẻ hơn",
              "choice_id": "b"
            },
            {
              "text": "Không cần kiểm tra audience của token",
              "choice_id": "c"
            },
            {
              "text": "Một tài khoản quản trị là mô hình ít quyền nhất",
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
        "question_id": "d12-q158",
        "primary_kc_id": "kc-per-agent-shortlived-identity",
        "grading_method": "deterministic",
        "question_version": 2,
        "cognitive_operation": "Analyze",
        "contributing_kc_ids": [],
        "estimated_difficulty": "medium"
      },
      {
        "servable": false,
        "role": "reassessment",
        "hints": [
          {
            "text": "Thu hẹp subject, scope, audience và lifetime đúng theo task T.",
            "hint_id": "h1",
            "after_attempt": 1
          }
        ],
        "module_id": "day12-g-durable",
        "max_points": 3,
        "interaction": {
          "type": "short_text",
          "prompt": "Bối cảnh:\nTask T chỉ đọc bucket B trong 5 phút; token lại có audience billing và quyền write-all.\n\nCâu hỏi:\nThiết kế identity và rejection test.",
          "prompt_presentation": {
            "format": "sectioned_plain_text",
            "preserve_line_breaks": true
          }
        },
        "question_id": "d12-q159",
        "primary_kc_id": "kc-per-agent-shortlived-identity",
        "grading_method": "criterion_rubric",
        "question_version": 2,
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

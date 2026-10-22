{
  "course_id": "K4P1",
  "day_code": "day_36f7a513c0d47fed",
  "public_code": "D14",
  "version_id": "0f310c95-0648-41b6-a7d9-2fe7e27ce1ab",
  "version_no": 9,
  "synthesized": false,
  "lesson": {
    "index": 10,
    "title": "Day10-data-pipeline-observability",
    "subtitle": null,
    "slides_url": "/api/v1/content/days/day_36f7a513c0d47fed/slides.pdf",
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
            "to": 1
          },
          {
            "section_id": "section-1",
            "title": "Videos",
            "kind": "theory",
            "from": 1,
            "to": 4
          }
        ]
      },
      {
        "module_id": "codelab-ae784cd1b4bf4f078925885f2f1e5b1d",
        "title": "K4-L3B-Day10: Lab Technical Guide",
        "kind": "lab",
        "from": 4,
        "to": 15,
        "sections": [
          {
            "section_id": "codelab-ae784cd1b4bf4f078925885f2f1e5b1d-s01",
            "title": "Bước 0: Khởi Tạo Repo Nhóm & Không Gian Làm Việc (Git & Teamwork)",
            "kind": "practice",
            "from": 4,
            "to": 5
          },
          {
            "section_id": "codelab-ae784cd1b4bf4f078925885f2f1e5b1d-s02",
            "title": "Bước 1: Khởi Tạo Môi Trường & Cấu Hình",
            "kind": "practice",
            "from": 5,
            "to": 6
          },
          {
            "section_id": "codelab-ae784cd1b4bf4f078925885f2f1e5b1d-s03",
            "title": "Bước 2: Thu Thập Dữ Liệu & Cất Giữ Bản Gốc (`src/ingestion/crossref.py`)",
            "kind": "practice",
            "from": 6,
            "to": 7
          },
          {
            "section_id": "codelab-ae784cd1b4bf4f078925885f2f1e5b1d-s04",
            "title": "Bước 3: Làm Sạch Dữ Liệu & Chuẩn Bị Văn Bản Tạo Vector (`src/ingestion/cleaning.py`)",
            "kind": "practice",
            "from": 7,
            "to": 8
          },
          {
            "section_id": "codelab-ae784cd1b4bf4f078925885f2f1e5b1d-s05",
            "title": "Bước 4: Thiết Lập Chốt Kiểm Soát Dữ Liệu (Observability Gate) với Great Expectations 1.x (`src/observability/quality.py`)",
            "kind": "practice",
            "from": 8,
            "to": 9
          },
          {
            "section_id": "codelab-ae784cd1b4bf4f078925885f2f1e5b1d-s06",
            "title": "Bước 5: Tạo Bộ Đề Đánh Giá Chuẩn (Benchmark Test Set) (`src/evaluation/testset.py`)",
            "kind": "practice",
            "from": 9,
            "to": 10
          },
          {
            "section_id": "codelab-ae784cd1b4bf4f078925885f2f1e5b1d-s07",
            "title": "Bước 6: Chạy Toàn Tuyến Dữ Liệu Sạch (Baseline Pipeline) (`script/run_phase1.py`)",
            "kind": "practice",
            "from": 10,
            "to": 11
          },
          {
            "section_id": "codelab-ae784cd1b4bf4f078925885f2f1e5b1d-s08",
            "title": "Bước 7: Tiêm Lỗi Dữ Liệu Thực Nghiệm (Data Corruption Suite)",
            "kind": "practice",
            "from": 11,
            "to": 12
          },
          {
            "section_id": "codelab-ae784cd1b4bf4f078925885f2f1e5b1d-s09",
            "title": "Bước 8: Đo Lường Suy Giảm, Phục Hồi Dữ Liệu & Đối Chiếu 3 Trạng Thái",
            "kind": "practice",
            "from": 12,
            "to": 13
          },
          {
            "section_id": "codelab-ae784cd1b4bf4f078925885f2f1e5b1d-s10",
            "title": "Bước 9: Rà Soát Cuối Cùng & Chốt Nộp Bài (Pre-Submission Checklist)",
            "kind": "practice",
            "from": 13,
            "to": 15
          }
        ]
      }
    ],
    "parts": [
      {
        "id": "day-slides-material_mu0w5d8u_7gxed7",
        "type": "slide",
        "title": "day10-data-pipeline-observability (2)",
        "duration_min": null,
        "ai_prompts": [],
        "status": "current",
        "body": {
          "material_id": "material_mu0w5d8u_7gxed7",
          "page_from": 1,
          "page_to": 138,
          "notes": null,
          "deck_url": "/api/v1/documents/K4P1/Lecture_material_mu0w5d8u_7gxed7/material_mu0w5d8u_7gxed7/stream",
          "deck_cdn_url": "https://slides.vlearn.dev/slides/k4p1/Lecture_material_mu0w5d8u_7gxed7/material_mu0w5d8u_7gxed7/cc696f1f808ebeb3ff3e6f650ce6c2ada856e5a8dada70954d1c5a525d2dca38.pdf?exp=1792167936&sub=728ae799387402308487372bea160411&sig=v3_nxootYJHFSuu6y53WvGQ3uT8AoJKpmH8iJjN1PF0"
        }
      },
      {
        "id": "video-1",
        "type": "video",
        "title": "Tổng quan ngày 10",
        "duration_min": 5,
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
            "assetId": "d80b7547-5ce3-4277-af5a-3b1447ef65cf",
            "status": "ready"
          }
        }
      },
      {
        "id": "video-2",
        "type": "video",
        "title": "Video 1: Từ nguồn đến agent",
        "duration_min": 19,
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
            "assetId": "0d6be9b6-e720-41fc-a3d9-131a168295a0",
            "status": "ready"
          }
        }
      },
      {
        "id": "video-3",
        "type": "video",
        "title": "Video 2: Ingestion transform",
        "duration_min": 14,
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
            "assetId": "8c5ad0b3-b9cf-4091-ba1a-654d5be17f20",
            "status": "ready"
          }
        }
      },
      {
        "id": "codelab-ae784cd1b4bf4f078925885f2f1e5b1d-s01-doc",
        "type": "text",
        "title": "Bước 0: Khởi Tạo Repo Nhóm & Không Gian Làm Việc (Git & Teamwork)",
        "duration_min": null,
        "ai_prompts": [],
        "status": "todo",
        "body": {
          "reading_label": null,
          "blocks": [
            {
              "t": "alert",
              "html": "Chào mừng bạn đến với tài liệu hướng dẫn thực hành của bài lab \u003Cstrong\u003EDay 10 - Data Pipeline &amp; Data Observability (Lớp L3B)\u003C/strong\u003E.",
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
              "html": "Hướng Dẫn Kỹ Thuật Chi Tiết (Technical Guide) — Day 10",
              "items": [],
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
              "html": "Chào mừng bạn đến với tài liệu hướng dẫn thực hành của bài lab \u003Cstrong\u003EDay 10 - Data Pipeline &amp; Data Observability (Lớp L3B)\u003C/strong\u003E.",
              "items": [],
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
              "html": "💡 \u003Cstrong\u003ELời khuyên trước khi bắt đầu:\u003C/strong\u003E Bài lab này sẽ dẫn dắt bạn qua toàn bộ quy trình xây dựng đường ống dữ liệu (Data Pipeline) chuẩn mực cho AI: từ khâu gom dữ liệu thô, làm sạch, thiết lập chốt kiểm soát chất lượng (Data Observability Gate) với Great Expectations 1.x, cho tới việc chủ động tiêm lỗi dữ liệu (Data Corruption) để quan sát sự suy giảm hiệu năng của mô hình AI và kích hoạt cơ chế phục hồi tự động (Idempotent Recovery). Hãy đi từng bước một cách cẩn thận, đọc kỹ hướng dẫn và đối chiếu đúng \u003Cstrong\u003ETín hiệu hoàn thành (Pass Signal)\u003C/strong\u003E ở mỗi bước trước khi chuyển sang bước tiếp theo.",
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
              "t": "alert",
              "html": "🎯 \u003Cstrong\u003EMục tiêu:\u003C/strong\u003E Nhóm có chung một repository trên GitHub để cùng phối hợp, các thành viên clone về máy và sẵn sàng ghi nhận đóng góp công việc qua Git commit.",
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
              "t": "ul",
              "html": null,
              "items": [
                "\u003Cstrong\u003E1.\u003C/strong\u003E \u003Cstrong\u003EKhởi tạo repo nhóm (Trưởng nhóm thực hiện):\u003C/strong\u003E"
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
                "Lấy source từ repo mẫu chính thức: \u003Ca href=\"https://github.com/VinUni-AI20k/K4-L3B-Day10-Data-Pipeline-Data-Observability\" target=\"_blank\" rel=\"noopener noreferrer\"\u003EK4-L3B-Day10-Data-Pipeline-Data-Observability\u003C/a\u003E.",
                "Đặt tên repo nhóm theo chuẩn: \u003Ccode\u003EK4-L3B-DAY10-&lt;TenNhom&gt;-DataPipelineDataObservability\u003C/code\u003E \u003Cem\u003E(Ví dụ: \u003Ccode\u003EK4-L3B-DAY10-AlphaTeam-DataPipelineDataObservability\u003C/code\u003E)\u003C/em\u003E.",
                "Mời tất cả thành viên trong nhóm vào danh sách \u003Cstrong\u003ECollaborators\u003C/strong\u003E (Settings &gt; Collaborators) để có quyền push code."
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
                "\u003Cstrong\u003E1.\u003C/strong\u003E \u003Cstrong\u003EClone repo về máy cá nhân (Toàn bộ thành viên):\u003C/strong\u003E"
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
              "md": "```bash\ngit clone https://github.com/\u003CGitHub_TruongNhom\u003E/K4-L3B-DAY10-\u003CTenNhom\u003E-DataPipelineDataObservability.git\ncd K4-L3B-DAY10-\u003CTenNhom\u003E-DataPipelineDataObservability\n```"
            },
            {
              "t": "ul",
              "html": null,
              "items": [
                "\u003Cstrong\u003E1.\u003C/strong\u003E \u003Cstrong\u003ECấu hình định danh Git tác giả (Khuyến nghị cho mỗi cá nhân):\u003C/strong\u003E Đảm bảo Git nhận đúng tài khoản GitHub của bạn để mọi commit và \u003Ccode\u003Egit log\u003C/code\u003E được gắn đúng tên:"
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
              "md": "```bash\ngit config user.name \"Họ và Tên của bạn\"\ngit config user.email \"email_tai_khoan_github@domain.com\"\n```"
            },
            {
              "t": "alert",
              "html": "💡 \u003Cstrong\u003EGhi nhận đóng góp cá nhân:\u003C/strong\u003E Trong bài làm nhóm, mỗi thành viên nên tự tay commit các module mình phụ trách và hoàn thiện báo cáo cá nhân \u003Ccode\u003Ereports/individual_&lt;MSSV&gt;_&lt;HoTen&gt;.md\u003C/code\u003E. Giảng viên và TA sẽ đối soát đóng góp thông qua lịch sử commit (\u003Ccode\u003Egit log\u003C/code\u003E) và nội dung báo cáo.",
              "items": [],
              "lang": null,
              "kind": "info",
              "icon": "bulb",
              "title": null,
              "src": null,
              "alt": null,
              "md": null
            }
          ]
        }
      },
      {
        "id": "codelab-ae784cd1b4bf4f078925885f2f1e5b1d-s02-doc",
        "type": "text",
        "title": "Bước 1: Khởi Tạo Môi Trường & Cấu Hình",
        "duration_min": null,
        "ai_prompts": [],
        "status": "todo",
        "body": {
          "reading_label": null,
          "blocks": [
            {
              "t": "alert",
              "html": "🎯 \u003Cstrong\u003ENhiệm vụ thực hiện:\u003C/strong\u003E Kích hoạt môi trường ảo \u003Ccode\u003E.venv\u003C/code\u003E, cài đặt gói dự án ở chế độ phát triển (\u003Ccode\u003Epython -m pip install -e .\u003C/code\u003E hoặc \u003Ccode\u003Euv sync\u003C/code\u003E), sao chép \u003Ccode\u003E.env.example\u003C/code\u003E thành \u003Ccode\u003E.env\u003C/code\u003E và dán \u003Ccode\u003EGOOGLE_API_KEY\u003C/code\u003E cá nhân.",
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
              "t": "ul",
              "html": null,
              "items": [
                "\u003Cstrong\u003E1.\u003C/strong\u003E Mở terminal tại thư mục gốc của project vừa clone về."
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
                "\u003Cstrong\u003E1.\u003C/strong\u003E Kiểm tra phiên bản Python (Yêu cầu Python 3.11, 3.12 hoặc 3.13):"
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
              "md": "```bash\npython --version\n```"
            },
            {
              "t": "ul",
              "html": null,
              "items": [
                "\u003Cstrong\u003E1.\u003C/strong\u003E Kích hoạt môi trường ảo:"
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
                "\u003Cstrong\u003EWindows PowerShell:\u003C/strong\u003E"
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
              "md": "```powershell\n.\\.venv\\Scripts\\Activate.ps1\n```"
            },
            {
              "t": "p",
              "html": "\u003Cem\u003E(💡 Nếu PowerShell báo lỗi script bị chặn do \u003Ccode\u003EExecutionPolicy\u003C/code\u003E, chạy lệnh: \u003Ccode\u003ESet-ExecutionPolicy -Scope CurrentUser -ExecutionPolicy RemoteSigned\u003C/code\u003E rồi kích hoạt lại).\u003C/em\u003E",
              "items": [],
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
                "\u003Cstrong\u003ELinux / macOS:\u003C/strong\u003E"
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
              "md": "```bash\nsource .venv/bin/activate\n```"
            },
            {
              "t": "ul",
              "html": null,
              "items": [
                "\u003Cstrong\u003E1.\u003C/strong\u003E Cài đặt toàn bộ thư viện &amp; package dự án:"
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
              "md": "```bash\npython -m pip install -e .\n```"
            },
            {
              "t": "p",
              "html": "\u003Cem\u003E(💡 Nếu máy bạn có sẵn công cụ \u003Ccode\u003Euv\u003C/code\u003E, bạn có thể gõ \u003Ccode\u003Euv sync\u003C/code\u003E để cài đặt siêu tốc).\u003C/em\u003E",
              "items": [],
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
                "\u003Cstrong\u003E1.\u003C/strong\u003E Tạo file cấu hình \u003Ccode\u003E.env\u003C/code\u003E từ file mẫu \u003Ccode\u003E.env.example\u003C/code\u003E:"
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
                "\u003Cstrong\u003EWindows PowerShell:\u003C/strong\u003E"
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
              "md": "```powershell\nCopy-Item .env.example .env\n```"
            },
            {
              "t": "ul",
              "html": null,
              "items": [
                "\u003Cstrong\u003ELinux / macOS:\u003C/strong\u003E"
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
              "html": "Mở file \u003Ccode\u003E.env\u003C/code\u003E, tìm dòng \u003Ccode\u003EGOOGLE_API_KEY=\u003C/code\u003E và dán mã API Key của bạn ngay sau dấu \u003Ccode\u003E=\u003C/code\u003E. Không để khoảng trắng thừa, không thêm dấu nháy kép.",
              "items": [],
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
                "\u003Cstrong\u003E1.\u003C/strong\u003E Kiểm tra kết nối 3 thư viện cốt lõi (ChromaDB, Great Expectations, Sentence-Transformers):"
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
              "md": "```bash\npython -c \"import chromadb, great_expectations, sentence_transformers; print('Environment Ready!')\"\n```"
            },
            {
              "t": "alert",
              "html": "\u003Cstrong\u003ETín hiệu hoàn thành:\u003C/strong\u003E Console in ra dòng chữ: \u003Ccode\u003EEnvironment Ready!\u003C/code\u003E.",
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
              "t": "alert",
              "html": "💡 \u003Cstrong\u003EMẹo gỡ rối (Troubleshooting):\u003C/strong\u003E Nếu gặp lỗi \u003Ccode\u003EModuleNotFoundError\u003C/code\u003E, kiểm tra xem terminal đã trỏ đúng vào Python của \u003Ccode\u003E.venv\u003C/code\u003E chưa bằng lệnh \u003Ccode\u003Ewhere python\u003C/code\u003E (Windows) hoặc \u003Ccode\u003Ewhich python\u003C/code\u003E (macOS/Linux). Nếu đường dẫn không chứa \u003Ccode\u003E.venv\u003C/code\u003E, hãy kích hoạt lại môi trường ảo ở mục 3.",
              "items": [],
              "lang": null,
              "kind": "info",
              "icon": "bulb",
              "title": null,
              "src": null,
              "alt": null,
              "md": null
            }
          ]
        }
      },
      {
        "id": "codelab-ae784cd1b4bf4f078925885f2f1e5b1d-s03-doc",
        "type": "text",
        "title": "Bước 2: Thu Thập Dữ Liệu & Cất Giữ Bản Gốc (`src/ingestion/crossref.py`)",
        "duration_min": null,
        "ai_prompts": [],
        "status": "todo",
        "body": {
          "reading_label": null,
          "blocks": [
            {
              "t": "p",
              "html": "Trong bước này, chúng ta thu thập metadata bài báo học thuật từ Crossref REST API và cất giữ bản sao nguyên gốc (Raw Preservation).",
              "items": [],
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
              "html": "Mục tiêu:",
              "items": [],
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
                "Thu thập metadata từ Crossref REST API công khai.",
                "Chuẩn hóa các trường thông tin: \u003Ccode\u003Epaper_id\u003C/code\u003E (DOI), \u003Ccode\u003Etitle\u003C/code\u003E, \u003Ccode\u003Esummary\u003C/code\u003E (loại bỏ các thẻ HTML/XML rác như \u003Ccode\u003E&lt;jats:p&gt;\u003C/code\u003E), \u003Ccode\u003Eauthors\u003C/code\u003E, \u003Ccode\u003Ecategories\u003C/code\u003E, \u003Ccode\u003Epublished\u003C/code\u003E.",
                "Lưu lại 2 file dữ liệu thô (Raw Artifacts) phục vụ Data Lineage:",
                "\u003Ccode\u003Edata/raw/crossref_response.json\u003C/code\u003E: Toàn bộ JSON gốc từ API (nguyên bản, không chỉnh sửa).",
                "\u003Ccode\u003Edata/raw/crossref_records.json\u003C/code\u003E: Danh sách đối tượng \u003Ccode\u003EPaperRecord\u003C/code\u003E sau khi bóc tách."
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
              "html": "🔍 \u003Cstrong\u003ETại sao phải cất giữ bản thô (Raw Preservation)?\u003C/strong\u003E Dữ liệu gốc cào về cần được giữ nguyên vẹn để làm điểm tựa phục hồi (Lineage Anchor). Khi các bước biến đổi dữ liệu phía sau xảy ra lỗi, hệ thống có thể chạy lại từ bản thô mà không cần gọi lại API ngoài, tránh nguy cơ bị giới hạn truy cập (Rate Limit).",
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
              "t": "h3",
              "html": "Cơ chế Cứu hộ Offline (Fallback):",
              "items": [],
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
              "html": "Nếu mạng chập chờn hoặc API Crossref trả về lỗi \u003Ccode\u003E429 Too Many Requests\u003C/code\u003E, pipeline sẽ tự động chuyển sang đọc file snapshot mẫu có sẵn tại \u003Ccode\u003Edata/raw/crossref_response.json\u003C/code\u003E mà không làm gián đoạn bài lab.",
              "items": [],
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
              "html": "🎯 \u003Cstrong\u003ENhiệm vụ của bạn:\u003C/strong\u003E Mở file \u003Ccode\u003Esrc/ingestion/crossref.py\u003C/code\u003E, đọc docstring và hoàn thiện logic 2 hàm: 1. \u003Ccode\u003Eparse_crossref_payload(payload)\u003C/code\u003E: Bóc tách cấu trúc payload JSON từ API Crossref thành danh sách các đối tượng \u003Ccode\u003EPaperRecord\u003C/code\u003E. 2. \u003Ccode\u003Efetch_source_records(settings)\u003C/code\u003E: Gọi API Crossref (hoặc kích hoạt fallback đọc snapshot mẫu), lưu JSON gốc vào \u003Ccode\u003Edata/raw/crossref_response.json\u003C/code\u003E và lưu danh sách records vào \u003Ccode\u003Edata/raw/crossref_records.json\u003C/code\u003E.",
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
              "html": "Kiểm tra bước 2:",
              "items": [],
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
              "md": "```bash\npython -c \"from core.config import load_settings; from ingestion.crossref import fetch_source_records; s=load_settings(); r=fetch_source_records(s); print(f'Tín hiệu hoàn thành: Đã tải {len(r)} bài báo')\"\n```"
            },
            {
              "t": "alert",
              "html": "\u003Cstrong\u003ETín hiệu hoàn thành:\u003C/strong\u003E Console in ra \u003Ccode\u003ETín hiệu hoàn thành: Đã tải 24 bài báo\u003C/code\u003E.",
              "items": [],
              "lang": null,
              "kind": "info",
              "icon": "bulb",
              "title": null,
              "src": null,
              "alt": null,
              "md": null
            }
          ]
        }
      },
      {
        "id": "codelab-ae784cd1b4bf4f078925885f2f1e5b1d-s04-doc",
        "type": "text",
        "title": "Bước 3: Làm Sạch Dữ Liệu & Chuẩn Bị Văn Bản Tạo Vector (`src/ingestion/cleaning.py`)",
        "duration_min": null,
        "ai_prompts": [],
        "status": "todo",
        "body": {
          "reading_label": null,
          "blocks": [
            {
              "t": "p",
              "html": "Dữ liệu thô tải về cần được chuẩn hóa khoảng trắng, định dạng ngày tháng và định dạng văn bản phục vụ Embedding.",
              "items": [],
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
              "html": "Mục tiêu:",
              "items": [],
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
                "Loại bỏ khoảng trắng thừa, chuẩn hóa định dạng văn bản.",
                "Tính toán tuổi đời dữ liệu: \u003Ccode\u003Eage_days = (run_date - published).days\u003C/code\u003E.",
                "Ghép nối các trường thành một đoạn ngữ cảnh hoàn chỉnh \u003Ccode\u003Etext_for_embedding\u003C/code\u003E:"
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
              "md": "```text\nTitle: \u003CTiêu đề bài báo\u003E\nAuthors: \u003CDanh sách tác giả\u003E\nPublished: \u003CNgày xuất bản\u003E\nCategories: \u003CLĩnh vực chuyên môn\u003E\nSummary: \u003CTóm tắt nội dung\u003E\n```"
            },
            {
              "t": "ul",
              "html": null,
              "items": [
                "Khử trùng lặp bản ghi theo khóa duy nhất \u003Ccode\u003Epaper_id\u003C/code\u003E."
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
              "html": "🎯 \u003Cstrong\u003ENhiệm vụ của bạn:\u003C/strong\u003E Mở file \u003Ccode\u003Esrc/ingestion/cleaning.py\u003C/code\u003E, hoàn thiện hàm \u003Ccode\u003Ebuild_clean_dataframe(raw_records, run_date)\u003C/code\u003E để biến đổi danh sách \u003Ccode\u003EPaperRecord\u003C/code\u003E thành một \u003Ccode\u003Epandas.DataFrame\u003C/code\u003E sạch, tính toán cột \u003Ccode\u003Eage_days\u003C/code\u003E, tạo cột tổng hợp \u003Ccode\u003Etext_for_embedding\u003C/code\u003E và loại bỏ hoàn toàn các dòng trùng lặp \u003Ccode\u003Epaper_id\u003C/code\u003E.",
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
              "html": "Kiểm tra bước 3:",
              "items": [],
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
              "md": "```bash\npython -c \"from datetime import datetime, timezone; from core.config import load_settings; from ingestion.crossref import load_raw_records; from ingestion.cleaning import build_clean_dataframe; s=load_settings(); df=build_clean_dataframe(load_raw_records(s.paths.raw_records_json), datetime.now(timezone.utc)); print(f'Tín hiệu hoàn thành: Clean thành công {len(df)} dòng')\"\n```"
            },
            {
              "t": "alert",
              "html": "\u003Cstrong\u003ETín hiệu hoàn thành:\u003C/strong\u003E Console in ra \u003Ccode\u003ETín hiệu hoàn thành: Clean thành công 24 dòng\u003C/code\u003E.",
              "items": [],
              "lang": null,
              "kind": "info",
              "icon": "bulb",
              "title": null,
              "src": null,
              "alt": null,
              "md": null
            }
          ]
        }
      },
      {
        "id": "codelab-ae784cd1b4bf4f078925885f2f1e5b1d-s05-doc",
        "type": "text",
        "title": "Bước 4: Thiết Lập Chốt Kiểm Soát Dữ Liệu (Observability Gate) với Great Expectations 1.x (`src/observability/quality.py`)",
        "duration_min": null,
        "ai_prompts": [],
        "status": "todo",
        "body": {
          "reading_label": null,
          "blocks": [
            {
              "t": "p",
              "html": "Trước khi đưa dữ liệu vào Vector Database, dữ liệu phải vượt qua chốt kiểm định chất lượng nghiêm ngặt.",
              "items": [],
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
              "html": "Chuẩn Great Expectations 1.x:",
              "items": [],
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
              "html": "Sử dụng chuẩn Ephemeral Context hiện đại trên GX 1.x:",
              "items": [],
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
              "md": "```python\ncontext = gx.get_context(mode=\"ephemeral\")\ndata_source = context.data_sources.add_pandas(name=\"papers_source\")\ndata_asset = data_source.add_dataframe_asset(name=\"papers_asset\")\nbatch_def = data_asset.add_batch_definition_whole_dataframe(\"papers_batch\")\nbatch = batch_def.get_batch(batch_parameters={\"dataframe\": df})\n```"
            },
            {
              "t": "h3",
              "html": "4 Hàng Rào Kiểm Định (Expectations) Bắt Buộc:",
              "items": [],
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
                "\u003Cstrong\u003E1.\u003C/strong\u003E \u003Ccode\u003EExpectTableRowCountToBeBetween\u003C/code\u003E: Số lượng bản ghi nằm trong ngưỡng 5 đến 5000 dòng.",
                "\u003Cstrong\u003E2.\u003C/strong\u003E \u003Ccode\u003EExpectColumnValuesToNotBeNull\u003C/code\u003E: Các cột quan trọng \u003Ccode\u003Epaper_id\u003C/code\u003E, \u003Ccode\u003Etitle\u003C/code\u003E, \u003Ccode\u003Etext_for_embedding\u003C/code\u003E không được rỗng (null).",
                "\u003Cstrong\u003E3.\u003C/strong\u003E \u003Ccode\u003EExpectColumnValuesToBeUnique\u003C/code\u003E: Mỗi bài báo \u003Ccode\u003Epaper_id\u003C/code\u003E là duy nhất, không trùng lặp.",
                "\u003Cstrong\u003E4.\u003C/strong\u003E \u003Ccode\u003EExpectColumnValueLengthsToBeBetween\u003C/code\u003E: Trường \u003Ccode\u003Esummary\u003C/code\u003E có độ dài tối thiểu 30 ký tự."
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
              "html": "Giám Sát Độ Tươi Mới (Freshness Monitoring):",
              "items": [],
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
              "html": "Đo lường tỉ lệ bài báo cũ (\u003Ccode\u003Eage_days &gt; 180 ngày\u003C/code\u003E). Nếu tỉ lệ bài báo cũ vượt quá 25%, hệ thống lập tức gắn cờ cảnh báo \u003Ccode\u003Eis_fresh = False\u003C/code\u003E.",
              "items": [],
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
              "html": "🎯 \u003Cstrong\u003ENhiệm vụ của bạn:\u003C/strong\u003E Mở file \u003Ccode\u003Esrc/observability/quality.py\u003C/code\u003E, hoàn thiện hàm \u003Ccode\u003Erun_data_quality_checks(df, settings, stage)\u003C/code\u003E sử dụng Great Expectations 1.x Ephemeral Context để thiết lập và kiểm định 4 Expectations bắt buộc trên, kết hợp gọi hàm \u003Ccode\u003Eevaluate_freshness_sla()\u003C/code\u003E để kiểm tra độ tươi mới của dữ liệu và trả về dict kết quả chứa \u003Ccode\u003E{\"success\": bool, ...}\u003C/code\u003E.",
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
              "html": "Kiểm tra bước 4:",
              "items": [],
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
              "md": "```bash\npython -c \"from core.config import load_settings; from observability.quality import run_data_quality_checks; import pandas as pd; s=load_settings(); df=pd.read_json(s.paths.clean_json); res=run_data_quality_checks(df, s, 'test'); print('Tín hiệu hoàn thành: Quality check status =', res['success'])\"\n```"
            },
            {
              "t": "alert",
              "html": "\u003Cstrong\u003ETín hiệu hoàn thành:\u003C/strong\u003E Console in ra \u003Ccode\u003ETín hiệu hoàn thành: Quality check status = True\u003C/code\u003E.",
              "items": [],
              "lang": null,
              "kind": "info",
              "icon": "bulb",
              "title": null,
              "src": null,
              "alt": null,
              "md": null
            }
          ]
        }
      },
      {
        "id": "codelab-ae784cd1b4bf4f078925885f2f1e5b1d-s06-doc",
        "type": "text",
        "title": "Bước 5: Tạo Bộ Đề Đánh Giá Chuẩn (Benchmark Test Set) (`src/evaluation/testset.py`)",
        "duration_min": null,
        "ai_prompts": [],
        "status": "todo",
        "body": {
          "reading_label": null,
          "blocks": [
            {
              "t": "p",
              "html": "Để đánh giá chất lượng câu trả lời của AI, chúng ta xây dựng bộ dữ liệu kiểm thử (Ground Truth) gồm 10 câu hỏi thuộc 4 dạng bài toán:",
              "items": [],
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
                "\u003Cstrong\u003E1.\u003C/strong\u003E \u003Ccode\u003Esummary\u003C/code\u003E: Hỏi tóm tắt nội dung chính của bài báo.",
                "\u003Cstrong\u003E2.\u003C/strong\u003E \u003Ccode\u003Eauthors\u003C/code\u003E: Hỏi về tác giả công trình nghiên cứu.",
                "\u003Cstrong\u003E3.\u003C/strong\u003E \u003Ccode\u003Edate\u003C/code\u003E: Hỏi thời điểm xuất bản.",
                "\u003Cstrong\u003E4.\u003C/strong\u003E \u003Ccode\u003Ecategories\u003C/code\u003E: Hỏi về lĩnh vực chuyên môn."
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
              "html": "Mỗi câu hỏi trong \u003Ccode\u003Etest_set.json\u003C/code\u003E có định dạng:",
              "items": [],
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
              "md": "```json\n{\n  \"id\": \"eval_001\",\n  \"question_type\": \"summary\",\n  \"question\": \"What is the summary of the paper '\u003CTitle\u003E'?\",\n  \"ground_truth\": \"\u003CNội dung câu đầu tóm tắt chuẩn\u003E\",\n  \"ground_truth_doc_ids\": [\"\u003CDOI bài báo\u003E\"]\n}\n```"
            },
            {
              "t": "alert",
              "html": "🎯 \u003Cstrong\u003ENhiệm vụ của bạn:\u003C/strong\u003E Mở file \u003Ccode\u003Esrc/evaluation/testset.py\u003C/code\u003E, hoàn thiện hàm \u003Ccode\u003Ebuild_test_set(df, output_path)\u003C/code\u003E để tự động trích xuất từ \u003Ccode\u003EDataFrame\u003C/code\u003E dữ liệu sạch 10 câu hỏi Ground Truth phân bổ đều qua 4 dạng bài toán trên và lưu thành file \u003Ccode\u003Edata/eval/test_set.json\u003C/code\u003E.",
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
              "html": "Kiểm tra bước 5:",
              "items": [],
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
              "md": "```bash\npython -c \"from core.config import load_settings; from evaluation.testset import build_test_set; import pandas as pd; s=load_settings(); df=pd.read_json(s.paths.clean_json); ts=build_test_set(df, s.paths.eval_testset); print(f'Tín hiệu hoàn thành: Sinh được {len(ts)} câu hỏi test')\"\n```"
            },
            {
              "t": "alert",
              "html": "\u003Cstrong\u003ETín hiệu hoàn thành:\u003C/strong\u003E Console in ra \u003Ccode\u003ETín hiệu hoàn thành: Sinh được 10 câu hỏi test\u003C/code\u003E.",
              "items": [],
              "lang": null,
              "kind": "info",
              "icon": "bulb",
              "title": null,
              "src": null,
              "alt": null,
              "md": null
            }
          ]
        }
      },
      {
        "id": "codelab-ae784cd1b4bf4f078925885f2f1e5b1d-s07-doc",
        "type": "text",
        "title": "Bước 6: Chạy Toàn Tuyến Dữ Liệu Sạch (Baseline Pipeline) (`script/run_phase1.py`)",
        "duration_min": null,
        "ai_prompts": [],
        "status": "todo",
        "body": {
          "reading_label": null,
          "blocks": [
            {
              "t": "alert",
              "html": "🎯 \u003Cstrong\u003ENhiệm vụ của bạn:\u003C/strong\u003E Mở file \u003Ccode\u003Esrc/pipelines/phase1.py\u003C/code\u003E, hoàn thiện hàm \u003Ccode\u003Erun_phase1_pipeline(settings)\u003C/code\u003E để xâu chuỗi 6 bước pipeline hoàn chỉnh: Ingest ➔ Clean ➔ Index ChromaDB ➔ Sinh Testset ➔ Đánh giá Baseline RAG Hit Rate &amp; Token F1 ➔ Great Expectations Quality Gate và xuất báo cáo \u003Ccode\u003Edata/reports/phase1_report.md\u003C/code\u003E. Sau đó, thực thi script chạy toàn tuyến Phase 1:",
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
              "t": "md",
              "html": null,
              "items": [],
              "lang": null,
              "kind": null,
              "icon": null,
              "title": null,
              "src": null,
              "alt": null,
              "md": "```bash\npython script/run_phase1.py\n```"
            },
            {
              "t": "alert",
              "html": "\u003Cstrong\u003ETín hiệu hoàn thành:\u003C/strong\u003E - File \u003Ccode\u003Edata/clean/papers_clean.csv\u003C/code\u003E xuất hiện đầy đủ các dòng sạch. - File \u003Ccode\u003Edata/results/baseline_metrics.json\u003C/code\u003E ghi nhận các chỉ số ban đầu (Hit Rate và Token F1). - File \u003Ccode\u003Edata/reports/phase1_report.md\u003C/code\u003E được sinh ra với bảng số liệu chi tiết.",
              "items": [],
              "lang": null,
              "kind": "info",
              "icon": "bulb",
              "title": null,
              "src": null,
              "alt": null,
              "md": null
            }
          ]
        }
      },
      {
        "id": "codelab-ae784cd1b4bf4f078925885f2f1e5b1d-s08-doc",
        "type": "text",
        "title": "Bước 7: Tiêm Lỗi Dữ Liệu Thực Nghiệm (Data Corruption Suite)",
        "duration_min": null,
        "ai_prompts": [],
        "status": "todo",
        "body": {
          "reading_label": null,
          "blocks": [
            {
              "t": "p",
              "html": "Tại \u003Ccode\u003Esrc/ingestion/corruption.py\u003C/code\u003E, chúng ta giả lập 6 dạng sự cố dữ liệu thực tế:",
              "items": [],
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
                "\u003Cstrong\u003E1.\u003C/strong\u003E \u003Cstrong\u003EDrop latest records:\u003C/strong\u003E Bỏ rơi 20% các bài báo mới nhất.",
                "\u003Cstrong\u003E2.\u003C/strong\u003E \u003Cstrong\u003EBlank summary:\u003C/strong\u003E Xóa trắng phần tóm tắt ở một số dòng.",
                "\u003Cstrong\u003E3.\u003C/strong\u003E \u003Cstrong\u003EInject noise:\u003C/strong\u003E Chèn các chuỗi ký tự rác vào tóm tắt.",
                "\u003Cstrong\u003E4.\u003C/strong\u003E \u003Cstrong\u003ETruncate title:\u003C/strong\u003E Cắt ngắn tiêu đề xuống dưới 8 ký tự.",
                "\u003Cstrong\u003E5.\u003C/strong\u003E \u003Cstrong\u003EStale date:\u003C/strong\u003E Lùi ngày xuất bản về 365 ngày trước.",
                "\u003Cstrong\u003E6.\u003C/strong\u003E \u003Cstrong\u003EDuplicate rows:\u003C/strong\u003E Nhân đôi các dòng để tạo trùng lặp."
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
              "html": "🎯 \u003Cstrong\u003ENhiệm vụ của bạn:\u003C/strong\u003E Mở file \u003Ccode\u003Esrc/ingestion/corruption.py\u003C/code\u003E, hoàn thiện hàm \u003Ccode\u003Ecorrupt_clean_dataframe(clean_df, log_path)\u003C/code\u003E để tiêm 6 dạng lỗi trên vào dữ liệu sạch và ghi lại nhật ký toàn bộ các dòng bị biến đổi vào \u003Ccode\u003Edata/results/corruption_log.json\u003C/code\u003E.",
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
              "html": "Kiểm tra bước 7:",
              "items": [],
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
              "md": "```bash\npython -c \"from core.config import load_settings; from ingestion.corruption import corrupt_clean_dataframe; import pandas as pd; s=load_settings(); df=pd.read_json(s.paths.clean_json); c=corrupt_clean_dataframe(df, s.paths.corruption_log); print(f'Tín hiệu hoàn thành: Corrupted {len(c)} dòng')\"\n```"
            },
            {
              "t": "alert",
              "html": "\u003Cstrong\u003ETín hiệu hoàn thành:\u003C/strong\u003E Nhật ký lỗi \u003Ccode\u003Edata/results/corruption_log.json\u003C/code\u003E được ghi lại chi tiết.",
              "items": [],
              "lang": null,
              "kind": "info",
              "icon": "bulb",
              "title": null,
              "src": null,
              "alt": null,
              "md": null
            }
          ]
        }
      },
      {
        "id": "codelab-ae784cd1b4bf4f078925885f2f1e5b1d-s09-doc",
        "type": "text",
        "title": "Bước 8: Đo Lường Suy Giảm, Phục Hồi Dữ Liệu & Đối Chiếu 3 Trạng Thái",
        "duration_min": null,
        "ai_prompts": [],
        "status": "todo",
        "body": {
          "reading_label": null,
          "blocks": [
            {
              "t": "alert",
              "html": "🎯 \u003Cstrong\u003ENhiệm vụ của bạn:\u003C/strong\u003E Mở file \u003Ccode\u003Esrc/pipelines/corruption_flow.py\u003C/code\u003E, hoàn thiện hàm \u003Ccode\u003Erun_corruption_flow_pipeline(settings)\u003C/code\u003E để: 1. Nạp dữ liệu bẩn vào ChromaDB và đo lường sự suy giảm hiệu năng của AI (quan sát hiện tượng Silent Failure). 2. Kích hoạt hàm phục hồi an toàn \u003Ccode\u003Erepair_from_raw_snapshot()\u003C/code\u003E từ snapshot thô ban đầu để ghi đè dữ liệu hỏng. 3. Tái đánh giá hệ thống và kết xuất bảng so sánh 3 trạng thái tại \u003Ccode\u003Edata/reports/corruption_report.md\u003C/code\u003E. Sau đó, thực thi script chạy toàn tuyến Phase 2:",
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
              "t": "md",
              "html": null,
              "items": [],
              "lang": null,
              "kind": null,
              "icon": null,
              "title": null,
              "src": null,
              "alt": null,
              "md": "```bash\npython script/run_corruption_flow.py\n```"
            },
            {
              "t": "alert",
              "html": "\u003Cstrong\u003ETín hiệu hoàn thành:\u003C/strong\u003E - Console in ra bảng so sánh hiệu năng 3 cột rõ ràng (Baseline vs Corrupted vs Repaired). - Báo cáo \u003Ccode\u003Edata/reports/corruption_report.md\u003C/code\u003E được tạo thành công, thể hiện rõ mức độ phục hồi hiệu năng của hệ thống.",
              "items": [],
              "lang": null,
              "kind": "info",
              "icon": "bulb",
              "title": null,
              "src": null,
              "alt": null,
              "md": null
            }
          ]
        }
      },
      {
        "id": "codelab-ae784cd1b4bf4f078925885f2f1e5b1d-s10-doc",
        "type": "text",
        "title": "Bước 9: Rà Soát Cuối Cùng & Chốt Nộp Bài (Pre-Submission Checklist)",
        "duration_min": null,
        "ai_prompts": [],
        "status": "todo",
        "body": {
          "reading_label": null,
          "blocks": [
            {
              "t": "p",
              "html": "Trước khi hết giờ làm bài, toàn nhóm thực hiện rà soát theo 5 bước kiểm tra bắt buộc sau:",
              "items": [],
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
              "html": "9.1. Checkout &amp; Đồng bộ Git (Tránh nộp nhầm nhánh)",
              "items": [],
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
              "html": "Đảm bảo tất cả các thành viên đã đẩy code và toàn bộ thay đổi đã được merge vào nhánh chính \u003Ccode\u003Emain\u003C/code\u003E:",
              "items": [],
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
              "md": "```bash\ngit checkout main\ngit pull origin main\n```"
            },
            {
              "t": "h3",
              "html": "9.2. Kiểm tra trạng thái Git (Tuyệt đối không commit file rác &amp; bí mật)",
              "items": [],
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
              "html": "Chạy lệnh kiểm tra trạng thái:",
              "items": [],
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
              "md": "```bash\ngit status\n```"
            },
            {
              "t": "alert",
              "html": "⚠️ \u003Cstrong\u003EKiểm tra an toàn:\u003C/strong\u003E - Tuyệt đối \u003Cstrong\u003EKHÔNG commit file \u003Ccode\u003E.env\u003C/code\u003E\u003C/strong\u003E (chứa API Key riêng của bạn). - Không commit các thư mục môi trường ảo \u003Ccode\u003E.venv/\u003C/code\u003E, cache \u003Ccode\u003E__pycache__/\u003C/code\u003E, cơ sở dữ liệu tạm thời \u003Ccode\u003Echroma_db/\u003C/code\u003E. - Nếu thấy các file tạm xuất hiện trong danh sách \u003Ccode\u003EUntracked files\u003C/code\u003E, hãy đảm bảo \u003Ccode\u003E.gitignore\u003C/code\u003E đã chặn chúng trước khi commit.",
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
              "t": "h3",
              "html": "9.3. Hoàn thiện Hồ Sơ Nhóm &amp; Báo Cáo Cá Nhân",
              "items": [],
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
                "\u003Cstrong\u003E1.\u003C/strong\u003E Mở file \u003Ccode\u003Edocs/TEAM.md\u003C/code\u003E và điền đầy đủ:"
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
                "Tên nhóm, danh sách toàn bộ thành viên, MSSV, vai trò cụ thể.",
                "Bảng tự chấm điểm tỷ lệ đóng góp (% Contribution) có sự thống nhất của cả nhóm."
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
                "\u003Cstrong\u003E1.\u003C/strong\u003E Mỗi thành viên hoàn thành một file báo cáo cá nhân riêng tại thư mục \u003Ccode\u003Ereports/\u003C/code\u003E:"
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
                "Đường dẫn file: \u003Ccode\u003Ereports/individual_&lt;MSSV&gt;_&lt;HoTen&gt;.md\u003C/code\u003E",
                "\u003Cem\u003ELưu ý:\u003C/em\u003E Soạn thảo dựa trên mẫu có sẵn tại \u003Ccode\u003Ereports/TEMPLATE_individual.md\u003C/code\u003E."
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
              "html": "9.4. Kiểm tra Chạy Toàn Tuyến Lần Cuối (Sanity Check)",
              "items": [],
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
              "html": "Chạy lại lệnh thực thi để chắc chắn rằng dự án không bị lỗi cú pháp hay thiếu file:",
              "items": [],
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
              "md": "```bash\npython script/run_phase1.py\n```"
            },
            {
              "t": "alert",
              "html": "\u003Cstrong\u003ETín hiệu hoàn thành:\u003C/strong\u003E Lệnh chạy thông suốt, không phát sinh bất kỳ ngoại lệ nào.",
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
              "t": "h3",
              "html": "9.5. Push lên GitHub &amp; Nộp Link trên VLearn LMS",
              "items": [],
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
                "\u003Cstrong\u003E1.\u003C/strong\u003E Thực hiện commit và push toàn bộ thay đổi cuối cùng lên GitHub:"
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
              "md": "```bash\ngit add docs/TEAM.md reports/\ngit commit -m \"docs: complete team contribution and individual reports\"\ngit push origin main\n```"
            },
            {
              "t": "ul",
              "html": null,
              "items": [
                "\u003Cstrong\u003E1.\u003C/strong\u003E Trưởng nhóm sao chép đường link repository GitHub của nhóm (đảm bảo repo ở chế độ \u003Cstrong\u003EPublic\u003C/strong\u003E):"
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
                "Định dạng link: \u003Ccode\u003Ehttps://github.com/&lt;GitHub_TruongNhom&gt;/K4-L3B-DAY10-&lt;TenNhom&gt;-DataPipelineDataObservability\u003C/code\u003E"
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
                "\u003Cstrong\u003E1.\u003C/strong\u003E Dán link repo và nộp bài trên hệ thống \u003Cstrong\u003EVLearn LMS\u003C/strong\u003E trước hạn chót (13:00 đối với ca sáng / 18:00 đối với ca chiều)."
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
        "id": "codelab-ae784cd1b4bf4f078925885f2f1e5b1d-submit",
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
          "deadline_at": "2026-09-26T16:59:00+00:00"
        }
      }
    ]
  },
  "progress": {
    "done": 0,
    "total": 15,
    "percent": 0,
    "current_part_id": "day-slides-material_mu0w5d8u_7gxed7"
  },
  "kc_quiz": {
    "release_id": "88fe8c3f-5238-4b8f-8cc1-0bf6e5fc9a81",
    "course_id": "K4P1",
    "day_code": "day10",
    "revision_no": 1,
    "published_at": "2026-09-15T17:24:07.270640+00:00",
    "groups": [
      {
        "group_id": "day10-g-foundations",
        "name": "Chẩn đoán và accountability ở tầng data",
        "leaf_kc_ids": [
          "kc-data-cascade-root-cause-localization",
          "kc-data-pipeline-owner-artifact-assignment",
          "kc-source-failure-monitor-owner-map"
        ]
      },
      {
        "group_id": "day10-g-architecture",
        "name": "Quyết định kiến trúc pipeline",
        "leaf_kc_ids": [
          "kc-ai-data-pipeline-boundary-model",
          "kc-etl-elt-tradeoff-selection",
          "kc-batch-streaming-ingestion-selection"
        ]
      },
      {
        "group_id": "day10-g-ingestion",
        "name": "Độ tin cậy ingestion theo từng loại source",
        "leaf_kc_ids": [
          "kc-snapshot-cdc-selection",
          "kc-incremental-watermark-checkpoint",
          "kc-api-rate-limit-backoff-jitter",
          "kc-api-cursor-offset-pagination-selection",
          "kc-partial-page-failure-replay",
          "kc-document-logical-version-authority",
          "kc-ocr-confidence-publish-review",
          "kc-queue-producer-consumer-decoupling",
          "kc-ingestion-backpressure-control",
          "kc-poison-message-dlq-recovery"
        ]
      },
      {
        "group_id": "day10-g-transform",
        "name": "Cleaning deterministic và disposition của record",
        "leaf_kc_ids": [
          "kc-deterministic-replayable-cleaning",
          "kc-required-field-missingness-policy",
          "kc-date-format-canonicalization",
          "kc-unicode-encoding-normalization",
          "kc-business-key-duplicate-resolution",
          "kc-canonical-schema-validation",
          "kc-record-disposition-policy",
          "kc-quarantine-audit-trail"
        ]
      },
      {
        "group_id": "day10-g-quality",
        "name": "Data-quality contract và evidence chạy được",
        "leaf_kc_ids": [
          "kc-data-completeness-check",
          "kc-data-validity-check",
          "kc-data-uniqueness-check",
          "kc-data-consistency-check",
          "kc-data-timeliness-check",
          "kc-data-accuracy-source-of-truth",
          "kc-actionable-data-contract-authoring",
          "kc-schema-evolution-compatibility-plan",
          "kc-executable-data-expectation",
          "kc-quality-suite-coverage-limit",
          "kc-data-rule-signal-precision"
        ]
      },
      {
        "group_id": "day10-g-observability",
        "name": "Data observability signal và cách diễn giải",
        "leaf_kc_ids": [
          "kc-data-freshness-observability",
          "kc-data-volume-observability",
          "kc-data-distribution-observability",
          "kc-data-schema-observability",
          "kc-data-lineage-observability",
          "kc-business-freshness-sla-design",
          "kc-distribution-drift-contextual-interpretation",
          "kc-data-to-agent-sli-linkage"
        ]
      },
      {
        "group_id": "day10-g-operations",
        "name": "Orchestration an toàn và incident response",
        "leaf_kc_ids": [
          "kc-data-quality-gate-placement",
          "kc-data-orchestrator-requirements",
          "kc-data-pipeline-retry-scope",
          "kc-atomic-vector-index-publish",
          "kc-safe-data-backfill",
          "kc-timeboxed-data-incident-triage",
          "kc-data-incident-mitigation-and-verification",
          "kc-data-incident-prevention-loop"
        ]
      }
    ],
    "knowledge_components": [
      {
        "kc_id": "kc-actionable-data-contract-authoring",
        "group_id": "day10-g-quality",
        "name": "Soạn data contract để validator và operator hành động được",
        "knowledge": "Actionable contract nêu dataset, owner, source authority, canonical field/type, required/allowed value, identity key, freshness commitment, version policy và consequence khi violation. Nó cũng ghi known unknown thay vì biến assumption thành fact.",
        "remediation_target": "Luyện đổi informal assumption thành clause check được và unresolved item rõ.",
        "is_core": true
      },
      {
        "kc_id": "kc-ai-data-pipeline-boundary-model",
        "group_id": "day10-g-architecture",
        "name": "Mô hình hóa boundary source, pipeline, storage, serving và agent",
        "knowledge": "AI data path tách source, ingest/transform, raw và canonical storage, retrieval/serving và agent surface. Mỗi boundary có input, output, persistence và failure evidence riêng; vector store không thay thế upstream data contract.",
        "remediation_target": "Luyện đổi system diagram thành boundary contract có persisted artifact.",
        "is_core": true
      },
      {
        "kc_id": "kc-api-cursor-offset-pagination-selection",
        "group_id": "day10-g-ingestion",
        "name": "Chọn cursor hay offset pagination cho source đang thay đổi",
        "knowledge": "Offset pagination đơn giản nhưng có thể skip/duplicate row khi insert/delete đồng thời làm vị trí dịch chuyển. Cursor ổn định gắn với source ordering an toàn hơn cho changing-feed case trong bài, và cursor cuối phải được persist để resume.",
        "remediation_target": "Luyện page sequence có record insert, delete và reorder giữa các request.",
        "is_core": true
      },
      {
        "kc_id": "kc-api-rate-limit-backoff-jitter",
        "group_id": "day10-g-ingestion",
        "name": "Xử lý API rate limit bằng Retry-After và bounded backoff có jitter",
        "knowledge": "Ingest bị rate limit phải tôn trọng retry guidance từ server nếu có; nếu không thì dùng bounded exponential backoff có jitter cùng giới hạn attempt. Retry ngay, đồng nhịp hoặc vô hạn làm tải tăng và biến 429 recoverable thành outage kéo dài.",
        "remediation_target": "Luyện rate-limit trace có/không server guidance, exhaustion và concurrent worker.",
        "is_core": true
      },
      {
        "kc_id": "kc-atomic-vector-index-publish",
        "group_id": "day10-g-operations",
        "name": "Publish rebuilt vector index qua staging và atomic activation",
        "knowledge": "Write trực tiếp vào live index có thể expose collection đang nạp dở. Pattern an toàn hơn trong bài là build collection staging mới, verify snapshot rồi mới đổi alias để agent không đọc collection partial. Giữ snapshot publish trước cho phép rollback.",
        "remediation_target": "Luyện failure point trước và sau alias activation.",
        "is_core": true
      },
      {
        "kc_id": "kc-batch-streaming-ingestion-selection",
        "group_id": "day10-g-architecture",
        "name": "Chọn batch, streaming hoặc hybrid theo product freshness và operability",
        "knowledge": "Batch xử lý tập data hữu hạn theo lịch, replay/debug đơn giản hơn. Streaming giảm event latency nhưng thêm ordering, state, backpressure và cost vận hành liên tục. Business consequence của delay quyết định cadence; real-time không tự động tốt hơn.",
        "remediation_target": "Luyện phân loại case bằng latency, cost, governance và debugging constraint rõ.",
        "is_core": true
      },
      {
        "kc_id": "kc-business-freshness-sla-design",
        "group_id": "day10-g-observability",
        "name": "Chuyển business freshness promise thành SLA và alert policy có owner",
        "knowledge": "Freshness SLA actionable nêu event nào start clock, consumer-visible publish boundary nào stop, threshold theo source class, warning/page point, owner và user behavior khi breach. Static document và live ticket cần commitment khác nhau.",
        "remediation_target": "Luyện SLA cho static policy, daily export và live incident stream.",
        "is_core": true
      },
      {
        "kc_id": "kc-business-key-duplicate-resolution",
        "group_id": "day10-g-transform",
        "name": "Detect và resolve duplicate bằng business key có lý do",
        "knowledge": "Duplicate detection phụ thuộc record identity: primary/natural key, normalized content hash, source identity và version đều có thể quan trọng. Giữ row đầu tiên tình cờ có thể giữ stale data; resolution cần precedence rule rõ và audit record.",
        "remediation_target": "Luyện duplicate set gồm exact copy, normalized copy, version conflict và legitimate recurrence.",
        "is_core": true
      },
      {
        "kc_id": "kc-canonical-schema-validation",
        "group_id": "day10-g-transform",
        "name": "Validate transformed record theo canonical schema",
        "knowledge": "Trước downstream work, transformed record phải thỏa named field, type, required constraint và allowed domain trong canonical schema. Parser output cần map tại boundary để downstream code không âm thầm phụ thuộc native shape của từng source.",
        "remediation_target": "Luyện map hai source schema vào một canonical contract có failure rõ.",
        "is_core": true
      },
      {
        "kc_id": "kc-data-accuracy-source-of-truth",
        "group_id": "day10-g-quality",
        "name": "Đánh giá data accuracy chỉ theo source of truth có authority",
        "knowledge": "Accuracy hỏi value có khớp reality hoặc authorized reference không. Internal shape, range, completeness và agreement tự chúng không chứng minh accuracy; check cần named source of truth, comparison rule, effective time và cách xử lý conflict chưa resolve.",
        "remediation_target": "Luyện authority/effective-time conflict với outcome unresolved rõ.",
        "is_core": true
      },
      {
        "kc_id": "kc-data-cascade-root-cause-localization",
        "group_id": "day10-g-foundations",
        "name": "Định vị defect sớm nhất trong data cascade từ source tới agent",
        "knowledge": "Wrong answer của agent có thể bắt đầu ở source authority, ingestion, cleaning, parsing, chunking, indexing, retrieval hoặc generation. Diagnosis phải lần record bị ảnh hưởng theo chiều ngược và dừng tại handoff sớm nhất có evidence lỗi, không lấy symptom cuối làm root cause.",
        "remediation_target": "Luyện trace fact stale, missing, malformed và duplicate qua cùng pipeline, mỗi lần kiểm một boundary.",
        "is_core": true
      },
      {
        "kc_id": "kc-data-completeness-check",
        "group_id": "day10-g-quality",
        "name": "Đo data completeness theo required coverage",
        "knowledge": "Completeness hỏi required record và field có đủ không. Not-null check đo field completeness; expected row, key, partition hoặc source coverage đo record completeness. Nó không chứng minh value đang có là valid hay accurate.",
        "remediation_target": "Luyện dataset thiếu field, record và partition.",
        "is_core": true
      },
      {
        "kc_id": "kc-data-consistency-check",
        "group_id": "day10-g-quality",
        "name": "Đo consistency giữa field, record và representation",
        "knowledge": "Consistency hỏi các value lẽ ra phải agree có khớp giữa column, table, source hoặc representation lặp không. Cross-field invariant, referential relation, unit convention và version precedence khác local format validity.",
        "remediation_target": "Luyện cross-field, referential, unit và version-conflict check.",
        "is_core": true
      },
      {
        "kc_id": "kc-data-distribution-observability",
        "group_id": "day10-g-observability",
        "name": "Instrument value distribution ngoài row-count health",
        "knowledge": "Pipeline có thể giữ row count trong khi content đổi bất thường. Null rate, text length, cardinality, entropy, language mix và cross-field anomaly cho thấy population/parser đổi. Mỗi signal cần reference và interpretation; count ổn không chứng minh correctness.",
        "remediation_target": "Luyện stable-count dataset có parser, language, dedupe và legitimate population change.",
        "is_core": true
      },
      {
        "kc_id": "kc-data-freshness-observability",
        "group_id": "day10-g-observability",
        "name": "Instrument freshness bằng source-to-publish age và schedule health",
        "knowledge": "Freshness observability kết hợp source/effective time, last successful run, watermark progress, expected cadence và consumer-visible publish time. Nó detect stale/stalled flow nhưng tự nó không xác định cause missing-volume, schema hay accuracy.",
        "remediation_target": "Luyện freshness timeline có late source, failed run, delayed publish và no-change period khỏe.",
        "is_core": true
      },
      {
        "kc_id": "kc-data-incident-mitigation-and-verification",
        "group_id": "day10-g-operations",
        "name": "Mitigate user harm và verify data-pipeline fix end to end",
        "knowledge": "Khi root cause chưa khép trong timebox, mitigation có thể rollback published snapshot, disable affected source/feature hoặc hiển thị stale-data warning. Sau repair, verification phải cover cùng record/run lineage, quality signal, publish state và original user-facing query.",
        "remediation_target": "Luyện incident có technical recovery và user-visible recovery ở thời điểm khác nhau.",
        "is_core": true
      },
      {
        "kc_id": "kc-data-incident-prevention-loop",
        "group_id": "day10-g-operations",
        "name": "Biến data incident thành prevention control test được",
        "knowledge": "Incident artifact đầy đủ nối symptom, detection, diagnosis, root cause, mitigation, verification, prevention và owner. Prevention đổi contract, expectation, metric, alert, runbook hoặc pipeline control để cùng causal failure được detect sớm hơn; chỉ sửa một row chưa close loop.",
        "remediation_target": "Luyện đổi root cause thành corruption test và early-detection control.",
        "is_core": true
      },
      {
        "kc_id": "kc-data-lineage-observability",
        "group_id": "day10-g-observability",
        "name": "Trace published record qua source, run, transformation và serving lineage",
        "knowledge": "Lineage nối record/chunk mà agent nhìn thấy với source identity/version, run ID, transformation path, derived artifact và published index. Sau khi signal khác phát hiện vấn đề, lineage chỉ step nào fail và output nào đi qua path đó.",
        "remediation_target": "Luyện record-level lineage từ source qua publish tới agent output.",
        "is_core": true
      },
      {
        "kc_id": "kc-data-orchestrator-requirements",
        "group_id": "day10-g-operations",
        "name": "Đặc tả orchestrator requirement từ trigger, dependency, retry, SLA, data awareness và backfill",
        "knowledge": "Orchestrator là dependency graph cộng execution visibility, không chỉ thay cron. Design bắt đầu từ trigger semantics, task dependency, retry eligibility, SLA/alert, readiness sensor, lineage/logging và safe backfill; product name chỉ là ví dụ.",
        "remediation_target": "Luyện đổi pipeline failure case thành orchestrator requirement.",
        "is_core": true
      },
      {
        "kc_id": "kc-data-pipeline-owner-artifact-assignment",
        "group_id": "day10-g-foundations",
        "name": "Gán owner chịu trách nhiệm và evidence artifact cho từng data handoff",
        "knowledge": "Source truth, ingestion, transformation, quality, publishing và alert response cần accountability rõ. Chỉ ghi role là chưa đủ nếu handoff không sinh artifact inspect được như contract, manifest, lineage record, quality report, runbook hay sign-off.",
        "remediation_target": "Luyện điền bảng owner–artifact–failure-response cho pipeline một người vận hành và team lớn.",
        "is_core": true
      },
      {
        "kc_id": "kc-data-pipeline-retry-scope",
        "group_id": "day10-g-operations",
        "name": "Chọn retry scope và terminal path cho pipeline task bị fail",
        "knowledge": "Pipeline retry policy nêu max attempts, backoff, execution resume từ failed task hay restart dependency trước, và alert/dead-letter path sau exhaustion. Retry chỉ failed task tránh lặp work đã success nếu input/prior output còn valid và rerun an toàn.",
        "remediation_target": "Luyện DAG failure point có predecessor artifact valid, stale và missing.",
        "is_core": true
      },
      {
        "kc_id": "kc-data-quality-gate-placement",
        "group_id": "day10-g-operations",
        "name": "Đặt data-quality gate trước work tốn kém hoặc user-visible",
        "knowledge": "Quality gate chạy sau khi parse đủ để evaluate contract nhưng trước embedding tốn kém hay publishing user-visible. Branch halt, quarantine, warn unlock downstream work khác nhau; bypass hard gate phải explicit và chỉ cho controlled experiment.",
        "remediation_target": "Luyện DAG có parsing, cleaning, validation, embedding và publish branch.",
        "is_core": true
      },
      {
        "kc_id": "kc-data-rule-signal-precision",
        "group_id": "day10-g-quality",
        "name": "Tune data-quality rule để có precision hữu ích thay vì alert noise",
        "knowledge": "Rule nêu target field, comparison, value/threshold và severity. Precision là tỷ lệ blocked record thực sự defective theo contract; rule chặn legitimate data làm mất trust dù nó bắt nhiều row.",
        "remediation_target": "Luyện revise rule trên contract-allowed edge case và true defect.",
        "is_core": true
      },
      {
        "kc_id": "kc-data-schema-observability",
        "group_id": "day10-g-observability",
        "name": "Instrument schema change và downstream compatibility",
        "knowledge": "Schema observability detect field add, remove, rename, retype hoặc đổi semantics rồi link change với parser/consumer version. Structural detection chưa đủ khi field giữ tên nhưng đổi meaning, nên contract version và distribution evidence quan trọng.",
        "remediation_target": "Luyện schema diff kèm consumer matrix và value summary.",
        "is_core": true
      },
      {
        "kc_id": "kc-data-timeliness-check",
        "group_id": "day10-g-quality",
        "name": "Đo timeliness tại boundary consumer nhìn thấy",
        "knowledge": "Timeliness hỏi data có đủ recent cho use case không. Clock phải so meaningful source/effective timestamp với lúc cleaned/published record hiện với consumer; job start mới không chứng minh agent thấy data hiện tại.",
        "remediation_target": "Luyện timeline timestamp qua ingest, clean, index và publish.",
        "is_core": true
      },
      {
        "kc_id": "kc-data-to-agent-sli-linkage",
        "group_id": "day10-g-observability",
        "name": "Nối data-pipeline signal với agent-facing service indicator",
        "knowledge": "Pipeline health cần nối user-visible outcome như citation age, valid-grounding rate, retrieval hit@k và ingest-to-publish latency. Indicator này cho thấy impact/prioritization, còn năm data pillar locate cause; hai bộ không thay nhau.",
        "remediation_target": "Luyện paired baseline/corrupted/repaired run trên frozen evaluation case.",
        "is_core": true
      },
      {
        "kc_id": "kc-data-uniqueness-check",
        "group_id": "day10-g-quality",
        "name": "Đo uniqueness bằng identity key đúng",
        "knowledge": "Uniqueness hỏi record bắt buộc singular có xuất hiện một lần theo business identity trong contract không. Check generated row ID có thể luôn pass dù business duplicate vẫn còn; key và scope phải khớp identity semantics của consumer.",
        "remediation_target": "Luyện uniqueness theo composite key và time scope.",
        "is_core": true
      },
      {
        "kc_id": "kc-data-validity-check",
        "group_id": "day10-g-quality",
        "name": "Đo data validity theo rule đã khai báo",
        "knowledge": "Validity hỏi value có conform với type, format, range, domain hoặc schema rule đã khai báo không. Value valid vẫn có thể factually wrong, stale, duplicate hoặc inconsistent với source khác.",
        "remediation_target": "Luyện example valid-but-wrong và invalid-but-recoverable.",
        "is_core": true
      },
      {
        "kc_id": "kc-data-volume-observability",
        "group_id": "day10-g-observability",
        "name": "Instrument volume theo expected source và stage baseline",
        "knowledge": "Volume observability compare count/throughput qua source, ingest, clean, quarantine, embed, publish với expected range hoặc historical baseline. Job success nhưng ít row vẫn có thể partial failure im lặng; volume tăng có thể là duplicate.",
        "remediation_target": "Luyện reconcile count qua stage và source slice.",
        "is_core": true
      },
      {
        "kc_id": "kc-date-format-canonicalization",
        "group_id": "day10-g-transform",
        "name": "Canonicalize date và format mà không đổi ý nghĩa",
        "knowledge": "Deterministic parser có thể nhận các representation được support rõ rồi emit một canonical format, đồng thời giữ raw value và reject input ambiguous/invalid. Normalize format không cho phép reinterpret timezone, locale hay effective-date semantics.",
        "remediation_target": "Luyện date fixture có locale ambiguity, invalid date, thiếu timezone và source convention đã biết.",
        "is_core": true
      },
      {
        "kc_id": "kc-deterministic-replayable-cleaning",
        "group_id": "day10-g-transform",
        "name": "Implement cleaning deterministic, replay được từ raw input được giữ lại",
        "knowledge": "Cleaning logic phải nằm trong code và data contract, còn raw export được giữ làm replay source. Run ID cùng artifact before/after giúp attribute tác động của rule; sửa spreadsheet thủ công sẽ mất ở run sau và không cho evidence đó.",
        "remediation_target": "Luyện rerun cùng raw export, so quarantine count và trace measured impact của từng rule.",
        "is_core": true
      },
      {
        "kc_id": "kc-distribution-drift-contextual-interpretation",
        "group_id": "day10-g-observability",
        "name": "Diễn giải distribution drift như evidence của change, không tự động là error",
        "knowledge": "Drift compare current data với reference có lý do bằng named method/threshold. Nó báo change, không báo correctness; interpretation phụ thuộc window được so, column/bucket đổi, business context, quality check và downstream evidence.",
        "remediation_target": "Luyện drift report benign và harmful với corroborating evidence khác nhau.",
        "is_core": true
      },
      {
        "kc_id": "kc-document-logical-version-authority",
        "group_id": "day10-g-ingestion",
        "name": "Tách byte identity khỏi logical document version có thẩm quyền",
        "knowledge": "Content hash trả lời bytes có đổi không; logical identity, effective date, source authority và active/superseded status trả lời policy version nào được serve. Rename file không nhất thiết tạo document mới và cùng filename không chứng minh cùng authority.",
        "remediation_target": "Luyện policy file conflict gồm byte-equal copy, renamed revision và future effective date.",
        "is_core": true
      },
      {
        "kc_id": "kc-etl-elt-tradeoff-selection",
        "group_id": "day10-g-architecture",
        "name": "Chọn ETL hoặc ELT theo vị trí transform, raw retention và governance",
        "knowledge": "ETL transform trước khi load vào target; ELT giữ raw trong target rồi transform ở đó. Lựa chọn phụ thuộc raw có được lưu không, scalable compute nằm đâu, rule đổi thường xuyên thế nào và có cần replay/audit input gốc không.",
        "remediation_target": "Luyện cùng một source dưới các governance và replay requirement khác nhau.",
        "is_core": true
      },
      {
        "kc_id": "kc-executable-data-expectation",
        "group_id": "day10-g-quality",
        "name": "Implement expectation có observable evidence và consequence",
        "knowledge": "Expectation hữu ích nêu contract clause và quality dimension, compute observed value trên scope rõ, compare threshold có lý do, chỉ failed row/slice và emit severity điều khiển downstream. Boolean không evidence rất khó diagnose.",
        "remediation_target": "Luyện expectation cho null, domain, identity, freshness và cross-field invariant.",
        "is_core": true
      },
      {
        "kc_id": "kc-incremental-watermark-checkpoint",
        "group_id": "day10-g-ingestion",
        "name": "Resume incremental ingestion từ watermark cuối đã xử lý thành công",
        "knowledge": "Watermark/checkpoint ghi source position cuối đã xử lý thành công như updated_at hoặc last_synced_id. Failed page phải còn replay được thay vì bị checkpoint sau che khuất; watermark stall cho thấy source data mới không tiến qua ingestion.",
        "remediation_target": "Luyện trace có page success, một page fail, resume và watermark-stall metric.",
        "is_core": true
      },
      {
        "kc_id": "kc-ingestion-backpressure-control",
        "group_id": "day10-g-ingestion",
        "name": "Phát hiện và điều khiển ingestion backpressure",
        "knowledge": "Backpressure xảy ra khi producer thêm work nhanh hơn consumer hoàn tất. Producer/consumer rate cùng queue depth tăng cho thấy mismatch; control được nguồn hỗ trợ là báo ngược để producer giảm intake trước khi queue phình đến mức mất data.",
        "remediation_target": "Luyện trace có burst tạm thời, queue đang drain và overload kéo dài.",
        "is_core": true
      },
      {
        "kc_id": "kc-ocr-confidence-publish-review",
        "group_id": "day10-g-ingestion",
        "name": "Dùng OCR confidence và content check để gate document publish",
        "knowledge": "OCR output là evidence có uncertainty, không tự động là text dùng được. Low confidence, spike replacement character, đổi language, mất structure hoặc length bất thường phải route page/document đi review trước embed và publish.",
        "remediation_target": "Luyện page OCR clean, low-confidence và confidently wrong.",
        "is_core": true
      },
      {
        "kc_id": "kc-partial-page-failure-replay",
        "group_id": "day10-g-ingestion",
        "name": "Giữ và replay partial API page bị fail mà không fetch lại toàn feed",
        "knowledge": "Khi một page fail sau các page đã success, page hoặc cursor bị fail phải được ghi vào dead-letter path có thể recover. Replay nhắm đúng page đó, còn checkpoint idempotent tránh fetch lại toàn history đã success.",
        "remediation_target": "Luyện trace có các page đã success, một page fail, targeted replay và resume.",
        "is_core": true
      },
      {
        "kc_id": "kc-poison-message-dlq-recovery",
        "group_id": "day10-g-ingestion",
        "name": "Cô lập poison message trong dead-letter workflow có thể recover",
        "knowledge": "Message vẫn fail sau bounded retry phải ngừng chặn healthy work trong queue. DLQ giữ event fail đó observable để inspect, tạo ticket, sửa và replay có chủ đích thay vì vứt mất âm thầm.",
        "remediation_target": "Luyện history kết thúc bằng retry tiếp, cô lập DLQ, inspect hoặc replay.",
        "is_core": true
      },
      {
        "kc_id": "kc-quality-suite-coverage-limit",
        "group_id": "day10-g-quality",
        "name": "Diễn giải expectation suite xanh mà không overclaim data correctness",
        "knowledge": "Suite pass chỉ chứng minh implemented rule đã pass trên scope/threshold được test. Nó không chứng minh dimension chưa test, business rule, external accuracy, future data hay không có blind spot; các limit phải nằm trong report.",
        "remediation_target": "Luyện claim-evidence audit trên green report cố ý thiếu/mis-specified check.",
        "is_core": true
      },
      {
        "kc_id": "kc-quarantine-audit-trail",
        "group_id": "day10-g-transform",
        "name": "Ghi quarantine record audit được có reason, run identity và review path",
        "knowledge": "Quarantine là holding state để review, không phải silent deletion. Artifact giữ original row, rule hoặc reason, source identity và run ID; contract nêu ai review và record có thể quay lại pipeline hay không.",
        "remediation_target": "Luyện reconstruct và replay record từ quarantine artifact cùng source row.",
        "is_core": true
      },
      {
        "kc_id": "kc-queue-producer-consumer-decoupling",
        "group_id": "day10-g-ingestion",
        "name": "Tách producer nhanh khỏi consumer chậm bằng queue",
        "knowledge": "Queue cho webhook/poller write và acknowledge accepted event nhanh, còn transform/validate consume theo rate riêng. Queue depth và consumer throughput làm delay tăng nhìn thấy được; queue tự nó không thay bounded retry, backpressure hay failed-message recovery.",
        "remediation_target": "Luyện timeline có producer burst, consumer pause và recovery.",
        "is_core": true
      },
      {
        "kc_id": "kc-record-disposition-policy",
        "group_id": "day10-g-transform",
        "name": "Chọn clean, reject, quarantine hay warn theo recoverability và impact",
        "knowledge": "Reversible transform hợp lệ có thể thành clean; hard violation không recover được có thể reject; content uncertain nhưng review được vào quarantine; optional anomaly rủi ro thấp có thể tiếp tục kèm warn. Consequence đi theo contract severity và downstream harm, không theo tiện lợi.",
        "remediation_target": "Luyện borderline case mà đổi downstream consequence sẽ đổi disposition đúng.",
        "is_core": true
      },
      {
        "kc_id": "kc-required-field-missingness-policy",
        "group_id": "day10-g-transform",
        "name": "Áp policy theo field cho data required/optional bị missing",
        "knowledge": "Missingness phải được diễn giải theo contract, không sửa đồng loạt. Required content rỗng có thể reject, date recoverable chỉ được derive từ source có authority, optional field có thể warn; imputation không được invent business truth.",
        "remediation_target": "Luyện missingness case có contract criticality và recoverability khác nhau.",
        "is_core": true
      },
      {
        "kc_id": "kc-safe-data-backfill",
        "group_id": "day10-g-operations",
        "name": "Backfill bounded historical range mà không phá production",
        "knowledge": "Backfill rerun date/partition range cụ thể. Orchestrator requirement giữ range rõ, gắn run cho lineage, dùng identity idempotent đã học trước và ngăn partial result thay production alias.",
        "remediation_target": "Luyện bounded backfill hoàn tất, fail giữa chừng hoặc overlap scheduled run.",
        "is_core": true
      },
      {
        "kc_id": "kc-schema-evolution-compatibility-plan",
        "group_id": "day10-g-quality",
        "name": "Phân loại schema evolution và plan compatibility, migration, rollback",
        "knowledge": "Thêm optional field có default có thể backward compatible; rename, đổi type hoặc meaning là breaking nếu consumer chưa migrate. Plan an toàn version contract, observe null/error distribution mới, có thể stage hai form, backfill có run identity và giữ rollback.",
        "remediation_target": "Luyện consumer matrix cho type, name, optionality và semantic change.",
        "is_core": true
      },
      {
        "kc_id": "kc-snapshot-cdc-selection",
        "group_id": "day10-g-ingestion",
        "name": "Chọn snapshot hoặc CDC theo latency và history need",
        "knowledge": "Full snapshot hoặc snapshot theo watermark biểu diễn current state theo kỳ và dễ vận hành hơn; CDC lấy insert, update, delete với latency thấp nhưng thêm log, offset, ordering, schema drift và poison message. History mà consumer cần cùng delay chấp nhận được quyết định lựa chọn.",
        "remediation_target": "Luyện chọn cả hai cách cho cùng table dưới history và latency requirement khác nhau.",
        "is_core": true
      },
      {
        "kc_id": "kc-source-failure-monitor-owner-map",
        "group_id": "day10-g-foundations",
        "name": "Map từng source với ingestion method, failure mode, monitor và owner",
        "knowledge": "Source inventory chỉ vận hành được khi mỗi source gắn với cách lấy, cách hỏng, measurable signal phát hiện đúng failure đó và người phản ứng. Danh sách source/tool thiếu failure và monitor semantics chưa phải observability plan.",
        "remediation_target": "Luyện review source map để tìm failure, metric và ownership không khớp nhau.",
        "is_core": true
      },
      {
        "kc_id": "kc-timeboxed-data-incident-triage",
        "group_id": "day10-g-operations",
        "name": "Triage wrong-answer data incident theo evidence order có timebox",
        "knowledge": "Với stale/wrong answer gấp, check freshness/last success trước, rồi volume/step error, schema/contract, cuối cùng lineage về source/owner. Mỗi timebox ghi metric, threshold và conclusion; mở dashboard ngẫu nhiên làm chậm user protection.",
        "remediation_target": "Luyện incident có time limit, một dashboard thiếu và symptom gây nhiễu.",
        "is_core": true
      },
      {
        "kc_id": "kc-unicode-encoding-normalization",
        "group_id": "day10-g-transform",
        "name": "Normalize Unicode và phát hiện encoding corruption không recover được",
        "knowledge": "Whitespace/Unicode normalization làm equivalent text ổn định, nhưng replacement character, mojibake, lost bytes và language corruption có thể không recover. Pipeline phải tách reversible normalization khỏi evidence loss và giữ raw bytes hoặc visual source để review.",
        "remediation_target": "Luyện byte/string fixture có NFC/NFD, replacement character và mojibake.",
        "is_core": true
      }
    ],
    "questions": [
      {
        "servable": false,
        "role": "initial_check",
        "hints": [
          {
            "text": "Giá trị lần đầu đổi khỏi nguồn đúng nằm ở artifact nào?",
            "hint_id": "h1",
            "after_attempt": 1
          }
        ],
        "module_id": "day10-g-foundations",
        "max_points": 4,
        "interaction": {
          "type": "short_text",
          "prompt": "Bối cảnh:\nBản ghi nguồn đúng `policy_version=2026`; manifest ingestion ghi 2026; dòng canonical sau cleaning bị đổi thành 2025; index và retrieved chunk đều chứa 2025; agent trả lời theo chunk.\n\nCâu hỏi:\nXác định lần chuyển dữ liệu sai đầu tiên có bằng chứng và một bước kiểm tra tiếp theo để xác nhận."
        },
        "question_id": "d10-q001",
        "primary_kc_id": "kc-data-cascade-root-cause-localization",
        "grading_method": "criterion_rubric",
        "question_version": 1,
        "cognitive_operation": "Analyze",
        "contributing_kc_ids": [],
        "estimated_difficulty": "medium"
      },
      {
        "servable": true,
        "role": "reassessment",
        "hints": [
          {
            "text": "So từng lần bàn giao theo chiều source→agent.",
            "hint_id": "h1",
            "after_attempt": 1
          }
        ],
        "module_id": "day10-g-foundations",
        "max_points": 1,
        "interaction": {
          "type": "single_select",
          "prompt": "Trace cho thấy source và canonical đều đúng; index metadata trỏ collection cũ, retrieved chunk cũ; agent trung thành với chunk. Sai lệch đầu tiên ở đâu?",
          "choices": [
            {
              "text": "Publish/kích hoạt index dùng collection cũ",
              "choice_id": "a"
            },
            {
              "text": "Source authority",
              "choice_id": "b"
            },
            {
              "text": "Cleaning",
              "choice_id": "c"
            },
            {
              "text": "Generation",
              "choice_id": "d"
            }
          ],
          "presentation_policy": {
            "shuffle_at_delivery": true,
            "do_not_expose_choice_ids": true
          }
        },
        "question_id": "d10-q002",
        "primary_kc_id": "kc-data-cascade-root-cause-localization",
        "grading_method": "deterministic_key",
        "question_version": 1,
        "cognitive_operation": "Analyze",
        "contributing_kc_ids": [],
        "estimated_difficulty": "easy"
      },
      {
        "servable": true,
        "role": "follow_up",
        "hints": [
          {
            "text": "Dừng ở ranh giới cuối cùng đã có evidence, rồi yêu cầu artifact kế tiếp.",
            "hint_id": "h1",
            "after_attempt": 1
          }
        ],
        "module_id": "day10-g-foundations",
        "max_points": 1,
        "interaction": {
          "type": "single_select",
          "prompt": "Agent trả lời sai nhưng source→canonical→active index→retrieved chunk đều mang cùng giá trị đúng. Evidence hiện có cho phép kết luận gì?",
          "choices": [
            {
              "text": "Chưa định vị được root cause; cần kiểm generation/prompt/tool trace tiếp",
              "choice_id": "a"
            },
            {
              "text": "Cleaning chắc chắn sai",
              "choice_id": "b"
            },
            {
              "text": "Index chắc chắn stale",
              "choice_id": "c"
            },
            {
              "text": "Source chắc chắn không authoritative",
              "choice_id": "d"
            }
          ],
          "presentation_policy": {
            "shuffle_at_delivery": true,
            "do_not_expose_choice_ids": true
          }
        },
        "question_id": "d10-q003",
        "primary_kc_id": "kc-data-cascade-root-cause-localization",
        "grading_method": "deterministic_key",
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
            "text": "Artifact phải chứng minh thành công/lỗi của đúng ranh giới.",
            "hint_id": "h1",
            "after_attempt": 1
          }
        ],
        "module_id": "day10-g-foundations",
        "max_points": 4,
        "interaction": {
          "left": [
            {
              "id": "x1",
              "text": "Source→ingest"
            },
            {
              "id": "x2",
              "text": "Raw→canonical"
            },
            {
              "id": "x3",
              "text": "Canonical→publish"
            },
            {
              "id": "x4",
              "text": "Alert→response"
            }
          ],
          "type": "matching",
          "right": [
            {
              "id": "r1",
              "text": "Manifest có source/version/count"
            },
            {
              "id": "r2",
              "text": "So sánh trước/sau transform + kết quả contract"
            },
            {
              "id": "r3",
              "text": "Kết quả quality/sign-off + ID snapshot đang hoạt động"
            },
            {
              "id": "r4",
              "text": "Bản ghi runbook sự cố có owner"
            }
          ],
          "prompt": "Ghép lần bàn giao với artifact bằng chứng phù hợp nhất.",
          "presentation_policy": {
            "do_not_align_pairs_by_row": true,
            "shuffle_right_at_delivery": true,
            "do_not_expose_internal_ids": true
          }
        },
        "question_id": "d10-q004",
        "primary_kc_id": "kc-data-pipeline-owner-artifact-assignment",
        "grading_method": "deterministic_key",
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
            "text": "Ai kiểm soát commit boundary và tài liệu nào chứng minh nó đã đổi?",
            "hint_id": "h1",
            "after_attempt": 1
          }
        ],
        "module_id": "day10-g-foundations",
        "max_points": 4,
        "interaction": {
          "type": "short_text",
          "prompt": "Bối cảnh:\nCanonical artifact đã qua kiểm tra quality nhưng serving alias vẫn trỏ snapshot cũ; không ai biết vai trò nào được quyền đổi alias.\n\nCâu hỏi:\nGán một vai trò chịu trách nhiệm, artifact bằng chứng và điều kiện chấp nhận bàn giao cho incident này. Một người có thể kiêm nhiều vai trò."
        },
        "question_id": "d10-q005",
        "primary_kc_id": "kc-data-pipeline-owner-artifact-assignment",
        "grading_method": "criterion_rubric",
        "question_version": 1,
        "cognitive_operation": "Create",
        "contributing_kc_ids": [],
        "estimated_difficulty": "hard"
      },
      {
        "servable": false,
        "role": "initial_check",
        "hints": [
          {
            "text": "Mỗi dòng phải trả lời signal nào sẽ đổi khi failure đó xảy ra.",
            "hint_id": "h1",
            "after_attempt": 1
          }
        ],
        "module_id": "day10-g-foundations",
        "max_points": 4,
        "interaction": {
          "type": "short_text",
          "prompt": "Bối cảnh:\nBa source: DB snapshot hằng đêm; API phân trang có 429; thư mục PDF có OCR.\n\nCâu hỏi:\nLập bản đồ method→failure→monitor→owner cho từng source; monitor phải phân biệt đúng failure."
        },
        "question_id": "d10-q006",
        "primary_kc_id": "kc-source-failure-monitor-owner-map",
        "grading_method": "criterion_rubric",
        "question_version": 1,
        "cognitive_operation": "Create",
        "contributing_kc_ids": [],
        "estimated_difficulty": "hard"
      },
      {
        "servable": false,
        "role": "reassessment",
        "hints": [
          {
            "text": "Với từng dòng, hỏi signal nào thật sự thay đổi khi failure đã mô tả xảy ra.",
            "hint_id": "h1",
            "after_attempt": 1
          }
        ],
        "module_id": "day10-g-foundations",
        "max_points": 4,
        "interaction": {
          "type": "short_text",
          "prompt": "Bối cảnh:\nSource map nháp ghi: (1) Event stream có consumer lag, nhưng chỉ theo dõi CPU của worker; (2) object storage nhận file trùng tên, nhưng chỉ theo dõi tên file; (3) SaaS export thỉnh thoảng thiếu partition, nhưng alert không có owner.\n\nCâu hỏi:\nChỉ ra lỗi trong từng dòng và sửa bằng một monitor hoặc owner phù hợp."
        },
        "question_id": "d10-q007",
        "primary_kc_id": "kc-source-failure-monitor-owner-map",
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
            "text": "Agent chỉ thấy artifact sau activation, không thấy raw tự động.",
            "hint_id": "h1",
            "after_attempt": 1
          }
        ],
        "module_id": "day10-g-architecture",
        "max_points": 6,
        "interaction": {
          "type": "ordering",
          "prompt": "Sắp data path và ranh giới publish theo đúng thứ tự.",
          "options": [
            {
              "text": "Canonical storage",
              "option_id": "o1"
            },
            {
              "text": "Agent retrieval",
              "option_id": "o2"
            },
            {
              "text": "Raw storage",
              "option_id": "o3"
            },
            {
              "text": "Source",
              "option_id": "o4"
            },
            {
              "text": "Ingestion",
              "option_id": "o5"
            },
            {
              "text": "Transform sang canonical data",
              "option_id": "o6"
            },
            {
              "text": "Kích hoạt serving index",
              "option_id": "o7"
            }
          ],
          "presentation_policy": {
            "do_not_expose_option_ids": true,
            "shuffle_initial_order_at_delivery": true
          }
        },
        "question_id": "d10-q008",
        "primary_kc_id": "kc-ai-data-pipeline-boundary-model",
        "grading_method": "deterministic_key",
        "question_version": 1,
        "cognitive_operation": "Analyze",
        "contributing_kc_ids": [],
        "estimated_difficulty": "medium"
      },
      {
        "servable": true,
        "role": "reassessment",
        "hints": [
          {
            "text": "Agent đang đọc artifact nào?",
            "hint_id": "h1",
            "after_attempt": 1
          }
        ],
        "module_id": "day10-g-architecture",
        "max_points": 1,
        "interaction": {
          "type": "single_select",
          "prompt": "Canonical store đã có version v5 đúng, nhưng agent vẫn truy xuất từ index alias v4. Ranh giới nào chưa hoàn tất?",
          "choices": [
            {
              "text": "Publish/activation ở tầng serving",
              "choice_id": "a"
            },
            {
              "text": "Ingestion từ source",
              "choice_id": "b"
            },
            {
              "text": "Lưu raw data",
              "choice_id": "c"
            },
            {
              "text": "Generation của agent",
              "choice_id": "d"
            }
          ],
          "presentation_policy": {
            "shuffle_at_delivery": true,
            "do_not_expose_choice_ids": true
          }
        },
        "question_id": "d10-q009",
        "primary_kc_id": "kc-ai-data-pipeline-boundary-model",
        "grading_method": "deterministic_key",
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
            "text": "Xác định raw được phép nằm đâu và compute nằm đâu.",
            "hint_id": "h1",
            "after_attempt": 1
          }
        ],
        "module_id": "day10-g-architecture",
        "max_points": 1,
        "interaction": {
          "type": "single_select",
          "prompt": "Bối cảnh:\nRaw data chứa PII không được phép vào warehouse; compute ở target hạn chế; quy tắc transform ổn định. Chọn pattern?",
          "choices": [
            {
              "text": "ETL: transform/redact trước load, giữ raw ở vùng được phép riêng",
              "choice_id": "a"
            },
            {
              "text": "ELT: load toàn bộ raw PII vào target rồi tính sau",
              "choice_id": "b"
            },
            {
              "text": "Streaming vì PII",
              "choice_id": "c"
            },
            {
              "text": "CDC vì rule ổn định",
              "choice_id": "d"
            }
          ],
          "presentation_policy": {
            "shuffle_at_delivery": true,
            "do_not_expose_choice_ids": true
          }
        },
        "question_id": "d10-q010",
        "primary_kc_id": "kc-etl-elt-tradeoff-selection",
        "grading_method": "deterministic_key",
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
            "text": "Rule đổi nhanh và replay cần input gốc, nhưng raw vẫn phải có boundary.",
            "hint_id": "h1",
            "after_attempt": 1
          }
        ],
        "module_id": "day10-g-architecture",
        "max_points": 4,
        "interaction": {
          "type": "short_text",
          "prompt": "Bối cảnh:\nTarget lakehouse có compute mạnh và vùng raw được kiểm soát truy cập; quy tắc đổi hàng tuần; audit cần replay từ input gốc. Raw zone không được serving trực tiếp cho agent.\n\nCâu hỏi:\nChọn ETL/ELT, đặt raw data và transformation logic, nêu guardrail."
        },
        "question_id": "d10-q011",
        "primary_kc_id": "kc-etl-elt-tradeoff-selection",
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
            "text": "Real-time chỉ đáng khi độ trễ gây hại.",
            "hint_id": "h1",
            "after_attempt": 1
          }
        ],
        "module_id": "day10-g-architecture",
        "max_points": 4,
        "interaction": {
          "left": [
            {
              "id": "x1",
              "text": "Policy PDF đổi mỗi tháng, SLA 24h"
            },
            {
              "id": "x2",
              "text": "Fraud event cần phản ứng \u003C2s"
            },
            {
              "id": "x3",
              "text": "Phân tích theo ngày nhưng cảnh báo gian lận cần theo thời gian thực"
            },
            {
              "id": "x4",
              "text": "Nguồn nhỏ cập nhật tuần"
            }
          ],
          "type": "matching",
          "right": [
            {
              "id": "r1",
              "text": "Batch theo ngày"
            },
            {
              "id": "r2",
              "text": "Streaming liên tục"
            },
            {
              "id": "r3",
              "text": "Hybrid: stream gian lận + batch phân tích"
            },
            {
              "id": "r4",
              "text": "Batch theo tuần"
            }
          ],
          "prompt": "Ghép trường hợp sử dụng với cadence hợp lý.",
          "presentation_policy": {
            "do_not_align_pairs_by_row": true,
            "shuffle_right_at_delivery": true,
            "do_not_expose_internal_ids": true
          }
        },
        "question_id": "d10-q012",
        "primary_kc_id": "kc-batch-streaming-ingestion-selection",
        "grading_method": "deterministic_key",
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
            "text": "Một product có thể có hai consumer SLA khác nhau.",
            "hint_id": "h1",
            "after_attempt": 1
          }
        ],
        "module_id": "day10-g-architecture",
        "max_points": 4,
        "interaction": {
          "type": "short_text",
          "prompt": "Bối cảnh:\nOrders đến liên tục. Luồng chặn gian lận phải phản ứng trong 3 giây; dashboard chấp nhận dữ liệu trễ 30 phút. Nhóm nhỏ cần có thể chạy lại cả hai luồng từ cùng một durable log.\n\nCâu hỏi:\nThiết kế batch/stream/hybrid: nêu luồng nào phục vụ chặn gian lận, luồng nào phục vụ dashboard, và checkpoint/replay tối thiểu cần giữ."
        },
        "question_id": "d10-q013",
        "primary_kc_id": "kc-batch-streaming-ingestion-selection",
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
            "text": "Consumer cần current state hay từng change?",
            "hint_id": "h1",
            "after_attempt": 1
          }
        ],
        "module_id": "day10-g-ingestion",
        "max_points": 1,
        "interaction": {
          "type": "single_select",
          "prompt": "DB có update/delete liên tục, consumer cần lịch sử thay đổi và độ trễ \u003C10s; source hỗ trợ log. Chọn?",
          "choices": [
            {
              "text": "CDC với offset/lag/schema/poison monitoring",
              "choice_id": "a"
            },
            {
              "text": "Snapshot tuần",
              "choice_id": "b"
            },
            {
              "text": "Offset pagination",
              "choice_id": "c"
            },
            {
              "text": "OCR",
              "choice_id": "d"
            }
          ],
          "presentation_policy": {
            "shuffle_at_delivery": true,
            "do_not_expose_choice_ids": true
          }
        },
        "question_id": "d10-q014",
        "primary_kc_id": "kc-snapshot-cdc-selection",
        "grading_method": "deterministic_key",
        "question_version": 1,
        "cognitive_operation": "Analyze",
        "contributing_kc_ids": [],
        "estimated_difficulty": "easy"
      },
      {
        "servable": true,
        "role": "reassessment",
        "hints": [
          {
            "text": "Độ trễ chấp nhận cao và operating capacity thấp thay đổi lựa chọn.",
            "hint_id": "h1",
            "after_attempt": 1
          }
        ],
        "module_id": "day10-g-ingestion",
        "max_points": 4,
        "interaction": {
          "type": "single_select",
          "prompt": "Bối cảnh:\nBảng tham chiếu 20.000 dòng đổi mỗi quý; độ trễ 24h chấp nhận; nhóm không vận hành được log replication. Lựa chọn nào phù hợp nhất?",
          "choices": [
            {
              "text": "Snapshot theo lịch, manifest version/count và monitor freshness hoặc lần chạy bị đình trệ",
              "choice_id": "a"
            },
            {
              "text": "CDC liên tục dù không vận hành được log replication",
              "choice_id": "b"
            },
            {
              "text": "Offset pagination vì bảng có 20.000 dòng",
              "choice_id": "c"
            },
            {
              "text": "Không cần monitor vì dữ liệu ít đổi",
              "choice_id": "d"
            }
          ],
          "presentation_policy": {
            "shuffle_at_delivery": true,
            "do_not_expose_choice_ids": true
          }
        },
        "question_id": "d10-q015",
        "primary_kc_id": "kc-snapshot-cdc-selection",
        "grading_method": "criterion_rubric",
        "question_version": 1,
        "cognitive_operation": "Understand",
        "contributing_kc_ids": [],
        "estimated_difficulty": "medium"
      },
      {
        "servable": true,
        "role": "initial_check",
        "hints": [
          {
            "text": "Fetched không đồng nghĩa processed successfully.",
            "hint_id": "h1",
            "after_attempt": 1
          }
        ],
        "module_id": "day10-g-ingestion",
        "max_points": 1,
        "interaction": {
          "type": "single_select",
          "prompt": "Các trang theo updated_at: p1≤10:00 thành công, p2≤10:05 thất bại, p3 chưa chạy. Checkpoint an toàn?",
          "choices": [
            {
              "text": "10:00 và chạy lại p2",
              "choice_id": "a"
            },
            {
              "text": "10:05 vì đã lấy p2",
              "choice_id": "b"
            },
            {
              "text": "Job start time",
              "choice_id": "c"
            },
            {
              "text": "10:10 để tránh lặp",
              "choice_id": "d"
            }
          ],
          "presentation_policy": {
            "shuffle_at_delivery": true,
            "do_not_expose_choice_ids": true
          }
        },
        "question_id": "d10-q016",
        "primary_kc_id": "kc-incremental-watermark-checkpoint",
        "grading_method": "deterministic_key",
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
            "text": "Tìm record đã seen nhưng chưa hoàn tất contract.",
            "hint_id": "h1",
            "after_attempt": 1
          }
        ],
        "module_id": "day10-g-ingestion",
        "max_points": 4,
        "interaction": {
          "type": "short_text",
          "prompt": "Bối cảnh:\nRun 08:00 xử lý IDs 101–200; 151–175 fail validation nhưng code lưu `last_synced_id=200`. Run sau bắt đầu 201.\n\nCâu hỏi:\nChẩn đoán data loss và thiết kế checkpoint/replay/stall signal."
        },
        "question_id": "d10-q017",
        "primary_kc_id": "kc-incremental-watermark-checkpoint",
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
            "text": "Mốc nào bảo đảm khoảng lỗi còn được đọc lại?",
            "hint_id": "h1",
            "after_attempt": 1
          }
        ],
        "module_id": "day10-g-ingestion",
        "max_points": 1,
        "interaction": {
          "type": "single_select",
          "prompt": "Pipeline đã thấy event tới 12:00 nhưng chỉ xử lý thành công tới 11:45. Watermark phục vụ resume nên ghi mốc nào?",
          "choices": [
            {
              "text": "11:45",
              "choice_id": "a"
            },
            {
              "text": "12:00",
              "choice_id": "b"
            },
            {
              "text": "Job start time",
              "choice_id": "c"
            },
            {
              "text": "Thời điểm hiện tại",
              "choice_id": "d"
            }
          ],
          "presentation_policy": {
            "shuffle_at_delivery": true,
            "do_not_expose_choice_ids": true
          }
        },
        "question_id": "d10-q018",
        "primary_kc_id": "kc-incremental-watermark-checkpoint",
        "grading_method": "deterministic_key",
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
            "text": "Khi có Retry-After hợp lệ, không tự chọn delay ngắn hơn.",
            "hint_id": "h1",
            "after_attempt": 1
          }
        ],
        "module_id": "day10-g-ingestion",
        "max_points": 1,
        "interaction": {
          "type": "numeric_input",
          "prompt": "Bối cảnh:\nAPI trả 429 với `Retry-After: 12`. Đây là attempt 2/4; header hợp lệ.\n\nCâu hỏi:\nDelay tối thiểu trước attempt kế tiếp là bao nhiêu?",
          "required_unit": "giây"
        },
        "question_id": "d10-q019",
        "primary_kc_id": "kc-api-rate-limit-backoff-jitter",
        "grading_method": "deterministic_key",
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
            "text": "Tính được delay chưa có nghĩa còn quyền retry.",
            "hint_id": "h1",
            "after_attempt": 1
          }
        ],
        "module_id": "day10-g-ingestion",
        "max_points": 4,
        "interaction": {
          "type": "short_text",
          "prompt": "Bối cảnh:\nKhông có Retry-After. Sau attempt 3, backoff calculator trả base delay 8s và jitter sample +1.5s cho request kế tiếp. Attempt hiện tại 3/3 vừa nhận 429.\n\nCâu hỏi:\nTính candidate delay và quyết định thực tế theo attempt limit."
        },
        "question_id": "d10-q020",
        "primary_kc_id": "kc-api-rate-limit-backoff-jitter",
        "grading_method": "criterion_rubric",
        "question_version": 1,
        "cognitive_operation": "Apply",
        "contributing_kc_ids": [],
        "estimated_difficulty": "hard"
      },
      {
        "servable": true,
        "role": "follow_up",
        "hints": [
          {
            "text": "Kiểm tra eligibility trước khi tính thời gian ngủ.",
            "hint_id": "h1",
            "after_attempt": 1
          }
        ],
        "module_id": "day10-g-ingestion",
        "max_points": 1,
        "interaction": {
          "type": "single_select",
          "prompt": "Request vừa nhận 429 ở lần thử cuối cùng theo policy. Dù tính được backoff tiếp theo, client nên làm gì?",
          "choices": [
            {
              "text": "Dừng thử lại, giữ state để resume và báo lỗi kết thúc",
              "choice_id": "a"
            },
            {
              "text": "Tạo thêm một lần thử vì đã có delay",
              "choice_id": "b"
            },
            {
              "text": "Thử lại ngay, không có jitter",
              "choice_id": "c"
            },
            {
              "text": "Đổi 429 thành thành công",
              "choice_id": "d"
            }
          ],
          "presentation_policy": {
            "shuffle_at_delivery": true,
            "do_not_expose_choice_ids": true
          }
        },
        "question_id": "d10-q021",
        "primary_kc_id": "kc-api-rate-limit-backoff-jitter",
        "grading_method": "deterministic_key",
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
            "text": "Insert/delete làm vị trí offset thay đổi.",
            "hint_id": "h1",
            "after_attempt": 1
          }
        ],
        "module_id": "day10-g-ingestion",
        "max_points": 1,
        "interaction": {
          "type": "single_select",
          "prompt": "Feed có insert/delete liên tục giữa các request và API cấp opaque stable cursor. Chọn gì?",
          "choices": [
            {
              "text": "Cursor, lưu cursor và contract về thứ tự",
              "choice_id": "a"
            },
            {
              "text": "Offset vì page number dễ đọc",
              "choice_id": "b"
            },
            {
              "text": "Restart full feed mỗi page",
              "choice_id": "c"
            },
            {
              "text": "Random sample",
              "choice_id": "d"
            }
          ],
          "presentation_policy": {
            "shuffle_at_delivery": true,
            "do_not_expose_choice_ids": true
          }
        },
        "question_id": "d10-q022",
        "primary_kc_id": "kc-api-cursor-offset-pagination-selection",
        "grading_method": "deterministic_key",
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
            "text": "So danh sách trước và sau insert ở mốc 100.",
            "hint_id": "h1",
            "after_attempt": 1
          }
        ],
        "module_id": "day10-g-ingestion",
        "max_points": 4,
        "interaction": {
          "type": "short_text",
          "prompt": "Bối cảnh:\nOffset pages size=100. Sau page 1, một row mới chèn ở đầu; page 2 dùng offset 100.\n\nCâu hỏi:\nGiải thích duplicate/skip risk và thiết kế resume."
        },
        "question_id": "d10-q023",
        "primary_kc_id": "kc-api-cursor-offset-pagination-selection",
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
            "text": "Tách last success khỏi failed unit identity.",
            "hint_id": "h1",
            "after_attempt": 1
          }
        ],
        "module_id": "day10-g-ingestion",
        "max_points": 4,
        "interaction": {
          "type": "single_select",
          "prompt": "Bối cảnh:\nCác trang C1,C2,C3,C4; C1,C2 thành công, C3 timeout, C4 chưa lấy. Cách giữ checkpoint và replay nào an toàn nhất?",
          "choices": [
            {
              "text": "Lưu C3 cùng lỗi/lần thử, giữ checkpoint ở C2, chạy lại C3 idempotent rồi mới lấy C4",
              "choice_id": "a"
            },
            {
              "text": "Đặt checkpoint ở C4 để lần sau không lặp dữ liệu",
              "choice_id": "b"
            },
            {
              "text": "Bỏ C3 và lấy C4 để pipeline không bị chậm",
              "choice_id": "c"
            },
            {
              "text": "Chạy lại từ C1 mỗi khi một trang timeout",
              "choice_id": "d"
            }
          ],
          "presentation_policy": {
            "shuffle_at_delivery": true,
            "do_not_expose_choice_ids": true
          }
        },
        "question_id": "d10-q024",
        "primary_kc_id": "kc-partial-page-failure-replay",
        "grading_method": "criterion_rubric",
        "question_version": 1,
        "cognitive_operation": "Apply",
        "contributing_kc_ids": [],
        "estimated_difficulty": "medium"
      },
      {
        "servable": true,
        "role": "reassessment",
        "hints": [
          {
            "text": "Assume lần đầu có thể đã ghi một phần, nên replay phải không nhân bản.",
            "hint_id": "h1",
            "after_attempt": 1
          }
        ],
        "module_id": "day10-g-ingestion",
        "max_points": 3,
        "interaction": {
          "type": "multi_select",
          "prompt": "Page P7 timeout sau khi server có thể đã trả dữ liệu nhưng client chưa ghi nhận success. Những hành động nào giữ replay an toàn?",
          "choices": [
            {
              "text": "Lưu identity/cursor P7 cùng attempt/error",
              "choice_id": "a"
            },
            {
              "text": "Giữ checkpoint ở P6",
              "choice_id": "b"
            },
            {
              "text": "Replay P7 với stable record IDs/idempotent write",
              "choice_id": "c"
            },
            {
              "text": "Nhảy checkpoint sang P8",
              "choice_id": "d"
            },
            {
              "text": "Xóa evidence P7 sau timeout",
              "choice_id": "e"
            }
          ],
          "presentation_policy": {
            "shuffle_at_delivery": true,
            "do_not_expose_choice_ids": true
          },
          "selection_instruction": "Chọn tất cả phương án đúng."
        },
        "question_id": "d10-q025",
        "primary_kc_id": "kc-partial-page-failure-replay",
        "grading_method": "deterministic_key",
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
            "text": "Filename là location, không phải authority.",
            "hint_id": "h1",
            "after_attempt": 1
          }
        ],
        "module_id": "day10-g-ingestion",
        "max_points": 1,
        "interaction": {
          "type": "single_select",
          "prompt": "`policy.pdf` được rename thành `leave-policy.pdf` nhưng bytes/hash và effective date không đổi. Xử lý?",
          "choices": [
            {
              "text": "Giữ logical document/version, cập nhật alias/path provenance",
              "choice_id": "a"
            },
            {
              "text": "Tạo policy version mới chỉ vì filename",
              "choice_id": "b"
            },
            {
              "text": "Serve cả hai như active",
              "choice_id": "c"
            },
            {
              "text": "Chọn file mới theo mtime",
              "choice_id": "d"
            }
          ],
          "presentation_policy": {
            "shuffle_at_delivery": true,
            "do_not_expose_choice_ids": true
          }
        },
        "question_id": "d10-q026",
        "primary_kc_id": "kc-document-logical-version-authority",
        "grading_method": "deterministic_key",
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
            "text": "Cùng tên không đồng nghĩa cùng version; khác hash không tự xác định authority.",
            "hint_id": "h1",
            "after_attempt": 1
          }
        ],
        "module_id": "day10-g-ingestion",
        "max_points": 4,
        "interaction": {
          "type": "short_text",
          "prompt": "Bối cảnh:\nHai file cùng tên `policy.pdf`: HR portal effective 2026 hash H2; email attachment effective 2024 hash H1.\n\nCâu hỏi:\nThiết kế metadata và active/superseded decision."
        },
        "question_id": "d10-q027",
        "primary_kc_id": "kc-document-logical-version-authority",
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
            "text": "OCR quality không chỉ là một scalar confidence.",
            "hint_id": "h1",
            "after_attempt": 1
          }
        ],
        "module_id": "day10-g-ingestion",
        "max_points": 4,
        "interaction": {
          "type": "multi_select",
          "prompt": "Những dấu hiệu nào khiến một page OCR phải review/quarantine trước embed?",
          "choices": [
            {
              "text": "Confidence .42 và nhiều �",
              "choice_id": "a"
            },
            {
              "text": "Language đổi vi→ru bất thường",
              "choice_id": "b"
            },
            {
              "text": "Text length giảm 95% so với page tương tự",
              "choice_id": "c"
            },
            {
              "text": "Confidence .98 và visual spot-check đúng",
              "choice_id": "d"
            },
            {
              "text": "Bảng mất cột dù text words đủ",
              "choice_id": "e"
            }
          ],
          "presentation_policy": {
            "shuffle_at_delivery": true,
            "do_not_expose_choice_ids": true
          },
          "selection_instruction": "Chọn tất cả phương án đúng."
        },
        "question_id": "d10-q028",
        "primary_kc_id": "kc-ocr-confidence-publish-review",
        "grading_method": "deterministic_key",
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
            "text": "Dữ kiện quyết định nằm ở cấu trúc bị mất, không ở tổng số từ.",
            "hint_id": "h1",
            "after_attempt": 1
          }
        ],
        "module_id": "day10-g-ingestion",
        "max_points": 4,
        "interaction": {
          "type": "short_text",
          "prompt": "Bối cảnh:\nOCR page có confidence .91, text length bình thường nhưng bảng giá bị mất cột “đơn vị”; original visual còn đủ.\n\nCâu hỏi:\nChọn disposition, evidence giữ lại và exit criterion trước embed."
        },
        "question_id": "d10-q029",
        "primary_kc_id": "kc-ocr-confidence-publish-review",
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
            "text": "Tính chênh rate rồi nhân thời gian.",
            "hint_id": "h1",
            "after_attempt": 1
          }
        ],
        "module_id": "day10-g-ingestion",
        "max_points": 1,
        "interaction": {
          "type": "numeric_input",
          "prompt": "Producer=120 event/s, consumer=90 event/s, không scale trong 60s. Queue depth tăng bao nhiêu?",
          "required_unit": "event"
        },
        "question_id": "d10-q030",
        "primary_kc_id": "kc-queue-producer-consumer-decoupling",
        "grading_method": "deterministic_key",
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
            "text": "Ack nào chỉ xác nhận accepted, ack nào xác nhận processed?",
            "hint_id": "h1",
            "after_attempt": 1
          }
        ],
        "module_id": "day10-g-ingestion",
        "max_points": 4,
        "interaction": {
          "type": "short_text",
          "prompt": "Bối cảnh:\nWebhook cần trả 202 trong 200ms; transform mất 2s/event và có thể fail.\n\nCâu hỏi:\nĐặt queue/ack boundary và nêu monitor cùng failure policy."
        },
        "question_id": "d10-q031",
        "primary_kc_id": "kc-queue-producer-consumer-decoupling",
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
            "text": "Queue không rỗng chưa đủ; nhìn trend và rate.",
            "hint_id": "h1",
            "after_attempt": 1
          }
        ],
        "module_id": "day10-g-ingestion",
        "max_points": 1,
        "interaction": {
          "type": "single_select",
          "prompt": "Producer=150/s, consumer=100/s; depth tăng liên tục và vượt threshold. Chẩn đoán?",
          "choices": [
            {
              "text": "Sustained backpressure; signal producer giảm intake/scale consumer",
              "choice_id": "a"
            },
            {
              "text": "Queue bình thường vì chưa rỗng",
              "choice_id": "b"
            },
            {
              "text": "Retry mọi message",
              "choice_id": "c"
            },
            {
              "text": "Accuracy drift",
              "choice_id": "d"
            }
          ],
          "presentation_policy": {
            "shuffle_at_delivery": true,
            "do_not_expose_choice_ids": true
          }
        },
        "question_id": "d10-q032",
        "primary_kc_id": "kc-ingestion-backpressure-control",
        "grading_method": "deterministic_key",
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
            "text": "Tín hiệu cần quay ngược về producer, không chỉ dashboard.",
            "hint_id": "h1",
            "after_attempt": 1
          }
        ],
        "module_id": "day10-g-ingestion",
        "max_points": 4,
        "interaction": {
          "type": "short_text",
          "prompt": "Bối cảnh:\nDepth 1k→4k→9k trong 3 phút; threshold=5k, producer 200/s, consumer 120/s.\n\nCâu hỏi:\nThiết kế control và user-visible consequence."
        },
        "question_id": "d10-q033",
        "primary_kc_id": "kc-ingestion-backpressure-control",
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
            "text": "Không replay trước khi biết nguyên nhân vẫn tồn tại.",
            "hint_id": "h1",
            "after_attempt": 1
          }
        ],
        "module_id": "day10-g-ingestion",
        "max_points": 5,
        "interaction": {
          "type": "ordering",
          "prompt": "Sắp poison-message workflow.",
          "options": [
            {
              "text": "Replay có chủ đích sau fix",
              "option_id": "o1"
            },
            {
              "text": "Process message",
              "option_id": "o2"
            },
            {
              "text": "Bounded retries theo eligibility",
              "option_id": "o3"
            },
            {
              "text": "Đưa failed event + reason/run vào DLQ",
              "option_id": "o4"
            },
            {
              "text": "Inspect/ticket/fix",
              "option_id": "o5"
            }
          ],
          "presentation_policy": {
            "do_not_expose_option_ids": true,
            "shuffle_initial_order_at_delivery": true
          }
        },
        "question_id": "d10-q034",
        "primary_kc_id": "kc-poison-message-dlq-recovery",
        "grading_method": "deterministic_key",
        "question_version": 1,
        "cognitive_operation": "Analyze",
        "contributing_kc_ids": [],
        "estimated_difficulty": "medium"
      },
      {
        "servable": true,
        "role": "reassessment",
        "hints": [
          {
            "text": "Mục tiêu vừa unblock healthy work vừa không mất failed event.",
            "hint_id": "h1",
            "after_attempt": 1
          }
        ],
        "module_id": "day10-g-ingestion",
        "max_points": 1,
        "interaction": {
          "type": "single_select",
          "prompt": "Một event fail schema y hệt 3 lần; healthy events bị chặn sau nó. Hành động?",
          "choices": [
            {
              "text": "Route event vào DLQ có reason, tiếp tục queue, sửa rồi replay",
              "choice_id": "a"
            },
            {
              "text": "Retry vô hạn",
              "choice_id": "b"
            },
            {
              "text": "Drop không log",
              "choice_id": "c"
            },
            {
              "text": "DLQ mọi event ngay lần đầu",
              "choice_id": "d"
            }
          ],
          "presentation_policy": {
            "shuffle_at_delivery": true,
            "do_not_expose_choice_ids": true
          }
        },
        "question_id": "d10-q035",
        "primary_kc_id": "kc-poison-message-dlq-recovery",
        "grading_method": "deterministic_key",
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
            "text": "Sau khi root cause được sửa, event còn cần đi đâu?",
            "hint_id": "h1",
            "after_attempt": 1
          }
        ],
        "module_id": "day10-g-ingestion",
        "max_points": 1,
        "interaction": {
          "type": "single_select",
          "prompt": "Event đã ở DLQ. Phát biểu nào đúng?",
          "choices": [
            {
              "text": "DLQ giữ evidence để inspect/fix rồi replay có chủ đích",
              "choice_id": "a"
            },
            {
              "text": "DLQ chứng minh event phải bị xóa vĩnh viễn",
              "choice_id": "b"
            },
            {
              "text": "DLQ tự sửa schema",
              "choice_id": "c"
            },
            {
              "text": "DLQ cho phép bỏ reason và run ID",
              "choice_id": "d"
            }
          ],
          "presentation_policy": {
            "shuffle_at_delivery": true,
            "do_not_expose_choice_ids": true
          }
        },
        "question_id": "d10-q036",
        "primary_kc_id": "kc-poison-message-dlq-recovery",
        "grading_method": "deterministic_key",
        "question_version": 1,
        "cognitive_operation": "Analyze",
        "contributing_kc_ids": [],
        "estimated_difficulty": "medium"
      },
      {
        "servable": false,
        "role": "initial_check",
        "hints": [
          {
            "text": "Một thay đổi không được mã hóa sẽ biến mất ở lần chạy sau.",
            "hint_id": "h1",
            "after_attempt": 1
          }
        ],
        "module_id": "day10-g-transform",
        "max_points": 4,
        "interaction": {
          "type": "short_text",
          "prompt": "Bối cảnh:\nRaw row R1 được giữ. Run A trim whitespace và normalize date bằng code v3; operator sau đó sửa canonical CSV bằng tay. Run B từ raw/code v3 làm mất sửa tay.\n\nCâu hỏi:\nChẩn đoán và thiết kế replay/audit đúng."
        },
        "question_id": "d10-q037",
        "primary_kc_id": "kc-deterministic-replayable-cleaning",
        "grading_method": "criterion_rubric",
        "question_version": 1,
        "cognitive_operation": "Analyze",
        "contributing_kc_ids": [],
        "estimated_difficulty": "hard"
      },
      {
        "servable": true,
        "role": "reassessment",
        "hints": [
          {
            "text": "Một người khác phải rerun mà không hỏi người sửa.",
            "hint_id": "h1",
            "after_attempt": 1
          }
        ],
        "module_id": "day10-g-transform",
        "max_points": 4,
        "interaction": {
          "type": "multi_select",
          "prompt": "Những điều kiện nào chứng minh cleaning replayable?",
          "choices": [
            {
              "text": "Raw input/version được giữ",
              "choice_id": "a"
            },
            {
              "text": "Rule nằm trong code/contract versioned",
              "choice_id": "b"
            },
            {
              "text": "Cùng input+rule tạo cùng output",
              "choice_id": "c"
            },
            {
              "text": "Có run/before-after lineage",
              "choice_id": "d"
            },
            {
              "text": "Operator nhớ đã sửa gì",
              "choice_id": "e"
            }
          ],
          "presentation_policy": {
            "shuffle_at_delivery": true,
            "do_not_expose_choice_ids": true
          },
          "selection_instruction": "Chọn tất cả phương án đúng."
        },
        "question_id": "d10-q038",
        "primary_kc_id": "kc-deterministic-replayable-cleaning",
        "grading_method": "deterministic_key",
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
            "text": "Không có một default chung cho mọi null.",
            "hint_id": "h1",
            "after_attempt": 1
          }
        ],
        "module_id": "day10-g-transform",
        "max_points": 4,
        "interaction": {
          "left": [
            {
              "id": "x1",
              "text": "required title rỗng sau trim"
            },
            {
              "id": "x2",
              "text": "optional nickname null"
            },
            {
              "id": "x3",
              "text": "event_date thiếu nhưng source authority có signed timestamp"
            },
            {
              "id": "x4",
              "text": "effective_date thiếu và không source nào xác nhận"
            }
          ],
          "type": "matching",
          "right": [
            {
              "id": "r1",
              "text": "Reject/quarantine theo severity"
            },
            {
              "id": "r2",
              "text": "Warn/allow null"
            },
            {
              "id": "r3",
              "text": "Derive có lineage"
            },
            {
              "id": "r4",
              "text": "Quarantine unresolved, không đoán"
            }
          ],
          "prompt": "Ghép missing field với disposition theo contract.",
          "presentation_policy": {
            "do_not_align_pairs_by_row": true,
            "shuffle_right_at_delivery": true,
            "do_not_expose_internal_ids": true
          }
        },
        "question_id": "d10-q039",
        "primary_kc_id": "kc-required-field-missingness-policy",
        "grading_method": "deterministic_key",
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
            "text": "Chấm từng field theo contract trước khi chấm cả row.",
            "hint_id": "h1",
            "after_attempt": 1
          }
        ],
        "module_id": "day10-g-transform",
        "max_points": 4,
        "interaction": {
          "type": "short_text",
          "prompt": "Bối cảnh:\nContract: `ticket_id` required; `closed_at` optional khi status=open; `created_at` có thể derive từ signed event timestamp. Row status=open thiếu cả ba field.\n\nCâu hỏi:\nChọn disposition riêng cho từng field và nêu lineage cần giữ."
        },
        "question_id": "d10-q040",
        "primary_kc_id": "kc-required-field-missingness-policy",
        "grading_method": "criterion_rubric",
        "question_version": 1,
        "cognitive_operation": "Analyze",
        "contributing_kc_ids": [],
        "estimated_difficulty": "hard"
      },
      {
        "servable": false,
        "role": "initial_check",
        "hints": [
          {
            "text": "Tách format parsing khỏi việc chứng minh locale của row.",
            "hint_id": "h1",
            "after_attempt": 1
          }
        ],
        "module_id": "day10-g-transform",
        "max_points": 4,
        "interaction": {
          "type": "short_text",
          "prompt": "Bối cảnh:\nContract nhận ISO `YYYY-MM-DD`; với ngày dạng slash thì locale phải lấy từ source metadata và emit ISO. Inputs: `2026-04-05`; `05/04/2026` có locale vi; `04/05/2026` thiếu locale provenance.\n\nCâu hỏi:\nCanonicalize những gì được support và xử lý row cuối."
        },
        "question_id": "d10-q041",
        "primary_kc_id": "kc-date-format-canonicalization",
        "grading_method": "criterion_rubric",
        "question_version": 1,
        "cognitive_operation": "Apply",
        "contributing_kc_ids": [],
        "estimated_difficulty": "hard"
      },
      {
        "servable": true,
        "role": "reassessment",
        "hints": [
          {
            "text": "Valid syntax không đồng nghĩa unambiguous.",
            "hint_id": "h1",
            "after_attempt": 1
          }
        ],
        "module_id": "day10-g-transform",
        "max_points": 1,
        "interaction": {
          "type": "single_select",
          "prompt": "Input `03/04/2026` không có locale, contract cho phép cả MM/DD và DD/MM. Xử lý?",
          "choices": [
            {
              "text": "Flag ambiguous/quarantine; giữ raw",
              "choice_id": "a"
            },
            {
              "text": "Chọn 3 April mặc định",
              "choice_id": "b"
            },
            {
              "text": "Chọn March 4 theo server locale",
              "choice_id": "c"
            },
            {
              "text": "Lấy ngày hiện tại",
              "choice_id": "d"
            }
          ],
          "presentation_policy": {
            "shuffle_at_delivery": true,
            "do_not_expose_choice_ids": true
          }
        },
        "question_id": "d10-q042",
        "primary_kc_id": "kc-date-format-canonicalization",
        "grading_method": "deterministic_key",
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
            "text": "Chỉ normalize equivalence; không invent intended text.",
            "hint_id": "h1",
            "after_attempt": 1
          }
        ],
        "module_id": "day10-g-transform",
        "max_points": 4,
        "interaction": {
          "left": [
            {
              "id": "x1",
              "text": "`e` + combining acute và `é`"
            },
            {
              "id": "x2",
              "text": "Nhiều khoảng trắng tương đương"
            },
            {
              "id": "x3",
              "text": "Text chứa `�` do lost bytes"
            },
            {
              "id": "x4",
              "text": "Mojibake `Tiáº¿ng` không có raw bytes"
            }
          ],
          "type": "matching",
          "right": [
            {
              "id": "r1",
              "text": "Unicode normalization"
            },
            {
              "id": "r2",
              "text": "Whitespace normalization"
            },
            {
              "id": "r3",
              "text": "Quarantine/recover từ raw bytes"
            },
            {
              "id": "r4",
              "text": "Unrecoverable review, không đoán"
            }
          ],
          "prompt": "Ghép case với hành động.",
          "presentation_policy": {
            "do_not_align_pairs_by_row": true,
            "shuffle_right_at_delivery": true,
            "do_not_expose_internal_ids": true
          }
        },
        "question_id": "d10-q043",
        "primary_kc_id": "kc-unicode-encoding-normalization",
        "grading_method": "deterministic_key",
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
            "text": "Đừng sửa từ chuỗi hỏng nếu raw/visual còn là authority.",
            "hint_id": "h1",
            "after_attempt": 1
          }
        ],
        "module_id": "day10-g-transform",
        "max_points": 4,
        "interaction": {
          "type": "short_text",
          "prompt": "Bối cảnh:\nTên `Nguyễn` ở raw bytes decode đúng; một pipeline trung gian thành `Nguyá»…n`; visual source còn nguyên.\n\nCâu hỏi:\nThiết kế recovery và lineage."
        },
        "question_id": "d10-q044",
        "primary_kc_id": "kc-unicode-encoding-normalization",
        "grading_method": "criterion_rubric",
        "question_version": 1,
        "cognitive_operation": "Create",
        "contributing_kc_ids": [],
        "estimated_difficulty": "medium"
      },
      {
        "servable": false,
        "role": "initial_check",
        "hints": [
          {
            "text": "Cùng order chưa chắc là cùng event/version.",
            "hint_id": "h1",
            "after_attempt": 1
          }
        ],
        "module_id": "day10-g-transform",
        "max_points": 4,
        "interaction": {
          "type": "short_text",
          "prompt": "Bối cảnh:\nCác dòng: A `(order=7,version=1,status=pending)`, B `(7,2,paid)`, C `(8,1,paid)`, D `(7,2,paid)` từ cùng source/hash.\n\nCâu hỏi:\nĐịnh nghĩa key, phân biệt version với duplicate, chọn survivor và audit."
        },
        "question_id": "d10-q045",
        "primary_kc_id": "kc-business-key-duplicate-resolution",
        "grading_method": "criterion_rubric",
        "question_version": 1,
        "cognitive_operation": "Analyze",
        "contributing_kc_ids": [],
        "estimated_difficulty": "hard"
      },
      {
        "servable": true,
        "role": "reassessment",
        "hints": [
          {
            "text": "Consumer coi hai events là một hay hai?",
            "hint_id": "h1",
            "after_attempt": 1
          }
        ],
        "module_id": "day10-g-transform",
        "max_points": 1,
        "interaction": {
          "type": "single_select",
          "prompt": "Hai event hợp lệ cùng customer và amount nhưng event_id/time khác. Có dedupe theo `(customer,amount)` không?",
          "choices": [
            {
              "text": "Không; key đó gộp các lần lặp hợp lệ, cần event/business identity theo contract",
              "choice_id": "a"
            },
            {
              "text": "Có vì content gần giống",
              "choice_id": "b"
            },
            {
              "text": "Có nếu giữ row đầu",
              "choice_id": "c"
            },
            {
              "text": "Tạo random UUID rồi gọi unique",
              "choice_id": "d"
            }
          ],
          "presentation_policy": {
            "shuffle_at_delivery": true,
            "do_not_expose_choice_ids": true
          }
        },
        "question_id": "d10-q046",
        "primary_kc_id": "kc-business-key-duplicate-resolution",
        "grading_method": "deterministic_key",
        "question_version": 1,
        "cognitive_operation": "Analyze",
        "contributing_kc_ids": [],
        "estimated_difficulty": "easy"
      },
      {
        "servable": false,
        "role": "initial_check",
        "hints": [
          {
            "text": "Mỗi native field cần một declared mapping, không phải đoán tên.",
            "hint_id": "h1",
            "after_attempt": 1
          }
        ],
        "module_id": "day10-g-transform",
        "max_points": 4,
        "interaction": {
          "type": "short_text",
          "prompt": "Bối cảnh:\nCanonical schema: `id:str required`, `priority∈{P1,P2,P3}`, `created_at:ISO date`. Parsed row `{ticket_id:42, urgency:\"high\", date:\"05/04/2026\"}`; mapping contract `ticket_id→id(str)`, `high→P1`, locale vi.\n\nCâu hỏi:\nMap, validate và báo kết quả."
        },
        "question_id": "d10-q047",
        "primary_kc_id": "kc-canonical-schema-validation",
        "grading_method": "criterion_rubric",
        "question_version": 1,
        "cognitive_operation": "Apply",
        "contributing_kc_ids": [],
        "estimated_difficulty": "hard"
      },
      {
        "servable": true,
        "role": "reassessment",
        "hints": [
          {
            "text": "Syntax parse và schema validity là hai lớp khác nhau.",
            "hint_id": "h1",
            "after_attempt": 1
          }
        ],
        "module_id": "day10-g-transform",
        "max_points": 2,
        "interaction": {
          "type": "multi_select",
          "prompt": "Record `{id:\"T1\", priority:\"P9\", created_at:\"yesterday\"}` vi phạm gì?",
          "choices": [
            {
              "text": "priority allowed-domain",
              "choice_id": "a"
            },
            {
              "text": "created_at format/type contract",
              "choice_id": "b"
            },
            {
              "text": "JSON syntax",
              "choice_id": "c"
            },
            {
              "text": "required id",
              "choice_id": "d"
            }
          ],
          "presentation_policy": {
            "shuffle_at_delivery": true,
            "do_not_expose_choice_ids": true
          },
          "selection_instruction": "Chọn tất cả phương án đúng."
        },
        "question_id": "d10-q048",
        "primary_kc_id": "kc-canonical-schema-validation",
        "grading_method": "deterministic_key",
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
            "text": "Quarantine là reviewable uncertainty; reject là hard unrecoverable violation.",
            "hint_id": "h1",
            "after_attempt": 1
          }
        ],
        "module_id": "day10-g-transform",
        "max_points": 4,
        "interaction": {
          "left": [
            {
              "id": "x1",
              "text": "Whitespace thừa, reversible"
            },
            {
              "id": "x2",
              "text": "Required business ID mất, không recover"
            },
            {
              "id": "x3",
              "text": "OCR đọc mờ nhưng visual còn review được"
            },
            {
              "id": "x4",
              "text": "Optional note quá dài, downstream không dùng"
            }
          ],
          "type": "matching",
          "right": [
            {
              "id": "r1",
              "text": "Clean"
            },
            {
              "id": "r2",
              "text": "Reject"
            },
            {
              "id": "r3",
              "text": "Quarantine"
            },
            {
              "id": "r4",
              "text": "Warn"
            }
          ],
          "prompt": "Ghép violation với disposition hợp lý theo contract.",
          "presentation_policy": {
            "do_not_align_pairs_by_row": true,
            "shuffle_right_at_delivery": true,
            "do_not_expose_internal_ids": true
          }
        },
        "question_id": "d10-q049",
        "primary_kc_id": "kc-record-disposition-policy",
        "grading_method": "deterministic_key",
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
            "text": "Tách “sửa chắc chắn được”, “không recover”, “cần người xem” và “soft issue”.",
            "hint_id": "h1",
            "after_attempt": 1
          }
        ],
        "module_id": "day10-g-transform",
        "max_points": 4,
        "interaction": {
          "type": "short_text",
          "prompt": "Bối cảnh:\nMột batch có: A chỉ thừa whitespace; B mất required account_id không nguồn khôi phục; C OCR amount mờ nhưng visual còn; D optional comment dài hơn soft limit.\n\nCâu hỏi:\nChọn disposition cho A–D và nêu hệ quả ở tầng sau."
        },
        "question_id": "d10-q050",
        "primary_kc_id": "kc-record-disposition-policy",
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
            "text": "Reviewer phải biết record nào, từ đâu, vì sao và làm tiếp gì.",
            "hint_id": "h1",
            "after_attempt": 1
          }
        ],
        "module_id": "day10-g-transform",
        "max_points": 4,
        "interaction": {
          "type": "multi_select",
          "prompt": "Quarantine entry cần giữ gì để recover/audit?",
          "choices": [
            {
              "text": "Original row hoặc immutable reference",
              "choice_id": "a"
            },
            {
              "text": "Rule/reason và failed evidence",
              "choice_id": "b"
            },
            {
              "text": "Source identity + run ID",
              "choice_id": "c"
            },
            {
              "text": "Review owner/status + replay decision",
              "choice_id": "d"
            },
            {
              "text": "Chỉ filename `bad.csv`",
              "choice_id": "e"
            }
          ],
          "presentation_policy": {
            "shuffle_at_delivery": true,
            "do_not_expose_choice_ids": true
          },
          "selection_instruction": "Chọn tất cả phương án đúng."
        },
        "question_id": "d10-q051",
        "primary_kc_id": "kc-quarantine-audit-trail",
        "grading_method": "deterministic_key",
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
            "text": "Replay cần chứng minh điều gì đã thay đổi kể từ lúc fail?",
            "hint_id": "h1",
            "after_attempt": 1
          }
        ],
        "module_id": "day10-g-transform",
        "max_points": 4,
        "interaction": {
          "type": "short_text",
          "prompt": "Bối cảnh:\nMột CSV `dropped_rows.csv` chỉ chứa canonical rows, không raw/source/run/reason.\n\nCâu hỏi:\nThiết kế schema quarantine và replay guard."
        },
        "question_id": "d10-q052",
        "primary_kc_id": "kc-quarantine-audit-trail",
        "grading_method": "criterion_rubric",
        "question_version": 1,
        "cognitive_operation": "Create",
        "contributing_kc_ids": [],
        "estimated_difficulty": "hard"
      },
      {
        "servable": false,
        "role": "initial_check",
        "hints": [
          {
            "text": "Tính hai tỷ lệ với hai mẫu số khác nhau.",
            "hint_id": "h1",
            "after_attempt": 1
          }
        ],
        "module_id": "day10-g-quality",
        "max_points": 4,
        "interaction": {
          "type": "short_text",
          "prompt": "Bối cảnh:\nContract kỳ vọng 100 bản ghi, mỗi bản ghi cần `id,email`. Lần chạy có 90 bản ghi; 81 bản ghi có cả hai trường, 9 bản ghi thiếu email.\n\nCâu hỏi:\nTính độ bao phủ bản ghi và độ đầy đủ trường email trên các bản ghi đã nhận; nêu điều chưa được chứng minh."
        },
        "question_id": "d10-q053",
        "primary_kc_id": "kc-data-completeness-check",
        "grading_method": "criterion_rubric",
        "question_version": 1,
        "cognitive_operation": "Apply",
        "contributing_kc_ids": [],
        "estimated_difficulty": "medium"
      },
      {
        "servable": true,
        "role": "reassessment",
        "hints": [
          {
            "text": "Dùng số phân vùng dự kiến làm mẫu số.",
            "hint_id": "h1",
            "after_attempt": 1
          }
        ],
        "module_id": "day10-g-quality",
        "max_points": 1,
        "interaction": {
          "type": "numeric_input",
          "prompt": "Có 240 phân vùng dự kiến, 228 phân vùng xuất hiện. Độ bao phủ phân vùng là bao nhiêu?",
          "required_unit": "%"
        },
        "question_id": "d10-q054",
        "primary_kc_id": "kc-data-completeness-check",
        "grading_method": "deterministic_key",
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
            "text": "Chỉ chấm rule được cung cấp.",
            "hint_id": "h1",
            "after_attempt": 1
          }
        ],
        "module_id": "day10-g-quality",
        "max_points": 3,
        "interaction": {
          "type": "multi_select",
          "prompt": "Schema: age integer 0..120, email chứa @, status∈{active,inactive}. Bản ghi `{age:150,email:\"a@b\",status:\"active\"}`. Kết luận đúng?",
          "choices": [
            {
              "text": "Tuổi không hợp lệ vì vượt khoảng cho phép",
              "choice_id": "a"
            },
            {
              "text": "Email hợp lệ theo rule đã nêu",
              "choice_id": "b"
            },
            {
              "text": "Trạng thái hợp lệ",
              "choice_id": "c"
            },
            {
              "text": "Bản ghi chính xác ngoài thực tế",
              "choice_id": "d"
            }
          ],
          "presentation_policy": {
            "shuffle_at_delivery": true,
            "do_not_expose_choice_ids": true
          },
          "selection_instruction": "Chọn tất cả phương án đúng."
        },
        "question_id": "d10-q055",
        "primary_kc_id": "kc-data-validity-check",
        "grading_method": "deterministic_key",
        "question_version": 1,
        "cognitive_operation": "Understand",
        "contributing_kc_ids": [],
        "estimated_difficulty": "easy"
      },
      {
        "servable": false,
        "role": "reassessment",
        "hints": [
          {
            "text": "Chuỗi có hình dạng ngày chưa chắc biểu diễn một ngày tồn tại.",
            "hint_id": "h1",
            "after_attempt": 1
          }
        ],
        "module_id": "day10-g-quality",
        "max_points": 4,
        "interaction": {
          "type": "short_text",
          "prompt": "Bối cảnh:\nGiá trị `2026-02-30` đúng regex `YYYY-MM-DD` nhưng không phải ngày lịch hợp lệ.\n\nCâu hỏi:\nThiết kế expectation và báo cáo vi phạm."
        },
        "question_id": "d10-q056",
        "primary_kc_id": "kc-data-validity-check",
        "grading_method": "criterion_rubric",
        "question_version": 1,
        "cognitive_operation": "Create",
        "contributing_kc_ids": [],
        "estimated_difficulty": "medium"
      },
      {
        "servable": false,
        "role": "initial_check",
        "hints": [
          {
            "text": "Một đơn hàng có thể có nhiều dòng hàng hợp lệ.",
            "hint_id": "h1",
            "after_attempt": 1
          }
        ],
        "module_id": "day10-g-quality",
        "max_points": 4,
        "interaction": {
          "type": "short_text",
          "prompt": "Bối cảnh:\nCác dòng `(order_id,line_id)`: (1,A),(1,B),(1,A),(2,A). Contract: mỗi dòng hàng là duy nhất trong một đơn hàng.\n\nCâu hỏi:\nChọn khóa, tính số nhóm trùng và số dòng dư."
        },
        "question_id": "d10-q057",
        "primary_kc_id": "kc-data-uniqueness-check",
        "grading_method": "criterion_rubric",
        "question_version": 1,
        "cognitive_operation": "Apply",
        "contributing_kc_ids": [],
        "estimated_difficulty": "medium"
      },
      {
        "servable": true,
        "role": "reassessment",
        "hints": [
          {
            "text": "Người dùng dữ liệu cần mỗi thực thể nghiệp vụ xuất hiện một lần theo định danh nào?",
            "hint_id": "h1",
            "after_attempt": 1
          }
        ],
        "module_id": "day10-g-quality",
        "max_points": 1,
        "interaction": {
          "type": "single_select",
          "prompt": "UUID được tạo cho mỗi dòng đều khác nhau nhưng cùng một hóa đơn xuất hiện hai lần. Kết luận nào đúng?",
          "choices": [
            {
              "text": "Kiểm tra UUID không đo tính duy nhất của hóa đơn; phải dùng định danh và phạm vi của invoice",
              "choice_id": "a"
            },
            {
              "text": "Toàn bộ dữ liệu là duy nhất",
              "choice_id": "b"
            },
            {
              "text": "Xóa ngẫu nhiên một dòng",
              "choice_id": "c"
            },
            {
              "text": "Độ chính xác đã đạt",
              "choice_id": "d"
            }
          ],
          "presentation_policy": {
            "shuffle_at_delivery": true,
            "do_not_expose_choice_ids": true
          }
        },
        "question_id": "d10-q058",
        "primary_kc_id": "kc-data-uniqueness-check",
        "grading_method": "deterministic_key",
        "question_version": 1,
        "cognitive_operation": "Understand",
        "contributing_kc_ids": [],
        "estimated_difficulty": "easy"
      },
      {
        "servable": false,
        "role": "initial_check",
        "hints": [
          {
            "text": "Có hai invariant độc lập trong scenario.",
            "hint_id": "h1",
            "after_attempt": 1
          }
        ],
        "module_id": "day10-g-quality",
        "max_points": 4,
        "interaction": {
          "type": "short_text",
          "prompt": "Bối cảnh:\nOrder.total=120; tổng các dòng là 50+60; đơn vị tiền đều là VND. Trạng thái CRM là paid, trạng thái sổ cái là pending; sổ cái là nguồn có thẩm quyền cho thanh toán.\n\nCâu hỏi:\nNêu các điểm không nhất quán và nguồn dùng để giải quyết."
        },
        "question_id": "d10-q059",
        "primary_kc_id": "kc-data-consistency-check",
        "grading_method": "criterion_rubric",
        "question_version": 1,
        "cognitive_operation": "Analyze",
        "contributing_kc_ids": [],
        "estimated_difficulty": "hard"
      },
      {
        "servable": true,
        "role": "reassessment",
        "hints": [
          {
            "text": "Consistency hỏi các phần liên quan có đồng ý theo invariant không.",
            "hint_id": "h1",
            "after_attempt": 1
          }
        ],
        "module_id": "day10-g-quality",
        "max_points": 3,
        "interaction": {
          "type": "multi_select",
          "prompt": "Những check nào là consistency check cho dataset orders?",
          "choices": [
            {
              "text": "`order.total = sum(line.amount)` cùng currency",
              "choice_id": "a"
            },
            {
              "text": "Mọi `customer_id` tham chiếu customer tồn tại",
              "choice_id": "b"
            },
            {
              "text": "Cùng order_id có status nhất quán giữa hai representation cùng thời điểm",
              "choice_id": "c"
            },
            {
              "text": "Email chứa ký tự @",
              "choice_id": "d"
            },
            {
              "text": "`order.total` nằm trong allowed range 0..1.000.000.000",
              "choice_id": "e"
            }
          ],
          "presentation_policy": {
            "shuffle_at_delivery": true,
            "do_not_expose_choice_ids": true
          },
          "selection_instruction": "Chọn tất cả phương án đúng."
        },
        "question_id": "d10-q060",
        "primary_kc_id": "kc-data-consistency-check",
        "grading_method": "deterministic_key",
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
            "text": "Clock dừng ở publish boundary, không ở job start.",
            "hint_id": "h1",
            "after_attempt": 1
          }
        ],
        "module_id": "day10-g-quality",
        "max_points": 1,
        "interaction": {
          "type": "numeric_input",
          "prompt": "Source event 09:00, record được publish cho consumer 09:18. SLA tối đa 15 phút. Lag?",
          "required_unit": "phút"
        },
        "question_id": "d10-q061",
        "primary_kc_id": "kc-data-timeliness-check",
        "grading_method": "deterministic_key",
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
            "text": "Người dùng dữ liệu chưa nhìn thấy bản ghi tại thời điểm làm sạch xong.",
            "hint_id": "h1",
            "after_attempt": 1
          }
        ],
        "module_id": "day10-g-quality",
        "max_points": 4,
        "interaction": {
          "type": "short_text",
          "prompt": "Bối cảnh:\nNguồn có hiệu lực lúc 10:00, job bắt đầu 10:01, làm sạch xong 10:04, xuất bản 10:22; SLA là 10 phút. Dashboard chỉ báo thời gian chạy job là 3 phút.\n\nCâu hỏi:\nTính đúng thời gian trễ và phân loại kết quả."
        },
        "question_id": "d10-q062",
        "primary_kc_id": "kc-data-timeliness-check",
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
            "text": "Ai có thẩm quyền công bố thông tin này?",
            "hint_id": "h1",
            "after_attempt": 1
          }
        ],
        "module_id": "day10-g-quality",
        "max_points": 1,
        "interaction": {
          "type": "single_select",
          "prompt": "Có ba bản ghi lương: bảng tính của nhân viên, CRM đã lưu đệm và sổ lương đã ký đang có hiệu lực. Nguồn nào là nguồn tham chiếu?",
          "choices": [
            {
              "text": "Sổ lương đã ký, theo đúng thẩm quyền và thời điểm hiệu lực",
              "choice_id": "a"
            },
            {
              "text": "Bản xuất hiện hai lần",
              "choice_id": "b"
            },
            {
              "text": "Bảng tính có định dạng đẹp",
              "choice_id": "c"
            },
            {
              "text": "Giá trị nằm trong khoảng cho phép",
              "choice_id": "d"
            }
          ],
          "presentation_policy": {
            "shuffle_at_delivery": true,
            "do_not_expose_choice_ids": true
          }
        },
        "question_id": "d10-q063",
        "primary_kc_id": "kc-data-accuracy-source-of-truth",
        "grading_method": "deterministic_key",
        "question_version": 1,
        "cognitive_operation": "Understand",
        "contributing_kc_ids": [],
        "estimated_difficulty": "easy"
      },
      {
        "servable": false,
        "role": "reassessment",
        "hints": [
          {
            "text": "Đừng so hai value mà bỏ ngày chúng có hiệu lực.",
            "hint_id": "h1",
            "after_attempt": 1
          }
        ],
        "module_id": "day10-g-quality",
        "max_points": 4,
        "interaction": {
          "type": "short_text",
          "prompt": "Bối cảnh:\nTrang policy có thẩm quyền ghi hạn mức 5 triệu có hiệu lực từ 1/6; PDF lưu đệm ghi hạn mức 3 triệu có hiệu lực trước đó. Trường hợp ngày 15/6 có giá trị 3 triệu.\n\nCâu hỏi:\nPhân loại chính xác, không chính xác hoặc chưa thể kết luận; đồng thời giữ lại xung đột."
        },
        "question_id": "d10-q064",
        "primary_kc_id": "kc-data-accuracy-source-of-truth",
        "grading_method": "criterion_rubric",
        "question_version": 1,
        "cognitive_operation": "Evaluate",
        "contributing_kc_ids": [],
        "estimated_difficulty": "medium"
      },
      {
        "servable": false,
        "role": "initial_check",
        "hints": [
          {
            "text": "Điều chưa được business xác nhận phải trở thành một field quyết định, không thành con số giả.",
            "hint_id": "h1",
            "after_attempt": 1
          }
        ],
        "module_id": "day10-g-quality",
        "max_points": 4,
        "interaction": {
          "type": "short_text",
          "prompt": "Bối cảnh:\nDataset `tickets` phục vụ trợ lý SLA. Bộ phận nghiệp vụ chưa xác nhận ngưỡng freshness.\n\nCâu hỏi:\nViết contract có thể vận hành được nhưng không tự đặt ngưỡng."
        },
        "question_id": "d10-q065",
        "primary_kc_id": "kc-actionable-data-contract-authoring",
        "grading_method": "criterion_rubric",
        "question_version": 1,
        "cognitive_operation": "Create",
        "contributing_kc_ids": [],
        "estimated_difficulty": "hard"
      },
      {
        "servable": true,
        "role": "reassessment",
        "hints": [
          {
            "text": "Một operator phải biết check gì và làm gì khi fail.",
            "hint_id": "h1",
            "after_attempt": 1
          }
        ],
        "module_id": "day10-g-quality",
        "max_points": 4,
        "interaction": {
          "type": "multi_select",
          "prompt": "Những thành phần nào làm contract đủ actionable để validator/operator dùng?",
          "choices": [
            {
              "text": "Có canonical schema, required/domain và identity key",
              "choice_id": "a"
            },
            {
              "text": "Có owner và authoritative source",
              "choice_id": "b"
            },
            {
              "text": "Mỗi violation có severity/consequence",
              "choice_id": "c"
            },
            {
              "text": "Unknown freshness ghi decision owner thay vì tự điền",
              "choice_id": "d"
            },
            {
              "text": "Chỉ có mô tả “data phải sạch”",
              "choice_id": "e"
            }
          ],
          "presentation_policy": {
            "shuffle_at_delivery": true,
            "do_not_expose_choice_ids": true
          },
          "selection_instruction": "Chọn tất cả phương án đúng."
        },
        "question_id": "d10-q066",
        "primary_kc_id": "kc-actionable-data-contract-authoring",
        "grading_method": "deterministic_key",
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
            "text": "Field thêm chỉ safe khi optional/default và consumer contract cho phép.",
            "hint_id": "h1",
            "after_attempt": 1
          }
        ],
        "module_id": "day10-g-quality",
        "max_points": 4,
        "interaction": {
          "left": [
            {
              "id": "x1",
              "text": "Thêm optional `locale` có default"
            },
            {
              "id": "x2",
              "text": "Rename `user_id`→`customer_id` khi consumer chưa đổi"
            },
            {
              "id": "x3",
              "text": "Đổi `amount` string→decimal"
            },
            {
              "id": "x4",
              "text": "Giữ tên `status` nhưng đổi meaning"
            }
          ],
          "type": "matching",
          "right": [
            {
              "id": "r1",
              "text": "Additive có thể compatible"
            },
            {
              "id": "r2",
              "text": "Breaking rename"
            },
            {
              "id": "r3",
              "text": "Breaking type"
            },
            {
              "id": "r4",
              "text": "Semantic breaking change"
            }
          ],
          "prompt": "Ghép schema change với compatibility class.",
          "presentation_policy": {
            "do_not_align_pairs_by_row": true,
            "shuffle_right_at_delivery": true,
            "do_not_expose_internal_ids": true
          }
        },
        "question_id": "d10-q067",
        "primary_kc_id": "kc-schema-evolution-compatibility-plan",
        "grading_method": "deterministic_key",
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
            "text": "Thiết kế giai đoạn mà old/new consumer cùng chạy.",
            "hint_id": "h1",
            "after_attempt": 1
          }
        ],
        "module_id": "day10-g-quality",
        "max_points": 4,
        "interaction": {
          "type": "short_text",
          "prompt": "Bối cảnh:\nCần rename `dept`→`department`; ba consumers deploy khác lịch, 2 năm history cần backfill.\n\nCâu hỏi:\nViết kế hoạch version, migration, monitoring và rollback."
        },
        "question_id": "d10-q068",
        "primary_kc_id": "kc-schema-evolution-compatibility-plan",
        "grading_method": "criterion_rubric",
        "question_version": 1,
        "cognitive_operation": "Create",
        "contributing_kc_ids": [],
        "estimated_difficulty": "hard"
      },
      {
        "servable": false,
        "role": "initial_check",
        "hints": [
          {
            "text": "Tính numerator trước rồi gắn consequence từ severity.",
            "hint_id": "h1",
            "after_attempt": 1
          }
        ],
        "module_id": "day10-g-quality",
        "max_points": 4,
        "interaction": {
          "type": "short_text",
          "prompt": "Bối cảnh:\nClause: ≥99% dòng phải có `source_id`; scope run R7 có 1.000 dòng, 25 dòng thiếu; severity hard gate.\n\nCâu hỏi:\nXuất evidence và kết quả expectation."
        },
        "question_id": "d10-q069",
        "primary_kc_id": "kc-executable-data-expectation",
        "grading_method": "criterion_rubric",
        "question_version": 1,
        "cognitive_operation": "Apply",
        "contributing_kc_ids": [],
        "estimated_difficulty": "medium"
      },
      {
        "servable": true,
        "role": "reassessment",
        "hints": [
          {
            "text": "Người review cần tái tạo được lý do pass/fail và biết bản ghi nào cần xử lý.",
            "hint_id": "h1",
            "after_attempt": 1
          }
        ],
        "module_id": "day10-g-quality",
        "max_points": 4,
        "interaction": {
          "type": "multi_select",
          "prompt": "Kết quả expectation cần những thành phần nào để audit và hành động?",
          "choices": [
            {
              "text": "Tên clause/dimension và run scope",
              "choice_id": "a"
            },
            {
              "text": "Giá trị quan sát cùng mẫu số",
              "choice_id": "b"
            },
            {
              "text": "Threshold và severity",
              "choice_id": "c"
            },
            {
              "text": "Evidence của các dòng lỗi hoặc một lát cắt dữ liệu lỗi",
              "choice_id": "d"
            },
            {
              "text": "Chỉ boolean `false`",
              "choice_id": "e"
            }
          ],
          "presentation_policy": {
            "shuffle_at_delivery": true,
            "do_not_expose_choice_ids": true
          },
          "selection_instruction": "Chọn tất cả phương án đúng."
        },
        "question_id": "d10-q070",
        "primary_kc_id": "kc-executable-data-expectation",
        "grading_method": "deterministic_key",
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
            "text": "Liệt kê cả điều suite không quan sát.",
            "hint_id": "h1",
            "after_attempt": 1
          }
        ],
        "module_id": "day10-g-quality",
        "max_points": 3,
        "interaction": {
          "type": "multi_select",
          "prompt": "Bộ kiểm tra đều đạt: not-null, type và range trên phân vùng hôm nay. Được kết luận gì?",
          "choices": [
            {
              "text": "Các rule đã triển khai đều đạt trên phạm vi hôm nay",
              "choice_id": "a"
            },
            {
              "text": "Độ chính xác theo nguồn bên ngoài đã được chứng minh",
              "choice_id": "b"
            },
            {
              "text": "Phân vùng của ngày khác vẫn chưa được kiểm",
              "choice_id": "c"
            },
            {
              "text": "Business rule/authority có thể chưa được kiểm",
              "choice_id": "d"
            },
            {
              "text": "Dữ liệu trong tương lai chắc chắn đúng",
              "choice_id": "e"
            }
          ],
          "presentation_policy": {
            "shuffle_at_delivery": true,
            "do_not_expose_choice_ids": true
          },
          "selection_instruction": "Chọn tất cả phương án đúng."
        },
        "question_id": "d10-q071",
        "primary_kc_id": "kc-quality-suite-coverage-limit",
        "grading_method": "deterministic_key",
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
            "text": "Mỗi claim thiếu cần một phép đo khác loại, không thêm nhiều null checks.",
            "hint_id": "h1",
            "after_attempt": 1
          }
        ],
        "module_id": "day10-g-quality",
        "max_points": 4,
        "interaction": {
          "type": "short_text",
          "prompt": "Bối cảnh:\nSuite đạt uniqueness, type và null checks trên 10 nghìn dòng. Chưa có đối chiếu source of truth hay freshness clock.\n\nCâu hỏi:\nViết kết luận hợp lệ và hai evidence bổ sung để giảm khoảng trống."
        },
        "question_id": "d10-q072",
        "primary_kc_id": "kc-quality-suite-coverage-limit",
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
            "text": "Mẫu số là toàn bộ bản ghi mà rule đã chặn.",
            "hint_id": "h1",
            "after_attempt": 1
          }
        ],
        "module_id": "day10-g-quality",
        "max_points": 1,
        "interaction": {
          "type": "numeric_input",
          "prompt": "Rule chặn 40 bản ghi; review xác nhận 30 bản ghi thực sự lỗi theo contract. Precision là bao nhiêu?",
          "required_unit": "%"
        },
        "question_id": "d10-q073",
        "primary_kc_id": "kc-data-rule-signal-precision",
        "grading_method": "deterministic_key",
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
            "text": "False positives có chung field nào?",
            "hint_id": "h1",
            "after_attempt": 1
          }
        ],
        "module_id": "day10-g-quality",
        "max_points": 4,
        "interaction": {
          "type": "short_text",
          "prompt": "Bối cảnh:\nRule `age\u003C18 → block` chặn 100 dòng; 60 là tài khoản người phụ thuộc hợp lệ theo contract, 40 dòng thực sự lỗi.\n\nCâu hỏi:\nTính precision, chỉnh rule và chọn hệ quả."
        },
        "question_id": "d10-q074",
        "primary_kc_id": "kc-data-rule-signal-precision",
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
            "text": "Lấy số lỗi thật chia cho toàn bộ số dòng mà rule đã chặn.",
            "hint_id": "h1",
            "after_attempt": 1
          }
        ],
        "module_id": "day10-g-quality",
        "max_points": 1,
        "interaction": {
          "type": "single_select",
          "prompt": "Hai rule cùng chặn 100 dòng. Rule A có 90 lỗi thật; Rule B có 35 lỗi thật. Nếu mức hại và chi phí tương đương, rule nào có precision tốt hơn?",
          "choices": [
            {
              "text": "Rule A",
              "choice_id": "a"
            },
            {
              "text": "Rule B",
              "choice_id": "b"
            },
            {
              "text": "Như nhau vì cùng block 100",
              "choice_id": "c"
            },
            {
              "text": "Không thể so dù đã có label",
              "choice_id": "d"
            }
          ],
          "presentation_policy": {
            "shuffle_at_delivery": true,
            "do_not_expose_choice_ids": true
          }
        },
        "question_id": "d10-q075",
        "primary_kc_id": "kc-data-rule-signal-precision",
        "grading_method": "deterministic_key",
        "question_version": 1,
        "cognitive_operation": "Understand",
        "contributing_kc_ids": [],
        "estimated_difficulty": "easy"
      },
      {
        "servable": false,
        "role": "initial_check",
        "hints": [
          {
            "text": "Dùng watermark/effective time mà consumer thực sự thấy.",
            "hint_id": "h1",
            "after_attempt": 1
          }
        ],
        "module_id": "day10-g-observability",
        "max_points": 4,
        "interaction": {
          "type": "short_text",
          "prompt": "Bối cảnh:\nBản ghi mới nhất ở source là 10:00; lần chạy thành công gần nhất là 10:05; watermark vẫn là 09:00; publish lúc 10:06; hiện tại là 10:30; chu kỳ chạy 5 phút.\n\nCâu hỏi:\nTính, diễn giải các signal và nêu điều chưa xác định."
        },
        "question_id": "d10-q076",
        "primary_kc_id": "kc-data-freshness-observability",
        "grading_method": "criterion_rubric",
        "question_version": 1,
        "cognitive_operation": "Analyze",
        "contributing_kc_ids": [],
        "estimated_difficulty": "hard"
      },
      {
        "servable": true,
        "role": "reassessment",
        "hints": [
          {
            "text": "Age bắt đầu ở source/effective time.",
            "hint_id": "h1",
            "after_attempt": 1
          }
        ],
        "module_id": "day10-g-observability",
        "max_points": 1,
        "interaction": {
          "type": "numeric_input",
          "prompt": "Watermark là 14:40, active publish là 14:45, hiện tại 15:10. Data age mà consumer nhìn thấy theo watermark là bao nhiêu?",
          "required_unit": "phút"
        },
        "question_id": "d10-q077",
        "primary_kc_id": "kc-data-freshness-observability",
        "grading_method": "deterministic_key",
        "question_version": 1,
        "cognitive_operation": "Apply",
        "contributing_kc_ids": [],
        "estimated_difficulty": "easy"
      },
      {
        "servable": false,
        "role": "initial_check",
        "hints": [
          {
            "text": "Tính delta giữa từng cặp stage, không chỉ source và publish.",
            "hint_id": "h1",
            "after_attempt": 1
          }
        ],
        "module_id": "day10-g-observability",
        "max_points": 4,
        "interaction": {
          "type": "short_text",
          "prompt": "Bối cảnh:\nBaseline của source khoảng 10.000. Lần chạy: source 10.200; ingest 10.180; clean 8.100; quarantine 50; publish 8.050.\n\nCâu hỏi:\nXác định chỗ giảm số lượng, định lượng và nêu evidence cần xem tiếp."
        },
        "question_id": "d10-q078",
        "primary_kc_id": "kc-data-volume-observability",
        "grading_method": "criterion_rubric",
        "question_version": 1,
        "cognitive_operation": "Analyze",
        "contributing_kc_ids": [],
        "estimated_difficulty": "medium"
      },
      {
        "servable": true,
        "role": "reassessment",
        "hints": [
          {
            "text": "Tìm stage đầu count tăng.",
            "hint_id": "h1",
            "after_attempt": 1
          }
        ],
        "module_id": "day10-g-observability",
        "max_points": 1,
        "interaction": {
          "type": "single_select",
          "prompt": "Source=1.000; ingest=1.500; clean=1.500; baseline khoảng 1.000. Giả thuyết nào cần ưu tiên?",
          "choices": [
            {
              "text": "Duplicate/replay ở source→ingest boundary",
              "choice_id": "a"
            },
            {
              "text": "Missing records",
              "choice_id": "b"
            },
            {
              "text": "Schema rename chắc chắn",
              "choice_id": "c"
            },
            {
              "text": "Accuracy tăng",
              "choice_id": "d"
            }
          ],
          "presentation_policy": {
            "shuffle_at_delivery": true,
            "do_not_expose_choice_ids": true
          }
        },
        "question_id": "d10-q079",
        "primary_kc_id": "kc-data-volume-observability",
        "grading_method": "deterministic_key",
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
            "text": "Chọn signal có thể phản ánh parser làm rỗng/cắt/đổi language.",
            "hint_id": "h1",
            "after_attempt": 1
          }
        ],
        "module_id": "day10-g-observability",
        "max_points": 4,
        "interaction": {
          "type": "multi_select",
          "prompt": "Số dòng ổn nhưng câu trả lời bị lỗi sau khi cập nhật parser. Signal nào hữu ích?",
          "choices": [
            {
              "text": "Null rate theo field",
              "choice_id": "a"
            },
            {
              "text": "Text-length distribution",
              "choice_id": "b"
            },
            {
              "text": "Language mix",
              "choice_id": "c"
            },
            {
              "text": "Cardinality/entropy",
              "choice_id": "d"
            },
            {
              "text": "Chỉ job success boolean",
              "choice_id": "e"
            }
          ],
          "presentation_policy": {
            "shuffle_at_delivery": true,
            "do_not_expose_choice_ids": true
          },
          "selection_instruction": "Chọn tất cả phương án đúng."
        },
        "question_id": "d10-q080",
        "primary_kc_id": "kc-data-distribution-observability",
        "grading_method": "deterministic_key",
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
            "text": "Mô tả cái đã đổi trước khi đoán tại sao.",
            "hint_id": "h1",
            "after_attempt": 1
          }
        ],
        "module_id": "day10-g-observability",
        "max_points": 4,
        "interaction": {
          "type": "short_text",
          "prompt": "Bối cảnh:\nMốc tham chiếu: độ dài văn bản trung vị 800, null 1%, tiếng Việt 95%. Hiện tại: trung vị 70, null 2%, tiếng Việt 40%, không rõ ngôn ngữ 55%; số dòng bằng nhau.\n\nCâu hỏi:\nDiễn giải và chọn hành động mà không kết luận quá mức."
        },
        "question_id": "d10-q081",
        "primary_kc_id": "kc-data-distribution-observability",
        "grading_method": "criterion_rubric",
        "question_version": 1,
        "cognitive_operation": "Analyze",
        "contributing_kc_ids": [],
        "estimated_difficulty": "hard"
      },
      {
        "servable": false,
        "role": "initial_check",
        "hints": [
          {
            "text": "Đánh giá từng field đối với consumer cụ thể.",
            "hint_id": "h1",
            "after_attempt": 1
          }
        ],
        "module_id": "day10-g-observability",
        "max_points": 4,
        "interaction": {
          "type": "short_text",
          "prompt": "Bối cảnh:\nSchema v1 `customer_id:str, amount:int`; v2 `customer_id:str, amount:string, currency?:str`. Consumer cộng amount như số.\n\nCâu hỏi:\nPhân loại các thay đổi, consumer bị ảnh hưởng và hành động cần làm."
        },
        "question_id": "d10-q082",
        "primary_kc_id": "kc-data-schema-observability",
        "grading_method": "criterion_rubric",
        "question_version": 1,
        "cognitive_operation": "Analyze",
        "contributing_kc_ids": [],
        "estimated_difficulty": "medium"
      },
      {
        "servable": true,
        "role": "reassessment",
        "hints": [
          {
            "text": "Tên và type không chứa toàn bộ meaning.",
            "hint_id": "h1",
            "after_attempt": 1
          }
        ],
        "module_id": "day10-g-observability",
        "max_points": 1,
        "interaction": {
          "type": "single_select",
          "prompt": "Field giữ tên/type nhưng `status=\"closed\"` đổi nghĩa từ resolved sang archived. Schema diff structural báo gì?",
          "choices": [
            {
              "text": "Có thể không báo; cần contract version/distribution/business semantic evidence",
              "choice_id": "a"
            },
            {
              "text": "Luôn backward compatible",
              "choice_id": "b"
            },
            {
              "text": "Chỉ là volume drift",
              "choice_id": "c"
            },
            {
              "text": "Accuracy tự động pass",
              "choice_id": "d"
            }
          ],
          "presentation_policy": {
            "shuffle_at_delivery": true,
            "do_not_expose_choice_ids": true
          }
        },
        "question_id": "d10-q083",
        "primary_kc_id": "kc-data-schema-observability",
        "grading_method": "deterministic_key",
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
            "text": "Bắt đầu ở thứ agent nhìn thấy rồi lần producer của từng artifact.",
            "hint_id": "h1",
            "after_attempt": 1
          }
        ],
        "module_id": "day10-g-observability",
        "max_points": 5,
        "interaction": {
          "type": "ordering",
          "prompt": "Sắp lineage path từ agent-visible chunk về source.",
          "options": [
            {
              "text": "Transform artifact/run",
              "option_id": "o1"
            },
            {
              "text": "Active index snapshot",
              "option_id": "o2"
            },
            {
              "text": "Source identity/version",
              "option_id": "o3"
            },
            {
              "text": "Canonical record",
              "option_id": "o4"
            },
            {
              "text": "Retrieved chunk",
              "option_id": "o5"
            }
          ],
          "presentation_policy": {
            "do_not_expose_option_ids": true,
            "shuffle_initial_order_at_delivery": true
          }
        },
        "question_id": "d10-q084",
        "primary_kc_id": "kc-data-lineage-observability",
        "grading_method": "deterministic_key",
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
            "text": "Dừng đúng chỗ identity chain bị đứt.",
            "hint_id": "h1",
            "after_attempt": 1
          }
        ],
        "module_id": "day10-g-observability",
        "max_points": 4,
        "interaction": {
          "type": "short_text",
          "prompt": "Bối cảnh:\nChunk C7 thuộc index I3; manifest của I3 trỏ canonical K9; K9 thiếu run_id; source S2 có hai phiên bản.\n\nCâu hỏi:\nDựng lại phần đã biết, chỉ điểm đứt đầu tiên và tác động."
        },
        "question_id": "d10-q085",
        "primary_kc_id": "kc-data-lineage-observability",
        "grading_method": "criterion_rubric",
        "question_version": 1,
        "cognitive_operation": "Analyze",
        "contributing_kc_ids": [],
        "estimated_difficulty": "hard"
      },
      {
        "servable": false,
        "role": "initial_check",
        "hints": [
          {
            "text": "Mỗi clock bắt đầu ở business event và dừng nơi agent nhìn thấy.",
            "hint_id": "h1",
            "after_attempt": 1
          }
        ],
        "module_id": "day10-g-observability",
        "max_points": 4,
        "interaction": {
          "type": "short_text",
          "prompt": "Bối cảnh:\nTrạng thái ticket trực tiếp được hứa hiển thị trong 2 phút; policy PDF đổi theo tháng và được hứa cập nhật trong 24 giờ.\n\nCâu hỏi:\nThiết kế hai freshness clock, owner nhận alert và hành vi khi dữ liệu stale."
        },
        "question_id": "d10-q086",
        "primary_kc_id": "kc-business-freshness-sla-design",
        "grading_method": "criterion_rubric",
        "question_version": 1,
        "cognitive_operation": "Create",
        "contributing_kc_ids": [],
        "estimated_difficulty": "hard"
      },
      {
        "servable": true,
        "role": "reassessment",
        "hints": [
          {
            "text": "Hỏi khi breach thì ai biết, ai làm gì và learner thấy gì.",
            "hint_id": "h1",
            "after_attempt": 1
          }
        ],
        "module_id": "day10-g-observability",
        "max_points": 4,
        "interaction": {
          "type": "multi_select",
          "prompt": "Freshness SLA actionable cần những thành phần nào?",
          "choices": [
            {
              "text": "Business event/source timestamp bắt đầu clock",
              "choice_id": "a"
            },
            {
              "text": "Agent-visible publish/serving boundary kết thúc clock",
              "choice_id": "b"
            },
            {
              "text": "Threshold và warning/page escalation",
              "choice_id": "c"
            },
            {
              "text": "Accountable owner và stale-data behavior",
              "choice_id": "d"
            },
            {
              "text": "Chỉ cron schedule nội bộ",
              "choice_id": "e"
            }
          ],
          "presentation_policy": {
            "shuffle_at_delivery": true,
            "do_not_expose_choice_ids": true
          },
          "selection_instruction": "Chọn tất cả phương án đúng."
        },
        "question_id": "d10-q087",
        "primary_kc_id": "kc-business-freshness-sla-design",
        "grading_method": "deterministic_key",
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
            "text": "Drift nói population đổi, không nói đổi đúng hay sai.",
            "hint_id": "h1",
            "after_attempt": 1
          }
        ],
        "module_id": "day10-g-observability",
        "max_points": 1,
        "interaction": {
          "type": "single_select",
          "prompt": "Báo cáo drift có PSI vượt threshold ở `country`; campaign vừa mở thị trường mới, các quality checks đều đạt. Hành động nào phù hợp?",
          "choices": [
            {
              "text": "Ghi nhận expected change và tiếp tục/report hoặc investigate impact; không auto-label bad",
              "choice_id": "a"
            },
            {
              "text": "Rollback vì mọi drift là lỗi",
              "choice_id": "b"
            },
            {
              "text": "Gọi schema breaking",
              "choice_id": "c"
            },
            {
              "text": "Xóa rows thị trường mới",
              "choice_id": "d"
            }
          ],
          "presentation_policy": {
            "shuffle_at_delivery": true,
            "do_not_expose_choice_ids": true
          }
        },
        "question_id": "d10-q088",
        "primary_kc_id": "kc-distribution-drift-contextual-interpretation",
        "grading_method": "deterministic_key",
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
            "text": "Kiểm window trước, rồi tìm signal độc lập cùng đổi.",
            "hint_id": "h1",
            "after_attempt": 1
          }
        ],
        "module_id": "day10-g-observability",
        "max_points": 4,
        "interaction": {
          "type": "short_text",
          "prompt": "Bối cảnh:\nMốc tham chiếu là 30 ngày trước; dữ liệu hiện tại là 1 ngày; KL divergence cao ở language, đồng thời OCR không rõ ngôn ngữ tăng và grounding rate giảm.\n\nCâu hỏi:\nDiễn giải phương pháp, cửa sổ dữ liệu, signal và chọn hành động."
        },
        "question_id": "d10-q089",
        "primary_kc_id": "kc-distribution-drift-contextual-interpretation",
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
            "text": "Chọn indicator ở bề mặt agent, không lặp lại raw data metric.",
            "hint_id": "h1",
            "after_attempt": 1
          }
        ],
        "module_id": "day10-g-observability",
        "max_points": 4,
        "interaction": {
          "left": [
            {
              "id": "x1",
              "text": "Publish chậm"
            },
            {
              "id": "x2",
              "text": "Sources cũ trong citation"
            },
            {
              "id": "x3",
              "text": "Retrieval mất relevant chunks"
            },
            {
              "id": "x4",
              "text": "Canonical rows thiếu provenance"
            }
          ],
          "type": "matching",
          "right": [
            {
              "id": "r1",
              "text": "Ingest-to-publish latency"
            },
            {
              "id": "r2",
              "text": "Citation age"
            },
            {
              "id": "r3",
              "text": "Hit@k trên fixed queries"
            },
            {
              "id": "r4",
              "text": "Valid-grounding/provenance rate"
            }
          ],
          "prompt": "Ghép data anomaly với agent-facing SLI gần nhất.",
          "presentation_policy": {
            "do_not_align_pairs_by_row": true,
            "shuffle_right_at_delivery": true,
            "do_not_expose_internal_ids": true
          }
        },
        "question_id": "d10-q090",
        "primary_kc_id": "kc-data-to-agent-sli-linkage",
        "grading_method": "deterministic_key",
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
            "text": "Giữ evaluation set cố định và tách impact khỏi root cause.",
            "hint_id": "h1",
            "after_attempt": 1
          }
        ],
        "module_id": "day10-g-observability",
        "max_points": 4,
        "interaction": {
          "type": "short_text",
          "prompt": "Bối cảnh:\nSau khi phát hành parser, null-text tăng 20%; trên cùng 100 queries, hit@5 giảm .82→.60 và grounded-answer rate giảm .78→.55.\n\nCâu hỏi:\nNối evidence và phát biểu kết luận đúng mức."
        },
        "question_id": "d10-q091",
        "primary_kc_id": "kc-data-to-agent-sli-linkage",
        "grading_method": "criterion_rubric",
        "question_version": 1,
        "cognitive_operation": "Analyze",
        "contributing_kc_ids": [],
        "estimated_difficulty": "hard"
      },
      {
        "servable": false,
        "role": "initial_check",
        "hints": [
          {
            "text": "Đặt ở điểm sớm nhất check có đủ fields để quyết.",
            "hint_id": "h1",
            "after_attempt": 1
          }
        ],
        "module_id": "day10-g-operations",
        "max_points": 4,
        "interaction": {
          "type": "short_text",
          "prompt": "Bối cảnh:\nDAG: parse→clean→embed→publish. Required-ID check cần các canonical fields; optional-note warning không ảnh hưởng retrieval.\n\nCâu hỏi:\nĐặt gate và xác định các nhánh khi fail."
        },
        "question_id": "d10-q092",
        "primary_kc_id": "kc-data-quality-gate-placement",
        "grading_method": "criterion_rubric",
        "question_version": 1,
        "cognitive_operation": "Create",
        "contributing_kc_ids": [],
        "estimated_difficulty": "medium"
      },
      {
        "servable": true,
        "role": "reassessment",
        "hints": [
          {
            "text": "Controlled exception cần scope, owner và audit trail.",
            "hint_id": "h1",
            "after_attempt": 1
          }
        ],
        "module_id": "day10-g-operations",
        "max_points": 1,
        "interaction": {
          "type": "single_select",
          "prompt": "Hard schema gate fail nhưng team bật bypass để phát hành production mà không ghi audit. Đánh giá?",
          "choices": [
            {
              "text": "Không hợp lệ; exception phải có scope, owner, risk acceptance và audit rõ, không được bypass âm thầm",
              "choice_id": "a"
            },
            {
              "text": "Hợp lệ nếu deadline gần",
              "choice_id": "b"
            },
            {
              "text": "Retry invalid rows đến pass",
              "choice_id": "c"
            },
            {
              "text": "Publish rồi check sau",
              "choice_id": "d"
            }
          ],
          "presentation_policy": {
            "shuffle_at_delivery": true,
            "do_not_expose_choice_ids": true
          }
        },
        "question_id": "d10-q093",
        "primary_kc_id": "kc-data-quality-gate-placement",
        "grading_method": "deterministic_key",
        "question_version": 1,
        "cognitive_operation": "Analyze",
        "contributing_kc_ids": [],
        "estimated_difficulty": "easy"
      },
      {
        "servable": true,
        "role": "follow_up",
        "hints": [
          {
            "text": "Gate phải chặn điều gì trước commit boundary?",
            "hint_id": "h1",
            "after_attempt": 1
          }
        ],
        "module_id": "day10-g-operations",
        "max_points": 1,
        "interaction": {
          "type": "single_select",
          "prompt": "Required-ID hard gate chạy sau khi index đã được activate và mới phát hiện lỗi. Vấn đề chính?",
          "choices": [
            {
              "text": "Gate đặt quá muộn vì artifact lỗi đã thành learner-visible",
              "choice_id": "a"
            },
            {
              "text": "Gate đúng vì vẫn phát hiện được",
              "choice_id": "b"
            },
            {
              "text": "Chỉ thiếu retry",
              "choice_id": "c"
            },
            {
              "text": "Cần đổi hard gate thành warning",
              "choice_id": "d"
            }
          ],
          "presentation_policy": {
            "shuffle_at_delivery": true,
            "do_not_expose_choice_ids": true
          }
        },
        "question_id": "d10-q094",
        "primary_kc_id": "kc-data-quality-gate-placement",
        "grading_method": "deterministic_key",
        "question_version": 1,
        "cognitive_operation": "Analyze",
        "contributing_kc_ids": [],
        "estimated_difficulty": "easy"
      },
      {
        "servable": false,
        "role": "initial_check",
        "hints": [
          {
            "text": "Liệt kê hành vi khi source chưa sẵn sàng và task giữa DAG fail.",
            "hint_id": "h1",
            "after_attempt": 1
          }
        ],
        "module_id": "day10-g-operations",
        "max_points": 4,
        "interaction": {
          "type": "short_text",
          "prompt": "Bối cảnh:\nPipeline hằng ngày cần đợi file và DB snapshot, transform, quality, publish; retry lỗi transient 2 lần; SLA 07:00; backfill theo date range.\n\nCâu hỏi:\nViết bảng requirement và chỉ ra config chỉ có cron không biểu diễn được gì."
        },
        "question_id": "d10-q095",
        "primary_kc_id": "kc-data-orchestrator-requirements",
        "grading_method": "criterion_rubric",
        "question_version": 1,
        "cognitive_operation": "Create",
        "contributing_kc_ids": [],
        "estimated_difficulty": "hard"
      },
      {
        "servable": true,
        "role": "reassessment",
        "hints": [
          {
            "text": "Xét lúc source trễ, task giữa DAG fail và cần chạy lại một date range.",
            "hint_id": "h1",
            "after_attempt": 1
          }
        ],
        "module_id": "day10-g-operations",
        "max_points": 4,
        "interaction": {
          "type": "multi_select",
          "prompt": "Config chỉ có `cron: 01:00` và command chạy toàn pipeline. Còn thiếu requirement nào để vận hành an toàn?",
          "choices": [
            {
              "text": "Data readiness/dependency graph",
              "choice_id": "a"
            },
            {
              "text": "Per-task retry eligibility và cap",
              "choice_id": "b"
            },
            {
              "text": "SLA alert/owner cùng run visibility",
              "choice_id": "c"
            },
            {
              "text": "Bounded backfill parameters và lineage",
              "choice_id": "d"
            },
            {
              "text": "Tên vendor orchestrator mới nhất",
              "choice_id": "e"
            }
          ],
          "presentation_policy": {
            "shuffle_at_delivery": true,
            "do_not_expose_choice_ids": true
          },
          "selection_instruction": "Chọn tất cả phương án đúng."
        },
        "question_id": "d10-q096",
        "primary_kc_id": "kc-data-orchestrator-requirements",
        "grading_method": "deterministic_key",
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
            "text": "Đừng lặp lại phần việc đã thành công nếu artifact vẫn valid/idempotent.",
            "hint_id": "h1",
            "after_attempt": 1
          }
        ],
        "module_id": "day10-g-operations",
        "max_points": 1,
        "interaction": {
          "type": "single_select",
          "prompt": "DAG A→B→C; artifact của A/B đã thành công và immutable, C gặp timeout transient. Retry nào là hợp lý?",
          "choices": [
            {
              "text": "Retry C từ artifact B, cap/backoff; exhaustion alert/DLQ",
              "choice_id": "a"
            },
            {
              "text": "Restart A/B/C luôn",
              "choice_id": "b"
            },
            {
              "text": "Mark success",
              "choice_id": "c"
            },
            {
              "text": "Retry C vô hạn",
              "choice_id": "d"
            }
          ],
          "presentation_policy": {
            "shuffle_at_delivery": true,
            "do_not_expose_choice_ids": true
          }
        },
        "question_id": "d10-q097",
        "primary_kc_id": "kc-data-pipeline-retry-scope",
        "grading_method": "deterministic_key",
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
            "text": "Một transient timeout khác một deterministic schema failure.",
            "hint_id": "h1",
            "after_attempt": 1
          }
        ],
        "module_id": "day10-g-operations",
        "max_points": 4,
        "interaction": {
          "type": "short_text",
          "prompt": "Bối cảnh:\nC fail vì schema invalid có tính xác định; A/B thành công nhưng output của B không thỏa contract của C.\n\nCâu hỏi:\nChọn điểm chạy lại, số lần thử và cách xử lý khi lỗi kết thúc."
        },
        "question_id": "d10-q098",
        "primary_kc_id": "kc-data-pipeline-retry-scope",
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
            "text": "Không write trực tiếp vào alias đang serve.",
            "hint_id": "h1",
            "after_attempt": 1
          }
        ],
        "module_id": "day10-g-operations",
        "max_points": 5,
        "interaction": {
          "type": "ordering",
          "prompt": "Sắp atomic index publish.",
          "options": [
            {
              "text": "Verify count/schema/sample/manifest",
              "option_id": "o1"
            },
            {
              "text": "Build staging collection",
              "option_id": "o2"
            },
            {
              "text": "Switch serving alias atomically",
              "option_id": "o3"
            },
            {
              "text": "Retain previous active snapshot",
              "option_id": "o4"
            },
            {
              "text": "Rollback alias nếu post-check fail",
              "option_id": "o5"
            }
          ],
          "presentation_policy": {
            "do_not_expose_option_ids": true,
            "shuffle_initial_order_at_delivery": true
          }
        },
        "question_id": "d10-q099",
        "primary_kc_id": "kc-atomic-vector-index-publish",
        "grading_method": "deterministic_key",
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
            "text": "Tách write completion khỏi serving activation.",
            "hint_id": "h1",
            "after_attempt": 1
          }
        ],
        "module_id": "day10-g-operations",
        "max_points": 4,
        "interaction": {
          "type": "short_text",
          "prompt": "Bối cảnh:\nĐang rebuild 1M vectors; job đã nạp 600k vào live collection thì agent bắt đầu trả thiếu dữ liệu.\n\nCâu hỏi:\nThiết kế lại ranh giới publish và rollback."
        },
        "question_id": "d10-q100",
        "primary_kc_id": "kc-atomic-vector-index-publish",
        "grading_method": "criterion_rubric",
        "question_version": 1,
        "cognitive_operation": "Create",
        "contributing_kc_ids": [],
        "estimated_difficulty": "hard"
      },
      {
        "servable": false,
        "role": "initial_check",
        "hints": [
          {
            "text": "Xác định range, identity và điểm result trở thành production.",
            "hint_id": "h1",
            "after_attempt": 1
          }
        ],
        "module_id": "day10-g-operations",
        "max_points": 4,
        "interaction": {
          "type": "short_text",
          "prompt": "Bối cảnh:\nThiếu các phân vùng 2026-04-01..03; pipeline trực tiếp vẫn chạy.\n\nCâu hỏi:\nThiết kế bounded backfill không phá production."
        },
        "question_id": "d10-q101",
        "primary_kc_id": "kc-safe-data-backfill",
        "grading_method": "criterion_rubric",
        "question_version": 1,
        "cognitive_operation": "Create",
        "contributing_kc_ids": [],
        "estimated_difficulty": "hard"
      },
      {
        "servable": true,
        "role": "reassessment",
        "hints": [
          {
            "text": "Activation là commit boundary.",
            "hint_id": "h1",
            "after_attempt": 1
          }
        ],
        "module_id": "day10-g-operations",
        "max_points": 1,
        "interaction": {
          "type": "single_select",
          "prompt": "Backfill 3 ngày mới hoàn tất 2 ngày nhưng alias production đã trỏ staging. Lỗi nằm ở đâu?",
          "choices": [
            {
              "text": "Publish partial backfill; phải verify toàn range/contract trước activation",
              "choice_id": "a"
            },
            {
              "text": "Không lỗi vì 2/3 đủ",
              "choice_id": "b"
            },
            {
              "text": "Chỉ thiếu alert",
              "choice_id": "c"
            },
            {
              "text": "Cần restart toàn history",
              "choice_id": "d"
            }
          ],
          "presentation_policy": {
            "shuffle_at_delivery": true,
            "do_not_expose_choice_ids": true
          }
        },
        "question_id": "d10-q102",
        "primary_kc_id": "kc-safe-data-backfill",
        "grading_method": "deterministic_key",
        "question_version": 1,
        "cognitive_operation": "Analyze",
        "contributing_kc_ids": [],
        "estimated_difficulty": "easy"
      },
      {
        "servable": true,
        "role": "follow_up",
        "hints": [
          {
            "text": "Partial result đang nằm ngoài serving boundary.",
            "hint_id": "h1",
            "after_attempt": 1
          }
        ],
        "module_id": "day10-g-operations",
        "max_points": 1,
        "interaction": {
          "type": "single_select",
          "prompt": "Bounded backfill thất bại ở phân vùng cuối; staging chưa được activate. Hành động an toàn?",
          "choices": [
            {
              "text": "Giữ production hiện tại, sửa/replay partition lỗi rồi verify đủ range trước atomic activation",
              "choice_id": "a"
            },
            {
              "text": "Trỏ production sang staging partial",
              "choice_id": "b"
            },
            {
              "text": "Xóa production để tránh stale",
              "choice_id": "c"
            },
            {
              "text": "Rerun toàn bộ lịch sử không giới hạn",
              "choice_id": "d"
            }
          ],
          "presentation_policy": {
            "shuffle_at_delivery": true,
            "do_not_expose_choice_ids": true
          }
        },
        "question_id": "d10-q103",
        "primary_kc_id": "kc-safe-data-backfill",
        "grading_method": "deterministic_key",
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
            "text": "Xác định incident trước, rồi dùng signal rộng/rẻ trước targeted lineage.",
            "hint_id": "h1",
            "after_attempt": 1
          }
        ],
        "module_id": "day10-g-operations",
        "max_points": 5,
        "interaction": {
          "type": "ordering",
          "prompt": "Sắp thứ tự triage cho câu trả lời sai hoặc stale theo evidence.",
          "options": [
            {
              "text": "Check schema/contract change",
              "option_id": "o1"
            },
            {
              "text": "Check freshness/last success",
              "option_id": "o2"
            },
            {
              "text": "Check lineage về source/owner",
              "option_id": "o3"
            },
            {
              "text": "Check volume/stage errors",
              "option_id": "o4"
            },
            {
              "text": "Ghi symptom, SLA, affected scope và initial hypothesis",
              "option_id": "o5"
            }
          ],
          "presentation_policy": {
            "do_not_expose_option_ids": true,
            "shuffle_initial_order_at_delivery": true
          }
        },
        "question_id": "d10-q104",
        "primary_kc_id": "kc-timeboxed-data-incident-triage",
        "grading_method": "deterministic_key",
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
            "text": "Một check chỉ được giữ nếu kết quả có thể đổi hypothesis/decision.",
            "hint_id": "h1",
            "after_attempt": 1
          }
        ],
        "module_id": "day10-g-operations",
        "max_points": 4,
        "interaction": {
          "type": "short_text",
          "prompt": "Bối cảnh:\nCó 20 phút, dashboard freshness chưa có. Agent trả policy cũ. Logs có last_success, counts và schema hash; lineage query tốn 10 phút.\n\nCâu hỏi:\nLập timebox có stop rule và bàn giao mitigation."
        },
        "question_id": "d10-q105",
        "primary_kc_id": "kc-timeboxed-data-incident-triage",
        "grading_method": "criterion_rubric",
        "question_version": 1,
        "cognitive_operation": "Create",
        "contributing_kc_ids": [],
        "estimated_difficulty": "hard"
      },
      {
        "servable": false,
        "role": "initial_check",
        "hints": [
          {
            "text": "Chọn hành động có thể đảo ngược trong khi root cause chưa chắc.",
            "hint_id": "h1",
            "after_attempt": 1
          }
        ],
        "module_id": "day10-g-operations",
        "max_points": 4,
        "interaction": {
          "type": "short_text",
          "prompt": "Bối cảnh:\nActive index v3 chứa policy sai; v2 đã biết là tốt nhưng cũ 1 ngày. Root cause chưa khép.\n\nCâu hỏi:\nChọn mitigation có thể đảo ngược, cách công bố và tiêu chí kết thúc."
        },
        "question_id": "d10-q106",
        "primary_kc_id": "kc-data-incident-mitigation-and-verification",
        "grading_method": "criterion_rubric",
        "question_version": 1,
        "cognitive_operation": "Evaluate",
        "contributing_kc_ids": [],
        "estimated_difficulty": "hard"
      },
      {
        "servable": true,
        "role": "reassessment",
        "hints": [
          {
            "text": "Verify từ source tới bề mặt agent.",
            "hint_id": "h1",
            "after_attempt": 1
          }
        ],
        "module_id": "day10-g-operations",
        "max_points": 4,
        "interaction": {
          "type": "multi_select",
          "prompt": "Sau khi sửa, bằng chứng nào đủ mạnh hơn để đóng incident?",
          "choices": [
            {
              "text": "Record nguồn/canonical đúng cùng lineage",
              "choice_id": "a"
            },
            {
              "text": "Quality signal liên quan pass",
              "choice_id": "b"
            },
            {
              "text": "Active snapshot đúng ID",
              "choice_id": "c"
            },
            {
              "text": "Original user query trả answer/citation đúng",
              "choice_id": "d"
            },
            {
              "text": "Chỉ task transform xanh",
              "choice_id": "e"
            }
          ],
          "presentation_policy": {
            "shuffle_at_delivery": true,
            "do_not_expose_choice_ids": true
          },
          "selection_instruction": "Chọn tất cả phương án đúng."
        },
        "question_id": "d10-q107",
        "primary_kc_id": "kc-data-incident-mitigation-and-verification",
        "grading_method": "deterministic_key",
        "question_version": 1,
        "cognitive_operation": "Analyze",
        "contributing_kc_ids": [],
        "estimated_difficulty": "medium"
      },
      {
        "servable": false,
        "role": "initial_check",
        "hints": [
          {
            "text": "Control mới phải fail trên chính corruption case này.",
            "hint_id": "h1",
            "after_attempt": 1
          }
        ],
        "module_id": "day10-g-operations",
        "max_points": 4,
        "interaction": {
          "type": "short_text",
          "prompt": "Bối cảnh:\nIncident do parser bỏ im lặng một cột sau schema rename; team sửa tay các dòng bị ảnh hưởng.\n\nCâu hỏi:\nViết causal record và prevention control có thể test."
        },
        "question_id": "d10-q108",
        "primary_kc_id": "kc-data-incident-prevention-loop",
        "grading_method": "criterion_rubric",
        "question_version": 1,
        "cognitive_operation": "Create",
        "contributing_kc_ids": [],
        "estimated_difficulty": "hard"
      },
      {
        "servable": true,
        "role": "reassessment",
        "hints": [
          {
            "text": "Hỏi corruption case cũ có làm control mới fail không.",
            "hint_id": "h1",
            "after_attempt": 1
          }
        ],
        "module_id": "day10-g-operations",
        "max_points": 1,
        "interaction": {
          "type": "single_select",
          "prompt": "Postmortem chỉ ghi “operator bất cẩn, đào tạo lại” dù root cause là missing schema gate. Đánh giá nào đúng?",
          "choices": [
            {
              "text": "Prevention không gắn causal control; cần gate/test/owner đo được",
              "choice_id": "a"
            },
            {
              "text": "Đủ vì đã có owner",
              "choice_id": "b"
            },
            {
              "text": "Chỉ cần thêm dashboard tổng",
              "choice_id": "c"
            },
            {
              "text": "Xóa incident record",
              "choice_id": "d"
            }
          ],
          "presentation_policy": {
            "shuffle_at_delivery": true,
            "do_not_expose_choice_ids": true
          }
        },
        "question_id": "d10-q109",
        "primary_kc_id": "kc-data-incident-prevention-loop",
        "grading_method": "deterministic_key",
        "question_version": 1,
        "cognitive_operation": "Analyze",
        "contributing_kc_ids": [],
        "estimated_difficulty": "easy"
      },
      {
        "servable": true,
        "role": "follow_up",
        "hints": [
          {
            "text": "Có thể chạy lại incident cũ để kiểm control mới không?",
            "hint_id": "h1",
            "after_attempt": 1
          }
        ],
        "module_id": "day10-g-operations",
        "max_points": 1,
        "interaction": {
          "type": "single_select",
          "prompt": "Control phòng ngừa nào chứng minh được là gắn với incident schema rename?",
          "choices": [
            {
              "text": "Fixture tái tạo rename và test xác nhận schema gate fail trước publish",
              "choice_id": "a"
            },
            {
              "text": "Nhắc team cẩn thận hơn",
              "choice_id": "b"
            },
            {
              "text": "Tăng số dashboard không có threshold",
              "choice_id": "c"
            },
            {
              "text": "Đổi tên incident ticket",
              "choice_id": "d"
            }
          ],
          "presentation_policy": {
            "shuffle_at_delivery": true,
            "do_not_expose_choice_ids": true
          }
        },
        "question_id": "d10-q110",
        "primary_kc_id": "kc-data-incident-prevention-loop",
        "grading_method": "deterministic_key",
        "question_version": 1,
        "cognitive_operation": "Analyze",
        "contributing_kc_ids": [],
        "estimated_difficulty": "easy"
      },
      {
        "servable": true,
        "role": "follow_up",
        "hints": [
          {
            "text": "Tìm artifact cho biết dữ liệu nào đã đi qua lần chạy nào.",
            "hint_id": "h1",
            "after_attempt": 1
          }
        ],
        "module_id": "day10-g-foundations",
        "max_points": 1,
        "interaction": {
          "type": "single_select",
          "prompt": "Một pipeline đã nạp dữ liệu từ source vào raw storage. Artifact nào chứng minh rõ nhất lần nạp đó đã hoàn tất với đúng phiên bản và số lượng dữ liệu?",
          "choices": [
            {
              "text": "Manifest ghi source, phiên bản, thời điểm chạy và số bản ghi",
              "choice_id": "a"
            },
            {
              "text": "Tên của người phát triển pipeline",
              "choice_id": "b"
            },
            {
              "text": "Một ảnh chụp dashboard không có run ID",
              "choice_id": "c"
            },
            {
              "text": "Câu trả lời của agent dùng dữ liệu đó",
              "choice_id": "d"
            }
          ],
          "presentation_policy": {
            "shuffle_at_delivery": true,
            "do_not_expose_choice_ids": true
          }
        },
        "question_id": "d10-q111",
        "primary_kc_id": "kc-data-pipeline-owner-artifact-assignment",
        "grading_method": "deterministic_key",
        "question_version": 1,
        "cognitive_operation": "Understand",
        "contributing_kc_ids": [],
        "estimated_difficulty": "easy"
      },
      {
        "servable": true,
        "role": "follow_up",
        "hints": [
          {
            "text": "Monitor tốt thay đổi ngay khi lỗi nêu trong prompt xảy ra.",
            "hint_id": "h1",
            "after_attempt": 1
          }
        ],
        "module_id": "day10-g-foundations",
        "max_points": 1,
        "interaction": {
          "type": "single_select",
          "prompt": "Một API source liên tục trả HTTP 429. Monitor nào phát hiện trực tiếp failure này nhất?",
          "choices": [
            {
              "text": "Số phản hồi 429 và số lần thử lại đã dùng",
              "choice_id": "a"
            },
            {
              "text": "Dung lượng đĩa còn trống trên máy chạy pipeline",
              "choice_id": "b"
            },
            {
              "text": "Số bản ghi trong source từ tuần trước",
              "choice_id": "c"
            },
            {
              "text": "Tên model mà agent đang dùng",
              "choice_id": "d"
            }
          ],
          "presentation_policy": {
            "shuffle_at_delivery": true,
            "do_not_expose_choice_ids": true
          }
        },
        "question_id": "d10-q112",
        "primary_kc_id": "kc-source-failure-monitor-owner-map",
        "grading_method": "deterministic_key",
        "question_version": 1,
        "cognitive_operation": "Understand",
        "contributing_kc_ids": [],
        "estimated_difficulty": "easy"
      }
    ],
    "round_sizes": {
      "post": 10,
      "recommended": 6,
      "all": 6
    }
  }
}

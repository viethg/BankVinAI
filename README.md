# BankAI — Web App Ôn Tập Kiến Thức AI & Khảo Thí Cục Bộ (100% Offline)

Ứng dụng web ôn tập tương tác hoàn chỉnh dành cho 15 ngày học của chương trình đào tạo AI & Agentic Engineering (từ Day 01 đến Day 15). Chạy **100% Offline** trên trình duyệt cục bộ, **không gọi bất kỳ API nào lúc runtime**.

---

## 🚀 Khởi Chạy Nhanh (1 Dòng Lệnh)

Chỉ cần chạy lệnh sau từ thư mục gốc của workspace:

```bash
python -m http.server 8080 --directory app
```

Sau đó mở trình duyệt và truy cập: **[http://localhost:8080](http://localhost:8080)**

*(Hoặc dùng lệnh Node.js nếu bạn quen dùng: `npx serve app`)*

---

## 🌟 Các Tính Năng Nổi Bật của Web App

### 1. Thanh điều hướng Sidebar (Trái)
- Hiển thị đầy đủ **15 Day** với mã bài học chuẩn (`D01` -> `D19`) và tên chủ đề bài học thực tế.
- **Tiến độ ôn tập cá nhân**: Theo dõi số câu đã làm, số câu đúng / tổng số câu của từng ngày học và thanh tiến độ tích lũy toàn khóa học (tự động đồng bộ vào `localStorage`).
- **Bộ chuyển đổi Theme**: Hỗ trợ 2 chế độ Sáng / Tối với bảng màu HSL cao cấp, dark mode lập trình viên hiện đại, glassmorphism và micro-animations.

### 2. Màn hình "Làm Quiz" (Interactive Quiz Practice)
- **Cuộn để làm (Continuous Scroll)**: Hiển thị TOÀN BỘ câu hỏi của Day lần lượt từ câu 1 đến câu cuối cùng trên một trang cuộn dài liên tục. Không gây gián đoạn bằng nút "Next".
- **Tương tác chấm điểm tức thì (Instant Feedback)**:
  - **Khi SAI**: Khung câu hỏi viền đỏ rực rỡ + Hộp cảnh báo màu đỏ mở ra **Gợi ý gốc (`hints`)** từ câu hỏi để người dùng tự suy ngẫm làm lại.
  - **Khi ĐÚNG**: Khung câu hỏi viền xanh lá rực rỡ + Hộp màu xanh chúc mừng và mở ra **Lời giải thích chi tiết (`explanation`)** từ AI.
- **Hỗ trợ đầy đủ widget UI cho cả 6 dạng tương tác**:
  1. `single_select`: Trắc nghiệm đơn với thẻ radio hiện đại, hover hiệu ứng trượt.
  2. `multi_select`: Trắc nghiệm nhiều lựa chọn, checkbox tùy biến.
  3. `matching`: Ghép nối 2 cột Trái - Phải bằng dropdown selector trực quan.
  4. `ordering`: Sắp xếp chuỗi thứ tự với nút di chuyển [▲ Lên] và [▼ Xuống].
  5. `numeric_input`: Ô nhập số chính xác + hiển thị đơn vị đo (`token`, `ms`, ...).
  6. `short_text`: Ô viết luận ngắn + Bảng đối chiếu tiêu chí chấm & câu trả lời mẫu.
- **Bộ lọc câu hỏi**: Lọc xem Tất cả / Chưa làm / Đã làm đúng / Cần làm lại.
- **Nút "Làm lại Day này"**: Reset toàn bộ câu trả lời của ngày đó để luyện tập lại từ đầu.

### 3. Màn hình "Tổng hợp kiến thức" (Knowledge Base)
- Hiển thị các khối kiến thức phân loại theo từng nhóm chủ đề (`groups`).
- Gắn huy hiệu nổi bật cho các mục kiến thức cốt lõi: `⭐ Cốt lõi` cho `is_core == true`.
- Hiển thị rõ: **Tên khái niệm** $\rightarrow$ **Nội dung kiến thức cốt lõi** $\rightarrow$ **Mục tiêu ôn tập/khắc phục (`remediation_target`)**.
- Thanh tìm kiếm thời gian thực theo từ khóa và checkbox lọc nhanh chỉ xem kiến thức cốt lõi.

---

## 🛠️ Pipeline Bóc Tách & Sinh Đáp Án Offline (`scripts/build_data.py`)

Pipeline Python chuyên nghiệp hỗ trợ sinh trước toàn bộ đáp án bằng LLM (DeepSeek / OpenRouter) trước khi đóng gói thành dữ liệu tĩnh:

### 1. Cơ chế Checkpoint & Resuming (`data/answers_cache.json`)
Lưu kết quả từng câu ngay sau khi giải xong. Nếu bị ngắt kết nối hoặc hết hạn mức, khi chạy lại script sẽ **tự động tiếp tục từ câu chưa giải**, không gọi lại các câu đã hoàn thành.

### 2. Hệ Thống Kiểm Soát Ngân Sách An Toàn Cứng (Budget Guard)
- Đo lường chính xác từng token input (cache hit, cache miss) và output.
- Dự báo chi phí lũy kế và chi phí còn lại sau mỗi chu kỳ (ví dụ mỗi 10 câu).
- **TỰ ĐỘNG DỪNG NGAY LẬP TỨC** nếu phát hiện tổng chi phí ước tính có nguy cơ vượt quá hạn mức (`MAX_BUDGET_USD`, mặc định $0.45 USD).

### 3. Các Lệnh Điều Khiển Pipeline Thường Dùng:

- **Chạy kiểm tra số câu & ước tính chi phí (Không tốn tiền API)**:
  ```bash
  python scripts/build_data.py --dry-run
  ```

- **Giải thử 5 câu cho mỗi Day để kiểm tra**:
  ```bash
  python scripts/build_data.py --all --limit-per-day 5
  ```

- **Giải cụ thể một Day bất kỳ (ví dụ Day 01 & Day 02)**:
  ```bash
  python scripts/build_data.py --days Day01 Day02
  ```

- **Giải toàn bộ 15 Day (Có bảo vệ Budget Guard tự dừng nếu vượt $0.45)**:
  ```bash
  python scripts/build_data.py --all
  ```

- **Chỉ xuất dữ liệu tĩnh từ Cache ra thư mục Web App**:
  ```bash
  python scripts/build_data.py --export-only
  ```

---

## 📁 Cấu Trúc Thư Mục Dự Án

```
BankAI/
├── Day01.md ... Day15.md        # 15 file dữ liệu gốc của bài học
├── .env                         # Cấu hình API Key (DeepSeek / OpenRouter) & Ngân sách
├── scripts/
│   └── build_data.py            # Pipeline bóc tách & tiền tính toán đáp án LLM
├── data/
│   └── answers_cache.json       # File cache lưu kết quả giải từng câu
├── app/
│   ├── index.html               # Giao diện chính của Web App
│   ├── style.css                # Hệ thống CSS Design System (Dark/Light mode)
│   ├── app.js                   # Logic tương tác offline 100%
│   └── data/
│       ├── courses_data.json    # Metadata tổng quan 15 Day
│       └── days/
│           ├── day01.json       # Dữ liệu tĩnh hoàn chỉnh Day 01
│           └── ...
└── README.md                    # Tài liệu hướng dẫn sử dụng
```

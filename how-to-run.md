# Hướng Dẫn Mở & Triển Khai BankAI

## Cách 1: Mở nhanh trên máy (1-Click, không cần gõ lệnh)
- **Cách nhanh nhất**: Ra ngoài màn hình **Desktop**, nhấp đúp vào biểu tượng **`BankAI - On Tap AI`**.
- Hoặc nhấp đúp vào file `Start-BankAI.bat` trong thư mục này.
- Trình duyệt sẽ tự động bật lên địa chỉ `http://localhost:8080`.
- Khi dùng xong: Đóng cửa sổ dòng lệnh để dừng.

---

## Cách 2: Deploy lên Web để truy cập từ bất kỳ đâu (Điện thoại, Laptop khác)
Ứng dụng là dạng **Static Web (100% Offline)**, không cần backend server lúc chạy nên có thể đưa lên các host miễn phí sau:

1. **Netlify Drop (Dễ nhất, 30 giây không cần gõ lệnh)**:
   - Truy cập: `https://app.netlify.com/drop`
   - Kéo và thả thư mục `app` vào trình duyệt.
   - Bạn sẽ nhận được ngay 1 đường link online (ví dụ: `https://bankai-ai.netlify.app`) để lưu vào bookmark mở bất cứ lúc nào.

2. **Vercel**:
   - Chạy lệnh: `npx vercel app --prod` hoặc import repo GitHub lên Vercel.

3. **GitHub Pages**:
   - Push repo lên GitHub (đã có sẵn `.gitignore` để bảo vệ file `.env`).
   - Vào Settings -> Pages -> Chọn folder `/app`.

---

## Cách 3: Chạy thủ công qua Terminal
```bash
python -m http.server 8080 --directory app
```
Truy cập: `http://localhost:8080`


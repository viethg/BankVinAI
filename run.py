import http.server
import socketserver
import webbrowser
import os
import sys
import threading
import time
import json
import urllib.request

PORT_DEFAULT = 8080
ROOT_DIR = os.path.dirname(os.path.abspath(__file__))
APP_DIR = os.path.join(ROOT_DIR, 'app')
SLIDES_DIR = os.path.join(ROOT_DIR, 'Slides')
DATA_DIR = os.path.join(ROOT_DIR, 'data')
PROGRESS_FILE = os.path.join(DATA_DIR, 'user_progress.json')

class BankAIHandler(http.server.SimpleHTTPRequestHandler):
    def __init__(self, *args, **kwargs):
        super().__init__(*args, directory=APP_DIR, **kwargs)

    def end_headers(self):
        self.send_header('Cache-Control', 'no-store, no-cache, must-revalidate, max-age=0')
        self.send_header('Pragma', 'no-cache')
        self.send_header('Expires', '0')
        self.send_header('Access-Control-Allow-Origin', '*')
        self.send_header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS')
        self.send_header('Access-Control-Allow-Headers', 'Content-Type')
        super().end_headers()

    def do_OPTIONS(self):
        self.send_response(204)
        self.end_headers()

    def do_GET(self):
        clean_path = self.path.split('?', 1)[0].split('#', 1)[0]

        # 1. API Ping kiểm tra trạng thái máy chủ
        if clean_path == '/api/ping':
            payload = json.dumps({'status': 'ok', 'app': 'BankAI', 'time': time.time()}).encode('utf-8')
            self.send_response(200)
            self.send_header('Content-Type', 'application/json; charset=utf-8')
            self.send_header('Content-Length', str(len(payload)))
            self.end_headers()
            self.wfile.write(payload)
            return

        # 2. API Tải tiến độ người dùng đã lưu từ file ổ cứng
        if clean_path == '/api/progress':
            data = {}
            if os.path.exists(PROGRESS_FILE):
                try:
                    with open(PROGRESS_FILE, 'r', encoding='utf-8') as f:
                        data = json.load(f)
                except Exception as e:
                    data = {'error': str(e), 'userProgress': {}, 'kcProgress': {}}
            else:
                data = {'userProgress': {}, 'kcProgress': {}}

            payload = json.dumps(data, ensure_ascii=False).encode('utf-8')
            self.send_response(200)
            self.send_header('Content-Type', 'application/json; charset=utf-8')
            self.send_header('Content-Length', str(len(payload)))
            self.end_headers()
            self.wfile.write(payload)
            return

        return super().do_GET()

    def do_POST(self):
        clean_path = self.path.split('?', 1)[0].split('#', 1)[0]

        # 3. API Lưu tiến độ an toàn vào ổ cứng (Atomic Write)
        if clean_path == '/api/progress':
            try:
                content_len = int(self.headers.get('Content-Length', 0))
                body = self.rfile.read(content_len).decode('utf-8')
                parsed_data = json.loads(body)

                os.makedirs(DATA_DIR, exist_ok=True)
                tmp_file = PROGRESS_FILE + f'.tmp_{os.getpid()}_{int(time.time()*1000)}'
                with open(tmp_file, 'w', encoding='utf-8') as f:
                    json.dump(parsed_data, f, ensure_ascii=False, indent=2)

                # Thay thế nguyên tử tránh hỏng file khi tắt đột ngột
                os.replace(tmp_file, PROGRESS_FILE)

                resp = json.dumps({'status': 'ok', 'message': 'Progress saved successfully'}).encode('utf-8')
                self.send_response(200)
                self.send_header('Content-Type', 'application/json; charset=utf-8')
                self.send_header('Content-Length', str(len(resp)))
                self.end_headers()
                self.wfile.write(resp)
            except Exception as e:
                resp = json.dumps({'status': 'error', 'message': str(e)}).encode('utf-8')
                self.send_response(500)
                self.send_header('Content-Type', 'application/json; charset=utf-8')
                self.send_header('Content-Length', str(len(resp)))
                self.end_headers()
                self.wfile.write(resp)
            return

        self.send_error(404, "Not Found")

    def translate_path(self, path):
        clean_path = path.split('?', 1)[0].split('#', 1)[0]
        if clean_path.lower().startswith('/slides/'):
            subpath = clean_path[8:]
            return os.path.join(SLIDES_DIR, subpath)
        return super().translate_path(path)

    def log_message(self, format, *args):
        # Giữ màn hình console sạch sẽ, không in tràn ngập log GET
        pass

def is_bankai_already_running(port):
    try:
        url = f"http://127.0.0.1:{port}/api/ping"
        req = urllib.request.Request(url, headers={'User-Agent': 'BankAI-Launcher'})
        with urllib.request.urlopen(req, timeout=1.0) as resp:
            if resp.status == 200:
                data = json.loads(resp.read().decode('utf-8'))
                if data.get('app') == 'BankAI':
                    return True
    except Exception:
        pass
    return False

def find_available_port(start_port=8080, max_attempts=20):
    import socket
    for port in range(start_port, start_port + max_attempts):
        with socket.socket(socket.AF_INET, socket.SOCK_STREAM) as s:
            try:
                s.bind(("", port))
                return port
            except OSError:
                continue
    return start_port

def main():
    # 1. Kiểm tra nếu BankAI đã đang mở sẵn trên máy
    if is_bankai_already_running(PORT_DEFAULT):
        url = f"http://localhost:{PORT_DEFAULT}"
        print("=" * 60)
        print("   BankAI - He Thong On Tap & Khao Thi Kien Thuc AI")
        print("=" * 60)
        print(f"\n[*] Phat hien BankAI da dang chay tai: {url}")
        print("[*] Dang tu dong mo lai giao dien tren trinh duyet cua ban...")
        webbrowser.open(url)
        time.sleep(1.0)
        return

    # 2. Khởi tạo máy chủ trên cổng khả dụng (ưu tiên 8080)
    port = find_available_port(PORT_DEFAULT)
    url = f"http://localhost:{port}"

    print("=" * 60)
    print("   BankAI - He Thong On Tap & Khao Thi Kien Thuc AI")
    print("=" * 60)
    print(f"\n[*] May chu dang chay tai: {url}")
    print(f"[*] Noi luu tru tien do & tick xanh: data/user_progress.json")
    print("[*] Dang tu dong mo trinh duyet...")
    print("[*] (De tat server: chi can dong cua so nay hoac an Ctrl + C)\n")

    def open_browser():
        time.sleep(0.6)
        webbrowser.open(url)

    threading.Thread(target=open_browser, daemon=True).start()

    socketserver.TCPServer.allow_reuse_address = True
    with socketserver.TCPServer(("", port), BankAIHandler) as httpd:
        try:
            httpd.serve_forever()
        except KeyboardInterrupt:
            print("\n[*] Da tat BankAI.")

if __name__ == '__main__':
    main()

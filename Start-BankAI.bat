@echo off
title BankAI - He Thong On Tap AI
color 0B
cd /d "%~dp0"
python run.py
if %ERRORLEVEL% NEQ 0 (
    echo.
    echo [LOI] Khong the khoi chay Python. Hay kiem tra lai moi truong Python tren may.
    pause
)

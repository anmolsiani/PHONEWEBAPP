@echo off
setlocal
title ArtBid Hub Launcher

echo ===================================================
echo       ArtBid Hub - Full Stack Launcher
echo ===================================================

REM Check for Node.js
node -v >nul 2>&1
if %errorlevel% neq 0 (
    echo [ERROR] Node.js is not installed. Please install Node.js (LTS) from https://nodejs.org/
    pause
    exit /b
)

echo [INFO] Node.js is installed.

echo ===================================================
echo 1. Setting up Backend...
echo ===================================================
cd backend
if not exist node_modules (
    echo [INFO] Installing backend dependencies...
    call npm install
    if %errorlevel% neq 0 (
        echo [ERROR] Backend install failed.
        pause
        exit /b
    )
)
start "ArtBid Hub - Backend" cmd /k "color 0A && echo [BACKEND] Running on Port 5000... && npm run dev"
cd ..

echo.
echo ===================================================
echo 2. Setting up Frontend...
echo ===================================================
cd frontend
if not exist node_modules (
    echo [INFO] Installing frontend dependencies...
    echo [NOTE] This might take a few minutes.
    call npm install
    if %errorlevel% neq 0 (
        echo [ERROR] Frontend install failed.
        pause
        exit /b
    )
)

echo [INFO] Starting Frontend...
start "ArtBid Hub - Frontend" cmd /k "color 0B && echo [FRONTEND] Running on Port 3000... && npm run dev"
cd ..

echo.
echo ===================================================
echo [SUCCESS] Systems Online!
echo.
echo  - Frontend: http://localhost:3000
echo  - Backend:  http://localhost:5000
echo.
echo (Close this window if you want, servers run in background windows)
pause >nul

@echo off
chcp 65001 >nul

echo 音乐播放列表自动更新工具
echo ===================
echo.

rem 检查Node.js是否安装
node --version >nul 2>&1
if %errorlevel% neq 0 (
    echo 错误：未安装Node.js或Node.js未添加到环境变量
    echo 请先安装Node.js并确保node命令可执行
    pause
    exit /b 1
)

echo 正在更新音乐播放列表...
echo.
node update_playlist.js

echo.
echo ===================
echo 更新完成！
echo 按任意键退出...
pause >nul

@echo off
setlocal enabledelayedexpansion

rem 遍历当前目录下的所有文件
for %%f in (*.*) do (
    set "oldname=%%f"
    set "newname=!oldname!"
    
    rem 替换空格为-
    set "newname=!newname: =-!"
    
    rem 移除单引号
    set "newname=!newname:'=!"
    
    rem 移除双引号
    set "newname=!newname:"=!"
    
    rem 如果文件名发生了变化，则重命名
    if not "!oldname!"=="!newname!" (
        echo 重命名: !oldname! -^> !newname!
        ren "!oldname!" "!newname!"
    )
)

echo 处理完成！
pause
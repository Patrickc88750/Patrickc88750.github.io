@echo off
set source_file=CVCreekside.html
for /F "tokens=*" %%i in (filelist.txt) do (
        copy /Y "%source_file%" "%%i"
)

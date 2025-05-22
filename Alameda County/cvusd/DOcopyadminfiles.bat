@echo off
set source_file=CVDistrict_admin.html
for /F "tokens=*" %%i in (adminfilelist.txt) do (
        copy /Y "%source_file%" "%%i"
)
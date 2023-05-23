copy /Y filelist.txt adminfilelist.txt
sed -i "s/.html/_admin.html/g" adminfilelist.txt

set source_file=CVDistrict_admin.html
for /F "tokens=*" %%i in (adminfilelist.txt) do (
        copy /Y "%source_file%" "%%i"
)

for /F "tokens=*" %%i in (adminfilelist.txt) do (
  sed -i "s/CVCreekside_MakeBell/%%~ni_MakeBell/g" "%%i"
  sed -i "s/_admin_MakeBell/_MakeBell/g" "%%i"
  sed -i "s/CVDistrict_admin/%%~ni/g" "%%i"
)

copy /Y CVDistrict_admin.html CVCreekside.html
sed -i "s/adminmode = 1/adminmode = 0/g" CVCreekside.html
sed -i "s/schoolid = \"CVDistrict_admin\"/schoolid = \"CVCreekside\"/g" CVCreekside.html


set source_file=CVCreekside.html
for /F "tokens=*" %%i in (filelist.txt) do (
        copy /Y "%source_file%" "%%i"
)

for /F "tokens=*" %%i in (filelist.txt) do (
  sed -i "s/CVCreekside_MakeBell/%%~ni_MakeBell/g" "%%i"
  sed -i "s/CVCreekside/%%~ni/g" "%%i"
)

setlocal

rem Set the directory to the current directory
set "directory=%cd%"

rem Delete all files starting with "sed" and ending with any extension
del /q "%directory%\sed*.*"

rem Print a message to confirm the files have been deleted
echo Temporary sed files deleted.
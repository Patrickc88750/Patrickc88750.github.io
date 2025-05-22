for /F "tokens=*" %%i in (filelist.txt) do (
  sed -i "s/CVCreekside_MakeBell/%%~ni_MakeBell/g" "%%i"
  sed -i "s/schoolid = \"CVCreekside\"/schoolid = \"%%~ni\"/g" "%%i"
)

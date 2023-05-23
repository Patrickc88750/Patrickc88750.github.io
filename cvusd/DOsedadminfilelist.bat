for /F "tokens=*" %%i in (adminfilelist.txt) do (
  sed -i "s/CVCreekside_MakeBell/%%~ni_MakeBell/g" "%%i"
  sed -i "s/_admin_MakeBell/_MakeBell/g" "%%i"
  sed -i "s/schoolid = \"CVDistrict_admin\"/schoolid = \"%%~ni\"/g" "%%i"
)

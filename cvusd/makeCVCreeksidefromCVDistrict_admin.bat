copy /-Y CVDistrict_admin.html CVCreekside.html
@sed -i "s/adminmode = 1/adminmode = 0/g" CVCreekside.html
sed -i "s/schoolid = \"CVDistrict_admin\"/schoolid = \"CVCreekside\"/g" CVCreekside.html



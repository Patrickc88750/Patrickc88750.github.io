@echo off
setlocal

rem Set the directory to the current directory
set "directory=%cd%"

rem Delete all files starting with "sed" and ending with any extension
del /q "%directory%\sed*.*"

rem Print a message to confirm the files have been deleted
echo Temporary sed files deleted.

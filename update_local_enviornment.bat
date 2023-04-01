@echo off

:: Get the latest requirements.txt file from GitHub
curl -s https://raw.githubusercontent.com/<username>/<repository>/main/requirements.txt -o %TEMP%\github_requirements.txt

:: Compare the requirements files
fc requirements.txt %TEMP%\github_requirements.txt >nul
if errorlevel 1 (
    echo The requirements.txt file has changed on GitHub. Updating local environment...
    pip install -r requirements.txt
    echo Local environment updated.
)
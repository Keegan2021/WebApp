#!/bin/bash

#Get the latest requirements.txt file from github
curl -s https://raw.githubusercontent.com/Keegan2021/WebApp.git/main/requirements.txt

#compare diffenences
if | diff -q requirements.txt /tmp/github_requirements.txt >/dev/null; then
    echo "The Requirements.txt file has changed on GitHub. updating local enviornment"
    pip install -r requirements.txt
    echo "Local Envornment updated."
fi

echo "got here"
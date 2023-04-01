import requests

def test_homepage():
    url = 'http://localhost:5000/'
    response = requests.get(url)
    assert response.status_code == 200

def test_application01():
    url = 'http://localhost:5000/app1'
    response = requests.get(url)
    assert response.status_code == 200

def test_application02():
    url = 'http://localhost:5000/app2'
    response = requests.get(url)
    assert response.status_code == 200

def test_colors():
    url = 'http://localhost:5000/colors'
    response = requests.get(url)
    assert response.status_code == 200



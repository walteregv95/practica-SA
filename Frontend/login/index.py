from flask import Flask, render_template, request, redirect
from localStoragePy import localStoragePy
import requests

localStorage = localStoragePy('app-login', 'json')
port = 5000

app = Flask(__name__)

host = "http://localhost:4200"
URI = "http://localhost:9500"

@app.route('/')
def template():
    return render_template("index.html")


@app.route('/login', methods=['POST'])
def login():
    role = request.form['email']
    res = requests.post(URI+"/login", data={'role': role})
    localStorage.setItem("token", res.json())
    if role == "delivery":
        return redirect(host+"/delivery")
    elif role == "restaurant":
        return redirect(host+"/notify")
    elif role == "client":
        return redirect(host+"/order")
    

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=port)
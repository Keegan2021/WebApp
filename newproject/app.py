from flask import Flask, render_template, request, make_response

#this creates an app to call actions on
app = Flask(__name__, static_url_path='/static')


@app.route('/')
def index():
    return render_template('index.html')

@app.route('/app1')
def app1():
    return render_template('app1.html')

@app.route('/app2')
def app2():
    return render_template('app2.html')

@app.route('/colors')
def colors():
    return render_template('colors.html')

#Dark Mode
@app.route('/set_mode', methods=['POST'])
def set_mode():
    mode = request.form.get('mode')
    # Do something with the mode (e.g. set a cookie, update a database)
    print(f"Mode set to {mode}")
    response = make_response()
    response.status_code = 200
    return response

if __name__ == '__main__':
    app.run(debug=True)



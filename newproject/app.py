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


if __name__ == '__main__':
    app.run(debug=True)



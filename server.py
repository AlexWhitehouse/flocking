from flask import Flask, render_template, url_for, send_from_directory
from flask_bootstrap import Bootstrap

app = Flask(__flock__)
bootstrap = Bootstrap(app)

@app.route('/')
def home():
    return render_template('index.html')


@app.route('/static/sketch.js')
def send_static(path):
    return send_from_directory('static', path)
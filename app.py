from flask import Flask, render_template

app = Flask(__name__)

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/me')
def me():
    return { "success": True, "data": "My Name is what"}

if __name__ == '__main__':
    app.run(debug=True)

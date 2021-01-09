from flask import (Flask, render_template, request, flash, session,
                   redirect, jsonify)

app = Flask(__name__)
app.secret_key = os.environ.get("SECRET_KEY") 

@app.route("/")
def hello():
    return render_template("index.html")


if __name__ == '__main__':
    app.run(host='0.0.0.0', debug=True)

from flask import (Flask, render_template, request, flash, session,
                   redirect)

app = Flask(__name__)
app.secret_key = "dev"

@app.route("/")
def hello():
    return render_template("root.html")


if __name__ == '__main__':
    app.run(host='0.0.0.0', debug=True)

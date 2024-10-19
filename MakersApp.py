from flask import (Flask, request, render_template)
import sqlite3


app = Flask(__name__)

app.config['SECRET_KEY'] = 'SUPER SECRETO'


@app.errorhandler(404)
def not_Found(error):
    return render_template('404.html',error = error)

if __name__ == '__main__':
    app.run(debug=True)

from flask import (Flask, request)
import sqlite3


app = Flask(__name__)

app.config['SECRET_KEY'] = 'SUPER SECRETO'



if __name__ == '__main__':
    app.run(debug=True)

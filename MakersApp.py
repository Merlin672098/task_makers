from flask import (Flask, request, render_template, redirect, session, make_response)
import sqlite3


app = Flask(__name__)

app.config['SECRET_KEY'] = 'SUPER SECRETO'


@app.errorhandler(404)
def not_Found(error):
    return render_template('404.html',error = error)

@app.errorhandler(500)
def not_found(error):
    return render_template('500.html',error=error)

#Ruta Principal
@app.route ('/')
def index():
    return render_template('index.html')

if __name__ == '__main__':
    app.run(debug=True)

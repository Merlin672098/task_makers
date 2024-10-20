from flask import (Flask, request, render_template, redirect, session, make_response)
import sqlite3

app = Flask(__name__)

app.config['SECRET_KEY'] = 'SUPER SECRETO'

def get_db():
    conn = sqlite3.connect('MakersData.db')
    conn.row_factory = sqlite3.Row  # Permite acceder a los datos como diccionarios
    return conn

@app.errorhandler(404)
def not_Found(error):
    return render_template('404.html',error = error)

@app.errorhandler(500)
def not_found(error):
    return render_template('500.html',error=error)

#Ruta Principal
@app.route ('/')
def index():
    conn = get_db()
    productos = conn.execute('SELECT * FROM productos').fetchall()
    ventas = conn.execute('SELECT * FROM ventas').fetchall()
    conn.close()
    return render_template('index.html', productos=productos, ventas=ventas)

if __name__ == '__main__':
    app.run(debug=True)

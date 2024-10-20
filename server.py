#LIBRERIAS
import json, logging, os , asyncio, re
from fastapi import FastAPI, HTTPException
from pydantic import BaseModel
from dotenv import load_dotenv
from google.cloud import dialogflow_v2 as dialogflow
from flask_wtf import FlaskForm
from psycopg2 import sql
from pydantic import BaseModel, Extra
from typing import Dict, Any
from flask import (Flask,redirect,render_template, make_response,url_for)
import sqlite3
from fastapi import HTTPException
from wtforms.fields import StringField, PasswordField, SubmitField
from wtforms.validators import DataRequired

#Inicio del código  
logging.basicConfig(level=logging.DEBUG)
logger = logging.getLogger(__name__)

# load_dotenv()

BACKEND_SERVER = "http://localhost:8000"
app = Flask(__name__)
DIALOGFLOW_PROJECT_ID = "fresh-buffer-430517-i1"
DIALOGFLOW_LANGUAGE_CODE = "es"
SESSION_ID = "current-session"

class LoginForm(FlaskForm):
    username = StringField('Nombre de Usuario', validators=[DataRequired()])
    password = PasswordField('Password', validators=[DataRequired()])
    submit = SubmitField('Enviar')


# Función síncrona para obtener el esquema de la base de datos
def get_schema():
    connection = None
    try:
        connection = sqlite3.connect("MakersData.db")
        cursor = connection.cursor()

        cursor.execute("""
            SELECT name FROM sqlite_master WHERE type='table';
        """)
        
        tables = cursor.fetchall()
        
        schema_dict = {}
        for (table_name,) in tables:
            cursor.execute(f"PRAGMA table_info({table_name});")
            columns = cursor.fetchall()
            schema_dict[table_name] = [(column[1], column[2]) for column in columns]  # (column_name, data_type)
        
        logger.info("Esquema de la base de datos: %s", schema_dict)
        return schema_dict

    except Exception as e:
        logger.error(f"Error al obtener el esquema: {e}")
        return {}
    finally:
        if connection:
            cursor.close()
            connection.close()

# Función síncrona para ejecutar una consulta SQL
def query(sql_query: str):
    connection = None
    try:
        connection = sqlite3.connect("MakersData.db")
        cursor = connection.cursor()
        cursor.execute(sql_query)
        
        if sql_query.strip().lower().startswith("select"):
            results = cursor.fetchall()
            return results
        else:
            connection.commit()
            return cursor.rowcount

    except Exception as e:
        logger.error(f"Error al ejecutar la consulta: {e} | SQL Query: {sql_query}")
        raise HTTPException(status_code=500, detail="Error en la consulta SQL")
    finally:
        if connection:
            cursor.close()
            connection.close()

@app.route ('/otra_pagina')
def otra_pagina():
    return render_template('login.html')

@app.route ('/otra_pagina2')
def otra_pagina2():
    return redirect(url_for('dashboard'))

#RUTA DE INICIO
@app.route("/welcome")
def welcome():
    return render_template('Welcome.html')


@app.route('/login', methods=['GET','POST'])
def login():
    return render_template('login.html')

@app.route("/chatbot")
def chatbot():
    schema = get_schema()
    sql_query = "SELECT * FROM productos;"
    result = query(sql_query)
    return render_template('/chatbot.html', schema=schema, result=result)

#message": "Welcome", "schema": schema, "result": result
#cualquier cosa
@app.route("/")
def read_root():
    response = make_response(redirect('/welcome'))
    return response

if __name__ == '__main__':
    app.run(debug=True)

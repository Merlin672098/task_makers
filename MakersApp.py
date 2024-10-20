from flask import (Flask, request, render_template, redirect, session, make_response)
import sqlite3, json, logging, os, asyncio,logging, re
from fastapi import FastAPI, HTTPException
from google.cloud import dialogflow_v2 as dialogflow
from pydantic import BaseModel, Extra

app = Flask(__name__)
logger = logging.getLogger(__name__)

app.config['SECRET_KEY'] = 'SUPER SECRETO'

#ASYNC DEF

async def get_schema():
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
        
        print("Esquema de la base de datos:", schema_dict)
        return schema_dict

    except Exception as e:
        logger.error(f"Error al obtener el esquema: {e}")
        return {}
    finally:
        if connection:
            cursor.close()
            connection.close()

async def query(sql_query: str):
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

def detect_intent_texts(project_id, session_id, text, language_code):
    """Detecta la intención de un texto utilizando Dialogflow."""
    session_client = dialogflow.SessionsClient()
    session = session_client.session_path(project_id, session_id)

    text_input = dialogflow.TextInput(text=text, language_code=language_code)
    query_input = dialogflow.QueryInput(text=text_input)

    try:
        response = session_client.detect_intent(session=session, query_input=query_input)
        fulfillment_text = response.query_result.fulfillment_text
        logger.debug(f"Dialogflow Fulfillment Text: {fulfillment_text}")
        return fulfillment_text
    except Exception as e:
        logger.error(f"Error en Dialogflow: {e}")
        raise HTTPException(status_code=500, detail="Error en Dialogflow")

async def human_query_to_sql(human_query: str):
    logger.debug(f"Texto recibido para convertir a SQL: {human_query}")

    query_lower = human_query.lower()

    if "cuántos usuarios hay" in query_lower or "usuarios registrados" in query_lower or "hay" in query_lower and "usuarios registrados" in query_lower:
        query = "SELECT COUNT(*) FROM usuario;"
        logger.debug(f"Generated SQL query: {query}")
        return query

    match = re.search(r"quién es (.+)", query_lower)
    if match:
        nombre_usuario = match.group(1).strip().replace("'", "''")
        query = f"SELECT * FROM usuario WHERE nombreusuario = '{nombre_usuario}';"
        logger.debug(f"Generated SQL query: {query}")
        return query

    logger.debug("No valid SQL query generated.")
    return None
async def build_answer(result: list[tuple], human_query: str) -> str | None:
    if not result:
        return f"No se encontraron resultados para '{human_query}'."
    
    user_info = ", ".join([str(user) for user in result])  # Aquí puedes formatear mejor la información
    return f"Resultados para '{human_query}': {user_info}"


class PostHumanQueryPayload(BaseModel):
    human_query: str
    additionalProps: Dict[str, Any] = {} 

    class Config:
        extra = 'allow'  


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

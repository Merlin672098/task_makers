#LIBRERIAS
import json, logging, os , asyncio, re
from fastapi import FastAPI, HTTPException
from pydantic import BaseModel
from dotenv import load_dotenv
from google.cloud import dialogflow_v2 as dialogflow
import psycopg2
from psycopg2 import sql
from pydantic import BaseModel, Extra
from typing import Dict, Any
from flask import (Flask,redirect,render_template, make_response,request, jsonify)


#Inicio del código
logging.basicConfig(level=logging.DEBUG)
logger = logging.getLogger(__name__)

# load_dotenv()

BACKEND_SERVER = "http://localhost:8000"
app = Flask(__name__)
DIALOGFLOW_PROJECT_ID = "fresh-buffer-430517-i1"
DIALOGFLOW_LANGUAGE_CODE = "es"
SESSION_ID = "current-session"

import sqlite3
from fastapi import HTTPException

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

    # Detectar cantidad de usuarios con más variaciones
    if "cuántos usuarios hay" in query_lower or "usuarios registrados" in query_lower or "hay" in query_lower and "usuarios registrados" in query_lower:
        query = "SELECT COUNT(*) FROM usuario;"
        logger.debug(f"Generated SQL query: {query}")
        return query

    # Detectar usuario por nombre
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
    
    # Si se encontró al menos un resultado, construye la respuesta
    user_info = ", ".join([str(user) for user in result])  # Aquí puedes formatear mejor la información
    return f"Resultados para '{human_query}': {user_info}"

class PostHumanQueryPayload(BaseModel):
    human_query: str
    additionalProps: Dict[str, Any] = {} 

    class Config:
        extra = Extra.allow 



from fastapi import FastAPI, HTTPException

@app.route('/human_query', methods=['POST'])
async def human_query():
    payload = request.get_json()
    try:
        intent_response = detect_intent_texts(DIALOGFLOW_PROJECT_ID, SESSION_ID, payload['human_query'], DIALOGFLOW_LANGUAGE_CODE)
        sql_query = await human_query_to_sql(intent_response)

        logger.debug(f"Generated SQL query: {sql_query}")

        if not sql_query:
            raise HTTPException(status_code=400, detail="Falló la generación de la consulta SQL")

        result = await query(sql_query)

        answer = await build_answer(result, payload['human_query'])
        if not answer:
            raise HTTPException(status_code=400, detail="Falló la generación de la respuesta")

        # Cambio aquí: Enviar respuesta como 'response' para que lo reciba el JS
        return jsonify({"response": answer})

    except Exception as e:
        logger.error(f"Error: {str(e)}")
        raise HTTPException(status_code=500, detail="Error interno del servidor")
# async def human_query():
#     payload = request.get_json()
#     try:
#         intent_response = detect_intent_texts(DIALOGFLOW_PROJECT_ID, SESSION_ID, payload.human_query, DIALOGFLOW_LANGUAGE_CODE)
#         sql_query = await human_query_to_sql(intent_response)

#         logger.debug(f"Generated SQL query: {sql_query}")

#         if not sql_query:
#             raise HTTPException(status_code=400, detail="Falló la generación de la consulta SQL")

#         result = await query(sql_query)

#         answer = await build_answer(result, payload.human_query)
#         if not answer:
#             raise HTTPException(status_code=400, detail="Falló la generación de la respuesta")

#         return {"answer": answer}
#     except Exception as e:
#         logger.error(f"Error: {str(e)}")
#         raise HTTPException(status_code=500, detail="Error interno del servidor")

# Ruta GET para leer la raíz

#RUTA DE INICIO
@app.route("/welcome")
def welcome():
    return render_template('Welcome.html')

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

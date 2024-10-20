import json
import logging
import os
import asyncio
from fastapi import FastAPI, HTTPException
from pydantic import BaseModel
from dotenv import load_dotenv
from google.cloud import dialogflow_v2 as dialogflow
import psycopg2
from psycopg2 import sql
from pydantic import BaseModel, Extra
from typing import Dict, Any
import re
import logging
from fastapi.middleware.cors import CORSMiddleware
import re

logging.basicConfig(level=logging.DEBUG)
logger = logging.getLogger(__name__)


load_dotenv()

logger = logging.getLogger(__name__)

BACKEND_SERVER = ("http://localhost:8000")

app = FastAPI(servers=[{"url": BACKEND_SERVER}])

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  
    allow_credentials=True,
    allow_methods=["*"],  
    allow_headers=["*"],  
)
DIALOGFLOW_PROJECT_ID = ("fresh-buffer-430517-i1")
DIALOGFLOW_LANGUAGE_CODE = "es"  
SESSION_ID = "current-session"  

async def get_schema():
    connection = None
    try:
        connection = psycopg2.connect(
            host="localhost",
            database="ecommerce_makers",
            user="postgres",
            password="qwerty"
        )
        cursor = connection.cursor()

        cursor.execute("""
            SELECT table_name, column_name, data_type
            FROM information_schema.columns
            WHERE table_schema = 'public'
            ORDER BY table_name, ordinal_position;
        """)

        schema = cursor.fetchall()
        
        schema_dict = {}
        for table, column, data_type in schema:
            if table not in schema_dict:
                schema_dict[table] = []
            schema_dict[table].append((column, data_type))
        
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
        connection = psycopg2.connect(
            host="localhost",
            database="ecommerce_makers",
            user="postgres",
            password="qwerty"
        )
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

    # Manejar la consulta para obtener computadoras disponibles
    if "ordenadores disponibles" in query_lower or "computadoras disponibles" in query_lower:
        query = """
            SELECT nombre, marca, cantidad 
            FROM productos 
            WHERE categoria = 'Computadoras';
        """
        logger.debug(f"Generated SQL query: {query}")
        return query

    match = re.search(r"dime más sobre el (.+)", query_lower)
    if match:
        nombre_producto = match.group(1).strip().replace("'", "''")
        query = f"""
            SELECT nombre, marca, descripcion, precio, cantidad 
            FROM productos 
            WHERE nombre ILIKE '%{nombre_producto}%';
        """
        logger.debug(f"Generated SQL query: {query}")
        return query

    logger.debug("No valid SQL query generated.")
    return None



async def build_answer(result: list[tuple], human_query: str) -> str | None:
    if not result:
        return f"No se encontraron resultados para '{human_query}'."
    
    if "cuántos ordenadores hay disponibles" in human_query.lower():
        total_ordenadores = sum([int(r[2]) for r in result if isinstance(r[2], int)])
        detalles = ", ".join([f"{r[2]} {r[0]}" for r in result])  
        return f"En este momento, tenemos {total_ordenadores} ordenadores; {detalles}. ¿Cuál le gustaría comprar?"

    if "dígame más sobre el ordenador" in human_query.lower():
        detalles = ", ".join([f"{r[2]} - {r[3]} GHz, {r[4]} GB RAM, {r[5]} GB de almacenamiento" for r in result])
        return f"Los detalles del ordenador son: {detalles}."

    user_info = ", ".join([str(user) for user in result])  
    return f"Resultados para '{human_query}': {user_info}"

class PostHumanQueryPayload(BaseModel):
    human_query: str
    additionalProps: Dict[str, Any] = {}  

    class Config:
        extra = 'allow' 

@app.post("/human_query")
async def human_query(payload: PostHumanQueryPayload):
    intent_response = detect_intent_texts(DIALOGFLOW_PROJECT_ID, SESSION_ID, payload.human_query, DIALOGFLOW_LANGUAGE_CODE)
    
    sql_query = await human_query_to_sql(intent_response)
    logger.debug(f"Generated SQL query: {sql_query}")

    if not sql_query:
        raise HTTPException(status_code=400, detail="Falló la generación de la consulta SQL")

    result = await query(sql_query)

    # Generar la respuesta
    answer = await build_answer(result, payload.human_query)
    if not answer:
        raise HTTPException(status_code=400, detail="Falló la generación de la respuesta")

    return {"answer": answer}
@app.get("/")
async def read_root():
    schema = await get_schema()
    sql_query = "SELECT * FROM productos;"
    result = await query(sql_query)

    return {"message": "Welcome", "schema": schema, "result": result}

if __name__ == "__main__":
    import uvicorn

    uvicorn.run(app, host="0.0.0.0", port=8000)
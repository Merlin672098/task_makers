from flask import Flask, request, jsonify
import google.generativeai as genai
import google.auth

app = Flask(__name__)

# Configuración de Google Generative AI
credentials, project_id = google.auth.default()
genai.configure(api_key="AIzaSyBfmek5R-e0t6pWMkSe4ccDmsShK4Q8dUI")
genai.configure(credentials=credentials)

generation_config = {
    "temperature": 1,
    "top_p": 0.95,
    "top_k": 64,
    "max_output_tokens": 8192,
    "response_mime_type": "text/plain",
}

model = genai.GenerativeModel(
    model_name="tunedModels/prueba1-fjll5xl8ritp",
    generation_config=generation_config,
)

@app.route('/')
def home():
    return "Servidor Flask activo"


@app.route('/ai-chat', methods=['POST'])
def ai_chat():
    data = request.json
    user_message = data.get('message', '')

    chat_session = model.start_chat(
        history=[
            {"role": "user", "parts": [user_message]},
        ]
    )
    print('User:', user_message)
    response = chat_session.send_message(user_message)
    return jsonify({"response_text": response.text})

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000)

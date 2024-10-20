document.addEventListener('DOMContentLoaded', () => {
    const mainChat = document.querySelector('#chat-content');
    const askButton = document.querySelector('#ask-button');
    const inputField = document.querySelector('#input-command');
    const lastDiv = document.querySelector('#last');

    const addMessage = (text, className) => {
        const row = document.createElement('div');
        row.classList.add('row');
        const message = document.createElement('div');
        message.classList.add('chat', className, 'shadow');
        message.textContent = text;
        row.appendChild(message);
        mainChat.appendChild(row);
    };

    const askQuestion = () => {
        const userQuery = inputField.value;

        if (userQuery.trim() !== '') {
            // Mostrar la pregunta del usuario en el chat
            addMessage(userQuery, 'question');

            // Hacer la solicitud POST al backend para obtener la respuesta
            fetch('http://127.0.0.1:8000/human_query', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ human_query: userQuery })
            })
            .then(response => response.json())
            .then(data => {
                // Mostrar la respuesta del backend en el chat
                addMessage(data.response, 'answer');
                
                // Scroll hacia el final del chat
                lastDiv.scrollIntoView();
            })
            .catch(error => {
                console.error('Error fetching response:', error);
                addMessage('Oops! Something went wrong.', 'answer');
            });

            // Limpiar el campo de entrada
            inputField.value = '';
        } else {
            alert('Por favor ingresa un comando.');
        }
    };

    // Manejar el click en el botón de preguntar
    askButton.addEventListener('click', askQuestion);

    // Manejar el "Enter" para enviar la pregunta
    inputField.addEventListener('keyup', (event) => {
        if (event.keyCode === 13) {
            askQuestion();
        }
    });
});

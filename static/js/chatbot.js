// document.querySelector('.buttonn').addEventListener('click', function() {
//     const inputCommand = document.querySelector('input').value;

//     if (inputCommand) {
//         // Añadir la pregunta del usuario al chat con los estilos adecuados
//         addQuestion(inputCommand);

//         // Enviar la consulta al servidor
//         fetch('https://6289-131-0-196-252.ngrok-free.app/human_query', {
//             method: 'POST',
//             headers: {
//                 'Content-Type': 'application/json'
//             },
//             body: JSON.stringify({
//                 human_query: inputCommand
//             })
//         })
//         .then(response => {
//             if (!response.ok) {
//                 throw new Error('Network response was not ok ' + response.statusText);
//             }
//             return response.json();
//         })
//         .then(data => {
//             // Añadir la respuesta del bot al chat con los estilos adecuados
//             addAnswer(data.answer);
//         })
//         .catch(error => console.error('Error:', error));
//     } else {
//         alert('Por favor ingresa un comando.');
//     }
// });

// Función para añadir la pregunta al chat con los estilos adecuados
function addQuestion(text) {
    const main = document.querySelector('main');
    main.innerHTML += `
        <div class="row">
            <div class="chat question shadow">${text}</div>
        </div>
    `;
    scrollToBottom();
}

// Función para añadir la respuesta del bot al chat con los estilos adecuados
function addAnswer(text) {
    const main = document.querySelector('main');
    main.innerHTML += `
        <div class="row">
            <div class="chat answer shadow">${text}</div>
        </div>
    `;
    scrollToBottom();
}

// Función para hacer scroll automático al final del chat
function scrollToBottom() {
    const lastElement = document.getElementById('last');
    lastElement.scrollIntoView();
}

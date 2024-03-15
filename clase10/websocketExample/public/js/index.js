const socket = io();


//Enviando info desde el cliente al servidor
socket.emit("message", "Hola me estoy comunicando desde un websocket");

//Escucha del lado del cliente
socket.on('evento_para_socket_individual', data => {
    console.log('>>>>>>> evento_para_socket_individual\n', data);
});

socket.on('evento_para_todos_menos_el_socket_actual', data => {
    console.log('>>>>>>> Evento_para_todos_menos_el_socket_actual\n', data);
})

socket.on('evento_para_todos', data => {
    console.log('>>>>>>> evento_para_todos\n', data)
})
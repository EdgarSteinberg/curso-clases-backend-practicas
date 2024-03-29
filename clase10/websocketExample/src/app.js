import express from 'express';
import handlebars from 'express-handlebars';
import { Server } from 'socket.io';

import __dirname from './utils.js';
import viewsRouter from './routes/views.routes.js';

const app = express();


app.engine("handlebars", handlebars.engine());
app.set("views", `${__dirname}/views`);
app.set("view engine", "handlebars");

app.use(express.static(`${__dirname}/../public`));

app.use("/", viewsRouter);

const PORT = 8080;
const httpServer = app.listen(PORT, () => {
    console.log(`Servidor activo en http://localhost:${PORT}`);
});

const socketServer = new Server(httpServer);

socketServer.on("connection", socket => {
    console.log("Nuevo cliente conectado ------>", socket.id);

    //Recibiendo info del cliente al servidor
    socket.on("message", data => {
        console.log("Recibi el dato: ", data);
    })

    //Enviando info desde el servidor hacia el cliente
    socket.emit('evento_para_socket_individual', 'Este mensaje solo lo debe recibir el socket');

    socket.broadcast.emit('evento_para_todos_menos_el_socket_actual', 'Este evento lo verán todos los sockets conectados, menos el socket actual desde el que se envió el mensaje');

    socketServer.emit('evento_para_todos', 'Este mensaje lo recibirán todos los sockets conectados');

})
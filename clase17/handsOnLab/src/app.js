import express from 'express';
import handlebars from 'express-handlebars';
import mongoose from 'mongoose';

import __dirname from './utils.js';
import viewsRouter from './routes/views.routes.js'

mongoose.connect("mongodb+srv://steinberg2024:cai2024@cluster0.cl7spkj.mongodb.net/class-17?retryWrites=true&w=majority&appName=Cluster0");

const app = express();

//Inicializamos el motor de plantillas
app.engine("handlebars", handlebars.engine());

//Establecemos la ruta de vistas
app.set("views", `${__dirname}/views`);

//Establecemos el motor de renderizado
app.set("view engine", "handlebars");

//Establecemos el servidor estatico de archivos
app.use(express.static(`${__dirname}/../public`));

app.use("/", viewsRouter);

const PORT = 8080

app.listen(PORT, () => {
    console.log(`Servidor activo en http://localhost:${PORT}`)
})
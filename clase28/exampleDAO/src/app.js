// Configuracion del servidor express
import express from 'express';
import mongoose from 'mongoose';

import contacRouter from './router/contacsRouter.js';

mongoose.connect('mongodb://127.0.0.1:27017/class-28');
const app = express();


app.use(express.json());
app.use(express.urlencoded({extended: true}))


app.use('/api/contacts', contacRouter);

const PORT = 8080;
app.listen(PORT, () => {
    console.log(`Server Start in http://localhost:${PORT}`)
})
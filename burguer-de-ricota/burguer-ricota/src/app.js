import express from 'express';
import mongoose from 'mongoose';

import usersRouter from './router/usersRouter.js';
import ordersRouter from './router/ordersRouter.js';
import bisnessRouter from './router/bisnessRouter.js';

const app = express();
mongoose.connect('mongodb://127.0.0.1:27017/burguer-ricota')

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use('/api/users', usersRouter);
app.use('/api/orders', ordersRouter);
app.use('/api/business', bisnessRouter);

const PORT = 8080
app.listen(PORT , () => {
    console.log(`Start Server in http://localhost:${PORT}`)
});
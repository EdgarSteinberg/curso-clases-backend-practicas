import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors'

import userRouter from './router/userRouter.js';
import orderRouter from './router/ordersRouter.js';
import bussinessRouter from './router/businessRouter.js';

const app = express();
mongoose.connect('mongodb://127.0.0.1:27017/coder-eats')

app.use(cors({
    origin: 'http://localhost:5500',
    //origin: 'http://127.0.0.1:5500',
    methods: ['GET', 'POST', 'PUT']
}))

app.use(express.json());
app.use(express.urlencoded({extended:true}))


app.use('/api/users', userRouter);
app.use('/api/orders', orderRouter);
app.use('/api/business', bussinessRouter);

const PORT = 8080;
app.listen(PORT , () => {
    console.log(`Start Server in http://localhost:${PORT}`);
})
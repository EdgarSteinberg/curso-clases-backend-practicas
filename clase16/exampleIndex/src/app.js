import express from 'express';
import mongoose from 'mongoose';

import userRouter from './routes/userRouter.js'

const app = express();

app.use(express.json()),
app.use(express.urlencoded({extended: true}));

const uri = "mongodb://localhost:27017/class-16"
//const uri = "mongodb+srv://steinberg2024:cai2024@cluster0.cl7spkj.mongodb.net/class-16?retryWrites=true&w=majority&appName=Cluster0";
mongoose.connect(uri);

app.use("/api/users", userRouter);

const PORT = 8080;

app.listen(PORT, () => {
    console.log(`Servidor activo en http://localhost:${PORT}`);
});
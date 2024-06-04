import express from 'express';

import userRouter from './router/userRouter.js'

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended:true}))

app.use('/api/users', userRouter);

const PORT = 8080;

app.listen(PORT, () => {
    console.log(`Sever Star in http://localhost:${PORT}`)
})
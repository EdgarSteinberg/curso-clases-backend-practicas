import express from 'express';
import testRouter from './routes/testRouter.js'
import petsRouter from './routes/petsRouter.js'

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.use('/api/test', testRouter);
app.use('/api/pets', petsRouter);

const PORT = 8080;

app.listen(PORT, () => {
    console.log(`Start Server in Port ${PORT}`)
});
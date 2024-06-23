import express from 'express';
import mongoose from 'mongoose';

import userRouter from './routes/userRouter.js';
import sessionRouter from './routes/sessionRouter.js';

import { fakerEN as faker } from '@faker-js/faker';

// MongoDB connect
mongoose.connect("mongodb://127.0.0.1:27017/clase34");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api/users', userRouter);
app.use('/api/sessions', sessionRouter);

app.get('/api/test/user', (req, res) => {
    let first_name = faker.person.firstName();
    let last_name = faker.person.lastName();
    let email = faker.internet.email();
    let password = faker.internet.password();
    res.send({ first_name, last_name, email, password });
});

const PORT = 8080;

app.listen(PORT, () => {
    console.log(`Server started at http://localhost:${PORT}`);
});

import { Router } from 'express';
import UserController from '../controllers/userController.js';
//const userController = new UserController();
const sessionController = new UserController();
const router = Router();

router.get('/simple' , async (req, res) => {
    let total= 0
    for(let i = 0; i < 10000; i++){
        total += i
    }
    res.status(200).send({
        status: 'success',
        data: total
    })
});

router.get('/complex', async (req, res) => {
    let total= 0
    for(let i = 0; i < 5e8 ; i++){
        total += i
    }
    res.status(200).send({
        status: 'success',
        data: total
    })
});

router.post('/login', async (req, res) => {
    const { email, password } = req.body;
    if (!email || !password) {
        return res.status(400).send({ error: 'Falta email o password' });
    }
    try {
        const user = await sessionController.login(email, password);
        res.send(user);
    } catch (error) {
        res.status(500).send({ error: error.message });
    }
});

router.post('/register', async (req, res) => {
    const { first_name, last_name, email, password } = req.body;
    if (!first_name || !last_name || !email || !password) {
        return res.status(400).send({ error: 'Debes completar todos los campos obligatorios' });
    }
    try {
        const newUser = await sessionController.registerUser({ first_name, last_name, email, password });
        res.send(newUser);
    } catch (error) {
        res.status(500).send({ error: error.message });
    }
});

export default router;
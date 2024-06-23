import { Router } from 'express';
import UserController from '../controllers/userController.js';
const userController = new UserController();
const router = Router();

router.get('/', async (req, res) => {
    try {
        const result = await userController.getUser();
        res.send({
            status: 'success',
            payload: result
        });
    } catch (error) {
        res.status(400).send({
            error: 'error',
            message: error.message
        });
    }
});

router.get('/:uid', async (req, res) => {
    try {
        const { uid } = req.params;
        const result = await userController.getUserById(uid);
        res.send({
            status: 'success',
            payload: result
        });
    } catch (error) {
        res.status(400).send({
            error: 'error',
            message: error.message
        });
    }
});

router.post('/registro', async (req, res) => {
    try {
        const user = req.body;
        const result = await userController.registerUser(user);
        res.send({
            status: 'success',
            payload: result
        });
    } catch (error) {
        res.status(400).send({
            error: 'error',
            message: error.message
        });
    }
});

router.post('/login', async (req, res) => {
    const { email, password } = req.body;
    const result = await userController.login(email, password)
    try {
        res.send({
            status: 'success',
            payload: result
        });
    } catch (error) {
        res.status(400).send({
            error: 'error',
            message: error.message
        });
    }
});

router.put('/:uid', async (req, res) => {
    const { uid } = req.params
    const updateData = req.body
    const result = await userController.updateUser(uid, updateData)

    try {
        res.send({
            status: 'success',
            payload: result
        });
    } catch (error) {
        res.status(400).send({
            error: 'error',
            message: error.message
        });
    }
});

router.delete('/:uid', async (req, res) => {
    const { uid } = req.params
    const result = await userController.deleteUser(uid)
    try {
        res.send({
            status: 'success',
            payload: result
        });
    } catch (error) {
        res.status(400).send({
            error: 'error',
            message: error.message
        });
    }
})

export default router;

import { Router } from 'express';

import UserController from '../controllers/userController.js';

const router = Router();

const userController = new UserController();

// Ruta para obtener todos los usuarios
router.get('/', async (req, res) => {
    const result = await userController.getAllUsers();

    res.send({
        status: 'success',
        payload: result
    });
});
// Ruta para obtener un usuario por su ID
router.get('/:uid', async (req, res) => {
    
    try {
        const result = await userController.getUserByID(req.params.uid);
        res.send({
            status: 'success',
            payload: result
        })
    } catch (error) {
        res.status(400).send({
            status: 'error',
            message: error.message
        });
    }
});
// Ruta para crear un nuevo usuario
router.post('/', async (req,res) => {

    try{    
        const result = await userController.createUser(req.body);
        res.send({
            status: 'success',
            payload: result
        })
    }catch(error){
        res.status(400).send({
            status: 'error',
            message: error.message
        })
    }
});


export default router;
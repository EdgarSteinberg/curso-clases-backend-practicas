import { Router } from 'express'

import ToyController from '../controllers/toyController.js';

const router = Router();

const toyController = new ToyController();

// Ruta para obtener todos los jueguetes
router.get('/', async (req,res) => {
    const result = await toyController.getAllToy();

    res.send({
        status: 'success',
        payload: result
    });
});
// Ruta para obtener un juguete por su ID
router.get('/:tid', async (req,res) => {
    
    try{
        const result = await toyController.getToyByID(req.params.tid);
        res.send({
            status:'success',
            payload: result
        })
    }catch(error){
        res.status(400).send({
            status: 'error',
            message: error.message
        });
    }
});
// Ruta para crear un nuevo juguete
router.post('/', async (req,res) => {
    try{
        const result = await toyController.createToy(req.body)
        res.send({
            status: 'success',
            payload: result 
        })
    }catch(error){
        res.status(400).send({
            status: 'error',
            message: error.message
        });
    }
});

export default router;
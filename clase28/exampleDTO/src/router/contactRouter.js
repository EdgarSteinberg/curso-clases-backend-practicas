import {Router} from 'express'
import ContactController from '../controller/contactController.js';

const router = Router();
const contactsService = new ContactController();

router.get('/', async (req, res) => {
    try{
        const result = await contactsService.getAll();
        res.send({
            status: 'success',
            payload: result
        });
    }catch(error){
        res.status(400).send({
            error: 'error',
            message: error.message
        });
    }
});

router.post('/', async (req,res) => {
    try{
        const result = await contactsService.create(req.body);
        res.send({
            status: 'success',
            payload: result
        });
    }catch(error){
        res.status(400).send({
            error: 'error',
            message: error.message
        });
    }
});

export default router;

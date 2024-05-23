import {Router} from 'express'
import ContactController from "../controllers/contactsController.js";

const contactService = new ContactController();
const router = Router();

router.get('/', async(req, res) => {
    try{
        const result = await contactService.getAll()
        res.send({
            status: 'success',
            payload: result
        });
    }catch(error){
        res.status(400).send({
            status: 'error',
            message: error.message
        });
    }
});

router.post('/', async (req, res) => {
    try{
        const result = await contactService.create(req.body)
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
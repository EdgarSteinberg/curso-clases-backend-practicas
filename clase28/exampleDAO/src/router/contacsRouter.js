// Configuracion del enrutador
import { Router } from 'express';

import ContactController from '../controllers/contactController.js';


const router = Router();
const contactsService = new ContactController();

router.get('/', async (req, res) => {
    try {
        const result = await contactsService.getAll()
        res.send({
            status: 'success',
            payload: result
        })
    } catch (error) {
        res.status(400).send({
            status: 'error',
            payload: error.message
        })
    }
});

router.post('/', async (req, res) => {
    try {
        const result = await contactsService.create(req.body)
        res.send({
            status: 'success',
            payload: result
        })
    } catch (error) {
        res.status(400).send({
            status: 'error',
            payload: error.message
        })
    }
});

router.put('/:cid', async (req, res) => {
    try {
        const cid = req.params.cid;
        const result = await contactsService.updateContact(cid, req.body)
        res.send({
            status: 'success',
            payload: result
        })
    } catch (error) {
        res.status(404).send({
            status: 'error',
            payload: error.message
        })
    }
});

router.delete('/:cid', async (req, res) => {
    try {
        const cid = req.params.cid;
        const result = await contactsService.deleteContact(cid)
        res.send({
            status: 'success',
            payload: result
        })
    } catch (error) {
        res.status(404).send({
            status: 'error',
            payload: error.message
        })
    }
});
export default router;
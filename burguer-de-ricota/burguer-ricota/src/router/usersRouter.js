import { Router } from 'express';
import { createUser, getUser, getUserById } from '../controllers/usersController.js';


const router = Router();

router.get('/', getUser);
router.get('/:uid', getUserById);
router.post('/', createUser);

export default router;

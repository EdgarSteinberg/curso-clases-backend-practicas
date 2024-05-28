import { Router } from 'express';

import {getUser, getUserById, saveUser} from '../controllers/usersController.js'

const router = Router();

router.get('/', getUser);
router.post('/', saveUser);
router.get('/:uid', getUserById);


export default router;
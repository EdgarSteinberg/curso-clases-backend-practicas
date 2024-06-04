import { Router } from 'express';
import { createBisness, getBisness, getBisnessById, updateBisness } from '../controllers/bisnessController.js';

const router = Router();

router.get('/', getBisness);
router.get('/:bid', getBisnessById);
router.post('/', createBisness);
router.put('/:bid/product', updateBisness);

export default router;
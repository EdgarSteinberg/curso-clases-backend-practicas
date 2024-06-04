import { Router } from 'express';
import { createOrder, getOrder, getOrderById, updateOrder } from '../controllers/ordersController.js';

const router = Router();

router.get('/', getOrder);
router.get('/:oid', getOrderById);
router.post('/', createOrder);
router.put('/:oid', updateOrder);

export default router;
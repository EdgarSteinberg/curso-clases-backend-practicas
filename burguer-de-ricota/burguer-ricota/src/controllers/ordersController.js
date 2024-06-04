import Order from "../dao/classes/ordersDAO.js";
import User from '../dao/classes/usersDAO.js';
import Bisness from '../dao/classes/bisnessDAO.js';

const orderService = new Order();
const userService = new User();
const bisnessService = new Bisness();

const responseError = {
    status: 'error',
    error: 'Something went wrong, try again later'
}

export const getOrder = async (req, res) => {
    const result = await orderService.getOrder();
    res.send({
        status: 'success',
        result
    })
}

export const getOrderById = async (req, res) => {
    const { oid } = req.params
    const result = await orderService.getOrderById(oid)

    if (!result) {
        return res.status(500).send(responseError)
    }
    res.send({
        status: 'success',
        result
    })
}

export const createOrder = async (req, res) => {
    const { user, bisness, products } = req.body

    const resultUser = await userService.getUserById(user)
    const resultBisness = await bisnessService.getBisnessById(bisness)

    if (!resultUser || !resultBisness) {
        return res.status(500).send(responseError)
    }

    const currentOrders = resultBisness.products.filter(product => products.includes(product.id))

    const totalPrice = currentOrders.reduce((acc, product) => { acc += product.price; return acc }, 0)

    const orderNumber = Date.now() + Math.floor(Math.random() * 10000 + 1)

    const order = {
        number: orderNumber,
        bisness,
        user,
        products: currentOrders.map(pr => pr.id),
        price: totalPrice,
        status: 'pending'
    }

    const orderResult = await orderService.createOrder(order)

    if (!orderResult) {
        return res.status(500).send(responseError)
    }
    res.send({
        status: 'success',
        result: orderResult
    })
}

export const updateOrder = async (req, res) => {
    const { status } = req.body
    const { oid } = req.params

    const order = await orderService.getOrderById(oid)

    if(!order) {
        return res.status(500).send(responseError)
    }

    order.status = status

    const result = await orderService.updateOrder(order._id, order)
    if (!result) {
        return res.status(500).send(responseError)
    }
    res.send({
        status: 'success',
        result: 'Order Resolved!'
    })
}
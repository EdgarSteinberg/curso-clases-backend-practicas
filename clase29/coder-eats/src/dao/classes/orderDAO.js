import orderModel from '../models/orderModel.js'

export default class Orders {

    getOrder = async () => {
        try{
            return await orderModel.find()
        }catch(error){
            console.log(error.message);
            return null;
        }
    }

    getOrderById = async (id) => {
        try{
            return await orderModel.findOne({_id: id})
        }catch (error){
            console.log(error.message);
            return null;
        }
    }

    createOrder = async (order) => {
        try{
            return await orderModel.create(order)
        }catch(error){
            console.log(error.message);
            return null;
        }
    }

    resolveOrder = async (id, order) => {
        try {
            return await orderModel.updateOne({_id: id}, {$set: order})
        }catch (error){
            console.log(error.message);
            return null;
        }
    }
}
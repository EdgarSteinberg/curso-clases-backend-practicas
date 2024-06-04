import orderModel from "../models/ordersModel.js";

export default class Order {
    
    getOrder = async () => {
        try{
            return await orderModel.find()
        }catch(error){
            console.log(error.message)
            return null;
        }
    }
    
    getOrderById = async (oid) => { // o id
        try{
            return await orderModel.findOne({ _id: oid })
        }catch(error){
            console.log(error.message)
            return null;
        }
    }

    createOrder = async (order) => {
        try{
            return await orderModel.create(order)
        }catch(error){
            console.log(error.message)
            return null;
        }
    }

    updateOrder = async (oid, order) => {
        try{
            return await orderModel.updateOne({_id: oid}, {$set: order})
        }catch(error){
            console.log(error.message)
            return null;
        }
    }
}   
import mongoose from 'mongoose';

const ordersCollection = 'orders';

const ordersSchema = new mongoose.Schema({
    number: {
        type: Number
    },
    bisness: {
        type: mongoose.SchemaTypes.ObjectId,
        ref: 'bisness'
    },
    user: {
        type: mongoose.SchemaTypes.ObjectId,
        ref: 'users'
    },
    products: [],
    price:{
        type: Number    
    },
    status: {
        type: String
    }

});

const orderModel = mongoose.model(ordersCollection, ordersSchema);

export default orderModel;
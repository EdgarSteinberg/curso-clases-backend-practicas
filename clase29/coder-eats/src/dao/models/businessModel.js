import mongoose from 'mongoose';

const businessCollection = 'business';

const businessSchmea = new mongoose.Schema({
    name: String,
    products: []
});

const businessModel = mongoose.model(businessCollection, businessSchmea);

export default businessModel;
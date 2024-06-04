import mongoose from 'mongoose';

const bisnessCollection = 'bisness';

const bisnessSchema = new mongoose.Schema({
    name: {
        type: String
    },
    products: []
})

const bisnessModel = mongoose.model(bisnessCollection,bisnessSchema);

export default bisnessModel;
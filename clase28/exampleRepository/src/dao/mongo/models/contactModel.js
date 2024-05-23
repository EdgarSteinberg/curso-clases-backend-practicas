import mongoose from 'mongoose';

const contactCollection = 'contacts'

const contacSchema = mongoose.Schema({
    full_name: {
        type: String,
        require: true
    },
    first_name: {
        type: String,
        require: true
    },
    last_name: {
        type: String,
        require: true
    },
    phone: {
        type: Number,
        require: true
    }
});

const contactModel = mongoose.model(contactCollection, contacSchema);

export default contactModel;
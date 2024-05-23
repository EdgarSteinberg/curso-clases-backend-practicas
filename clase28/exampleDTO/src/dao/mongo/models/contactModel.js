import mongoose from 'mongoose';

const contactsCollections = 'contacts';

const contactsSchema = mongoose.Schema({
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

const contactsModel = mongoose.model(contactsCollections, contactsSchema);

export default contactsModel
import mongoose from 'mongoose';

const userCollection = 'toys';

const toySchema = mongoose.Schema({
    name: {
        type: String,
        minLength: 3,
        require: true
    },
    description: {
        type: String,
        minLength: 3,
        require: true
    },
    creator_user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'users',
        require: true
    }
})

const toysModel = mongoose.model(userCollection, toySchema);

export default toysModel;
import mongoose from 'mongoose';

const userCollection = 'users';

const userSchema = new mongoose.Schema({
    name: {
        type: String
    },
    email: {
        type: String
    },
    role: {
        type: String
    },
    orders: [
        {
            type: mongoose.SchemaTypes.ObjectId,
            ref: 'orders'
        }
    ]
})

const userModel = mongoose.model(userCollection, userSchema);

export default userModel;
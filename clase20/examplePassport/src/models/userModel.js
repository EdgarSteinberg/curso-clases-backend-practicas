import mongoose from 'mongoose';

const userCollection = 'users';

const userSchema = mongoose.Schema({
    first_name: {
        type: String,
        minLength: 3,
        required: true
    },
    last_name: {
        type: String,
        minLength: 3,
        required: true
    },
    email: {
        type: String,
        minLength: 3,
        unique: true,
        required: true
    },
    age: {
        type: String,
        min: 18,
        required: true,
    },
    password: {
        type: String,
        minLength: 4,
        required: true
    }
});

const userModel = mongoose.model(userCollection, userSchema);

export default userModel;
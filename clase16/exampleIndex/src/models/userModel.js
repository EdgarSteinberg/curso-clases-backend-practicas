import mongoose from 'mongoose';

const userCollection = "users";

const userSchema = new mongoose.Schema({
    first_name:{
        type: String,
        require: true,
        index: true
    },
    last_name:{
        type: String,
        require: true
    },
    email:{
        type: String,
        require: true
    },
    gender: {
        type: String,
        require: true
    }
})

export const userModel = mongoose.model(userCollection, userSchema)
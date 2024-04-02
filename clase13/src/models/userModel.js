//Llamo a mongoose
import mongoose from "mongoose";

//Selecciono mi collecion
const userCollection = "users";

//Defino mi documento y el tipo de dato
const userSchema = new mongoose.Schema({
    firstname: String,
    lastname: String,
    email: {
        type: String,
        unique: true
    } 
});

//Compilo en un modelo
export const userModel = mongoose.model(userCollection, userSchema);


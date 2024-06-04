import userModel from "../models/usersModel.js";

export default class User {

    getUser = async () => {
        try {
            return await userModel.find()
        } catch (error) {
            console.log(error.message)
            return null;
        }
    }
    
    getUserById = async (uid) => { // o id
        try {
            return await userModel.findOne({ _id: uid })
        } catch (error) {
            console.log(error.message)
            return null;
        }
    }
    
    createUser = async (user) => {
        try {
            return await userModel.create(user)
        } catch (error) {
            console.log(error.message)
            return null;
        }
    }
}
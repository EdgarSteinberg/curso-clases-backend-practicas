import userModel from "../models/userModel.js";

export default class Users {

    async getUser() {
        const users = await userModel.find().lean();
        return users;
    };

    async getUserById(uid) {
        const user = await userModel.findOne({ _id: uid }).lean();
        return user;
    };

    async createUser(user) {
        const newUser = await userModel.create(user);
        return newUser;
    };

    async login(email, password) {
        const user = await userModel.findOne({email}) // aca puede faltar {} llaves
        return user;
    };

    async updateUser(uid, update) {
        const newUser = await userModel.updateOne({_id:uid}, { $set: update })
        return newUser;
    }

    async deleteUser(uid) {
        const user = await userModel.deleteOne({_id:uid})
        return user
    }
}
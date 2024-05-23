import contactModel from "./models/contactModel.js";

export default class Contacts {

    async get() {
        const result = await contactModel.find();
        return result;
    }

    async create(contact) {
        const result = await contactModel.create(contact)
        return result;
    }
}
import contactsModel from "./models/contactModel.js";

export default class ContactMongo{
    
    async get(){
       const result = await contactsModel.find();
       return result;
    }

    async create(contact){
        const result = await contactsModel.create(contact)
        return result;
    }
}
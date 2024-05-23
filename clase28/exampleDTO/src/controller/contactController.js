import Contact from "../dao/mongo/contanctMongo.js";
//import Contact from "../dao/memory/contacMemory.js";
import ContactDTO from "../dao/dto/contactDTO.js";

export default class ContactController{

    constructor(){
        this.dao = new Contact();
    }

    async getAll(){
        return await this.dao.get();
    }

    async create(contact){
        const newContact = new ContactDTO(contact);

        return await this.dao.create(newContact)    
    }
}
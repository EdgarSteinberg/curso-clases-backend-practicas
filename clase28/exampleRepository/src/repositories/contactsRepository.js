import ContactDTO from "../dao/dto/contactDTO.js";

export default class ContactRespository{
    constructor(dao){
        this.dao = dao
    }

    async getContacts(){
        return await this.dao.get();
    }
    async createContact(contact){
        const newContact = new ContactDTO(contact);
        return await this.dao.create(newContact)
    }
}

// tambien se puede return await this.dao.create(new CotactDao(contact))


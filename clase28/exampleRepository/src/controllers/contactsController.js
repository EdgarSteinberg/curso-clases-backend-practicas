//import Contacts from '../dao/mongo/contactMongo.js'
//import Contacts from '../dao/memory/contactMemory.js'
//import ContactDTO from '../dao/dto/contactDTO.js'
import { ContactsService } from "../repositories/index.js";

export default class ContactController{
    // constructor (){
    //     this.service = contactsService;
    // }

    async getAll(){
        return await ContactsService.getContacts();
    }

    async create(contact){

        return await ContactsService.createContact(contact)

    //    const newContact = new ContactDTO(contact);

    //    return await this.dao.create(newContact)
    }
}
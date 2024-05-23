import Contacts from '../dao/mongo/contactMongo.js';
import ContactRespository from './contactsRepository.js';

export const ContactsService = new ContactRespository(new Contacts());

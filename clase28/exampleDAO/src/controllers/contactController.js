//Controlladores = CAPA DE NEGOCIO 

//Importas la clase de manejo de datos o importas la clase memory
//import Contacts from "../dao/mongo/contactsMongo.js";
import Contacts from "../dao/memory/contacsMemory.js";

export default class ContactController {
    constructor() {
        this.dao = new Contacts();
    }
    // Metodo para obtener todos los contactos
    async getAll() {
        return await this.dao.get();
    }
    // Metodo para crear un contacto
    async create(contact) {
        const { first_name, last_name, phone } = contact;

        if (!first_name || !last_name || !phone) throw new Error('Debe ingrear todos los datos!');

        return this.dao.create({ first_name, last_name, phone });
    }

    // Método para actualizar un contacto
    async updateContact(cid, contact) {
        const { first_name, last_name, phone } = contact;

        if (!first_name || !last_name || !phone) throw new Error('Debe ingresar todos los datos!');

        return await this.dao.update(cid, { first_name, last_name, phone });
    }

    // Método para eliminar un contacto
    async deleteContact(cid) {
        return await this.dao.delete(cid);
    }

}
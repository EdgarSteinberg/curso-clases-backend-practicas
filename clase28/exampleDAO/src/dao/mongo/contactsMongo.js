// MODELO DE PERSISTENCIA

import contactModel from "./models/contacModel.js";

export default class Contacts {
    // Metodo para obtener todos los contactos
    async get() {
        const contacts = await contactModel.find();
        return contacts;
    }
    // Metodo para crear un contacto
    async create(contact) {
        const result = await contactModel.create(contact);
        return result;
    }
    // Método para actualizar un contacto por ID
    async update(id, contact) {
        const result = await contactModel.updateOne({ _id: id }, contact, { new: true });
        return result;
    }

    // Método para eliminar un contacto por ID
    async delete(cid) {
        const result = await contactModel.deleteOne({ _id: cid });
        return result;
  
    }
}
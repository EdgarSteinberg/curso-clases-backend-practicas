export default class ContactDTO {
    constructor(contact){
        this.first_name = contact.first_name ?? 'NombreVacio';
        this.last_name = contact.last_name ?? 'ApellidoVacio';
        this.full_name =`${this.first_name} ${this.last_name}`
        this.phone = contact.phone ?? 0;
    }
}
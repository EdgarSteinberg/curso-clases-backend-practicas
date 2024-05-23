export default class Contacts {
    constructor() {
        this.data = [
            {
                _id: 1,
                first_name: 'Edgar',
                last_name: 'Steinberg',
                phone: 1165724141
            },
            {
                _id: 2,
                first_name: 'Joaco',
                last_name: 'Cejas',
                phone: 1165725050
            }
        ]
    }

    async get() {
        return this.data;
    }

    async create(contact) {
        contact._id = this.#getId();
        this.data.push(contact);
        return contact;
    }
    async update(cid, updatedContact) {
        let contactFound = false;
        this.data.forEach(contact => {
            if (contact._id === cid) {
                contactFound = true;
                contact.first_name = updatedContact.first_name !== undefined ? updatedContact.first_name : contact.first_name;
                contact.last_name = updatedContact.last_name !== undefined ? updatedContact.last_name : contact.last_name;
                contact.phone = updatedContact.phone !== undefined ? updatedContact.phone : contact.phone;
            }
        });
        if (contactFound) {
            return updatedContact;
        } else {
            throw new Error('Contact not found');
        }
    }
    
    
    async delete(cid) {
        const originalLength = this.data.length;
        this.data = this.data.filter(({ _id }) => _id !== cid);
        if (this.data.length < originalLength) {
            return { _id: cid };
        } else {
            throw new Error("Error al eliminar el contacto");
        }
    }
    


    #getId(){
        if(this.data.length === 0){
            return 1;
        }

        return this.data[this.data.length-1]._id + 1;
    }
}
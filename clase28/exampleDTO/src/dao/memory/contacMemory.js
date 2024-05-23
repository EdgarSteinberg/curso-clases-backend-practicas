export default class ContactsMemory{
    constructor(){
        this.data = [
            {
                _id : 1,
                first_name : 'Lucas',
                last_name : 'Cioccas',
                phone: 1165744145
            },
            {
                _id : 2,
                firts_name : 'Martin',
                last_name: 'Bertier',
                phone : 1165724545
            }
        ]
    }

    async get(){
        return this.data;
    }

    async create(contact){
        contact._id = this.#getId();
        this.data.push(contact)
        return contact
    }

    //Verifica si el array this.data está vacío (this.data.length === 0). Si lo está, devuelve 1. Esto significa que si aún no hay ningún elemento en el array, el ID del próximo elemento será 1.

    //Si this.data no está vacío, toma el último elemento del array (this.data[this.data.length - 1]) y accede a su _id. Luego, le suma 1 para generar un nuevo ID único para el próximo elemento que se agregará al array. Esto asegura que cada nuevo elemento tenga un ID único y consecutivo basado en el último ID utilizado en el array.
    #getId(){
        if(this.data.length === 0){
            return 1;
        }
        return this.data[this.data.length - 1]._id + 1
    }
}
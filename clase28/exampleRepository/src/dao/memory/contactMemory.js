export default class ContactMemory{
    constructor(){
        this.data =[
            {
                _id : 1,
                first_name : "Estrella",
                last_name: "Tercera",
                phone: 1245480895
            },
            {
                _id : 2,
                first_name : "Rockito",
                last_name: "Perrito",
                phone: 1245480895
            }
        ]
    }

    async get(){
        return await this.data
    }

    async create(contact){
        contact._id = this.#getId();
        this.data.push(contact)
        return contact
    }

    #getId(){
        if(this.data.length === 0){
            return 1
        }
        return this.data[this.data.length - 1]._id + 1
    }
}
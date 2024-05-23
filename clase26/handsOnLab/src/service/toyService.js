import toyModel from "../models/toyModel.js";

export default class ToyService {

    async getAll(){
        return await toyModel.find();
    }

    async getByID(tid){
        const result = await toyModel.findOne({_id : tid})
    
        if(!result) throw new Error (`El juguete ${tid} no existe`)
   
            return result;
    }

    async create(toy){
        const result = await toyModel.create(toy)
        
        return result;
    }
}
import ToyService from "../service/toyService.js";

export default class ToyController {


    constructor() {
      this.toyService = new ToyService();
    }

    async getAllToy() {
        return this.toyService.getAll();
    }

    async getToyByID(tid) {
       return await this.toyService.getByID(tid)
    }

    async createToy(toy) {
        const { name, description, creator_user } = toy;

        if (!name || !description || !creator_user) {
            throw new Error('Error creating toy: Missing fields');
        }

       return await this.toyService.create({ name, description, creator_user });
    }

    // getId() {
    //     const toysLength = ToyController.toys.length;
    //     if (toysLength > 0) {
    //         return parseInt(ToyController.toys[toysLength - 1].id + 1);
    //     }
    //     return 1;
    // }


}
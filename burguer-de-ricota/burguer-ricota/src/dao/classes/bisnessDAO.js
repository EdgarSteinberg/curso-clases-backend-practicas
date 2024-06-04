import bisnessModel from "../models/bisnessModels.js";

export default class Bisness {

    getBisness = async () => {
        try {
            return await bisnessModel.find()
        } catch (error) {
            console.log(error.messag)
            return null;
        }
    }
    getBisnessById = async (bid) => {
        try {
            return await bisnessModel.findOne({_id: bid})
        } catch (error) {
            console.log(error)
        }
    }
    createBisness = async (bisness) => {
        try {
            return await bisnessModel.create(bisness)
        } catch (error) {
            console.log(error.message)
            return null;
        }
    }
    updateBisness = async (bid, bisness) => {
        try {
            return await bisnessModel.updateOne({ _id: bid },{ $set: bisness })
        } catch (error) {
            console.log(error.message)
            return null
        }
    }
}
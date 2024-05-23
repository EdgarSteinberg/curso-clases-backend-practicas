import mongoose from 'mongoose';

export default class MongoSingleton {
    static #instance;

    constructor(connectionString){
        mongoose.connect(connectionString)
    }

    static getInstance(){
        if(this.#instance){
            console.log('Already connected');
            return this.#instance;
        }
        this.#instance = new MongoSingleton('mongodb://127.0.0.1:27017/arquitectura-capas');
        console.log('connected');
        return this.#instance
    }
}
import MongoSingleton from './mongoDbSingleton.js'

//No instancia la clase sino que obtiene la instacia
const mongoInstance = MongoSingleton.getInstance();

//Se intenta volver a intanciar la conexion (Validando su existencia)
const anotherMongoInstance = MongoSingleton.getInstance();


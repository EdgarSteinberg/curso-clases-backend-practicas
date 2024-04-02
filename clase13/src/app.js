import express from "express";
import routerUsers from "./routes/userRouter.js";
import mongoose from "mongoose";

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended:true}));


app.use("/api/users", routerUsers);

const conexion = async () => {
    try{
        //en este caso la conoxion es a mi bbdd Mongodb local
        await mongoose.connect("mongodb+srv://steinberg2024:cai2024@cluster0.cl7spkj.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0", {dbName: "usuarios"})
        console.log("Conectado a la bbdd remota de mongoDB ATLAS")
        //await mongoose.connect("mongodb://127.0.0.1:27017", {dbName: "usuarios"})
        //console.log("Conectado a mi bbdd local")
    }catch(error){
        console.log("Fallo la conexion")
    }
}

conexion();

const PORT = 8080;
app.listen(PORT, () => {
    console.log(`Edgar Start Server In Port ${PORT}`);
}); 
import { Router } from "express";
import { userModel } from "../models/userModel.js";


const router = Router();




router.get("/", async (req, res) => {
    const user = await userModel.find()
    res.status(201).send({ status: "success", payload: user })
});


router.post("/", async (req, res) => {
    const { firstname, lastname, email } = req.body
    try {
        const resultado = await userModel.create({
            firstname,
            lastname,
            email
        })

        res.status(201).send(resultado)
    } catch (error) {
        res.status(400).send({ status: "error" })
    }
});


router.put("/:id", async (req, res) => {
    const id = req.params.id
    const { firstname, lastname, email } = req.body
    try {
        const result = await userModel.updateOne({ _id: id }, {
            firstname,
            lastname,
            email
        })
        res.status(201).send(result)

    } catch (error) {
        res.status(400).send({ status: "error" })
    }
});


router.delete("/:id", async (req, res) => {
    const id = req.params.id

    try{
        const result = await userModel.deleteOne({_id : id})
        res.status(201).send(result)
    }catch (error) {
        res.status(400).send({ status: "error" })
    }
});


export default router;
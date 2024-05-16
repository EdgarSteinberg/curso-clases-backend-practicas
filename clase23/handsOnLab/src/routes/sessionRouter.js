import RouterBase from "./route.js";
import jwt from "jsonwebtoken";

export default class SessionRouter extends RouterBase {
    init() {
        this.post('/login', ['PUBLIC'] , (req,res) => {
            const {name, email, role} = req.body;
            const token = jwt.sign({name, email, role}, "CoderScret");

            res.sendSuccess(token);
        })
    }
}
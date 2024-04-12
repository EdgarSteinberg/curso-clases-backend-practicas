import { Router } from 'express';
import { userModel } from '../models/userModel.js';

const router = Router();

router.get("/search", async (req, res) => {
    try {
        const {first_name} = req.query;

        let query = {}
        if(first_name) query = { first_name };

        const users = await userModel.find(query).explain("executionStats");
        
        res.send({
            status: "success",
            payload: users
        });

    } catch (e) {
        res.status(500).send({
            status: "error",
            payload: {
                error: e.message
            }
        })
    }
});

export default router;
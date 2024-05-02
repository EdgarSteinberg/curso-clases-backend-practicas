import { Router } from 'express';
import jwt from 'jsonwebtoken';

const router = Router();

router.post('/login', (req, res) => {
    const {email, password} = req.body;
    if (!email || !password) {
        return res.status(401).send({
            status: 'Unauthorized'
        });
    }

    const token = jwt.sign({email, password}, 'CoderSecretPass', {expiresIn : '1h'});
    // res.cookie('coderCookieToken', token, {
    //     maxAge:60*60*1000,
    //     httpOnly: true
    // }).send({ message: "Logged in!" });
    
    res.send({
        status: 'success',
        token
    });

});

export default router;
import { Router } from 'express';
import CustomError from '../services/errors/CustomError.js';
import { generateUserErrorInfo, generateUserIdErrorInfo } from '../services/errors/info.js';
import { ErrorCodes } from '../services/errors/enums.js';

const router = Router();

const users = [];

router.get('/', (req, res) => {
    res.send({
        status: 'success',
        payload: users
    })
})

router.post('/', (req, res) => {
    const { first_name, last_name, age, email } = req.body

    if (!first_name || !last_name || !age || !email) {
        // return res.status(400).send({
        //     status: 'error',
        // })
        CustomError.createError({
            name: 'User creation error',
            cause: generateUserErrorInfo({ first_name, last_name, age, email }),
            message: 'Error trying to create User',
            code: ErrorCodes.INVALID_TYPES_ERROR
        })
    }

    const newUser = {
        first_name,
        last_name,
        age,
        email,
    }

    if (users.length === 0) {
        newUser.id = 1
    } else {
        newUser.id = users[users.length - 1].id + 1;
    }
    users.push(newUser)

    res.send({
        status: 'success',
        payload: newUser
    })
})

router.get('/:uid', (req, res) => {

    const { uid } = req.params
    const result = users.find(user => user.id == uid)

    if (isNaN(uid) || uid <= 0) {
        CustomError.createError({
            name: 'Invalid parameter',
            cause: generateUserIdErrorInfo( uid ),
            message: `Invalid user ID: ${uid}. User ID must be a positive number.`,
            code: ErrorCodes.INVALID_TYPES_ERROR
        })
    }

    res.send({
        status: 'success',
        payload: result
    })
})

export default router;
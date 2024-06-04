import User from "../dao/classes/usersDAO.js"

const userService = new User();

const responseError = {
    status: 'error',
    error: 'Something went wrong, try again later'
}

export const getUser = async (req, res) => {
    const result = await userService.getUser();
    res.send({
        status: 'succes',
        result
    })
}

export const getUserById = async (req, res) => {
    const { uid } = req.params
    const result = await userService.getUserById(uid);

    if (!result) {
        return res.status(500).send(responseError)
    }
    res.send({
        status: 'success',
        result
    })
}

export const createUser = async (req, res) => {
    const user  = req.body
    const result = await userService.createUser(user);

    if (!result) {
        return res.status(500).send(responseError)
    }
    res.send({
        status: 'success',
        result
    });
}
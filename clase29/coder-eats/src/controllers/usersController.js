import User from '../dao/classes/userDAO.js';

const responseError = {
    status: 'error',
    error: 'Something went wrong, try again later'
}
const userService = new User();

export const getUser = async(req, res) => {
    
    const result = await userService.getUsers();
    res.send({
        status: 'success',
        result
    });
}

export const getUserById = async (req, res) => {
    const {uid} = req.params;

    const result = await userService.getUserById(uid)
    
    if(!result){
        return res.status(500).send(responseError);
    }
    res.send({
        status: 'success',
        result
    });
}

export const saveUser = async (req, res) => { // guardar usuario?
    const user = req.body// Tarea validar campos de entrada 
    
    const result = await userService.saveUser(user)
    
    if(!result){
        return res.status(500).send(responseError);
    }
    res.send({
        status: 'success',
        result
    });
}
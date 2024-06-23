import userDao from '../dao/userDAO.js'
import bcrypt from 'bcrypt';

const UserDao = new userDao();

export default class UserController {
    async getUser() {
        try {
            const users = await UserDao.getUser()
            return users;
        } catch (error) {
            throw new Error('Error al buscar los usuarios')
        }
    }

    async getUserById(uid) {
        try {
            const result = await UserDao.getUserById(uid)
            return result;
        } catch (error) {
            throw new Error(`El usuario con iD: ${uid} no existe`)
        }
    }

    async registerUser(user) {
        try {
            const { last_name, first_name, password, email } = user

            if (!last_name || !first_name || !password || !email) {
                throw new Error("Debes completar todos los campos obligatorios")
            }

            const newUser = await UserDao.createUser({ last_name, first_name, password, email });
            console.log('Usuario creado:', newUser);
            return newUser
        } catch (error) {
            console.error('Error al registrar usuario:', error);
            throw new Error("Error al registrar usuario")
        }
    }

    async login(email, password) {

        try {
            if (!email || !password) {
                throw new Error("Falta email o password")
            }

            const user = await UserDao.login(email)
            if (!user) {
                throw new Error('Usuario no encontrado')
            }

            if (user.password !== password) {
                throw new Error("Contraseña incorrecta")
            }

            return user;
        } catch (error) {
            throw new Error("Error al iniciar sesión")
        }

    }

    async updateUser(uid, user) {
        try {
            const newUser = await UserDao.updateUser(uid, user)
            console.log(`Usuario modificado correctamente ${newUser}`)
            return newUser
        } catch (error) {
            console.error("Error al modificar el usuario:", error);
            throw new Error("Error al modificar el usuario")
        }
    }

    async deleteUser(uid) {
        try {
            const user = await UserDao.getUserById(uid);
            if (!uid) {
                throw new Error(`El usuario con ID: ${uid} no existe`);
            }

            const result = await UserDao.deleteUser(uid);
            console.log(`Usuario eliminado correctamente:`, result);
            return result;
        } catch (error) {
            console.error("Error al eliminar usuario:", error);
            throw new Error("Error al eliminar usuario");
        }
    }
}
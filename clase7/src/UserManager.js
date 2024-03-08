import fs from "fs";

export class UserManager {

    constructor(file) {
        this.file = file;
    }

    async GetAllUsers() {
        try {
            const users = await fs.promises.readFile(this.file, "utf-8");
            return JSON.parse(users);
            
        } catch (e) {
            console.error("error");
        }
        return [];

    }

    async GetId() {
        const users = await this.GetAllUsers();

        if (users.length > 0) {
            return parseInt(users[users.length - 1].id + 1);
        }

        return 1;
    }


    async CreateUser(user) {
        const users = await this.GetAllUsers();

        const newUser = {
            id: await this.GetId(),
            firstName: user.firstName ?? "Sin Nombre",
            lastName: user.lastName ?? "Sin Apellido",
            age: user.age ?? "Sin Edad",
            course: user.course ?? "Sin Curso"

        }
        users.push(newUser);

        try {
            await fs.promises.writeFile(this.file, JSON.stringify(users, null, "\t"));
            return "user creado correctamente!";
            
        } catch (e) {
            console.error("Error al crear el user\n", e);
            return "Error al crear el user"
        }
    }

    async UpdateUser(id, user) {
        const users = await this.GetAllUsers();
       
        let userUpdated = {};

        for (let key in users) {

            if (users[key].id == id) {

                users[key].firstName = user.firstName ? user.firstName : users[key].firstName;
                users[key].lastName = user.lastName ? user.lastName : users[key].lastName;
                users[key].age = user.age ? user.age : users[key].age;
                users[key].course = user.course ? user.course : users[key].course;

                userUpdated = users[key];
            }
        }

        try {
            await fs.promises.writeFile(this.file, JSON.stringify(users, null, "\t"));

            return userUpdated;

        } catch (e) {
            console.error(e);
            return {
                message: "Error al actualizar el usuario"
            }
        }
    }

    async DeleteUser(id) {
        const users = await this.GetAllUsers();
        const initLength = users.length; // usuarios originales
      
        
        const usersProccesed = users.filter(user => user.id != id);
       
        const finalLength = usersProccesed.length; // usuarios filtrados

        try {
            if (initLength == finalLength) {
                throw new Error(`No fue posible eliminar el usuario ${id}`);
            }

            await fs.promises.writeFile(this.file, JSON.stringify(usersProccesed, null, "\t"));

            return `El usuario ${id} fue eliminado correctamente`;


        } catch (e) {
            return e.message;
        }

    }


}
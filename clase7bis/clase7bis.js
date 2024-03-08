import fs from 'fs'

export class UsuarioManager {

    constructor(archivo) {
        this.archivo = archivo;
    }

    //Leemos nuestros usuario

    async ObterUsuarios() {
        try {
            const usuarios = await fs.promises.readFile(this.archivo, "utf-8");
            return JSON.parse(usuarios);
        } catch (e) {
            console.error("ERROR", e);
        }
        return [];
    }

    async ObtenerId() {
        const usuarios = await this.ObterUsuarios();

        if (usuarios.length > 0) {
            return parseInt(usuarios[usuarios.length - 1].id) + 1;
        }

        return 1;
    }

    async CrearUsuario(usuario) {
        const usuarios = await this.ObterUsuarios();

        const nuevoUsuario = {
            id: await this.ObtenerId(),
            Nombre: usuario.Nombre ?? "Sin Nombre",
            Apellido: usuario.Apellido ?? "Sin Apellido",
            Edad: usuario.Edad ?? "Sin Edad",
            Curso: usuario.Curso ?? "Sin Curso"
        }

        usuarios.push(nuevoUsuario);//aca error

        try {
            await fs.promises.writeFile(this.archivo, JSON.stringify(usuarios, null, "\t"));
            return "USUARIO CREADO CORRECTAMENTE";
        } catch (e) {
            console.error("Error al crear el usuario\n", e);
            return "ERROR AL CREAR EL USUARIO";
        }
    }

    async ActualizarUsuario(id, usuario) {
        const usuarios = await this.ObterUsuarios();

        let usuarioActualizado = {}

        for (let clave in usuarios) {

            if (usuarios[clave].id == id) {
                usuarios[clave].Nombre = usuario.Nombre ? usuario.Nombre : usuarios[clave].Nombre;
                usuarios[clave].Apellido = usuario.Apellido ? usuario.Apellido : usuarios[clave].Apellido;
                usuarios[clave].Edad = usuario.Edad ? usuario.Edad : usuarios[clave].Edad;
                usuarios[clave].Course = usuario.Course ? usuario.Course : usuarios[clave].Course;

                usuarioActualizado = usuarios[clave];
            }

        }

        try {
            await fs.promises.writeFile(Jthis.archivo, JSON.stringify(usuarios, null, "\t"));
            return usuarioActualizado;
        } catch (e) {
            console.error(e);
            return { message: "ERROR AL ACTUALIZAR EL USUARIO" }
        }
    }


}
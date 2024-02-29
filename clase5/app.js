const ManagerUsuarios = require('./hands_on_labs')

const MU = new ManagerUsuarios(`${__dirname}/Musuarios.json`)

const run = async () => {
    await MU.crearUsuario({
        Nombre: "Joaquin",
        Apellidos: "Cejas",
        Edad: 29,
        Curso: "Programacion Backend"
    })

    let users = await MU.ConsultarUsuarios()
    console.log(users)

    await MU.crearUsuario({
        Nombre: "Jorge",
        Edad: 44,
        Curso: "UX/UI"
    })

    users = await MU.ConsultarUsuarios()
    console.log(users)

}

run()
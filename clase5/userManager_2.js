const UserManager = require("./userManager_1")

const UM = new UserManager("./usuario.json")


const createUsers = async () => {
    //Crear Usuario

    let result = await UM.createUsers({
        Name: "Edgar",
        LastName: "Steinberg",
        UserName: "Negro73",
        Password: "coder123"
    })

    console.log(result)

    result = await UM.createUsers({
        Name: "Edgar",
        LastName: "Steinberg",
        Password: "coder123"
    })
    console.log(result)

    result = await UM.createUsers({
        Name: "Joaquin",
        LastName: "Cejas",
        UserName: "Joaco",
        Password: "pass2024"
    })
    console.log(result)


    console.log(await UM.getAllUsers())
}

//Crear usuarios de prueba
//createUsers()


//Comparar Contraseñas
const verifyUsers = async () => {
    let result = await UM.userValidator({
        UserName: "Negro73",
        Password: "asadsad"
    })

    console.log(result)

    result = await UM.userValidator({
        UserName: "Negro73",
        Password: "coder123"
    })

    console.log(result)
}

verifyUsers()
import express from 'express';
import handlebars from 'express-handlebars';
import __dirname from './utils.js';

const app = express();

//Inicializamos el motor de plantillas
app.engine("handlebars", handlebars.engine());

//Establecemos la ruta de vistas
app.set("views", `${__dirname}/views`);

//Establecemos el motor de renderizado
app.set("view engine", "handlebars");

// app.get("/", (req,res) => {
//     //const name = "Edgar";
//     const dinamicName = req.query.name ?? "Usuario sin nombre"

//     res.render(
//         "index",
//         {
//             //name: "Edgar",
//             name: dinamicName,
//             title: "CoderHouse",
//             title_2: "Este es otro titulo",
//             title_3: "<h1>Este es otro titulo</h1>"
//         }
//     )
// })

const users = [{
    Nombre: "Nombre1",
    Apellido: "Apellido",
    Edad: 34,
    Correo: "mail@mail,com",
    Telefono: 1165724140
},
{
    Nombre: "Nombre2",
    Apellido: "Apellido",
    Edad: 34,
    Correo: "mail@mail,com",
    Telefono: 1165724140
},
{
    Nombre: "Nombre3",
    Apellido: "Apellido",
    Edad: 34,
    Correo: "mail@mail,com",
    Telefono: 1165724140
},
{
    Nombre: "Nombre4",
    Apellido: "Apellido",
    Edad: 34,
    Correo: "mail@mail,com",
    Telefono: 1165724140
},
{
    Nombre: "Nombre5",
    Apellido: "Apellido",
    Edad: 34,
    Correo: "mail@mail,com",
    Telefono: 1165724140
}]

app.get("/", (req, res) => {
    const numeroRandom = Math.floor(Math.random() * users.length);

    const randomUser = users[numeroRandom]

    res.render(
        "index",
        {
            Nombre: randomUser.Nombre,
            Apellido: randomUser.Apellido,
            Edad: randomUser.Edad,
            Correo: randomUser.Correo,
            Telefono: randomUser.Telefono
        }
    )

})

const PORT = 8080

app.listen(PORT, () => {
    console.log(`Servidor activo en http://localhost:${PORT}`)
})
import express from 'express'

const app = express()

app.get("/bienvenida", (req, res) => {
    res.send('<h1 style="color: blue">HELLO WORD</h1>')
})

app.get("/usuario", (req, res) => {
    res.send({
        nombre: "Edgar",
        apellido: "Steinberg",
        edad: "34",
        correo: "s.s@gmai.com"
    })
})

const PORT = 8080
app.listen(PORT, () => {
    console.log(`Servidor activo en http://localhos${PORT}`)
})
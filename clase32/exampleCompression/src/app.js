import express from 'express';
import compression from 'express-compression';

const app = express();

//Compression con GZIP
app.use(compression());

//Compression con Brotli
// app.use(compression({
//     brotli: {
//         enabled: true,
//         zlib: {}
//     }
// }));

app.get('/stringridiculamentegrande', (req, res) => {

    let string = ''

    for(let i = 0; i <= 100000; i++){
        string += ' Hola coders, soy un string ridiculamente grande.';
    }

    res.send(string)
})

const PORT = 8080;

app.listen(PORT, () => {
    console.log(`Server Start in http://localhost:${PORT}/stringridiculamentegrande`)
})
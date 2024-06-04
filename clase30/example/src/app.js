import 'dotenv/config';
import express from 'express';
import nodemailer from 'nodemailer';
import twilio from 'twilio';
import __dirname from './utils/constantsUtil.js'


const app = express();

// >>>>>>>>>> Send Email
const transport = nodemailer.createTransport({
    service: 'gmail',
    port: 587,
    auth: {
        user: process.env.EMAIL_USER, // Utiliza la variable de entorno para el usuario de correo electrónico
        pass: process.env.EMAIL_PASS // Utiliza la variable de entorno para la contraseña del correo electrónico
    }
});

app.get('/send/mail', async (req, res) => {
    try {
        const result = await transport.sendMail({
            from: 'Edgar Steinberg <elnegro615@hotmail.com',
            to: 's.steinberg2019@gmail.com',
            subject: 'Mi Primer Correo con Node',
            html: `<div>
                        <h1>Esto Es Un Mail De Prueba</h1>
                        <p>Aguante Los Redondos y La Birra!</p>
                        <img src='cid:indio'/>
                   </div>`,
            attachments: [{
                filename: 'indio.jpg',
                path: `${__dirname}/../images/indio.jpg`,
                cid: 'indio'
            }]
        });

        // Cierra la conexión de transporte después de enviar el correo electrónico
        // transport.close();
        res.send({
            status: 'success',
            result
        })
    } catch (error) {
        console.log(error.message);
        res.status(500).send({
            status: 'error',
            message: 'Error in send email!'
        })
    }
});


// >>>>>>>>>> Send Email
const client = twilio(
    process.env.TWILIO_ACCOUNT_SID,
    process.env.TWILIO_AUTH_TOKEN
);

app.get('/send/sms', async (req, res) => {
    try{
        const result = await client.messages.create({
            body: 'Esto es un Mensage SMS enviado por Edgar',
            from: process.env.TWILIO_PHONE_NUMBER,
            to: '+541165724140'
        });
        res.send({
            status: 'success',
            result
        });
    }catch(error){
        console.log(error.message)
        res.status(500).send({
            status: 'error',
            message: 'Error in send SMS!'
        });
    }
});

const PORT = 8080;
app.listen(PORT, () => {
    console.log(`Server Star in http://localhost:${PORT}`)
});
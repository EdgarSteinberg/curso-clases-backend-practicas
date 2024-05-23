import express from 'express';
import cors from 'cors';

const app = express();

app.use(express.json());
app.use(cors());

app.get('/test', (req,res)=> {
    res.send({
        status: 'success',
        message: 'Todo legal'
    })
})
const PORT = 8080;
app.listen(PORT, () => {
    console.log(`Server start in http://localhost:${PORT}`);
})
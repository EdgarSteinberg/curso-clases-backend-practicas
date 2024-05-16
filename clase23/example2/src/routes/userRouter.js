import RouterBase from "./route.js";

export default class UserRouter extends RouterBase {
    init() {
        this.get('/', (req,res) => {
            res.sendSuccess('Hola Coders')
        });
        this.get('/test', (req, res) => {
            res.sendClientError('Prueba Error!')
        })
    }
}
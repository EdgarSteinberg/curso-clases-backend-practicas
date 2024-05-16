import RouterBase from "./route.js";

export default class UserRouter extends RouterBase {
    init() {
        this.get('/', ['PUBLIC'], (req, res) => {
            res.sendSuccess('Hola Coders!');
        });

        this.get('/private', ['ADMIN', 'USER_PREMIUN'], (req, res) => {
            res.sendSuccess(`Bienvenido ${req.user.name}`);
        });

        this.get('/current', ['USER', 'USER_PREMIUN'], (req, res) => {
            res.sendSuccess(req.user);
        });
    }
}
import express from 'express';
import session from 'express-session';
import mongoStore from 'connect-mongo';

import sessionRouter from './routes/sessionRouter.js';

const app = express()

app.use(session(
    {
        store: mongoStore.create(
            {
                mongoUrl: "mongodb://localhost:27017/class-19",
                mongoOptions: { useUnifiedTopology: true},
                ttl: 15
            }
        ),
        secret: 'secretPharse',
        resave: true,
        saveUninitialized: true
    }
));
app.use('/session', sessionRouter);

const PORT = 8080;
app.listen(PORT, () => {
    console.log(`Start Server in http://localhost:${PORT}`);
});
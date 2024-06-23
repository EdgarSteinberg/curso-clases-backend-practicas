/**
 * Habilitacion de Logger winston para salida por consola y archivo
 * 
 * Los niveles de error standard son los siguientes:
 * error: 0, warn: 1, info: 2, http: 3, verbose: 4, debug: 5, silly: 6
 * (del mas severo [error] al menos importante [silly])
 * 
 * ver tambien debajo el ejemplo de niveles de error personalizados
 */


import winston, { config } from "winston";

// No es imprescindible, pero si lo necesitamos podemos crear niveles de error personalizados.
// para REEMPLAZAR a los nivees standard (ver arriba).
const customErrLevels = {
    levels: { high: 0, medium: 1, low: 2 },
    colors: { high: 'red', medium: 'yellow', low: 'blue' }
};

// Podemos crear tantos loggers como necesitemos, nos manejaremos al menos con uno
// para desarrollo y otro para produccion
// En este caso el de desarrollo cuenta con 1 tranporte habilitado, para sacar logs
// unicamente por consola, desde nivel verbose hacia arriba.
const devLogger = winston.createLogger({
    transports: [
        new winston.transports.Console._construct({ level: 'verbose' })
    ]
});


// Este logger par produccion, tiene 2 transportes habilitados, para sacar logs
// por consola, desde nivel http hacia arriba, y registrar tambien en archivo, desde
// nivel warn hacia arriba
const prodLogger = winston.createLogger({
    transports: [
        new winston.transports.Console({ level: 'http' }),
        new winston.transports.File({ level: 'warn', filename: `${config.DIRNAME}/logs/errors.log`})
    ]
});


// Este logger también utiliza 2 transportes, pero aplicando los niveles personalizados
// definidos arriba. Los niveles standard ya NO estarán disponibles, es decir,
// al inyectarlo desde el middleware, ya no podremos hacer por ej un req.logger.warn,
// tendremos req.logger.high, medium o low que son los niveles que hemos definido.
const customLogger = new winston.createLogger({
    levels: customErrLevels.levels,
    format: winston.format.combine(
        winston.format.colorize({ colors: customErrLevels.colors }),
        winston.format.simple()
    ),
    transports: [
        new winston.transports.Console({ level: 'low' }),
        new winston.transports.File({ level: 'medium', filename: `${config.DIRNAME}/logs/errors.log` })
    ]
})
/**
 *  Ahora, a partir de un middleware, vamos a colocar en el objeto req el logger,
 *  aprovecharemos ademas para hacer nuestro primer log
 */

export const addLogger = (req, res, next) => {
    req.logger = prodLogger;
    req.logger.http(`${req.method} en ${req.url} - ${new Date().toLocaleTimeString()}`)
    //req.logger.http(`${new Date().toDateString()} ${req.method} ${req.url}`);
    next();
}
import dotenv from 'dotenv';
import { Command } from 'commander';

const program = new Command();

program.requiredOption('--mode <mode>', 'production', 'develpment');
program.parse();

const env = program.opts().mode;
//const env = 'production';
//onst env = 'development'
dotenv.config({
    path: env === 'production' ? './.env.prod' : './.env.dev'
});

export default {
    port: process.env.PORT,
    mongo_url: process.env.MONGO_URL,
    admin_name: process.env.ADMIN_NAME,
    admin_pass: process.env.ADMIN_PASS
}

//OPCION Creada por el compañero
// program
// .option('--mode <mode>', 'set the mode', 'development')
// program.parse()

// const options = program.opts();

// const env = options.mode;

// Uso de Commander: En el primer ejemplo, se utiliza program.requiredOption() para definir una opción requerida, mientras que en el segundo ejemplo se utiliza program.option() sin especificar si es requerida o no. Ambas formas son válidas dependiendo de tus necesidades. Si quieres que la opción --mode sea obligatoria, deberías utilizar requiredOption(), como en el primer ejemplo. Si no es obligatoria, entonces option() es adecuada.

// Diferencias en el manejo de opciones: En el primer ejemplo, la opción --mode tiene valores predeterminados de 'production' y 'development' especificados en la llamada a requiredOption(). En el segundo ejemplo, los valores predeterminados se establecen directamente en la definición de la opción utilizando option().

// Manejo de las opciones del programa: En el primer ejemplo, se utiliza program.opts().mode para obtener el valor de la opción --mode, mientras que en el segundo ejemplo se utiliza program.opts().mode.

// En resumen, ambas implementaciones son correctas y funcionales. La elección entre una u otra depende de tus preferencias y de los requisitos específicos de tu aplicación. Si necesitas que la opción --mode sea obligatoria, utiliza requiredOption(). Si quieres establecer valores predeterminados para la opción, puedes hacerlo tanto en la llamada a requiredOption() como en la definición de la opción.
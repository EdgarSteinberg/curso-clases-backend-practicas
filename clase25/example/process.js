import {Command} from 'commander'

const program = new Command();

program
.option('-d', 'Descripcion de este comando', false )
.option('-p <port>', 'Puero del servidor', 8080)
.requiredOption('-u <user>', 'Usuario que ejecuta el programa', 'Usuario no declarado!')

program.parse();
//console.log(process.argb.slice(2));

console.log('Options: ', program.opts());
console.log('Remaning Arguments: ', program.args);
console.log('Arguments from Process: ', process.argv)
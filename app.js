//con la reestructuracion de objetos evitamos tener que llamar al objeto de la siguiente forma al ser requerido argv.argv
const { argv } = require("./config/yargs");
const colors = require("colors");
//const argv = require('./config/yargs').argv;c

const { crearArchivo, listarTabla } = require("./multiplicar/multiplicar");

let comando = argv._[0];

switch (comando) {
  case "listar":
    console.log("listar");
    listarTabla(argv.base, argv.limite);
    break;

  case "crear":
    crearArchivo(argv.base, argv.limite)
      .then((archivo) => console.log(`archivo creado ${colors.green(archivo)}`))
      .catch((err) => console.log(err));

    break;

  default:
    console.log("no se reconoce el comando ingresado".red);
    break;
}

//tomar parametros de la consola
// let arg2v = process.argv;

// let parametro = argv[2];
// let base = parametro.split('=')[1];

// console.log('limite', argv.limite)
// console.log('base ', argv.base)

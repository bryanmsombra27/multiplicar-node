const fs = require("fs");
const colors = require("colors");

let listarTabla = (base, limite = 10) => {
  console.log("=============================".green);
  console.log(`==========Tabla de ${base}=========`.green);
  console.log("=============================".green);
  for (let i = 1; i <= limite; i++) {
    console.log(`${base} * ${i} = ${base * i}\n`);
  }
};

let crearArchivo = (base, limite = 10) => {
  return new Promise((resolve, reject) => {
    if (!Number(base)) {
      reject("No es un numero");
      return;
    }
    let data = "";
    for (let i = 1; i <= limite; i++) {
      data += `${base} * ${i} = ${base * i}\n`;
    }
    //creando archivo txt recibe 3 parametros el metodo el primero es el nombre( y de manera opcional ruta) para crear el archivo, segundo parametro la informacion que se almacenara en el archivo text y el 3 parametro recibe una funcion de callback que determinar si hubo o no algun error durante la creacion del archivo
    fs.writeFile(`tabla-${base}.txt`, `${data}`, (err) => {
      if (err) {
        reject(err);
      } else {
        resolve(`tabla-${base}.txt`);
      }
    });
  });
};
//module: es un objeto global que esta disponible a lo largo de toda la aplicacion en el podemos colocar los elementos que se deseen utilizar de forma global
module.exports = {
  crearArchivo,
  listarTabla,
};

//tablas del 2 al 10
// for (let i = 2; i <= 10; i++) {
//     for (let j = 1; j <= 10; j++) {

//         base = `${i} * ${j} = ${i*j}`

//         console.log(base)
//     }
// }

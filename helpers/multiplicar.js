const fs = require("fs");
const colors = require("colors");
const crearArchivo = async (base = 5, listar = false, hasta = 2) => {
  try {
    let salida = "";
    let consola = "";
    for (let i = 1; i <= hasta; i++) {
      salida += `${base} * ${i} = ${base * i}\n`;
      consola += `${base} ${"*".blue} ${i} ${"=".blue} ${base * i}\n`;
    }
    if (listar) {
      console.log("=============================".green);
      console.log(`        TABLA DEL`.green, colors.blue(base));
      console.log("=============================".green);
      console.log(consola);
    }

    fs.writeFileSync(`./salida/tabla-${base}.txt`, salida);

    return `tabla-${base}.txt creada`;
  } catch (error) {
    throw error;
  }
};

module.exports = {
  crearArchivo,
};

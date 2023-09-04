#!/usr/bin/env node
import createDbConnection, { insert, closeDb } from "./repository"
import commander from "commander"

console.log("A =============================")
const db = createDbConnection()
insert(db)
closeDb(db)
console.log("B =============================")

commander
  .version('1.0.0')
  .description('Una aplicación CLI simple para hacer peticiones http.')
  .option('-u, --url <url>', 'La URL que deseas procesar')
  .option('-H, --headers <headers>', 'Las cabeceras en formato JSON')
  .parse(process.argv);

//// Comprueba si no se proporcionaron parámetros 2 because 0 => node, 1 => 
if (process.argv.length > 2) {
    console.log("non rendering ================>", process.argv)
    // Procesa los parámetros de URL y cabeceras
    const url = commander.url;
    const headers = commander.headers ? JSON.parse(commander.headers) : {};

    //process.exit(0)
}else{
    // weird bug if this is imported from the begin you need to procces.exit or you get a kind of blessed empty screen 
    const ui = require("./ui")
    console.log("Rendering ================>")
    ui.renderui()
}


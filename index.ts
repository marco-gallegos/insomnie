#!/usr/bin/env node
import createDbConnection, { insert, closeDb } from "./repository"
import commander from "commander"

//console.log("A =============================")
//const db = createDbConnection()
//insert(db)
//closeDb(db)
//console.log("B =============================")

const cli = commander.program
    .version('1.0.0')
    .description('Una aplicación CLI simple para hacer peticiones http.')
    .option('-u, --url <url>', 'URL to hit')
    .option('-H, --headers <headers>', 'Headers in JSON format')
    .option('-B, --body <body>', 'Request body')
    .option('-t, --type <type>', 'request type GET, POST, PUT ...')
    .option('-rq, --request <id>', 'request to execute')
    .option('-s, --save', 'Save request.')
    .option('-d, --delete <id>', 'Delete the request with id:<id>')
    .option('-v, --view <id>', 'Show all datails freom the request with id:<id>')
    .parse(process.argv);

//// Comprueba si no se proporcionaron parámetros 2 because 0 => node, 1 => scriptname (insomnie.js)
if (process.argv.length > 2) {
    console.log("non rendering ================>")
    
    const cliParams = cli.opts()
    // Procesa los parámetros de URL y cabeceras
    const requestData = {
        url: cliParams.url,
        type: cliParams.url,
        headers: cliParams.headers ? JSON.parse(cliParams.headers) : {},
        body: cliParams.url,
    }

    const requestManagementFlags = {
        save: !!cliParams.save ? true:false,
    }
    

    console.table(requestData)
    console.table(requestManagementFlags)
    process.exit(0)
}else{
    // weird bug if this is imported from the begin you need to procces.exit or you get a kind of blessed empty screen 
    const ui = require("./ui")
    console.log("Rendering ================>")
    ui.renderui()
}


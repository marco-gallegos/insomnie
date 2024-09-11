#!/usr/bin/env node
// import createDbConnection, { insert, closeDb } from "./repository"
import commander, { Option } from "commander"
import requestController from './controller/requestController';

//console.log("A =============================")
//const db = createDbConnection()
//insert(db)
//closeDb(db)
//console.log("B =============================")

const cli = commander.program
    .version('1.0.0')
    .description('Una aplicación CLI simple para hacer peticiones http.')
    //.addOption(new Option('-d, --drink <size>', 'drink size').choices(['small', 'medium', 'large']).default('small', 'The small version.'))
    .addOption(new Option('-u, --url <url>', 'URL to hit'))
    .addOption(new Option('-H, --headers <headers>', 'Headers in JSON format'))
    .addOption(new Option('-B, --body <body>', 'Request body'))
    .addOption(new Option('-t, --type <type>', 'request type GET, POST, ...').choices(['get', 'post', 'put', 'delete', 'patch', 'gql']))
    .addOption(new Option('-rq, --request <id>', 'request to execute'))
    .addOption(new Option('-s, --save', 'Save request.'))
    .addOption(new Option('-d, --delete <id>', 'Delete the request with id:<id>'))
    .addOption(new Option('-v, --view <id>', 'Show all datails freom the request with id:<id>'))
    .addOption(new Option('-l, --list', 'Show all requests according current space.'))
    .parse(process.argv);

//// Comprueba si no se proporcionaron parámetros 2 because 0 => node, 1 => scriptname (insomnie.js)
if (process.argv.length > 2) {
    console.log("non rendering ================>")
    
    const cliParams = cli.opts()
    console.table(cliParams)
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

    requestController.call(requestData);

    process.exit(0)
}else{
    // weird bug if this is imported from the begin you need to procces.exit or you get a kind of blessed empty screen 
    const ui = require("./ui")
    console.log("Rendering ================>")
    ui.renderui()
}


#!/usr/bin/env node
// import createDbConnection, { insert, closeDb } from "./repository"
import { Option, program } from "commander"
import requestController from '@/controller/requestController';

//console.log("A =============================")
//const db = createDbConnection()
//insert(db)
//closeDb(db)
//console.log("B =============================")

const cli = program
    .version('1.0.0')
    .description('Una aplicación CLI simple para hacer peticiones http.')
    //.addOption(new Option('-d, --drink <size>', 'drink size').choices(['small', 'medium', 'large']).default('small', 'The small version.'))
    .addOption(new Option('-u, --url <url>', 'URL to hit, full parth or base url to work with  -up - url path'))
    .addOption(new Option('-up, --urlpath <url>', 'URL '))
    .addOption(new Option('-H, --headers <headers>', 'Headers in JSON format'))
    .addOption(new Option('-B, --body <body>', 'Request body'))
    .addOption(new Option('-t, --type <type>', 'request type GET, POST, ...').choices(['get', 'post', 'put', 'delete', 'patch', 'gql']))
    .addOption(new Option('-rq, --request <id>', 'request to execute'))
    .addOption(new Option('-s, --save', 'Save request.'))
    .addOption(new Option('-d, --delete <id>', 'Delete the request with id:<id>'))
    .addOption(new Option('-v, --view <id>', 'Show all datails freom the request with id:<id>'))
    .addOption(new Option('-l, --list', 'Show all requests according current space.'));

cli.parse(process.argv);

//// Comprueba si no se proporcionaron parámetros 2 because 0 => node, 1 => scriptname (insomnie.js)
if (process.argv.length > 2) {
    // console.log("non rendering ================>")
    
    const cliParams = cli.opts()
    // console.table(cliParams)
    // Procesa los parámetros de URL y cabeceras
    const requestData = {
        url: cliParams.url,

        type: cliParams.type,
        headers: cliParams.headers ? JSON.parse(cliParams.headers) : {},
        body: cliParams.body ? JSON.parse(cliParams.body) : {},
    }

    const requestManagementFlags = {
        save: !!cliParams.save ? true:false,
    };

    // console.table(requestData);
    // console.table(requestManagementFlags);

    const requestPromise = requestController.call(requestData);
    requestPromise.then((response) => {
        // extracct states from api response if this is not null
        const responseData = response.response?.data ? response.response.data:response.error?.response?.data;
        // console.log("🚀 ~ file: index.ts:54 ~ responseData:", responseData)
        
        const data = {
            status: response.error ? response.error.status:response.response?.status,
            data: responseData?.length > 500 ? responseData.slice(0, 500) + '...' : responseData,
            // error: response.error,
            errorMessage: response.error?.message,
            errorStatus: response.error?.status,
        };

        console.debug(data);
    }).catch(error => {
    })

    // process.exit(0)
}else{
    // weird bug if this is imported from the begin you need to procces.exit or you get a kind of blessed empty screen 
    const ui = require("./ui")
    console.log("Rendering ================>")
    ui.renderui()
}


#!/usr/bin/env node
// import createDbConnection, { insert, closeDb } from "./repository"
import { Option, program } from "commander"
import requestController from '@/controller/requestController';
import chalk from 'chalk';
import Table from 'cli-table3';
import { stdout as terminalWidth } from 'process';
// flows import 
import { checkHealth } from '@/utils';
import { getVersion } from '@/utils/version';

//console.log("A =============================")
//const db = createDbConnection()
//insert(db)
//closeDb(db)
//console.log("B =============================")

const cli = program
  .version(getVersion(true))
  .description('A Simple terminal CLI and TUI local first http client for developers.')
  //.addOption(new Option('-d, --drink <size>', 'drink size').choices(['small', 'medium', 'large']).default('small', 'The small version.'))
  .addOption(new Option('-chk, --check-health', 'this enables check health mode to make a helth check on given urls.'))
  .addOption(new Option('-tr, --tries <number>', 'Max try number (on chk is how many times is executed).').default(10))
  .addOption(new Option('-u, --url <url>', 'URL to hit, full parth or base url to work with  -up - url path'))
  .addOption(new Option('-p, --urlpath <url>', 'a single ppath or a csv list of url paths to hit (path is a url complement <request_url> = <url> + <path>)'))
  .addOption(new Option('-H, --headers <headers>', 'Headers in JSON format'))
  .addOption(new Option('-B, --body <body>', 'Request body'))
  .addOption(new Option('-t, --type <type>', 'request type GET, POST, ...').choices(['get', 'post', 'put', 'delete', 'patch', 'gql']))
  .addOption(new Option('-rq, --request <id>', 'request to execute'))
  .addOption(new Option('-s, --save', 'Save request.'))
  .addOption(new Option('-d, --delete <id>', 'Delete the request with id:<id>'))
  .addOption(new Option('-v, --view <id>', 'Show all datails freom the request with id:<id>'))
  .addOption(new Option('-l, --list', 'Show all requests according current space.'));

cli.parse(process.argv);

const cliParams = cli.opts()
// console.table(cliParams)

const checkHealthFlow: boolean = cliParams.checkHealth ?? false;
// Comprueba si no se proporcionaron parámetros 2 because 0 => node, 1 => scriptname (insomnie.js)
const cliRequestFlow: boolean = process.argv.length > 2;
const tuiRequestFlow: boolean = !cliRequestFlow;

/**
 * Funtion to generate full urls from -u and -p.
 * 
 * @param baseUrl 
 * @param urlPaths 
 * @returns 
 */
const generateFullUrls = (baseUrl: string, urlPaths: string): string[] => {
  if (!urlPaths) {
    return [baseUrl];
  }
  const paths = urlPaths.split(',').map(path => path.trim());
  return paths.map(path => `${baseUrl}${path}`);
};


// 1: check health flow
if (checkHealthFlow) {
  const fullPathUrls: string[] = generateFullUrls(cliParams.url, cliParams.urlpath);
  await checkHealth(fullPathUrls, cliParams.tries);
  /**
   *
  for (let i = 0; i < cliParams.tries; i++) {
    await printTable(fullPathUrls);
    await new Promise(resolve => setTimeout(resolve, 500));
  }
  */
  process.exit(0);
}

// 2: cli request
if (cliParams.type === 'gql') {
  console.debug("Graphql is not implemented  :c (not yet 7u7)");
  process.exit(0);
}
if (cliRequestFlow && !checkHealthFlow) {
  // Procesa los parámetros de URL y cabeceras
  const requestData = {
    url: cliParams.url,

    type: cliParams.type,
    headers: cliParams.headers ? JSON.parse(cliParams.headers) : {},
    body: cliParams.body ? JSON.parse(cliParams.body) : {},
  }

  const requestManagementFlags = {
    save: !!cliParams.save ? true : false,
  };

  // console.table(requestData);
  // console.table(requestManagementFlags);

  const requestPromise = requestController.call(requestData);
  requestPromise.then((response) => {
    // extracct states from api response if this is not null
    const responseData = response.response?.data ? response.response.data : response.error?.response?.data;
    // console.log("🚀 ~ file: index.ts:54 ~ responseData:", responseData)

    const data = {
      status: response.error ? response.error.status : response.response?.status,
      data: responseData?.length > 500 ? responseData.slice(0, 500) + '...' : responseData,
      // error: response.error,
      errorMessage: response.error?.message,
      errorStatus: response.error?.status,
    };

    const consoleTable = new Table({
      head: [chalk.white('State'), chalk.white('Body')],
      colWidths: [50, Math.floor(terminalWidth.columns - 53)]
    });

    const col1 = {
      url: requestData.url,
      status: data.status,
      errorMessage: data.errorMessage,
      errorStatus: data.errorStatus,
    }

    consoleTable.push([JSON.stringify(col1, null, 1), JSON.stringify(data.data, null, 1)]);

    // TODO: this is just printing a line, lets print multirow texts
    console.log(consoleTable.toString());
  }).catch(error => {
  })

  // process.exit(0)
} else {
  // weird bug if this is imported from the begin you need to procces.exit or you get a kind of blessed empty screen 
  const ui = require("./ui")
  console.log("Rendering ================>")
  ui.renderui()
}


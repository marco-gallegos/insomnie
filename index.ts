#!/usr/bin/env node
import requestController from '@/controller/requestController';
import chalk from 'chalk';
import Table from 'cli-table3';
import { stdout as terminalWidth } from 'process';

// flows import 
import { checkHealth } from '@/utils';
import { getCliProgram } from '@/utils/cli';
import { generateFullUrls, parseHeaders } from './utils/requests';

const cli = getCliProgram(process.argv);
const cliParams = cli.opts()

const checkHealthFlow: boolean = cliParams.checkHealth ?? false;
// Comprueba si no se proporcionaron parámetros 2 because 0 => node, 1 => scriptname (insomnie.js)
const cliRequestFlow: boolean = process.argv.length > 2;
const tuiRequestFlow: boolean = !cliRequestFlow;

// 0 - exceptions and missings
if (cliParams.type === 'gql') {
  console.debug("Graphql is not implemented  :c (not yet 7u7)");
  process.exit(0);
}

// 1: check health flow
if (checkHealthFlow) {
  const fullPathUrls: string[] = generateFullUrls(cliParams.url, cliParams.urlpath);
  await checkHealth(fullPathUrls, cliParams.tries);
  process.exit(0);
}

// 2: cli request
if (cliRequestFlow && !checkHealthFlow) {
  // Procesa los parámetros de URL y cabeceras
  const requestData = {
    url: cliParams.url,

    type: cliParams.type,
    headers: cliParams.headers ? JSON.parse(cliParams.headers) : {},
    body: cliParams.body ? JSON.parse(cliParams.body) : {},
  }

  let response = null;
  let requestError = null;
  try {
    response = await requestController.call(requestData);
  } catch (error) {
    requestError = error;
  }

  if (requestError !== null) {
    console.log('Error Calling API', requestError)
    process.exit(1);
  }

  console.log('parsing response data ...')
  // extracct states from api response if this is not null
  let responseData = null;

  const headers:any = parseHeaders(response.headers);

  if (headers.isJson) {
    // responseData = 'json';
    responseData = await response.json();
  }

  if (headers.isHtml || headers.isXml || headers.isText) {
    responseData = await response.text();
  }

  console.log('printing response data ...')

  const data = {
    status: response.status,
    data: responseData,
  };

  const consoleTable = new Table({
    style: { border: [], header: [] },
    head: [chalk.white('State')],
    wordWrap: true,
    // colWidths: [50, Math.floor(terminalWidth.columns - 53)],
    colWidths: [terminalWidth.columns < 50 ? 50 : Math.floor(terminalWidth.columns/2)],
  });

  const col1 = {
    url: requestData.url,
    status: data.status,
  }

  consoleTable.push([JSON.stringify(col1, null, 1)]);
  
  console.log(consoleTable.toString());
  console.log(chalk.yellow('Response Body:'));
  console.log(JSON.stringify(data.data, null, 1));
} else {
  // weird bug if this is imported from the begin you need to procces.exit or you get a kind of blessed empty screen 
  const ui = require("./ui");
  console.log("Rendering ================>");
  ui.renderui();
  process.exit(0);
}


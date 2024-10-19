import chalk from 'chalk';
import Table from 'cli-table3';

/**
 * simple function to print responses in a table
*/
const printTable = async (tableData: any[]) => {
  const table = new Table({
    head: [chalk.white('URL'), chalk.white('Status')],
    colWidths: [80, 18],
  });

  tableData.forEach(async (row, index: number) => {
    if (row.status === "rejected") {
      table.push([chalk.blue(index), chalk.red(row.status)]);
    } else {
      // console.debug(row.value)
      let statusColor: Function;
      if (row.value.status === 'Error') {
        statusColor = chalk.red;
      } else if (row.value.status >= 200 && row.value.status < 300) {
        statusColor = chalk.green;
      } else {
        statusColor = chalk.yellow;
      }
      // NOTE: /n or `` with enters increases height
      table.push([chalk.blue(row.value.url), statusColor(`${row.value.status} ${row.value.statusText}`)]);
    }
  });

  console.log('\n' + chalk.bold(`Requesting ${tableData.length} URLs:`) + '\n');
  console.log(table.toString());
};

export const checkHealth = async (fullPathUrls: string[], tries: number) => {
  for (let index = 0; index < tries; index++) {
    let promises = [];
    for (const path of fullPathUrls) {
      promises.push(fetch(path));
    };
    let responses: any[] = await Promise.allSettled(promises);
    // const convertionPromises: any[] = responses.map(async (op) => await op.value.text())
    // const convertion = await Promise.all(convertionPromises);
    // console.debug(convertion)
    printTable(responses)
  }
}

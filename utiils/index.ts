import chalk from 'chalk';
import Table from 'cli-table3';


/**
 * 
 * @param url 
 * @returns 
 */
const fetchData = async (url) => {
  try {
    const response = await fetch(url);
    // const data = await response.json();
    return { url, status: response.status };
  } catch (error) {
    console.debug(error)
    return { url, status: 'Error' };
  }
};
  
/**
 * 
*/
export const printTable = async (urls: string[]) => {
    let tableData = [];
    for (let url of urls) {
      tableData.push(await fetchData(url));
    }
  
    const table = new Table({
      head: [chalk.white('URL'), chalk.white('Estado')],
      colWidths: [80, 10],
    });
  
    tableData.forEach(row => {
      let statusColor;
      if (row.status === 'Error') {
        statusColor = chalk.red;
      } else if (row.status >= 200 && row.status < 300) {
        statusColor = chalk.green;
      } else {
        statusColor = chalk.yellow;
      }
      
      // NOTE: /n or `` with enters increases height
      table.push([chalk.blue(row.url), statusColor(row.status)]);
    });
  
    console.log('\n' + chalk.bold(`Peticiones a ${urls.length} URLs:`) + '\n');
    console.log(table.toString());
  };
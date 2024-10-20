import { Option, program } from "commander";
import { getVersion } from '@/utils/version';

export const getCliProgram = (args:any) => {
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

    return cli.parse(args);
}
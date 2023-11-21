import * as esbuild from 'esbuild';
import tsconfigPaths from 'tsconfig-paths';

const baseUrl = '.'; // Ruta base de tu proyecto
tsconfigPaths.register({
    baseUrl,
    paths: {
        '@/*': ['*']
    }
});

const args = process.argv.filter((value, index) => index > 1 ? value : null)

// dev if no arg is passed
const isDev = !args[0] || (args[0] && args[0] === "dev") ? true : false

let buildStatus = {}

if (isDev === true) {
    buildStatus = await esbuild.build({
        entryPoints: ['index.ts'],
        bundle: true,
        outfile: 'insomnie.js',
        platform: 'node',
        packages: 'external',
        logLevel: 'debug',
        tsconfig: 'tsconfig.json'
    })
} else {
    buildStatus = await esbuild.build({
        entryPoints: ['index.ts'],
        bundle: true,
        outfile: 'insomnie.js',
        platform: 'node',
        packages: 'external',
        minify: true,
        logLevel: 'debug'
    })

}


console.table(buildStatus)

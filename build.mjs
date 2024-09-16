import * as esbuild from 'esbuild'
import path from 'path'

const args = process.argv.filter((value, index) => index > 1 ? value:null )

// dev if no arg is passed
const isDev = !args[0] || ( args[0] && args[0] === "dev" ) ? true:false

let buildStatus = {}

if (isDev === true) {
    buildStatus = await esbuild.build({
        entryPoints: ['index.ts'],
        bundle: true,
        outfile: 'insomnie.dev.js',
        platform: 'node',
        target: ['es2022'],
        format: 'esm',
        minify: false,
        packages: 'external',
        logLevel: 'debug',
        alias: {
            "@": path.resolve("./")
        },

        // this is a fix a error on commander.js compiatibility
        // require is not defined in ES module scope, you can use import instead
        // file:///home/user/insomnie/insomnie.dev.js:278
        // var import_commander = require("commander");
        // https://github.com/evanw/esbuild/issues/946
        // banner: {
        //     // js: "import { createRequire as topLevelCreateRequire } from 'module';\n const require = topLevelCreateRequire(import.meta.url);"
        // },
    })
} else {
    buildStatus = await esbuild.build({
        entryPoints: ['index.ts'],
        bundle: true,
        outfile: 'insomnie.js',
        platform: 'node',
        packages: 'external',
        minify: true,
        logLevel: 'debug',
        alias: {
            "@": path.resolve("./")
        }
    })
}


console.table(buildStatus)

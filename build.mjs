import * as esbuild from 'esbuild'

const buildStatus = await esbuild.build({
    entryPoints: ['index.ts'],
    bundle: true,
    outfile: 'insomnie.js',
    platform: 'node',
    packages: 'external'
})

console.log(buildStatus)

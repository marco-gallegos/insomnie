import { parentPort } from 'node:worker_threads'

parentPort.on('message', (data) => {
    console.debug("worker thread", data)

    parentPort.postMessage({ hello: 'worker' })
})

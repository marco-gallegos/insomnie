// api.ts
var import_node_worker_threads = require("node:worker_threads");
import_node_worker_threads.parentPort.on("message", (data) => {
  console.debug("worker thread", data);
  import_node_worker_threads.parentPort.postMessage({ hello: "worker" });
});

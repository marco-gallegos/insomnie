#!/usr/bin/env node
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __esm = (fn, res) => function __init() {
  return fn && (res = (0, fn[__getOwnPropNames(fn)[0]])(fn = 0)), res;
};
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// ui/index.ts
var ui_exports = {};
__export(ui_exports, {
  preview: () => preview,
  renderui: () => renderui,
  screen: () => screen,
  sendButton: () => sendButton
});
import blessed from "blessed";
var loremText, screen, form, methodLabel, methodList, urlLabel, urlInput, headersLabel, headersInput, bodyLabel, bodyInput, sendButton, preview, makeRequest, renderui;
var init_ui = __esm({
  "ui/index.ts"() {
    loremText = `Lorem ipsum dolor sit amet,
consectetur adipiscing elit.
Nulla sed interdum nisi. Sed pharetra libero id nunc tristique, nec scelerisque dui sagittis.
Nunc eu hendrerit lacus. Pellentesque ut tristique risus. Proin euismod lacus ligula, eu ullamcorper justo luctus a.
Mauris et sapien ligula. In pellentesque sem a finibus interdum.
Integer condimentum nec eros at placerat. Curabitur consequat convallis sem ac auctor. Etiam non dapibus sem.
Vestibulum rutrum fringilla turpis, et scelerisque elit convallis in.
Cras tincidunt rhoncus metus nec eleifend. Aliquam erat volutpat. Sed auctor fringilla pharetra. Aenean non mi ante.

Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae;
Sed ut lacus id magna commodo vestibulum. Donec feugiat, felis sit amet laoreet facilisis, arcu velit tristique enim, nec volutpat lectus metus nec velit.
Phasellus aliquet, nisl et sollicitudin dapibus, ex lectus tincidunt tellus, sed congue dolor risus at risus. Vestibulum placerat mauris non leo volutpat efficitur.
Fusce bibendum iaculis tincidunt. Nam eget consequat lectus. Sed tristique odio et sem elementum, eget interdum velit pharetra. Nulla facilisi. Curabitur ac mauris consectetur, feugiat mauris quis, consequat metus. Integer vitae magna non dolor aliquet lobortis eu eget mauris.

Suspendisse efficitur arcu at nibh finibus, id vulputate turpis fermentum. Aenean nec nibh eu lectus vehicula placerat. Donec id placerat leo. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Mauris pellentesque, mi eget auctor varius, erat odio ultrices quam, in convallis odio mi in urna. Cras sodales tempus eros id viverra. Sed vulputate congue turpis, vitae scelerisque tellus efficitur ut. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.

Etiam eu rutrum nunc, a eleifend ante. Fusce pharetra purus nec ex placerat pharetra. Aenean auctor, enim vitae sollicitudin rutrum, risus nulla auctor lacus, vel cursus ligula tellus eget nunc. Vestibulum feugiat dictum sem, sit amet auctor orci pulvinar a. Pellentesque at sem dui. Nullam sit amet turpis lacinia, ullamcorper orci sit amet, fringilla elit. Quisque facilisis pellentesque enim, nec vulputate leo malesuada quis. Proin congue ipsum sed aliquet pretium. Etiam placerat vehicula purus vitae malesuada. Suspendisse ullamcorper, quam vel vestibulum consectetur, lectus nibh fringilla velit, at dignissim mauris ex vel justo. Cras volutpat euismod erat, sit amet faucibus lorem gravida id. Sed dapibus nibh ac lectus sagittis, vel efficitur lorem fermentum. Nullam cursus dolor et luctus faucibus. Nullam id gravida nunc.`;
    screen = blessed.screen({
      smartCSR: true
    });
    form = blessed.form({
      parent: screen,
      //top: 'center',
      //left: 'center',
      width: "50%",
      height: "100%",
      //border: {
      //type: 'line',
      //},
      scrollable: true,
      // Habilitar scroll
      keys: true,
      vi: true,
      mouse: true,
      scrollbar: {
        style: {
          fg: "white",
          bg: "blue"
        }
      }
    });
    methodLabel = blessed.text({
      parent: form,
      top: 1,
      left: 2,
      content: "M\xE9todo:"
    });
    methodList = blessed.list({
      parent: form,
      top: 2,
      left: 2,
      width: "96%",
      height: 3,
      keys: true,
      mouse: true,
      autoCommandKeys: true,
      border: {
        type: "line"
      },
      style: {
        item: {
          fg: "white",
          bg: "black",
          hover: {
            bg: "green"
          }
        },
        selected: {
          bg: "green"
        }
      },
      items: [
        "GET",
        "POST",
        "PUT",
        "DELETE"
      ]
    });
    urlLabel = blessed.text({
      parent: form,
      top: 6,
      left: 2,
      content: "URL:"
    });
    urlInput = blessed.textbox({
      parent: form,
      top: 7,
      left: 2,
      width: "96%",
      height: 3,
      vi: true,
      keys: true,
      mouse: true,
      border: {
        type: "line"
      },
      style: {
        fg: "white",
        bg: "black",
        focus: {
          border: {
            fg: "green"
          }
        }
      }
    });
    headersLabel = blessed.text({
      parent: form,
      top: 10,
      left: 2,
      content: "Headers:"
    });
    headersInput = blessed.textarea({
      parent: form,
      top: 11,
      left: 2,
      width: "96%",
      height: 8,
      vi: true,
      keys: true,
      mouse: true,
      border: {
        type: "line"
      },
      style: {
        fg: "white",
        bg: "black",
        focus: {
          border: {
            fg: "green"
          }
        }
      }
    });
    bodyLabel = blessed.text({
      parent: form,
      top: 21,
      left: 2,
      content: "Body:"
    });
    bodyInput = blessed.textarea({
      parent: form,
      top: 22,
      left: 2,
      width: "96%",
      height: 10,
      vi: true,
      keys: true,
      mouse: true,
      border: {
        type: "line"
      },
      style: {
        fg: "white",
        bg: "black",
        focus: {
          border: {
            fg: "green"
          }
        }
      }
    });
    sendButton = blessed.button({
      parent: form,
      top: 34,
      left: "center",
      width: 10,
      height: 3,
      content: "Enviar",
      border: {
        type: "line"
      },
      vi: true,
      keys: true,
      mouse: true,
      style: {
        fg: "white",
        bg: "black",
        focus: {
          border: {
            fg: "green"
          }
        }
      }
    });
    preview = blessed.box({
      parent: screen,
      left: "50%-1",
      width: "50%",
      height: "100%",
      border: {
        type: "line"
      },
      style: {
        fg: "white",
        bg: "black"
      },
      scrollable: true,
      // Habilitar scroll
      keys: true,
      vi: true,
      mouse: true,
      scrollbar: {
        style: {
          bg: "green",
          fg: "green"
        }
      }
    });
    makeRequest = async () => {
      const method = !!methodList.options?.items ? methodList.options.items[methodList.selected] : "GET";
      const url = urlInput.getValue();
      const headers = headersInput.getValue();
      const body = bodyInput.getValue();
      const data = {
        method,
        url,
        headers,
        body
      };
      preview.setContent(`hola marco ${Date.now()}
 ${JSON.stringify(data, null, 2)}`);
    };
    renderui = () => {
      sendButton.on("press", makeRequest);
      screen.key(["escape", "q", "C-c"], () => process.exit(0));
      preview.setContent(loremText);
      screen.render();
    };
  }
});

// index.ts
import { Option, program } from "commander";

// controller/requestController.ts
import axios from "axios";
var requestController = {
  call: async (requestData) => {
    console.debug("calling api");
    let response = {
      data: null
    };
    let error = null;
    try {
      response = await axios({
        method: requestData.type,
        url: requestData.url
        // headers: requestData.headers,
        // data: requestData.body
      });
    } catch (err) {
      error = err;
    }
    return { response, error };
  },
  save: () => {
    return "save";
  },
  delete: () => {
    return "delete";
  }
};
var requestController_default = requestController;

// index.ts
import chalk2 from "chalk";
import Table2 from "cli-table3";

// utiils/index.ts
import chalk from "chalk";
import Table from "cli-table3";
var fetchData = async (url) => {
  try {
    const response = await fetch(url);
    return { url, status: response.status };
  } catch (error) {
    console.debug(error);
    return { url, status: "Error" };
  }
};
var printTable = async (urls) => {
  let tableData = [];
  for (let url of urls) {
    tableData.push(await fetchData(url));
  }
  const table = new Table({
    head: [chalk.white("URL"), chalk.white("Estado")],
    colWidths: [80, 10]
  });
  tableData.forEach((row) => {
    let statusColor;
    if (row.status === "Error") {
      statusColor = chalk.red;
    } else if (row.status >= 200 && row.status < 300) {
      statusColor = chalk.green;
    } else {
      statusColor = chalk.yellow;
    }
    table.push([chalk.blue(row.url), statusColor(row.status)]);
  });
  console.log("\n" + chalk.bold(`Peticiones a ${urls.length} URLs:`) + "\n");
  console.log(table.toString());
};

// index.ts
var cli = program.version("1.0.0").description("Una aplicaci\xF3n CLI simple para hacer peticiones http.").addOption(new Option("-chk, --check-health", "this enables check health mode to make a helth check on given urls.")).addOption(new Option("-tr, --tries <number>", "Max try number (on chk is how many times is executed).").default(10)).addOption(new Option("-u, --url <url>", "URL to hit, full parth or base url to work with  -up - url path")).addOption(new Option("-p, --urlpath <url>", "a single ppath or a csv list of url paths to hit (path is a url complement <request_url> = <url> + <path>)")).addOption(new Option("-H, --headers <headers>", "Headers in JSON format")).addOption(new Option("-B, --body <body>", "Request body")).addOption(new Option("-t, --type <type>", "request type GET, POST, ...").choices(["get", "post", "put", "delete", "patch", "gql"])).addOption(new Option("-rq, --request <id>", "request to execute")).addOption(new Option("-s, --save", "Save request.")).addOption(new Option("-d, --delete <id>", "Delete the request with id:<id>")).addOption(new Option("-v, --view <id>", "Show all datails freom the request with id:<id>")).addOption(new Option("-l, --list", "Show all requests according current space."));
cli.parse(process.argv);
var cliParams = cli.opts();
var checkHealthFlow = cliParams.checkHealth ?? false;
var cliRequestFlow = process.argv.length > 2;
var generateFullUrls = (baseUrl, urlPaths) => {
  if (!urlPaths) {
    return [baseUrl];
  }
  const paths = urlPaths.split(",").map((path) => path.trim());
  return paths.map((path) => `${baseUrl}${path}`);
};
if (checkHealthFlow) {
  const fullPathUrls = generateFullUrls(cliParams.url, cliParams.urlpath);
  for (let i = 0; i < cliParams.tries; i++) {
    await printTable(fullPathUrls);
    await new Promise((resolve) => setTimeout(resolve, 500));
  }
  process.exit(0);
}
if (cliRequestFlow && !checkHealthFlow) {
  const requestData = {
    url: cliParams.url,
    type: cliParams.type,
    headers: cliParams.headers ? JSON.parse(cliParams.headers) : {},
    body: cliParams.body ? JSON.parse(cliParams.body) : {}
  };
  const requestManagementFlags = {
    save: !!cliParams.save ? true : false
  };
  const requestPromise = requestController_default.call(requestData);
  requestPromise.then((response) => {
    const responseData = response.response?.data ? response.response.data : response.error?.response?.data;
    const data = {
      status: response.error ? response.error.status : response.response?.status,
      data: responseData?.length > 500 ? responseData.slice(0, 500) + "..." : responseData,
      // error: response.error,
      errorMessage: response.error?.message,
      errorStatus: response.error?.status
    };
    const consoleTable = new Table2({
      head: [chalk2.white("State"), chalk2.white("Body")],
      colWidths: [80, 50]
    });
    const col1 = {
      url: requestData.url,
      status: data.status,
      errorMessage: data.errorMessage,
      errorStatus: data.errorStatus
    };
    consoleTable.push([JSON.stringify(col1, null, 1), JSON.stringify(data.data, null, 1)]);
    console.log(consoleTable.toString());
  }).catch((error) => {
  });
} else {
  const ui = (init_ui(), __toCommonJS(ui_exports));
  console.log("Rendering ================>");
  ui.renderui();
}

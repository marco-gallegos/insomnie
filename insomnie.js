#!/usr/bin/env node
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
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
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// ui/index.ts
var ui_exports = {};
__export(ui_exports, {
  preview: () => preview,
  renderui: () => renderui,
  screen: () => screen,
  sendButton: () => sendButton
});
var import_blessed, loremText, screen, form, methodLabel, methodList, urlLabel, urlInput, headersLabel, headersInput, bodyLabel, bodyInput, sendButton, preview, makeRequest, renderui;
var init_ui = __esm({
  "ui/index.ts"() {
    import_blessed = __toESM(require("blessed"));
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
    screen = import_blessed.default.screen({
      smartCSR: true
    });
    form = import_blessed.default.form({
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
    methodLabel = import_blessed.default.text({
      parent: form,
      top: 1,
      left: 2,
      content: "M\xE9todo:"
    });
    methodList = import_blessed.default.list({
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
    urlLabel = import_blessed.default.text({
      parent: form,
      top: 6,
      left: 2,
      content: "URL:"
    });
    urlInput = import_blessed.default.textbox({
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
    headersLabel = import_blessed.default.text({
      parent: form,
      top: 10,
      left: 2,
      content: "Headers:"
    });
    headersInput = import_blessed.default.textarea({
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
    bodyLabel = import_blessed.default.text({
      parent: form,
      top: 21,
      left: 2,
      content: "Body:"
    });
    bodyInput = import_blessed.default.textarea({
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
    sendButton = import_blessed.default.button({
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
    preview = import_blessed.default.box({
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

// repository/index.ts
var import_fs = __toESM(require("fs"));
var sqlite3 = require("sqlite3").verbose();
var filepath = "./requests.db";
var createTable = async (db2) => {
  db2.exec(`
        CREATE TABLE requests
        (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            url   VARCHAR(250) NOT NULL,
            path   VARCHAR(250) NOT NULL,
            headers   VARCHAR(250),
            weight INTEGER NOT NULL
        );
    `);
};
var migrate = (db2) => {
  createTable(db2);
};
function createDbConnection() {
  if (import_fs.default.existsSync(filepath)) {
    return new sqlite3.Database(filepath);
  } else {
    const db2 = new sqlite3.Database(filepath, (error) => {
      if (error) {
        return console.error(error.message);
      }
    });
    console.log("Connection with SQLite has been established");
    migrate(db2);
    return db2;
  }
}
var closeDb = (db2) => {
  db2.close((err) => {
    if (err) {
      console.error("Error al cerrar la base de datos", err.message);
    } else {
      console.log("Base de datos cerrada");
    }
  });
};
var insert = (db2) => {
  db2.run('INSERT INTO requests VALUES (null, "url", "Juan", "none", 1)');
};

// index.ts
var import_commander = __toESM(require("commander"));
console.log("A =============================");
var db = createDbConnection();
insert(db);
closeDb(db);
console.log("B =============================");
import_commander.default.version("1.0.0").description("Una aplicaci\xF3n CLI simple para hacer peticiones http.").option("-u, --url <url>", "La URL que deseas procesar").option("-H, --headers <headers>", "Las cabeceras en formato JSON").parse(process.argv);
if (process.argv.length > 2) {
  console.log("non rendering ================>", process.argv);
  const url = import_commander.default.url;
  const headers = import_commander.default.headers ? JSON.parse(import_commander.default.headers) : {};
} else {
  const ui = (init_ui(), __toCommonJS(ui_exports));
  console.log("Rendering ================>");
  ui.renderui();
}

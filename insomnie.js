#!/usr/bin/env node
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
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

// ui/index.ts
var import_blessed = __toESM(require("blessed"));
var screen = import_blessed.default.screen({
  smartCSR: true
});
var form = import_blessed.default.form({
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
var methodLabel = import_blessed.default.text({
  parent: form,
  top: 1,
  left: 2,
  content: "M\xE9todo:"
});
var methodList = import_blessed.default.list({
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
var urlLabel = import_blessed.default.text({
  parent: form,
  top: 6,
  left: 2,
  content: "URL:"
});
var urlInput = import_blessed.default.textbox({
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
var headersLabel = import_blessed.default.text({
  parent: form,
  top: 10,
  left: 2,
  content: "Headers:"
});
var headersInput = import_blessed.default.textarea({
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
var bodyLabel = import_blessed.default.text({
  parent: form,
  top: 21,
  left: 2,
  content: "Body:"
});
var bodyInput = import_blessed.default.textarea({
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
var sendButton = import_blessed.default.button({
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
var preview = import_blessed.default.box({
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

// index.ts
var makeRequest = async () => {
  preview.setContent(`hola marco 7u7 ${Date.now()}`);
  screen.render();
};
sendButton.on("press", makeRequest);
screen.key(["escape", "q", "C-c"], () => process.exit(0));
screen.render();

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
console.log("A =============================");
var db = createDbConnection();
insert(db);
closeDb(db);
console.log("B =============================");

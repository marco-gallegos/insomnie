import fs from "fs"
const sqlite3 = require("sqlite3").verbose();
const filepath = "./requests.db";
//import {} from "@types/sqlite3"

function selectrequest(db) {
    const rows:any[] = []
    db.each(`SELECT * FROM requests limit 1`, (error, row) => {
        if (error) {
            throw new Error(error.message);
        }
        console.log(row);
        rows.push(row)
    });
    return rows
}

const createTable = async (db) => {
    db.exec(`
        CREATE TABLE requests
        (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            url   VARCHAR(250) NOT NULL,
            path   VARCHAR(250) NOT NULL,
            headers   VARCHAR(250),
            weight INTEGER NOT NULL
        );
    `);
}

const migrate = (db) => {
    createTable(db)
}

export default function createDbConnection() {
    if (fs.existsSync(filepath)) {
        return new sqlite3.Database(filepath);
    } else {
        const db = new sqlite3.Database(filepath, (error) => {
            if (error) {
                return console.error(error.message);
            }
        });
        console.log("Connection with SQLite has been established");
        migrate(db)
        return db;
    }
}

export const closeDb = (db) => {
    db.close((err) => {
      if (err) {
        console.error('Error al cerrar la base de datos', err.message);
      } else {
        console.log('Base de datos cerrada');
      }
    });
}

export const insert = (db) => {
    db.run('INSERT INTO requests VALUES (null, "url", "Juan", "none", 1)');
}


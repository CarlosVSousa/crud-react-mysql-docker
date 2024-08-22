import mysql from "mysql2";

export const db = mysql.createConnection({
    host: "localhost",
    port: "3307",
    user: "root",
    password: "strong_password",
    database: "crud",
});
// db.js
import mysql from "mysql2/promise";
import dotenv from "dotenv";

dotenv.config();

export let db;

try {
  db = await mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
  });

  console.log(` Connected to MySQL database: ${process.env.DB_NAME}`);
} catch (error) {
  console.error("Database connection error:", error.message);
}

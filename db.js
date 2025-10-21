

// db.js
import mysql from "mysql2/promise";
import dotenv from "dotenv";

dotenv.config();

// Create a pool instead of a single connection
export const db = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  waitForConnections: true,
  connectionLimit: 10, // max concurrent connections
  queueLimit: 0,       // unlimited queue
});

// Optional: Test the pool connection
db.getConnection()
  .then((conn) => {
    console.log(` Connected to MySQL database: ${process.env.DB_NAME}`);
    conn.release(); // release connection back to pool
  })
  .catch((err) => console.error(" Database connection error:", err.message));

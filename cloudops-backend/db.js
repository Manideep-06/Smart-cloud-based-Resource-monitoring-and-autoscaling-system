require('dotenv').config();
const mysql = require('mysql2');

// Create MySQL Connection Pool (better than single connection)
const db = mysql.createPool({
  host: process.env.DB_HOST,        // 127.0.0.1
  user: process.env.DB_USER,        // clouduser
  password: process.env.DB_PASSWORD,// Cloud@123
  database: process.env.DB_NAME,    // cloudops_db
  port: process.env.DB_PORT || 3306,
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
});

// Test Connection
db.getConnection((err, connection) => {
  if (err) {
    console.error("❌ Database Connection Failed:", err.message);
  } else {
    console.log("✅ Connected to MySQL Database");
    connection.release();
  }
});

module.exports = db;

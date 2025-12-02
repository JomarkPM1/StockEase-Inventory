<<<<<<< HEAD
// backend/db.js
const mysql = require('mysql2');
=======
const mysql = require('mysql');
>>>>>>> 6bb454d241aea38e1212c46af7f527310556f3e8
const dotenv = require('dotenv');

dotenv.config();

<<<<<<< HEAD
// Make sure you have a .env file in your backend folder with these variables:
// DB_HOST=localhost
// DB_USER=your_db_username
// DB_PASSWORD=your_db_password
// DB_NAME=your_db_name

// Create MySQL connection pool
const pool = mysql.createPool({
  host: process.env.DB_HOST || 'localhost',
  user: process.env.DB_USER || 'root',      // fallback username
  password: process.env.DB_PASSWORD || '',  // fallback password
  database: process.env.DB_NAME || 'stockease',  // fallback database
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
});

// Export promise-based pool
module.exports = pool.promise();
=======
const pool = mysql.createPool({
  connectionLimit: 10,
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
});

module.exports = pool;
>>>>>>> 6bb454d241aea38e1212c46af7f527310556f3e8

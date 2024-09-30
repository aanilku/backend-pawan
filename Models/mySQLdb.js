const mysql = require('mysql2/promise');
// const dotenv = require('dotenv');

// dotenv.config();

const connectMySQL = async () => {
  try {
    const connection = await mysql.createConnection({
      host: process.env.MYSQL_HOST,
      user: process.env.MYSQL_USER,
      password: process.env.MYSQL_PASSWORD,
      database: process.env.MYSQL_DB,
    });
    console.log('MySQL connected');
    return connection;
  } catch (err) {
    console.error(err.message);
    console.log('MySQL not connected');
    process.exit(1);
  }
};

module.exports = connectMySQL;

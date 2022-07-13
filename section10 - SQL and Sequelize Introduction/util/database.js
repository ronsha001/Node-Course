// const mysql = require("mysql2");

// const pool = mysql.createPool({
//   host: "localhost",
//   user: "root",
//   database: "node-complete",
//   password: "208201996",
// });

// module.exports = pool.promise();

const { Sequelize } = require("sequelize");

const sequelize = new Sequelize(
  "node-complete", 
  "root", 
  "208201996", 
  {
    dialect: "mysql",
    host: "localhost"
  }
);

module.exports = sequelize;

"user strict";

const mysql = require("mysql");
const Sequelize = require("sequelize"); 

//local mysql db connection
const dbConn = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
});
dbConn.connect(function (err) {
  if (err) throw err;
  console.log("Database Connected!");
});

const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USERNAME, process.env.DB_PASSWORD, {
  host: process.env.DB_HOST,
  dialect: "mysql",
});

sequelize
  .authenticate()
  .then(() => console.log("Database Connected!"))
  .catch(error => console.error("Unable to connect to the database: ", error));

module.exports = { dbConn, sequelize };

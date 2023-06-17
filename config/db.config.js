"user strict";

const mysql = require("mysql");
const Sequelize = require("sequelize");

//local mysql db connection
const dbConn = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '',
  database : 'simulateur'
});
dbConn.connect(function(err) {
  if (err) throw err;
  console.log("Database Connected!");
});

const sequelize = new Sequelize("simulateur", "root", "", {
  host: "localhost",
  dialect: "mysql",
});

sequelize
  .authenticate()
  .then(() => console.log("Database Connected!"))
  .catch(() => console.error("Unable to connect to the database: ", error));

module.exports = { dbConn, sequelize };

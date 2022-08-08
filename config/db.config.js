const mysql = require('mysql');
const env = require('../envrionments/environment')

//mysql db connection
const db = mysql.createConnection({
  host     : env.envrionment.dbConfig.databaseConnection,
  user     : env.envrionment.dbConfig.databaseUser,
  database : env.envrionment.dbConfig.databaseName
});
db.connect(function(err) {
  if (err) throw err;
  console.log("Database Connected!");
});
module.exports = db;


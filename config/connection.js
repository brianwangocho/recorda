const mysql = require('mysql');
const nconf = require("./nconf.js")

const mySqlConnection =  nconf.get( "localMysql")

////create mysql connection
const db = mysql.createConnection(mySqlConnection)

db.connect((err)=>{
    if(err){
        throw err;
    }
    console.log("database is connected")
})
 module.exports = db;
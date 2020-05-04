var mysql = require("mysql");
var connection;


if (process.env.JAWSDB_URL) {
    connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
    connection = mysql.createConnection({
        host: 'localhost',
        port: 3306,
        user: 'root',
<<<<<<< HEAD:app/config/connection.js
        password: 'Fairview13097',
=======
        password: 'Naoto-kun211',
>>>>>>> c3e9821f083091d387f1f4f42c3a944366093728:config/connection.js
        database: 'spot_db'
    });
};
connection.connect();
module.exports = connection;


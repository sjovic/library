'user strict';

var mysql = require('mysql');
var config = require('../config');

//local mysql db connection
var connection = mysql.createConnection({
    host     : config.host,
    user     : config.user,
    password : config.password,
    database : config.database
});

connection.connect(function(err) {
    if (err) {
        throw err;
    } else {
        console.log('DB connected!');
    }
});

module.exports = connection;
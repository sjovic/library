
'user strict';

var config = require('../config');

const Sequelize = require('sequelize');

// Option 1: Passing parameters separately
const sequelize = new Sequelize(
    config.database,
    config.user,
    config.password, {
        host: config.host,
        dialect: 'mysql'
    }
);

// Sync all models that aren't already in the database
sequelize.sync();

sequelize.authenticate().then(() => {
        console.log('Connection to db has been established.');
    })
    .catch(err => {
        console.error('Unable to connect to the database:', err);
    });

module.exports = sequelize;
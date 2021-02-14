const { Sequelize } = require('sequelize');
const sequelize = require('sequelize');

const dbUser = 'root';
const dbName = 'test';
const dbPass = '';

const db = new Sequelize(dbName, dbUser, dbPass, {
    host : 'localhost',
    dialect: 'mysql',
    port: 3306
})

db.authenticate().then(() => {
    console.log('Run OK!')
}).catch((err) => ('Run with error: ' + err))

module.exports = db;
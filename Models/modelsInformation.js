const sequelize = require('sequelize');
const db = require('../databaseConnect/connect');

const tableName = 'information';
const tableColumns = {
    id: {
        type: sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    userCreate: {
        type: sequelize.STRING,
        field: 'user_create',
    },
    name: {
        type: sequelize.STRING
    },
    email: {
        type: sequelize.STRING
    },
    phone: {
        type: sequelize.STRING
    },
    address: {
        type: sequelize.STRING
    },
    timeCreate: {
        type: sequelize.DATE,
        field: 'time_create',
        defaultValue: sequelize.NOW
    }
}

const data = db.define(tableName, tableColumns, {freezeTableName: true, timestamps: false});

module.exports = data;
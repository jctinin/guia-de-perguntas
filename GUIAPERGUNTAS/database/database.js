const Sequelize = require('sequelize');

const connection = new Sequelize('guiaperguntas', 'root', 'mysql', {
    host: 'localhost',
    dialect: 'mysql'
});

module.exports = connection;
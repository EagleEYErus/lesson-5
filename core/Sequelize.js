const Sequelize = require('sequelize');
const config = require('./config');
const sequelize = new Sequelize(`${config.db.name}`, `${config.db.user}`, `${config.db.password}`, {
    dialect: 'mysql',
    host: `${config.db.host}`
});

module.exports = sequelize;

const sequelize = require('./Sequelize');
const type = require('sequelize').DataTypes;
const db = {};

db.tasks = require('../models/tasks')(sequelize, type);

module.exports = db;

const { DataTypes } = require('sequelize'); 
const db = require('../utils/db');



const Todos = db.define('Todos', {
  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  description: {
    type: DataTypes.STRING,
  },
  completed: {
    type: DataTypes.BOOLEAN,
    defaultValue: false,
  },
});

module.exports = Todos;
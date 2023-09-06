const { Sequelize } = require('sequelize');


const sequelize = new Sequelize('wong', 'fl0user', 'd3GHjKhNikn9', {
  host: 'ep-dawn-band-03921833.us-east-2.aws.neon.tech',
  dialect: 'postgres',
  dialectOptions: {
    ssl:{
      required:true, rejectUnauthorized: false
    }
  }
});

module.exports = sequelize;

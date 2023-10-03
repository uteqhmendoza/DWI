const Sequelize = require('sequelize')

const sequelize = new Sequelize('uteq', 'uteq', 'uteq', {
  host: 'localhost',
  dialect: 'mysql',
});

const open = async() => await sequelize.authenticate()
open();

module.exports  = sequelize;

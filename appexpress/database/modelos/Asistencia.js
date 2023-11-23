const sequelize = require('../db')
const { Sequelize, DataTypes } = require('sequelize');

const Asistencia = sequelize.define('Asistencia', {
  asistencia_id: {
    type: DataTypes.STRING
  },
  
  alumno_id: {
    type: DataTypes.STRING
  
  },

  grupo: {
    type: DataTypes.STRING
  
  },

  materia: {
    type: DataTypes.STRING
  
  },

  fecha: {
    type: DataTypes.DATE
  
  }
});
Asistencia.sync({force : false})
module.exports = Asistencia;
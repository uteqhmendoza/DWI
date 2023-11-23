const Asistencia = require('./modelos/Asistencia')

function Repository() {
    return {
       create : async (asistencia) => {
         return await Asistencia.create(asistencia);
       },
       getAll : async () => {
        return await Asistencia.findAll();
       }     
    }    
}

module.exports = Repository;
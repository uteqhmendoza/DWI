
function Controller (repository) {
    return {
        obtenerAsistencias : async () => {
            return await repository.getAll();
        },

        agregarAsistencia : async (email, meteria, grupo,fecha) => {
           await repository.create({
                    "asistencia_id" : grupo + materia + new Date().getFullYear(),
                    "alumno_id" : email,
                    "meteria" : meteria,
                    "grupo" : grupo,
                    "fecha" : fecha
                   })
        }
    }
}

module.exports = Controller;
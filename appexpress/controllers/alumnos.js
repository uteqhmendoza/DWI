
function Controller (repository) {
    return {
        obtenerAlumnos : async () => {
            return await repository.getAll();
        },
        obtenerAlumnoPorId : async (id) => {
            return await repository.getById(id);
        },
        agregarAlumno : async (nombre, email) => {
           await repository.create(
                   {
                    "alumno_id" : email,
                    "nombre" : nombre,
                    "email" : email
                   } 
            )
        }
    }
}

module.exports = Controller;
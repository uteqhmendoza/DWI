
function Controller (repository) {
    return {
        obtenerAlumnos : async () => {
            return await repository.getAll();
        },
        obtenerAlumnoPorId : (id) => {
            return repository.getById(id);
        },
        agregarAlumno : (nombre, email) => {
            repository.create(
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
//npm install bcrypt
const bcrypt = require('bcrypt');

function ControladorUsuario (repository) {
    return {
        obtenerUsuario : async () => {
            return await repository.getAll();
        },
        
        obtenerUsuarioPorId : async (id) => {
            return await repository.getById(id);
        },

        validarLoginUsuario : async (username, myPlainPassword) => {
            const user =  await repository.getById(username);
            if (!user)
                return false;   
            const result = await bcrypt.compare(myPlainPassword, user.password);
            return result;
        },

        agregarUsuario : async (email,myPlainPassword) => {
            //TODO
            // * validar que email tenga el formato correcto.
            // * pasar el password de texto plano a password encriptado.
            bcrypt.genSalt(10, function(err, salt) {
                bcrypt.hash(myPlainPassword, salt, function(err, hash) {
                    repository.create(
                        {
                         "user_id" : email,
                         "password" : hash
                        } 
                 )
                });
            });
            
        }
    }
}

module.exports = ControladorUsuario;
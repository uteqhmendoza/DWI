const User = require('./modelos/User')

function Repository() {
    return {
       create : async (usuario) => {
         await User.create(usuario);
       },
       getAll : async () => {
        return await User.findAll();
       } 
       ,
       getById : async (id) => {
        return User.findOne({
            where: {'user_id': id}
          });
       } 
    }    
}

module.exports = Repository;
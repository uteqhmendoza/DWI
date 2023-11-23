const Asistencia = require('../database/modelos/Asistencia')
const RepositorioAsistencia = require('../database/RepositorioAsistencia')

test('insert asistencias por modelo', async () => {
     
     const value =  await Asistencia.create({
        "asistencia_id" : "_test_",
        "alumno_id" : "123445@uteq.edu.mx",
        "meteria" : "DWI",
        "grupo" : "IDGS06",
        "fecha" : new Date()
       });
      // console.log(value)
       expect(value === undefined).toBe(true);
  });

  test('insert asistencias por Repositorio', async () => {
    const repository =  RepositorioAsistencia();
    const value =  await repository.create({
       "asistencia_id" : "_test_2",
       "alumno_id" : "test_1234@uteq.edu.mx",
       "meteria" : "DWI",
       "grupo" : "IDGS06",
       "fecha" : new Date()
      });
      //console.log(value)
      expect(value === undefined).toBe(false);
 });
 
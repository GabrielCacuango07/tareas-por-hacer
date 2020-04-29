// primero importar los yargs 
const descripcion = {
    require: true,
    alias: 'd',
    desc: 'Descripcion de la tarea'
}
const argv = require('yargs')
    .command('crear', 'crea una nueva tarea por hacer', {
        descripcion
    })

.command('actualizar', 'Actualiza el estado completado de una tarea ', {
        descripcion,
        completado: {

            default: true,
            alias: 'c'
        }
    })
    .command('listar', 'Permite listar las tareas por hacer')
    .command('borrar', 'Permite borrar una tarea', {
        descripcion
    })
    .help()
    .argv;

module.exports = {
    argv
}
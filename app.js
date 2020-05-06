const argv = require('./config/yargs').argv;
const color = require('colors')
const porHacer = require('./controlador/tareas-por-hacer');


let comando = argv._[0];

switch (comando) {
    case 'crear':
        console.log('crear una nueva tarea ');
        let tarea = porHacer.crear(argv.descripcion);
        porHacer.guardarDB();
        console.log(`tarea ${argv.descripcion.green} ha sido  creada`);
        break;
    case 'borrar':
        console.log('borrar');
        let borrado = porHacer.borrar(argv.descripcion);

        break;
    case 'listar':
        if (argv.todos == true) {
            console.log('lista pendientes');
            let listaPendiente = porHacer.getListaIncompletos();
            for (let tarea of listaPendiente) {
                console.log(`----------Tarea-----------`.yellow);
                console.log(`Descripcion: ${tarea.descripcion}`);
                console.log(`Completado:  ${tarea.completado} `);
            }
            console.log('=================='.red);


        } else {
            porHacer.getListadoTotal();
        }
        break;

    case 'actualizar':
        console.log('actualiza una tarea por hacer ');
        let actualizado = porHacer.actualizar(argv.descripcion, argv.completado);
        console.log(actualizado);
        break;
    default:
        console.log('no se encontro comando');
}
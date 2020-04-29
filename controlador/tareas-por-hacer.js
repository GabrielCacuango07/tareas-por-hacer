const fs = require('fs');
let listadoHacer = [];

const guardarDB = () => {
    let data = JSON.stringify(listadoHacer);
    fs.writeFile('./DataBase/data.json', data, (err) => {
        if (err) throw new Error('NO SE PUDO GUARDAR EL TAREA');
        console.log('The file has been saved!');
    });

}
const cargadDB = () => {

    try {

        listadoHacer = require('../DataBase/data.json');
    } catch (error) {
        listadoHacer = [];
    }
}

const actualizar = (descripcion, completado = true) => {
    cargadDB();
    let index = listadoHacer.findIndex(tarea => tarea.descripcion === descripcion);
    if (index >= 0) {
        listadoHacer[index].completado = completado;
        guardarDB();
        return true;
    } else {
        return false;
    }
}

const crear = (descripcion) => {
    cargadDB();

    let porHacer = {
        descripcion,
        completado: false
    }
    listadoHacer.push(porHacer);

    return porHacer;
}

const getListado = () => {
    cargadDB();
    return listadoHacer;
}

const borrar = (descripcion) => {
    cargadDB();
    let nuevo = listadoHacer.filter(tarea => {
        return tarea.descripcion !== descripcion
    });
    if (listadoHacer.length === nuevo.length) {
        console.log('La tarea no se borro'.red);
        return false
    } else {
        listadoHacer = nuevo;
        guardarDB();
    }




}


module.exports = {
    crear,
    guardarDB,
    getListado,
    actualizar,
    borrar
}
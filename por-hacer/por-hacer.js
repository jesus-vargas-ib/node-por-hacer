const fs = require('fs');

let listadoPorHacer = [];

const guardarDB = () => {
    let data = JSON.stringify(listadoPorHacer);

    fs.writeFile('db/data.json', data, (err) => {
        if (err) throw new Error(err);
    });
}

const cargarDB = () => {
    try {
        listadoPorHacer = require('../db/data.json');
    } catch (error) {
        listadoPorHacer = []
    }
}

const getListado = () => {
    cargarDB();
    return listadoPorHacer;
}

const actualizar = (descripcion, completado = true) => {
    cargarDB();

    let index = listadoPorHacer.findIndex(tarea => tarea.descripcion === descripcion);

    if (index >= 0) {
        listadoPorHacer[index].completado = completado
        guardarDB();
        return true;
    } else {
        return false;
    }
}

const borrar = (descripcion) => {
    cargarDB();

    let listadoPorHacerNuevo = listadoPorHacer.filter(tarea => tarea.descripcion != descripcion);

    if (listadoPorHacerNuevo.length === listadoPorHacer.length) {
        return false;
    } else {
        listadoPorHacer = listadoPorHacerNuevo;
        guardarDB();
        return true;
    }
}

const crear = (descripcion) => {

    cargarDB();

    let porHacer = {
        descripcion,
        completado: false
    }

    listadoPorHacer.push(porHacer);
    guardarDB();

    return porHacer;
}

module.exports = {
    crear,
    getListado,
    actualizar,
    borrar
}
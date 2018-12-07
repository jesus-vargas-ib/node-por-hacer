const descripcion = {
    demand: true,
    alias: 'd',
    desc: 'Descripción de la tarea por hacer'
}
const completado = {
    alias: 'c',
    default: true,
    desc: 'Status de completitud'
}

const argv = require('yargs')
    .command('crear', 'Crear una tarea por hacer', { descripcion })
    .command('actualizar', 'Actualiza el estado de una tarea', {
        descripcion,
        completado
    })
    .command('borrar', 'Borrar una tarea por hacer', { descripcion })
    .help('h')
    .argv;

module.exports = {
    argv
}
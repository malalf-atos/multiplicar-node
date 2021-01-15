const opts = {
    base: {
        demamd: true,
        alias: 'b'
    },
    limite: {
        alias: 'l',
        default: 10
    }
}

const argv = require('yargs')
    .command('listar', 'Imprime en consola la tabla de multiplicar', opts)
    .command('crear', 'Crear el archivo con la tabla de la base ingresada', opts)
    .help()
    .argv;

module.exports = {
    argv
}
//requires
const argv = require('./config/yargs').argv;
const colors = require('colors');


const { crearArchivo, listarTabla } = require('./multiplicar/multiplicar')

let comando = argv._[0];

switch (comando) {
    case 'listar':
        // console.log('listar');
        listarTabla(argv.base, argv.limite)
            .then(mensaje => {
                console.log('========================'.green);
                console.log(`tabla de ${ argv.base }`.green);
                console.log('========================'.green);
                console.log(mensaje)
            })
            .catch(err => console.log(err));
        break;
    case 'crear':
        crearArchivo(argv.base, argv.limite)
            .then(archivo => console.log('Archivo creado: ', colors.green(archivo)))
            .catch(err => console.log(err));
        break;
    default:
        console.log('Comando no reconocido');
}

// let argv2 = process.argv;

// console.log('Limite: ', argv.limite);
// console.log(argv2);


// let parametro = argv[2];
// let base = parametro.split('=')[1];
const fs = require('fs');

require('colors');

const crearArchivo = async( base = 5, listar = false, hasta = 10) => {

    try {
       
        let salida = '';
        let consola = '';

        consola = '====================='.green + '\n';
        consola += '  Tabla del: '.green + base + '\n';
        consola += '====================='.green + '\n';

        for( let i = 1; i <= hasta; i++){
            salida += `${ base } x ${ i } = ${ base * i }\n`;
            consola += `${ base } ${ 'x'.green } ${ i } ${'='.green } ${ base * i }\n`;
        }

        if ( listar ){
            console.log( consola );
        }

        fs.writeFileSync( `./salida/tabla-${ base }.txt`, salida);

        return `tabla-${ base }.txt`;

    } catch (err) {
        throw err;
    }

}

module.exports = {
    crearArchivo
}
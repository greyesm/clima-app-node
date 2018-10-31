//const axios = require('axios');

const lugar = require('./lugar/lugar');

const clima = require('./clima/clima');

const argv = require('yargs').options({
    direccion: {
        alias: 'd',
        desc: 'Direccion de la ciudad',
        demand: true
    }
}).argv;

console.log(argv.direccion);


let getInfo = async() => {

    try {
        let coord = await lugar.getLugarLatLng(argv.direccion);
        let temp = await clima.getClima(coord.lat, coord.lng);

        return `La temperatura en ${coord.direccion} es ${temp}`;
    } catch {
        return `NO se puedo derterminar el clima en ${argv.direccion}`
    }


}

getInfo()
    .then(mensaje => console.log(mensaje))
    .catch(e => console.log(e));


/* 
lugar.getLugarLatLng(argv.direccion)
    .then(resp => {
        console.log(resp);
    })
    .catch(e => console.log(e)); */
/* 
clima.getClima(9.9280694, -84.0907246)
    .then(temp => console.log(temp))
    .catch(e => console.log(e));
 */
/* let encodeUrl = encodeURI(argv.direccion);
axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${ encodeUrl }&key=AIzaSyDyJPPlnIMOLp20Ef1LlTong8rYdTnaTXM`)
    .then(resp => {


        console.log(JSON.stringify(resp.data, undefined, 2));
    })
    .catch(e => console.log('ERROR !!!', e)); */
const axios = require('axios');

let getLugarLatLng = async(direccion) => {


    let encodeUrl = encodeURI(direccion);

    let resp = await axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${ encodeUrl }&key=AIzaSyDyJPPlnIMOLp20Ef1LlTong8rYdTnaTXM`)


    if (resp.data.status === 'ZERO_RESULTS') {
        throw new Error(`No existe resutaldo para ${direccion}`);
    }

    let location = resp.data.results[0];
    let coordenada = location.geometry.location;



    return {
        direccion: location.formatted_address,
        lat: coordenada.lat,
        lng: coordenada.lng
    }
}

module.exports = {
    getLugarLatLng
}
const axios = require('axios');

const getClima = async(lat, lng) => {

    console.log(`la latitud=${lat}`);
    console.log(`la longitud=${lng}`);

    let resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&units=metric&appid=b8928c95692ad22ecc32f87da001eee2`)

    //da error si tiene espacios, pueded ser ?lat=35 &lon=139 -->debe ser ?lat=35&lon=139&units
    /* let resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=35 &lon=139 &units=metric&appid=b8928c95692ad22ecc32f87da001eee2`)
     */


    return resp.data.main.temp;
}

module.exports = {
    getClima
}
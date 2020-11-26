const request = require('../node_modules/postman-request');
const reverseGeocode = (coordenada, callback) => {
  let urlLatLon = `https://us1.locationiq.com/v1/reverse.php?key=01790deabd2257cd4418950a529cd702&lat=${coordenada.lat}&lon=${coordenada.lon}&format=json`;
  request(urlLatLon, (error, response, body) => {
    if (error) {
      callback('Ocurrio un error', undefined);
    } else {
      let data = JSON.parse(body);
      callback(undefined, {
        road: data.address.road,
        neibourhood: data.address.niebourhood,
        state: data.address.state
      })
    }
  })
}
module.exports = reverseGeocode;

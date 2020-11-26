const request = require('postman-request');
const statusClima = (city, callback) => {
  let urlLatLon = `http://api.weatherstack.com/current?access_key=58d8ee14a86caccd4c92aac56001584d&query=${city}&format=json`;
  request(urlLatLon, (error, response, body) => {
    if (error) {
      callback("Ocurrio algun error con la busqueda", undefined);
    } else {
      let data = JSON.parse(body);
      callback(undefined, {
        temperature: data.current.temperature
      });
    }
  });
}
module.exports = statusClima;

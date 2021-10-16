let express = require('express');
let ruta = express.Router();

ruta.route('/hola').get((req, res) => {
    res.send('Envio de datos satisfechos');
});

module.exports = ruta;
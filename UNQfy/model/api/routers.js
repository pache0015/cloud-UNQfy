const express = require('express');        
const artists = express.Router();
const albums = express.Router();
const prueba = express.Router();
//const {getUNQfy,
//       saveUNQfy} = require('../../main.js'); // para poder cargar/guarfar a UNQfy
//
//ENDPOINT /artists/<artistID>
prueba.route('/prueba')
.get((req, res) => {
    res.status(200);
    res.json("Hola");
    });

module.exports = {
  //  artists,
  //  albums,
  prueba
};
const express = require('express');        
const artists = express.Router();
const albums = express.Router();
const router = express.Router();
//const {getUNQfy,
//       saveUNQfy} = require('../../main.js'); // para poder cargar/guarfar a UNQfy
//
//ENDPOINT /artists/<artistID>
router.route('/prueba')
.get((req, res) => {
    res.status(200);
    res.json("Hola");
    });
module.exports = {
  //  artists,
  //  albums,
  router: router
};

express.get('/', function (req,res) {
    res.send('Bienvenido a UNQfy');
})
//ENDPOINT PLAYLISTS
express.get('/playlists', function (req, res) {
    res.json("una playlists");
})
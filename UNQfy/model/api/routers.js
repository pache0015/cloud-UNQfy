const express = require('express');        
const prueba = express.Router();
prueba.route('/prueba')
.get((req, res) => {
    res.status(200);
    res.json("Hola");
    });

module.exports = prueba;

//express.get('/', function (req,res) {
//    res.send('Bienvenido a UNQfy');
//})
////ENDPOINT PLAYLISTS
//express.get('/playlists', function (req, res) {
//    res.json("una playlists");
//})
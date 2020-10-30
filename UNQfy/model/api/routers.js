const express = require('express');        
const prueba = express.Router();
prueba.route('/prueba')
.get((req, res) => {
    res.status(200);
    res.json("Hola");
    });

<<<<<<< HEAD
//express.get('/', function (req,res) {
//    res.send('Bienvenido a UNQfy');
//})
=======
module.exports = prueba;

//express.get('/', function (req,res) {
//    res.send('Bienvenido a UNQfy');
//})
////ENDPOINT PLAYLISTS
//express.get('/playlists', function (req, res) {
//    res.json("una playlists");
//})
>>>>>>> 829d6f7ed1cb2c70abc9e4f84246580e2c89b616

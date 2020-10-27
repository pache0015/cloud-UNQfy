const express = require('express');
const track_router = express.Router();
const track = require('../../../model/src/Track.js');
const {getUNQfy, saveUNQfy} = require('../../persistencia/persistenceManager.js');
const {MusixMatchManager} = require('../../../model/api_helper/musixMatchManager');

track_router.route('/tracks/:idTrack/lyrics')
    .get((req, res) =>{
        const unqfy = getUNQfy();
        const idTrack = parseInt(req.params);
        const trackSearched = unqfy.getTrackById(idTrack);

        if(trackSearched === undefined){
            res.status(400);
            res.json({
                    status: 400,
                    errorCode: "BAD_REQUEST"
                }
            )
        } else{
            res.status(200);
            res.string(MusixMatchManager.getLyrics(trackSearched.name));
        }
    })
module.exports = track_router;
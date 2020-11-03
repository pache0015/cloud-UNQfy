const express = require('express');
const track_router = express.Router();
const {getUNQfy, saveUNQfy} = require('../../persistencia/persistenceManager.js');
const MusicMatch = require('../../api_helper/musixMatchManager.js');


track_router.route('/tracks/:idTrack/lyrics')
    .get((req, res) =>{
        const unqfy = getUNQfy();
        const idTrack = parseInt(req.params.idTrack);
        console.log(idTrack);
        const trackSearched = unqfy.getTrackById(idTrack);
        console.log(trackSearched);

        if(trackSearched === undefined){
            res.status(400);
            res.json({
                    status: 400,
                    errorCode: "BAD_REQUEST"
                });
        } else{
            res.status(200);
            res.json({
                name: trackSearched.name,
                lyrics: MusicMatch.getLyrics(trackSearched.name)});
                    //trackSearched.getLyrics()});
            saveUNQfy(unqfy);
        }
    });
module.exports = track_router;
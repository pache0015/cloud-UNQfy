const express = require('express');
const track_router = express.Router();
const {getUNQfy} = require('../../persistencia/persistenceManager.js');


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
            res.string(trackSearched.getLyrics());
        }
    })
module.exports = track_router;
const express = require('express');
const track_router = express.Router();
const {getUNQfy, saveUNQfy} = require('../../persistencia/persistenceManager.js');
const Promise = require('promise');


track_router.route('/tracks/:idTrack/lyrics')
    .get((req, res) =>{
        const unqfy = getUNQfy();
        const idTrack = parseInt(req.params.idTrack);
        const trackSearched = unqfy.getTrackById(idTrack);
        if(trackSearched === undefined){
            res.status(400);
            res.json({
                    status: 400,
                    errorCode: "BAD_REQUEST"
                });
        } 
        else{
            if(trackSearched.getLyrics() instanceof Promise){
                trackSearched.getLyrics().then( lyrics => {
                    res.status(200);
                    res.json({
                        name:   trackSearched.name,
                        lyrics: lyrics
                        });
                    saveUNQfy(unqfy);    
                    });
            }
            else{
                trackSearched.getLyrics().then( lyrics => {
                    res.status(200);
                
                    res.json({
                        name:   trackSearched.name,
                        lyrics: lyrics
                        });
                    });
            }
        } 
    });
module.exports = track_router;
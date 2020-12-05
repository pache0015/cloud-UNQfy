const express = require('express');
const track_router = express.Router();
const {getUNQfy, saveUNQfy} = require('../../persistencia/persistenceManager.js');
const Promise = require('promise');
const error_handler = require('./error_handler.js');
const {BadRequest} = require('../../../model/src/exceptions');
const {Wrapper} = require('../../../wrapper.js');
const myWrapper = new Wrapper();

track_router.route('/tracks/:idTrack/lyrics')
    .get((req, res) =>{
        const unqfy = getUNQfy();
        const idTrack = parseInt(req.params.idTrack);
        const trackSearched = myWrapper.getTrackById(unqfy, idTrack);
        if(trackSearched === undefined){
            error_handler(res, new BadRequest());
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
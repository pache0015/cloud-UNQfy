const express = require('express');    
const artists_router = express.Router();
const {getUNQfy, saveUNQfy} = require('../../persistencia/persistenceManager.js');

artists_router.route('/artists/:artist_id')
.get((req, res) => {
    const unqfy = getUNQfy();
    const artist_ID = parseInt(req.params.artist_id);
    const artist = unqfy.getArtistById(artist_ID);
    if (artist === undefined){
        res.status(405);
        res.json({status: 405, errorCode: "RELATED_RESOURCE_NOT_FOUND"});
    }
    else{
        res.status(200);
        res.json({body: artist.toJSON()});
    }});

module.exports = artists_router;
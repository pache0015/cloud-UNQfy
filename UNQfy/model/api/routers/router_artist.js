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
        }
    });

artists_router.route('/artists')
    .get((req, res) => {
        const unqfy = getUNQfy();
        const artist_name = req.query.artist_name;
        console.log(req.query);
        console.log(artist_name);
        if(artist_name === undefined){
            res.status(400);
            res.json({status: 400, errorCode: "BAD_REQUEST"});
        }
        else{
            const artists = unqfy.searchArtistsWithPartialName(artist_name);
            res.status(200);
            res.json(
                artists.map(artist => artist.toJSON())
            );
        }
    });
        
        


module.exports = artists_router;
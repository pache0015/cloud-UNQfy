const express = require('express');    
const artists_router = express.Router();
const {getUNQfy, saveUNQfy} = require('../../persistencia/persistenceManager.js');
const {BadRequest} = require('../../../model/src/exceptions');
const error_handler = require('./error_handler.js');
const {Wrapper} = require('../../../wrapper.js');
const myWrapper = new Wrapper();

artists_router.route('/artists/:artist_id')
    .get((req, res) => {
        const unqfy = getUNQfy();
        const artist_ID = parseInt(req.params.artist_id);
        const artist = myWrapper.getArtistById(unqfy, artist_ID);
        if (artist === undefined){
            error_handler(res, new TypeError());
        }
        else{
            res.status(200);
            res.json(artist.toJSON());
        }
    })
    .delete((req, res) => {
        const unqfy = getUNQfy();
        const artistId = parseInt(req.params.artist_id);
        try{
            myWrapper.removeArtist(unqfy, artistId);
            saveUNQfy(unqfy);
            res.status(204);
            res.send({ success: true});
        }catch(err){
            error_handler(res, err);
        }
    })
    .put((req, res)=>{
        const unqfy = getUNQfy();
        const artist_ID = parseInt(req.params.artist_id);
        const artist_data = req.body;
        if (artist_data.name === undefined || artist_data.country === undefined){
            error_handler(res, new BadRequest());
        }
        else{
            try{
                const artist = myWrapper.getArtistById(unqfy, artist_ID);
                const updated_artist = artist.update({country: artist_data.country, name: artist_data.name});
                res.status(200);
                res.json(updated_artist.toJSON());
                saveUNQfy(unqfy);
            }
            catch(err){
                error_handler(res, err);
            }
            
        }         
    });

artists_router.route('/artists')
    .get((req, res) => {
        const unqfy = getUNQfy();
        const artist_name = req.query.name;
        const artists = myWrapper.searchArtistsWithPartialName(unqfy, artist_name === undefined ? "" : artist_name);
        res.status(200);
            res.json(artists.map(artist => artist.toJSON()));
    })
    .post((req, res) => {
        const unqfy = getUNQfy();
        const artist_data = req.body;
        if (artist_data.name === undefined || artist_data.country === undefined){
            error_handler(res, new BadRequest());
        }
        try {
            const model_artist = myWrapper.addArtist(unqfy, artist_data);
            saveUNQfy(unqfy);
            res.status(201);
            res.json(model_artist.toJSON());
        }catch(err){
            error_handler(res, err);
        }
    });
        
module.exports = artists_router;
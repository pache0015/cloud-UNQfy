const express = require('express');    
const artists_router = express.Router();
const {getUNQfy, saveUNQfy} = require('../../persistencia/persistenceManager.js');
const {ArtistNameAlreadyInUse, NonExistAtributeInEntity} = require('../../../model/src/exceptions');

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
            res.json({status:200,
                      artist: artist.toJSON()});
        }
    })
    .delete((req, res) => {
        const unqfy = getUNQfy();
        const artistId = parseInt(req.params.artist_id);
        try{
            unqfy.removeArtist(artistId);
            saveUNQfy(unqfy);
            res.status(204);
            res.send({ success: true});
        }catch(err){
            if(err instanceof TypeError){
                res.status(404);
                res.json({ status: 404,
                           errorCode: "RESOURCE_NOT_FOUND"});
            }
            else{
                throw err;
            }
        }
    })
    .patch((req, res)=>{
        const unqfy = getUNQfy();
        const artist_ID = parseInt(req.params.artist_id);
        const artist_data = req.body;
        if (artist_data.name === undefined || artist_data.country === undefined){
            res.status(405);
            res.json({status: 405, errorCode: "RELATED_RESOURCE_NOT_FOUND"});
        }
        else{
            try{
                const artist = unqfy.getArtistById(artist_ID);
                const existName = unqfy.getArtists().some(artist => artist.name === artist_data.name);
                if(existName){
                    throw new Error("Ups");
                }
                const updated_artist = artist.update({name: artist_data.name});
                res.status(200);
                res.json({status:200,
                artist: updated_artist.toJSON()});
                saveUNQfy(unqfy);
            }
            catch(err){
                if(err instanceof TypeError || err instanceof Error){
                    res.status(404);
                    res.json({ status: 404,
                               errorCode: "RESOURCE_NOT_FOUND"});
                               throw err;
                }else{
                    if(err instanceof NonExistAtributeInEntity){
                        res.json(405);
                        res.json({status: 405, errorCode: "RELATED_RESOURCE_NOT_FOUND"});
                        throw err;
                    }
                }
            }
            
        }         
    });

artists_router.route('/artists')
    .get((req, res) => {
        const unqfy = getUNQfy();
        const artist_name = req.query.name;
        if(artist_name === undefined){
            res.status(400);
            res.json({status: 400, errorCode: "BAD_REQUEST"});
        }
        else{
            const artists = unqfy.searchArtistsWithPartialName(artist_name);
            res.status(200);
            res.json(
                {status:200,
                artists: artists.map(artist => artist.toJSON())}
            );
        }
    })
    .post((req, res) => {
        const unqfy = getUNQfy();
        const artist_data = req.body;
        if (artist_data.name === undefined || artist_data.country === undefined){
            res.status(409);
            res.json({status: 409,
              errorCode: "RESOURCE_ALREADY_EXISTS"});
        }
        try {
            const model_artist = unqfy.addArtist(artist_data);
            saveUNQfy(unqfy);
            res.status(201);
            res.json(model_artist.toJSON());
        }catch(err){
            if(err instanceof ArtistNameAlreadyInUse){
                res.status(409);
                res.json({status: 409,
                errorCode: "RESOURCE_ALREADY_EXISTS"});
            }
            else{
                throw err;
            }
        }
    });
        
        


module.exports = artists_router;
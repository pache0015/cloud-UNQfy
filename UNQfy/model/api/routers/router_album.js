const express = require('express');    
const albums_router = express.Router();
const {getUNQfy, saveUNQfy} = require('../../persistencia/persistenceManager.js');
const error_handler = require('./error_handler.js');
const {BadRequest, ArtistNotFound} = require('../../../model/src/exceptions');

albums_router.route('/albums/:album_id')
    .get((req, res) => {
        const unqfy = getUNQfy();
        const album_ID = parseInt(req.params.album_id);
        const album = unqfy.getAlbumById(album_ID);
        if (album === undefined){
            error_handler(res, new TypeError());
            return;
        }
        else{
            res.status(200);
            res.json(album.toJSON());
        }
    })
    .delete((req, res) => {
        const unqfy = getUNQfy();
        const album_ID = parseInt(req.params.album_id);
        try{
            unqfy.removeAlbum(album_ID);
            saveUNQfy(unqfy);
            res.status(204);
            res.send({ success: true});
        }catch(err){
            error_handler(res, err);
        }
    })
    .patch((req, res)=>{
        const unqfy = getUNQfy();
        const album_ID = parseInt(req.params.album_id);
        const album_data = req.body;
        if (album_data.year === undefined){
            error_handler(res, new BadRequest());
            return;
        }
        else{
            try{
                const album = unqfy.getAlbumById(album_ID);
                const updated_album = album.update(album_data);
                res.status(200);
                res.json(updated_album.toJSON());
                saveUNQfy(unqfy);
            }
            catch(err){
                error_handler(res, new BadRequest());
            }
        }         
    });

albums_router.route('/albums')
    .get((req, res) => {
        const unqfy = getUNQfy();
        const album_name = req.query.name;
        const albums = unqfy.searchAlbumsWithPartialName(album_name === undefined ? "" : album_name);
        res.status(200);
        res.json(albums.map(album => album.toJSON()));
    })
    .post((req, res) => {
        const unqfy = getUNQfy();
        const album_data = req.body;
        if (album_data.artistId === undefined || album_data.name === undefined || album_data.year === undefined){
            error_handler(res, new BadRequest());
            return;
        }

        if(unqfy.getArtistById(album_data.artistId)=== undefined){
            error_handler(res, new ArtistNotFound());
            return;
        }
        try {
            const model_album = unqfy.addAlbum(album_data.artistId, album_data);
            saveUNQfy(unqfy);
            res.status(201);
            res.json(model_album.toJSON());
        }catch(err){
            error_handler(res, err);
        }
    });

module.exports = albums_router;

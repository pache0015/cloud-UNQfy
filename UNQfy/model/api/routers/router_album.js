const express = require('express');    
const albums_router = express.Router();
const {getUNQfy, saveUNQfy} = require('../../persistencia/persistenceManager.js');
const {ArtistNameAlreadyInUse, NonExistAtributeInEntity} = require('../../../model/src/exceptions');

albums_router.route('/albums/:album_id')
    .get((req, res) => {
        const unqfy = getUNQfy();
        const album_ID = parseInt(req.params.album_id);
        const album = unqfy.getAlbumById(album_ID);
        if (album === undefined){
            res.status(405);
            res.json({status: 405, errorCode: "RELATED_RESOURCE_NOT_FOUND"});
        }
        else{
            res.status(200);
            res.json({status:200,
                      album: album.toJSON()});
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
        const album_ID = parseInt(req.params.album_id);
        console.log(req.body)
        const album_data = req.body;
        if (album_data.year === undefined){
            res.status(405);
            res.json({status: 405, errorCode: "RELATED_RESOURCE_NOT_FOUND"});
        }
        else{
            try{
                const album = unqfy.getAlbumById(album_ID);
                const updated_album = album.update(album_data);
                res.status(200);
                res.json({status:200,
                artist: updated_album.toJSON()});
                saveUNQfy();
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

albums_router.route('/albums')
    .get((req, res) => {
        const unqfy = getUNQfy();
        const album_name = req.query.name;
        if(album_name === undefined){
            res.status(400);
            res.json({status: 400, errorCode: "BAD_REQUEST"});
        }
        else{
            const albums = unqfy.searchAlbumsWithPartialName(album_name);
            res.status(200);
            res.json(
                {status:200,
                albums: albums.map(album => album.toJSON())}
            );
        }
    })
    .post((req, res) => {
        const unqfy = getUNQfy();
        const album_data = req.body;
        const existName = unqfy.getAlbums().some(album => album.name === album_data.name); 
        if (existName || album_data.artistId === undefined || album_data.name === undefined || album_data.name === "" || album_data.year === undefined || album_data.year <= 0){
            res.status(409);
            res.json({status: 409,
              errorCode: "RESOURCE_ALREADY_EXISTS"});
        }
        try {
            const model_album = unqfy.addAlbum(album_data.artistId, album_data);
            saveUNQfy(unqfy);
            res.status(201);
            res.json(model_album.toJSON());
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

module.exports = albums_router;

const express = require('express');
const playList_router = express.Router();
const {getUNQfy, saveUNQfy} = require('../../persistencia/persistenceManager.js');
const {BadRequest, ResourceNotFound} = require('../../../model/src/exceptions');
const error_handler = require('./error_handler.js');
const {Wrapper} = require('../../../wrapper.js');
const myWrapper = new Wrapper();

playList_router.route('/playlists')
    .post((req, res) =>{
        const unqfy = getUNQfy();
        const playlist_data = req.body;
        if (playlist_data.maxDuration === undefined || playlist_data.genres === undefined){
            error_handler(res, new BadRequest());
            return;
        }
        else{
            try{
                const aPlayList = myWrapper.createPlaylist(unqfy, playlist_data.name, playlist_data.genres, playlist_data.maxDuration);
                saveUNQfy(unqfy);
                res.status(201);
                res.json(
                    aPlayList.toJSON()
                );}
            catch (e) {
                error_handler(res, e);
            }
        }
    });
playList_router.route('/playlists/:id_playlist')
    .get((req, res) =>{
        const unqfy = getUNQfy();
        const playlist_id = parseInt(req.params.id_playlist);
        const playlist = myWrapper.getPlaylistById(unqfy, playlist_id);
        if (playlist === undefined){
            error_handler(res, new ResourceNotFound());
            return;
        } else {
            res.status(200);
            res.json(playlist.toJSON());
        }
    })
    .delete((req,res) =>{
        const unqfy = getUNQfy();
        const playlist_id = parseInt(req.params.id_playlist);
        try{
            myWrapper.removePlayList(unqfy, playlist_id);
            saveUNQfy(unqfy);
            res.status(204);
            res.json({ status: 204});
        }catch(e){
            error_handler(res, e);
        }
    });

playList_router.route('/playlists')
    .get((req,res)=>{
        const unqfy = getUNQfy();
        const playlist_data ={ name: req.query.name, durationLT: req.query.durationLT, durationGT: req.query.durationGT};
        if(playlist_data.name === undefined && playlist_data.durationLT === undefined && playlist_data.durationGT === undefined){
            error_handler(res, new BadRequest());
                return;
        }
        const playLists = myWrapper.getPlaylistisByData(unqfy, playlist_data);
        res.status(200);
        res.json(playLists.map(playList => playList.toJSON()));
    });    

module.exports = playList_router;
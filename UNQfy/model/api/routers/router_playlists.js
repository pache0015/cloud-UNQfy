const express = require('express');
const playList_router = express.Router();
const {getUNQfy, saveUNQfy} = require('../../persistencia/persistenceManager.js');


playList_router.route('/playlists')
    .post((req, res) =>{
        const unqfy = getUNQfy();
        const playlist_data = req.body;
        if (playlist_data.maxDuration === undefined || playlist_data.genres === undefined){
            res.status(400);
            res.json({status: 400,
                errorCode: "BAD_REQUEST"});
        }
        else{
            try{
                const aPlayList = unqfy.createPlaylist(playlist_data.name, playlist_data.genres, playlist_data.maxDuration);
                saveUNQfy(unqfy);
                res.status(201);
                res.json(
                    aPlayList.toJSON()
                );}
            catch (e) {
                throw e;
            }
        }
    });
playList_router.route('/playlists/:id_playlist')
    .get((req, res) =>{
        const unqfy = getUNQfy();
        const playlist_id = parseInt(req.params.id_playlist);
        const playlist = unqfy.getPlaylistById(playlist_id);
        if (playlist === undefined){
            res.status(405);
            res.json({status: 404, errorCode: "RELATED_RESOURCE_NOT_FOUND"});
        } else {
            res.status(200);
            res.json({playlist : playlist.toJSON()});
        }
    })
    .delete((req,res) =>{
        const unqfy = getUNQfy();
        const playlist_id = parseInt(req.params.id_playlist);
        try{
            unqfy.removePlayList(playlist_id);
            saveUNQfy(unqfy);
            res.status(204);
            res.json({ status: 204});
        }catch(e){
            if(e instanceof TypeError){
                res.status(404);
                res.json({ status: 404,
                    errorCode: "RESOURCE_NOT_FOUND"});
            }
            else{
                throw e;
            }
        }
    });

playList_router.route('/playlists')
    .get((req,res)=>{
        const unqfy = getUNQfy();
        const playlist_data = req.query;
        if(playlist_data.name === undefined && playlist_data.durationLT === undefined && playlist_data.durationGT === undefined){
            res.status(400);
            res.json({ status: 400,
                errorCode: "BAD_REQUEST"});
                return;
        }
        console.log("aca");
        const name = playlist_data.name !== undefined ? "" : playlist_data.name;
        const playLists = unqfy.searchPlaylistsWithPartialName(name).filter(playList => ! (playList.duration < playlist_data.durationLT || playList.duration > playlist_data.durationGT));
        res.status(200);
        res.json(playLists.map(playList => playList.toJSON()));
    });    

module.exports = playList_router;
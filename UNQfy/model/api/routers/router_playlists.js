const express = require('express');
const playList_router = express.Router();
const playList = require('../../../model/src/PlayList.js');
const {getUNQfy, saveUNQfy} = require('../../persistencia/persistenceManager.js');


playList_router.route('/playlists')
    .post((req, res) =>{
        const unqfy = getUNQfy();
        const playlist_data = req.body;
        if (playlist_data.name === undefined || playlist_data.tracks === undefined){
            res.status(400);
            res.json({status: 400,
                errorCode: "BAD_REQUEST"});
        }
        try{
            if (playlist_data.maxDuration != undefined && playlist_data.genres != undefined) {
                const aList = unqfy.createPlaylist(playlist_data.name, playlist_data.genres, playlist_data.maxDuration);
                saveUNQfy(unqfy);
                res.status(201);
                res.json({
                    "id": aList.id,
                    "name": aList.name,
                    "duration": aList.duration,
                    "tracks": aList.tracks,
                });
            } else{
                const listByTracks = new playList(playlist_data.name, playlist_data.tracks);
                const haveSomeTrack = unqfy.getTracks().some(track => track.name === playlist_data.tracks);
                if(haveSomeTrack){
                    let aList = new PlayList(playlist_data.name, playlist_data.tracks);
                    saveUNQfy(unqfy);
                    res.status(201);
                    res.json({
                        "id": listByTracks.id,
                        "name" : listByTracks.name,
                        "duration": listByTracks.duration,
                        "tracks": listByTracks.tracks,
                    })
                } else {
                    res.status(409);
                    res.json({
                        status: 409,
                        errorCode: "WRONG PARAMETERS"
                    });
                }
            }
        }
        catch (e) {
            throw res.send('Error: ', e);
        }
    })
playList_router.route('/playlists/:idPlaylists')
    .get((req, res) =>{
        const unqfy = getUNQfy();
        const playlist_id = parseInt(req.params.id);
        const playlist = unqfy.getPlaylistById(playlist_id);
        if (playlist === undefined){
            res.status(405);
            res.json({status: 404, errorCode: "RELATED_RESOURCE_NOT_FOUND"});
        } else {
            res.status(200);
            res.json({
                status: 200,
                playlist : playlist.toJSON()
            })
        }
    })
    .delete((req,res) =>{
        const unqfy = getUNQfy();
        const playlist_id = parseInt(req.params.id);
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
    })

playList_router.route('/playlists')
    .get((req,res)=>{
        const unqfy = getUNQfy();
        const playlist_data = req.query;
        let playLists = unqfy.getPlayLists();

        try {
            if (playlist_data.name != undefined) {
                playLists.some(playlist => playlist.name === playlist_data.name);
            }
            if (playlist_data.durationLT != undefined) {
                playLists = playLists.filter(playList => playList.duration < playlist_data.durationLT);
            }
            if (playlist_data.durationGT != undefined) {
                playLists = playLists.filter(playList => playList.duration > playlist_data.durationGT);
            }
            res.status(200);
            res.json(playLists.map(playList => playList.toJSON()));
        }
        catch (e) {
            throw e;
        }
    })

module.exports = playList_router;
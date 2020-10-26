const express = require('express');
const unqfy = getUNQfy();
const playList = require('tps/UNQfy/model/src/PlayList.js');


//ENDPOINT PLAYLISTS
express.post('/playlists', function (req, res) {
    const parametros = req.params;
    try{
        if (parametros.maxDuration != null && parametros.genres != null) {
            const aList = unqfy.createPlaylist(parametros.name, parametros.genres, parametros.maxDuration);
            res.json({
                "id": aList.id,
                "name": aList.name,
                "duration": aList.duration,
                "tracks": aList.tracks,
            });
        } else{
            const listByTracks = new playList(parametros.name, parametros.tracks);
            //unqfy.
            res.json({
                "id": listByTracks.id,
                "name" : listByTracks.name,
                "duration": listByTracks.duration,
                "tracks": listByTracks.tracks,
            })
        }
    }
    catch (e) {
        throw res.send('Error: ', e);
    }
})
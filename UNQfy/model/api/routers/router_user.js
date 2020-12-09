const express = require('express');    
const users_router = express.Router();
const {getUNQfy, saveUNQfy} = require('../../persistencia/persistenceManager.js');
const { BadRequest } = require('../../src/exceptions.js');
const error_handler = require('./error_handler.js');

users_router.route('/users/:userId/listenings')
.get((req, res) => {
    const unqfy = getUNQfy();
    const userId = parseInt(req.params.userId);
    let tmpTracks;
    try {        
        const user = unqfy.getUserById(userId);
        tmpTracks = user.trackPlayed;
    }catch(err){
        error_handler(res, err);
        return;
    }
    res.status(200);
    res.json(
        tmpTracks.map(track => track.toJSON())
    );
})
.post((req, res) => {
    const userId = parseInt(req.params.userId);
    const data = req.body;
    const unqfy = getUNQfy();
    let tmpUser;
    if (data.trackId === undefined){
        error_handler(res, new BadRequest());
    }
    try {
        tmpUser = unqfy.userListenTrack(userId, parseInt(data.trackId));
        saveUNQfy(unqfy);
        
    }catch(err){
        error_handler(res, err);
    }
    res.status(201);
    res.json(
        tmpUser.toJSON()
    );
});

module.exports = users_router;

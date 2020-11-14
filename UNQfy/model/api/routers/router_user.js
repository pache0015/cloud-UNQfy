const express = require('express');    
const users_router = express.Router();
const {getUNQfy, saveUNQfy} = require('../../persistencia/persistenceManager.js');

users_router.route('/users/:userId/listenings')
.get((req, res) => {
    const unqfy = getUNQfy();
    const userId = parseInt(req.params.userId);
    let tmpTracks;
    try {        
        const user = unqfy.getUserById(userId);
        tmpTracks = user.trackPlayed;
    }catch(err){
        if(err instanceof TypeError){
            res.status(404);
            res.json({status: 404, errorCode: "RESOURCE_NOT_FOUND"});
            return;
        }
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
        res.status(400);
        res.json({status: 400,
          errorCode: "BAD_REQUEST"});
    }
    try {
        tmpUser = unqfy.userListenTrack(userId, parseInt(data.trackId));
        saveUNQfy(unqfy);
        
    }catch(err){
        if(err instanceof TypeError){
                res.status(404);
                res.json({status: 404, errorCode: "RESOURCE_NOT_FOUND"});
                return;
            }
    }
    res.status(201);
    res.json(
        tmpUser.toJSON()
    );
});

module.exports = users_router;

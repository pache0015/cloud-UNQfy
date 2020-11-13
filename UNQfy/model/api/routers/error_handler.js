const {AlreadyExist, NonExistAtributeInEntity, BadRequest, ArtistNameAlreadyInUse, ResourceNotFound, ArtistNotFound} = require('../../../model/src/exceptions');

function error_handler(res, error){
    console.log(error);
    switch (true){
        case error instanceof ArtistNotFound:
            res.status(404);
            res.json({status:404, errorCorde: "RELATED_RESOURSE_NOT_FOUND"});
            break;
        case error instanceof TypeError || error instanceof ResourceNotFound || error instanceof NonExistAtributeInEntity:
            res.status(404);
            res.json({status: 404,  errorCode: "RESOURCE_NOT_FOUND"});
            break;
        case error instanceof AlreadyExist ||error instanceof  ArtistNameAlreadyInUse:
            res.status(409);
            res.json({status: 409, errorCode: "RESOURCE_ALREADY_EXISTS"});
            break;
        case error instanceof BadRequest || error instanceof  SyntaxError:
            res.status(400);
            res.json({status: 400, errorCode: "BAD_REQUEST"});
            break;
     }
}

module.exports = error_handler;
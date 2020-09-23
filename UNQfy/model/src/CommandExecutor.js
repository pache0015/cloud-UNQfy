const Printer = require("./Printer.js");
class InvalidCommandException extends Error {
    constructor(aCommandName){
        super(`EL COMANDO ${aCommandName} NO ES UN COMANDO VALIDO. PRUEBE DE NUEVO>> `);
        this.name = "InvalidCommandException";
    }
}

class NotEnoughArguments extends Error {
    constructor(input, need){
        super(`LA CANTIDAD DE ARGUMENTOS INGRESADA NO ES VALIDO, SE REQUIEREN ${need} Y FUERON DADOS ${input} `);
        this.name = "InvalidCommandException";
    }
}

class CommandExecutor {
    constructor(){
        this._handlers = {
            addArtist : function (unquify, args){
                const name = args[0];
                const country = args[1];
                const artistData = {name, country};
                return ["Se creo al artista: ", unquify.addArtist(artistData)];
            },
            addAlbum : function (unquify, args){
                const artistId = args[0];
                const name = args[1];
                const year = eval(args[2]);
                const albumData = {name, year};
                return ["Se creo al album: ", unquify.addAlbum(artistId, albumData)];
            },
            addTrack : function (unquify, args){
                console.log('######## ' + args[0]);
                const albumId = eval(args[0]);
                console.log('######## ' + args[1]);
                const name = args[1];
                console.log('######## ' + args[2]);
                const duration = eval(args[2]);
                console.log('######## ' + args.slice(3));
                const genres = args.slice(3);
                const trackData = {name, duration, genres};
                return ["Se creo el track: ", unquify.addTrack(albumId, trackData)];
            },
            getArtistById : function (unquify, args){
                const id = eval(args[0]);
                return ["El artista solictado es: ", unquify.getArtistById(id)];
            },
            getAlbumById :  function (unquify, args){
                const id = eval(args[0]);
                return ["El album solictado es: ", unquify.getAlbumById(id)];
            },
            getTrackById : function (unquify, args){
                const id = eval(args[0]);
                return ["El track solicitado es: ", unquify.getTrackById(id)];
            },
            getPlaylistById : function (unquify, args){
                const id = eval(args[0]);
                return ["La PlayList solictada es: ", unquify.getPlaylistById(id)];
            },
            addUser: function (unquify, args){
                const name = args[0];
                console.log(args[0]);
                return ["Se ha agregado el usuario: ", unquify.addUser(name)];
            },
            getUserById : function (unquify, args){
                const name = args[0];
                return ["El usuario solicitado fue: ", unquify.getUserById(name)];
            },
            getUsers : function (unquify){
                return ["Los usuarios son: ", unquify.getUsers()];
            },
            getTracksMatchingGenres : function (unquify, args){
                return ["Los tracks de los generos ingresados son: ", unquify.getTracksMatchingGenres(args)];
            },
            getTracksMatchingArtist : function (unquify, args){
                const artistName = args[0];
                return ["Los tracks del artista ingresados son: ", unquify.getTracksMatchingArtist(artistName)];
            },
            getArtists : function (unquify){
                return ["Los artistas son: ",unquify.getArtists()];
            },
            getArtistByName : function (unquify, args){
                const nameArtist = args[0];
                return ["El artista del nombre ingresado son: ", unquify.getArtistByName(nameArtist)];
            },
            getTracks : function (unquify){
                return ["Los tracks son: ", unquify.getTracks()];
            },
            getPlayLists : function (unquify){
                return ["Las playlists son: ", unquify.getPlayLists()];
            },
            getAlbums : function (unquify){
                return ["Los albums son: ", unquify.getAlbums()];
            },
            createPlaylist: function (unquify, args){
                const name = args[0];
                const maxDuration = eval(args[1]);
                const genresToInclude = args.slice(2);

                console.log('###### ' + args[0]);
                console.log('###### ' + eval(args[1]));
                console.log('###### ' + (args.slice(2)));
                console.log(genresToInclude instanceof Array);
                const errorr = unquify.createPlaylist(name, maxDuration, genresToInclude);
                console.log('####### ' + errorr + '######')
                return ["Se ha creado la PayList: ", unquify.createPlaylist(name, maxDuration, genresToInclude)];
            },
            searchTracksWithPartialName : function (unquify, args){
                const name = args[0];
                return ["El resultado de la busqueda fue: ", unquify.searchTracksWithPartialName(name)];
            },
            searchAlbumsWithPartialName : function (unquify, args){
                const name = args[0];
                return ["El resultado de la busqueda fue: ", unquify.searchAlbumsWithPartialName(name)];
            },
            searchArtistsWithPartialName : function (unquify, args){
                const name = args[0];
                return ["El resultado de la busqueda fue: ", unquify.searchArtistsWithPartialName(name)];
            },
            searchPlaylistsWithPartialName : function (unquify, args){
                const name = args[0];
                return ["El resultado de la busqueda fue: ", unquify.searchPlaylistsWithPartialName(name)];
            },
            searchByName : function (unquify, args){
                const name = args[0];
                return ["El resultado de la busqueda fue: ", unquify.searchByName(name)];
            },
            userListenTrack : function (unquify, args){
                const aUserID = eval(args[0]);
                const aTrackID = eval(args[1]);
                return ["El usuario ha escuchado el track", unquify.userListenTrack(aUserID, aTrackID)];
            },
            timesUserListenedTrack : function (unquify, args){
                const aUserID = eval(args[0]);
                const aTrackID = args[1];
                return ["El usuario ha escuchado el tema: ",unquify.timesUserListenedTrack(aUserID, aTrackID)];
            },
            top3TracksFromArtist : function (unquify, args){
                const artistId = eval(args[0]);
                return ["This is: ",unquify.top3TracksFromArtist(artistId)];
            },
            removeArtist : function(unquify, args){
                const id = eval(args[0]);
                return ["Se ha borrado al artista: ", unquify.removeArtist(id)];
            },
            removeTrack : function(unquify, args){
                const id = eval(args[0]);
                return ["Se ha borrado al track: ", unquify.removeTrack(id)];
            },
            removeAlbum : function(unquify, args){
                const id = eval(args[0]);
                return ["Se ha borrado al album: ", unquify.removeAlbum(id)];
            },
        };
        this._printer = new Printer();
    }

    get handlers() { return this._handlers; }
    get printer() { return this._printer; }
    set printer(aNewPrinter) {
        this._printer = aNewPrinter;
    }

    isValidCommand(aCommandName){
        return aCommandName in this._handlers;
    }

    evaluateCommand(aCommandName, args, unquify) {
        if (!this.isValidCommand(aCommandName)) {
            throw new InvalidCommandException(aCommandName);
        }
        const unquifyFunction = eval(`unquify.${aCommandName}`);
        const amountOfNeededArguments = unquifyFunction.length;
        const amountOGivenArguments = args.length;
        if (!amountOGivenArguments >= amountOfNeededArguments) {
            throw new NotEnoughArguments(amountOfNeededArguments);
        }
        let result = null;
        try {
            result = this.handlers[aCommandName](unquify, args);
            const header = result[0];
            const entity = result[1];
            this.printer.printEntity(header, entity);
        }
        catch(e){
            new Printer().printException(e);
        }
    }
}

module.exports = CommandExecutor;
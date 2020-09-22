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
                return unquify.addArtist(artistData);
            },
            addAlbum : function (unquify, args){
                const artistId = args[0];
                const name = args[1];
                const year = eval(args[0]);
                const albumData = {name, year};
                return unquify.addAlbum(artistId, albumData);
            },
            addTrack : function (unquify, args){
                const albumId = eval(args[0]);
                const name = args[1];
                const duration = eval(args[2]);
                const genres = args[3];
                const trackData = {name, duration, genres};
                return unquify.addTrack(albumId, trackData);
            },
            getArtistById : function (unquify, args){
                const id = eval(args[0]);
                return unquify.getArtistById(id);
            },
            getAlbumById :  function (unquify, args){
                const id = eval(args[0]);
                return unquify.getAlbumById(id);
            },
            getTrackById : function (unquify, args){
                const id = eval(args[0]);
                return unquify.getTrackById(id);
            },
            getPlaylistById : function (unquify, args){
                const id = eval(args[0]);
                return unquify.getPlaylistById(id);
            },
            addUser: function (unquify, args){
                const name = args[0];
                return unquify.addUser(name);
            },
            getUserById : function (unquify, args){
                const name = args[0];
                return unquify.getUserById(name);
            },
            getUsers : function (unquify){
                return unquify.getUsers();
            },
            getTracksMatchingGenres : function (unquify, args){
                return unquify.getTracksMatchingGenres(args);
            },
            getTracksMatchingArtist : function (unquify, args){
                const artistName = args[0];
                return unquify.getTracksMatchingArtist(artistName);
            },
            getArtists : function (unquify){
                return unquify.getArtists();
            },
            getArtistByName : function (unquify, args){
                const nameArtist = args[0];
                unquify.getArtistByName(nameArtist);
            },
            getTracks : function (unquify){
                return unquify.getTracks();
            },
            getPlayLists : function (unquify){
                return unquify.getPlayLists();
            },
            getAlbums : function (unquify){
                return unquify.getAlbums();
            },
            createPlaylist: function (unquify, args){
                const name = args[0];
                const maxDuration = eval(args[1]);
                const genresToInclude = args.slice(2);
                return unquify.createPlaylist(name, maxDuration, genresToInclude);
            },
            searchTracksWithPartialName : function (unquify, args){
                const name = args[0];
                return unquify.searchTracksWithPartialName(name);
            },
            searchAlbumsWithPartialName : function (unquify, args){
                const name = args[0];
                return unquify.searchAlbumsWithPartialName(name);
            },
            searchArtistsWithPartialName : function (unquify, args){
                const name = args[0];
                return unquify.searchArtistsWithPartialName(name);
            },
            searchPlaylistsWithPartialName : function (unquify, args){
                const name = args[0];
                return unquify.searchPlaylistsWithPartialName(name);
            },
            searchByName : function (unquify, args){
                const name = args[0];
                return unquify.searchByName(name);
            },
            userListenTrack : function (unquify, args){
                const aUserID = eval(args[0]);
                const aTrackID = eval(args[1]);
                unquify.userListenTrack(aUserID, aTrackID);
                return "Listed";
            },
            timesUserListenedTrack : function (unquify, args){
                const aUserID = eval(args[0]);
                const aTrackID = args[1];
                return unquify.timesUserListenedTrack(aUserID, aTrackID);
            },
            top3TracksFromArtist : function (unquify, args){
                const artistId = eval(args[0]);
                return unquify.top3TracksFromArtist(artistId);
            },
            removeArtist : function(unquify, args){
                const id = eval(args[0]);
                return unquify.removeArtist(id);
            },
            removeTrack : function(unquify, args){
                const id = eval(args[0]);
                return unquify.removeTrack(id);
            },
            removeAlbum : function(unquify, args){
                const id = eval(args[0]);
                return unquify.removeAlbum(id);
            },
            
        };
    }

    get handlers() { return this._handlers; }

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
        this.handlers[aCommandName](unquify, args);
    }
}

module.exports = CommandExecutor;
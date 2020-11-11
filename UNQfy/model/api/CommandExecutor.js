const Printer = require("../src/Printer.js");
const {InvalidCommandException, NotEnoughArguments} = require('../src/exceptions.js');
const SpotifyManager = require('../api_helper/spotifyManager.js');

class CommandExecutor {
    constructor(){
        this._handlers= {
            populate:{
              f:(unquify, args)=> {
                const anArtistName = args[0];
                return ["Estos son los albums mas populares: ", new SpotifyManager().populate(unquify, anArtistName)];
              },
              cantParams: 1
            },
            addArtist:{
                f:(unquify, args) => {
                    const name = args[0];
                    const country = args[1];
                    const artistData = {name, country};
                    return ["Se creo al artista: ", unquify.addArtist(artistData)];
                },
                cantParams: 2,
            },
            addAlbum:{
                f:(unquify, args) => {
                    const artistId = args[0];
                    const name = args[1];
                    const year = parseInt(args[2]);
                    const albumData = {name, year};
                    return ["Se creo al album: ", unquify.addAlbum(artistId, albumData)];
                },
                cantParams: 3,
            },
            addTrack:{
                f:(unquify, args) => {
                    const albumId = parseInt(args[0]);
                    const name = args[1];
                    const duration = parseInt(args[2]);
                    const genres = args.slice(3);
                    const trackData = {name, duration, genres};
                    return ["Se creo el track: ", unquify.addTrack(albumId, trackData)];
                },
                cantParams: 4,
            },
            getArtistById:{
                f:(unquify, args)=> {
                    const id = parseInt(args[0]);
                    return ["El artista solictado es: ", unquify.getArtistById(id)];
                },
                cantParams:1,
            },
            getAlbumById:{
                f:(unquify, args)=>{
                    const id = parseInt(args[0]);
                    return ["El album solictado es: ", unquify.getAlbumById(id)];
                },
                cantParams:1,
            },
            getTrackById:{
                f:(unquify, args)=>{
                    const id = parseInt(args[0]);
                    return ["El track solicitado es: ", unquify.getTrackById(id)];
                },
                cantParams: 1,
            },
            getPlaylistById:{
                f:(unquify, args)=>{
                    const id = parseInt(args[0]);
                    return ["La PlayList solictada es: ", unquify.getPlaylistById(id)];
                },
                cantParams: 1,
            },
            addUser:{
                f:(unquify, args)=>{
                    const name = args[0];
                    return ["Se ha agregado el usuario: ", unquify.addUser(name)];
                },
                cantParams: 1,
            },
            getUserById:{
                f:(unquify, args)=>{
                    const name = args[0];
                    return ["El usuario solicitado fue: ", unquify.getUserById(name)];
                },
                cantParams: 1,
            },
            getUsers:{
                f:(unquify)=>{
                    return ["Los usuarios son: ", unquify.getUsers()];
                },
                cantParams: 0,
            },
            getTracksMatchingGenres:{
                f:(unquify, args)=>{
                    return ["Los tracks de los generos ingresados son: ", unquify.getTracksMatchingGenres(args)];
                },
                cantParams: 0,
            },
            getTracksMatchingArtist:{
                f: (unquify, args)=>{
                    const artistName = args[0];
                    return ["Los tracks del artista ingresados son: ", unquify.getTracksMatchingArtist(artistName)];
                },
                cantParams: 1,
            },
            getArtists : {
                f:(unquify)=>{
                    return ["Los artistas son: ",unquify.getArtists()];
                },
                cantParams: 0,
            },
            getArtistByName:{
                f:(unquify, args)=>{
                    const nameArtist = args[0];
                    return ["El artista del nombre ingresado son: ", unquify.getArtistByName(nameArtist)];
                },
                cantParams: 1,
            },
            getTracks:{
                f:(unquify)=>{
                    return ["Los tracks son: ", unquify.getTracks()];
                },
                cantParams: 0,
            },
            getPlayLists:{
                f:(unquify)=>{
                    return ["Las playlists son: ", unquify.getPlayLists()];
                },
                cantParams: 0,
            },
            getAlbums:{
                f:(unquify)=>{
                    return ["Los albums son: ", unquify.getAlbums()];
                },
                cantParams: 0,
            },
            createPlaylist:{
                f:(unquify, args)=>{
                    const name = args[0];
                    const maxDuration = parseInt(args[1]);
                    const genresToInclude = args.slice(2);
                    return ["Se ha creado la PayList: ", unquify.createPlaylist(name, genresToInclude, maxDuration)];
                },
                cantParams: 3,
            },
            searchTracksWithPartialName:{
                f:(unquify, args)=>{
                    const name = args[0];
                    return ["El resultado de la busqueda fue: ", unquify.searchTracksWithPartialName(name)];
                },
                cantParams: 1,
            },
            searchAlbumsWithPartialName:{
                f:(unquify, args)=>{
                    const name = args[0];
                    return ["El resultado de la busqueda fue: ", unquify.searchAlbumsWithPartialName(name)];
                },
                cantParams: 1,
            },
            searchArtistsWithPartialName:{
                f:(unquify, args)=>{
                    const name = args[0];
                    return ["El resultado de la busqueda fue: ", unquify.searchArtistsWithPartialName(name)];
                },
                cantParams: 1,
            },
            searchPlaylistsWithPartialName:{ 
                f:(unquify, args)=>{
                    const name = args[0];
                    return ["El resultado de la busqueda fue: ", unquify.searchPlaylistsWithPartialName(name)];
                },
                cantParams: 1,
            },
            searchByName:{
                f:(unquify, args)=>{
                    const name = args[0];
                    return ["El resultado de la busqueda fue: ", unquify.searchByName(name)];
                },
                cantParams: 1,
            },
            userListenTrack:{
                f:(unquify, args)=>{
                    const aUserID = parseInt(args[0]);
                    const aTrackID = parseInt(args[1]);
                    return ["El usuario ha escuchado el track", unquify.userListenTrack(aUserID, aTrackID)];
                },
                cantParams: 2,
            },
            timesUserListenedTrack:{
                f:(unquify, args)=>{
                    const aUserID = parseInt(args[0]);
                    const aTrackID = parseInt(args[1]);
                    return ["El usuario ha escuchado el tema: ",unquify.timesUserListenedTrack(aUserID, aTrackID)];
                },
                cantParams: 2,
            },
            top3TracksFromArtist:{
                f:(unquify, args)=>{
                    const artistId = parseInt(args[0]);
                    return ["This is: ",unquify.top3TracksFromArtist(artistId)];
                },
                cantParams: 1,
            },
            removeArtist : {
                f:(unquify, args)=>{
                    const id = parseInt(args[0]);
                    return ["Se ha borrado al artista: ", unquify.removeArtist(id)];
                },
                cantParams: 1,
            },
            removeTrack : {
                f:(unquify, args)=>{
                    const id = parseInt(args[0]);
                    return ["Se ha borrado al track: ", unquify.removeTrack(id)];
                },
                cantParams:1,
            },
            removeAlbum : {
                f:(unquify, args)=>{
                    const id = parseInt(args[0]);
                    return ["Se ha borrado al album: ", unquify.removeAlbum(id)];
                },
                cantParams: 1,
            }};
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
        const unquifyFunction = this._handlers[aCommandName];
        const amountOfNeededArguments = unquifyFunction.cantParams;
        const amountOGivenArguments = args.length;
        if (amountOGivenArguments < amountOfNeededArguments) {
            throw new NotEnoughArguments(amountOfNeededArguments);
        }
        let result = null;
        try {
            result = unquifyFunction.f(unquify, args);
            const header = result[0];
            const entity = result[1];
            this.printer.printEntity(header, entity, unquify);
        }
        catch(e){
            this.printer.printException(e);
        }
    }
}

module.exports = CommandExecutor;
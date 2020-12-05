const Printer = require("../src/Printer.js");
const {InvalidCommandException, NotEnoughArguments} = require('../src/exceptions.js');
const SpotifyManager = require('../api_helper/spotifyManager.js');
const Wrapper = require('../../wrapper.js');

class CommandExecutor {
    constructor(){
        this._wrapper = new Wrapper();
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
                    return ["Se creo al artista: ", this._wrapper.addArtist(unquify,artistData)];
                },
                cantParams: 2,
            },
            addAlbum:{
                f:(unquify, args) => {
                    const artistId = args[0];
                    const name = args[1];
                    const year = parseInt(args[2]);
                    const albumData = {name, year};
                    return ["Se creo al album: ", this._wrapper.addAlbum(unquify, artistId, albumData)];
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
                    return ["Se creo el track: ", this._wrapper.addTrack(unquify, albumId, trackData)];
                },
                cantParams: 4,
            },
            getArtistById:{
                f:(unquify, args)=> {
                    const id = parseInt(args[0]);
                    return ["El artista solictado es: ", this._wrapper.getArtistById(unquify, id)];
                },
                cantParams:1,
            },
            getAlbumById:{
                f:(unquify, args)=>{
                    const id = parseInt(args[0]);
                    return ["El album solictado es: ", this._wrapper.getAlbumById(unquify, id)];
                },
                cantParams:1,
            },
            getTrackById:{
                f:(unquify, args)=>{
                    const id = parseInt(args[0]);
                    return ["El track solicitado es: ", this._wrapper.getTrackById(unquify,id)];
                },
                cantParams: 1,
            },
            getPlaylistById:{
                f:(unquify, args)=>{
                    const id = parseInt(args[0]);
                    return ["La PlayList solictada es: ", this._wrapper.getPlaylistById(unquify,id)];
                },
                cantParams: 1,
            },
            addUser:{
                f:(unquify, args)=>{
                    const name = args[0];
                    return ["Se ha agregado el usuario: ", this._wrapper.addUser(unquify, name)];
                },
                cantParams: 1,
            },
            getUserById:{
                f:(unquify, args)=>{
                    const name = args[0];
                    return ["El usuario solicitado fue: ", this._wrapper.getUserById(unquify, name)];
                },
                cantParams: 1,
            },
            getUsers:{
                f:(unquify)=>{
                    return ["Los usuarios son: ", this._wrapper.getUsers(unquify)];
                },
                cantParams: 0,
            },
            getTracksMatchingGenres:{
                f:(unquify, args)=>{
                    return ["Los tracks de los generos ingresados son: ", this._wrapper.getTracksMatchingGenres(unquify, args)];
                },
                cantParams: 0,
            },
            getTracksMatchingArtist:{
                f: (unquify, args)=>{
                    const artistName = args[0];
                    return ["Los tracks del artista ingresados son: ", this._wrapper.getTracksMatchingArtist(unquify, artistName)];
                },
                cantParams: 1,
            },
            getArtists : {
                f:(unquify)=>{
                    return ["Los artistas son: ", this._wrapper.getArtists(unquify)];
                },
                cantParams: 0,
            },
            getArtistByName:{
                f:(unquify, args)=>{
                    const nameArtist = args[0];
                    return ["El artista del nombre ingresado son: ", this._wrapper.getArtistByName(unquify, nameArtist)];
                },
                cantParams: 1,
            },
            getTracks:{
                f:(unquify)=>{
                    return ["Los tracks son: ", this._wrapper.getTracks(unquify)];
                },
                cantParams: 0,
            },
            getPlayLists:{
                f:(unquify)=>{
                    return ["Las playlists son: ", this._wrapper.getPlayLists(unquify)];
                },
                cantParams: 0,
            },
            getAlbums:{
                f:(unquify)=>{
                    return ["Los albums son: ", this._wrapper.getAlbums(unquify)];
                },
                cantParams: 0,
            },
            createPlaylist:{
                f:(unquify, args)=>{
                    const name = args[0];
                    const maxDuration = parseInt(args[1]);
                    const genresToInclude = args.slice(2);
                    return ["Se ha creado la PayList: ", this._wrapper.createPlaylist(unquify, name, genresToInclude, maxDuration)];
                },
                cantParams: 3,
            },
            searchTracksWithPartialName:{
                f:(unquify, args)=>{
                    const name = args[0];
                    return ["El resultado de la busqueda fue: ", this._wrapper.searchTracksWithPartialName(unquify, name)];
                },
                cantParams: 1,
            },
            searchAlbumsWithPartialName:{
                f:(unquify, args)=>{
                    const name = args[0];
                    return ["El resultado de la busqueda fue: ", this._wrapper.searchAlbumsWithPartialName(unquify, name)];
                },
                cantParams: 1,
            },
            searchArtistsWithPartialName:{
                f:(unquify, args)=>{
                    const name = args[0];
                    return ["El resultado de la busqueda fue: ", this._wrapper.searchArtistsWithPartialName(unquify, name)];
                },
                cantParams: 1,
            },
            searchPlaylistsWithPartialName:{ 
                f:(unquify, args)=>{
                    const name = args[0];
                    return ["El resultado de la busqueda fue: ", this._wrapper.searchPlaylistsWithPartialName(unquify, name)];
                },
                cantParams: 1,
            },
            searchByName:{
                f:(unquify, args)=>{
                    const name = args[0];
                    return ["El resultado de la busqueda fue: ", this._wrapper.searchByName(unquify, name)];
                },
                cantParams: 1,
            },
            userListenTrack:{
                f:(unquify, args)=>{
                    const aUserID = parseInt(args[0]);
                    const aTrackID = parseInt(args[1]);
                    return ["El usuario ha escuchado el track", this._wrapper.userListenTrack(unquify, aUserID, aTrackID)];
                },
                cantParams: 2,
            },
            timesUserListenedTrack:{
                f:(unquify, args)=>{
                    const aUserID = parseInt(args[0]);
                    const aTrackID = parseInt(args[1]);
                    return ["El usuario ha escuchado el tema: ",this._wrapper.timesUserListenedTrack(unquify, aUserID, aTrackID)];
                },
                cantParams: 2,
            },
            top3TracksFromArtist:{
                f:(unquify, args)=>{
                    const artistId = parseInt(args[0]);
                    return ["This is: ",this._wrapper.top3TracksFromArtist(unquify, artistId)];
                },
                cantParams: 1,
            },
            removeArtist : {
                f:(unquify, args)=>{
                    const id = parseInt(args[0]);
                    return ["Se ha borrado al artista: ", this._wrapper.removeArtist(unquify, id)];
                },
                cantParams: 1,
            },
            removeTrack : {
                f:(unquify, args)=>{
                    const id = parseInt(args[0]);
                    return ["Se ha borrado al track: ", this._wrapper.removeTrack(unquify, id)];
                },
                cantParams:1,
            },
            removeAlbum : {
                f:(unquify, args)=>{
                    const id = parseInt(args[0]);
                    return ["Se ha borrado al album: ", this._wrapper.removeAlbum(unquify, id)];
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
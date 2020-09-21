const picklify = require('picklify'); // para cargar/guarfar unqfy
const fs = require('fs'); // para cargar/guarfar unqfy

const Artist = require('./model/src/Artist.js');
const Album = require('./model/src/Album.js');
const Track = require('./model/src/Track.js');
const User = require('./model/src/User.js');
const PlayList = require('./model/src/PlayList.js');
const {PlayListGenerator} = require('./model/src/PlayListGenerator.js');
const {Adder} = require('./model/src/Adder.js');

const PartialSearcher = require('./model/src/PartialSearcher.js');

const {AlreadyExistIDEntity, ArtistNameAlreadyInUse, ArtistNotFoundException , AlbumNotFoundException, TrackNotFoundException} = require('./model/src/exceptions.js');
const _instance = require('./model/src/IDGenerator.js');


function alreadyExist(aHash, aEntityID){
  return aEntityID in aHash;
}

function getEntity(aHash, aKey){
  return aHash[aKey];
}

function addEntity(obj, id, aHash){
  aHash[id] = obj;
}

function evaluateThrowExceptionOrAdd(aHash, aEntityID, aEntity){
  if(alreadyExist(aHash, aEntityID)){
    throw new AlreadyExistIDEntity(aEntity);
  }
  else{
    addEntity(aEntity, aEntityID, aHash);
  }
}

function allFromHash(aHash){
  return Object.values(aHash);
}

class UNQfy {

  constructor(){
    this._searcher = new PartialSearcher();
    this._playListGenerator = new PlayListGenerator();
    this._artists = {};
    this._playLists = {};
    this._users = {};
  }

  addArtist(artistData) {
    const newArtist = new Artist(artistData.name, artistData.country);
    const existName = this.getArtists().some(artist => artist.name === newArtist.name);
    if(!existName){
      try{
        evaluateThrowExceptionOrAdd(this._artists, newArtist.id, newArtist);
      }
      catch(e){
        throw e;
      } 
    }
    else{
      throw new ArtistNameAlreadyInUse(artistData.name);
    }
    return newArtist;
  }

  addAlbum(artistId, albumData) {
  let artist = null;
    try{
      artist = this.getArtistById(artistId);
    }
    catch(e){
      throw e;
    } 
    const anAlbum = new Album(albumData.name, albumData.year, artist.name);
    artist.addAlbum(anAlbum);
    return anAlbum;
  }

  addTrack(albumId, trackData) {
    let album = null;
    try{
      album = this.getAlbumById(albumId);
    }
    catch(e){
      throw e;
    } 
    const aTrack = new Track(trackData.name, trackData.duration, trackData.genres);
    
    album.addTrack(aTrack);
    return aTrack;
  }

  getArtistById(id) {
    const artist = getEntity(this._artists, id);
    if(artist === undefined){
      throw new ArtistNotFoundException(id);
    }
    return artist;
  }

  getAlbumById(id) {
    const album = this.getAlbums().filter(album => album.id === id);
    if (album === undefined){
      throw new AlbumNotFoundException(id); 
    }
    return album[0];
  }

  getTrackById(id) {
    let track = this.getTracks().filter(track => track.id === id);
    if (track === undefined){
      throw new TrackNotFoundException(id);
    }
    return track[0];
  }

  getPlaylistById(id) {
    return getEntity(this._playList, id);
  }

  // genres: array de generos(strings)
  // retorna: los tracks que contenga alguno de los generos en el parametro genres
  getTracksMatchingGenres(genres) {
    return this.getTracks().filter( track=> genres.some(genre => track.hasGenre(genre)));
  }

  // artistName: nombre de artista(string)
  // retorna: los tracks interpredatos por el artista con nombre artistName
  getTracksMatchingArtist(artistName) {
    let artist = null
    try{
      artist = this.getArtistByName(artistName);
    }
    catch (e) {
      throw e;
    }
    const albums = artist.albums;
    return albums.map(album => album.tracks).flat();
  }

  getArtists(){
    return allFromHash(this._artists);
  }
  getArtistByName(nameArtist){
    const list = this.getArtists().filter(artist => artist.name === nameArtist);
    if(list.length === 0){
      throw new ArtistNotFoundException(nameArtist);
    }
    return list[0];
  }

  getTracks(){
    const albums = this.getAlbums();
    const tracks = albums.map(album => album.tracks);
    return tracks.flat();
  }

  getPlayLists(){
    return allFromHash(this._playLists);
  }

  getUsers(){
    return allFromHash(this._users);
  }

  getAlbums(){
    const albums = this.getArtists().map(artist => artist.albums);
    return albums.flat();
  }
  
  // name: nombre de la playlist
  // genresToInclude: array de generos
  // maxDuration: duración en segundos
  // retorna: la nueva playlist creada
  createPlaylist(name, genresToInclude, maxDuration) {
  /*** Crea una playlist y la agrega a unqfy. ***
    El objeto playlist creado debe soportar (al menos):
      * una propiedad name (string)
      * un metodo duration() que retorne la duración de la playlist.
      * un metodo hasTrack(aTrack) que retorna true si aTrack se encuentra en la playlist.
  */
    let playList = null;
    try{
      const listOfTracks = this.getTracks();
      playList = this._playListGenerator.generatePlayList(listOfTracks, name, maxDuration, genresToInclude);
    }
    catch(e){
      throw e;
    }
    evaluateThrowExceptionOrAdd(this._playLists, playList.id, playList);
    return playList;
  }

  
  //Busqueda:
  changeSearcher(aSearcher){
    this._searcher = aSearcher;
  }

  searchTracksWithPartialName(partialStringToSearch){
    return this._searcher.searchAllWithPartialName(this.getTracks(), partialStringToSearch);
  }

  searchAlbumsWithPartialName(partialStringToSearch){
    return this._searcher.searchAllWithPartialName(this.getAlbums(), partialStringToSearch);
  }

  searchArtistsWithPartialName(partialStringToSearch){
    return this._searcher.searchAllWithPartialName(this.getArtists(), partialStringToSearch);
  }

  searchPlaylistsWithPartialName(partialStringToSearch){
    return this._searcher.searchAllWithPartialName(this.getPlayLists(), partialStringToSearch);
  }

  searchByName(aName){
    return {
      artists: this.searchArtistsWithPartialName(aName),
      albums: this.searchAlbumsWithPartialName(aName),
      tracks: this.searchTracksWithPartialName(aName),
      playlists: this.searchPlaylistsWithPartialName(aName)
    };
  }

  //Persistencia:

  save(filename) {
    const serializedData = picklify.picklify(this);
    fs.writeFileSync(filename, JSON.stringify(serializedData, null, 2));
  }

  static load(filename) {
    const serializedData = fs.readFileSync(filename, {encoding: 'utf-8'});
    //COMPLETAR POR EL ALUMNO: Agregar a la lista todas las clases que necesitan ser instanciadas
    const classes = [UNQfy, Artist, PartialSearcher, PlayListGenerator, Album, Track, User, PlayList.PlayList, _instance];
    return picklify.unpicklify(JSON.parse(serializedData), classes);
  }
}

// COMPLETAR POR EL ALUMNO: exportar todas las clases que necesiten ser utilizadas desde un modulo cliente
module.exports = {
  UNQfy: UNQfy
};


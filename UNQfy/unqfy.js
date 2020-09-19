const picklify = require('picklify'); // para cargar/guarfar unqfy
const fs = require('fs'); // para cargar/guarfar unqfy

const Artist = require('./model/src/Artist.js');
const Album = require('./model/src/Album.js');
const Track = require('./model/src/Track.js');
const User = require('./model/src/User.js');
const PlayList = require('./model/src/PlayList.js');
const {PlayListGenerator} = require('./model/src/PlayListGenerator.js');

const PartialSearcher = require('./model/src/PartialSearcher.js');

const {AlreadyExistIDEntity, ArtistNameAlreadyInUse} = require('./model/src/exceptions.js');
const _instance = require('./model/src/IDGenerator.js');


function flatten(aList){
  return aList.reduce((acc, list) => acc.concat(list), []);
}

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
  Object.values(aHash);
}

class UNQfy {

  constructor(){
    this._searcher = new PartialSearcher();
    this._playListGenerator = new PlayListGenerator();
    this._artists = {};
    this._playLists = {};
    this._users = {};
  }

  // artistData: objeto JS con los datos necesarios para crear un artista
  //   artistData.name (string)
  //   artistData.country (string)
  // retorna: el nuevo artista creado
  addArtist(artistData) {
  /* Crea un artista y lo agrega a unqfy.
  El objeto artista creado debe soportar (al menos):
    - una propiedad name (string)
    - una propiedad country (string)
  */
    const newArtist = new Artist(artistData.name, artistData.country);
    const existName = Object.values(this._artists).some(artist => artist.name === newArtist.name);
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
    return artistData;
  }

  // albumData: objeto JS con los datos necesarios para crear un album
  //   albumData.name (string)
  //   albumData.year (number)
  // retorna: el nuevo album creado
  addAlbum(artistId, albumData) {
  /* Crea un album y lo agrega al artista con id artistId.
    El objeto album creado debe tener (al menos):
     - una propiedad name (string)
     - una propiedad year (number)
  */
  }


  // trackData: objeto JS con los datos necesarios para crear un track
  //   trackData.name (string)
  //   trackData.duration (number)
  //   trackData.genres (lista de strings)
  // retorna: el nuevo track creado
  addTrack(albumId, trackData) {
  /* Crea un track y lo agrega al album con id albumId.
  El objeto track creado debe tener (al menos):
      - una propiedad name (string),
      - una propiedad duration (number),
      - una propiedad genres (lista de strings)
  */
  }

  getArtistById(id) {
    return getEntity(this._artists, id);
  }

  getAlbumById(id) {

  }

  getTrackById(id) {

  }

  getPlaylistById(id) {

  }

  // genres: array de generos(strings)
  // retorna: los tracks que contenga alguno de los generos en el parametro genres
  getTracksMatchingGenres(genres) {

  }

  // artistName: nombre de artista(string)
  // retorna: los tracks interpredatos por el artista con nombre artistName
  getTracksMatchingArtist(artistName) {

  }

  getArtists(){
    return allFromHash(this._artists);
  }

  getTracks(){
    const listOfListOfTracks = this.allArtists().map(artist => this.getTracksMatchingArtist(artist.name));
    const tracks = flatten(listOfListOfTracks);
    return tracks;
  }

  getPlayLists(){
    return allFromHash(this._playLists);
  }

  getUsers(){
    return allFromHash(this._users);
  }

  getAlbums(){
    //FALTA
    return [];
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
      playList = this._playListGenerator.generatePlayList(this.allTracks(), name, maxDuration, genresToInclude);
    }
    catch(e){
      throw e;
    }
    return playList;
  }

  
  //Busqueda:

  changeSearcher(aSearcher){
    this.searcher = aSearcher;
  }

  searchTracksWithPartialName(partialStringToSearch){
    this.searcher.searchAllWithPartialName(this.getTracks(), partialStringToSearch);
  }

  searchAlbumsWithPartialName(partialStringToSearch){
    this.searcher.searchAllWithPartialName(this.getAlbums(), partialStringToSearch);
  }

  searchArtistsWithPartialName(partialStringToSearch){
    this.searcher.searchAllWithPartialName(this.getArtists(), partialStringToSearch);
  }

  searchPlaylistsWithPartialName(partialStringToSearch){
    this.searcher.searchAllWithPartialName(this.getPlayLists(), partialStringToSearch);
  }

  //Persistencia:

  save(filename) {
    const serializedData = picklify.picklify(this);
    fs.writeFileSync(filename, JSON.stringify(serializedData, null, 2));
  }

  static load(filename) {
    const serializedData = fs.readFileSync(filename, {encoding: 'utf-8'});
    //COMPLETAR POR EL ALUMNO: Agregar a la lista todas las clases que necesitan ser instanciadas
    const classes = [UNQfy, Artist, PartialSearcher, PlayListGenerator];//, , Album, Track, User, PlayList, _instance];
    return picklify.unpicklify(JSON.parse(serializedData), classes);
  }
}

// COMPLETAR POR EL ALUMNO: exportar todas las clases que necesiten ser utilizadas desde un modulo cliente
module.exports = {
  UNQfy: UNQfy
};


const picklify = require('picklify'); // para cargar/guarfar unqfy
const fs = require('fs'); // para cargar/guarfar unqfy

const Artist = require('./model/src/Artist.js');
const Album = require('./model/src/Album.js');
const Track = require('./model/src/Track.js');
const User = require('./model/src/User.js');
const PlayList = require('./model/src/PlayList.js');
const PlayListGenerator = require('./model/src/PlayListGenerator.js');

const PartialSearcher = require('./model/src/PartialSearcher.js');

const {AlreadyExistIDEntity, ArtistNameAlreadyInUse, ArtistNotFoundException, UserNameAlreadyInUse, AlbumNotFoundException, TrackNotFoundException} = require('./model/src/exceptions.js');
const _instance = require('./model/src/IDGenerator.js');
const UserManager = require("./model/src/UserManager");

function alreadyExist(aHash, aEntityID){
  return aEntityID in aHash;
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

function getEntity(aHash, aKey){
  return aHash[aKey];
}

function allFromHash(aHash){
  return Object.values(aHash);
}

class UNQfy {

  constructor(){
    this._searcher = new PartialSearcher();
    this._playListGenerator = new PlayListGenerator();
    this._userManager = new UserManager();
    this._artists = {};
    this._playLists = {};
    this._users = {};
  }

  addArtist(artistData) {
    const existName = this.getArtists().some(artist => artist.name === artistData.name);
    if(existName){
      throw new ArtistNameAlreadyInUse(artistData.name);
    }
    const newArtist = new Artist(artistData.name, artistData.country);
    this._artists[newArtist.id] = newArtist;
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
    return getEntity(this._playLists, id);
  }

  addUser(userData){
    const existName = this.getArtists().some(artist => artist.name === userData.name);
    if(existName){
      throw new UserNameAlreadyInUse(userData.name);
    }
    const newUser = new User(userData.name);
    this._users[newUser.id] = newUser;
  }

  getUserById(id){
    return getEntity(this._users, id);
  }

  getUsers(){
    return getEntity(this._users);
  }

  getTracksMatchingGenres(genres) {
    return this.getTracks().filter( track=> genres.some(genre => track.hasGenre(genre)));
  }

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

  getAlbums(){
    const albums = this.getArtists().map(artist => artist.albums);
    return albums.flat();
  }

  createPlaylist(name, genresToInclude, maxDuration) {
    let playList = null;
    const listOfTracks = this.getTracks();
    try{
      playList = this._playListGenerator.generatePlayList(listOfTracks, name, maxDuration, genresToInclude);
    }
    catch(e){
      throw e;
    }
    this._playLists[playList.id] = playList;
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

  //Usuarios:

  userListenTrack(aUserID, aTrackID){
    this._userManager.userListenTrack(this, aUserID, aTrackID);
  }

  timesUserListenedTrack(aUserID, aTrackID){
    this._userManager.userListenTrack(this, aUserID, aTrackID);
  }

  top3TracksFromArtist(artistId){
    //FALTA
  }


  //Persistencia:

  save(filename) {
    const serializedData = picklify.picklify(this);
    fs.writeFileSync(filename, JSON.stringify(serializedData, null, 2));
  }

  static load(filename) {
    const serializedData = fs.readFileSync(filename, {encoding: 'utf-8'});
    const classes = [UNQfy, Artist, PartialSearcher, PlayListGenerator, Album, Track, User,PlayList, _instance, UserManager];
    return picklify.unpicklify(JSON.parse(serializedData), classes);
  }
}

module.exports = {
  UNQfy: UNQfy
};


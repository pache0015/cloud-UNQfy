const picklify = require('picklify'); // para cargar/guarfar unqfy
const fs = require('fs'); // para cargar/guarfar unqfy

const Artist = require('./model/src/Artist.js');
const Album = require('./model/src/Album.js');
const Track = require('./model/src/Track.js');
const User = require('./model/src/User.js');
const PlayList = require('./model/src/PlayList.js');
const PlayListGenerator = require('./model/src/PlayListGenerator.js');

const PartialSearcher = require('./model/src/PartialSearcher.js');

const {ArtistNameAlreadyInUse, UserNameAlreadyInUse} = require('./model/src/exceptions.js');
const _instance = require('./model/src/IDGenerator.js');
const UserManager = require("./model/src/UserManager");

const axios = require('axios');


function alreadyExist(aHash, aEntityID){
  return aEntityID in aHash;
}

function addEntity(obj, id, aHash){
  aHash[id] = obj;
}

function evaluateThrowExceptionOrAdd(aHash, aEntityID, aEntity){
  addEntity(aEntity, aEntityID, aHash);
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
    const artist = this.getArtistById(artistId);
    const anAlbum = new Album(albumData.name, albumData.year);
    artist.addAlbum(anAlbum);
    return anAlbum;
  }

  addTrack(albumId, trackData) {
    const album = this.getAlbumById(albumId);
    const aTrack = new Track(trackData.name, trackData.duration, trackData.genres);
    album.addTrack(aTrack);
    return aTrack;
  }

  getArtistById(id) {
    return getEntity(this._artists, id);
  }

  getAlbumById(id) {
    const album = this.getAlbums().filter(album => album.id === id);
    return album[0];
  }

  getTrackById(id) {
    let track = this.getTracks().filter(track => track.id === id);
    return track[0];
  }

  getPlaylistById(id) {
    return getEntity(this._playLists, id);
  }

  addUser(userName){
    const users = this.getUsers();
    const existName = users.some(user => user.name === userName);
    if(existName){
      throw new UserNameAlreadyInUse(userName);
    }
    const newUser = new User(userName);
    this._users[newUser.id] = newUser;
    return newUser;
  }

  getUserById(id){
    return getEntity(this._users, id);
  }

  getUsers(){
    return allFromHash(this._users);
  }

  getTracksMatchingGenres(genres) {
    return this.getTracks().filter( track=> genres.some(genre => track.hasGenre(genre)));
  }

  getTracksMatchingArtist(artistName) {
    const artist = this.getArtistByName(artistName);
    const albums = artist.albums;
    return albums.map(album => album.tracks).flat();
  }

  getArtists(){
    return allFromHash(this._artists);
  }

  getArtistByName(nameArtist){
    const list = this.getArtists().filter(artist => artist.name === nameArtist);
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
  getAlbumsForArtist(aName){
    const anArtist = this.getArtistByName(aName);
    return anArtist.albums.map(album => album.name);
  }

  getPlayedTracks(){
    const played = this.getUsers().map(user => user.trackPlayed).flat();
    return played;
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
    return this._userManager.userListenTrack(this, aUserID, aTrackID);
  }

  timesUserListenedTrack(aUserID, aTrackID){
    return this._userManager.timesUserListenedTrack(this, aUserID, aTrackID);
  }

  top3TracksFromArtist(artistId){
    const topThree = this._userManager.top3TracksFromArtist(this, artistId);
    const thisIs = new PlayList("This is...", topThree);
    return thisIs;

  }

  removeArtist(id){
    const artist = this.getAlbumById(id);
    const albums = artist.albums;
    albums.forEach(album => this.removeAlbum(album.id));
    delete this._artists[id];
    return artist;
  }

  removeAlbum(id){
    const album = this.getAlbumById(id);
    const tracks = album.tracks;
    tracks.forEach(track => this.removeTrack(track.id))
    return album;
  }

  removeTrack(id){
    const track = this.getTrackById(id);
    const conteiners = this.getAlbums().concat(this.getPlayLists()).filter(container => container.hasTrack(track));
    conteiners.forEach(conteiner => conteiner.removeTrack(track))
    return track;
  }
  removePlayList(id){
    delete this._playLists[id];
  }

  // SPOTIFY

  populateAlbums(anArtistName){

  const getAlbums = axios.get('https://api.spotify.com/v1/artists/{id}/albums', {
    params: {
      ID: 12345
    }
  }).then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      })
      .then(function () {
        // always executed
      });
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


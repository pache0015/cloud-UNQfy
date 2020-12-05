class Wrapper{
  
  addArtist(unquify, artistData) {
    //adsasdasd
    return unquify.addArtist(artistData);
  }

  addAlbum(unquify,artistId, albumData) {
    //asdasdasd  
    return unquify.addAlbum(artistId, albumData);
  }

  addTrack(unquify, albumId, trackData) {
    //asdasdasd
    return unquify.addTrack(albumId, trackData);
  }

  getArtistById(unquify, id) {
    return unquify.getArtistById(id);
  }

  getAlbumById(unquify, id) {
    return unquify.getAlbumById(id);
  }

  getTrackById(unquify, id) {
    return unquify.getTrackById(id);
  }

  getPlaylistById(unquify, id) {
    return unquify.getPlaylistById(this._playLists, id);
  }

  addUser(unquify, userName){
    return unquify.addUser(userName);
  }

  getUserById(unquify,id){
    return unquify.getUserById(id);
  }

  getUsers(unquify){
    return unquify.getUsers();
  }

  getTracksMatchingGenres(unquify,genres) {
    return unquify.getTracksMatchingGenres(genres);
  }

  getTracksMatchingArtist(unquify, artistName) {
    const artist = this.getArtistByName(artistName);
    const albums = artist.albums;
    return albums.map(album => album.tracks).flat();
  }

  getArtists(unquify){
    return unquify.getArtists();
  }

  getArtistByName(unquify, nameArtist){
    return unquify.getArtistByName(nameArtist);
  }

  getTracks(unquify){
    return unquify.getTracks();
  }

  getPlayLists(unquify){
    return unquify.getPlayLists();
  }
  
  getPlaylistisByData(unquify,playlist_data){
    return unquify.getPlaylistisByData(playlist_data);
  }

  getAlbums(unquify){
    return unquify.getAlbums();
  }

  getAlbumsForArtist(unquify, aName){
    return unquify.getAlbumsForArtist(aName);
  }

  getPlayedTracks(unquify){
    return unquify.getPlayedTracks();
  }

  createPlaylist(unquify, name, genresToInclude, maxDuration) {
    return unquify.createPlaylist(name, genresToInclude, maxDuration) ;
  }

  
  searchTracksWithPartialName(unquify, partialStringToSearch){
    return unquify.searchTracksWithPartialName(partialStringToSearch);
  }

  searchAlbumsWithPartialName(unquify, partialStringToSearch){
    return unquify.searchAlbumsWithPartialName(partialStringToSearch);
  }

  searchArtistsWithPartialName(unquify, partialStringToSearch){
    return unquify.searchArtistsWithPartialName(partialStringToSearch);
  }

  searchPlaylistsWithPartialName(unquify, partialStringToSearch){
    return unquify.searchPlaylistsWithPartialName(partialStringToSearch);
  }

  searchByName(unquify, aName){
    return unquify.searchByName(aName);
  }

  userListenTrack(unquify, aUserID, aTrackID){
    return unquify.userListenTrack(aUserID, aTrackID);
  }

  timesUserListenedTrack(unquify, aUserID, aTrackID){
    return unquify.timesUserListenedTrack( aUserID, aTrackID);
  }

  top3TracksFromArtist(unquify, artistId){
    return unquify.top3TracksFromArtist(artistId);
  }

  removeArtist(unquify, id){
    return unquify.removeArtist(id);
  }

  removeAlbum(unquify, id){
    return unquify.removeAlbum(id);
  }

  removeTrack(unquify, id){
    return unquify.removeTrack(id);
  }

  removePlayList(unquify, id){
    return unquify.removePlayList(id);
  }
}

module.exports = {
    Wrapper: Wrapper
};


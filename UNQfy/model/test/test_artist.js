/* eslint-env node, mocha */
const assert = require('chai').assert;
const Track = require('../src/Track.js');
const Album = require('../src/Album.js');
const Artist = require('../src/Artist.js')
const {AlbumNotFoundException, AlbumAlreadyExistInPlayList} = require('../src/exceptions.js');


describe('Test about Artist class s behavior' , () => {
    let anArtist = null;
    let aTrack = null;
    let otherTrack = null;
    let anAlbum = null;
    
    beforeEach(() => {
      anArtist = new Artist("anAuthorName", "aCountry");
      aTrack = new Track("aName", 120, ["hip hop"]);
      otherTrack = new Track("otherName", 120, ["rap"]);
      anAlbum = new Album("anAlbumName", 2010);
      anAlbum.addTrack(aTrack);
      anAlbum.addTrack(otherTrack);
    });
  
    it('Add a album to an artist', () => {
      assert.lengthOf(anArtist.albums, 0);
      anArtist.addAlbum(anAlbum);
      assert.lengthOf(anArtist.albums, 1);
    });

    it('Remove an album from an artist', () => {
      anArtist.addAlbum(aTrack);
      anArtist.removeAlbum(aTrack)
      assert.lengthOf(anArtist.albums, 0);
    });

    it('Remove Track throw a TrackNotFoundException', () => {
      const exercise = () => anArtist.removeAlbum(otherTrack)
      assert.throws(exercise, AlbumNotFoundException);
    });

    it('Add Track throw a TrackAlreadyExistInPlayList', () => {
     anArtist.addAlbum(anAlbum);
     const exercise = () => anArtist.addAlbum(anAlbum);
     assert.throws(exercise, AlbumAlreadyExistInPlayList);
    });
});
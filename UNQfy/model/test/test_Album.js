/* eslint-env node, mocha */
const assert = require('chai').assert;
const Track = require('../src/Track.js');
const Album = require('../src/Album.js');
const {AlreadyExist} = require('../src/exceptions.js');


describe('Album', () => {
    let anAlbum = null;
    let aTrack = null;
    let otherTrack = null;
    
    beforeEach(() => {
      anAlbum = new Album("Album", 2010, "Jose");
      aTrack = new Track("unTema", 120, ["Rock"]);
      otherTrack = new Track("unTema", 120, ["Rock"]);
    });
  
    it('Add track to album', () => {
      anAlbum.addTrack(aTrack);
      assert.lengthOf(anAlbum.tracks, 1);
    });

    it('Remove track to album', () => {
      anAlbum.addTrack(aTrack);
      anAlbum.addTrack(otherTrack);
      anAlbum.removeTrack(aTrack);
      assert.lengthOf(anAlbum.tracks, 1);
    });

    it('Add Track throw a TrackAlreadyExistInPlayList', () => {
      anAlbum.addTrack(otherTrack);
      const exercise = () => anAlbum.addTrack(otherTrack);
      assert.throws(exercise, AlreadyExist);
    });
});
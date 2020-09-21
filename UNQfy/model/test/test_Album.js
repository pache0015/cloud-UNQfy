/* eslint-env node, mocha */
const assert = require('chai').assert;
const Track = require('../src/Track.js');
const Album = require('../src/Album.js');
const {TrackNotFoundException, TrackAlreadyExistInPlayList} = require('../src/exceptions.js');

class DummyIdentificable{
  constructor(aName){
    this.name = aName;
  }
}

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
      anAlbum.removeTrack(aTrack)
      assert.lengthOf(anAlbum.tracks, 1);
    });

    it('Remove Track throw a TrackNotFoundException', () => {
      const exercise = () => anAlbum.removeTrack(otherTrack)
      assert.throws(exercise, TrackNotFoundException);
    });
    it('Add Track throw a TrackAlreadyExistInPlayList', () => {
      anAlbum.addTrack(otherTrack);
      const exercise = () => anAlbum.addTrack(otherTrack);
      assert.throws(exercise, TrackAlreadyExistInPlayList);
    });
});
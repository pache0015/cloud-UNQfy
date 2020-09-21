/* eslint-env node, mocha */

const assert = require('chai').assert;
const {PlayList} = require('../src/PlayList.js');
const Track = require('../src/Track.js');
const {TrackNotFoundException, TrackAlreadyExistInPlayList} = require('../src/exceptions.js');


describe('Test about playlist', () => {
    let myPlayList = null;
    beforeEach(() => {
      myPlayList = new PlayList("Una playList", []);
    });

    it('a instance of playlist is consistent', () => {
        assert.equal(myPlayList.name, "Una playList");
        assert.lengthOf(myPlayList.tracks, 0);
        assert.isNotNull(myPlayList.id);
        assert.lengthOf(myPlayList.duration, 0);
    });

    it('the number of tracks increases as tracks are added', () => {
      const track0 = new Track("", 0, []);
      const track1 = new Track("", 0, []); 
      assert.lengthOf(myPlayList.tracks, 0);
      myPlayList.addTrack(track0);
      assert.lengthOf(myPlayList.tracks, 1);
      myPlayList.addTrack(track1);
      assert.lengthOf(myPlayList.tracks, 2);
    });

    it('the duration of a playlist depends on the length of the tracks that compose it', () => {
      const track0 = new Track("", 1, []);
      const track1 = new Track("", 2, []); 
      assert.equal(myPlayList.duration(), 0);
      myPlayList.addTrack(track0);
      assert.equal(myPlayList.duration(), 1);
      myPlayList.addTrack(track1);
      assert.equal(myPlayList.duration(), 3);
    });

    it('a empty playlist hasnot any track', () => {
      const track0 = new Track("", 1, []);
      assert.isFalse(myPlayList.hasTrack(track0));
    });

    it('a playlist with a track hasnot any track when ask for other', () => {
      const track0 = new Track("", 1, []);
      const track1 = new Track("", 1, []);
      myPlayList.addTrack(track0);
      assert.isFalse(myPlayList.hasTrack(track1));
    });

    it('a playlist has a track when add it', () => {
      const track0 = new Track("", 1, []);
      myPlayList.addTrack(track0);
      assert.isTrue(myPlayList.hasTrack(track0));
    });

    it('remove a track from a playlist throw a TrackNotFoundException', () => {
      const track0 = new Track("Asd", 42, ["jazz"]);
      const exercise = () => myPlayList.removeTrack(track0);
      assert.throws(exercise, TrackNotFoundException);
    });

    it('Add Track throw a TrackAlreadyExistInPlayList', () => {
      const track0 = new Track("Asd", 42, ["jazz"]);
      myPlayList.addTrack(track0);
      const exercise = () => myPlayList.addTrack(track0);
      assert.throws(exercise, TrackAlreadyExistInPlayList);
    });

    it('remove a track from a playlist ', () => {
        const track0 = new Track("Asd", 42, ["jazz"]);
        myPlayList.addTrack(track0);
        myPlayList.removeTrack(track0);
        assert.isFalse(myPlayList.hasTrack(track0));
    });
});
  

/* eslint-env node, mocha */

const assert = require('chai').assert;
const {PlayListGenerator, NoGenresMatchException, NoGenresException} = require('../src/PlayListGenerator.js');
const Track = require('../src/Track.js');

describe('Generation of playlists', () => {
  const myPlayListGenerator = new PlayListGenerator();
  const aTrack0 = new Track("", 1, ["jazz"]);
  const aTrack1 = new Track("", 2, ["cumbion"]);
  const aTrack2 = new Track("", 3, ["cumbion"]);
  const list = [aTrack0,aTrack1,aTrack2 ];
    
  it('should throw a NoGenresException  when try to generate a playList with a empty list of genres', () => {
    const exercise = () => myPlayListGenerator.generatePlayList([], "Duh", 42, []);
    assert.throws(exercise, NoGenresException);
  });

  it('should throw a NoGenresMatchException when try to generate a playList with a empty list of genres', () => {
    const exercise = () => myPlayListGenerator.generatePlayList([], "Duh", 42, ["algo"]);
    assert.throws(exercise, NoGenresMatchException);
  });

  it('should return true', () => {
    assert.isTrue(myPlayListGenerator.haveElementInCommon(["jazz", "blues"], aTrack0));
  });

  it('should return true', () => {
    const aTrack = new Track("", 42, ["jazz", "tecno"]);
    assert.isTrue(myPlayListGenerator.haveElementInCommon(["jazz", "blues"], aTrack));
  });

  it('should return false', () => {
    const aTrack = new Track("", 42, ["tango"]);
    assert.isFalse(myPlayListGenerator.haveElementInCommon(["jazz", "blues"], aTrack));
  });

  it('should return false', () => {
    const aTrack = new Track("", 42, ["tango"]);
    assert.isFalse(myPlayListGenerator.haveElementInCommon([], aTrack));
  });

  it('should return a consistent play list', () => {
    const playList = myPlayListGenerator.generatePlayList(list, "CumbionRemix", 3, ["cumbion"]);
    assert.equal(playList.name, "CumbionRemix");
    assert.isTrue(playList.hasTrack(aTrack1));
    assert.isFalse(playList.hasTrack(aTrack0));
    assert.isFalse(playList.hasTrack(aTrack2));
  });

  it('the duration of the generated playList should be < maxDuration', () => {
    const maxDuration = 3;
    const playList = myPlayListGenerator.generatePlayList(list, "CumbionRemix", maxDuration, ["cumbion"]);
    assert.isTrue(playList.hasTrack(aTrack1)<= maxDuration);
  });

  it('should return a consistent play list', () => {
    const track3 = new Track("", 1, ["cumbion"]);
    const track4 = new Track("", 42, ["tango"]);
    const otherTracks = list.concat([track3, track4]);
    const playList = myPlayListGenerator.generatePlayList(list.concat(otherTracks), "CumbionRemix", 3, ["cumbion"]);
    assert.equal(playList.name, "CumbionRemix");
    assert.isTrue(playList.hasTrack(aTrack1));
    assert.isFalse(playList.hasTrack(aTrack0));
    assert.isFalse(playList.hasTrack(aTrack2));
  });



});

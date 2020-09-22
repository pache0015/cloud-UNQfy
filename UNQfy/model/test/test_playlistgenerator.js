/* eslint-env node, mocha */

const assert = require('chai').assert;
const PlayListGenerator = require('../src/PlayListGenerator.js');
const {NoGenresMatchException, NoGenresException} = require('../src/exceptions.js');
const Track = require('../src/Track.js');
const Album = require('../src/Album.js');
const Artist = require('../src/Artist.js');

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
    const playList = myPlayListGenerator.generatePlayList(list, "CumbionRemix", 3, ["cumbion"]);
    assert.isTrue(playList.hasTrack(aTrack1)<= 3);
  });

  it('COMPLETE FLOW should return a consistent play list', () => {
    const aTrack3 = new Track("", 1, ["cumbion"]);
    const aTrack4 = new Track("", 42, ["tango"]);
    const otherTracks = list.concat([aTrack3, aTrack4]);
    const playList = myPlayListGenerator.generatePlayList(otherTracks, "CumbionRemix", 42, ["cumbion"]);
    assert.equal(playList.name, "CumbionRemix");
    assert.isTrue(playList.hasTrack(aTrack1));
    assert.isFalse(playList.hasTrack(aTrack0));
    assert.isTrue(playList.hasTrack(aTrack2));;
    assert.isTrue(playList.hasTrack(aTrack3));
  });

  it(' A should return a consistent play list', () => {
    const t1 = new Track('Welcome to the jungle', 200, ['rock', 'hard rock', 'movie']);
    const t2 = new Track('Thriller', 200, ['pop', 'movie']);
    const t3 = new Track('Another song', 500, ['pop']);
    const t4 = new Track('Another song II', 500, ['pop']);
    const t5 = new Track('Sweet Child o\' Mine', 1500, ['rock', 'hard rock', 'pop', 'movie']);
    const lista = [t1,t2,t3,t4,t5];
    const playlist = myPlayListGenerator.generatePlayList(lista, "Asd", 1400, ['pop', 'rock']);
    assert.equal(playlist.name, 'Asd');
    assert.isAtMost(playlist.duration(), 1400);
    assert.isTrue(playlist.hasTrack(t1));
    assert.isTrue(playlist.hasTrack(t2));
    assert.isTrue(playlist.hasTrack(t3));
    assert.isTrue(playlist.hasTrack(t4));
    assert.lengthOf(playlist.tracks, 4);
  });





});

/* eslint-env node, mocha */

const assert = require('chai').assert;
const User = require('../src/User.js');
const Track = require('../src/Track.js');


class DummyIdentificable{
  constructor(aName){
    this.name = aName;
  }
}

describe('User', () => {
  let aUser = null;
  let aTrack = null;
  let otherTrack = null;
    
  beforeEach(() => {
    aUser = new User("Jose");
    aTrack = new Track("unTema", 120, ["Rock"]);
    otherTrack = new Track("unTema", 120, ["Rock"]);
  });

  it('User listen to track', () => {
    aUser.listen(aTrack);
    assert.lengthOf(aUser.listenedTracks(), 1);
  });
  it('User listen two track', () => {
    aUser.listen(aTrack);
    aUser.listen(otherTrack);
    assert.lengthOf(aUser.listenedTracks(), 2);
  });
  it('Duration of listenedTrack by Track', () => {
    aUser.listen(aTrack);
    aUser.listen(aTrack);
    aUser.listen(otherTrack);
    assert.equal(aUser.timesUserListenedTrack(aTrack), 2);
  });
  it('Track not heard by the user', () => {
    aUser.listen(aTrack);
    assert.equal(aUser.timesUserListenedTrack(otherTrack), 0);
  });
});
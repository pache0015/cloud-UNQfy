/* eslint-env node, mocha */

const assert = require('chai').assert;
const Track = require('../src/Track.js');

describe('Track', () => {
    let aTrack = null;

    beforeEach(() => {
        aTrack = new Track("aName", 42, ["aGenre0", "aGenre1", "aGenre2",]);
    });

    it('a track is consistent', () => {
        assert.equal(aTrack.name, "aName");
        assert.equal(aTrack.duration, 42);
        assert.deepEqual(aTrack.genres, ["aGenre0", "aGenre1", "aGenre2",]);
    });

    it('should return true', () => {
        assert.isTrue(aTrack.hasGenre("aGenre0"));
    });

    it('should return false', () => {
        assert.isFalse(aTrack.hasGenre("aGenre3"));
    });
});
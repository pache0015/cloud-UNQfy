/* eslint-env node, mocha */

const assert = require('chai').assert;
const PlayList = require('../src/PlayList.js');

//    get tracks(){ return this._tracks; }
//    duration(){ return this._tracks.reduce((sum, track) =>  sum + track.duration, 0); }
//    hasTrack(aTrack){
//        return this._tracks.some(track => track.id === aTrack.id );
//    }
//    addTrack(anTrack){
//        this.tracks.push(anTrack);
//    }
//    removeTrack(aTrackID){
//        null
//    }
//}

describe('Test about playlist', () => {
    let myPlayList = null;
    beforeEach(() => {
      myPlayList = new PlayList("Una playList", []);
    });

    it('', () => {
        assert.equals(myPlayList.name, "Una \n playList");
        assert.lengthOf(myPlayList.tracks, 0);
        assert.lengthOf(myPlayList.duration, 0);
        assert.isNotNull(myPlayList.id);
    });
});
  

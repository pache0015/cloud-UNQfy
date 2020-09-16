const Identificable = require('./Identificable.js');

class PlayList extends Identificable{
    constructor(aName, aListOfTracks){
        super(aName);
        this._tracks = aListOfTracks; 
    }
    get tracks(){ return this._tracks; }
    duration(){ return this._tracks.reduce((sum, track) =>  sum + track.duration, 0); }
    hasTrack(aTrack){
        console.log(this._tracks);
        return this._tracks.some(track => track.id === aTrack.id );
    }
    addTrack(anTrack){
        this.tracks.push(anTrack);
    }
    removeTrack(aTrackID){
        null
    }
}
module.exports = PlayList;
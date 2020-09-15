const Identificable = require('./Identificable.js')
class PlayList extends Identificable{
    constructor(anID, aName, aListOfTracks){
        super(anID, aName);
        this._tracks = aListOfTracks; 
    }

    get tracks(){ return this._tracks; }
    duration(){ return this._tracks.reduce((sum, track) =>  sum + track.duration, 0); }

    hasTrack(aTrack){
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
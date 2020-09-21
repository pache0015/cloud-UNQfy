const Adder = require('./Adder.js');
const {TrackNotFoundException, TrackAlreadyExistInPlayList} = require('../src/exceptions.js');

class PlayList extends Adder.Adder{
    constructor(aName, aListOfTracks){
        super(aName, aListOfTracks);
    }

    get tracks(){ return this.myElements; }

    duration(){ return this.tracks.reduce((sum, track) =>  sum + track.duration, 0); }
    
    hasTrack(aTrack){
        return this.tracks.some(track => track.id === aTrack.id );
    }

    addTrack(aTrack){
        this.addElement(aTrack, new  TrackAlreadyExistInPlayList(aTrack));
    }

    removeTrack(aTrack){
        this.removeElement(aTrack, new TrackNotFoundException(aTrack));
    }
}
module.exports = {PlayList};
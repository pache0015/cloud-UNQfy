const Adder = require('./Adder.js');


class TrackNotFoundException extends Error {
    constructor(aTrack){
        super(`No se pudo encontrar el track: ${aTrack}`);
        this.name ="TrackNotFoundException";
    }
}

class TrackAlreadyExistInPlayList extends Error {
    constructor(aTrack){
        super(`El track ya forma parte de la playlist:  ${aTrack}`);
        this.name ="TrackAlreadyExistInPlayList";
    }
}

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
        try{
            super.addElement(aTrack, new  TrackAlreadyExistInPlayList(aTrack));
        }
        catch(e){
            throw e;
        }
    }

    removeTrack(aTrack){
        try{
            super.removeElements(aTrack, new TrackNotFoundException(aTrack));
        }
        catch (e){
            throw e;
        }
    }
}
module.exports = {PlayList, TrackNotFoundException };
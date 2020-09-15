const Identificable = require('./Identificable.js')
class User extends Identificable{
    constructor(anID, aName){
        super(anID, aName);
        this.played = [];
    }

    listen(aTrack){
        this.played.push(aTrack);
    }
    listenedTracks(){
        return this.played;
    }
    timesUserListenedTrack(aTrackID){
        null
    }
}
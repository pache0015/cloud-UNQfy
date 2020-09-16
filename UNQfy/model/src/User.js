const Identificable = require('./Identificable.js')
class User extends Identificable{
    constructor(aName){
        super(aName);
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
module.exports = User;
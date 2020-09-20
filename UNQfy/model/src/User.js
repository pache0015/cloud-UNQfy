const Identificable = require('./Identificable.js')
class User extends Identificable{
    constructor(aName){
        super(aName);
        this.trackPlayed = [];
    }
    listen(aTrack){
        this.trackPlayed.push(aTrack);
    }
    listenedTracks(){ 
        return this.trackPlayed;
    }
    timesUserListenedTrack(aTrack){
        const aTrackPlayed = this.trackPlayed.filter(played => played.id === aTrack.id);
        return aTrackPlayed.length;
    }
}
module.exports = User;
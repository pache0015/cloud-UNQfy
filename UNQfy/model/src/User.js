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
        let tracks = [] 
        this.played.forEach(played => tracks.push(played.track));
        return tracks;
    }
    timesUserListenedTrack(aTrackID){
        let trackPlayed = this.played.filter(played => played.track.id() === aTrackID);
        return trackPlayed.duration * trackPlayed.length();
    }
}
module.exports = User;
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
        let trackPlayed = this.played.filter(played => played.id === aTrackID);
        return trackPlayed.length == 0 ? 0 : trackPlayed.length * trackPlayed[0].duration;
    }
}
module.exports = User;
const Identificable = require('./Identificable.js');
class User extends Identificable{
    constructor(aName){
        super(aName);
        this._trackPlayed = [];
    }

    get trackPlayed(){ return this._trackPlayed; }

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

    toJSON(){
        return {
            id: this.id,
            name: this.name,
            playedTracks: this.trackPlayed
        };
    }
}
module.exports = User;
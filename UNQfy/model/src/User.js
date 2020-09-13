class User extends Identificable{
    constructor(anID, aNickname){
        this.name = aNickname;
        super(anID);
        played = [];
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
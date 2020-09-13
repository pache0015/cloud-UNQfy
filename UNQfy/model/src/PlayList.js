class PlayList extends Identificable{
    constructor(anID, aName, aMaxDuration, aListOfTracks){
        this.name = aName;
        super(anID);
        this.maxDuration = aMaxDuration;
        this.tracks = aListOfTracks;
    }

    addTrack(anTrack){
        this.tracks.push(anTrack);
    }
    removeTrack(aTrackID){
        null
    }
}
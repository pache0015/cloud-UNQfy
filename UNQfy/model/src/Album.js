const Identificable = require('./Identificable.js')

class Album extends Identificable{
    constructor(anID, aName, aYear, anAuthor){
        this.author = anAuthor;
        this.year = aYear;
        super(anID);
        this.name = aName;
        tracks = [];
    }

    addTrack(aTrack){
        this.tracks.push(aTrack);
    }
    removeTrack(aTrackID){
        null
    }
}
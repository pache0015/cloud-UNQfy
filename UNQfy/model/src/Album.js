const Identificable = require('./Identificable.js')
class Album extends Identificable{
    constructor(anID, aName, aYear, anAuthor){
        super(anID, aName);
        this.author = anAuthor;
        this.year = aYear;
        this.tracks = [];
    }

    addTrack(aTrack){
        this.tracks.push(aTrack);
    }
    removeTrack(aTrackID){
        null
    }

}
const Identificable = require('./Identificable.js')
class Album extends Identificable{
    constructor(aName, aYear, anAuthor){
        super(aName);
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
module.exports = Album;
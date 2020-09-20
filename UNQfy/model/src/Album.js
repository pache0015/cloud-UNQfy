const Identificable = require('./Identificable.js');
const {Adder} = require('./Adder.js');
const {TrackNotFoundException, TrackAlreadyExistInPlayList} = require('../src/exceptions.js');

class Album extends Adder{
    constructor(aName, aYear, anAuthor){
        super(aName);
        this.author = anAuthor;
        this.year = aYear;
    }
    get tracks(){ return this.myElements; }

    addTrack(aTrack){
        super.addElement(aTrack, new  TrackAlreadyExistInPlayList(aTrack));
    }
    removeTrack(aTrack){
        super.removeElements(aTrack, new TrackNotFoundException(aTrack));
    }
}
module.exports = Album;
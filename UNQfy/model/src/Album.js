const Identificable = require('./Identificable.js');
const {Adder} = require('./Adder.js');
const {TrackNotFoundException, TrackAlreadyExistInPlayList} = require('../src/exceptions.js');

class Album extends Adder{
    constructor(aName, aYear){
        super(aName);
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
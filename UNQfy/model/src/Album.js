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
        this.addElement(aTrack, new  TrackAlreadyExistInPlayList(aTrack));
    }
    removeTrack(aTrack){
        this.removeElement(aTrack, new TrackNotFoundException(aTrack));
    }

    hasTrack(aTrack){
        this.belongsElement(aTrack);
    }
}
module.exports = Album;
const Adder = require('./EntityManager.js');

class Album extends Adder{
    constructor(aName, aYear){
        super(aName);
        this._year = aYear;
    }

    get year(){ return this._year; }
    set year(aNewYear){
        this._year = aNewYear;
    }

    get tracks(){ return this.myElements; }

    addTrack(aTrack){
        this.addElement(aTrack);
    }
    removeTrack(aTrack){
        this.removeElement(aTrack);
    }

    hasTrack(aTrack){
        return this.belongsElement(aTrack);
    }

    toJSON() {
        return {
          id: this.id,
          name: this.name,
          year: this.year,
          tracks: this.tracks.map(track => track.toJSON())
        };
      }
}
module.exports = Album;
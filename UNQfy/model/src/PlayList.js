const Adder = require('./EntityManager.js');

    class PlayList extends Adder{
    constructor(aName, aListOfTracks){
        super(aName, aListOfTracks);
    }

    get tracks(){ return this.myElements; }

    duration(){ return this.tracks.reduce((sum, track) =>  sum + track.duration, 0); }
    
    hasTrack(aTrack){
        return this.belongsElement(aTrack);
    }

    addTrack(aTrack){
        this.addElement(aTrack);
    }

    removeTrack(aTrack){
        this.removeElement(aTrack);
    }

    toJSON(){
        return {
            id : this.id,
            name : this.name,
            listOfTrack : this.tracks,
            duration : this.duration(),
        }
    }
}
module.exports = PlayList;
const Identificable = require('./Identificable.js')
const Adder = require('./Adder.js');

class Artist extends Adder{
    constructor(aName, aCountry){
        super(aName);
        this.country = aCountry;
        this.albums = [];
    }
    addAlbum(anAlbum){
        super.addElement(aTrack, new  TrackAlreadyExistInPlayList(aTrack));
    }

    removeAlbum(anAlbumID){
        null
    }
}
module.exports = Artist;
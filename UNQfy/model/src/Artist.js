const Identificable = require('./Identificable.js')
const Adder = require('./Adder.js');

class Artist extends Adder{
    constructor(aName, aCountry){
        super(aName);
        this._country = aCountry;
    }

    get country() { return this._country; }
    set country(aCountry) {this.country == aCountry};
    get albums(){ return this.myElements; }

    addAlbum(anAlbum){
        this.addElement(anAlbum);
    }

    removeAlbum(anAlbum){
        this.removeElement(anAlbum);
    }

    hasTrack(aTrack){
        return this.albums.some(album => album.hasTrack(aTrack));
    }
}

module.exports = Artist;
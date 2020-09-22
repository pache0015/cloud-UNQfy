const Identificable = require('./Identificable.js')
const Adder = require('./Adder.js');
const {AlbumNotFoundException, AlbumAlreadyExistInPlayList} = require('../src/exceptions.js');
class Artist extends Adder{
    constructor(aName, aCountry){
        super(aName);
        this._country = aCountry;
    }

    get country() { return this._country; }

    get albums(){ return this.myElements; }

    addAlbum(anAlbum){
        this.addElement(anAlbum, new  AlbumAlreadyExistInPlayList(anAlbum));
    }

    removeAlbum(anAlbum){
        this.removeElement(anAlbum, new AlbumNotFoundException(anAlbum));
    }

    hasTrack(aTrack){
        return this.albums.some(album => album.hasTrack(aTrack));
    }
}

module.exports = Artist;
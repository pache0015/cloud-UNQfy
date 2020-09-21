const Identificable = require('./Identificable.js')
const {Adder} = require('./Adder.js');
const {AlbumNotFoundException, AlbumAlreadyExistInPlayList} = require('../src/exceptions.js');
class Artist extends Adder{
    constructor(aName, aCountry){
        super(aName);
        this.country = aCountry;
    }

    get albums(){ return this.myElements; }

    addAlbum(anAlbum){
        this.addElement(anAlbum, new  AlbumAlreadyExistInPlayList(anAlbum));
    }

    removeAlbum(anAlbum){
        this.removeElement(anAlbum, new AlbumNotFoundException(anAlbum));
    }

    is_author(aTrack){
        this.albums.some(album => album.hasTrack(aTrack));
    }
}

module.exports = Artist;
const Identificable = require('./Identificable.js')

class Artist extends Identificable{
    constructor(anID, aCountry){
        this.country = aCountry;
        albums = [];
        super(anID);
    }
    addAlbum(anAlbum){
        this.albums.push(anAlbum);
    }
    removeAlbum(anAlbumID){
        null
    }
}
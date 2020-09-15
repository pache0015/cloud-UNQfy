const Identificable = require('./Identificable.js')
class Artist extends Identificable{
    constructor(anID,  aName, aCountry){
        super(anID, aName);
        this.country = aCountry;
        this.albums = [];
    }
    addAlbum(anAlbum){
        this.albums.push(anAlbum);
    }
    removeAlbum(anAlbumID){
        null
    }
}
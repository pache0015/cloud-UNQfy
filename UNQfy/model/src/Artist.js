const Identificable = require('./Identificable.js')

class Artist extends Identificable{
    constructor(aName, aCountry){
        super(aName);
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
module.exports = Artist;
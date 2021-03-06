const Adder = require('./EntityManager.js');
const Observer = require('./observer.js');
const observer = new Observer();

class Artist extends Adder{
    constructor(aName, aCountry){
        super(aName);
        this._country = aCountry;
    }

    get country() { return this._country; }
    set country(aCountry) {this.country = aCountry;}
    get albums(){ return this.myElements; }

    addAlbum(anAlbum){
        observer.notifyAll({album:anAlbum.name, artist: this.name, artistId: this.id});   
        this.addElement(anAlbum);
    }

    removeAlbum(anAlbum){
        this.removeElement(anAlbum);
    }

    hasTrack(aTrack){
        return this.albums.some(album => album.hasTrack(aTrack));
    }

    toJSON() {
        return {
          id: this.id,
          name: this.name,
          country: this.country,
          albums: this.albums.map(album => album.toJSON())
        };
    }

    update(aData){
        this._name = aData.name;
        this._country = aData.country;
        return this;
    }
}

module.exports = Artist;
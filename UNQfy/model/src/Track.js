const Identificable = require('./Identificable.js');
const {MusixMatchManager} = require('../api_helper/musixMatchManager');

class Track extends Identificable{
    constructor(aName, aDuration, aListOfGenres){
        super(aName);
        this._duration = aDuration;
        this._genres = aListOfGenres;
        this._lyrics = undefined;
    }
    get duration(){ return this._duration; }
    get genres(){ return this._genres; }
    get lyrics(){ return this._lyrics; }
    set lyrics(aLyrics){ this._lyrics = aLyrics;}
    hasGenre(aGenre){
        const genres = this.genres.map(genre => genre.toLowerCase());
        return genres.includes(aGenre.toLowerCase());
    }

    getLyrics(){
        console.log("ACA");
        if (this._lyrics === undefined){
            new MusixMatchManager().getLyrics(this).then(lyrics => {return lyrics;});
        } 
        return  this._lyrics;
    }

    toJSON() {
        return {
          id: this.id,
          name: this.name,
          genres: this.genres,
          duration: this.duration,
          //lyrics: this.getLyrics()
        };
      }
}

module.exports = Track;
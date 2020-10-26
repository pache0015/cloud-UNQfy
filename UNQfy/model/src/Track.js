const Identificable = require('./Identificable.js');

class Track extends Identificable{
    constructor(aName, aDuration, aListOfGenres){
        super(aName);
        this._duration = aDuration;
        this._genres = aListOfGenres;
    }
    get duration(){ return this._duration; }
    get genres(){ return this._genres; }

    hasGenre(aGenre){
        const genres = this.genres.map(genre => genre.toLowerCase());
        return genres.includes(aGenre.toLowerCase());
    }
    toJSON() {
        return {
          id: this.id,
          name: this.name,
          genres: this.genres,
          duration: this.duration,
          //lyrics: this.lyrics
        };
      }
}

module.exports = Track;
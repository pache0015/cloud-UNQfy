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
        return this._genres.includes(aGenre);
    }
}

module.exports = Track;
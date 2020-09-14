const Identificable = require('./Identificable.js');

class Track extends Identificable{
    constructor(anID, aName, aDuration, aListOfGenres){
        super(anID, aName);
        this._duration = aDuration;
        this._genres = aListOfGenres;
    }

    get duration(){ return this._duration; }
    get genres(){ return this._genres; }
}

module.exports = Track;
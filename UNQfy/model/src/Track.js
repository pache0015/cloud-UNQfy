class Track extends Identificable{
    constructor(anID, aName, aDuration, aListOfGenres){
        this.duration = aDuration;
        this.genres = aListOfGenres;
        super(anID);
        this.name = aName;
    }
}
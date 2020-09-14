class Identificable{
    constructor(anID, aName){
        this._id = anID;
        this._name = aName;
    }

    get id(){ return this._id; }
    get name(){ return this._name; }
}

module.exports = Identificable;
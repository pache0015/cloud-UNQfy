const Singleton = require('../src/IDGenerator.js');
const _instance = require('../src/IDGenerator.js');
class Identificable{
    constructor(aName){
        this._id = _instance.newId();
        this._name = aName;
    }
    get id(){ return this._id; }
    get name(){ return this._name; }
}
module.exports = Identificable;
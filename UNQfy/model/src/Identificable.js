const _instance = require('../src/IDGenerator.js');
const {NonExistAtributeInEntity} = require('./exceptions.js');

class Identificable{
    constructor(aName){
        this._id = _instance.newId();
        this._name = aName;
    }
    get id(){ return this._id; }
    get name(){ return this._name; }
    set name(aNewName){
        this._name = aNewName;
    }

    update(aData){
            Object.keys(aData).forEach(key => {
                if(key in this){
                    this[key] = aData[key];
                }
                else{
                    throw new NonExistAtributeInEntity(key);
                }
            });
            return this;
    }
}
module.exports = Identificable;
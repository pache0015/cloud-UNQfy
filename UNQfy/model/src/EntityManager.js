const Identificable = require('./Identificable.js');
const {AlreadyExist} = require('./exceptions.js');

class EntityManager extends Identificable{
    constructor(aName, aList = []){
        super(aName);
        this._myElements = aList;
    }

    get myElements() { return this._myElements; }

    belongsElement(anIdentificable){
        return this._myElements.some(element => element.id === anIdentificable.id);
    }

    addElement(anIdentificable){
        if (this.belongsElement(anIdentificable)){
            throw new AlreadyExist(anIdentificable);
        }
        this._myElements.push(anIdentificable);
    }

    removeElement(anIdentificable){
        if(this.belongsElement(anIdentificable)){
            this._myElements = this._myElements.filter(identificable => identificable.id !== anIdentificable.id);
        }
    }
}

module.exports = EntityManager;

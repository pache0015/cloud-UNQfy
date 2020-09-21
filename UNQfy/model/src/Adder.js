const Identificable = require('./Identificable.js');
const {AlreadyExist, NotFoundElement} = require('./exceptions.js');

class Adder extends Identificable{
    constructor(aName, aList = []){
        super(aName);
        this._myElements = aList;
    }

    get myElements() { return this._myElements; }

    belongsElement(anIdentificable){
        return this._myElements.some(element => element.id === anIdentificable.id);
    }

    addElement(anIdentificable, anException = new AlreadyExist(anIdentificable)){  
        if (this.belongsElement(anIdentificable)){
            throw anException;
        }
        this._myElements.push(anIdentificable);
    }

    removeElement(anIdentificable, anException = new NotFoundElement(anIdentificable)){
        if(!this.belongsElement(anIdentificable)){
            throw anException;
        }
        this._myElements = this._myElements.filter(identificable => identificable.id !== anIdentificable.id);
    }
}

module.exports = {  Adder , AlreadyExist, NotFoundElement };

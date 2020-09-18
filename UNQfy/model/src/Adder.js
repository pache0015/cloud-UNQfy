const Identificable = require('./Identificable.js');

class NotFoundElement extends Error {
    constructor(anIdentificable){
      super(`El identificador ${anIdentificable.id} ya existe!`);
      this.name = "NotFoundElement";
    }
}

class AlreadyExist extends Error {
    constructor(anIdentificable){
        super(`Ya existe ${anIdentificable}!`);
        this.name ="AlreadyExist";
      }
}


class Adder extends Identificable{
    constructor(aName){
        super(aName);
        this._myElements = [];
    }

    belongsElement(anIdentificable){
        return this._myElements.some(element => element.id === anIdentificable.id);
    }

    addElements(anIdentificable, anException = new AlreadyExist(anIdentificable)){  
        if (this.belongsElement(anIdentificable)){
            throw anException;
        }
        this._myElements.push(anIdentificable);
    }

    removeElements(anIdentificable, anException = new NotFoundElement(anIdentificable)){
        if(!this.belongsElement(anIdentificable)){
            throw anException;
        }
        this._myElements.remove(anIdentificable);    
    }

}

module.exports = Adder;
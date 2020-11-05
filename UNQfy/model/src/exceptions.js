class AlreadyExist extends Error {
    constructor(anIdentificable){
        super(`El identificador ${anIdentificable.id} ya existe!`);
        this.name ="AlreadyExist";
    }
}
class ArtistNameAlreadyInUse extends Error {
    constructor(aName){
        super(`Ya existe unx artista con el nombre ${aName}!`);
        this.name = "ArtistNameAlreadyInUse";
      }
}


class UserNameAlreadyInUse extends Error {
    constructor(aName){
        super(`Ya existe unx user con el nombre ${aName}!`);
        this.name = "UserNameAlreadyInUse";
    }
}

class NoGenresMatchException extends Error {
    constructor(listOfGenres){
        super(`No hay tracks que pertenezcan a estos generos: ${listOfGenres} `);
        this.name = "NoGenresMatchException";
    }
}

class InvalidCommandException extends Error {
    constructor(aCommandName){
        super(`EL COMANDO ${aCommandName} NO ES UN COMANDO VALIDO. PRUEBE DE NUEVO>> `);
        this.name = "InvalidCommandException";
    }
}

class NotEnoughArguments extends Error {
    constructor(input, need){
        super(`LA CANTIDAD DE ARGUMENTOS INGRESADA NO ES VALIDO, SE REQUIEREN ${need} Y FUERON DADOS ${input} `);
        this.name = "InvalidCommandException";
    }
}

class NonExistAtributeInEntity extends Error {
    constructor(anAtribute){
        super(`El objeto no tiene el atributo: ${anAtribute}!`);
        this.name = "NonExistAtributeInEntity";
    }
}

module.exports = {
    InvalidCommandException,
    NotEnoughArguments,
    NoGenresMatchException,
    AlreadyExist,
    ArtistNameAlreadyInUse,
    UserNameAlreadyInUse,
    NonExistAtributeInEntity
  };
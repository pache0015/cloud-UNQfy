class AlreadyExistIDEntity extends Error {
    constructor(anIdentificable){
      super(`El identificador ${anIdentificable.id} ya existe!`);
      this.name = "AlreadyExistIDEntity";
    }
}
class NotFoundElement extends Error {
    constructor(anIdentificable){
        super(`El identificador ${anIdentificable.id} no existe!`);
        this.name = "NotFoundElement";
    }
}

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

class ArtistNotFoundException extends Error {
    constructor(artistThing){
        super(`No se pudo encontrar el artista: ${artistThing}`);
        this.name ="ArtistNotFoundException";
    }
}
class AlbumNotFoundException extends Error {
  constructor(anAlbumID){
      super(`No se pudo encontrar el album: ${anAlbumID}`);
      this.name ="AlbumNotFoundException";
  }
}
class TrackNotFoundException extends Error {
  constructor(aTrack){
      super(`No se pudo encontrar el track: ${aTrack}`);
      this.name ="TrackNotFoundException";
  }
}
class TrackAlreadyExistInPlayList extends Error {
  constructor(aTrack){
      super(`El track ya forma parte de la playlist:  ${aTrack}`);
      this.name ="TrackAlreadyExistInPlayList";
  }
}

class AlbumAlreadyExistInPlayList extends Error {
    constructor(anAlbum){
        super(`El album ya pertenece al artista:  ${anAlbum}`);
        this.name ="AlbumAlreadyExistInPlayList";
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
class NoGenresException extends Error {
    constructor(){
        super(`Al crear una PlayList, la lista de generos no pueden ser vacia`);
        this.name = "NoGenresException";
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
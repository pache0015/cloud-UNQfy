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


module.exports = {
    AlreadyExist,
    NotFoundElement,
    ArtistNotFoundException,
    AlbumNotFoundException,
    AlbumAlreadyExistInPlayList,
    TrackAlreadyExistInPlayList,
    TrackNotFoundException,
    AlreadyExistIDEntity,
    ArtistNameAlreadyInUse,
    UserNameAlreadyInUse
  };
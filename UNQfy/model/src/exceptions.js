class AlreadyExistIDEntity extends Error {
    constructor(anIdentificable){
      super(`El identificador ${anIdentificable.id} ya existe!`);
      this.name = AlreadyExistIDEntity;
    }
}

class ArtistNameAlreadyInUse extends Error {
    constructor(aName){
        super(`Ya existe unx artista con el nombre ${aName}!`);
        this.name = ArtistNameAlreadyInUse;
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


module.exports = {
  TrackAlreadyExistInPlayList : TrackAlreadyExistInPlayList,
    TrackNotFoundException : TrackNotFoundException,
    AlreadyExistIDEntity : AlreadyExistIDEntity,
    ArtistNameAlreadyInUse : ArtistNameAlreadyInUse
  };
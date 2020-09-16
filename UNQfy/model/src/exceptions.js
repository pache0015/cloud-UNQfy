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


module.exports = {
    AlreadyExistIDEntity : AlreadyExistIDEntity,
    ArtistNameAlreadyInUse : ArtistNameAlreadyInUse
  };
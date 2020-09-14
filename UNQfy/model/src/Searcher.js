class Searcher{
    constructor(){}
    searchAllWithPartialName(aListOfIdentificables, aPartialName){
        return aListOfIdentificables.filter( obj => obj.name.toLowerCase().includes(aPartialName.toLowerCase()));
    }
}
module.exports = Searcher;


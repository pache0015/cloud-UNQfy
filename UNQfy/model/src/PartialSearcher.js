class Searcher{
    searchAllWithPartialName(aListOfIdentificables, aStringName){
        throw Error("This should be implemented" + aStringName);
    }
}

class PartialSearcher extends Searcher{
    searchAllWithPartialName(aListOfIdentificables, aPartialName){
        return aListOfIdentificables.filter( obj => obj.name.toLowerCase().includes(aPartialName.toLowerCase()));
    }
}

module.exports = PartialSearcher;


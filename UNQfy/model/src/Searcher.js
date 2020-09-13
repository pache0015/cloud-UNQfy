class Searcher{

    constructor(){
    }

    searchAllWithPartialName(aListOfIdentificables, aPartialName){
        return aListOfIdentificables.filter( identificable => identificable.name.toLowerCase().includes(aPartialName.toLowerCase()));
    }
}

module.exports = Searcher;

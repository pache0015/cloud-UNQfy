const Identificable = require('./PlayList.js')

function haveElementInCommon(aList, otherList){
    return aList.filter(x => otherList.includes(x));
}

function tracksOfGenres(aListOfTracks, aListOfGenres){
    return aListOfTracks.filter( track => haveElementInCommon(track.genres, aListOfGenres));
}


class PlayListGenerator{

    generatePlayList(aListOfTracks, aName, aMaxDuration, aListOfGenres){

    }
    
}
module.exports = PlayListGenerator;
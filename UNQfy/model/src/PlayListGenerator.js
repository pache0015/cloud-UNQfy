const PlayList = require('./PlayList.js');

class PlayListGenerator{

    haveElementInCommon(aListOfTracks, listOfGenres){
        return aListOfTracks.some(track => listOfGenres.includes(track.genr));
    }

    tracksOfGenres(aMaxDuration, aListOfTracks, aListOfGenres){
        return aListOfTracks.reduce((tuple, aTrack) => {
                let acc = tuple[0];
                let duration = tuple[1];
                if(this.haveElementInCommon(aListOfTracks, aTrack.genres)
                && duration < aTrack.duration()){
                    acc.push(aTrack);
                } 
                return [acc, duration+aTrack.duration];}, [[], 0]);
  
    }

    generatePlayList(aListOfTracks, aName, aMaxDuration, aListOfGenres){
        let listsOftracks = null;
        try{
            listsOftracks = this.tracksOfGenres(aMaxDuration,aListOfTracks, aListOfGenres);
        }
        catch (e){
            console.log(e);
        }
        const generatedPlayList = new PlayList(aName, listsOftracks);
        return generatedPlayList;
    }
}
module.exports = PlayListGenerator;
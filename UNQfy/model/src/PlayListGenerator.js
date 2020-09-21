const PlayList = require('./PlayList.js');
const Track = require('./Track.js');
const {NoGenresMatchException, NoGenresException} = require('./exceptions.js');

class PlayListGenerator{

    haveElementInCommon(aListOfGenres, aTrack){
        return aListOfGenres.some(genre => aTrack.hasGenre(genre));
    }

    tracksOfGenres(aMaxDuration, aListOfTracks, aListOfGenres){
        const result =  aListOfTracks.reduce((tuple, aTrack) => {
                const tracks = tuple[0];
                const duration = tuple[1];
                if(this.haveElementInCommon(aListOfGenres, aTrack)
                 && duration < aMaxDuration && aTrack.duration < aMaxDuration){
                    tracks.push(aTrack);
                } 
                return [tracks, duration+aTrack.duration];}, [[], 0]);

        if(result[0].length === 0){
            throw new NoGenresMatchException(aListOfGenres);
        }  
        return result[0];
    }

    generatePlayList(aListOfTracks, aName, aMaxDuration, aListOfGenres){
        if(aListOfGenres.length ===  0){
            throw new NoGenresException();
        }
        let listsOftracks = null;
        try{
            listsOftracks = this.tracksOfGenres(aMaxDuration,aListOfTracks, aListOfGenres);
        }
        catch (e){
            throw e;
        }
        const generatedPlayList = new PlayList(aName, listsOftracks);
        return generatedPlayList;
    }
}
module.exports = PlayListGenerator;
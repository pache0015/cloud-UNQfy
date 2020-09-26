
class UserManager{

    userListenTrack(aUNQfy, aUserID, aTrackID){
        let aUser = null;
        let aTrack = null;
        try{
            aUser = aUNQfy.getUserById(aUserID);
            aTrack = aUNQfy.getTrackById(aTrackID);
        }
        catch(e){
            throw e;
        }
        aUser.listen(aTrack);
        return aUser;
    }

    timesUserListenedTrack(aUNQfy, aUserID, aTrackID){
        let aUser = null;
        let aTrack = null;
        try{
            aUser = aUNQfy.getUserById(aUserID);
            aTrack = aUNQfy.getTrackById(aTrackID);
        }
        catch(e){
            throw e;
        }
        return aUser.timesUserListenedTrack(aTrack);
    }

    top3TracksFromArtist(aUNQfy, artistId){
        try{
            const anArtist = aUNQfy.getArtistById(artistId);


            const tracks = anArtist.albums.map(album => album.tracks).flat();
            const uniqueKeys = {};
            tracks.forEach( track => uniqueKeys[track.id]= undefined);
            const uniqueTracks = Object.keys(uniqueKeys);
            const playedTracks = aUNQfy.getPlayedTracks();
            const counts = uniqueTracks.reduce((obj, aTrackID) => {
                obj[Number(aTrackID)] = playedTracks.filter(playedTrack => playedTrack.id === aTrackID).length
                return obj;}, {});
            const sorted = Object.keys(counts).sort((a,b) => counts[a] > counts[b])
            return sorted.slice(0, 3);
        }
        catch(e){
            throw e;
        }
    }
}

module.exports = UserManager;



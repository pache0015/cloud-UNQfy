
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
        const anArtist = aUNQfy.getArtistById(artistId);
        const tracks = anArtist.albums.map(album => album.tracks).flat();
        const uniqueKeys = {};
        tracks.forEach( track => uniqueKeys[track.id]= undefined);
        const uniqueTracks = Object.keys(uniqueKeys);
        const playedTracks = aUNQfy.getPlayedTracks();
        const counts = uniqueTracks.reduce((obj, aTrackID) => {
            obj[Number(aTrackID)] = playedTracks.filter(playedTrack => playedTrack.id === aTrackID).length;
            return obj;}, {});
        const sorted = Object.keys(counts).sort((a,b) => counts[a] > counts[b]).slice(0, 3);
        const sorted_tracks = sorted.map( key => aUNQfy.getTrackById(Number(key)));
        return sorted_tracks;
    }
}

module.exports = UserManager;



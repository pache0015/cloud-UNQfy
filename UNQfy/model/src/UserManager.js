
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
        //try{
            aUser = aUNQfy.getUserById(aUserID);
            aTrack = aUNQfy.getTrackById(aTrackID);
            console.log('#######');
            console.log(aUser);
            console.log(aTrack);
            console.log('#######');
        //}
        //catch(e){
        //    throw e;
        //}
        return aUser.timesUserListenedTrack(aTrack);
    }
// ####### REVISAR DONDE MOVER ######
    top3TracksFromArtist(aUNQfy, artistId){
        let anArtist = null;
        try{
            anArtist = aUNQfy.getArtistById(artistId);
        }
        catch(e){
            throw e;
        }
        const uniqueTracks = [...new Set(anArtist.tracks)];
        const playedTracks = aUNQfy.getPlayedTracks();
        const counts = uniqueTracks.reduce((obj, aTrack) => {
            obj[aTrack.id] = playedTracks.filter(playedTrack => playedTrack.id === aTrack.id).length
            return obj;}, {});

        const sorted = Object.keys(counts).sort((a,b) => counts[a] > counts[b])
        return sorted.slice(0, 3);
    }
}

module.exports = UserManager;



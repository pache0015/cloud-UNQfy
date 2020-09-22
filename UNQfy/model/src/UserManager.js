
class UserManager{

    userListenTrack(aUNQfy, aUserID, aTrackID){
        let aUser = null;
        let aTrack = null;
        try{
            aUser = aUNQfy.getArtistById(aUserID);
            aTrack = aUNQfy.getTrackById(aTrackID);
        }
        catch(e){
            throw e;
        }
        aUser.listen(aTrack);
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

    //Esto no va aca
    top3TracksFromArtist(aUNQfy, artistId){
        let anArtist = null;
        try{
            anArtist = aUNQfy.getArtistById(artistId);
        }
        catch(e){
            throw e;
        }
        const tracks = anArtist.tracks;
        const playedTracks = aUNQfy.getPlayedTracks();
    }
}

module.exports = UserManager;
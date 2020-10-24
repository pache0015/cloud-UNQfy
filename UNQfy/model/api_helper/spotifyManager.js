const axios = require('axios').default;

const access_token = "BQCH52zyOhRVdB0WRlOcueBf8aLVyLVlHMlNvL09drk2mYtOVrZ9CRKOJdPRKjT3I3IBCjQI_A0EoG2-SoDN8pVCVvbobRS41gz_lRpxaTXHzfkAHrPSETAzSrZAjp5Vz71-EYrm9XFsvO2mxZEFMe4KeONCZfBam4l554KKM8VDCifrZwvLTA";
 
class SpotifyManager{
     constructor(anAccessToken){
          this.access_token  = anAccessToken;
     }

     searchArtist(artistName){
          const searchArtist = {
               params: {
                    q: artistName,
                    type: 'artist'
               },
               headers: { Authorization: `Bearer ${this.access_token}`},
               json: true
          };
          return axios.get('https://api.spotify.com/v1/search', searchArtist);
     }

     searchAlbumsById(aResponse){
          const id = aResponse.data.artists.items[0].id;
          const searchAlbums = {   
               headers: {
                 Authorization: `Bearer ${this.access_token}`,
                 include_groups: 'album'
               },
               json: true
          };
          return axios.get(`https://api.spotify.com/v1/artists/${id}/albums`, searchAlbums);
     }

     populate(anArtistName){
          return this.searchArtist(anArtistName)
               .then(responseArtist => this.searchAlbumsById(responseArtist))
               .then(responseAlbums => responseAlbums.data.items.map(it => it.name))
               .catch(error => {
                    if(error instanceof TypeError){
                         return [];
                    }
                    else throw error;
               });
     }
}

module.exports = {
     SpotifyManager: SpotifyManager
};

new SpotifyManager(access_token).populate("radiohead").then(resp => console.log(resp));




const rp = require('axios').default;

const access_token = "BQDYe27W59PVzQ-XExxsszMowfWCwRuNL6DSiBPromxHjTb8cfNuKg2Ol8XwpS2IQPCrHHM3BXSLMQgwMv8q7q-ZTo9X6R2zzlW6eh9XHbP-ArL_To2lALwXj1EzZ1ymttY8AhT8g2heOFmCtR6d2Y_xn3IoqUQqUN8-DU2QOmwHOO0LcmSvIw"

 
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
          return rp.get('https://api.spotify.com/v1/search', searchArtist);
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
          return rp.get(`https://api.spotify.com/v1/artists/${id}/albums`, searchAlbums);
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




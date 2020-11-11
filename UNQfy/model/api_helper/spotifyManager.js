const axios = require('axios').default;

const access_token = "BQDaVip_mcoImqkn0H7EWNHm9reviVqaHDFiTh5jnEhaZbvwuYH8wcrwveznZB6usVD_zwua67MFnm3RawIBDC_vE0yTid_HoH-zDf3l1zPmmnT3duS7AjUC9mvnUsSOV2SacmexDztOOaAwDMaPt1q7VhCy8EI";
class SpotifyManager{
     constructor(anAccessToken=access_token){
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
     searchArtistById(aResponse){
          const id = aResponse.data.artists.item[0].id;
          const searchArtist = {
               headers: {
                    Authorization: `Bearer ${this.access_token}`,
               },
               json: true
          };

          return axios.get(`https://api.spotify.com/v1/artists/${id}`, searchArtist);
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

     populate(unqfy, anArtistName){
          const unqfyArtist = unqfy.getArtistByName(anArtistName);
          return this.searchArtist(anArtistName)
               .then(responseArtist => this.searchAlbumsById(responseArtist))
               .then(responseAlbums => { return responseAlbums.data.items; })
               .then(listAlbums => { // eslint-disable-next-line no-undef
                    const noRep =  [...new Map(listAlbums.map(item => [item["name"], item])).values()];
                    return noRep.map(album => 
                         unqfy.addAlbum(unqfyArtist.id, {name: album.name, year: album.release_date.slice(0,4)}));
                    })
               .catch(error => { 
                    if(error instanceof TypeError){
                         return [];
                    }
                    else{
                         throw error;
                    }
               });
     }
}

module.exports = SpotifyManager;




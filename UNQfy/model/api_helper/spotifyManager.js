const axios = require('axios').default;

const access_token = "BQDjh8DR3LSjgPpegrRTIZn5o6SqhzIjl21wuZJ-k2mKAp_385MaA15g18PH2lqRXfKSb0b8zinEh9kuq71vwz4WwxUn-KSP-VdHlaZPxWHPH7yh9JLmpRoNo_W8T3cV5sxkKZWAUBMp4GQczxUkt1UrTgZ2ZooCuQUX2vlxS7634kXN0U3mKA";
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
          //Esto solo se tiene que hacer si en UNQUIfy existe el artista con el nombre
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




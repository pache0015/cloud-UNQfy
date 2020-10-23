const rp = require('request-promise');
const access_token =  "BQAu-6HZsBsamvWwFLBNh9HYNGIyW5mrzDqK8AVLe9itcbQlJ8aN3Z-fcJCPT-7NPtG327_3RhgqulhUNF-AxdH7amks3UZ625Y-H6bk-eYxuncfb3xleErRgM-RsA5DKDONhJn0rEpTNgKhG6m7CL8VfY9U3ihb5pOZzo_RQyg5K761A00K0A";
class SpotifyManager{
     searchArtist(artistName){
          const searchArtist = {
               url: 'https://api.spotify.com/v1/search',
               qs: {
                    q: artistName,
                    type: 'artist'
               },
               headers: { Authorization: 'Bearer ' + access_token },
               json: true,
          };
          return rp.get(searchArtist);
     }

     searchAlbumsById(id){
          const searchAlbums = {   
               url: `https://api.spotify.com/v1/artists/${id}/albums`,
               headers: {
                 Authorization: 'Bearer ' + access_token,
                 include_groups: 'album'
               },
               json: true
          };
          return rp.get(searchAlbums);
     }

     populate(anArtistName){
          return this.searchArtist(anArtistName)
               .then(response => this.searchAlbumsById(response.artists.items[0].id))
               .then(response => console.log(response.items.map(it => it.name)))
               .catch(error => {
                    if(error instanceof TypeError){
                         return console.log([]);
                    }
                    else throw error;
               });
     }
}

module.exports = {
     SpotifyManager: SpotifyManager
};

new SpotifyManager().populate("radiohead");




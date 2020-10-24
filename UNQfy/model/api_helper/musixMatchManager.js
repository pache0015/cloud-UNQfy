//const axios = require('axios').default;
const rp = require('request-promise');

class MusixMatchManager{
    constructor(){
        this._api_key = "3caa89508aacec4a8e76c3ba067eaf65";
    }

    doMagic(){
        const BASE_URL = 'http://api.musixmatch.com/ws/1.1';
        const options = {
          uri: BASE_URL + '/artist.search',
          qs: {
              apikey: this._api_key,
              q_artist: 'Queen',
          },
          json: true
        };
        rp.get(options)
            .then((response) => {
                const header = response.message.header;
                const body = response.message.body;
                if (header.status_code !== 200){
                    throw new Error('status code != 200');
                }
                const artistNames = body.artist_list.map((artist => artist.artist.artist_name));
                console.log(`Se econtraron ${artistNames.length} artistas`);
                console.log(artistNames);})
            .catch((error) => {
                console.log('algo salio mal', error);});
    }
}

module.exports = {
    MusixMatchManager: MusixMatchManager
};


new MusixMatchManager().doMagic();
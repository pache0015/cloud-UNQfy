//const axios = require('axios').default;
const rp = require('request-promise');

class MusixMatchManager{
    constructor(){
        this._api_key = "3caa89508aacec4a8e76c3ba067eaf65";
        this._BASE_URL = 'http://api.musixmatch.com/ws/1.1';   
    }

    getLyrics(aTrack){
        const options = {
          uri: this._BASE_URL + `/track.search`,
          qs: {
              apikey: this._api_key,
              q_track: aTrack.name
          },
          json: true
        };
        rp.get(options)
            .then((response) => {
                return response.message.body.track_list[0].track.track_id;
            })
            .then(id => {
                const other_options = {
                    uri: this._BASE_URL + `/track.lyrics.get`,
                    qs: {
                        apikey: this._api_key,
                        track_id: id
                    },
                    json: true
                };
                return rp.get(other_options);})
            .then(response => response.message.body.lyrics.lyrics_body)
            .then(lyrics =>  { aTrack.lyrics = lyrics;
                             return lyrics; })
            .catch(error => {
                throw error;
            });
        }
}

module.exports = {
    MusixMatchManager: MusixMatchManager
};

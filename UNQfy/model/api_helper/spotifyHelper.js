const axios = require('axios');
const access_token = "BQAuc9XnXB9nVpOBFLN4DTohB3ahqCgM3OHbynWSsjom6ywg5mwjamuGCwRELwUMQs4HgiWVNhccg_lXUQSJCURDytRpbm3PUClMaxx";
const options = {
     q: 'radiohead',
     type: 'artist',
     headers: {
          "Authorization": "Bearer " + access_token
     },
     json: true,
};
const url = "https://api.spotify.com/v1/search";
//const urlCompleta = "https://api.spotify.com/v1/search?q=radiohead&type=artist\" -H \"Accept: application/json\" -H \"Content-Type: application/json\" -H \"Authorization: Bearer BQCYiI7VwAc_hWF4EQ27LGXmvfnjMzuD99OAdtX_MnbQwTtXkAk0JehlA1ZyI2YxPR4l3MgTasKaWGyiu-ee5QlvJLVto0wwWILDjYmsGxj7T2dbaHarSXTTxri0rmELE7tlj4Ba2GV1RQ6q-FYbpN9XXSHc1ypiWpTVv5SLrVoh5lTfFb68qQ\"";
//axios.get(urlCompleta).then((response) => {return console.log(response);});

axios({
     method: 'get',
     url: 'https://api.spotify.com/v1/search',
     params:{
          q: 'radiohead',
          type: 'artist',
     },
     headers: {
          "Authorization": "Bearer " + access_token
     },
     json: true,
}).then((response)=>{return console.log(response)});
const axios = require('axios').default;

class loggly {
    constructor() {
    }

    sendLogArtist(_idArtist, level){
        const logArtist = {
            'level': level,

        }

        return axios.get('https://localhost:8083/api/logging/', logArtist);
    }

}
const rp = require('request-promise');
const options = {
     url: 'ALGUN_ENDPOINT_DE_SPOTIFY',
     headers: { Authorization: 'Bearer ' + 'ACCESS_TOKEN' },
     json: true,
};
rp.get(options).then((response) => {return response;});
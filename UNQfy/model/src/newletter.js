const NewsletterConnector = require('./newletterConnector.js');
const notifier  = new NewsletterConnector();

class Newsletter{
    update(json){
        const subject = `Nuevo album ${json.album}`;
        const message = `Tu artista ${json.artist} publicó su nuevo album ${json.album}!!!`;
        notifier.notify(json.artistId, subject, message);
    }   
}

module.exports = Newsletter;
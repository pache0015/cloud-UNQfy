const NewsletterConnector = require('./newsletterConnector.js');
const notifier  = new NewsletterConnector();

class Newsletter{
    updateState(json){
        const subject = `Nuevo album ${json.album}`;
        const message = `Tu artista ${json.artist} publicó su nuevo album ${json.album}!!!`;
        notifier.notifySubscribers(json.artistId, subject, message);
    }   

}

module.exports = Newsletter;
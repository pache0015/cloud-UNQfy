const rp = require('request-promise');

class NewsletterConnector {
  notifySubscribers(artistId, subject, message) {
    const options = {
      uri: `http://localhost:8083/api/notify`,
      body: {
        artistId: artistId,
        subject: subject,
        message: message
      },
      json: true
    };
    rp.post(options);
  }
}

module.exports = NewsletterConnector;
const https = require('https');

const getHTML = function (options, cb) {
  https.get(options, (res) => {
    res.setEncoding('utf-8');

    let message = '';
    res.on('data', (data) => {
      message += data;
    });

    res.on('end', () => {
      cb(message);
    });
  });
};

module.exports = getHTML;
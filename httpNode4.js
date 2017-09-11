const https = require('https');

function printHTML (html) {
  console.log(html);
}

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step4.html'
};

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

getHTML(requestOptions, printHTML);
const https = require('https');

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step3.html'
};

const getAndPrintHTML = function (options) {
  https.get(requestOptions, (res) => {
    res.setEncoding('utf-8');

    let message = '';
    res.on('data', (data) => {
      message += data;
    });

    res.on('end', () => {
      console.log(message);
    });
  });
};

getAndPrintHTML(requestOptions);
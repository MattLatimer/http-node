const https = require('https');

const getAndPrintHTML = function () {
  var requestOptions = {
    host: 'sytantris.github.io',
    path: '/http-examples/step2.html'
  };
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

getAndPrintHTML();
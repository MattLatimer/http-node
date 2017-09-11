const https = require('https');

const getAndPrintHTMLChunks = function() {

  let requestOptions = {
    host: 'sytantris.github.io',
    path: '/http-examples/step1.html'
  };
  https.get(requestOptions, (res) => {
    res.setEncoding('utf-8');
    res.on('data', (data) => {
      console.log(data, '\n');
    });
  });
};

getAndPrintHTMLChunks();
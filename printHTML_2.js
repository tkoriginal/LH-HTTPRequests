const https = require('https');

const requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step3.html'
}

function getAndPrintHTML(option) {
  
  https.get(option, (response) => {
    response.setEncoding('utf8');

    let output = '';

    response.on('data', (data) => {
      console.log('Chunck Received. Length:', data.length);
      output += data;
    });

    response.on('end', () => {
      console.log(output);
      console.log('Response stream complete.')
    })
  })
}

getAndPrintHTML(requestOptions);
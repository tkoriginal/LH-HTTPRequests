const https = require('https');

const requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step3.html'
}

function getHTML(option, callback) {
  
  https.get(option, (response) => {
    response.setEncoding('utf8');

    let output = '';

    response.on('data', (data) => {
      console.log('Chunck Received. Length:', data.length);
      output += data;
    });

    response.on('end', () => {
      callback(output)
      console.log('Response stream complete.')
    })
  })
}

function printHTML(html) {
  console.log(html);
}

getHTML(requestOptions, printHTML);

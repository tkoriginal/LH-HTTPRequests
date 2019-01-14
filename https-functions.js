const https = require('https');

module.exports = function getHTML (options, callback) {
  let output = '';
  https.get(options, (response) => {
    response.on('data', (data) => {
      output += data;
    })
    response.on('end', () => {
      callback(output);
    })
  })
}
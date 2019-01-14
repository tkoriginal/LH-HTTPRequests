const getHTML = require('./https-functions');

const requestOption = {
  host: 'sytantris.github.io',
  path: '/http-examples/step5.html'
}

function printHTML(html) {
  console.log(html);
}

getHTML(requestOption, printHTML);
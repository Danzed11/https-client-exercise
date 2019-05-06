var getHTML = require('../step5http-functions.js');

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step5.html'
};

getHTML(requestOptions, printUpperCase);

function printUpperCase(html) {
  console.log(html.toUpperCase());
  
  }
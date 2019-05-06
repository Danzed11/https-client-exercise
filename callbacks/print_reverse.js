var getHTML = require('../step5http-functions.js');

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step5.html'
};

getHTML(requestOptions, reverse);

function reverse(html) {
  console.log(html.split("").reverse().join(""));
  
  
  }
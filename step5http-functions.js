var https = require('https');

module.exports = function getHTML (options, callback) {
  var body ="";
  https.get(options, function (response) {
    response.setEncoding('utf8');
    response.on('data', function (data){
      body += data;
      response.on("end", function() {
      callback(body);
      console.log("Response stream complete");
      })
    })
    })
  }
  function printHTML (html) {
    console.log(html);
}
// getHTML ({"host": 'sytantris.github.io',
//     "path": '/http-examples/step4.html'}, printHTML);

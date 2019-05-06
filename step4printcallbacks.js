var https = require('https');

function getHTML (options, callback) {
  var body ="";
  https.get(options, function (response) {
    response.setEncoding('utf8');
    response.on('data', function (data){
      body += data;
      response.on("end", function() {
      console.log(callback(body));
      console.log("Response stream complete");
      })
    })
    })
  }
  function printHTML (html) {
    console.log(html);
}
getHTML ({"host": 'sytantris.github.io',
    "path": '/http-examples/step4.html'}, printHTML);
// var https = require('https');
// //var data;
// var modular = function getHTML (options, callback) {
  
//   var body = ""; //Preferable to be a string not a variable, so you can JSON it later

//   https.get(options, function (response) {
//     response.setEncoding('utf8');
//     response.on('data', function (data){
//       body += data;
//       response.on("end", function() {
//       })
//   var readerStream = body;
//   var writerStream = https.createWriteStream('output.txt');
//   body.pipe(writerStream);

//       console.log("Response stream complete");
//     })
//     })}
    
//     getHTML({"host": 'sytantris.github.io',
//                      "path": '/http-examples/step3.html'}, modular);

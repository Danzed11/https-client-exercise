var https = require('https');

function getAndPrintHTML (options) {

  var body = ""; //Preferable to be a string not a variable, so you can JSON it later

  https.get(options, function (response) {
    response.setEncoding('utf8');
    response.on('data', function (data){
      body += data;
      response.on("end", function() {
      })
      console.log(body + '\n');

      console.log("Response stream complete");
    })
    })}
    

    getAndPrintHTML({"host": 'sytantris.github.io',
                     "path": '/http-examples/step3.html'});

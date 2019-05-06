var https = require('https');

function getAndPrintHTML () {
  var body = ""; //Preferable to be a string not a variable, so you can JSON it later
  var requestOptions = {
    host: 'sytantris.github.io',
    path: '/http-examples/step2.html' //DIFFERENT WEBSITE without Pi Value.
  };

  https.get(requestOptions, function (response) {
    response.setEncoding('utf8');
    response.on('data', function (data){
      body += data;
      response.on("end", function() {
      })
      console.log(body + '\n');

      console.log("Response stream complete");
    })
    })}
    getAndPrintHTML();
  

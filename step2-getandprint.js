var https = require('https');

function getAndPrintHTML () {
  const chunks = [];
  var requestOptions = {
    host: 'sytantris.github.io',
    path: '/http-examples/step2.html'
  };

  https.get(requestOptions, function (response) {
    response.setEncoding('utf8');
    response.on('data', function (data){
      chunks.push(data);
      response.on("end", function() {
      })
      console.log(chunks + '\n');

      console.log("Response stream complete");
    })
    })}
    getAndPrintHTML();
  

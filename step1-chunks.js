var https = require('https');

function getAndPrintHTMLChunks () {
  var body = "";
  var requestOptions = {
    host: 'sytantris.github.io',
    path: '/http-examples/step1.html'
  };
  
  https.get(requestOptions, function (response) {
  response.setEncoding('utf8');
  response.on('data', function (data){
    body += data;
    response.on("end", function() {
      console.log(body);
    })

    console.log("chunk Received. Length:", data.length);
  })
  })}
  console.log(getAndPrintHTMLChunks());


  // called by https when the request is made.
  // var callback = function(response) {
  // console.log('In response handler callback!');  
  //   response.on('data', function(chunk) {
  //     console.log('[-- CHUNK OF LENGTH' + chunk.length + ' --]');
  //     console.log(chunk.toString());
  //   });
  // }
  
  // console.log("I'm about to make the request!");
  
  // https.request(requestOptions, callback).end();
  
  // console.log("I've made the request!");





  
//   var requestOptions = {
//     host: 'sytantris.github.io',
//     path: '/http-examples/step1.html'
//   };

// https.request(requestOptions, function(response) {
//   response.setEncoding('utf8');

//   response.on('data', function(chunk) {
//       console.log('Chunk Received. Length:', chunk.length);
//   }).end();
//   response.on('end', function().end() {
//     console.log("Response stream complete.")
//   })
// })
// }
// console.log(getAndPrintHTMLChunks());
  
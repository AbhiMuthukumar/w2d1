var request = require ("request");

var fs = require('fs');

request.get('https://sytantris.github.io/http-examples/future.jpg')
  .on('error', function(err){
    console.error(err);
  })
  .on('response', function(res){
    console.log("HTTPS Response Code: ",res.statusCode);
    console.log("HTTPS Status Message: ", res.statusMessage);
    console.log("Content Type: ", res.headers['content-type']);
  })
  .pipe(fs.createWriteStream('./future.jpg'));
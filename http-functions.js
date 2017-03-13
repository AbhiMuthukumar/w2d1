var https = require("https");

var responseBuffer = '';

module.exports = function getHTML (options, callback) {

    https.get(options, function(response){
    response.setEncoding("utf8");

    response.on('data', function(res){
      responseBuffer += res;
    });

    response.on('end', function(){
      callback(responseBuffer);
    });

  }).on('error', function(err){
    console.log("Error: " , err);
  });
};
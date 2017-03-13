var https = require("https");

module.exports = function getHTML (options, callback) {

  var responseBuffer = '';

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
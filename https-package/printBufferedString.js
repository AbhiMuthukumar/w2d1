var https = require('https');

var responseBuffer='';

var reqOptions = {
    host: 'sytantris.github.io',
    path: '/http-examples/step2.html'
  };

function getAndPrintHTML(){
  https.get(reqOptions, function(response){
    response.setEncoding("utf8");

    response.on('data', function(res){
      responseBuffer += res;
    });

    response.on('end', function(){
      console.log("Response as Below \n", responseBuffer);
    });

  }).on('error', function(err){
    console.log("Error: " , err);
  });

}

getAndPrintHTML();
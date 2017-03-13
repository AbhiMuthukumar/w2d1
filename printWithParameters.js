var https = require("https");

var responseBuffer = '';

function getAndPrintHTML (options) {
  https.get(options, function(response){
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

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step3.html'
};

getAndPrintHTML(requestOptions);
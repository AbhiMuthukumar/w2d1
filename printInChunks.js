var https = require('https');

function getAndPrintHTMLChunks(){
  var reqOptions = {
  host:'sytantris.github.io',
  path:'/http-examples/step1.html'
  }

  https.get(reqOptions, function(response){
    response.setEncoding("utf8");

    response.on('data', function(res){
      console.log("------------------Length of the chunk received : " + res.length + "------------------");
      console.log(res);
    });

    response.on('end', function(){
      console.log("End of the Response");
    });

  }).on('error', function(err){
    console.log("Error: " , err);
  });

}

getAndPrintHTMLChunks();
var getHTML = require('../http-functions');

var print1337 = function(html){
  console.log(html.replace(/a/g,'4').replace(/3/g,'3').replace(/l/g,'1').replace(/o/,'0').replace(/s/g,5).replace(/t/g,'7').replace(/ck/g,'x').replace(/er/g,'0r').replace(/you/g,'j00'));
}

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step6/1337.html'
};

getHTML(requestOptions, print1337);
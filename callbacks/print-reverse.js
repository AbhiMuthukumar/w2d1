var getHTML = require('../http-functions');

var printReverse = function(html){
  console.log(html.split('').reverse().join(''));
}

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step6/lowercase.html'
};

getHTML(requestOptions, printReverse);
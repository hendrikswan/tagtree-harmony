var fs = require('fs');
var Levenshtein = require('levenshtein');

var words = fs.readFileSync('./words').toString().split('\n');

function* wordMatcher(){
  for(var word of words){
    yield word;
  }
}

var matcher = wordMatcher();

while(true){
  var word = matcher.next();
  if(word.done){
    break;
  }

  console.log(word.value);
}
























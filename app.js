var fs = require('fs');
var Levenshtein = require('levenshtein');

function* wordMatcher(){
  var words = fs.readFileSync('./words').toString().split('\n');
  for(word of words){
    var match = {
      word: word,
      closest: '',
      difference: 0
    };

    for(var compareWord of words){
      if(word == compareWord){
        continue;
      }
      var distance = new Levenshtein(word, compareWord).distance;
      if(distance < match.difference || match.difference == 0){
        match.difference = distance;
        match.closest = compareWord;
      }
    }

    yield match;
  }
}

var matcher = wordMatcher();

while(true){
  var match = matcher.next();
  if(match.done){
    break;
  }

  console.log(match.value);
}
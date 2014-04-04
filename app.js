var fs = require('fs');
var Levenshtein = require('levenshtein');

var words = fs.readFileSync('./words').toString().split('\n');

var closestMatches = words.map(function(word){
  //var difference
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

  return match;
});

for(var match of closestMatches){
  console.log(match.word + ' : ' + match.closest + ' (' + match.difference + ')');
}

// var l = new Levenshtein('kitten', 'smitten');
// console.log(l.distance);


// function oldSchoolDoubler(){

//   var obj = {x: 1};
//   obj.next = function(){
//     obj.x *=2;
//     return obj.x;
//   }

//   return obj;
// }

// var osd = oldSchoolDoubler();
// while(true){
//   var res = osd.next();


//   if(res > 10000000){
//     break;
//   }

//   console.log(res);
// }


// function* doubler(){
//   var x = 1;
//   while(true){
//     yield(x);
//     x*=2;;
//   }
// }

// var g = doubler();

// while(true){
//   var res = g.next();
//   if(res.done){
//     break;
//   }

//   if(res.value > 10000000){
//     break;
//   }

//   console.log(res);
// }

// for(var i=0;i<100;i++){
//   console.log(tg.next());
// }

// 'n dokter se spreek kamer?
// wel enigiets wat mens so kan model is maar net 'n statemachine

//dit is: iets wat onthou waar hy laas was wat nie vooruit gecalculate hoef te word nie. Maar dit kan mos altyd
// met 'n gewone object in JS gedoen word wat net onthou waar hy laas was en dan aangaan daarmee...
function Question (body){
  var question = {
    body: body
  };

  question.ask = function(){
    console.log('-> ' + this.body);
  }

  question.answer = function(answer){
    console.log(`       Your answer: ${answer}`);
  }

  return question;
}

var q = new Question('Have you read idiomatic.js on github?');
q.ask();
q.answer('No, but I heard a lot about it!');
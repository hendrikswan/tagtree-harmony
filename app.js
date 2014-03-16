var readline = require('readline');

var rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

class Question {

  constructor(body){
    this.body = body;
  }

  ask(){
    rl.question(this.body, function(answer) {
      console.log("Thank you for your valuable feedback:", answer);
      rl.close();
    });
  }

  handleAnswer(answer){
    console.log("Thank you for your valuable feedback:", answer);
  }
}

var q = new Question('Have you read idiomatic.js on github?');
q.ask();

class Question {

  constructor(body){
    this.body = body;
  }

  ask(){
    console.log(this.body);
  }

  answer(answer){
    console.log(`       --${answer}`);
  }
}

var q = new Question('Have you read idiomatic.js on github?');
q.ask();
q.answer('No, but I heard a lot about it!');
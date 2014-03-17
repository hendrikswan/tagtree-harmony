class Question {
  constructor(body){
    this.body = body;
  }

  ask(){
    console.log('-> ' + this.body);
  }

  answer(answer){
    console.log(`       Your answer: ${answer}`);
  }
}


class MultiChoiceQuestion extends Question {
  constructor(body, choices){
    super(body);
    this.choices = choices;
  }

  ask() {
    super();
    for(var choice of this.choices){
      console.log( `${this.choices.indexOf(choice) + 1}  - ${choice}`);
    }
  }

  answer(answer){
    answer = this.choices[answer - 1];
    super(answer);
  }
}

var q = new Question('Have you read idiomatic.js on github?');
q.ask();
q.answer('No, but I heard a lot about it!');


var multiQ = new MultiChoiceQuestion('Which tagtree casts have you watched?',
  ['bla', 'blie']);
multiQ.ask();
multiQ.answer(1);



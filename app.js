class Question{

  constructor(body){
    this.body = body;
  }

  ask(){
    console.log('-> ' + this.body);
  }

  answer(answer){
    console.log(`     Your answer: ${answer}`);
  }
}

class MultiChoiceQuestion extends Question{
  constructor(body, choices){
    super(body);
    this.choices = choices;
  }

  ask(){
    super();
    for(var choice of this.choices){
      console.log(`${this.choices.indexOf(choice)} - ${choice}`)
    }
  }

  answer(answer){
    var selectedOption = this.choices[answer-1];
    super(selectedOption);
  }
}


var q = new MultiChoiceQuestion('Have you watched a tagtree video yet?',
  ['Yes', 'No', 'Hmm.. not sure']);
q.ask();
q.answer(3);



















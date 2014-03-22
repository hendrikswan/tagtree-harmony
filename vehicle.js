class Vehicle{
  constructor({make, model}){
    this.make = make;
    this.model = model;
  }

  isMatch(make, model){
    return this.make === make || this.model === model;
  }
}

var vehicles = [
  new Vehicle({make: 'Ford', model: 'Focus'}),
  new Vehicle({make: 'Subaru',  model: 'Forester'}),
  new Vehicle({make: 'Honda',   model: 'PCX 125'})
];

function findVehicle({make, model}){
  for(var v in vehicles){
    if(v.isMatch(make, model)){
      return v;
    }
  }

  return null;
}


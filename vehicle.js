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

export function findVehicle({make, model}){
  for(var v of vehicles){
    console.log(v);
    if(v.isMatch(make, model)){
      return v;
    }
  }

  return null;
}


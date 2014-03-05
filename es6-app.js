function getVehicle() {
  return {
    make: 'Ford',
    model: 'Focus',
    color: 'Blue',
    engineCapacity: '2.0L'
  };
}
var $__0 = getVehicle(),
    theMake = $__0.make,
    theModel = $__0.model;
console.log(("The make is " + theMake + ", and the model is " + theModel));

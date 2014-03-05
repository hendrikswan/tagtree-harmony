function getVehicle(){
    return {
        make: 'Ford',
        model: 'Focus',
        color: 'Blue',
        engineCapacity: '2.0L'
    }
}

var {make: theMake, model: theModel} = getVehicle();

console.log(`The make is ${theMake}, and the model is ${theModel}`);


function getVehicle(){
    return {
        make: 'Ford',
        model: 'Focus',
        color: 'Blue',
        engineCapacity: '2.0L'
    }
}

var vehicle = getVehicle();

console.log(`The make is ${vehicle.make}, and the model is ${vehicle.model}`);


import {findVehicle,vehicles} from './vehicle';

console.log(`Here are all the vehicles: ${vehicles}`)

var match = findVehicle({model: 'Focus'});
console.log(`search result: make: ${match.make}, model: ${match.model}`);
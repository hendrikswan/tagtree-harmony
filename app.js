import {findVehicle} from './vehicle';


var match = findVehicle({model: 'Focus'});
console.log(`search result: make: ${match.make}, model: ${match.model}`);
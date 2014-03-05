function searchVehicles(args){
    var make = args.make, model = args.model, color = args.color;
    console.log(`searching for vehicles with make ${make}, model ${model} and color ${color}`);
}

searchVehicles({make: 'Subaru', model: 'Forester', color: 'Gold'});




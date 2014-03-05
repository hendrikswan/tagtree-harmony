function searchVehicles($__0) {
  var mk = $__0.make,
      mdl = $__0.model,
      c = $__0.color;
  console.log(("searching for vehicles with make " + mk + ", model " + mdl + " and color " + c));
}
searchVehicles({
  make: 'Subaru',
  model: 'Forester',
  color: 'Gold'
});

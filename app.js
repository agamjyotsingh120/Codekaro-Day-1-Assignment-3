let cars = [
   { make : 'Toyota',
   model : 'Camry',
   year : '2018'
   },
   {
    make : 'Honda',
    model : 'Civic',
    year : '2020'
   }
]
cars.splice(cars, 1);
cars[0].model = "Accord";
console.log(cars);
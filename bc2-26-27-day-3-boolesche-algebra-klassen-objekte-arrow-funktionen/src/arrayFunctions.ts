interface Car {
    brand: string;
    model: string;
}
const car: Car[] = [
    {brand: 'Ford', model: 'Mustang'},
    {brand: 'Ford', model: 'Fiesta'},
    {brand: 'Ford', model: 'Focus'},
    {brand: 'VW', model: 'Golf'},
    {brand: 'VW', model: 'Polo'},
    {brand: 'VW', model: 'Passat'},
    {brand: 'Audi', model: 'A6'},
    {brand: 'Audi', model: 'A4'},
    {brand: 'Audi', model: 'A3'},
    {brand: 'Audi', model: 'R8'},
    {brand: 'BMW', model: 'M5'},
    {brand: 'BMW', model: 'M3'},
    {brand: 'BMW', model: 'X6'},
    {brand: 'Mercedes', model: 'C-Class'},
    {brand: 'Mercedes', model: 'E-Class'},
    {brand: 'Mercedes', model: 'S-Class'},
]

const modelNames = car.map(car => car.model);

console.log(modelNames);

const modelNamesSorted = modelNames.sort();

console.log(modelNamesSorted);

const audiFiltered = car.filter(car => car.brand === 'Audi');

console.log(audiFiltered);

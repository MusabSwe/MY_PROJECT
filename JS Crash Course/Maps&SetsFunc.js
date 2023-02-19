const currencies = new Map([
    ['USD', 'United States dollar'],
    ['EUR', 'Euro'],
    ['GBP', 'Pound sterling'],
]);

currencies.forEach((val, i, arr) => {
    console.log(`${i} : ${val}`);
});
/*
output:
USD : United States dollar
EUR : Euro
GBP : Pound sterling
*/

const currenciesIsUnique = new Set(['USD', 'GBP', 'USD', 'EUR', 'EUR']);

console.log(currenciesIsUnique); // output: Set(3) { 'USD', 'GBP', 'EUR' }

// Note in the set there is no index so index give us the value repated
currenciesIsUnique.forEach((v, i, arr) => {
    console.log(`Set: ${v} : ${i}`);
});

/*
output:
Set: USD : USD
Set: GBP : GBP
Set: EUR : EUR
*/
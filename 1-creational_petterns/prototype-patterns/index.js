// const Shopper = require('./shopper')

// let alex = new Shopper('Alex Decoze');
// alex.addIteamsToList('item1');
// alex.addIteamsToList('item2');
// alex.addIteamsToList('item3');
// alex.addIteamsToList('item4');
// alex.addIteamsToList('different1');

// let moran = new Shopper('Moran willams');
// moran.addIteamsToList('item1');
// moran.addIteamsToList('item2');
// moran.addIteamsToList('item3');
// moran.addIteamsToList('item4');
// moran.addIteamsToList('different2');

// console.log(`${alex.name} - ${alex.items}`)
// console.log(`${moran.name} - ${moran.items}`)




//best approuch
// let scout_prototype = require('./scout_prototype')

// let alex = scout_prototype.clone();
// alex.name = 'Alex Decoze';
// alex.addIteamsToList('newItem');

// console.log(`${alex.name} - ${alex.items}`)


var scout_prototype = require('./scout_prototype');

var alex = scout_prototype.clone();
alex.name = 'Alex Banks';
alex.addItemToList('slingshot');

var eve = scout_prototype.clone();
eve.name = 'Eve Porcello';
eve.addItemToList('reading light');

console.log( `${alex.name}: ${alex.shoppingList}` );
console.log( `${eve.name}: ${eve.shoppingList}` );

//make sure the veriable and function names are different
//this protptype patterns is used when there are more odjects are created with same properties






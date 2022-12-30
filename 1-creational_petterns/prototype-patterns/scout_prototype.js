// const Shopper = require('./shopper')

// let scout = new Shopper();
// scout.addIteamsToList('item1');
// scout.addIteamsToList('item2');
// scout.addIteamsToList('item3');
// scout.addIteamsToList('item4');

// module.exports = scout;

var Shopper = require('./Shopper');

var scout = new Shopper();
scout.addItemToList('camping knife');
scout.addItemToList('tent');
scout.addItemToList('backpack');
scout.addItemToList('map');

module.exports = scout;

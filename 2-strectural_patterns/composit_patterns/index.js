const CatalogItems = require('./CatalogItems')
const CatalogGroup = require('./CatalogGroup')

const boots = new CatalogItems('leather boots', 20.88);
const sneakers = new CatalogItems('Kicks', 567.9);
const flipflops = new CatalogItems('wook boots', 56.890);

console.log(`boots total: $${boots.total}` );

// boots.print();
// sneakers.print();
// flipflops.print();

const group_shoes = new CatalogGroup('Shoes and such', [boots, sneakers, flipflops]);

group_shoes.total;
group_shoes.print();

//some times we want to perform the same operations on an individual element as we would a group of elements
//use when we have tree like strectuer data

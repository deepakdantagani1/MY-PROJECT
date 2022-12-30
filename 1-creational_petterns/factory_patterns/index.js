


var userFactory = require('./user_factory');

var alex = userFactory('Alex Banks');
var eve = userFactory('Eve Porcello', 100, 'employee', 'This and That');

eve.payDay(100);

console.log(alex.toString());
console.log(eve.toString());

//one funciton can have any arguments,  but while calling we can use one are many
//this factory patterns can be used when there are more classes need to imported in file

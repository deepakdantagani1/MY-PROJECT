/* eslint-disable indent */
/* eslint-disable no-unused-vars */
//object.create() will create a new object of the existing once and also we can inherited properties can be overwritten
//delete person.name ==> delete a value from an object
//for in ==> loop through object
//Object.entries() returns an array of entries
//Object.keys() returns an array of keys
//object.freeze() ==> this is freeze only outer most key values, but not the innermost and Object.isFrozen() is to validate
//Object.getPrototypeOf() method returns the prototype of the specified object. if Object.create is used
//****Object.fromEntries() method transforms a list of key-value pairs into an object.
//The Object.values() method returns an array of a given object's own enumerable property values



const person = {
    isHuman: false,
    printIntroduction: function() {
        //console.log(`My name is ${this.name}. Am I human? ${this.isHuman}`);
    }
};

const me = Object.create(person);

me.name = 'Matthew'; // "name" is a property set on "me", but not on "person"
me.isHuman = true; // inherited properties can be overwritten

//me.printIntroduction();// expected output: "My name is Matthew. Am I human? true"


//delete a value from an object
let spaceship = {
    'Fuel Type' : 'Turbo Fuel',
    homePlanet : 'Earth',
    color: 'silver',
    'Secret Mission' : 'Discover life outside of Earth.'
};
//console.log(spaceship);

delete spaceship.color;
delete spaceship['Secret Mission'];

//console.log(spaceship);

//methods in the objects
let methods = {
    'Fuel Type' : 'Turbo Fuel',
    homePlanet : 'Earth',
    color: 'silver',
    'Secret Mission' : 'Discover life outside of Earth.',
    print(){
        //console.log(this.homePlanet);
    }
};//methods.print();

//looping through the objects
let spaceship1 = {
    crew: {
        captain: {
            name: 'Lily',
            degree: 'Computer Engineering',
            cheerTeam() { console.log('You got this!') }
        },
        'chief officer': {
            name: 'Dan',
            degree: 'Aerospace Engineering',
            agree() { console.log('I agree, captain!') }
        },
        medic: {
            name: 'Clementine',
            degree: 'Physics',
            announce() { console.log(`Jets on!`) } },
        translator: {
            name: 'Shauna',
            degree: 'Conservation Science',
            powerFuel() { console.log('The tank is full!') }
        }
    }
};

for (let crewMember in spaceship1.crew) {
    //console.log(`${spaceship1.crew[crewMember].name}`);
}


//to maintain privacy just give _ to the keu value
const backAccount = {
    _amount: 1000,
    // getAmount(){
    //     return this._amount;
    // },

    // get amount(){
    //     return this._amount;
    // },
    set setAmount(value){
        this._amount = value;
    }
}

backAccount.setAmount = 5000;
//console.log(backAccount._amount);

//factory function
const robotFactory = (model, mobile) => {
    return {
        model : model,// => model
        mobile: mobile,
        beep () {
            //console.log('Beep Boop');
        }
    };
};

const tinCan = robotFactory('P-500', true);
tinCan.beep();

//Object.entries() returns an array
let spaceship2 = {
    'Fuel Type' : 'Turbo Fuel',
    homePlanet : 'Earth',
    color: 'silver',
    'Secret Mission' : 'Discover life outside of Earth.'
};//console.log(Object.entries(spaceship2));

//object.freeze() ==> this is freeze only outer most key values, but not the innermost and Object.isFrozen() is to validate

//Object.fromEntries() method transforms a list of key-value pairs into an object.
const object1 = { a: 1, b: 2, c: 3 };

let modified = Object.entries(object1).reduce((acc, init)=>{
    acc.push([init[0], init[1]*2])
    return acc;
},[]);//console.log(Object.fromEntries(modified));

//Object.getPrototypeOf() method returns the prototype of the specified object.
const prototype1 = {};
const object10 = Object.create(prototype1);

//console.log(Object.getPrototypeOf(object10) === prototype1) // expected output: true

//Object.keys()  method returns an array of a given object's own enumerable property names, iterated in the same order that a normal loop would.
const object12 = {
    a: 'somestring',
    b: 42,
    c: false
};//console.log(Object.keys(object12));// expected output: Array ["a", "b", "c"]

//understanding this in functions
function MyNumberType(n) {
    this.number = n;
}

MyNumberType.prototype.valueOf = function() {
    return this.number;
};

const object15 = new MyNumberType(4);

//console.log(object15 + 3);// expected output: 7

//The Object.values() method returns an array of a given object's own enumerable property values
const object19 = {
  a: 'somestring',
  b: 42,
  c: false
};//console.log(Object.values(object19));// expected output: Array ["somestring", 42, false]

const removeObj = (obj, prop) => {
  if(!obj || !prop) return new Error('obj or prop is undefiled')
  const propFound = Object.keys(obj).includes(prop);
  if(propFound) delete obj[prop];
  return propFound;
};

console.log(removeObj(object19, 'a'));
console.log(object19)







/**
 * Values and Types in JavaScript
 * string
 * number
 * boolean
 * null and undefined
 * object
 * symbol (new to ES6)
 *
 *
 * Object.getOwnPropertyNames(a)
 * (
 * var a = {};
Object.defineProperties(a, {
    one: {enumerable: true, value: 1},
    two: {enumerable: false, value: 2},
});
Object.keys(a); // ["one"]
Object.getOwnPropertyNames(a); // ["one", "two"]
 * )
 *
 * 
 * deep-equal ==> compare two objects in JavaScript
 * 
 * WeakMap
 * (WeakMaps provide a way to extend objects from the outside without interfering with garbage collection. Whenever you want to extend an object but can't because it is sealed - or from an external source - a WeakMap can be applied.
WeakMap is only available for ES6 and above. A WeakMap is a collection of key and value pairs where the key must be an object.
var map = new WeakMap();
var pavloHero = {
    first: "Pavlo",
    last: "Hero"
};
var gabrielFranco = {
    first: "Gabriel",
    last: "Franco"
};
map.set(pavloHero, "This is Hero");
map.set(gabrielFranco, "This is Franco");
console.log(map.get(pavloHero)); //This is Hero)
 * 
 * 
 * froEach() vs map() creating a new array as a result.
 * 
 * 
 */
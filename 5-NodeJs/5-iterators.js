//The for...in statement iterates over all enumerable properties of an object that are keyed by strings
const someObject = { a: 1, b: 2, c: 3 };

for(let key in someObject){
    console.log(`key: ${key}, value: ${someObject[key]}`);
}

//The for...of statement creates a loop iterating over iterable objects,
//including: built-in String, Array, array-like objects (e.g., arguments or NodeList),
//TypedArray, Map, Set, and user-defined iterables.
const array1 = ['a', 'b', 'c'];

for(let value of array1){
    console.log(`value: ${value}`)
}

array1.forEach((value)=>{
    console.log(`value: ${value}`)
})

/* eslint-disable no-unused-vars */
/**
 * in keyword is used to find the key in the object
 * push and pod is sued to add and remove values from the array
 * spread operator can be used in both arrays and objects
 */

/**
 * Sum all the values of an array
 */

const array1 = [0, 1, 2, 3];
const totalSum = array1.reduce((accumulator, currentvalue) => {
    return accumulator + currentvalue;
})
//console.log(totalSum);
const totalSum34 = array1.reduce((accumulator, currentvalue)=> accumulator + currentvalue, 0)
//console.log(totalSum34);

/**
 * Sum of values in an object array
 */
let initialvalue = 0;
let objectArray234 = [{x: 1}, {x: 2}, {x: 3}];
// let totalSum1 = objectArray.reduce((accumulator, currentvalue)=>{
//     return accumulator + currentvalue.x;
// }, initialvalue);
//console.log(totalSum1)
const totalSum2345 = objectArray234.reduce((accumulator, currentvalue) => {
    return accumulator + currentvalue.x}, 0);
//console.log(totalSum2345)

/**
 * Flatten an array of arrays
 */
let unFlatternArray = [[0, 1], [2, 3], [4, 5]];
let flatarray = unFlatternArray.reduce((newArray, currentvalue) =>{
    return newArray.concat(currentvalue);
}, [])
//console.log(flatarray)
const flatArray = unFlatternArray.reduce((accumulator, currentvalue)=> accumulator.concat(currentvalue), [])
//console.log(flatArray);

/**
 * Counting instances of values in an object
 */

let names = ['Alice', 'Bob', 'Tiff', 'Bruce', 'Alice'];
let countingInstance = names.reduce((instance, initialvalue)=>{
    //console.log(`${JSON.stringify(instance)}, ${initialvalue}`);
    if(initialvalue in instance) instance[initialvalue]++;
    else instance[initialvalue] = 1
    return instance;
},{});

const instanceCount = names.reduce((accumulator, currentvalue) => {
    if(currentvalue in accumulator) accumulator[currentvalue]++;
    else accumulator[currentvalue] = 1;
    return accumulator;
}, {})
//console.log(instanceCount);

/**
 * Grouping objects by a property
 */

let people = [
    { name: 'Alice', age: 21 },
    { name: 'Max', age: 20 },
    { name: 'Jane', age: 20 }
];

let gropedPeople = people.reduce((acc, initialvalue)=>{
    if(initialvalue.age in acc){
        acc[initialvalue.age].push(initialvalue.name);
    }else {
        acc[initialvalue.age] = [initialvalue.name];
    }
    return acc;
},{});

const groupedPpl = people.reduce((accumulator, currentvalue)=>{
    if(currentvalue.age in accumulator) accumulator[currentvalue.age].push(currentvalue.name);
    else accumulator[currentvalue.age] = [currentvalue.name];
    return accumulator;
}, {})

//console.log(groupedPpl);

/**
 * Bonding arrays contained in an array of objects using the spread operator and initialValue
 */

let books = ['first book'];

let friends = [{
    name: 'Anna',
    books: ['Bible', 'Harry Potter'],
    age: 21
}, {
    name: 'Bob',
    books: ['War and peace', 'Romeo and Juliet'],
    age: 26
}, {
    name: 'Alice',
    books: ['The Lord of the Rings', 'The Shining'],
    age: 18
}]

let updatedBooks = friends.reduce((acc, init)=>{
    return [...acc, ...init.books];
},books)


const updatedBooks1 = friends.reduce((accumulator, currentvalue) => [...accumulator, ...currentvalue.books], books);

//console.log(updatedBooks);

/**
 * remove duplicates
 */
//Remove duplicate items in an array
let myArray = ['a', 'b', 'a', 'b', 'c', 'e', 'e', 'c', 'd', 'd', 'd', 'd'];
let noDupilcatesArray = myArray.reduce((acc, init)=>{
    if(acc.indexOf(init) === -1 ) acc.push(init)
    return acc;
},[]);

const noDupilcatesArray111 = new Set(myArray);
console.log(Array.from(noDupilcatesArray111));



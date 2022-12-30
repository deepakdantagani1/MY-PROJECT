/* eslint-disable no-unused-vars */

//array.reverse();

//The Array.isArray() method determines whether the passed value is an Array

//The concat() method is used to merge two or more arrays. This method does not change the existing arrays, but instead returns a new array.

//The every() method tests whether all elements in the array pass the test implemented by the provided function. It returns a Boolean value.
let someNumbers = [12, 5, 8, 130, 44];
let result = someNumbers.every(number => {
    return number >= 1;
})//console.log(result);

//The filter() method creates a new array with all elements that pass the test implemented by the provided function.
let fewnumber = [12, 5, 8, 130, 44];
let smallerNumbers = fewnumber.filter(number => {
    return number <= 10
});//console.log(smallerNumbers);
const array = [-3, -2, -1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
let primenumbers = array.reduce((acc,init)=>{
    if(!(init%2 ===  0) && init > 0) acc.push(init);
    return acc;
},[])//console.log(primenumbers);
let arr = [
    { id: 15 },
    { id: -1 },
    { id: 0 },
    { id: 3 },
    { id: 12.2 },
    { },
    { id: null },
    { id: NaN },
    { id: 'undefined' }
]

let validData = arr.reduce((acc, init)=>{
    if(!init.id == false || !init.id === 'undefined') acc.push(init)
    return acc;
},[]);//console.log(validData)

//The find() method returns the value of the first element in the provided array that satisfies the provided testing function.

//The findIndex() method returns the index of the first element in the array that satisfies the provided testing function. Otherwise, it returns -1,
//indicating that no element passed the test.

//****The flat() method creates a new array with all sub-array elements concatenated into it recursively up to the specified depth.
const arr1 = [0, 1, 2, [3, 4]];//console.log(arr1.flat());// expected output: [0, 1, 2, 3, 4]
const arr2 = [0, 1, 2, [[[3, 4]]]];//console.log(arr2.flat(2));// expected output: [0, 1, 2, [3, 4]]

//The forEach() method executes a provided function once for each array element.

//The includes() method determines whether an array includes a certain value among its entries, returning true or false as appropriate.

//The indexOf() method returns the first index at which a given element can be found in the array, or -1 if it is not present.

//The join() method creates and returns a new string by concatenating all of the elements in an array (or an array-like object),
//separated by commas or a specified separator string.
//If the array has only one item, then that item will be returned without using the separator.

//The lastIndexOf() method returns the last index at which a given element can be found in the array,
//or -1 if it is not present. The array is searched backwards, starting at fromIndex.

//The map() method creates a new array populated with the results of calling
//a provided function on every element in the calling array.




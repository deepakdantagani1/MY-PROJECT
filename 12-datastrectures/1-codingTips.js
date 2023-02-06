/**
 * init max or min
 * min = Integer.MAX_VALUE;
 * min = Integer.MIN_VALUE;
 */

/**
 * stack init
 * Stack <Integer> minStack = new Stack<Integer>();
 * push(x);
 * pop();
 * isEmpty();
 * peek();
 */

/**
 * HashMap init
 * Map<String,Integer> romanNumeralMap=new HashMap<String,Integer>();
 *
 * iterate values
 * for (String url : gfg.values())
            System.out.println("value: " + url);
    }
 */

/**
 * matrix init
 * boolean [][] storage = new boolean[bucket][]
 * int result[] = { -1, -1 };
 */

/**
 * int mid = low + ((high - low) / 2); ==> intiget overflow
 */

/**
 * int max = matrix[0].length-1;
 */

/**
 * init hashset
 * Set<Integer> set = new HashSet<>(Arrays.asList(arr));
 */

// function reverse(str) {
//   // return str.split('').reverse().join('');
//   let arrayStr = str.split('');
//   let high = arrayStr.length-1;
//   let low = 0;
//   while(low < high){
//       let temp = arrayStr[low];
//       arrayStr[low] = arrayStr[high];
//       arrayStr[high] = temp;
//       low++;
//       high--;
//   }
//   return arrayStr.join('');
// }

// // reverse('abcd')
// function palindrome(str) {
//   if(!str) return false;
//   // //return str === str.split('').reverse().join('');
//   // return str === str.split('').reduce((reverse, currentValue) =>{
//   //     return currentValue + reverse;
//   // }, '' );
//   let strArray = str.split('');
//   let high = strArray.length-1;
//   let low = 0;
//   while(low < high){
//     if(strArray[low]!==strArray[high]) return false;
//     low++;
//     high--;
//   }
//   return true;
// }

// palindrome('aba');


// function reverseInt(n) {
//   if(!n) return n;
//   if(n<0) return reverse(n * -1) *-1;
//   return reverse(n);
// }

// function reverse(n){
//   let intReverseNumber = 0;
//   while(n>0){
//   intReverseNumber = n%10 +  intReverseNumber*10;
//   n = Math.floor(n/10);
//   }
//   return intReverseNumber;
// }

// reverseInt(-57);




// function maxChar(str) {
//   let charCount = str.split('').reduce((charCountObj, currentVal) =>{
//     if(!charCountObj[currentVal]) charCountObj[currentVal] = 1;
//     else charCountObj[currentVal]++;
//     return charCountObj;
//   }, {});
//   let max=0;
//   let charMax = ''
//   for(const property in charCount){
//     if(charCount[property] > max) {
//       max = charCount[property];
//       charMax = property;
//     }
//   }
//   return charMax;
// }


// maxChar('qqqm');

// function fizzBuzz(n) {
//   let counter =1;
//   while(counter<=n){
//       if(counter%3 ===0 && counter%5===0) console.log('fizzbuzz')
//       else if(counter%3===0) console.log('fizz');
//       else if(counter%5===0) console.log('buxx');
//       else console.log(counter)
//       counter++;
//   }
// }

// fizzBuzz(15);

// function chunk(array, size) {
// //init result list
// //loop through the array
// //creare noew loaclArray, every time lenght === size, create
// //array.
// // if all the loop is done, needs to ahndle the last values
//     let resultArray = [];
//     let localArray = [];
//     for(let value of array){
//         if(localArray.length ===size){
//             resultArray.push(localArray);
//             localArray = [];
//         }
//         localArray.push(value);
//     }
//     resultArray.push(localArray);
//     return resultArray;
//     // let localArray = [];
//     // return array.reduce((resultList, currentValue) => {
//     //     if(localArray.length === size){
//     //         resultList.push(localArray);
//     //         localArray = [];
//     //         return resultList;
//     //     }
//     //     localArray.push(currentValue);
//     // }, []);

// }

// console.log(chunk([1, 2, 3, 4, 5], 2))

// function anagrams(stringA, stringB) {
//     if(stringA.length !== stringB.length) return false;
//     const stringACharObj = getStringCharObj(stringA);
//     const stringBCharObj = getStringCharObj(stringB);
//     if(Object.keys(stringACharObj).length !== Object.keys(stringBCharObj).length ) return false;
//     for(let obj in stringACharObj){
//         if(stringACharObj[obj] != stringBCharObj[obj]) return false;
//     }
//     return true;
// }

// function getStringCharObj(string){
//     const formatedString = string.replace(/[^a-zA-Z]/g, "").toLowerCase();
//     let resultObj = {};
//     for(let char of formatedString){
//         if(resultObj[char]) resultObj[char]++;
//         else resultObj[char] = 1;
//     }
//     return resultObj;
// }

// console.log(anagrams('One one', 'One One c'));

// function capitalize(str) {
//     // return str.split(' ').reduce((capitalizeString, currentValue)=>{
//     //     capitalizeString += ' '+ currentValue.charAt(0).toUpperCase() + currentValue.substring(1,currentValue.length);
//     //     return capitalizeString;
//     // }, '')
//     if(!str) return;
//     let capitalizeStr = str.charAt(0).toUpperCase();
//     for(let i=1; i<str.length; i++){
//         if(str.charAt(i) === ' '){
//             capitalizeStr += ' ' + str.charAt(i+1).toUpperCase();
//             i++
//         }
//         else capitalizeStr += str.charAt(i);
//     }
//     return capitalizeStr;
// }

// console.log(capitalize('look, it is working!'))

// function steps(n) {
//     // for(let i=0; i<n; i++){
//     //     let setp = '';
//     //     let symbelLenght = i+1;
//     //     for(let y=0; y<n;y++){
//     //         if(symbelLenght > 0) {
//     //             setp += '#';
//     //             symbelLenght --;
//     //         }
//     //         else setp += ' '
//     //     }
//     //     console.log(setp);
//     // }
//     /**
//      * 4-1
//      * 3-2
//      * 2-3
//      * 1-4
//      */
//     let stepSymbolCount = 1;
//     let step= '';
//     let column = 1;
//     printStep(stepSymbolCount, n, step, column);
// }

// function printStep(stepSymbolCount, n, step, column){
//     if (stepSymbolCount > n) return;

//     if(column>n){
//         console.log(step);
//         column = 1;
//         return printStep(++stepSymbolCount, n, '', 1)
//     }

//     if(step){
//       step += '#'
//     } else {
//       step +- ' '
//     }
//     printStep(stepSymbolCount, n, step, column);

//     // let localStepCount = stepSymbolCount+1;
//     // if(stepSymbolCount >= n) return;
//     // let stepString = '';
//     // for(let i=0; i<n; i++){
//     //     if(localStepCount !== 0) {
//     //         stepString += "#";
//     //         localStepCount --
//     //     } else {
//     //         stepString += ' '
//     //     }
//     // }
//     // console.log(stepString);
//     // printStep(++stepSymbolCount, n);

// }

// steps(4);

// function pyramid(n) {
//     //columns = 2*n-1
//     //rows = n
//     //leftPoint = Math.float(n/2+1), right = leftPoint = Math.float(n/2+1)
//     // base condition leftPoint === 0
//     //print if columns === 2*n-1;
//     let row = 0;
//     let column =0;
//     let leftPointer = Math.floor((2*n-1)/2)+1;
//     let rightPointer = leftPointer;
//     let pyramid = ''
//     printPyramid(n,row, column, leftPointer, rightPointer, pyramid);
//     return;
// }
// function printPyramid(n,row, column, leftPointer, rightPointer, pyramid){
//     if(row === n) return;
//     if(pyramid.length === 2*n-1){
//         console.log(pyramid);
//         return printPyramid(n, ++row, 0, leftPointer-1, rightPointer+1, '')
//     }
//     if(column+1 >= leftPointer && column+1 <= rightPointer) pyramid += '#'
//     else pyramid += ' '
//     return printPyramid(n, row, column+1, leftPointer, rightPointer, pyramid);
// }

// pyramid(10);
// //      '  #  '
// //      ' ### '
// //      '#####'

// function vowels(str) {
//     if(!str) return 0;
//     let vowelsSet = new Set(['a', 'e', 'i', 'o', 'u']);
//     let count =0;
//     for(let char of str){
//         if(vowelsSet.has(char.toLocaleLowerCase())) count++
//     }
//     return count;
// }

// console.log(vowels('what amma'));

function matrix(n) {
    // i,j are pointers
    //rightwall, downwall, leftwall, topwall
    // first i=0, j++ till j < rightwall
    // then i++, till i > downwall
    //then j--, till j< leftwall
    //then i--, till i>towall
    //repea
    let resultList = new Array();
    for(let i=0; i<n; i++){
        resultList.push(new Array());
    }
    let i=0;
    let j=0;
    let number = 1;
    let rightwall = n-1, downwall = n-1, leftwall = 0, upwall =0;
    buildMatrix(rightwall, downwall, leftwall, upwall, n, resultList, number, i, j);
    return resultList;
}

function buildMatrix(rightwall, downwall, leftwall, upwall, n, resultList, number, i, j){
    if(rightwall < leftwall) return;
    for(let k = j; k <= rightwall; k++){
        resultList[i][k] = number;
        number++;
    }
    j=rightwall;
    upwall++;
    for(let k = i+1; k<= downwall; k++){
        resultList[k][j] = number;
        number++;
    }
    i= downwall;
    rightwall--;
    for(let k= j-1; k>= leftwall; k--){
        resultList[i][k] = number;
        number++;
    }
    j=leftwall;
    downwall--;
    for(let k=i-1; k>=upwall;k--){
        resultList[k][j] = number;
        number++;
    }
    i=upwall;
    leftwall++
    return buildMatrix(rightwall, downwall, leftwall, upwall, n, resultList, number, i, j+1);
}


console.log(matrix(5));
//     [[1,   2,  3, 4],
//      [12, 13, 14, 5],
//      [11, 16, 15, 6],
//      [10,  9,  8, 7]]





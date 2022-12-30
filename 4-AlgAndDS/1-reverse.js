/* eslint-disable no-unused-vars */
/* eslint-disable indent */


function reverseString(str) {
  let reversed = ''

  for (let char of str) {
    console.log(reversed + ' ' + char);
    reversed = char + reversed;
  }
  return reversed;
}

//console.log(reverseString('vsfbbf'));


function palindrome(str) {
  return str.split('').reduce((acc, init) => acc = init + acc, '') === str;
}

//console.log(palindrome('iki'));

function reverseInt(n) {
  return n.toString().split('').reduce((acc, init) => {
    if (init === '+' || init === '-') return acc;
    //if(acc.lenght === 0 && acc === 0) return acc;
    acc = init + acc
    if (acc[0] === 0) return acc.shift();
  }, '')
}

//console.log(reverseInt(500));

function chunk(array, size) {
  let tempArray = [];
  let chunkCount = Math.floor(array.length / size);
  let tempCounter = 0;
  return array.reduce((acc, init) => {
    tempArray.push(init)
    console.log(tempArray)
    console.log(chunkCount + ' ' + tempCounter)
    if (chunkCount === tempCounter) {
      acc.push(tempArray);
    }
    if (tempArray.length === size) {
      acc.push(tempArray);
      tempArray = [];
      tempCounter++;
    }
    return acc;
  }, []);
}

//console.log(chunk([1,2,3,4,5], 2));


function maxCharCount(sentence) {
  const charList = sentence.split('');
  let maxChar = '';
  let maxCharCount = 0;
  const charCountObj = charList.reduce((obj, curr) => {
    if (Object.keys(obj).includes(curr)) {
      obj[curr] = obj[curr] + 1;
    }
    else {
      obj[curr] = 1;
    }
    return obj;
  }, {});
  console.log(charCountObj);
  for (let char in charCountObj) {
    if (charCountObj[char] > maxCharCount) {
      maxChar = char;
      maxCharCount = charCountObj[char];
    }
  }
  return maxChar
}

console.log(maxCharCount('lolaidvidvndvrtyujk8888'));

/**
 * @param {number} x
 * @return {boolean}
 * not possible to iterate through the number
 * only way is to get the last number of the given number
 * also, can't maintain a for loop as we don't have the length
 * for the better performace to reduce thesearch to half
 * if there is a if condition with returrn, try to reduce the code
 * if there are tow return statements, then reduce it with the || condition
 *  time complaxity = O(logn)
 * space complaxity = O()
 */
var isPalindrome = function(x) {
    // if(x<0) return false;
    // let stringNumber = x.toString();
    // let midPoint = Math.floor(stringNumber.length/2) +1;
    // for(let i=0;i<midPoint;i++){
    //     if(stringNumber[i]!== stringNumber[stringNumber.length-i-1]) return false;
    // }
    // return true;
    //123
    //1234
    if (x<0 || x%10 ===0 && x!==0) return false;
    let reverseNumber = 0;
    while (reverseNumber < x){
        reverseNumber = reverseNumber * 10 + x % 10;
        x = Math.floor(x / 10);
    }
    // if(reverseNumber > x ) return Math.floor(reverseNumber/10) === x;
    // return reverseNumber === x;
    return reverseNumber === x || Math.floor(reverseNumber/10) === x;
};

isPalindrome(123456)

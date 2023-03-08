/**
 * @param {string} s
 * @return {number}
 * understand the question very carefully
 *
 */
var longestPalindrome = function(s) {
    if(!s.length) return 0;
    let resultSum =0;
    let charCountMap = new Map();
    let foudOddCount = false;
    for(let i=0; i<s.length;i++){
        const sChar = s.charAt(i);
        if(charCountMap.has(sChar)) charCountMap.set(sChar, charCountMap.get(sChar)+1);
        else charCountMap.set(sChar, 1);
    }

    for(let value of charCountMap.values()){
        if(value%2===0) resultSum += value;
        else {
            resultSum += value -1;
            foudOddCount = true;
        }
    }

    return foudOddCount ? resultSum +1 : resultSum ;

};

longestPalindrome();

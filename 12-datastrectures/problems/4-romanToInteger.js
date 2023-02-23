/**
 * @param {string} s
 * @return {number}
 * string method chatAt(); not getChar
 * let myMap = new Map([['key1', 'value1'], ['key2', 'value2'], ['key3', 'value3']]);
 */
var romanToInt = function(s) {
    let total = 0;
    const map = new Map([["I", 1], ["V", 5], ["X", 10], ["L", 50], ["C", 100], ["D", 500], ["M", 1000]]);
    for(let i=0;i<s.length;i++){
        if(i !== s.length-1 && map.get(s.charAt(i)) < map.get(s.charAt(i+1))) {
            total += map.get(s.charAt(i+1)) - map.get(s.charAt(i));
            i++;
        }
        else {
            total += map.get(s.charAt(i));
        }
    }
    return total;
};

romanToInt("II");

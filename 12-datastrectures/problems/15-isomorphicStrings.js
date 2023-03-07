/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 * map and set methods
 * map ==> has, set, get
 * set ++> add, has, get
 */
var isIsomorphic = function(s, t) {
    let charSet = new Set();
    let charMap = new Map();
    if(s.length !== t.length) return false;
    for(let i=0; i<s.length; i++){
        const sChar = s.charAt(i);
        const tChar = t.charAt(i);

        if(!charMap.has(sChar)){
            if(charSet.has(tChar)) return false;
            charMap.set(sChar, tChar)
            charSet.add(tChar)
        } else {
            if(charMap.get(sChar) !== tChar) return false
        }
    }
    return true;
};

isIsomorphic()

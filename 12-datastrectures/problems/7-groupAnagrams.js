/**
 * @param {string[]} strs
 * @return {string[][]}
 * in javascript, use charCodeAt along with the promenumbers to get a unique numbers for stings together
 * time complexity of the first solution is n*mlog(m);
 * time complexity pf secound solution is n*m;
 * str.charCodeAt(i) - 97 to get the indexed value of the lower alphabets
 */
var groupAnagrams = function(strs) {
    // let resultObject = {};
    // const primes = [3,5,7,11,13,17,19,23,29,31,37,41,43,47,53,59,67,71,73,79,83,89,97,101,103, 107];
    // strs.forEach(str => {
    //     const sortedStrig = str.split('').sort().join('');
    //     if(!resultObject[sortedStrig]) resultObject[sortedStrig] = [str];
    //     else resultObject[sortedStrig].push(str);
    // });
    // return Object.values(resultObject);

    let resultObject = {};
    const primes = [3,5,7,11,13,17,19,23,29,31,37,41,43,47,53,59,67,71,73,79,83,89,97,101,103, 107];
    strs.forEach(str => {
        let primeMult = 1;
        for(let i = 0; i<str.length; i++){
            const primeIndex = str.charCodeAt(i) - 97;
            primeMult *= primes[primeIndex];
        }
        if(!resultObject[primeMult]) resultObject[primeMult] = [str]
        else resultObject[primeMult].push(str);
    })
    return Object.values(resultObject);
};

groupAnagrams();

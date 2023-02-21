/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 * time complesity o(n2)
 * space complexity 0(1)
 * when even thre is o(n2) as time complexity and o(1) as space complexity,
 we can reduce the time complixity to o(n) and space complixity as o(n)
 * if we need a value that alerady iterated, first thought should be hashmap or hashset
 * map methods ==> has, get, delete, set
 * to find key in the object ==> key in object
 */
var twoSum = function(nums, target) {
    // let result = [];
    // for(let i=0; i<nums.length;i++){
    //     for(let j=i+1; j<nums.length;j++ ){
    //         if(nums[i] + nums[j] === target) {
    //             result.push(i);
    //             result.push(j);
    //             return result;
    //         }
    //     }
    // }
    // return result;

    // let map = new Map();
    // for(let i=0;i< nums.length;i++){
    //     let diffrence = target - nums[i];
    //     if(map.has(diffrence)){
    //         return [i, map.get(diffrence)];
    //     }
    //     map.set(nums[i], i)
    // }
    // return [];

    let map = {};
    for(let i=0;i< nums.length;i++){
        let difference = target - nums[i];
        if(difference in map){
            return [i, map[difference]]
        }
        map[nums[i]] = i;
    }
    return [];
};

twoSum([1, 24, 5], 25);









/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 * more practice on order of steps
 * more practice on the examples with different usecases
 */
var subarraySum = function(nums, k) {
    const map = new Map();
    map.set(0, 1)
    let runningSum = 0;
    let resultSum = 0;
    for(let i=0; i< nums.length; i++){
        runningSum += nums[i];
        if(map.has(runningSum - k)) {
            resultSum += map.get(runningSum - k);
        }
        //code refactoring
        map.set(runningSum, (map.get(runningSum) || 0) + 1);
        //map.set(runningSum, map.has(runningSum) ? map.get(runningSum) + 1 : 1);
    }
    return resultSum;
};

subarraySum();

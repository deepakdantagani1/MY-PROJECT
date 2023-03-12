//-----------------------nexted iteration, then potential solutions-----------------
/**
 * hashing
 * two pointes
 * sliding windlow
 * binary search
 * DP
 * running sum
 */

/**
 * running sum
 *
 *  _ _ _ _ _ _ _ _ _ _
 *  ---a-----
 *  -----------b-------
 *           ---(b-a)----
 *
 *
 * handle exception at the buginning
 */

/**
 * @param {number[]} nums
 * @return {number}
 * 1 0 1 0 1 1 1 1 0 0 1 0 1
 * time complexity is o(n);
 */
var findMaxLength = function(nums) {
    const map = new Map();
    //to handle the edge cause
    map.set(0, -1);
    let maxLength = 0;
    let runningSum =0;
    for(let i=0; i<nums.length; i++){
        //code refactoring
        runningSum += nums[i] === 0? -1: 1;
        //runningSum = nums[i] === 0? runningSum - 1: runningSum + 1;
        if(map.has(runningSum))maxLength = Math.max(maxLength, i - map.get(runningSum))
        else map.set(runningSum, i)
    }
    return maxLength
};

findMaxLength();

/**
 * @param {number[]} nums
 * @return {number}
 * [1,2,3,1]
 * [1]
 * [1, 2]
 */
var findPeakElement = function(nums) {
    let left = 0;
    let right = nums.length-1;
    while(right>left){
        const mid = left + Math.floor((right-left)/2);
        /**
      * we can remove this line of code too
      * accessing an array that has no value returns nudefined, and undefined === 1 is false;
      * if(mid === right) return mid;
       */
        if(nums[mid] < nums [mid+1]) left = mid+1;
        else right = mid;
    }
    return right;
};

findPeakElement();

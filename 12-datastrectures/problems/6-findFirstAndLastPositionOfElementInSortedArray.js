/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 * nums = [2,2], target = 2
 * take more example before write the logic
 *
 */
var searchRange = function(nums, target) {
    let left = 0;
    let right = nums.length - 1;
    let result = [-1, -1];
    let mid = 0;
    //finding first position;
    while(right >= left){
        mid = left + Math.floor((right-left)/2);
        if(nums[mid] === target){
            result[0] = mid;
            if(result[1] === -1) result[1] = mid;
            if(mid === 0) break;
            if(nums[mid-1] !== target) break;
        }
        if(target <= nums[mid]) right = mid -1;
        else left = mid +1;
    }

    //finding right position;
    left = mid +1;
    right = nums.length-1
    while(left <= right){
        mid = left + Math.floor((right-left)/2);
        if(nums[mid] === target){
            if(result[0]===-1) result[0] = mid;
            result[1] = mid;
            if(mid === nums.lenght -1 ) break;
            if(nums[mid +1] !== target) break;
        }
        if(target >= nums[mid]) left = mid +1;
        else right = mid -1;
    }
    return result;
};

searchRange([1,1], 1);

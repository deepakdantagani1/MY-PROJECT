/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 * mid = low + Math.floor((high-low)/2);
 * time complexity = O(longn)
 * space complexity = o(1)
 * init a veribale in the scope if not used outside;
 * make sure to use right data type
 */

//[4,5,6,7,0,1,2]
var search = function(nums, target) {
    //init targetIndex
    // init left, right, mid
    let left = 0
    let right = nums.length-1;
    //let middle = 0;
    // while right is >= left
    while(right >= left){
        //calculate the middle;
        const middle = left + Math.floor((right-left)/2);
        // if mid === target return targetIndex
        if(nums[middle] === target) return middle;
        // if left is sorted
        if(nums[left] < nums[middle]){
            // and it is in the range, then right = mid -1;
            if(nums[middle]>= target && nums[left] <= target) right = middle -1;
            //else left = mid +1
            else left = middle + 1;
        }
        // else right is sorted
        // if it is in the range, left = mid +1
        // else rigth = mid -1
        else {
            if(nums[middle] <= target && nums[right] >= target) left = middle+1
            else right = middle -1
        }
    }
    return -1;
};

search([4,5,6,7,0,1,2], 0);

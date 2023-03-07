/**
 * @param {number[]} nums
 * @return {number}
 * in binary search, o(log n), if we know only one side is sorted and other side can any be the result
 then don't incremtn ot decrement the other side, because it can also have the result value.
 * [4,5,6,7,8,0,1,2]
 * [0,1,2,4,5,6,7]
 * [9,0,1,2,3,4,5]
 * [0]
 * [2,1]
 * [3,1,2]
 */
// var findMin = function(nums) {
//     let left = 0;
//     let right = nums.length-1;
//     if(nums[left] <= nums[right]) return nums[left];
//     while(right>= left){
//         const middle = left + Math.floor((right- left)/2);
//         if(nums[middle] > nums[middle+1]) return nums[middle+1];
//         if(nums[middle] < nums[middle-1] && nums[middle]< nums[middle-1]) return nums[middle];
//         if(nums[left] < nums[middle]) left = middle+1;
//         else right = middle-1;
//     }
// };

function findMin(nums) {
    let left = 0;
    let right = nums.length - 1;

    while (left < right) {
        const middle = left + Math.floor((right-left)/2);
        if(nums[middle]< nums[right]){
            right = middle;
        } else {
            left = middle+1;
        }
    }

    return nums[left];
}

findMin()

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
    const middle = left + Math.floor((right - left) / 2);
    if (nums[middle] < nums[right]) {
      right = middle;
    } else {
      left = middle + 1;
    }
  }

  return nums[left];
}

// findMin()

/**
 * [3,4,5,1,2]
 * [3, 4, 5, 6]
 * [5,3]
 * [5,1,2]
 * [9,1,2,3,4]
 */
const findMin2 = (arr) => {
  if (!Array.isArray(arr)) {
    throw new TypeError("input must be an array");
  }

  let low = 0;
  let high = arr.length - 1;

  return arr[low];
};

//console.log(findMin([3, 4, 5, 6, 7, 10, 13, 15, 17, 1, 2]));

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 * ==> distinct values
 * ==> 1 <= k < nums.length, where k is index
 * ==> nums
 *
 * ==> if there are two sorted, or if and else conditions(branch then into two possibilities. )
 *
 * ==> [4,5,6,7,0,1,2] find 5 *****low =0, mid =1, high = 2 if sorted, (find if it is in the range(yes, move sorted array range), else move to non sorted array)
 * ==> [4,5,6,7,0,1,2] find 4 low =4, mid =5, high = 7
 * ==> [4,5,6,7,8,9,2] find 5
 * ==> [4,1,2,3,4,5,6] find 5 low =5, mid =5, high = 6 else , check right sorted is in the range if yes(move right else move left)
 * ==> [4] find 4
 * ==> [4] find 1
 * ==> [4, 5, 6, 7] find 6
 * ==> [7, 1], find 1 ## low = 7, high = 1, mid = 7
 * ==> []
 *
 */
var search = function (nums, target) {
  if (!Array.isArray(nums)) {
    throw new TypeError("Input must be an array");
  }

  if (nums.length === 0) {
    return -1;
  }

  let low = 0;
  let high = nums.length - 1;

  while (low <= high) {
    const mid = low + Math.floor((high - low) / 2);

    if (nums[mid] === target) return mid;

    //left is sorted
    if (nums[low] <= nums[mid]) {
      //check if target is with in the sorted array range, move left
      if (nums[low] <= target && nums[mid] > target) {
        high = mid - 1;
      }
      // target is not in the sorted array range, move right
      else {
        low = mid + 1;
      }
    }
    // right is sorted [4,1,2,3,4,5,6] find 5
    else {
      if (nums[mid] < target && nums[high] >= target) {
        low = mid + 1;
      } else {
        high = mid - 1;
      }
    }
  }

  return -1;
};

console.log(search([7, 1, 2, 3, 5, 6], 7));

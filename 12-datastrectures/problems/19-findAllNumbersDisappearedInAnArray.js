/**
 * @param {number[]} nums
 * @return {number[]}
 * init list as constant
 * to reduce the space complexity, to to check for change of values that can help with the logic
 */
var findDisappearedNumbers = function(nums) {
    // const numsSet = new Set(nums);
    // let resultList = [];
    // for(let i=0; i< nums.length; i++){
    //     if(!numsSet.has(i+1)) resultList.push(i+1);
    // }
    // return resultList;
    const result = [];
    for(let i=0; i<nums.length; i++){
        if(nums[Math.abs(nums[i])-1] > 0) nums[Math.abs(nums[i])-1] *= -1;
    }

    for(let i=0; i<nums.length; i++){
        if(nums[i]>0){
            result.push(i+1);
        }
    }

    return result;

};

findDisappearedNumbers();

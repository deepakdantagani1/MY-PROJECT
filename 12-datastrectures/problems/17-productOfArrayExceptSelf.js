// /**
//  * @param {number[]} nums
//  * @return {number[]}
//  */
// var productExceptSelf = function(nums) {
//     let result = [];
//     let product = 1;
//     let result2 = [];
//     let finalResult = [];
//     for(let i=0; i< nums.length; i++){
//         if(nums[i]==0){
//             let localProduct = 1;
//             for(let y=0; y<nums.length; y++){
//                 if(y===i) finalResult.push(1);
//                 else {
//                     localProduct *= nums[y];
//                     finalResult.push(0);
//                 }
//             }
//             finalResult[i] = localProduct;
//             return finalResult;
//         }
//         product *= nums[i];
//         result.push(product);
//     }

//     product =1;

//     for(let i= nums.length-1; i>=0;i--){
//         product *= nums[i];
//         result2.push(product);
//     }

//     for(let i=0; i < nums.length; i++){
//         if(nums[i]===0){
//             finalResult.push((result[i] * result2[nums.length-1-i]));
//             continue;
//         }
//         finalResult.push((result[i] * result2[nums.length-1-i])/(nums[i]*nums[i]));
//     }
//     return finalResult;
// };

function productExceptSelf(nums) {
    const n = nums.length;
    const output = new Array(n);
    let product = 1;

    // Calculate the product of all elements to the left of nums[i]
    for (let i = 0; i < n; i++) {
        output[i] = product;
        product *= nums[i];
    }

    // Calculate the product of all elements to the right of nums[i]
    product = 1;
    for (let i = n - 1; i >= 0; i--) {
        output[i] *= product;
        product *= nums[i];
    }

    return output;
}

productExceptSelf();




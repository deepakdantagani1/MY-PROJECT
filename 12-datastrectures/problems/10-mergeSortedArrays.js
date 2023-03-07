/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 * for sorting numbers use array.sort((a, b) => a-b);
 * time complexity n + mlongm
 * space complexity is O(1);


 [1,2,3,3,0,0,0, 0]
[1,2,3] and [2,5,6, 7].
[1,2,2,3,5,6, 7]
 */

var merge = function(nums1, m, nums2, n) {
    // if(n=0) return nums1;
    // for(let i=m; i< nums1.length;i++ ){
    //     nums1[i] = 0;
    // }
    // let y=0
    // for(let i=m; i< nums1.length;i++) {
    //     nums1[i] = nums2[y];
    //     y++;
    // }
    // return nums1.sort((a, b) => a-b);

    if(n===0) return nums1;
    if(m===0) return nums2;
    let mIndex = m-1;
    let nIndex = n-1;
    for(let i= nums1.length-1; i>= 0; i--){
        if(nIndex >=0){
            if(nums2[nIndex] >= nums1[mIndex]){
                nums1[i] = nums2[nIndex];
                nIndex --;
            } else {
                nums1[i] = nums1[mIndex];
                mIndex--;
            }
        } else {
            nums1[i] = nums1[mIndex];
            mIndex --;
        }
    }
    return nums1;
}

console.log(merge([0], 0, [1], 1));

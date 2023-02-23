/**
 * @param {number[]} height
 * @return {number}
 * use Math.min() to get the min value
 *
 */
var maxArea = function(height) {
    // let maxArea = 0;
    // for(let x =0; x< height.length;x++){
    //     for(let y=x+1; y< height.length; y++){
    //         let area = (y - x) * Math.min(height[x], height[y]);
    //         if(area > maxArea) maxArea = area;
    //     }
    // }
    // return maxArea;

    // example [1,8,6,2,5,4,8,3,7]
    //init the maxArea
    let maxArea = 0;
    let leftPointer = 0;
    let rightPointer = height.length-1;
    //while leftpoint greater than the right point
    while(rightPointer > leftPointer){
        let area = Math.min(height[leftPointer], height[rightPointer]) * (rightPointer - leftPointer);
        //if(maxArea < area) maxArea = area;
        maxArea = Math.max(maxArea, area);
        if(height[leftPointer] > height[rightPointer]) rightPointer--;
        else leftPointer++;
    }
    //calulate the area and check with maxArea
    // move the shortest hight pointer
    return maxArea;
};

maxArea([1, 2])

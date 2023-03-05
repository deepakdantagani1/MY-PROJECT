/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 * sorted
 * search ===> log(n)
 * 7, 20, 60, 100, 190, 500, 800
 * for just to find the middle but not the value, handle the equa; condition;
 * practice on the scoped values
 *
 */
var searchMatrix = function(matrix, target) {
    // let j = matrix[0].length-1;
    // for(let i=0; i<matrix.length; i++){
    //     if(matrix[i][j] === target) return true;
    //     if(matrix[i][j] > target){
    //         let left = 0;
    //         let right = matrix[i].length -1;
    //         while(right >= left){
    //             const middle = left + Math.floor((right-left)/2);
    //             if(matrix[i][middle] === target) return true;
    //             if(matrix[i][middle] > target) right = middle -1;
    //             else left = middle +1;
    //         }
    //     }
    // }
    // return false;


    let iLeft = 0;
    let iRight = matrix.length-1;
    let y = matrix[0].length-1;
    let middle = 0;
    if(matrix[iRight][y] < target || matrix[0][0] > target) return false;
    while(iRight >= iLeft){
        middle = Math.floor((iRight+iLeft)/2);
        if(iRight === iLeft) break;
        if(matrix[middle][y] === target) return true;
        if(matrix[middle][y] > target) iRight = middle;
        else iLeft = middle +1;
    }

    let i = middle;
    let yLeft =0;
    let yRight = matrix[0].length-1
    while(yRight>=yLeft){
        const localMiddle = Math.floor((yRight+yLeft)/2);
        if(matrix[i][localMiddle] === target) return true;
        if(matrix[i][localMiddle] > target) yRight = localMiddle -1;
        else yLeft = localMiddle +1;
    }
    return false;
}

searchMatrix();

/**
 * function searchMatrix(matrix, target) {
  const m = matrix.length; // number of rows
  const n = matrix[0].length; // number of columns
  let left = 0;
  let right = m * n - 1; // index of the last element in the matrix

  while (left <= right) {
    const mid = Math.floor((left + right) / 2); // middle index
    const midValue = matrix[Math.floor(mid / n)][mid % n]; // value at middle index

    if (midValue === target) {
      return true;
    } else if (midValue < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  return false; // target not found
}

 */

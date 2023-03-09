/**
 * @param {number[][]} mat
 * @return {number[]}
 * if we know th exact length use the arrays
 */
var findDiagonalOrder = function(mat) {
    let direction = 'up';
    let i=0;
    let j=0;
    let k=0;
    const result = new Array(mat.length*mat[0].length)
    while(i< mat.length && j<mat[0].length){
        result[k++] = mat[i][j];
        if(i===0 && direction === 'up' && j!== mat[0].length-1) {
            j++;
            direction = 'down';
        } else if(j=== mat[0].length-1 && direction==='up'){
            i++;
            direction = 'down'
        } else if(j===0 && direction ==='down' && i!== mat.length-1){
            i++;
            direction = 'up'
        } else if(i===mat.length-1 && direction ==='down'){
            j++;
            direction='up';
        } else if(direction === 'up'){
            i--;
            j++
        } else {
            i++;
            j--
        }
    }
    return result;
};

findDiagonalOrder();

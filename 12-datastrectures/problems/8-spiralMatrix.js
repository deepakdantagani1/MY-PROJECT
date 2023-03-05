/**
 * @param {number[][]} matrix
 * @return {number[]}
 * time complixity = o(m*n)
 */
var spiralOrder = function(matrix) {
    let right = matrix[0].length-1
    let left = 0;
    let up =0;
    let down = matrix.length -1
    let direction = 'right';
    let result=[];
    let i=0; let j=0;

    while (right >= left && down>= up){
        result.push(matrix[i][j])
        if(direction === 'right'){
            j++;
            if(j > right){
                i++;
                j--;
                up++
                direction ='down';
            }
        }
        else if(direction === 'down'){
            i++;
            if(i>down){
                j--;
                i--;
                right--;
                direction ='left'
            }
        }
        else if(direction ==='left'){
            j--;
            if(j<left){
                i--;
                down--;
                j++;
                direction = 'up'
            }
        }
        else if(direction ==='up'){
            i--;
            if(i<up){
                j++;
                left ++;
                i++;
                direction ='right'
            }
        }
    }

    return result;

};

spiralOrder()

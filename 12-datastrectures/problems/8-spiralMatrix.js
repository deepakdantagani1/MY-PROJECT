/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function (matrix) {
    const result = [];

    let row = 0;
    let column = 0;

    const directions = [
        [0, 1],  // move right
        [1, 0],  // move down
        [0, -1], // move left
        [-1, 0]  // move up
    ]
    let directionIndex = 0;

    // borders
    let top = 0;
    let right = matrix[0].length -1;
    let bottom = matrix.length -1;
    let left = 0;

    while (top <= bottom && left <= right) {
        result.push(matrix[row][column]);

        //check fo direction change
        const nectRow = row + directions[directionIndex][0];
        const nextColumn = column + directions[directionIndex][1];

        if (nextColumn > right) {
            directionIndex = (directionIndex + 1) % 4;
            top++
        } else if (nectRow > bottom) {
            directionIndex = (directionIndex + 1) % 4;
            right--
        } else if (nextColumn < left) {
            directionIndex = (directionIndex + 1) % 4;;
            bottom--
        } else if (nectRow < top) {
            directionIndex = (directionIndex + 1) % 4;
            left++
        }

        row +=  directions[directionIndex][0];
        column += directions[directionIndex][1];

    }

    return result;

};



/**
notes 

  - Using direction vectors (`directions = [[0,1],[1,0],[0,-1],[-1,0]]`) to simplify direction changes.

  - Data visualization and UI rendering in grid or matrix form.
  - Image processing and pattern-based pixel traversal.
  - Geospatial queries and expanding data retrieval in concentric patterns.
  - Sensor data analysis, adaptive caching, and specialized traversal patterns in large-scale distributed systems.

- The reason for using direction vectors and modular arithmetic (`dirIndex = (dirIndex + 1) % 4`) is to create a clean, cyclic pattern for direction changes, reducing code complexity and error-proneness.

- The thought process involves:
  - Recognizing repeating patterns and cycles.
  - Simplifying complex conditional logic with structured data (arrays of direction steps).
  - Leveraging common patterns (modular arithmetic for cyclical iteration) to improve code clarity and reusability.
 */
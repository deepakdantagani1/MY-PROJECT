/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function (matrix) {
  const result = [];

  let row = 0;
  let column = 0;

  const directions = [
    [0, 1], // move right
    [1, 0], // move down
    [0, -1], // move left
    [-1, 0], // move up
  ];
  let directionIndex = 0;

  // borders
  let top = 0;
  let right = matrix[0].length - 1;
  let bottom = matrix.length - 1;
  let left = 0;

  while (top <= bottom && left <= right) {
    result.push(matrix[row][column]);

    //check fo direction change
    const nectRow = row + directions[directionIndex][0];
    const nextColumn = column + directions[directionIndex][1];

    if (nextColumn > right) {
      directionIndex = (directionIndex + 1) % 4;
      top++;
    } else if (nectRow > bottom) {
      directionIndex = (directionIndex + 1) % 4;
      right--;
    } else if (nextColumn < left) {
      directionIndex = (directionIndex + 1) % 4;
      bottom--;
    } else if (nectRow < top) {
      directionIndex = (directionIndex + 1) % 4;
      left++;
    }

    row += directions[directionIndex][0];
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

/**
 * @param {number} n
 * @return {number[][]}
 */
var generateMatrix = function (n) {
  if (!n || n <= 0) return [];

  const matrix = new Array(n).fill(0).map(() => new Array(n).fill(0));

  //directions
  const directions = [
    [0, 1], //right
    [1, 0], //down
    [0, -1], //left
    [-1, 0], //up
  ];
  let directionIndex = 0;

  let row = 0;
  let column = 0;

  let rightBorder = n - 1;
  let bottomBorder = n - 1;
  let topBorder = 0;
  let leftBorder = 0;

  for (let i = 0; i < n * n; i++) {
    matrix[row][column] = i + 1;
    const [nextRowDirection, nextColumnDirection] = directions[directionIndex];

    if (column + nextColumnDirection > rightBorder) {
      directionIndex = (directionIndex + 1) % 4;
      topBorder++;
    } else if (row + nextRowDirection > bottomBorder) {
      directionIndex = (directionIndex + 1) % 4;
      rightBorder--;
    } else if (column + nextColumnDirection < leftBorder) {
      directionIndex = (directionIndex + 1) % 4;
      bottomBorder--;
    } else if (row + nextRowDirection < topBorder) {
      directionIndex = (directionIndex + 1) % 4;
      leftBorder++;
    }

    const [rowDirection, columnDirection] = directions[directionIndex];
    row += rowDirection;
    column += columnDirection;
  }
  return matrix;
};




/**
 * @param {number} rows
 * @param {number} cols
 * @param {number} rStart
 * @param {number} cStart
 * @return {number[][]}
 */
var spiralMatrixIII = function (rows, cols, rStart, cStart) {
  if (rows === 1 && cols === 1) return [[0, 0]]
  let result = [];
  result.push([rStart, cStart])

  const directions = [
      [0, 1], // right
      [1, 0], // down
      [0, -1], // left 
      [-1, 0] // gith
  ];
  let directionIndex = 0

  let rightborder = cStart + 1;
  let bottomBorder = rStart + 1;
  let leftBorder = cStart - 1;
  let topBorder = rStart - 1;

  let m = rStart + 0
  let n = cStart + 1

  while (result.length < (rows * cols)) {
      console.log(result.length)
      if (m >= 0 && m < rows && n >= 0 && n < cols) {
          result.push([m, n])
      }

      let [nextRow, nextColumn] = directions[directionIndex];

      if (n + nextColumn > rightborder) {
          directionIndex = (directionIndex + 1) % 4;
          rightborder++
      } else if (m + nextRow > bottomBorder) {
          directionIndex = (directionIndex + 1) % 4;
          bottomBorder++
      } else if( n + nextColumn < leftBorder) {
          directionIndex = (directionIndex + 1) % 4;
          leftBorder--
      } else if(m + nextRow < topBorder) {
          directionIndex = (directionIndex + 1) % 4;
          topBorder--
      }

      let [dirRow, dirCol] = directions[directionIndex];
       m += dirRow;
       n += dirCol;

  }

  return result;

};
/* eslint-disable no-unused-vars */
/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function (numRows) {
    if (numRows <= 0 || !Number.isInteger(numRows)) {
        throw TypeError('Input must be a positive non zero intiger')
    }

    if (numRows === 1) return [[1]]
    if (numRows === 2) return [[1], [1, 1]]

    const result = [[1], [1, 1]];
    let previousArray = [1, 1];

    for (let i = 3; i <= numRows; i++) {
        const currentArray = [1];

        for (let y = 1; y < i - 1; y++) {
            currentArray.push(previousArray[y - 1] + previousArray[y])
        }

        currentArray.push(1);

        result.push(currentArray);
        previousArray = currentArray
    }

    return result;

};

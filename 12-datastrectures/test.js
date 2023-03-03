// async function timeOutFor10Min() {
//     return "data";
// }

// timeOutFor10Min().then(data => console.log(data));

/**
 * Check if the array is balanced or not

int[] {10,4,5,7,2,5,5} . This is balanced, 19 vs 19.

Left side of the sum and right side of the sum needs to match.
 */

//Check if the array is balanced or not

const input = [10, 4, 5, 7, 2, 5, 5];

// function balanced(inputList) {
//     const randomIndex = Math.random();
//     let leftSum = 0;
//     let rightSum = 0;
//     for (let i = 0; i < inputList.length; i++) {
//         if (randomIndex >= i) leftSum += inputList[i];
//         else rightSum += inputList[i];
//     }
//     return leftSum === rightSum;
// }

function balanced(inputList) {
    const totalSum = inputList.reduce((acc, current) => {
        return acc + current;
    }, 0);
    let leftSum = inputList[0];
    let rightSum = totalSum - leftSum;
    for (let i = 1; i < inputList.length; i++) {
        if (rightSum === leftSum) return true;
        leftSum = leftSum + inputList[i];
        rightSum = totalSum - leftSum;
    }
    return false;
}

console.log(balanced(input));










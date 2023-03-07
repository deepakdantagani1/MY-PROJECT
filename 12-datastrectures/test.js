// async function timeOutFor10Min() {
//     return "data";
// }

async function handler1() {
    try {
    //do somethig
        return 'data';
    // eslint-disable-next-line no-unreachable
    } catch (error) {
        console.log(error);
        Promise.reject(error)
    }
}

async function handler2() {
    try {
    //do somethig
        return 'data1';
    // eslint-disable-next-line no-unreachable
    } catch (error) {
        console.log(error);
        Promise.reject(error)
    }
}

async function handler3() {
    try {
        //do somethig
        console.log(await handler1());
        console.log(await handler2());
        return 'secussful'
    } catch (error) {
        console.log(error);
        Promise.reject(error)
    }
}

handler3().then(data => console.log(data));

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










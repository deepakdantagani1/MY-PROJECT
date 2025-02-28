/* eslint-disable no-unused-vars */
/**
 * @param {number} n
 * @return {number}
 */
// var climbStairs = function(n) {
//     //Define Your DP Table
//     const dp = new Array(n+1);

//     //Initialize Base Cases
//     dp[0] = 1;
//     dp[1] = 1;

//     //Build the DP Table Iteratively
//     for(let i=2; i<=n; i++){
//         dp[i] = dp[i-1]+ dp[i-2];
//     }

//     return dp[n];

// };

var climbStairs = function (n) {
    if (n < 0 || !Number.isInteger(n)) {
        throw TypeError(`Input must be a non-negative integer`)
    }

    if (n <= 1) return 1;

    let prev1 = 1;
    let prev2 = 1;

    for (let i = 2; i <= n; i++) {
        const current = prev1 + prev2;

        prev1 = prev2;
        prev2 = current
    }

    return prev2;

};

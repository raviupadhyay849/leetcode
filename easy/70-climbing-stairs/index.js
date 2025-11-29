// Question 70: Climbing Stairs
 // Difficulty: EASY
 // URL: https://leetcode.com/problems/climbing-stairs/

/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
    // checking base case
    if(n==1) return 1;
    // prev1,prev2 store the numbers of ways to reach last step
    prev1 = 1;
    prev2 = 2;
    // From step 3 we need to calculate the step using for loop
    for(let i=3; i<=n; i++){
        // initialize the curr variable which store the curr position 
        let curr = prev1+prev2;
        // prev1 become prev2 
        prev1 = prev2;
        // prev2 become pre1
        prev2 = curr;
    }
    return prev2;
};
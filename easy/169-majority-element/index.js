// Question 169: Majority Element
 // Difficulty: EASY
 // URL: https://leetcode.com/problems/majority-element/

/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    let freq = new Map();
    let n = nums.length;
    for (let num of nums) {
        freq.set(num, (freq.get(num) || 0) + 1);
        if (freq.get(num) > Math.floor(n / 2)) {
            return num;
        }
    }
    return -1;
};
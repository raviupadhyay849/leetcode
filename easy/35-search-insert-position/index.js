// Question 35: Search Insert Position
 // Difficulty: EASY
 // URL: https://leetcode.com/problems/search-insert-position/

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
    var position = 0;
    for(let i=0;i<nums.length;i++) {
        if(nums[i]===target) {
            return i;
        } else if(target>nums[i]) {
            position++;
        }
    }
    return position;
};
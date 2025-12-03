// Question 112: Path Sum
 // Difficulty: EASY
 // URL: https://leetcode.com/problems/path-sum/

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} targetSum
 * @return {boolean}
 */
var hasPathSum = function(root, targetSum) {
    if (!root) return false;
    const rec = (node, sum) => {
        if (!node?.left && !node?.right) {
            return sum === targetSum;
        }
        const left = rec(node.left, sum + node.left?.val);
        const right = rec(node.right, sum + node.right?.val);
        return left || right;
    }
    return rec(root, root.val);
};
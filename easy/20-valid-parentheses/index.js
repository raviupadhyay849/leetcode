// Question 20: Valid Parentheses
 // Difficulty: EASY
 // URL: https://leetcode.com/problems/valid-parentheses/

/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    const brackets = {
        '(': ')',
        '{': '}',
        '[': ']'
    };
    const stack = [];
    
    for (i = 0; i < s.length; i++) {
        const lastStackElement = stack[stack.length - 1];
        
        if (brackets[lastStackElement] === s[i]) {
            stack.pop();
        } else if (brackets[s[i]]) {
            stack.push(s[i]);
        } else {
            return false;
        }
    }
    return !stack.length;
};  
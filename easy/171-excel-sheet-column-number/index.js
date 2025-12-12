// Question 171: Excel Sheet Column Number
 // Difficulty: EASY
 // URL: https://leetcode.com/problems/excel-sheet-column-number/

/**
 * @param {string} columnTitle
 * @return {number}
 */
var titleToNumber = function(columnTitle) {
    let result = 0;
    for (let i = 0; i < columnTitle.length; i++) {
        result = result * 26 + (columnTitle.charCodeAt(i) - 64);
    }
    return result;
};      
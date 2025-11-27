// Question 66: Plus One
 // Difficulty: EASY
 // URL: https://leetcode.com/problems/plus-one/

/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
for(let i=digits.length-1; i>=0;i--)
{
    if(digits[i]!==9)
    {
        digits[i]=digits[i]+1;
    }
    else if(i===0)
    {
        digits[i]=0;
        digits.unshift(1);
    }
    else{
        digits[i]=0;
        continue;
    }
    return digits ;
}
};
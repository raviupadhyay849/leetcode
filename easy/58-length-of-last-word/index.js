// Question 58: Length of Last Word
 // Difficulty: EASY
 // URL: https://leetcode.com/problems/length-of-last-word/

/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    for(var i=0;i<s.length;i++){
        if(s[i]!==" ") break;
    }
    s=s.slice(i,s.length);
    for(var j=s.length-1;j>=0;j--){
        if(s[j]!==" ")break;
    }
    s=s.slice(0,j+1);
    var res = s.split(" ")
    return res[res.length-1].length;
};
// Question 28: Find the Index of the First Occurrence in a String
 // Difficulty: EASY
 // URL: https://leetcode.com/problems/find-the-index-of-the-first-occurrence-in-a-string/

/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
  let i = 0;
  let find = false ;
  while(i<haystack.length && find == false){
       const string = haystack.slice(i,i+needle.length);
       if(string === needle){
           find = true ;
       }
       else{
           i++;
       }     
  }
  if(find == true){
      return i ; 
  }
  else{
      return -1 ;
  }  
};
// Question 93: Restore IP Addresses
 // Difficulty: MEDIUM
 // URL: https://leetcode.com/problems/restore-ip-addresses/

/**
 * @param {string} s
 * @return {string[]}
 */
var restoreIpAddresses = function (s) {
    var result = [];
    var segments = [];
    backtrack(s, -1, 3, segments, result);
    return result;
};

function valid(segment) {
    var m = segment.length; // storing the length of each segment
    if (m > 3) {
        // each segment's length should be less than or equal to 3
        return false;
    }
    /* 
      Check if the current segment is valid for either 
      one of the following conditions:
      1. Check if the current segment is less than or equal to 255.  
      2. Check if the length of the segment is 1. The first character of the segment 
         can be `0` only if the length of the segment is 1.
    */
    return segment[0] !== "0" ? parseInt(segment) <= 255 : m === 1;
}

function updateSegment(s, currDot, segments, result) {
    /*
      updateSegment will append the current list of segments 
      to the list of results.
    */
    var segment = s.substring(currDot + 1);
    if (valid(segment)) { // if the segment is acceptable
        segments.push(segment); // add it to the list of segments
        // Utility function to concatenate the entries of the segments list
        // separated by the dot delimiter
        var ip = segments.join(".");
        result.push(ip);
        segments.pop(); // remove the top segment
    }
}

function backtrack(s, prevDot, dots, segments, result) {
    /*
        prevDot : the position of the previously placed dot
        dots : number of dots to place
    */
    var size = s.length;

    // The current dot currDot could be placed
    // in a range from prevDot + 1 to prevDot + 4.
    // The dot couldn't be placed after the last character in the string.
    var maxPos = Math.min(size - 1, prevDot + 4);
    for (var currDot = prevDot + 1; currDot < maxPos; currDot++) {
        var segment = s.substring(prevDot + 1, currDot + 1);
        if (valid(segment)) {
            segments.push(segment); // place dot
            // if all 3 dots are placed, add the solution to output
            if (dots - 1 === 0) {
                updateSegment(s, currDot, segments, result);
            } else {
                backtrack(s, currDot, dots - 1, segments, result); 
                // continue to place dots
            }
            segments.pop(); // remove the last placed segment
        }
    }
}
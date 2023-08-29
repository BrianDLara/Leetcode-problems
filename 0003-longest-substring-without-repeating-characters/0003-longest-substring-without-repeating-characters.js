/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    let substring = new Set();
    let maxCount = 0;
    let left = 0;

    for (let i = 0; i < s.length; i++) {
        while (substring.has(s[i])) {
            substring.delete(s[left]);
            left++;
        }
        substring.add(s[i]);
       if(substring.size > maxCount){
        maxCount = substring.size;
       } 
           
    }

    return maxCount;
};
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    // Step 1: Trim the input string to remove leading and trailing spaces
    let trimmed = s.trim(); 

    // Step 2: Split the trimmed string into words between the spaces
    let arr = trimmed.split(" ");
    
    // Step 3: Find the index of the last word in the array
    let last =  arr.length - 1;

    // Step 4: Return the length of the last word
    return arr[last].length;
}
/**
 * @param {number[]} nums
 * @return {string[]}
 */

var summaryRanges = function(nums) {
    let arr = [];
    let rangeStart = 0; // Keeps track of the start index of the potential range

    for (let i = 0; i < nums.length; i++) {
        let current = nums[i];
        let next = nums[i + 1]; // The number that follows the current number
        
        // Check if the number that follows is not the continuation of the current number
        if (current + 1 !== next) {
            // Check if the current number forms a range by itself (single number)
            if (nums[rangeStart] === nums[i]) {
                arr.push(`${current}`);
            } else {
                arr.push(`${nums[rangeStart]}->${current}`);
            }
            
            // Update the start index of the next potential range
            rangeStart = i + 1;
        }
    }
    return arr;
};

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var getConcatenation = function(nums) {
    // Store the length of the array in a variable called n
    const n = nums.length;
    // Initialize an empty array to store the result
    const result = new Array(2 * n);

    // Loop through the original array
    for (let i = 0; i < n; i++) {
        // Add the current number to the result array at its original index
        result[i] = nums[i];
        // Add the current number to the result array again at the index shifted by n
        // This will create a concatenated array with the original array followed by a copy of it
        result[i + n] = nums[i];
    }

    // Return the concatenated array
    return result;
}
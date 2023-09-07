/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    let sorted = nums.sort((a, b) => (a - b))
    return nums[Math.floor((nums.length - 1) / 2)] // this works because the majority element needs to appear more than half times
};
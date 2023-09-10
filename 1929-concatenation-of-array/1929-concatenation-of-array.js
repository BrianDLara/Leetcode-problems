/**
 * @param {number[]} nums
 * @return {number[]}
 */
var getConcatenation = function(nums) {
    idx = nums.length
    for (let i = 0; i < idx; i++){
        nums.push(nums[i])
    }
    return nums
}
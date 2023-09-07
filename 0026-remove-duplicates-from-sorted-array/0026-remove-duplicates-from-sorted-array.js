/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    let current = 0
    while (current < nums.length){
        let next = current + 1
        if (nums[current] === nums[next]){
            nums.splice(current, 1)
        } else {
            current++
        }
    }
   
};
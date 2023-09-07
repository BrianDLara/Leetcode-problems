/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
   let counter = 0
   for(num of nums){
       if (num !== val){
           nums[counter] = num
           counter++
       }
   }
    return counter
};
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */

// var searchInsert = function(nums, target) {
//     for (let i = 0; i < nums.length; i++) {
//         if (target === nums[i] || nums[i] > target) {
//             return i;
//         }
//     }

//     return nums.length
// };

var searchInsert = function(nums, target) {
   let left = 0
   let right = nums.length - 1
   let answer = nums.length

   while (left <= right){
       let middle = Math.floor((left + right) / 2);
       if (nums[middle] === target){
           return middle
       } else if (nums[middle] < target){
           left = middle + 1
       } else if (nums[middle] > target){
           answer = middle
           right = middle - 1
       }
   }
    return answer
};
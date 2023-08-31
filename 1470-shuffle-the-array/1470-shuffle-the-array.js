/**
 * @param {number[]} nums
 * @param {number} n
 * @return {number[]}
 */
var shuffle = function(nums, n) {
    let arr = []
    let idx = n
    for (let i = 0; i < nums.length; i++){
        if(i === n){
            return arr
        } else {
            arr.push(nums[i], nums[idx])
            idx++
        }
        
    }
    return arr
};
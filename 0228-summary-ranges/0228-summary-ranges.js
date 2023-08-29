/**
 * @param {number[]} nums
 * @return {string[]}
 */

var summaryRanges = function(nums) {
    let arr = []
    let idx = 0
    for (let i = 0; i < nums.length; i++){
        if(nums[i] + 1 !== nums[i + 1]){
            if(nums[idx] === nums[i]){
                arr.push(`${nums[idx]}`)
            } else{
                arr.push(`${nums[idx]}->${nums[i]}`)
            }
            
            idx = i + 1
        } 
    }
    return arr
};
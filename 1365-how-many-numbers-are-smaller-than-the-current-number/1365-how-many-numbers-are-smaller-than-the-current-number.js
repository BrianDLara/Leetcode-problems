/**
 * @param {number[]} nums
 * @return {number[]}
 */
var smallerNumbersThanCurrent = function(nums) {
    let count
    let arr = []
    const size = nums.length - 1
    for (let i = 0; i < nums.length; i++){
        count = 0
        for(let j = 0; j < nums.length; j++){
            if(nums[i] > nums[j]){
                count++
            }
            if(j === size){
                arr.push(count)

            }
           
        }
    }
    return arr;

};
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var getConcatenation = function(nums) {
    arr = [...nums]
    for (let num of nums){
        arr.push(num)
    }
    return arr
}
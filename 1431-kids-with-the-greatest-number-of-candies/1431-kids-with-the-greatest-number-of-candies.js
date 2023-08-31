/**
 * @param {number[]} candies
 * @param {number} extraCandies
 * @return {boolean[]}
 */
var kidsWithCandies = function(candies, extraCandies) {
    let arr = []
    let booleans = []
    let highest = 0
    for (let i = 0; i < candies.length; i++){
        arr.push(candies[i] + extraCandies)
        if (highest < candies[i]){
            highest = candies[i]
        }
    }
    
    for (let i = 0; i < candies.length; i++){
        if (highest <= arr[i]){
            booleans.push(true)
        } else{
            booleans.push(false)
        }
    }
    return booleans
};
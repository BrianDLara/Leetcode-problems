/**
 * @param {number[]} candies
 * @param {number} extraCandies
 * @return {boolean[]}
 */
var kidsWithCandies = function(candies, extraCandies) {
    let decending = candies.slice().sort((a, b) => b - a);    
    let highest = decending[0]
    let arr = []  
    for (let candy of candies){
        arr.push(candy + extraCandies >= highest ? true : false)
    }
    return arr
};
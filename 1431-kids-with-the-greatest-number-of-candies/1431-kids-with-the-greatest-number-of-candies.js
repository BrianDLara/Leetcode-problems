/**
 * @param {number[]} candies
 * @param {number} extraCandies
 * @return {boolean[]}
 */
//////////////////////////////////////////////
////////////////// solution 1 ////////////////
//////////////////////////////////////////////

// var kidsWithCandies = function(candies, extraCandies) {
//     let decending = candies.slice().sort((a, b) => b - a);    
//     let highest = decending[0]
//     let arr = []  
//     for (let candy of candies){
//         arr.push(candy + extraCandies >= highest ? true : false)
//     }
//     return arr
// };

//////////////////////////////////////////////
////////////////// solution 2 ////////////////
//////////////////////////////////////////////

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
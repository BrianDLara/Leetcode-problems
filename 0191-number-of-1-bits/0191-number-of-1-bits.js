/**
 * @param {number} n - a positive integer
 * @return {number}
 */
var hammingWeight = function(n) {
    let counter = 0
    let convert = n.toString(2) 
    for (let number of convert){
        if (number === "1"){
            counter++
        }
    }
    return counter
};
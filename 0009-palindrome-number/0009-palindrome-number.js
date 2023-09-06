/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {

    //Negative numbers cannot be palindromes because when you reverse the digits of a negative number, it         doesn't produce a valid number. 
    //Example: -121 !== 121-
    if (x < 0) return false 
    
    x = x.toString()
    let left = 0
    let right = x.length - 1
    
    while (left < right){
        if (x[left] !== x[right]){
            return false
        } else {
            left++
            right--
        }
    }
    return true
};
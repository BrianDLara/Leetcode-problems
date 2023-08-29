/**
 * @param {number[]} digits
 * @return {number[]}
 */



///////////////////////////////////
// failed original answer /////////
//////////////////////////////////

// this solution has to deal with too many test cases, that its can cause a lot of errors If I don't catch one.


// var plusOne = function(digits) {
//     let num
//     let last = digits.length - 1;
//     console.log(digits[last])

//      if (digits[last] === 9 && digits[last - 1] === 9 && digits[last - 2] === 9){
//         digits.pop()
//         digits.pop()
//         digits.pop()
//         digits.push(1,0,0,0)
//     } else if (digits[last] === 9 && digits[last - 1] === 9){
//         digits.pop()
//         digits.pop()
//         digits.push(1,0,0)
//     } else if (digits[last] === 9 && digits.length === 1){
//         digits.pop()
//         digits.push(1,0)

//     }else if (digits[last] === 9){
//         num = digits[last]
//         digits.pop()
//         digits[last] = num + 1
//         digits.push(0)

//     } else{
//         num = digits[last]
//         digits.pop()
//         digits.push(num + 1)
//     }
//     return digits
// };


///////////////////////////////////
////////// First Solution /////////
///////////////////////////////////


//it's not the most intuitive answer


// var plusOne = function(digits) {
//     let carry = 1; // Start with a carry of 1
//     let last = digits.length - 1;

//     for (let i = last; i >= 0; i--) {
//         let sum = digits[i] + carry;

//         digits[i] = sum % 10; // Set the current digit
//         carry = Math.floor(sum / 10); // Calculate carry for the next iteration

//         if (carry === 0) {
//             // No more carry, exit loop
//             break;
//         }
//     }

//     // If carry is still 1, it means we need to add a new digit at the beginning
//     if (carry === 1) {
//         digits.unshift(1);
//     }

//     return digits;
// };




///////////////////////////////////
////////// Second Solution ////////
///////////////////////////////////

// var plusOne = function(digits) {
//     // join all numbers into one string
//     let join = digits.join('')
    
//     // convert it into a big integer and add 1 to the number
//     let number = BigInt(join) + BigInt(1)

//     // return an array that has been converted back to a string and split
//     return number.toString().split('')
// };


// simplified version
var plusOne = function(digits) {
    return (BigInt(digits.join('')) + BigInt(1)).toString().split('')
};

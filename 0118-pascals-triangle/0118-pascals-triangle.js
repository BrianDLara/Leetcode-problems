/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
    let retVal = []
    
    for (let i = 0; i < numRows; i++){
        let element = []
        
        for (let j = 0; j <= i; j++){
            if (j === 0 || j === i){
                element.push(1)
            } else{
                element.push(retVal[i - 1][j - 1] + retVal[i - 1][j])
            }
        }
        retVal.push(element)
    }
    return retVal
};
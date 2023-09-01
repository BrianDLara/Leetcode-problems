/**
 * @param {number} rowIndex
 * @return {number[]}
 */
var getRow = function(rowIndex) {
    
    // Initialize the first two rows
    let currentRow = [1];
    let previousRow = [1, 1];
    
    if (rowIndex === 0) {
        return currentRow;
    }
    
    if (rowIndex === 1) {
        return previousRow;
    }
    // Generate rows from 2 to rowIndex
    for (let i = 2; i <= rowIndex; i++) {
        currentRow = [1]; // Start with the first element
        
        // Calculate the values using binomial coefficients formula
        for (let j = 1; j < i; j++) {
            currentRow[j] = previousRow[j - 1] + previousRow[j];
        }
        
        currentRow.push(1); // End with the last element
        previousRow = currentRow; // Update the previous row for the next iteration
    }
    
    return currentRow;
};
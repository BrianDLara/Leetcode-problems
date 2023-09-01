/**
 * @param {number[][]} accounts
 * @return {number}
 */
var maximumWealth = function(accounts) {
    let highest = 0
    let count
    for (account of accounts){
        count = 0
        for (let i = 0; i < account.length; i++) {
            console.log(account[i])
            count += account[i]
            if (highest < count){
                highest = count;
                
            }
            
        }
    }
    return highest
};
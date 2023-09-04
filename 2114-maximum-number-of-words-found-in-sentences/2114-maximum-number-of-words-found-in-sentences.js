/**
 * @param {string[]} sentences
 * @return {number}
 */
var mostWordsFound = function(sentences) {
    let max = 0
    for(sentence of sentences){
        const words = sentence.split(' ');
        
        let count = 0;
        for (let i = 0; i < words.length; i++) {
            if (words[i] !== '') {
             count++;
            }   
        
            if (count > max){
                max = count
            }
        }

    }
    
    return max
};
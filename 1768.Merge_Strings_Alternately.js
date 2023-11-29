/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */
var mergeAlternately = function(word1, word2) {
    let res = [];
    let i = 0;
    let j = 0;
    while (i <= word1.length-1 && j <= word2.length-1) {
        res.push(word1[i]);
        res.push(word2[j]);
        i++;
        j++;
    }
    while (i <= word1.length-1) {
        res.push(word1[i]);
        i++;
    }
    while(j <= word2.length-1) {
        res.push(word2[j]);
        j++;
    }
    return res.join('');
};
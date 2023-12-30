/**
1897. Redistribute Characters to Make All Strings Equal
思路：水题
 */
var makeEqual = function(words) {
    if (words.length == 1) return true;
    let hash = new Map();
    for (let word of words) {
        for (let c of word) {
            if (hash.has(c)) hash.set(c, hash.get(c)+1);
            else hash.set(c, 1);
        }
    }
    for (let val of hash.values()) {
        if (val % words.length) return false;
    }
    return true;
};
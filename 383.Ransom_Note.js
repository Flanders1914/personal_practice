/**
383. Ransom Note
思路: hash 表
 */
var canConstruct = function(ransomNote, magazine) {
    let hash = new Map();
    for (let c of magazine) {
        if (hash.has(c)) hash.set(c, hash.get(c)+1);
        else hash.set(c, 1);
    }  
    for (let c of ransomNote) {
        if (hash.has(c) && hash.get(c)) hash.set(c, hash.get(c)-1);
        else return false;
    }
    return true;
};
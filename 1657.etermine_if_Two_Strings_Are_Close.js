/**
1657. Determine if Two Strings Are Close
思路：相当于统计所有的字母出现的个数，然后word1和word2出现的字母集合要相同，并且
字母出现的个数要能对应
 */
var closeStrings = function(word1, word2) {
    let hash1 = new Map();
    let hash2 = new Map();
    if (word1.length != word2.length) return false;

    for (let c of word1) {
        if (hash1.has(c)) hash1.set(c, hash1.get(c)+1);
        else hash1.set(c, 1);
    }
    for (let c of word2) {
        if (hash2.has(c)) hash2.set(c, hash2.get(c)+1);
        else hash2.set(c, 1);
    }
    let arr1 = Array.from(hash1.entries());
    let arr2 = Array.from(hash2.entries());
    if (arr1.length != arr2.length) return false;

    arr1.sort((a,b) => a[1]-b[1]);
    arr2.sort((a,b) => a[1]-b[1]);

    let set = new Set(hash2.keys());
    for (let i = 0; i <= arr1.length-1; i++) {
        if (arr1[i][1] != arr2[i][1]) return false;
        if (!set.has(arr1[i][0])) return false;
    }
    return true;
};

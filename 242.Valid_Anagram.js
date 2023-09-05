/*
242. Valid Anagram
思路：使用hash表
*/
var isAnagram = function(s, t) {
    if (s.length != t.length) return false;
    const hash = new Map();
    for (let c of s) {
        if (hash.has(c)) hash.set(c, hash.get(c)+1);
        else hash.set(c, 1);
    }
    for (let c of t) {
        if (!hash.has(c) || hash.get(c) == 0) return false;
        else hash.set(c, hash.get(c)-1);
    }
    return true;
};
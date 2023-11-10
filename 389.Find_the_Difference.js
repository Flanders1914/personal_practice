/**
389. Find the Difference
思路：hash表
 */
var findTheDifference = function(s, t) {
    let hash = new Map();
    for (let c of s) {
        if (hash.has(c)) hash.set(c, hash.get(c)+1);
        else hash.set(c, 1);
    }
    for (let c of t) {
        if (hash.has(c)) {
            let num = hash.get(c);
            if (num == 0) return c;
            else hash.set(c, num-1);
        } else return c;
    }
};
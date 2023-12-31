/**
1624. Largest Substring Between Two Equal Characters
思路：水题
 */
var maxLengthBetweenEqualCharacters = function(s) {
    const hash = new Map();
    let res = -1;
    for (let i = 0; i <= s.length-1; i++) {
        if (hash.has(s[i])) res = Math.max(i - hash.get(s[i]) -1, res);
        else hash.set(s[i], i);
    }
    return res;
};
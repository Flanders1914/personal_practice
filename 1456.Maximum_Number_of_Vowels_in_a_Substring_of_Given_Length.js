/**
1456. Maximum Number of Vowels in a Substring of Given Length
思路：简单的sliding windows
 */
var maxVowels = function(s, k) {
    let vowels = new Set(['a', 'e', 'i','o','u']);
    let res = 0, count = 0;
    for (let i = 0; i <= k-1; i++) {
        if (vowels.has(s[i])) count++;
    }
    res = count;
    for (let i = k; i <= s.length-1; i++) {
        if (vowels.has(s[i])) count++;
        if (vowels.has(s[i-k])) count--;
        res = Math.max(res, count);
    }
    return res;
};
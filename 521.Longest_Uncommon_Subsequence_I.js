/**
521. Longest Uncommon Subsequence I
意义不明
当两个字符串的长度不相同，那么长的字符串本身就是最长 LUS
当两个字符串长度相同，如果两个字符串相等，无LUS,如果两个字符串不相等，两个都是最长LUS
 */
var findLUSlength = function(a, b) {
    if (a.length > b.length) return a.length;
    else if (a.length < b.length) return b.length;
    else if (a == b) -1;
    else return a.length;
};
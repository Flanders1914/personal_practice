/**
392. Is Subsequence
方法：
在t中寻找到最早适配s[0]的坐标后往后寻找最早适配
s[1]的坐标
以此类推，若能找到所有s返回true
 */
var isSubsequence = function(s, t) {
    let i = 0;
    if (s.length == 0) return true;
    for (let c of t) {
        if (c == s[i]) {
            i++;
            if (i == s.length) return true;
        }
    }
    return false;
};
/**
214. Shortest Palindrome
思路：原题可以转化为寻找原字符串内以首字母开始的最长回文字符串
令 str = 原字符串+'*'+原字符串.reverse()
原题转化为找到str内最长的相同前缀和后缀
该题使用类似KMP algorithm的方法求解：
令lps[i] 为 str[0...i]最长的相同前缀和后缀的长度
令len = lps[i-1]
如果 str[i] == str[len] lps[i] = len+1;
否则 如果 len == 0 lps[i] = 0;
    否则 len = lps[len-1]
 */
var shortestPalindrome = function(s) {
    let str = s.slice();
    str += '*';
    for (let i = s.length -1; i >= 0; i--) {
        str += s[i];
    }
    let i = 1, len = 0;
    let lps = new Array(str.length).fill(0);
    while (i <= str.length -1) {
        if (str[i] == str[len]) {
            len++;
            lps[i] = len;
            i++
        } else {
            if (len == 0) {
                lps[i] = 0;
                i++;
            } else len = lps[len-1];
        }
    }

    let n = (lps[str.length-1] <= s.length)? lps[str.length-1] : s.length;
    let left = '';
    for (let i =s.length -1; i > n-1; i--) {
         left += s[i];
    }
    return left + s;
};
console.log(shortestPalindrome("abaabc"));
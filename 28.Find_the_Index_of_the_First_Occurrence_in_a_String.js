/*
28. Find the Index of the First Occurrence in a String
没什么难点，两层循环解决。
注意点：
outer循环的边界条件为 i < n - m + 1 即 i最大可以取坐标n - m（倒数第m个元素)
 */
var strStr = function(haystack, needle) {
    let n = haystack.length, m = needle.length;
    if (n < m) return -1;
    
    outer: for (let i = 0; i < n - m + 1; i++) {
        if (haystack[i] == needle[0]) {
            for (let j = 0; j < m; j++) {
                if (needle[j] != haystack[i + j]) continue outer;
            }
            return i;
        }
    }

    return -1;
};
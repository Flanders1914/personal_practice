/**
455. Assign Cookies
思路：贪心
 */
var findContentChildren = function(g, s) {
    g.sort((a, b) => a - b);
    s.sort((a, b) => a - b);
    let res = 0;
    let i = 0;
    let j = 0;
    while (i <= g.length-1 && j <= s.length-1) {
        if (g[i] <= s[j]) {
            i++;
            j++;
            res++;
            continue;
        } else {
            j++;
        }
    }
    return res;
};
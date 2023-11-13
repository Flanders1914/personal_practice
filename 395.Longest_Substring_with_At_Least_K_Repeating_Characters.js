/**
395. Longest Substring with At Least K Repeating Characters
思路:使用分治法
先将所有的字符hash化，选出少于k次的字符然后用这些字符分割原字符串
分割的每一段递归调用函数生成该段的res， 返回最大的res
 */
var longestSubstring = function(s, k) {
    let divideAndConquer = function(s, l, r) {
        if (r-l+1 < k) return 0;
        let res = 0;
        let hash = new Map();
        for (let i = l; i <= r; i++) {
            if (hash.has(s[i])) hash.set(s[i], hash.get(s[i])+1);
            else hash.set(s[i], 1);
        }
        let set = new Set();
        for (let item of hash.entries()) {
            if (item[1] < k) set.add(item[0]);
        }
        if (set.size == 0) return r-l+1;

        for (let i = l; i <= r; i++) {
            if (set.has(s[i])) continue;
            else {
                let end = i;
                while (end <= r && !set.has(s[end])) end++;
                end--;
                res = Math.max(res, divideAndConquer(s, i, end));
                i = end;
            }
        }
        return res;
    };
    return divideAndConquer(s, 0, s.length-1);
};
let s = "aaabb", k = 3;
console.log(longestSubstring(s, k));
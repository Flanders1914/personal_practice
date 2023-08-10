/**
76. Minimum Window Substring
思路：从寻找到的一个子字符串开始，移除左侧一个单位，移动r寻找下一个子字符串
1. 从l = 0 r = 0 开始，先是r右移
2. 当len = 0 即 包含了t时，l 左移到第一个 hash值为0的元素
3. 记录当前的子字符串
4. l左移一格，令len = 1,即把左侧元素移除，r开始右移寻找新的子字符串

注意：
1. 负哈希值代表子字符串中包含了多余的某个元素，所以l向左移动时可以通过哈希值为
负数的元素，但是要把哈希值更新加1。
2. 哈希值加1可能会导致哈希值从-1到0但是l还是要通过这个元素，因为它已经被移除了出去
*/

var minWindow = function(s, t) {
    // 创建记录t的hash表
    const hash = new Map();
    let len = t.length;
    for (let c of t) {
        if (hash.has(c)) {
            hash.set(c, hash.get(c) +1);
        } else {
            hash.set(c, 1);
        }
    }

    let l = 0; r = 0;
    // 初始的答案设定为[0,s.length+1]方便判断找没找到解
    let ans = [0, s.length +1];

    while (r <= s.length -1) {
        // 若 s[r]是需要的字符
        if (hash.get(s[r]) > 0) {
            hash.set(s[r], hash.get(s[r]) -1);
            len--;
        } 
        else if (hash.get(s[r]) <= 0) {
            hash.set(s[r], hash.get(s[r]) -1);
        }

        if (len == 0) {
            // 开始右移l到第一个不能移动的的元素
            while (hash.get(s[l]) !== 0) {
                if (hash.has(s[l])) hash.set(s[l], hash.get(s[l]) +1);
                l++; // l++ 必须在后面，避免hash值从-1到0导致循环停止
            }

            if ( r - l < ans[1] - ans[0]) {
                ans[0] = l;
                ans[1] = r;
            }
            // 把最左端元素移出范围内
            hash.set(s[l], 1);
            len = 1;
            l++;
        }

        r++;
    }

    if (ans[1] - ans[0] <= s.length) return s.slice(ans[0], ans[1]+1);
    else return '';
  
};


let s ="cabwefgewcwaefgcf";
t ="cae";
console.log(minWindow(s,t));
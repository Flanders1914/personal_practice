/**
438. Find All Anagrams in a String
思路: 利用两个hash表
一个hash表存储p
一个hash表存储当前区间内的值
count 用于统计当前区间内与目标p不同的字符个数
注意由于一开始区间的长度为0所以最好先初始化开始的区间和对应的hash表
然后用循环移动区间，下面的写法需要考虑区间长度的初始化所以会显得比较复杂
 */
var findAnagrams = function(s, p) {
    let hash = new Map();
    let res = [];
    for (let c of p) {
        if (hash.has(c)) hash.set(c, hash.get(c)+1);
        else hash.set(c, 1);
    }
    let count = 0;
    let current = new Map();
    for (let key of hash.keys()) {
        current.set(key, 0);
    }

    for (let i = 0; i <= s.length-1; i++) {
        let c = s[i];
        if (current.has(c)) {
            current.set(c, current.get(c)+1);
            if (current.get(c) > hash.get(c)) {
                count++;
            } 
        } else count++;

        if (i > p.length-1) {
            let shifted = s[i - p.length];
            if (current.has(shifted)) {
                current.set(shifted, current.get(shifted)-1);
                if (current.get(shifted) >= hash.get(shifted)) {
                    count--;
                }
            } else count--;
        } 
        if (count == 0 && i >= p.length-1) res.push(i - p.length +1);
    }
    return res;
};
let s = "cbaebabacd", p = "abc";
console.log(findAnagrams(s, p));
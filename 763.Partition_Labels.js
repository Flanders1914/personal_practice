/**
763. Partition Labels
思路：贪心法
先构造一个储存每个字母最后出现位置的hash表
从左到右遍历原字符串，start储存开始的位置，end储存结束的位置，用
每个字符的最后出现位置更新end，当index > end 将上个区间push入res中
注意不要遗漏最后一个区间
 */
var partitionLabels = function(s) {
    let hash = new Map();
    for (let i = s.length-1; i >= 0; i--) {
        if (!hash.has(s[i])) {
            hash.set(s[i], i);
        }
    }

    let res = [];
    let start = 0;
    let end = 0;
    for (let i = 0; i <= s.length-1; i++) {
        if (i > end) {
            res.push(end - start +1);
            start = i;
            end = i;
        }
        let right_most = hash.get(s[i]);
        if (right_most > end) {
            end = right_most;
        }
    }
    res.push(end-start+1);
    return res;
};
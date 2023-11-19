/**
424. Longest Repeating Character Replacement
思路：memo分别对应全取A-Z所需要代替的字符个数 memo[i] == [k, i, j]
k为剩余的替代次数，i和j代表当前字符串的起始和终结的位置，从左到右迭代s
动态更新所有的memo，即如果字符相同k不变，字符不同k--，当k == 0 时i向右侧移动
 */
var characterReplacement = function(s, k) {
    let memo = new Array(26).fill(null);
    const codeOfA = "A".charCodeAt(0);
    let res = 0;
    if (k == 0) {
        let pre = s[0];
        let count = 0;
        for (let c of s){
            if (c == pre) count++;
            else {
                res = Math.max(res, count);
                pre = c;
                count = 1;
            }
        }
        return Math.max(count, res);
    }
    for (let i = 0; i <= 25; i++) {
        if (i == s.charCodeAt(0) - codeOfA) {
            memo[i] = [k, 0, 0];
        } else memo[i] = [k-1, 0, 0];
    }

    for (let i = 1; i <= s.length-1; i++) {
        for (let j = 0; j <= 25; j++) {
            if (j == s.charCodeAt(i) - codeOfA) memo[j][2]++;
            else {
                if (memo[j][0] > 0) {
                    memo[j][0]--;
                    memo[j][2]++;
                    continue;
                }
                res = Math.max(res, memo[j][2] - memo[j][1]+1);
                memo[j][2]++;
                while (s[memo[j][1]].charCodeAt(0)  == j + codeOfA) memo[j][1]++;
                memo[j][1]++;
            }
        }
    }

    for (let i = 0; i <= 25; i++) res = Math.max(res, memo[i][2]- memo[i][1]+1);
    return res;
};
/*
var characterReplacement = function(s, k) {
    let reduced = [];
    let pre = s[0];
    let count = 0;
    let set = new Set();
    set.add(pre);
    for (let i = 0; i <= s.length-1; i++) {
        if (s[i] == pre) count++;
        if (s[i] != pre) {
            reduced.push([pre, count]);
            count = 1;
            pre = s[i];
            set.add(pre);
        }
    }
    reduced.push([pre, count]);

    let res = 0;
    for (let c of set) {
        for (let i = 0; i <= reduced.length-1; i++) {
            if (reduced[i][0] == c) {
                let remain = k;
                let count = reduced[i][1];
                for (let j = i+1; j <= reduced.length-1; j++) {
                    if (reduced[j][0] == c) count += reduced[j][1];
                    else if (reduced[j][1] <= remain) {
                        count += reduced[j][1];
                        remain -= reduced[j][1];
                    } else {
                        count += remain;
                        remain = 0;
                        break;
                    }
                }
                if (remain > 0) {
                    if (remain + count > s.length) return s.length;
                    else res = Math.max(res, count+remain);
                } else res = Math.max(res, count);
            }
        }
    }
    return res;
};
*/
let  s = "BAAA", k = 0;
console.log(characterReplacement(s, k));
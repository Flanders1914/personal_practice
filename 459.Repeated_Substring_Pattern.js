/**
459. Repeated Substring Pattern
思路：并没有看上去那么简单
要保证所有repeat的部分字母顺序严格相同
分两步，一是生成可能的倍数times 通过出现最少字母的次数生成（最好生成其素因数）
然后根据不同的倍数对字符串进行比较，可以利用repeat函数和subStr函数简化

思路2：
将去首字母的subStr与去尾字母的subStr相加，若存在重复模式，相加的字符串中存在原字符串s
 */
/*
var repeatedSubstringPattern = function(s) {
    let hash = new Map();
    for (let c of s) {
        if (hash.has(c)) hash.set(c, hash.get(c)+1);
        else hash.set(c, 1);
    }
    let time = Number.MAX_VALUE;
    for (let item of hash.entries()) {
        time = Math.min(time, item[1]);
    }
    if (time == 1) return false;
    let times = [];
    for (let i = 2; i <= time << 1; i++) {
        if (!(time % i) && !(s.length % i)) times.push(i);
    }
    if (times.length == 0) return false;

    for (let time of times) {
        let is_true = true;
        for (let k = 1; k <= time-1; k++) { 
            for (let i = 0; i <= s.length/time -1; i++) {
                if (s[i+k*(s.length/time)] == s[i+(k-1)*(s.length/time)]) continue;
                else {
                    is_true = false;
                    break;
                }
            }
        }
        if (is_true) return true;
    }
    return false;
};
*/
/**
 * @param {string} s
 * @return {boolean}
 */
var repeatedSubstringPattern = function(s) {
    return (s.slice(1, s.length) + s.slice(0, s.length-1)).indexOf(s) != -1
};
console.log(repeatedSubstringPattern("babbaaabbbbabbaaabbbbabbaaabbbbabbaaabbbbabbaaabbbbabbaaabbbbabbaaabbbbabbaaabbbbabbaaabbbbabbaaabbb"));
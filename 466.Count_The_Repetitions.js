/**
466. Count The Repetitions
思路：原题相当于找到str1能够生成最大s2个数
然后返回 该个数 ans// n2
破题在于从1开始迭代到n1
每次迭代在s1中去匹配s2，返回匹配的s2个数和下一个s1
开始时s2未能匹配的字符的最小坐标（start）即在下一个s1中匹配s2，s2开始的位置
dp[i] 储存s1.repeat(i)得到的最大s2个数
set储存不同的start对应的前一个i的坐标,即在s1.repeat(i)找完后 s2开始的坐标
当出现重复的start，即出现了重复的匹配模式，便能够利用重复的模式计算出所有s1.repeat(n1)中s2
的个数
 */
var getMaxRepetitions = function(s1, n1, s2, n2) {
    let count = function(s1, s2, start) {
        let j = start;
        let res = 0;
        for (let i = 0; i <= s1.length-1; i++) {
            if (s1[i] == s2[j]) {
                j++;
                if (j == s2.length) {
                    res++;
                    j = 0;
                }
            }
        }
        return [res, j];
    };

    let ans = 0;
    let dp = new Array(n1+1).fill(0);
    let set = new Map();
    let start = 0;
    for (let i = 1; i <= n1; i++) {
        [dp[i], start] = count(s1, s2, start);
        ans += dp[i];
        dp[i] = ans;
        if (set.has(start)) {
            let index = set.get(start);
            ans = (dp[i] - dp[index])*(Math.floor((n1-index)/(i-index))) + //这一项是重复模式中s2个数
            dp[index + (n1-index)%(i-index)]; // 这一项是重复模式前后中s2的个数的和
            return Math.floor(ans/n2);
        } else {
            set.set(start, i);
        }
        if (start == 0) {
            ans = ans * (Math.floor(n1/i)) + dp[n1 % i];
            return Math.floor(ans/n2);
        } 
    }
    return Math.floor(ans/n2);
};
let s1 = "nlhqgllunmelayl", n1 = 2, s2 = "lnl", n2 = 1;
console.log(getMaxRepetitions(s1, n1, s2, n2));
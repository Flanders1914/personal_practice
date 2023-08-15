/**
91. Decode Ways
思路：简单的dp
注意：在dp的每一步，如果判断出最后一个值不能和前一个值组成一个合法的值，最后一个值不能是0，
如果是输出0
 */
var numDecodings = function(s) {
    let ans = new Array(s.length).fill(0);
    ans[0]  = 1;
    if (s[0] == '0') return 0;
    if (s.length == 1) return 1;

    if (Number(s[0]) == 1 || (Number(s[0]) == 2 && Number(s[1]) <= 6)) {
        if (Number(s[1] == 0)) ans[1] = 1;
        else ans[1] = 2;
    } else {
        if (Number(s[1]) == 0) return 0;
        else ans[1] = 1;
    }

    for (let i = 2; i<= s.length -1; i++) {
        let a = Number(s[i-1]);
        let b = Number(s[i]);
        if (a == 1 || (a == 2 && b <= 6)) {
            if (b == 0) ans[i] = ans[i-2];
            else ans[i] = ans[i-1] + ans[i-2];
        } else {
            if (b == 0) return 0;
            else ans[i] = ans[i-1];
        }
    }

    return ans.at(-1);
};

console.log(numDecodings("301"));

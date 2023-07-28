/*
思路：stack加dp（可能不算dp），主要是stack的应用 
dp[i] 贮存的是以第i个字符为结尾的最大valid parenthese长度

1.当字符是'('把坐标index塞入stack
2.当字符是')'时stack.pop()出last_index，以该字符为结尾的最大valid parenthese长度为：
dp[i] = i - last_index + 1 + dp[last_index - 1]

答案为dp中储存的最大值

注意：
last_index -1 可能 <0 做一下处理即可
 */
var longestValidParentheses = function(s) {
    const stack = [];
    let ans = 0;
    const dp = new Array(s.length).fill(0);

    for (let i = 0; i <= s.length -1; i++) {
        if (s[i] == "(") stack.push(i);
        else {
            if (stack.length >= 1) {
                let last_index = stack.pop();
                dp[i] = i - last_index + 1 + (dp[last_index -1]??0);
            } else dp[i] = 0;
        }
    }

    for (let i = 0 ; i <= dp.length -1; i++) ans = (dp[i] > ans)? dp[i] : ans;
    return ans;
};

console.log(longestValidParentheses("()"));
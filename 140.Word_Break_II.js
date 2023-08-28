/*
140. Word Break II
思路：程序的主体运用了和139.Word_Break(improved)相同的思路(一维dp)
不过数组dp不仅仅存储一个boolean，而是一个数组
数组dp[i] 存储分割s(0-i)为一个可被wordDict组成的字符串s(0-k-1)和一个wordDict元素s(k-i)的下标k
最后利用一个递归函数生成所有的答案(这个函数和求子集合函数类似)
*/
var wordBreak = function(s, wordDict) {
    const hash = new Map();
    let max_word_length = 0;

    for (let word of wordDict) {
        hash.set(word, true);
        max_word_length = (max_word_length > word.length)? max_word_length : word.length;
    }

    dp = new Array(s.length).fill().map(()=> new Array);

    for (let i = 0; i <= s.length -1; i++) {
        let segment = '';
        for (let k = i; k >= 0 && (i-k+1) <= max_word_length; k--) {
            segment = s[k] + segment;
            if (hash.has(segment) && (!k || dp[k-1].length)) {
                dp[i].push(k);
            }
        }
    }

    let ans = [];
    if (!dp[s.length-1].length) return ans;

    const make_ans = function(previous, index) {
        if (index < 0) { //由于是从后往前生成的所以输出要倒序
            let stack = previous.slice();
            ans.push(stack.pop());
            while (stack.length) {
                ans[ans.length-1] += ' '+ stack.pop();
            }
            return;
        }
        for (let i of dp[index]) {
            let word = s.slice(i, index+1);
            previous.push(word);
            make_ans(previous, i-1);
            previous.pop();
        }
    }

    make_ans([], s.length-1);
    return ans;
};

s = "pineapplepenapple", wordDict = ["apple","pen","applepen","pine","pineapple"];
console.log(wordBreak(s,wordDict))
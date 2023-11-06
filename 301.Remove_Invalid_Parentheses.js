/**
301. Remove Invalid Parentheses
思路：经过优化的搜索
先确定需要删除的'(' 与 ')' 个数
然后开始用递归寻找可能的解
m表示pre中未匹配的'('个数始终要保证 m>=0
保证 n1（剩余需要删除的'(' 个数）+ n2（剩余需要删除的')'个数）<= 剩余字母个数
最后删除重复的结果
 */
var removeInvalidParentheses = function(s) {
    let count1 = 0; // num of "(" should be removed
    let count2 = 0; // num of ")" should be removed
    for (let c of s) {
        if (c == '(') count1++;
        else if (c == ")") count1--;
        if (count1 < 0) {
            count2++;
            count1 = 0;
        }
    }
    if (count1 + count2 == 0) return [s];

    let ans = [];

    let removing = function(index, n1, n2, m, pre) {
        if (n1+n2 > s.length - index) return;
        if (index == s.length) {
            if (n1 == 0 && n2 == 0 && m == 0) {
                ans.push(pre.join(''));
            }
            return;
        }

        if (s[index] == '(') {
            if (n1 > 0) {
                removing(index+1, n1-1, n2, m, pre);
            }
            pre.push('(');
            removing(index+1, n1, n2, m+1, pre);
            pre.pop();
        } else if (s[index] == ')') {
            if (n2 > 0) {
                removing(index+1, n1, n2-1, m, pre);
            }
            if (m == 0) return;
            else {
                pre.push(')');
                removing(index+1, n1, n2, m-1, pre);
                pre.pop();
            }
        } else {
            pre.push(s[index]);
            removing(index+1, n1, n2, m, pre);
            pre.pop();
        }
    };
    removing(0, count1, count2, 0, []);

    // remove duplicates
    let set = new Set();
    let result = [];
    for (let candid of ans) {
        if (!set.has(candid)) {
            result.push(candid);
            set.add(candid);
        } 
    }
    return result;
};
console.log(removeInvalidParentheses("(a)())()"));
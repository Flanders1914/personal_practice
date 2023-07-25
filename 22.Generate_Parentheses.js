/*
22. Generate Parentheses
思路：
利用递归生成括号的组合，递归函数主要传递三个参数：paramthesis（已经生成的组合）；
n1 左括号'('的剩余数量；n2右括号')'的剩余数量，ans记录生成的所有合法组合。
1. 当 n1 > n2 已经生成的组合一定不合法
2. 当 n1 == n2 下一个括号必然是 '('
3. 当 n1 < n2 下一个括号可以是 '(' 也可以是 ')'
4. 当 n1 == 0 填充剩余的 ')'
 */ 

function Parenthesis_generation (paramthesis, n1, n2, ans) {

    if (n1 == 0) {
        for (let i = n2; n2 > 0; n2--) {
            paramthesis = paramthesis + ')';
        }    
        ans.push(paramthesis);
        return    
    }

    if (n1 == n2) {
        Parenthesis_generation(paramthesis + '(', n1 -1, n2, ans);
    } else {
        Parenthesis_generation(paramthesis + '(', n1 -1, n2, ans);
        Parenthesis_generation(paramthesis + ')', n1, n2 -1, ans);
    }
    
}

var generateParenthesis = function(n) {
    let ans = [];
    Parenthesis_generation('(', n -1, n, ans);
    return ans;    
};

console.log(generateParenthesis(1));
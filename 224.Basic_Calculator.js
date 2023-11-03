/**
224. Basic Calculator
用两个栈做，第一个栈存储括号前的数值，第二个栈存储括号之前的运算符号
遇到（ 入栈 当前的值res和当前的符号operator设为初始值 res = 0; operator = 1;
遇到 ）出栈，按照出栈的值和符号分别对res进行运算
下一个数current转化为数字后根据其与之前的值res之间的符号operator 运算出新的res
注意这道题不需要运算乘法，若包括乘法可以先将乘法先运算，转化为加法再做
第一种做法运用了递归分治法，包括了乘法运算
 */
/*
var calculate = function(s) {
    s = s.split(' ').join('');
    let calculator = function(s, i, j) {
        let nums = [], sign = 0; // 0 代表无运算符号，1代表+，2代表-，3代表*
        while (i <= j) {
            if (s[i] == '(') {
                let count = 1, index = i+1;
                while (count > 0) {
                    if (s[index] == '(') count++;
                    else if (s[index] == ')') count--;
                    index++;
                }
                let current = calculator(s, i+1, index-2);
                if (sign == 0 || sign == 1) nums.push(current);
                else if (sign == 2) nums.push(-current);
                else nums[nums.length-1] *= current;
                i = index -1;
            }
            else if (s[i] == '+') sign = 1;
            else if (s[i] == '-') sign = 2;
            else if (s[i] == '*') sign = 3;
            else {
                let current = 0, index = i;
                while (s.charCodeAt(index) >= 48 && s.charCodeAt(index) <= 57) {
                    current *= 10;
                    current += s.charCodeAt(index) - 48;
                    index++;
                }
                if (sign == 0 || sign == 1) nums.push(current);
                else if (sign == 2) nums.push(-current);
                else nums[nums.length-1] *= current;
                i = index -1;
            }
            i++;
        }
        let ans = 0;
        for (let num of nums) ans += num;
        return ans; 
    };
    return calculator(s, 0, s.length-1);
};
*/
/**
 * @param {string} s
 * @return {number}
 */
var calculate = function(s) {
    const isNum = (n) => (n >= '0' && n <= '9');
    let stack = [];
    let opStack = [];
    let res = 0;
    let operator = 1;
    for (let i = 0; i <= s.length-1; i++) {
        if (s[i] == ' ') continue;
        else if (s[i] == '+') operator = 1;
        else if (s[i] == '-') operator = -1;
        else if (s[i] == '(') {
            opStack.push(operator);
            operator = 1;
            stack.push(res);
            res = 0;
        }
        else if (s[i] == ')') {
            operator = opStack.pop();
            res = stack.pop() + operator*res;
        }
        else {
            let index = i;
            let current = 0;
            while (isNum(s[index])) {
                current *= 10;
                current += s.charCodeAt(index) - 48;
                index++;
            }
            res = res + operator*current;
            i = index -1;
        }
    }
    return res;
};
console.log(calculate("(1+(4+5+2)-3)+(6+8)"));
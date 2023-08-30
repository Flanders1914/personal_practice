/*
150. Evaluate Reverse Polish Notation
后缀表示法
利用一个栈进行模拟即可
注意：
1. Number(token) 要考虑 token == '0'的情况
2. 除法要求抛弃小数点所以要用trunc而不是floor
floor在负数的情况下不对
*/
var evalRPN = function(tokens) {
   let numStack = [];
   for (let token of tokens) {
    if (Number(token) || token == '0') { //注意0
        numStack.push(Number(token));
    }
    else {
        if (numStack.length <= 1) return "invalid input";
        let b = numStack.pop();
        let a = numStack.pop();
        if (token == '+') numStack.push(a+b);
        else if (token == '-') numStack.push(a-b);
        else if (token == '*') numStack.push(a*b);
        else if (token == '/') numStack.push(Math.trunc(a/b));
        else return "invalid input";
    }
   }
   
   return numStack[0];
};

console.log(evalRPN(["0","3","/"]));
/**
241. Different Ways to Add Parentheses
思路：将表达式转化为nums和operators数组
然后利用递归生成ans
迭代区间[l,r]中任意一个operator作为当前的操作
然后递归调用函数分别生成operator左右的取值集合
 */
var diffWaysToCompute = function(expression) {
    let nums = [];
    let operators = [];
    let current = 0;
    for (let i = 0; i <= expression.length-1; i++) {
        if (expression.codePointAt(i) >= 48 && expression.codePointAt(i) <= 57) {
            current *= 10;
            current += Number(expression[i]);
        } else {
            nums.push(current);
            current = 0;
            if (expression[i] == "+") operators.push(1);
            else if (expression[i] == '-') operators.push(2);
            else if (expression[i] == '*') operators.push(3); 
        }
    }
    nums.push(current);

    let caculate = function(nums, operators, l, r) {
        if (l == r) return [nums[l]];
        let ans = [];
        for (let k = l; k <= r-1; k++) {
            let Lnums = caculate(nums, operators, l, k);
            let Rnums = caculate(nums, operators, k+1, r);
            for (let Lnum of Lnums) {
                for (let Rnum of Rnums) {
                    if (operators[k] == 1) ans.push(Lnum+Rnum);
                    else if (operators[k] == 2) ans.push(Lnum-Rnum);
                    else if (operators[k] == 3) ans.push(Lnum*Rnum);
                }
            }
        }
        return ans;
    };

    return caculate(nums, operators, 0, nums.length-1);
};
console.log(diffWaysToCompute("2*3-4*5"));

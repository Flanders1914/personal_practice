/**
227. Basic Calculator II
思路：先将计算式转化为数组（注意转换多位数）
然后先计算乘除，将减法转化为加法，最后做加法
 */
var calculate = function(s) {
    let nums = [];
    let operators = [];
    let i = 0;
    while (i <= s.length-1) {
        if (s[i] == ' ') {
            i++;
            continue;
        }

        if (s[i] == '+') operators.push(1);
        else if (s[i] == '-') operators.push(2);
        else if (s[i] == '*') operators.push(3);
        else if (s[i] == '/') operators.push(4);
        else {
            let num = Number(s[i]);
            i++;
            while (s.charCodeAt(i) >= 48 && s.charCodeAt(i) <= 57 && i <=s.length-1) { //判断是否为数字用ascii码最为稳妥
                num = num*10 + Number(s[i]);
                i++;
            }
            nums.push(num);
            continue;
        }
        i++;
    }  

    let memo = [];
    let previous = nums[0];
    for (let i = 0; i <= operators.length-1; i++) {
        if (operators[i] == 1) {
            memo.push(previous);
            previous = nums[i+1];
        }
        else if (operators[i] == 2) {
            memo.push(previous);
            previous = -nums[i+1];
        }
        else if (operators[i] == 3) {
            previous = previous * nums[i+1];
        }
        else {
            if (previous > 0) previous = Math.floor((previous/nums[i+1])); //注意负数取整要取ceil来模拟整除
            else previous = Math.ceil(previous/nums[i+1]);
        }
    }
    memo.push(previous);
    let ans = 0;
    for (let num of memo) ans += num;
    return ans;
};
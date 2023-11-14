/**
371. Sum of Two Integers
思路1:这里模拟了负数取反码进行加法然后由反码转化为负数的操作
用数组模拟了数字的位
不算比较好的做题方式，因为还是在坐标的迭代上用到了++ --
以及在最后转化负数上用了-
 */
var getSum = function(a, b) {
    let twoComple = function(n) {
        n = Math.abs(n);
        let digits = new Array(12).fill(1);
        let i = 11;
        while (n > 0) {
            if (n % 2) {
                digits[i] = 0;
            } else digits[i] = 1;
            n = n >> 1;
            i--;
        }
        let pre = 1;
        for (let i = 11; i >= 1; i--) {
            if (digits[i] == 1) {
                digits[i] = 0;
                pre = 1;
            }
            else {
                if (pre) digits[i] = 1;
                break;
            }
        }
        return digits;
    };

    let makeTwo = function(n) {
        let digits = new Array(12).fill(0);
        let i = 11;
        while (n > 0) {
            if (n % 2) digits[i] = 1;
            n = n >> 1;
            i--;
        }
        return digits;
    };

    let num1 = (a >= 0)? makeTwo(a) : twoComple(a);
    let num2 = (b >= 0)? makeTwo(b) : twoComple(b);
    let pre = 0;
    for (let i = 11; i >= 0; i--) {
        if (num1[i] && num2[i] && pre) {
            num1[i] = 1;
            pre = 1;
            continue;
        }
        if ((num1[i]&& num2[i]) || (num1[i] && pre) || (num2[i] && pre)) {
            num1[i] = 0;
            pre = 1;
            continue;
        }
        if (num1[i] || num2[i] || pre) {
            num1[i] = 1;
            pre = 0;
        } 
    }
    let res = 0; 
    if (num1[0] == 0) {
        for (let digit of num1) {
            res = res << 1;
            res = res | digit;
        }
        return res;
    } else {
        for (let i = 11; i >= 1; i--) {
            if (num1[i] == 0) num1[i] = 1;
            else {
                num1[i] = 0;
                break;
            }
        }
        for (let digit of num1) {
            res = res << 1;
            res = res | (!digit);
        }
        return -res;
    }
};
console.log(getSum(-5,3));

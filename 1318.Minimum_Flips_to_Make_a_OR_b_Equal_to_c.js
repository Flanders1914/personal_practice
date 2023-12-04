/**
1318. Minimum Flips to Make a OR b Equal to c
思路：位运算
注意判断条件加括号
注意 >> 和 << 操作返回的是经过位移动的数不是位移动溢出的位
 */
var minFlips = function(a, b, c) {
    let res = 0;
    while (a || b || c) {
        let a0 = a & 1;
        let b0 = b & 1;
        let c0 = c & 1;
        a >>= 1;
        b >>= 1;
        c >>= 1;
        if ((a0 | b0) == c0) continue;
        else {
            if (c0) res++; // c0 == 1, a0 == b0 == 0
            else { // c0 == 0
                if (a0 & b0) res += 2; //a0 == b0 == 1
                else res++;
            }
        }
    }
    return res;
};
console.log(minFlips(2,6,5));
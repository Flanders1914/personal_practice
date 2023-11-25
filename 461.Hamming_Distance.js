/**
461. Hamming Distance
思路：
1转化为字符串
2位运算
 */
/*
var hammingDistance = function(x, y) {
    let num1 = x.toString(2);
    let num2 = y.toString(2);
    let res = 0;
    if (num2.length > num1.length) [num1, num2] = [num2, num1];
    let i = num1.length-1, j = num2.length-1;
    while (j >= 0) {
        if (num1[i--] != num2[j--]) res++;
    }
    while (i >= 0) {
        if (num1[i--] == '1') res++;
    }
    return res;
};
*/
var hammingDistance = function(x, y) {
    let res = 0;
    while (x || y) {
        res += (x & 1) ^ (y & 1);
        x >>= 1;
        y >>= 1;
    }
    return res;
};
console.log(hammingDistance(1, 3));
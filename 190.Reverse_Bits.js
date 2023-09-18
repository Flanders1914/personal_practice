/**
190. Reverse Bits
主要考察位运算 & 和 >>, >>>
注意输入数据为 binary string 二进制字符串
>> 是带符号右移(右移后符号相同) >>> 是不带符号的右移
所以如果使用 >> 就不能使用 while ( n != 0) 的循环，使用 >>> 就可以
 */
var reverseBits = function(n) {
    let ans = 0;
    for (let count = 1; count <= 32; count++) {
        ans *= 2;
        ans += n & 1;
        n = n >> 1;
    }
    return ans;
};
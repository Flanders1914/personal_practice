/**
231. Power of Two
判断n是否是2的某次方
思路：位运算 &
对于2为底数的幂二进制为 100000...
该数减一为 11111...
两者取&必然为0
 */
var isPowerOfTwo = function(n) {
    if (n <= 0 ) return false;
    if (n & (n-1)) return false;
    else return true;
};
console.log(isPowerOfTwo(3));
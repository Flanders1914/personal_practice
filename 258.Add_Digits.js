/**
258. Add Digits
思路：常规做法显而易见
下面是数论做法：若num不是0，那么这道题返回 num % 9, 若 num 被 9 整除则返回0
证明：
对于 a = b000(...n个...)0
(a-b)= (b-1)99...(10-b) 为9的倍数（先证明每一位相加后可被9整除的数为9的倍数)
所以这道题中的整个变换步骤相当于减去一个可被9整除的数  
 */
var addDigits = function(num) {
    if (num == 0) return 0;
    return num % 9 || 9;
};
console.log(addDigits(0));
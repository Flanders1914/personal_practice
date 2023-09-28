/**
326. Power of Three
方法1：循环或者递归不断除以3
方法2：由于3^19为int范围内最大的3的幂
所以只要 3^19 能被n整除那么n就是3的幂
 */
var isPowerOfThree = function(n) {
    if (n <= 0) return false;
    return ((3**19) % n) == 0;
};
console.log(isPowerOfThree(17));
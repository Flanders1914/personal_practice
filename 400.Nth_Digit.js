/**
400. Nth Digit
思路: 通过观察发现1位数共有9位 2位数共有90个 180位，count位数一共有 9*10^(count-1)个
先找到目标digit所在的数是多少位
然后确定这个数在count位数中是第几个，生成目标数target
然后找到对应位
注意，无余数表明是前一个数的最后一位
 */
var findNthDigit = function(n) {
    let count = 1; // 从一位数开始
    let ceil = 9; // 一位数有9个位
    while (n > ceil) {
        n -= ceil;
        count++;
        ceil = count *9*10**(count-1); // count位数一共有 9*10^(count-1)*count 个位
    }
    let target = (10 **(count-1) + Math.floor(n / count));
    if (n % count == 0) return (''+ (target-1)).at(-1);
    else return ('' + target).at(n % count -1);
};
console.log(findNthDigit(10000));
/*
172. Factorial Trailing Zeroes
思路：统计所有乘数中因数5和因数2的个数
两者的较小值为0的个数。由于因数2的个数远远多于5，所以其实统计5就够了
*/
var trailingZeroes = function(n) {
    if (n == 1 || n == 0) return 0;
    let numForTwo = 0, numForFive = 0;

    for (let num = 1; num <= n; num++) {
        let current = num;
        while (!(current%2)) {
            numForTwo++;
            current /= 2;
        }
        while (!(current%5)) {
            numForFive++;
            current /= 5;
        }
    }

    return Math.min(numForFive,numForTwo);
};
console.log(trailingZeroes(1356));
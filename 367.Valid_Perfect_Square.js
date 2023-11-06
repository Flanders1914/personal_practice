/**
367. Valid Perfect Square
注意num比较小的输入即可
 */
var isPerfectSquare = function(num) {
    if (num == 1) return true;
    for (let i = 2; i <= num; i++) {
        let n = i*i;
        if (n == num) return true;
        if (n > num) return false;
    }
};
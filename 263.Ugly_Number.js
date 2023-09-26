/**
263. Ugly Number
判断质因数是否只有2，3，5
方法：将数除以2，3，5直到无法整除
若余数为1则是
 */
var isUgly = function(n) {
    if (n <= 0) return false;
    while ((n % 2) == 0) {
        n = n / 2;
    }
    while ((n % 3) == 0) {
        n = n / 3;
    }
    while ((n % 5) == 0) {
        n = n / 5;
    }
    if (n == 1) return true;
    else return false;
};
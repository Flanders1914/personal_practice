/**
342. Power of Four
水题
注意0就行
 */
var isPowerOfFour = function(n) {
    if (n == 0) return false;
    while (n % 4 == 0) {
        n = n / 4;
    }
    if (n == 1) return  true;   
    else return false;
};

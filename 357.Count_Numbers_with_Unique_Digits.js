/**
357. Count Numbers with Unique Digits
数学题:规律如下
f(0) = 1
f(1) = 10
f(2) = 9 * 9 + f(1)
f(3) = 9 * 9 * 8 + f(2)
...
f(n) = 9 * 9 * 8 * ... * (11 - n) + f(n-1)
 */
var countNumbersWithUniqueDigits = function(n) {
    let arr = new Array(8).fill(0);
    arr[0] = 1;
    arr[1] = 10;
    for (let i = 2; i <= 8; i++) {
        let res = 9;
        for (let j = 1; j <= i-1; j++) {
            res *= 10 -j;
        }
        arr[i] = arr[i-1] + res;
    }  
    return arr[n];
};
for (let i = 0; i <= 8; i++) {
    console.log(countNumbersWithUniqueDigits(i));
}
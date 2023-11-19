/**
415. Add Strings
高精度
 */
var addStrings = function(num1, num2) {
    if (num1.length < num2.length) [num1, num2] = [num2, num1];
    num1 = num1.split('');
    num2 = num2.split('');
    let res = new Array(num1.length).fill(0);
    let remainder = 0;
    for (let i = 0; i <= num1.length-1; i++) {
        let n1 = Number(num1[num1.length-1-i]);
        let n2 = (num2.length-1-i >= 0)? Number(num2[num2.length-1-i]) : 0;
        res[num1.length-1-i] = (n1 + n2 + remainder)%10;
        if (n1 + n2 + remainder >= 10) remainder = 1;
        else remainder = 0;
    }
    res = res.join('');
    if (remainder > 0) res = remainder + res;
    return res;
};
let  num1 = "456", num2 = "77";
console.log(addStrings(num1, num2));
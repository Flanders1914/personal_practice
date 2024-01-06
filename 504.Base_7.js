/**
504. Base 7
转化为7进制
 */
var convertToBase7 = function(num) {
    let res = '';
    let arr = [];
    if (num == 0) return "0";
    if (num < 0) {
        num = -num;
        res += '-';
    }

    while (num > 0) {
        arr.push(num % 7);
        num = Math.floor(num/7);
    }

    while (arr.length) {
        res += arr.pop();
    }

    return res;
};
console.log(convertToBase7(7));
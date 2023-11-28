/**
476. Number Complement
思路：水题
利用位运算^
 */
var findComplement = function(num) {
    let len = num.toString(2).length;
    let m = 1;
    for (let i =  1; i <= len-1; i++) {
        m <<= 1;
        m |= 1;
    }
    return num ^ m;
};
console.log(findComplement(1));
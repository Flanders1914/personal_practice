/**
372. Super Pow
思路：相当于对 a % 1337 进行b次乘法，每次乘法后的结果mod1337
由于b特别大，可以差分成分别进行digit次的乘法然后进位时将结果进行10次方运算
 */
var superPow = function(a, b) {
    a = a % 1337;
    let res = 1
    for (let i = 1; i <= b[0]; i++) {
        res *= a;
        res %= 1337;
    }

    for (let index = 1; index <= b.length-1; index++) {
        let current = 1;
        for (let i = 1; i <= 10; i++) {
            current *= res;
            current = current % 1337;
        }
        res = current;
        current = 1;
        for (let i = 1; i <= b[index]; i++) {
            current *= a
            current = current % 1337;
        }
        res = (current * res) % 1337;

    }
    return res;
};

console.log(superPow(2147483647, [2,0,0]));
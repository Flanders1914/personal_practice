/**
537. Complex Number Multiplication
思路：分割实部和虚部
 */
function read(s) {
    let a = 0;
    let b = 0;
    let sign = true;
    let index = 0;
    if (s[0] == '-') {
        sign = false;
        index = 1;
    }
    while (s[index] != '+') {
        a *= 10;
        a += Number(s[index]);
        index++;
    }
    if (!sign) a = -a;
    index++;

    if (s[index] == '-') {
        sign = false;
        index++;
    } else sign = true;

    while (s[index] != 'i') {
        b*= 10;
        b += Number(s[index]);
        index++;
    }
    if (!sign) b = -b;
    return [a,b];
}

var complexNumberMultiply = function(num1, num2) {
    let [a1, b1] = read(num1);
    let [a2, b2] = read(num2);
    let a3 = a1*a2 - b1*b2;
    let b3 = b1*a2 + a1*b2;
    return `${a3}+${b3}i`;
};

let num1 = "1+-1i", num2 = "1+-1i";
console.log(complexNumberMultiply(num1, num2));
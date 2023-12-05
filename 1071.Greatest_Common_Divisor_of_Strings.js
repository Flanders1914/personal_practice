/**
1071. Greatest Common Divisor of Strings
从两个字符串长度的gcd开始寻找
 */
function gcd(a, b) {
    let c = a % b;
    if (!c) return b;
    else return gcd(b, c);
}

var gcdOfStrings = function(str1, str2) {
    if (str1.length < str2.length) [str1, str2] = [str2, str1];
    let n = str1.length, m = str2.length;
    for (let k = gcd(n, m); k >= 1; k--) {
        if ((m % k) || (n % k)) continue;
        let seg1 = str1.slice(0, k);
        let seg2 = str2.slice(0, k);
        if (seg1 == seg2 && seg1.repeat(n/k) == str1 &&
        seg2.repeat(m/k) == str2) return seg1;
    }
    return '';
};
let str1 = "ABCABC", str2 = "ABC";
console.log(gcdOfStrings(str1, str2));

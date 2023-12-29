/**
482. License Key Formatting
注意这道题要把小写改成大写
 */
var licenseKeyFormatting = function(s, k) {
    let temp = [];
    for (let c of s) {
        if (c != '-') temp.push(c);
    }
    s = temp;
    let index = (s.length % k);
    let res = '';
    for (let i = 0; i < index; i++) {
        res += s[i].toUpperCase();
    }
    let count = 0;
    for (let i = index; i <= s.length-1; i++) {
        if (res.length && (count == 0)) res += '-';
        res += s[i].toUpperCase();
        count++;
        if (count == k) count = 0;
    }
    return res;
};
let s = "2-5g-3-J", k = 2;
console.log(licenseKeyFormatting(s, k));
/**
1758. Minimum Changes To Make Alternating Binary String
水题
 */
var minOperations = function(s) {
    let res1 = 0;
    let is_zero = true;
    for (let c of s) {
        if (is_zero) {
            if (c == '1') res1++;
        } else {
            if (c == '0') res1++;
        }
        is_zero = !is_zero;
    }
    let res2 = 0;
    is_zero = false;
    for (let c of s) {
        if (is_zero) {
            if (c == '1') res2++;
        } else {
            if (c == '0') res2++;
        }
        is_zero = !is_zero;
    }
    return Math.min(res1, res2);
};
console.log(minOperations("0100"));
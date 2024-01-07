/**
541. Reverse String II
利用while 循环
 */
var reverseStr = function(s, k) {
    let res = [];
    let index = 0;
    while (index < s.length) {
        if ((index + k -1) >= s.length-1) {
            for (let i = s.length-1; i >= index; i--) {
                res.push(s[i]);
            }
            break;
        }
        for (let i = index + k -1; i >= index; i--) res.push(s[i]);
        for (let i = index + k; (i <= index + 2*k-1)&&(i <= s.length-1); i++) {
            res.push(s[i]);
        }
        index += 2 * k;
    }
    return res.join('');
};
/**
481. Magical String
思路利用慢指针slow生成之后的字符
 */
var magicalString = function(n) {
    let s = [1,2,2]
    if (n <= 3) return 1;
    let slow = 2;
    let count = 1;
    let current = 1;
    while (s.length < n) {
        if (current == 1) count += s[slow];
        for (let k = 1; k <= s[slow]; k++) s.push(current);
        current = (current == 1)? 2 : 1;
        slow++;
    }
    if ((s.length == n+1) && (s.at(-1) == 1)) return count-1;
    else return count;
};
console.log(magicalString(8));
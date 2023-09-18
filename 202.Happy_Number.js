/**
202. Happy Number
思路：利用set记录
 */
var isHappy = function(n) {
    if (n == 1) return true;

    let make_squares = function (n) {
        let sum = 0;
        while (n != 0) {
            sum += (n%10) ** 2;
            n = Math.floor(n/10);
        }
        return sum;
    };
    
    let set = new Set();
    set.add(n);
    while (true) {
        n = make_squares(n);
        if (n == 1) return true;
        if (set.has(n)) return false;
        set.add(n);
    }
};
console.log(isHappy(19));
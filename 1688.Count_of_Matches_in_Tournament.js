/**
1688. Count of Matches in Tournament
水题
 */
var numberOfMatches = function(n) {
    let res = 0;
    while (n > 1) {
        if (n % 2) {
            res += n >> 1;
            n = (n >> 1) +1;
        } else {
            res += n >> 1;
            n = n >> 1;
        }
    }
    return res;
};
console.log(numberOfMatches(7));
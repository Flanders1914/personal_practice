/**
441. Arranging Coins
水题
 */
var arrangeCoins = function(n) {
    let res = 0;
    while (n >= res+1) {
        n -= res+1;
        res++
    }
    return res;
};
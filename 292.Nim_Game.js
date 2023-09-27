/**
292. Nim Game
思路：数论题
只有4的倍数的n先手必然失败，其他情况先手必然胜利
证明：
易证：n=1,2,3 为 true n=4 为 false;
所以先手使n = 4 必然胜利 即 n=5,6,7 必然胜利
先手使 n = 5,6,7 失败 即 n=8必然失败
数学归纳法得 n = 4k 时必然失败，其他情况必然胜利
 */
var canWinNim = function(n) {
    if (n % 4 == 0) return false;
    else return true;
};
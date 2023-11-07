/** 
 * Forward declaration of guess API.
 * @param {number} num   your guess
 * @return 	     -1 if num is higher than the picked number
 *			      1 if num is lower than the picked number
 *               otherwise return 0
 * var guess = function(num) {}
 */

/**
374. Guess Number Higher or Lower
二分查找注意陷阱
n 可能非常大所以 取 mid不能简单将 l 和 r 相加
而是 分别整除
 */
let guess = function(n) {
    if (n > 1702766719) return -1;
    else if (n == 1702766719) return 0;
    else return 1;
}
var guessNumber = function(n) {
    let l = 1, r = n;
    while (l <= r) {
        let mid = (l >> 1) + (r >> 1);
        if (l % 2 == 1 && r % 2 == 1) mid++;
        if (mid == l) {
            if (guess(mid) == 0) return mid;
            else return r;
        }
        if (guess(mid) == 0) return mid;
        else if (guess(mid) < 0) r = mid -1;
        else l = mid +1;
    } 
};
console.log(guessNumber(2126753390));
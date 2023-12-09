/**
485. Max Consecutive Ones
水
 */
var findMaxConsecutiveOnes = function(nums) {
    let res = 0;
    let count = 0;
    for (let num of nums) {
        if (num == 0) {
            res = Math.max(res, count);
            count = 0;
        } else count++;
    }
    return Math.max(count, res);
};
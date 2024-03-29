/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var combinationSum4 = function(nums, target) {
    let dp = new Array(target+1).fill(0);
    dp[0] = 1;
    for (let i = 1; i <= target; i++) {
        for (let num of nums) {
            if (i-num >= 0) dp[i] += dp[i-num];
        }
    }
    return dp[target];
};
let  nums = [2,1,3], target = 35;
console.log(combinationSum4(nums, target));
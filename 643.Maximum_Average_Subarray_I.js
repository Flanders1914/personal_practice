/**
643. Maximum Average Subarray I
思路：找出和最大的subarray
 */
var findMaxAverage = function(nums, k) {
    let sum = 0;
    for (let i = 0; i <= k-1; i++) sum  += nums[i];
    let max = sum;
    for (let i = k; i <= nums.length-1; i++) {
        sum += nums[i];
        sum -= nums[i-k];
        max = Math.max(sum, max);
    }
    return max/k;
};
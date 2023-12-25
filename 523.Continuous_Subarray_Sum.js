/**
523. Continuous Subarray Sum
思路：已知 nums[i,j] 的和 是 sum[j] - sum[i-1]
若要 nums[i,j] 为 k 的倍数，那么 sum[j] - sum[i-1] 也为 k的倍数
我们对所有的 nums取 k 的余数，对每一步计算 sum[i] 取余数
那么只要 sum[i]出现了之前的sum[j]出现过的余数，那么 nums[j+1, i] 为k的倍数
注意初始情况我们要添加0，即从头开始的subarray
注意subarray的长度至少2，所以我们每隔一格更新一次hash
 */
var checkSubarraySum = function(nums, k) {
    let hash = new Set();
    hash.add(0);
    let pre = nums[0] % k;
    for (let i = 1; i <= nums.length-1; i++) {
        let sum = (pre + nums[i]) % k;
        if (hash.has(sum)) return true;
        hash.add(pre);
        pre = sum;
    }
    return false;
};
console.log(checkSubarraySum([23,2,4,6,6], 7));

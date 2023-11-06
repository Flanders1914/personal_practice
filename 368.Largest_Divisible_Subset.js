/**
368. Largest Divisible Subset
这其实是一道dp题
注意，a < b < c, b%a = 0 c%b = 0 那么 c%a = 0
但是 若 c%a = 0, b%a = 0 不代表 c%b = 0 如 2，4，6
我们先将数组排序
然后使用dp 令 dp[i] 为 最大（也是最后）一个元素是 nums[i] 的 divisible subset
dp[i] = Max(dp[k] + nums[i]) 其中 nums[i] % nums[k] = 0
注意创建一个单元格是[]的数组不能fill([]) 这样每个单元格是同一个引用
 */
var largestDivisibleSubset = function(nums) {
    let ans = [];
    if (nums.length == 1) return nums;
    nums.sort((a,b) => a-b);
    let dp = new Array(nums.length).fill().map(() => new Array());
    dp[0].push(nums[0]);

    for (let i = 1; i <= nums.length-1; i++) {
        let candid = [];
        for (let j = i-1; j >= 0; j--) {
            if (nums[i] % nums[j] == 0) {
                if (dp[j].length > candid.length) candid = dp[j];
            }
        }
        dp[i].push(...candid);
        dp[i].push(nums[i]);
        if (ans.length < dp[i].length) ans = dp[i];
    }
    return ans;
};

console.log(largestDivisibleSubset([5,9,18,54,108,540,90,180,360,720]));
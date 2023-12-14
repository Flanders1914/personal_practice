/**
354. Russian Doll Envelopes
思路：
从LIS longest increasing subsequence 问题开始
一般的dp解法时间复杂度O(n^2)
但最优解法能够达到O(nlogn)
如下：我们维护一个动态的dp数组
从左到右遍历nums，若当前num > dp最后一个数（也是最大的数)
dp.push(nums)
若 num <= dp.at(-1)
那么我们在dp中找到大于等于该数的最小的那个数的坐标i
并令dp[i] = num
最后dp的长度即为LIS长度
时间复杂度O(nlogn)

这道题的做法是通过排序重构envelopes 使得原来的问题转化为LIS
排序方法是对宽正序排列，对相同的宽的元素根据高倒序排列，保证我们最后的LIS中的元素不会有重复的宽
 */
function find(nums, target) {
    let l = 0, r = nums.length-1;
    while (l <= r) {
        let mid = (l+r) >> 1;
        if (mid == l) {
            if (nums[l] >= target) return l;
            else return r;
        }
        if (nums[mid] >= target) r = mid;
        else l = mid;
    }
}
var maxEnvelopes = function(envelopes) {
    envelopes.sort((a, b) => {
        if (a[0] < b[0]) return -1;
        else if (a[0] > b[0]) return 1;
        else return b[1] - a[1];
    }); // 重构原数组

    let dp = [envelopes[0][1]];
    for (let i = 1; i <= envelopes.length-1; i++) {
        let target = 0;
        if (envelopes[i][1] > dp.at(-1)) dp.push(envelopes[i][1]);
        else {
            target = find(dp, envelopes[i][1]);
            dp[target] = envelopes[i][1];
        }
    }
    return dp.length;
};
console.log(maxEnvelopes([[15,8],[2,20],[2,14],[4,17],[8,19],[8,9],[5,7],[11,19],[8,11],[13,11],[2,13],[11,19],[8,11],[13,11],[2,13],[11,19],[16,1],[18,13],[14,17],[18,19]]));
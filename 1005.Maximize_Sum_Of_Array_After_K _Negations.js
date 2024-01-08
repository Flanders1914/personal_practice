/**
1005. Maximize Sum Of Array After K Negations
思路：
先将nums排序，按从小到大将负数转化为正数
最后如果 k == 0 或者 k 为偶数 即 k % 2 == 0 返回转换后的nums的和
若 k % 2 == 1 选择绝对值最小的那个数变成负数

BTW：
这道题如果每个num只能选一次就有点意思，因为可以用 quick_select算法
选出最小的k个数，且平均时间复杂度为O(n)
 */
var largestSumAfterKNegations = function(nums, k) {
    nums.sort((a,b) => a-b);
    let res = 0;
    let min = Math.abs(nums[0]);
    for (let i = 0; i <= nums.length-1; i++) {
        min = Math.min(min, Math.abs(nums[i]));
        if (nums[i] < 0) {
            nums[i] = -nums[i];
            k--;
        }
        if (k == 0) break;
    }

    for (let num of nums) {
        res += num;
    }

    if (k % 2) {
        return res - 2*min;
    } else return res;
};

let nums = [2,-3,-1,5,-4], k = 2;
console.log(largestSumAfterKNegations(nums, k));
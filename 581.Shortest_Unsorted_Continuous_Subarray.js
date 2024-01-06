/**
581. Shortest Unsorted Continuous Subarray
利用单调栈的解法 时间复杂度O(n)
两次循环一次是寻找区间左边界，一次是寻找区间右边界
以寻找左边界为例
从左到右迭代数组
若当前元素nums[i] >= 栈顶 则该nums[i]和坐标i同时进栈，否则出栈到nums[i] >= 栈顶 或空栈
出栈元素中坐标最小的为左侧边界
下面的程序有优化，优化为只有当 a == 默认值 时才有新元素入栈
这样最后一个出栈的元素为右边界
 */
var findUnsortedSubarray = function(nums) {
    let stack = [[nums[0], 0]];
    let a = nums.length;
    for (let i = 1; i <= nums.length-1; i++) {
        if (stack.at(-1)[0] <= nums[i]) {
            if (a == nums.length) stack.push([nums[i], i]);
        } else {
            while (stack.length && (stack.at(-1)[0] > nums[i])) {
                a = stack.pop()[1];
            }
            if (stack.length == 0) break;
        }
    }

    if (a == nums.length) return 0;

    let b = -1;
    stack = [[nums.at(-1), nums.length-1]];
    for (let i = nums.length-2; i >= 0; i--) {
        if (stack.at(-1)[0] >= nums[i]) {
            if (b == -1) stack.push([nums[i], i]);
        } else {
            while (stack.length && (stack.at(-1)[0] < nums[i])) {
                b = stack.pop()[1];
            }
            if (stack.length == 0) break;
        }
    }

    return b - a+1;
};

console.log(findUnsortedSubarray([2,6,4,8,10,9,15]));
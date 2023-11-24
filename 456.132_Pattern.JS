/**
456. 132 Pattern
这道题的破题在于从右往左搜索
思路1：leftmin数组加上stack
先生成leftmin数组，然后从右往左迭代
每次迭代：
先清空stack中num <= leftmin[i] 的所有项
然后比较当前nums[i] 是否大于 stack顶部的num项，若是则返回true
若不是，如果当前nums[i] > leftmin[i] 将[nums[i], leftmin[i]]入栈
即这个栈是一个单调递减栈，并且所有元素都满足大于当前的leftmin[i]，只要下一个元素大于顶部的
元素的num，那么就找到了132
由于每个元素只可能进出栈一次，所以时间复杂度为O(n)

思路2：从右到左，我们每次生成一个满足 nums[j] > nums[k] j < k 的最大nums[k] 
若下一个nums[i] 小于该值，那么返回true
这样的值我们可以利用顶部最小栈实现，
若当前nums[i] > stack顶部，stack出栈到nums[i] <= stack顶，最后一个出栈的元素为满足条件的最大num[k]
若当前nums[i] <= stack顶部，nums[i] 入栈
 */
/*
var find132pattern = function(nums) {
    let leftMin = new Array(nums.length).fill(0);
    leftMin[0] = nums[0]; // 最左端无leftmin
    for (let i = 1; i <= nums.length-1; i++) {
        leftMin[i] = Math.min(nums[i-1], leftMin[i-1]);
    }
    let stack = [];
    for (let i = nums.length-1; i >= 1; i--) {
        while (stack.length && stack.at(-1)[0] <= leftMin[i]) stack.pop();
        if (stack.length && nums[i] > stack.at(-1)[0]) return true;
        if (nums[i] > leftMin[i]) stack.push([nums[i], leftMin[i]]);
    }
    return false;
};
*/
var find132pattern = function(nums) {
    let stack = [];
    let max_k = -Number.MAX_VALUE;
    for (let i = nums.length-1; i >= 0; i--) {
        if (nums[i] < max_k) return true;
        while (stack.length && stack.at(-1) < nums[i]) max_k = stack.pop();
        stack.push(nums[i]);
    }
    return false;
};
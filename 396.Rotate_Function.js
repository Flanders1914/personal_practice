/**
396. Rotate Function
方法：类似dp
我们可以找到
F(i) 与 F(i-1)的关系
对于 i > 0
F(i) 第一项为 F(i-1) 的最后一项 为 原nums的倒数第i项
所以 F(i) = F(i-1) - (n-1)*nums[n-i] + sum - nums[n-i]
F(i) = F(i-1) + sum - n*nums[n-i];
sum为所有元素的和
 */
var maxRotateFunction = function(nums) {
    let res = 0;
    let sum = 0;
    if (nums.length == 1) return 0;
    for (let i = 0; i <= nums.length-1; i++) {
        res += nums[i] * i;
        sum += nums[i];
    }

    let index = nums.length;
    let pre = res;
    let current = 0;
    for (let i = 1; i <= nums.length-1; i++) {
        index--;
        current = pre + sum - (nums.length)*nums[index];
        res = Math.max(res, current);
        pre = current;
    }
    return res;
};
console.log(maxRotateFunction([4,3,2,6]));
/**
503. Next Greater Element II
思路：从最大的点开始利用stack生成next greater element
 */
var nextGreaterElements = function(nums) {
    const res = new Array(nums.length).fill(-1);
    let index = 0;
    let max = nums[0];
    for (let i = 1; i <= nums.length-1; i++) {
        if (max < nums[i]) {
            max = nums[i];
            index = i;
        }
    }
    let stack = [nums[index]];
    for (let i = index-1; i >= 0; i--) {
        while (stack.length && (stack.at(-1) <= nums[i])) {
            stack.pop();
        }
        res[i] = (stack.length > 0)? stack.at(-1) : -1;
        stack.push(nums[i]);
    }
    for (let i = nums.length-1; i > index; i--) {
        while (stack.length && (stack.at(-1) <= nums[i])) {
            stack.pop();
        }
        res[i] = (stack.length > 0)? stack.at(-1) : -1;
        stack.push(nums[i]);
    }
    return res;
};
console.log(nextGreaterElements([1,2,1]));
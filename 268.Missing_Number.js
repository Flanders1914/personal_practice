/**
268. Missing Number
思路：利用循环排序实现 时间复杂度O(n) 空间复杂度O(1)
先在数组中末尾添加-1代替missing number
利用循环排序(遇到-1跳过)排序
最后在数组中寻找-1的坐标
 */
var missingNumber = function(nums) {
    let n = nums.length;
    nums.push(-1);
    for (let i = 0; i <= n-1; i++) {
        if (nums[i] == i || nums[i] == -1) continue;
        else {
            while (nums[i] != i && nums[i] != -1) {
                let tempo = nums[nums[i]];
                nums[nums[i]] = nums[i];
                nums[i] = tempo;
            }
        }
    }
    for (let i = 0; i <= n; i++) {
        if (nums[i] == -1) return i;
    }
};

console.log(missingNumber([3,0,1]));
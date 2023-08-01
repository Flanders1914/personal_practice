/*
41. First Missing Positive
思路：
没看起来那么简单，因为限制时间复杂度O(n) 空间复杂度O(1)
这里使用了循环排序算法(Cyclic Sort):
循环排序模式描述了一种解决包含给定范围数字的数组问题的方法。
具体来说，遍历数组的每一位数字，如果当前数字不在正确的索引上，
则将其与正确的索引交换。优点是线性时间复杂度，O(1)空间复杂度

两种可能使用循环排序的场景：
1. 问题涉及给定范围的排序数组
2. 问题需要找出给定范围的数组中的缺失/重复/最小值

该题目的注意点：
1. 需要有个中间变量存储nums[index]，否则在交换时会出现索引错误
2. 注意nums会有重复的元素，当需要交换的元素相等，需要跳过交换否则会
出现死循环
3. 对于在范围外的元素需要跳过，避免出现索引错误
4. 若没有缺失值 输出nums.length +1
 */
var firstMissingPositive = function(nums) {
    
    let len = nums.length;
    let index = 0;
    let k = 0 ;

    while (index <= len -1) {
        if (nums[index] == index +1 || nums[index] <= 0 || 
            nums[index] > len || nums[index] === nums[nums[index] -1]) {
            index++;
            continue;
        }
        else {
                k = nums[index];
                nums[index] = nums[k -1];
                nums[k -1] = k;
        }
    }

    for (let i = 0; i <= len -1; i++) {
        if (nums[i] != i + 1) return (i+1);
    }

    return len + 1;
};
console.log(firstMissingPositive([2,2]));
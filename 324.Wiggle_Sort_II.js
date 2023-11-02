/**
324. Wiggle Sort II
思路：排序后交叉赋值
注意最大的值必须保证其坐标可以抵消两个较小值
所以最大值最好从1开始赋值，不能出现在末尾
否则如 [4,5,5,6] 就会出错
存在in O(n) time or in-place with O(1) extra space的解
 */
var wiggleSort = function(nums) {
    nums.sort((a,b) => a-b);
    let temp = nums.slice();
    let index = 1;
    let i = nums.length-1;
    while (index <= nums.length -1) {
        nums[index] = temp[i];
        i--;
        index += 2;
    }

    index = 0;
    while (i >= 0) {
        nums[index] = temp[i];
        i--;
        index += 2;
    }
};

let nums = [4,5,5,6];
wiggleSort(nums);
console.log(nums);
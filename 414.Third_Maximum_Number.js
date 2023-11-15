/**
414. Third Maximum Number
思路：注意是distinct maximum
方法是记录前一个值pre
若num和pre不同改变pre
改变两次后返回当前num
 */
var thirdMax = function(nums) {
    nums.sort((a,b) => b-a);
    let count = 1;
    let pre = nums[0];
    for (let num of nums) {
        if (pre != num) {
            count++;
            pre = num;
        }
        if (count == 3) return num;
    }
    return nums[0];
};
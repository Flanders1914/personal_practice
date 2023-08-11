/*
80. Remove Duplicates from Sorted Array II
思路：
要求in_place 修改
利用while循环，和一个count计算同一元素出现的次数
*/
var removeDuplicates = function(nums) {
    let count = 0;
    let i = 0;
    while (i <= nums.length -1) {
        if (i && nums[i] == nums[i-1]) {
            count++;
        } else count = 1;
        if (count == 3) {
            nums.splice(i, 1);
            count--;
        } else i++;
    }
    return;
};

let nums = [0,0,1,1,1,1,2,3,3,3,3,3]
removeDuplicates(nums);
console.log(nums);
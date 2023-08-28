/*
136. Single Number
思路位运算：XOR
A XOR B XOR B =  A
另一种思路：统计二进制化后所有数每一位出现1的次数，如果出现奇数次1，答案数字该位设置成0
*/
var singleNumber = function(nums) {
    for (let i = 1; i <= nums.length-1; i++) {
        nums[0] = nums[0] ^ nums[i];
    }
    return nums[0];
};

console.log(singleNumber([4,1,2,1,2]));
/**
477. Total Hamming Distance
思路：位运算
利用count0 count1统计每个数组第k位0和1的个数
res += count0*count1
 */
var totalHammingDistance = function(nums) {
    let res = 0;
    for (let k = 1; k <= 32; k++) {
        let count0 = 0;
        let count1 = 0;
        for (let i = 0; i <= nums.length-1; i++) {
            count0 += !(nums[i] & 1);
            count1 += nums[i] & 1;
            nums[i] >>= 1;
        }
        res += count1 * count0;
    }
    return res;
};
console.log(totalHammingDistance([4,14,4]));
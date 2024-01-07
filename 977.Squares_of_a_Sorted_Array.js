/**
977. Squares of a Sorted Array
思路：有点像归并排序中的merge步骤
利用双指针（一左一右）从边缘向中心迭代
 */
var sortedSquares = function(nums) {
    let l = 0, r = nums.length-1;
    let res = new Array(nums.length).fill(0);
    let index = nums.length-1;

    while (index >= 0) {
        if (Math.abs(nums[l]) >= Math.abs(nums[r])) {
            res[index--] = nums[l] * nums[l];
            l++;
        } else {
            res[index--] = nums[r] * nums[r];
            r--;
        }
    }

    return res;
};

console.log(sortedSquares([-4,-1,0,3,10]));
/**
553. Optimal Division
sb题目
 */
var optimalDivision = function(nums) {
    if (nums.length < 3) {
        if (nums.length == 1) return nums[0] + '';
        else return nums[0] + "/" + nums[1];
    }
    let first = nums.shift();
    let res = nums.join("/");
    res = first + "/(" + res + ")";
    return res;
};
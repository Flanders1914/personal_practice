/*
189. Rotate Array
注意最后一个数据量比较大，时间复杂度在O(n)以上会超时
*/
var rotate = function(nums, k) {
    k %= nums.length;
    let tempo = nums.splice(nums.length-k, k);
    return nums.unshift(...tempo);
};

let nums = [1,2,3,4,5,6,7];
rotate(nums,3);
console.log(nums);
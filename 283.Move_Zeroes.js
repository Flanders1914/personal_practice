/*
283. Move Zeroes
用while循环删除0
*/
var moveZeroes = function(nums) {
    let i = 0;
    let count = 0;
    while (i <= nums.length-1) {
        if (nums[i] == 0) {
            nums.splice(i,1);
            count++;
        } else i++;
    }
    for (let k = 1; k <= count; k++) {
        nums.push(0);
    }
    return;
};
let nums = [0,1,0,3,12];
moveZeroes(nums);
console.log(nums);
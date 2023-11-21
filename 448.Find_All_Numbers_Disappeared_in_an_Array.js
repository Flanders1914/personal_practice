/**
448. Find All Numbers Disappeared in an Array
思路：cyclic sort
 */
var findDisappearedNumbers = function(nums) {
    let index = 0;
    while (index <= nums.length -1) {
        while (nums[index]-1 != index) {
            if (nums[nums[index]-1] == nums[index]) {
                break;
            }
            let temp = nums[index]; // 注意第二步nums[index]已经发生了变化不能作为索引
            nums[index] = nums[temp-1];
            nums[temp-1] = temp;
        }
        index++;
    }
    res = [];
    for (let i = 0; i <= nums.length-1; i++) {
        if (i+1 != nums[i]) res.push(i+1);
    }
    return res;
};
console.log(findDisappearedNumbers([4,3,2,7,8,2,3,1]));
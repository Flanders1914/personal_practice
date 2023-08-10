/*
75. Sort Colors
思路：
1. 将0放在数组左侧，将2放在数组的右侧
2. red_right 是 红色区域右侧第一个元素
3. blue——left 是 蓝色区域第一个元素

注意：
1. index进入蓝色区域内循环退出
2. 当 index == red_right 并且 nums[red_right] = 0; index和red_right都要向前移动一格
*/
var sortColors = function(nums) {
    let red_right = 0, blue_left = nums.length -1;
    let index = 0;
    
    while (index <= nums.length -1) {
        // 当 index 进入 全是蓝色的区域时退出
        if (index > blue_left) return;
        // 0(red)放在左侧；2（blue）放在右侧
        if (nums[index] == 0) {
            let temp = nums[index];
            nums[index] = nums[red_right];
            nums[red_right] = temp;
            if (red_right == index) {
                index++;
                red_right++;
            } else {
                red_right++;
            }
        }
        else if (nums[index] == 2) {
            let temp = nums[index];
            nums[index] = nums[blue_left];
            nums[blue_left] = temp;
            blue_left--;

        }
        //1(white) index 向前移动
        if (nums[index] == 1) index++;
    }
    return;
};

let nums = [2,0,2,1,1,0];
sortColors(nums);
console.log(nums);

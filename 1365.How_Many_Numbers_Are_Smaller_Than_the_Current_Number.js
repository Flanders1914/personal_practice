/**
1365. How Many Numbers Are Smaller Than the Current Number
利用排序和映射减小时间复杂度到 O(nlogn)
 */
var smallerNumbersThanCurrent = function(nums) {
    let arr = [];
    for (let i = 0; i <= nums.length-1; i++) {
        arr.push([nums[i], i]);
    }
    arr.sort((a, b) => (a[0] - b[0]));
    for (let i = 0; i <= arr.length-1; i++) {
        if (i && arr[i][0] == arr[i-1][0]) {
            nums[arr[i][1]] = nums[arr[i-1][1]];
            continue;
        }
        nums[arr[i][1]] = i;
    }
    return nums;
};
console.log(smallerNumbersThanCurrent([8,1,2,2,3]));
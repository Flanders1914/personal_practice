/*
162. Find Peak Element
变形版本的二分查找
考虑点的斜率
注意从第二个点和倒数第二个点开始找，避免处理端点的麻烦
由于所给的数据都能找到peak所以没写没找到的处理，这个程序给没有peak的数据会死循环
*/
var findPeakElement = function(nums) {
    if (nums.length == 1) return 0;
    if (nums[0] > nums[1]) return 0;
    if (nums[nums.length-1] > nums[nums.length-2]) return nums.length-1;

    let l = 1;
    let r = nums.length-2;

    while (true) {
        let mid = (l+r) >> 1;
        if (nums[mid] > nums[mid-1] && nums[mid] > nums[mid+1]) return mid;
        else if (nums[mid] > nums[mid-1] && nums[mid] < nums[mid+1]) l = mid+1;
        else if (nums[mid] < nums[mid-1] && nums[mid] > nums[mid+1]) r = mid;
        else l = mid+1;
    }
};
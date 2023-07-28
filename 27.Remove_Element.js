/*
27. Remove Element
与26. Remove Duplicates from Sorted Array类似
只需注意 in-place修改nums即可
 */
var removeElement = function(nums, val) {
   let j = 0;
   for (let num of nums) {
    if (num != val) {
        nums[j] = num;
        j++
    }
   }
   return j;
};

/**
220. Contains Duplicate III
思路：bucket sort 和 sliding window
用hashtable实现bucket sort
将nums[i] 整除以(valueDiff+1) 得到相应的区间号码 bucket，若 nums[i]<0 bucket需要减一 （考虑-3和2 size =4）
如果hash中已经有该bucket说明该区间已经存在一个值，return true；
否则 将 hash添加该bucket项， 比较该bucket项前后的数值是否在范围内
当某个num离开sliding window 需要离开buckets时，先计算它的bucket号码，然后删除相应hash项即可
 */
var containsNearbyAlmostDuplicate = function(nums, indexDiff, valueDiff) {
   let hash = new Map();
   for (let i = 0; i <= indexDiff; i++) {
    let bucket = 0;
    bucket = Math.floor(nums[i]/(valueDiff +1)); // 如果在其他语言中需要对nums[i]正负进行分类讨论
    if (hash.has(bucket)) return true;
    else {
        hash.set(bucket, nums[i]);
        if ((hash.has(bucket-1) && (nums[i] - hash.get(bucket-1) <= valueDiff)) ||
        ((hash.has(bucket+1) && (hash.get(bucket+1) - nums[i] <= valueDiff)))) return true;
    }
   }
   for (let i = indexDiff +1; i <= nums.length -1; i++) {
    let bucket = Math.floor(nums[i - indexDiff - 1]/(valueDiff +1));;
    hash.delete(bucket);
    bucket = Math.floor(nums[i]/(valueDiff +1));
    if (hash.has(bucket)) return true;
    else {
        hash.set(bucket, nums[i]);
        if ((hash.has(bucket-1) && (nums[i] - hash.get(bucket-1) <= valueDiff)) ||
        ((hash.has(bucket+1) && (hash.get(bucket+1) - nums[i] <= valueDiff)))) return true;
    }
   }
   return false;
};
let nums = [1,5,9,1,5,9], indexDiff = 2, valueDiff = 3;
console.log(containsNearbyAlmostDuplicate(nums, indexDiff, valueDiff));
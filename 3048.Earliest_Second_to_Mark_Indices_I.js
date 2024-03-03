/**
3048. Earliest Second to Mark Indices I
思路: 二分法+贪心
我们假定一个天数
然后判断用这个天数能不能把所有的nums标记
如果能试图向左搜索，试图用更少的天
不能向右搜索，试图用更多的天
这个贪心也不是很难
 */
var earliestSecondToMarkIndices = function(nums, changeIndices) {
   
   const search = function(ceil) {
      let set = new Set();
      let is_last = new Array(ceil).fill(false);
      for (let i = 1; i <= nums.length; i++) {
         set.add(i);
      }

      for (let i = ceil; i >= 0; i--) {
         if (set.has(changeIndices[i])) {
            set.delete(changeIndices[i]);
            is_last[i] = true;
            if (set.size == 0) break;
         }
      }

      if (set.size > 0) return -1;

      let daysOnHand = 0;
      for (let i = 0; i <= ceil; i++) {
         daysOnHand++;
         if (is_last[i]) {
            daysOnHand = daysOnHand - nums[changeIndices[i]-1] -1;
            if (daysOnHand < 0) return -1;
         }
      }

      return 1;
   }

   let r = changeIndices.length-1;
   let l = 0;

   if (search(r) == -1) return -1;

   while (l < r) {
      let mid = (l+r) >> 1;
      let res = search(mid);
      if (res == -1) {
         l = mid+1;
      } else {
         r = mid;
      }
   }

   return l+1;
};

console.log(earliestSecondToMarkIndices([1,3], [1,1,1,2,1,1,1]));
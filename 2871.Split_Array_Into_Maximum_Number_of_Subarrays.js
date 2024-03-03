/**
2871. Split Array Into Maximum Number of Subarrays
思路： 位运算+贪心

首先我们可以确定题目要求的最小值，由于和运算的性质，最小值一定等于所有数的求&运算
然后我们的贪心思路是，从左向右当一组nums元素的&运算结果的二进制1位都包含在最小值的二进制1位时
即 cur & min == cur
我们将这一段nums元素分成一组，并将cur的二进制1位从min中删去， 即 min = min - (min & cur)
这样保证分组不会使各组的和 > 最初的min

注意尾部处理
如果在尾部 cur & min != cur 表示尾部的元素应该属于前一组中，由于我们未正式将尾部元素分组（res++），所以不需要处理
 */
var maxSubarrays = function(nums) {
   let min = nums[0];
   for (let i = 1; i <= nums.length-1; i++) {
      min &= nums[i];
   }

   let res = 0;
   let cur = nums[0];
   for (let i = 0; i <= nums.length-1; i++) {
      cur &= nums[i];
      if ((cur & min) == cur) {
         res++;
         min = min - (min & cur);
         if (i == nums.length-1) return res;
         cur = nums[i+1];
      }
   }

   return res;
};

console.log(maxSubarrays([22,21,29,22]));

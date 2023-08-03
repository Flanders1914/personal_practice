/*
53. Maximum Subarray
思路：
1. 遍历nums中每一个元素
2. 对于 任一元素n = nums[i]
3. 若 n > 0 
  (1)当前面的count>0 n应该加入这个子序列中；
  (2)当前面的count<=0 n应该重新开始一个子序列，count = n;
4. 若 n < 0
  (1)需要比较前面的序列count 与 ans 的大小，并将较大值赋值入ans
  (2)若前面的count>0 n可以加入这个子序列
  (3)若前面的count<=0 n需要重新启动一个序列，count = n;
5. 最后不要忘了把ans和末尾的count做一次比较

注意：一头一尾，从第二个元素开始，因为第一个元素已经进入count，在尾部的count不要忘记
*/

var maxSubArray = function(nums) {
    let count = nums[0];
    let ans = count;

    for (let i = 1; i <= nums.length -1; i++) {
        let n = nums[i];
        if (n > 0) {
            if (count < 0 ) count = n;
            else count += n;
        } else{
            if (count > 0) {
                ans = (ans < count) ? count : ans;
                count += n;
            } else {
                ans = (ans < count) ? count : ans;
                count = n;
            } 
        }
    }

    ans = (ans < count) ? count : ans;
    return ans;
};

console.log(maxSubArray([5,4,-1,7,8]));
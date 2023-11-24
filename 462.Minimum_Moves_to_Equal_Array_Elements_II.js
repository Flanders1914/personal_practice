/**
462. Minimum Moves to Equal Array Elements II
方法1 ：观察得到目标target大小应该与nums中某一项相等，因为取[a,b]中间的点
肯定小于取点b或a中某一个
我们先将每个数按照大小整理（相同数字放到一起）
然后令target从最小的数开始
left为target左侧的数字数目，right为target右侧数字数目
target每向右移动就要多走 走的步长*(left+原target数目-right)
方法2：
对于 a<b，若target在a,b中间，那么a,b走到target的总步数=b-a
若target在[a,b]外，那么走的步数 = b-a+t > b-a
所以对于a,b对，target在[a,b]间最小
那么将nums排序，左右成对，取整个数组的中值为target
 */
/*
var minMoves2 = function(nums) {
    let hash = new Map();
    for (let num of nums) {
        if (hash.has(num)) hash.set(num, hash.get(num)+1);
        else hash.set(num, 1);    
    }
    let arr = Array.from(hash);
    arr.sort((a, b) => a[0] - b[0]);
    let left = 0;
    let right = 0;
    let res = 0;
    for (let i = 1; i<= arr.length-1; i++) {
        right += arr[i][1];
        res += (arr[i][0]-arr[0][0]) * arr[i][1];
    }
    for (let i = 1; i <= arr.length-1; i++) {
        left += arr[i-1][1];
        res = Math.min(res, res-(right-left)*(arr[i][0]-arr[i-1][0]));
        right -= arr[i][1];
    }
    return res;
};
*/
/**
 * @param {number[]} nums
 * @return {number}
 */
var minMoves2 = function(nums) {
  nums.sort((a, b) => a - b);
  let l = 0, r = nums.length-1, res = 0;
  while (l < r) {
    res += nums[r--] - nums[l++];
  }
  return res;
};
console.log(minMoves2([3,0,6,2,4,7,0,0]));
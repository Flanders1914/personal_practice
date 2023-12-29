/**
565. Array Nestings
思路：本质是给定由数组组成的几个环，找到最大的那个环
我们在搜索时将当前的元素归为-1，标记已经走过的元素并作为终止条件或者作为
跳过的记号即可
 */
var arrayNesting = function(nums) {
    let res = 0;
    const dfs = function(i, step) {
      if (nums[i] == -1) return step;
      else {
        let next = nums[i];
        nums[i] = -1;
        return dfs(next, step+1);
      }
    }
    for (let i = 0; i <= nums.length-1; i++) {
        if (nums[i] == -1) continue;
      res = Math.max(res, dfs(i, 0));
    }
    return res;
};
console.log(arrayNesting([5,4,0,3,1,6,2]));
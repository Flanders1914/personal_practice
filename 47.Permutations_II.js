/*
47. Permutations II (包含值相同的元素)
和 46. Permutations 相同的思路，代码也就是比Permutations多了两步：

1. 对 nums 进行排序，相同值的nums会排在一起
2. 在子函数内每次迭代前，判断当前元素是否与上一个元素相同，保证在排列的
每一个位置相同的元素只出现一次，避免出现重复

 */

function make_permutation(last, nums, ans) {

    if (nums.length == 1) {
        last.push(nums[0]);
        ans.push(last);
        return;
    } else {
        for (let i = 0; i <= nums.length -1;i++) {
            if (i && nums[i] == nums[i-1]) continue;
            let current = last.slice();
            current.push(nums[i]);
            let next = nums.slice();
            next.splice(i, 1);
            make_permutation(current,next,ans);
        }
    }

    return;
}


var permuteUnique = function(nums) {
    let ans = [];
    nums.sort((a,b) => a-b)
    make_permutation([] , nums, ans);
    return ans;
};

console.log(permuteUnique([2,1,1]));
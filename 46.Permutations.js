/*
46. Permutations
计算排列，使用递归生成
原理不复杂，每一次将一个元素塞入生成的排列中并从数组中删除
对删除一个元素后的数组递归
注意：
由于JS的闭包特性和参数传递特性，需要在每一次递归中生成last的副本
current 和 nums的副本next。在last和nums上直接处理会发生错误
另外 arr.push() 不能嵌套使用
 */

function make_permutation(last, nums, ans) {

    if (nums.length == 1) {
        last.push(nums[0]);
        ans.push(last);
        return;
    } else {
        for (let i = 0; i <= nums.length -1;i++) {
            let current = last.slice();
            current.push(nums[i]);
            let next = nums.slice();
            next.splice(i, 1);
            make_permutation(current,next,ans);
        }
    }

    return;
}


var permute = function(nums) {
    let ans = [];
    make_permutation([] , nums, ans);
    return ans;
};

console.log(permute([1,2,3]));
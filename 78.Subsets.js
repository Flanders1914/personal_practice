/**
78. Subsets
求子集，思路是排序后化为求n+1次组合
原题中元素都是unique的
*/
var subsets = function(nums) {
    let ans = [];
    nums.sort((a,b) => a-b);

    const combine = function(begin, end, k, previous) {
        if (k == 0) {
            ans.push(previous.slice());
        }
        for (let i = begin; i <= end; i++) {
            previous.push(nums[i]);
            combine(i+1, end, k-1, previous);
            previous.pop(nums[i]);
        }
    };  

    for (let i = 0; i <= nums.length; i++) combine(0, nums.length -1, i,[]);

    return ans;
};

let nums = [1,2,3];
for (row of subsets(nums)) console.log(row);
/**
90. Subsets II
思路：利用递归分别生成有k个元素的子集，0<=k<=nums.length
注意：nums.push()的是previous的复制，一定要加slice()
 */
var subsetsWithDup = function(nums) {
    let ans = [];
    nums.sort((a,b)=> a-b);


    const make_subset = function(previous, nums, index, k) {
        if (k == 0) {
            ans.push(previous.slice());
            return;
        }
        if (index > nums.length -1) return;

        for (let i = index; i <= nums.length -1; i++) {
            if ((i !== index) && nums[i] == nums[i-1]) continue;
            else {
                previous.push(nums[i]);
                make_subset(previous, nums, i+1, k-1);
                previous.pop();
            }
        }
    };


    for (let i = 0; i <= nums.length; i++) {
        make_subset([], nums, 0, i);
    }
    return ans;
};

let arr = [1,2,2];
for (let row of subsetsWithDup(arr)) console.log(row);
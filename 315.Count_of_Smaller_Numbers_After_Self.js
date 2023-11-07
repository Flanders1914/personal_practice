/**
315. Count of Smaller Numbers After Self
思路：利用 merging sort的性质
merging sort 将 nums 通过二分分成若干个区间
我们在merging sort 基础上做一件事，即统计对于left区间内任何一个
元素在right区间内比其小的元素的数量
注意：1. 元素要包含一个指向原位置坐标的映射
    2. 避免重复的元素被统计入
这道题好像可以直接用二分查找做
另外一开始试图用维持bst树的方法，但是维持bst统计比较小的元素
的开销比较大且不稳定，也非常难写
 */
var countSmaller = function(nums) {
    let res = new Array(nums.length).fill(0);
    let arr = new Array(nums.length).fill().map(() => new Array(2).fill(0));
    for (let i = 0; i <= nums.length-1; i++) {
        arr[i][0] = nums[i];
        arr[i][1] = i;
    }

    let mergingSort = function(l, r, nums, res) {
        if (l == r) return;
        let mid = (l + r) >> 1;
        mergingSort(mid+1, r, nums, res);
        mergingSort(l, mid, nums, res);
        let temp = [];
        let i = l;
        let j = mid+1;
        let count = 0; // count 统计对于nums[i]的原来位置nums[i][1] right部分中比其小的数量
        while (i <= mid && j <= r) {
            if (nums[i][0] <= nums[j][0]) {
                temp.push(nums[i]);
                res[nums[i][1]] += count;
                i++;
            } else {
                temp.push(nums[j]);
                j++;
                count++;
            }
        }
        while (i <= mid) {
            temp.push(nums[i]);
            if (nums[i][0] > nums[r][0]) res[nums[i][1]] += count;
            i++;
        }
        while (j <= r) {
            temp.push(nums[j])
            j++;
        }
        for (let k = l; k <= r; k++) {
            nums[k] = temp[k-l];
        }
        return;
    };
    mergingSort(0, arr.length-1, arr, res);
    return res;
};
console.log(countSmaller([65,36,100,41]));

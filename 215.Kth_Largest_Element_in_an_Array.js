/*
215. Kth Largest Element in an Array
思路：quick select
类似quick sort 只不过我们只需要处理目标所在的那个部分
下面的程序可以略微优化，即传递目标元素在数组的绝对坐标
可以简编程和减少一点点运算量
不过这个程序在leetcode跑得离奇地慢，不知道是什么原因
*/
var findKthLargest = function(nums, k) {
    const swap = (i, j, nums) => {
        let tempo = nums[i];
        nums[i] = nums[j];
        nums[j] = tempo;
    };

    const quickSelect = function(nums, l, r, k) {
        if (l == r) return nums[l];
        let pivot = Math.floor(Math.random()*(r-l+1)) + l;
        swap(pivot, l, nums);
        let index = l;
        for (let i = l+1; i <= r; i++) {
            if (nums[i] <= nums[l]) {
                index++;
                swap(i, index, nums);
            }
        }
        swap(l, index, nums);
        if ((r-index) == k-1) return nums[index];
        else if ((r-index) > k-1) return quickSelect(nums,index+1, r, k);
        else return quickSelect(nums, l, index-1, k-(r-index)-1);
    };

    return quickSelect(nums, 0, nums.length-1, k);
};


console.log(findKthLargest([3,2,3,1,2,4,5,5,6], 4));
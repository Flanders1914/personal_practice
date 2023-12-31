/**
493. Reverse Pairs
思路：
1. merging sort
见下面的注释

2. 
 */
var reversePairs = function(nums) {
    const is_reverse = (a, b) => {
        if (b > 1073741824) return false;
        else if (b < -1073741824) return true;
        else if (a > (b*2)) return true;
        else return false;
    };

    let res = 0;
    
    const merging_sort = function(nums, l, r) {
        if (l >= r) return;
        let mid = (l + r) >> 1; 
        merging_sort(nums, l, mid);
        merging_sort(nums, mid+1, r);
        // count ans 计算横跨左右区间的 reverse pair
        // 由于左右都排好了序，所以可以用下面的方法，对于当前左区间nums[i] 将
        // 右区间index 迭代到 nums[i] > nums[index]*2 不成立，利用count存储成立的对个数
        // res += count 如果当前nums[i] 无法使得 index 迭代，但由于 nums[i] >= nums[i-1]
        // 之前的count代表的对也成立，res += count
        let count = 0;
        let index = mid+1;
        for (let i = l; i <= mid; i++) {
            while ((index <= r) && (is_reverse(nums[i], nums[index]))) {
                count++;
                index++;
            }
            res += count;
        }
        // merging 完成归并排序合并步骤
        let temp = [];
        let i = l, j = mid+1;
        while (i <= mid && j <= r) {
            if (nums[i] <= nums[j]) {
                temp.push(nums[i]);
                i++;
            } else {
                temp.push(nums[j]);
                j++;
            }
        }
        while (i <= mid) {
            temp.push(nums[i]);
            i++;
        }
        while (j <= r) {
            temp.push(nums[j]);
            j++;
        }
        for (let i = l; i <= r; i++) {
            nums[i] = temp[i-l];
        }
    };

    merging_sort(nums, 0, nums.length-1);
    return res;
};
console.log(reversePairs([1,1,-1,-1,-1,1]));
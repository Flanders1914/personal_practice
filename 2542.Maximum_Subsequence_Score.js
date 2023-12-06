/**
2542. Maximum Subsequence Score
思路：贪心
nums1 和 nums2建立映射关系并排序
初始状态选择最大的k-1个nums1
从小到大选择nums2，并将当前num2对应的num1设置为不可挑选，
若当前的num2对应的num1在选择的num1内，再向前选择一个num1，选择的num1求和乘以num2
完成res更新后从选择的num1中去除num2对应的num1
若当前的num2对应的num1在选择的num1外，将对应的num1和选择的num1相加乘以num2，更新res

原理：
我们从小到大选择num2, 并依次排除num2对应的num1，保证四个最大的num1对应的num2不会小于当前的num2

思路：2 heap
将nums1 和 nums2联合在一个list内，按照nums2的大小进行降序排序
先将list中的nums1 按照nums的降序依次进入堆
当 堆的大小 == k 用 当前nums2的值*total堆中nums1 更新res
将堆中最小的元素去除，进入下一次迭代
原理：
由于按照nums2从大到小的顺序取nums1，所以能严格保证堆中的nums1对应的最小nums2为当前的nums2
最小堆每次排出当前堆中最小的元素，保证当前堆中的nums1和为 对应nums最小值==当前nums2的最大解
 */
var maxScore = function(nums1, nums2, k) {
    let temp = [];
    let map = new Map();
    let available = new Map();
    for (let i = 0; i <= nums1.length-1; i++) {
        temp.push([nums1[i], i]);
        available.set(temp[i], true);
    }
    nums1 = temp;
    temp = [];
    for (let i = 0; i <= nums2.length-1; i++) {
        temp.push([nums2[i]]);
        map.set(temp[i], nums1[i]);
    }
    nums2 = temp;
    nums1.sort((a, b) => a[0] - b[0]);
    nums2.sort((a, b) => a[0] - b[0]);

    let res = 0;
    let total = 0;
    let set = new Set();
    let index = nums1.length-1;
    for (let count = 1; count <= k-1; count++) {
        total += nums1[index][0];
        set.add(nums1[index][1]);
        index--;
    }

    for (let num2 of nums2) {
        let target = map.get(num2);
        available.set(target, false);
        if (set.has(target[1])) {
            while (index >= 0) {
                if (available.get(nums1[index])) {
                    total += nums1[index][0];
                    set.add(nums1[index][1]);
                    index--;
                    break;
                }
                index--;
            }
            if (index == -1 && set.size < k) {
                return res;
            }
            res = Math.max(res, total*num2[0]);
            total -= target[0];
            set.delete(target[1]);
        } else {
            res = Math.max(res, (total+target[0])*num2[0]);
        }
    }
    return res;
};
let nums1 = [1,4], nums2 = [3,1], k = 2;
console.log(maxScore(nums1, nums2, k));
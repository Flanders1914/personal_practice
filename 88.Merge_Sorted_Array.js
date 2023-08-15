/**
88. Merge Sorted Array
合并排序数组
需要in-place修改 nums1
只拷贝一个nums1数组能省下一点空间
*/
var merge = function(nums1, m, nums2, n) {
    let ans = [];
    let i = 0, j = 0;
    while (i <= m -1 && j <= n -1) {
        if (nums1[i] < nums2[j]) {
            ans.push(nums1[i]);
            i++;
        } else {
            ans.push(nums2[j]);
            j++;
        }
    }

    while (i <= m -1) {
        ans.push(nums1[i]);
        i++;
    }
    while (j <= n -1) {
        ans.push(nums2[j]);
        j++;
    }

    for (let i = 0; i <= m+ n -1; i++) nums1[i] = ans[i];
    return;
};
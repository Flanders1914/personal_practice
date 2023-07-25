/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
    let m = nums1.length;
    let n = nums2.length;
    let median = parseInt((m + n)/2);
    if (median == 0) {
        if (m == 0) return nums2[0];
        else return nums1[0];
    }

    let i = 0;
    let j = 0;
    let index = 0;
    let current_num = 0;
    let last_num = 0;

    while (index != median + 1) {

        if (i < m && j < n) {
            if (nums1[i] < nums2[j]) {
                last_num = current_num;
                current_num = nums1[i];
                i++;
            } else {
                last_num = current_num;
                current_num = nums2[j];
                j++;
            }

        } else if (i >= m) {
            last_num = current_num;
            current_num = nums2[j];
            j++;
            
        } else {
            last_num = current_num;
            current_num = nums1[i];
            i++;
        }

        index++
    }

    return ((m+n)%2 == 0) ? ((last_num + current_num)/2) : (current_num);
};

console.log(findMedianSortedArrays([0,0],[0,0]));
/**
1671. Minimum Number of Removals to Make Mountain Array
思路: easy dp
 */
var minimumMountainRemovals = function(nums) {
    let n = nums.length
    let left = new Array(n).fill(n)
    let right = new Array(n).fill(n)

    left[0] = 0
    right[n-1] = 0

    for (let i = 1; i < n-1; i++) {
        for (let j = i-1; j >= 0; j--) {
            if (nums[j] < nums[i]) {
                left[i] = Math.min(left[i], i-j-1 + left[j], i-1)
            }
        }
    }

    for (let i = n-2; i >= 1; i--) {
        for (let j = i+1; j < n; j++) {
            if (nums[j] < nums[i]) {
                right[i] = Math.min(right[i], j-i-1 + right[j], n-1-i-1)
            }
        }
    }

    let res = n
    for (let i = 1; i < n-1; i++) {
        res = Math.min(left[i]+right[i], res)
    }
    return res
};

let nums = [4,3,2,1,1,2,3,1]
console.log(minimumMountainRemovals(nums))
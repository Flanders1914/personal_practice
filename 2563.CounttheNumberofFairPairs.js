/**
 * @param {number[]} nums
 * @param {number} lower
 * @param {number} upper
 * @return {number}
 */
var countFairPairs = function(nums, lower, upper) {
    let res = 0
    nums.sort((a, b) => a-b) 

    let search = function(num, l, r) {
        if (num + nums[r] < lower || num + nums[l] > upper) return 0
        let upper_bound = 0
        let lower_bound = 0
        let i = l
        let j = r
        // lower bound
        while (i <= j) {
            let mid = (i+j) >> 1
            if (mid == i) {
                if (num+nums[i] >= lower) {
                    lower_bound = i
                } else {
                    lower_bound = j
                }
                break
            }
            if (num + nums[mid] < lower) {
                i = mid+1
            } else {
                j = mid
            }
        }

        i = l
        j = r
        // upper bound
        while (i <= j) {
            let mid = (i+j) >> 1
            if (mid == i) {
                if (num+nums[j] <= upper) {
                    upper_bound = j
                } else {
                    upper_bound = i
                }
                break
            }
            if (num + nums[mid] > upper) {
                j = mid-1
            } else {
                i = mid
            }
        }

        return upper_bound-lower_bound+1
    }

    for (let i = 0; i < nums.length-1; i++) {
        res += search(nums[i], i+1, nums.length-1)
    }
    return res
};

let nums = [0,1,7,4,4,5], lower = 3, upper = 6
console.log(countFairPairs(nums, lower, upper))
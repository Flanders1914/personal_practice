/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var beautifulSubsets = function(nums, k) {
    nums.sort((a, b) => a - b);
    let res = 0;
    const search = function(index, map, n) {
        if (n == 0) {
            res++;
            return;
        }
        if (nums.length - index < n) return;
        for (let i = index; i < nums.length; i++) {
            if (!(map.has(nums[i]-k)) || (map.get(nums[i]-k)) == 0) {
                if (!map.has(nums[i])) {
                    map.set(nums[i], 1);
                } else {
                    map.set(nums[i], map.get(nums[i])+1);
                }
                search(i+1, map, n-1);
                map.set(nums[i], map.get(nums[i])-1)
            }
        }
    };
    for (let len = 1; len <= nums.length; len++) {
        search(0, new Map(), len);
    }

    return res;
};
console.log(beautifulSubsets([1,2], 1));
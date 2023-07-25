/**
 * @param {number[]} nums
 * @return {number[][]}
 */

function simplified (a) {
    let simplified_a = [];
    let Dic = new Map();

    for (let num of a) {
        if (!Dic.has(num)) {
            simplified_a.push(num);
            Dic.set(num,0);
        }
    }

    return simplified_a;
}

var threeSum = function(nums) {
    let hash_table = new Map();

    for (let num of nums) {
        if (hash_table.has(num)) hash_table.set(num, hash_table.get(num) + 1);
        else hash_table.set(num, 1);
    }

    nums = simplified(nums.sort((a,b) => a-b ));
    let i = 0;
    let ans = [];

    while (i < nums.length && nums[i] <= 0) {
        let j = nums.length - 1;

        while (j >= i && nums[j] >= 0) {
            let k =0 - (nums[i] + nums[j]);

            if (k > nums[j]) break;

            if (!hash_table.has(k) || k < nums[i]) {
                j--
                continue;
            }

            if (nums[j] == 0) {

                if (hash_table.get(0) >= 3) {
                    ans.push([0,0,0]);
                    break;
                }

            } else if (nums[i] ==k || k == nums[j]) {

                if (hash_table.get(k) >= 2) {
                    ans.push([nums[i],k,nums[j]]);
                
                if (k == nums[j]) break;
                }

            } else ans.push([nums[i],k,nums[j]]);

            j--;
        }
        i++;
    }

    return ans;
};

console.log(threeSum([3,0,-2,-1,1,2]));
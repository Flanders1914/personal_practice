/*
18. 4Sum
思路：和3sum类似只不过多了一层循环嵌套
1. 排序
2. 双重循环固定两个数nums[i] nums[j],剩下的两个数在nums[j]的右侧部分从两边往中间找
3. 每一层循环做相同的事情，判断最小组合是否大于target，判断当前的nums项是否与上一次
相同，是就continue；
注意事项：
ans.push(....)后不要忘了l++,r-- 进入下一次迭代，找内部的其他解
 */

var fourSum = function(nums, target) {
    nums.sort( (a, b) => a - b );
    let ans = [];
    let sum;

    if ( nums.length < 4) return [];
    if (nums.at(-1) + nums.at(-2) + nums.at(-3) + nums.at(-4) < target) return []; 

    for (let i = 0; i < nums.length -3; i++) {
        sum = nums[i] + nums[i +1] + nums[i +2] +nums[i +3];
        if (sum > target) return ans;
        if (i && nums[i] == nums[i -1]) continue;

        for (let j = i +1; j < nums.length -2 ; j++) {
            sum = nums[i] +nums[j] +nums[j +1] + nums[j +2];
            if (sum > target) break;
            if (j != i +1 && nums[j] == nums[j -1]) continue;
            else {

                let l = j + 1;
                let r = nums.length -1;

                while (l < r) {

                    if (l != j +1 && nums[l -1] == nums[l]) {
                        l++;
                        continue;
                    }
                    if (r != nums.length -1 && nums[r] == nums[r +1]) {
                        r--;
                        continue;
                    }

                    sum = nums[i] + nums[j] + nums[l] +nums[r];
                    if (sum == target) {
                        ans.push([nums[i], nums[j], nums[l], nums[r]])
                        l++;
                        r--;
                    }
                    else if (sum < target) l++;
                    else r--;

                }

            }
        }
    }

    return ans;
};

console.log(fourSum([2,2,2,2,2], 8))
/*
164. Maximum Gap
思路：桶排序
思路：
假设数组均匀分布，此时Maximum Gap 最小
因此如果将bucket size设置成理论最小的Gap
maximum gap 只能够在跨越多个桶的临近数中取得
注意：bucket的数量可能比nums.length多
优化方案：
桶不必装下所有的数字
只需要记录最大值或者最小值就行了
*/
var maximumGap = function(nums) {
    if (nums.length == 1) return 0;
    if (nums.length == 2) return Math.abs(nums[1] - nums[0]);

    let min = Math.min(...nums);
    let max = Math.max(...nums);
    if (min == max) return 0;

    let bucket_size = Math.floor((max-min)/(nums.length-1)) || 1; //bucket size最小为1
    let buckets = [[]];
    let count  = 1;
    while (count*bucket_size + min < max) {
        count++;
        buckets.push([]);
    }

    for (let num of nums) {
        if (num == min) {
            buckets[0].push(min);
            continue;
        }
        let index = Math.ceil((num - min)/bucket_size);
        buckets[index-1].push(num);
    }

    let ans = bucket_size;
    let previous = Math.max(...buckets[0]);

    for (let i = 1; i <= buckets.length-1; i++) {
        if (buckets[i].length > 0) {
            let current = Math.min(...buckets[i]);
            ans = (ans > current-previous)? ans : current-previous;
            previous = Math.max(...buckets[i]);
        }
    }

    return ans;
};
